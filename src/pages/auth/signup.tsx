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
import UserIcon from '../../img/userIcon.svg';
import Password from '../../img/passwordIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { Alert, Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SignUpData, SignUpDataValidator } from '@/components/auth/auth.types';
import { signUpUser } from '@/components/auth/auth.service';
import { replaceSpecialChar, signUpCheckEmptyFields, validatePassword } from '@/validators/auth.validator';
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
    const [reReqresponse, setReqResponse] = React.useState<string>("")

    const proceedSignUp = async (e: any) => {
        e.preventDefault()

        const postData = e.target;

        const signUpData: SignUpData = {
            firstName: replaceSpecialChar(postData[0].value),
            lastName: replaceSpecialChar(postData[1].value),
            email: postData[2].value,
            password: postData[3].value,
            password_confirm: postData[4].value
        }

        const dataValidate = signUpCheckEmptyFields(signUpData)
        setValidator(dataValidate)

        if (!dataValidate.email || !dataValidate.password || !dataValidate.password_confirm) return false;

        setLoading(true)

        try {
            const result = await signUpUser(signUpData)

            if (result?.status == 200) {
                setReqResponse("")
            }

        } catch (error: any) {
            setReqResponse(error?.response?.data?.message);
        }

        setLoading(false);
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
                                <Grid item sm={8} md={5} xs={12} style={{marginTop: "50px", marginBottom: "50px"}}>
                                    <div className={styles.loginBox}>
                                        <Typography variant="h2">
                                            {t("header1")}
                                        </Typography>

                                        <Typography variant="body1">
                                            {t("subHeader1")}
                                        </Typography>


                                        <form method='post' onSubmit={(e) => proceedSignUp(e)}>

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("firstname")} <span className='text-danger'>*</span> </label>
                                                <UserIcon className={styles.formIcon} />
                                                <Input type='text' className={styles.formInput} placeholder={t("firstname")} />
                                            </div>
                                            {
                                                (validator && !validator.firstName) && <Alert severity="error">{t("username-error")}</Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("lastname")} <span className='text-danger'>*</span> </label>
                                                <UserIcon className={styles.formIcon} />
                                                <Input type='text' className={styles.formInput} placeholder={t("lastname")} />
                                            </div>
                                            {
                                                (validator && !validator.lastName) && <Alert severity="error">{t("username-error")}</Alert>
                                            }


                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("email")} <span className='text-danger'>*</span> </label>
                                                <Email className={styles.formIcon} />
                                                <Input type='email' className={styles.formInput} placeholder={t("email")} />
                                            </div>
                                            {
                                                (validator && !validator.email) && <Alert severity="error">{t("email-error")}</Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("password")} <span className='text-danger'>*</span> </label>
                                                <Password className={styles.formIcon} />
                                                <Input type='password' className={styles.formInput} placeholder={t("password")} />
                                            </div>
                                            {
                                                (validator && !validator.password) && <Alert severity="error">
                                                    {t("password-error1")}<br />{t("password-error2")}
                                                </Alert>
                                            }

                                            <div className={styles.formControl}>
                                                <label className={styles.formLabel}> {t("confirm-password")} <span className='text-danger'>*</span> </label>
                                                <Password className={styles.formIcon} />
                                                <Input type='password' className={styles.formInput} placeholder={t("confirm-password")} />
                                            </div>
                                            {
                                                (validator && !validator.password_confirm) && <Alert severity="error">
                                                    {t("confirm-password-error")}
                                                </Alert>
                                            }

                                            {
                                                (reReqresponse && reReqresponse != "") && <Alert severity="error">
                                                    {reReqresponse}
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
