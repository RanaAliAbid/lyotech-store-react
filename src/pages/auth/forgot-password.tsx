import * as React from 'react';
// import Head from 'next/head';
import Header from '../../common/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Email from '../../img/emailIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { Alert, Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { SignInDataValidator } from '@/components/auth/auth.types';
import { useRouter } from 'next/router';
import { fogotPasswordUser } from '@/components/auth/auth.service';
import useTranslation from 'next-translate/useTranslation';

export default function login() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    const { t } = useTranslation('forgotpassword');

    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const [validator, setValidator] = React.useState<SignInDataValidator>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const proceedForgotPassword = async (e: any) => {
        e.preventDefault()
        const postData = e.target;
        const dataValidate: SignInDataValidator = { email: true, password: true }
        dataValidate.email = (postData[0].value == "") ? false : true

        setValidator(dataValidate)

        if (!dataValidate.email) return false;

        setLoading(true)
        const result = await fogotPasswordUser({ email: postData[0].value })
    }

    return (
        <>
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
                                <Grid item md={5} sm={8} xs={12}>
                                    <div className={styles.loginBox}>
                                        <Typography variant="h2">
                                             {t("header1")}
                                        </Typography>

                                        <Typography variant="body1">
                                            {t("subHeader1")}
                                        </Typography>


                                        <form method='post' onSubmit={(e) => proceedForgotPassword(e)}>
                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("email")} </label>
                                                <Email className={styles.formIcon} />
                                                <Input type='email' className={styles.formInput} placeholder={t("email")} />
                                            </div>
                                            {
                                                (validator && !validator.email) && <Alert severity="error">{t("email-error")}</Alert>
                                            }

                                            <div className={styles.inline}>
                                                <Button variant="outlined" href="signin" className={`${styles["btn"]} ${styles["btn_secondary"]}`} >  {t("sign-in")}</Button>
                                                <Button type='submit' variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`} > {t("reset-password")} </Button>
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
    )
}
