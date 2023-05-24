import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Email from '../../img/emailIcon.svg';
import Password from '../../img/passwordIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { Alert, Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SignInDataValidator } from '@/components/auth/auth.types';
import { signInUser } from '@/components/auth/auth.service';
import { validatePassword } from '@/validators/auth.validator';
import useTranslation from 'next-translate/useTranslation';


export default function signIn() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    const { t } = useTranslation('signin');
    
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const [validator, setValidator] = React.useState<SignInDataValidator>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const proceedSignIn = async (e: any) => {
        e.preventDefault()
        const postData = e.target;
        const dataValidate: SignInDataValidator = { email: true, password: true }
        dataValidate.email = (postData[0].value == "") ? false : true
        dataValidate.password = (postData[1].value == "") ? false : true
        dataValidate.password = (!validatePassword(postData[1].value)) ? false : true

        setValidator(dataValidate)

        if (!dataValidate.email || !dataValidate.password) return false;

        setLoading(true)
        const result = await signInUser({ email: postData[0].value, password: postData[1].value })
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


                                        <form method='post' onSubmit={(e) => proceedSignIn(e)}>
                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("email")} </label>
                                                <Email className={styles.formIcon} />
                                                <Input onKeyDown={(e) => setValidator({ email: true, password: true })} type='email' className={styles.formInput} placeholder={t("email")} />
                                            </div>
                                            {
                                                (validator && !validator.email) && <Alert severity="error">{t("email-error")}</Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("password")} </label>
                                                <Password className={styles.formIcon} />
                                                <Input onKeyDown={(e) => setValidator({ email: true, password: true })} type='password' className={styles.formInput} placeholder={t("password")} />
                                            </div>
                                            {
                                                (validator && !validator.password) && <Alert severity="error">
                                                     {t("password-error1")}<br />{t("password-error2")}
                                                </Alert>
                                            }

                                            <div className={styles.inline}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox size="small" />} label={t("remember-me")} />
                                                </FormGroup>

                                                <Link href={`/${locale}/auth/forgot-password`}>
                                                    {t("forgot-password")}
                                                </Link>
                                            </div>

                                            <Button type='submit' variant="contained" fullWidth className={`${styles["btn"]} ${styles["btn_primary"]}`} >{t("sign-in")}</Button>
                                        </form>


                                        <Typography variant="body1">
                                            {t("not-registered")} <Link href={`/${locale}/auth/signup`}> {t("create-account")} </Link>
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
