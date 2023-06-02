import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
// import Link from '@mui/material/Link';
import Email from '../../img/emailIcon.svg';
import Password from '../../img/passwordIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { Alert, Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SignUpDataValidator } from '@/components/auth/auth.types';
import { signUpUser } from '@/components/auth/auth.service';
import { validatePassword } from '@/validators/auth.validator';
import useTranslation from 'next-translate/useTranslation';

export default function createAccount() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    const { t } = useTranslation('signup');

    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const [validator, setValidator] = React.useState<SignUpDataValidator>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const proceedSignUp = async (e: any) => {
        e.preventDefault()
        const postData = e.target;
        const dataValidate: SignUpDataValidator = { email: true, password: true, password_confirm: true }
        dataValidate.email = (postData[0].value == "") ? false : true
        dataValidate.password = (postData[1].value == "") ? false : true
        dataValidate.password = (!validatePassword(postData[1].value)) ? false : true
        dataValidate.password_confirm = (postData[2].value == "") ? false : true
        dataValidate.password_confirm = (postData[2].value != postData[1].value) ? false : true

        setValidator(dataValidate)

        if (!dataValidate.email || !dataValidate.password || !dataValidate.password_confirm) return false;

        setLoading(true)
        const result = await signUpUser({ email: postData[0].value, password: postData[1].value, password_confirm: postData[2].value })
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
                                <Grid item sm={8} md={5} xs={12}>
                                    <div className={styles.loginBox}>
                                        <Typography variant="h2">
                                            {t("header1")}
                                        </Typography>

                                        <Typography variant="body1">
                                            {t("subHeader1")}
                                        </Typography>


                                        <form method='post' onSubmit={(e) => proceedSignUp(e)}>
                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("email")} </label>
                                                <Email className={styles.formIcon} />
                                                <Input type='email' className={styles.formInput} placeholder={t("email")} />
                                            </div>
                                            {
                                                (validator && !validator.email) && <Alert severity="error">{t("email-error")}</Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("password")} </label>
                                                <Password className={styles.formIcon} />
                                                <Input type='password' className={styles.formInput} placeholder={t("password")} />
                                            </div>
                                            {
                                                (validator && !validator.password) && <Alert severity="error">
                                                    {t("password-error1")}<br />{t("password-error2")}
                                                </Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("confirm-password")} </label>
                                                <Password className={styles.formIcon} />
                                                <Input type='password' className={styles.formInput} placeholder={t("confirm-password")} />
                                            </div>
                                            {
                                                (validator && !validator.password_confirm) && <Alert severity="error">
                                                    {t("confirm-password-error")}
                                                </Alert>
                                            }

                                            <Button type='submit' variant="contained" fullWidth className={`${styles["btn"]} ${styles["btn_primary"]}`} >{t("create-account")}</Button>
                                        </form>


                                        <Typography variant="body1">
                                            {t("already-account")}  <Link href={`/${locale}/auth/signin`}> {t("sign-in")} </Link>
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
