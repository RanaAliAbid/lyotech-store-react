import * as React from 'react';
// import Head from 'next/head';
import Header from '../../common/header';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import { SignInDataValidator } from '@/services/auth/auth.types';
import { useRouter } from 'next/router';
import { fogotPasswordUser } from '@/services/auth/auth.service';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Email from '../../img/emailIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

export default function ForgotPassword() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const { t } = useTranslation('forgotpassword');

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [validator, setValidator] = React.useState<SignInDataValidator>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [reReqresponse, setReqResponse] = React.useState<string>('');

  const proceedForgotPassword = async (e: any) => {
    e.preventDefault();
    const postData = e.target;
    const dataValidate: SignInDataValidator = { email: true, password: true };
    dataValidate.email = postData[0].value == '' ? false : true;

    try {
      setReqResponse('');
      setValidator(dataValidate);

      if (!dataValidate.email) return false;

      setLoading(true);
      const result = await fogotPasswordUser({ email: postData[0].value });

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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ThemeProvider theme={theme}>
        <main className={`${styles['main']} ${styles['loginBG']}`}>
          <Header title={"Forgot Password"} />
          <div className={styles.loginBoxCenter}>
            <Container className={styles.containerBox}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item md={5} sm={8} xs={12}>
                  <div className={styles.loginBox}>
                    <Typography variant="h2">{t('header1')}</Typography>

                    <Typography variant="body1">{t('subHeader1')}</Typography>

                    <form
                      method="post"
                      onSubmit={(e) => proceedForgotPassword(e)}
                    >
                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          {t('email')}{' '}
                        </label>
                        <Email className={styles.formIcon} />
                        <Input
                          type="email"
                          className={styles.formInput}
                          placeholder={t('email')}
                        />
                      </div>
                      {validator && !validator.email && (
                        <Alert severity="error">{t('email-error')}</Alert>
                      )}

                      {reReqresponse && reReqresponse != '' && (
                        <Alert severity="error">{reReqresponse}</Alert>
                      )}

                      <div className={styles.inline}>
                        <Button
                          variant="outlined"
                          onClick={(e) => router.push('signin')}
                          href="#"
                          className={`${styles['btn']} ${styles['btn_secondary']}`}
                        >
                          {' '}
                          {t('sign-in')}
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          {' '}
                          {t('reset-password')}{' '}
                        </Button>
                      </div>
                    </form>
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
