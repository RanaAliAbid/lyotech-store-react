import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '@/styles/Home.module.css';

import { Alert, Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import OtpInput from "react-otp-input";
import { validateUserEmailOtp } from '@/services/auth/auth.service';

export default function VerifyEmailOtp({ token, key }: { token: string, key: string }) {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    const { t } = useTranslation('verify-email');

    const router = useRouter()
    const { locale } = router
    const [loading, setLoading] = React.useState<boolean>(false)
    const [reReqresponse, setReqResponse] = React.useState<string>("")
    const [otp, setOtp] = React.useState<string>("");
    const [otpToken, setOtpToken] = React.useState<string>(token);
    const [keyToken, setKeyToken] = React.useState<string>(key);

    React.useEffect(() => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const _token = urlParams.get('token')
            const _otp = urlParams.get('code')
            const _key = urlParams.get('key')

            if(_token != null && _key != null) {
                setOtpToken(_token)
                setKeyToken(window.atob(_key))
                setOtp(_otp ?? "")
            }
            
        } catch (error) {}
    }, [])

    const proceedSubmitOtp = async () => {

        if (otp.length < 6) return false;

        setLoading(true)

        try {
            const result = await validateUserEmailOtp(otpToken, otp, keyToken)

            if (result?.status == 200) {
                setReqResponse(result?.data?.message)
                setTimeout(() => {
                    router.push(`/${locale}/auth/signin`)
                }, 200);
            } else {
                setReqResponse(result?.data?.message)
            }

        } catch (error: any) {
            setReqResponse(error?.response?.data?.message);
        }

        setLoading(false);
    }

    React.useEffect(() => {
        if (otp.length >= 6) {
            proceedSubmitOtp()
        }
    }, [otp])

    const proceedSubmitResendOtp = () => {

    }

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
                <main className={`${styles["main"]} ${styles["loginBG"]}`}>
                    <Header title={t("header1")} />
                    <div className={styles.loginBoxCenter}>
                        <Container className={styles.containerBox}>
                            <Grid container justifyContent="center" spacing={3}>
                                <Grid item sm={9} md={6} xs={12}>
                                    <div className={styles.loginBox}>
                                        <Typography variant="h2">
                                            {t("header1")}
                                        </Typography>

                                        <Typography variant="body1">
                                            {t("subHeader1")}
                                        </Typography>


                                        <form method='post'>
                                            <div className='mx-auto input-otp-code' style={{ textAlign: "center" }}>
                                                <OtpInput
                                                    value={otp}
                                                    onChange={setOtp}
                                                    inputStyle={{
                                                        gap: "1px",
                                                        margin: "auto",
                                                        padding: "10px",
                                                        width: "37px",
                                                        height: "40px",
                                                        border: "0.3px solid lightgray",
                                                        borderRadius: "10px",
                                                        color: "black",
                                                        fontSize: "1rem",
                                                        background: '#eee'
                                                    }}
                                                    numInputs={6}
                                                    placeholder="******"
                                                    renderInput={(props) => (
                                                        <input {...props} type="text" pattern="[0-9]*" />
                                                    )}
                                                />
                                            </div>

                                            <Button onClick={(e) => proceedSubmitOtp()} type='button' variant="contained" fullWidth className={`my-4 ${styles["btn"]} ${styles["btn_primary"]}`} >{t("Submit-btn")}</Button>
                                            {
                                                (reReqresponse && reReqresponse != "") && <Alert severity="error" className='mb-3'>
                                                    {reReqresponse}
                                                </Alert>
                                            }
                                        </form>


                                        <Typography variant="body1">
                                            {t("not-received-code")} <a onClick={(e) => proceedSubmitResendOtp()} href='#'> {t("resend-code-otp")} </a>
                                        </Typography>

                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}