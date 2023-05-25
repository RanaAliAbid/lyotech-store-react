import * as React from 'react';
// import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { Alert, createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ProfileDataValidator } from '@/components/profile/profile.types';
import { validatePassword } from '@/validators/auth.validator';
import { updateUserProfile } from '@/components/profile/profile.service';


export default function profile() {

    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    const { t } = useTranslation('profile');

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });


    const currencies = [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'it',
            label: 'Italian',
        },
        // {
        //   value: 'fr',
        //   label: 'French',
        // },
        // {
        //   value: 'es',
        //   label: 'Spanish',
        // },
    ];


    const [validator, setValidator] = React.useState<ProfileDataValidator>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const proceedUpdateProfile = async (e: any) => {

        e.preventDefault()

        const postData = e.target;
        const dataValidate: ProfileDataValidator = {
            email: true,
            firstname: true,
            lastname: true,
            phone: true,
            oldpassword: true,
            newpassword: true,
            confirm_password: true
        }
        dataValidate.firstname = (postData[0].value == "") ? false : true
        dataValidate.lastname = (postData[1].value == "") ? false : true
        dataValidate.email = (postData[2].value == "") ? false : true
        dataValidate.phone = (postData[3].value == "") ? false : true
        dataValidate.oldpassword = (postData[6].value == "") ? false : true
        dataValidate.oldpassword = (!validatePassword(postData[6].value)) ? false : true

        if (postData[7].value != null && postData[7].value.length > 0) {
            dataValidate.newpassword = (postData[7]?.value == "") ? false : true
            dataValidate.newpassword = (!validatePassword(postData[7].value)) ? false : true
            dataValidate.confirm_password = (postData[7].value != postData[8].value) ? false : true
        }

        setValidator(dataValidate)

        if (!dataValidate.email
            || !dataValidate.oldpassword
            || !dataValidate.newpassword
            || !dataValidate.confirm_password
            || !dataValidate.firstname
            || !dataValidate.phone
            || !dataValidate.firstname) return false;

        setLoading(true)
        const result = await updateUserProfile(
            {
                firstname: postData[0].value,
                lastname: postData[1].value,
                email: postData[2].value,
                phone: postData[3].value,
                oldpassword: postData[6].value,
                newpassword: postData[7].value,
                confirm_password: postData[8].value
            }
        )
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title={t("header1")} />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                                    <Sidebar />
                                </Grid>

                                <Grid item md={9} xs={12}>
                                    <div className={styles.wrapTitle}>
                                        <Typography variant="h4" >
                                            {t("header1")}
                                        </Typography>
                                    </div>
                                    <div className={`${styles["wrapBox"]} ${styles["profileSec"]}`}>

                                        <form method='post' onSubmit={(e) => proceedUpdateProfile(e)}>

                                            <div className={styles.boxInfo}>
                                                <div className={styles.wrapSubTitle}>
                                                    <Typography variant="h4" >
                                                        {t("subheader1")}
                                                    </Typography>
                                                </div>

                                                <div className={styles.boxInfoBody}>

                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("First-name")} <span className='text-danger'>*</span></label>
                                                            <Input type='text' className={styles.formInput} defaultValue="Keanu" placeholder={t("First-name")} />
                                                        </div>

                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("Last-name")} <span className='text-danger'>*</span></label>
                                                            <Input type='text' className={styles.formInput} defaultValue="Reeves" placeholder={t("Last-name")} />
                                                        </div>
                                                    </div>

                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}><span className='alert-field'>
                                                            {
                                                                (validator && !validator.firstname) && <Alert severity="error">{t("required-field-error")}</Alert>
                                                            }
                                                        </span>
                                                        </div>

                                                        <div className={styles.formControl}><span className='alert-field'>
                                                            {
                                                                (validator && !validator.lastname) && <Alert severity="error">{t("required-field-error")}</Alert>
                                                            }
                                                        </span>
                                                        </div>
                                                    </div>


                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("Email-Address")} <span className='text-danger'>*</span></label>
                                                            <Input type='email' className={styles.formInput} defaultValue="keanureeves@gmail.com" placeholder={t("Email-Address")} />
                                                        </div>

                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("Mobile-Number")} <span className='text-danger'>*</span></label>
                                                            <Input className={styles.formInput} defaultValue="" />
                                                        </div>
                                                    </div>

                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}>
                                                            <span className='alert-field'>
                                                                {
                                                                    (validator && !validator.email) && <Alert style={{ textAlign: 'left' }} severity="error">{t("email-error")}</Alert>
                                                                }
                                                            </span>
                                                        </div>

                                                        <div className={styles.formControl}>
                                                            <span className='alert-field'>
                                                                {
                                                                    (validator && !validator.phone) && <Alert severity="error">{t("required-field-error")}</Alert>
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>


                                                    <div className={styles.formControl}>
                                                        <label className={styles.formLabel}> {t("Preferred-language")} </label>
                                                        <TextField
                                                            className={styles.formTextField}
                                                            id="filled-select-currency"
                                                            select
                                                            defaultValue={locale}
                                                            variant="outlined"
                                                            onChange={(e) => router.push(`/profile`, "", { locale: e.target.value })}
                                                        >
                                                            {currencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>


                                                    </div>

                                                </div>
                                            </div>
                                            <div className={styles.boxInfo}>
                                                <div className={styles.wrapSubTitle}>
                                                    <Typography variant="h4" >
                                                        {t("Security")}
                                                    </Typography>
                                                </div>
                                                <div className={styles.boxInfoBody}>
                                                    <div className={styles.formControl}>
                                                        <label className={styles.formLabel}> {t("Old-Password")} <span className='text-danger'>*</span></label>
                                                        <Input type='password' className={styles.formInput} placeholder={t("Enter-Old-Password")} />

                                                    </div>
                                                    {
                                                        (validator && !validator.oldpassword) && <Alert severity="error">
                                                            {t("password-error1")}<br />{t("password-error2")}
                                                        </Alert>
                                                    }

                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("New-Password")} </label>
                                                            <Input type='password' className={styles.formInput} placeholder={t("Enter-New-Password")} />
                                                        </div>

                                                        <div className={styles.formControl}>
                                                            <label className={styles.formLabel}> {t("Confirm-Password")} </label>
                                                            <Input type='password' className={styles.formInput} placeholder={t("Enter-New-Password")} />
                                                        </div>
                                                    </div>

                                                    <div className={styles.inline}>
                                                        <div className={styles.formControl}>
                                                            <span className='alert-field'>
                                                                {
                                                                    (validator && !validator.newpassword) && <Alert severity="error">
                                                                        {t("password-error1")}<br />{t("password-error2")}
                                                                    </Alert>
                                                                }
                                                            </span>
                                                        </div>

                                                        <div className={styles.formControl}>
                                                            <span className='alert-field'>
                                                                {
                                                                    (validator && !validator.confirm_password) && <Alert severity="error">
                                                                        {t("confirm-password-error")}
                                                                    </Alert>
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <Button type='submit' variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`}> {t("update-btn")} </Button>
                                        </form>

                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>

                    <Footer />
                </main>
            </ThemeProvider>
        </>
    )
}
