import * as React from 'react';
// import Head from 'next/head';
import Header from '../../common/header';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import { SignInDataValidator } from '@/services/auth/auth.types';
import { useRouter } from 'next/router';
import { changePasswordUser } from '@/services/auth/auth.service';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Password from '../../img/passwordIcon.svg';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';
import { useAuthContext } from '@/contexts/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { validatePassword } from '@/validators/auth.validator';

export default function ChangePassword() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    const { t } = useTranslation('change-password');

    const router = useRouter();
    const authContext = useAuthContext();

    const { locale } = router;
    const [validator, setValidator] = React.useState<SignInDataValidator>();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [reReqresponse, setReqResponse] = React.useState<string>('');
    const [passwordVisible, setPasswordVisible] = React.useState<boolean>(true);

    const proceedChangePassword = async (e: any) => {
        e.preventDefault();
        const postData = e.target;
        const dataValidate: SignInDataValidator = { email: true, password: true };
        dataValidate.password = postData[0].value == '' ? false : true;

        if (!validatePassword(postData[0].value)) {
            dataValidate.password = false;
        }

        try {
            setReqResponse('');
            setValidator(dataValidate);

            if (!dataValidate.password) return false;

            setLoading(true);
            const result = await changePasswordUser({ newPassword: postData[0].value });

            if (result?.status == 200) {
                console.log(result.data);

                router.push(`/${locale}/signin`);
            }
        } catch (error: any) {
            setReqResponse(error?.response?.data?.message);
        }

        setLoading(false);
    };

    React.useEffect(() => {
        if (!authContext.isChangePassword) {
            router.push(`/${locale}`)

            setTimeout(() => {
                setLoading(false);
            }, 1000);

            return;
        } else {
            setLoading(false);
        }
    }, [])

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
                                            onSubmit={(e) => proceedChangePassword(e)}
                                        >
                                            <div className={`${styles.formControl} position-relative`}>
                                                <label className={styles.formLabel}>
                                                    {' '}
                                                    {t('password')} <span className="text-danger">*</span>{' '}
                                                </label>
                                                <Password className={styles.formIcon} />
                                                <Input
                                                    onKeyDown={(e) =>
                                                        setValidator({ email: true, password: true })
                                                    }
                                                    type={`${(!passwordVisible) ? "text" : "password"}`}
                                                    className={styles.formInput}
                                                    placeholder={t('password')}
                                                />
                                                <span className='passwordEye' onClick={(e) => setPasswordVisible(!passwordVisible)}>
                                                    {
                                                        (!passwordVisible) ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                                    }
                                                </span>
                                            </div>
                                            {validator && !validator.password && (
                                                <Alert severity="error">
                                                    {t('password-error1')}
                                                    <br />
                                                    {t('password-error2')}
                                                </Alert>
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
                                                    {t('change-password')}{' '}
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
