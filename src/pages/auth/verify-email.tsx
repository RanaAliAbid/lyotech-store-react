import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '@/styles/Home.module.css';

import {
  Alert,
  AlertColor,
  Backdrop,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import OtpInput from 'react-otp-input';
import { resendUserEmailOtp, validateUserEmailOtp } from '@/services/auth/auth.service';
import Cookies from 'js-cookie';
import { useAuthContext } from '@/contexts/AuthContext';

export default function VerifyEmailOtp({
  email,
  token,
  key,
}: {
  email?: string
  token: string;
  key: string;
}) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const { t } = useTranslation('verify-email');

  const router = useRouter();
  const { locale } = router;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [reReqresponse, setReqResponse] = React.useState<string>('');
  const [alertColor, setAlertColor] = React.useState<AlertColor>('error');
  const [otp, setOtp] = React.useState<string>('');
  const [otpToken, setOtpToken] = React.useState<string>(token);
  const [keyToken, setKeyToken] = React.useState<string>(key);
  const authContext = useAuthContext();

  React.useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const _token = urlParams.get('token');
      const _otp = urlParams.get('code');
      const _key = urlParams.get('key');

      if (_token != null && _key != null) {
        setOtpToken(_token);
        setKeyToken(window.atob(_key));
        setOtp(_otp ?? '');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const proceedSubmitOtp = async () => {
    if (otp.length < 6) return false;

    setLoading(true);

    try {
      const result = await validateUserEmailOtp(otpToken, otp, keyToken);

      if (result?.status == 200) {
        setReqResponse(result?.data?.message);
        setAlertColor("success")
        authContext.login();

        // res.setHeader("Set-Cookie", [
        //   `userConnected=${"true"}; Max-Age=36000;`,
        //   `authToken=${result?.data?.data?.accessToken}; HttpOnly; Max-Age=36000;`,
        //   `refreshToken=${result?.data?.data?.refreshToken}; HttpOnly; Max-Age=36000;`,
        //   `otpToken=deleted; HttpOnly; Max-Age=0;`,
        //   `token=deleted; HttpOnly; Max-Age=0;`,
        // ]);

        router.push(`/${locale}`);
      } else {
        setReqResponse(result?.data?.message);
      }
    } catch (error: any) {
      setAlertColor("error")
      setReqResponse(error?.response?.data?.message);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    if (otp.length >= 6) {
      proceedSubmitOtp();
    }
  }, [otp]);

  const proceedSubmitResendOtp = async () => {
    try {
      setReqResponse('');

      setLoading(true);
      const result = await resendUserEmailOtp("", "");

      if (result?.status == 200) {
        console.log(result.data);

        if (result?.data?.data?.data?.jwtToken) {
          router.push(
            `/${locale}/auth/verify-email?token=${result?.data?.data?.data?.token
            }&reset-password=true&key=${window.btoa(
              result?.data?.data?.data?.jwtToken
            )}`
          );
        }
      }
    } catch (error: any) {
      setReqResponse(error?.response?.data?.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Verify Email OTP</title>
      </Head>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ThemeProvider theme={theme}>
        <main className={`${styles['main']} ${styles['loginBG']}`}>
          <Header title={"Verify Email OTP"} />
          <div className={styles.loginBoxCenter}>
            <Container className={styles.containerBox}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item sm={9} md={6} xs={12}>
                  <div className={styles.loginBox}>
                    <Typography variant="h2">{t('header1')}</Typography>

                    <Typography variant="body1">{t('subHeader1')}</Typography>

                    <form method="post">
                      <div
                        className="mx-auto input-otp-code"
                        style={{ textAlign: 'center' }}
                      >
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          inputStyle={{
                            gap: '1px',
                            margin: 'auto',
                            padding: '10px',
                            width: '37px',
                            height: '40px',
                            border: '0.3px solid lightgray',
                            borderRadius: '10px',
                            color: 'black',
                            fontSize: '1rem',
                            background: '#eee',
                          }}
                          numInputs={6}
                          placeholder="******"
                          renderInput={(props) => (
                            <input {...props} type="text" pattern="[0-9]*" />
                          )}
                        />
                      </div>

                      <Button
                        onClick={(e) => proceedSubmitOtp()}
                        type="button"
                        variant="contained"
                        fullWidth
                        className={`my-4 ${styles['btn']} ${styles['btn_primary']}`}
                      >
                        {t('Submit-btn')}
                      </Button>
                      {reReqresponse && reReqresponse != '' && (
                        <Alert severity={alertColor} className="mb-3">
                          {reReqresponse}
                        </Alert>
                      )}
                    </form>

                    <Typography variant="body1">
                      {t('not-received-code')}{' '}
                      <a onClick={(e) => proceedSubmitResendOtp()} href="#">
                        {' '}
                        {t('resend-code-otp')}{' '}
                      </a>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
