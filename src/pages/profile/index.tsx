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
import { ProfileDataValidator } from '@/services/profile/profile.types';
import { validatePassword } from '@/validators/auth.validator';
import { updateUserProfile } from '@/services/profile/profile.service';
import { appLanguages, countryCodeByCountryName, formatCountryCode, getCountryNameByCountryCode, phoneNumberLenght, sortCountries } from '@/utils/app.utils';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import countries from '../../../data/countries.json';

import { FaEyeSlash, FaEye } from "react-icons/fa";

import {
  replaceSpecialChar,
  validateEmail
} from '@/validators/auth.validator';

export default function Profile() {
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation('profile');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const languages = appLanguages;
  const [validator, setValidator] = React.useState<ProfileDataValidator>();
  const [countryCode, setCountryCode] = React.useState<string>("+971");
  const [phoneLength, setPhoneLength] = React.useState<number>(9);

  const [firstname, setFirstname] = React.useState<string>("");
  const [lastname, setLastname] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(true);

  const authContext = useAuthContext();
  const globalContext = useGlobalContext();

  React.useEffect(() => {
    setFirstname(authContext.connectedUser?.firstName)
    setLastname(authContext.connectedUser?.lastName)
    setPhone(authContext.connectedUser?.mobileNumber ?? 0)
    setEmail(authContext.connectedUser?.email)
  }, [authContext.connectedUser])

  const proceedUpdateProfile = async (e: any) => {
    e.preventDefault();

    const postData = e.target;
    const dataValidate: ProfileDataValidator = {
      email: true,
      firstName: true,
      countryCode: true,
      lastName: true,
      mobileNumber: true,
      prefferredLanguage: true,
      oldPassword: true,
      newPassword: true,
      confirm_password: true,
    };
    dataValidate.firstName = replaceSpecialChar(postData[0].value) == '' ? false : true;
    dataValidate.lastName = replaceSpecialChar(postData[1].value) == '' ? false : true;
    dataValidate.email = !validateEmail(postData[2].value ?? "") ? false : true;
    dataValidate.mobileNumber = postData[5].value == '' ? false : true;
    dataValidate.oldPassword = postData[8].value == '' ? false : true;

    if (!authContext.connectedUser?.firstTimePassword) {
      dataValidate.oldPassword = !validatePassword(postData[8].value)
        ? false
        : true;
    } else {
      dataValidate.oldPassword = true;
    }

    if (postData[9].value != null && postData[9].value.length > 0) {
      dataValidate.newPassword = postData[9]?.value == '' ? false : true;
      dataValidate.newPassword = !validatePassword(postData[9].value)
        ? false
        : true;
      dataValidate.confirm_password =
        postData[9].value != postData[10].value ? false : true;
    }

    if (postData[5].value.length < phoneLength) {
      dataValidate.mobileNumber = false;
    }

    setValidator(dataValidate);

    if (
      !dataValidate.email ||
      !dataValidate.oldPassword ||
      !dataValidate.newPassword ||
      !dataValidate.confirm_password ||
      !dataValidate.firstName ||
      !dataValidate.mobileNumber ||
      !dataValidate.firstName
    )
      return false;

    try {
      globalContext.setGlobalLoading(true);

      const result = await updateUserProfile({
        firstName: replaceSpecialChar(postData[0].value),
        lastName: replaceSpecialChar(postData[1].value),
        email: postData[2].value,
        countryCode: countryCode,
        mobileNumber: parseInt(postData[5].value),
        prefferredLanguage: router.locale ?? 'en',
        oldPassword: postData[8].value,
        newPassword: postData[9].value,
        confirm_password: postData[10].value,
      });

      if (result) {
        globalContext.setAlertProps({
          show: true,
          title: "Your account has been updated successfully",
          text: "",
          toast: true,
          showConfirmButton: false,
          timerProgressBar: true,
          callback: globalContext.closeAlert
        })
      }

      await authContext.checkUserSession();

      globalContext.setGlobalLoading(false);
    } catch (error: any) {

      const msg = error?.response?.data?.message.replace("\n", '')
        .replace("[", '')
        .replace("]", '')
        .replace("{", '')
        .replace("}", '')

      globalContext.setAlertProps({
        show: true,
        title: msg,
        text: "",
        toast: true,
        showConfirmButton: false,
        background: "#8B0000",
        timer: 6000,
        timerProgressBar: true,
        callback: globalContext.closeAlert
      })

      globalContext.setGlobalLoading(false);
    }
  };

  const getCountryCode = (value: string) => {
    const code: string = countryCodeByCountryName(value) ?? "+971";
    setCountryCode(code);

    const pLenght = phoneNumberLenght(value) ?? 8;
    setPhoneLength(pLenght);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={t('header1')} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>

                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('header1')}</Typography>
                  </div>
                  <div
                    className={`${styles['wrapBox']} ${styles['profileSec']}`}
                  >
                    <form
                      method="post"
                      onSubmit={(e) => proceedUpdateProfile(e)}
                    >
                      <div className={styles.boxInfo}>
                        <div className={styles.wrapSubTitle}>
                          <Typography variant="h4">
                            {t('subheader1')}
                          </Typography>
                        </div>

                        <div className={styles.boxInfoBody}>
                          <div className={styles.inline}>
                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('First-name')}{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <Input
                                type="text"
                                className={styles.formInput}
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder={t('First-name')}
                              />
                            </div>

                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Last-name')}{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <Input
                                type="text"
                                className={styles.formInput}
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder={t('Last-name')}
                              />
                            </div>
                          </div>

                          <div className={styles.inline}>
                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.firstName && (
                                  <Alert severity="error">
                                    {t('required-field-error')}
                                  </Alert>
                                )}
                              </span>
                            </div>

                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.lastName && (
                                  <Alert severity="error">
                                    {t('required-field-error')}
                                  </Alert>
                                )}
                              </span>
                            </div>
                          </div>

                          <div className={styles.inline}>
                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Email-Address')}{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <Input
                                type="email"
                                className={styles.formInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('Email-Address')}
                              />
                            </div>

                            <div
                              className={`${styles.formControl} country-code-field`}
                            >
                              <label className={styles.formLabel}>
                                {' '}
                                <p className="label-text">
                                  {t('country-code')}
                                </p>{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <TextField
                                className={styles.formTextField}
                                id="filled-select-country-code"
                                select
                                defaultValue={getCountryNameByCountryCode(authContext.connectedUser?.countryCode ?? "") ?? "United Arab Emirates"}
                                variant="outlined"
                                onChange={(e) => {
                                  getCountryCode(e.target.value);
                                }}
                              >
                                {sortCountries(countries.data).map(
                                  (country: any, index: any) => (
                                    <MenuItem
                                      className="countries-menu-item"
                                      key={index}
                                      value={country?.name?.common}
                                    >
                                      <img
                                        src={country?.flags?.png}
                                        className="country-flag"
                                        style={{ float: "left" }}
                                      />{' '}
                                      &nbsp;<span className="badge" style={{ width: "60px" }}>({countryCodeByCountryName(country?.name?.common)})</span> {country?.name?.common}
                                    </MenuItem>
                                  )
                                )}
                              </TextField>
                            </div>

                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Mobile-Number')}{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <Input
                                className={styles.formInput}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type='number'
                              />
                            </div>
                          </div>

                          <div className={styles.inline}>
                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.email && (
                                  <Alert
                                    style={{ textAlign: 'left' }}
                                    severity="error"
                                  >
                                    {t('email-error')}
                                  </Alert>
                                )}
                              </span>
                            </div>

                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.mobileNumber && (
                                  <Alert severity="error">
                                    {t('required-field-error')} (Min Lenght: {phoneLength})
                                  </Alert>
                                )}
                              </span>
                            </div>
                          </div>

                          <div className={styles.formControl}>
                            <label className={styles.formLabel}>
                              {' '}
                              {t('Preferred-language')}{' '}
                            </label>
                            <TextField
                              className={styles.formTextField}
                              id="filled-select-currency"
                              select
                              value={locale ?? authContext.connectedUser?.preferredLanguage}
                              variant="outlined"
                              disabled
                              onChange={(e) =>
                                router.push(`/profile`, '', {
                                  locale: e.target.value,
                                })
                              }
                            >
                              {languages.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </div>
                        </div>
                      </div>
                      <div className={styles.boxInfo}>
                        <div className={styles.wrapSubTitle}>
                          <Typography variant="h4">{t('Security')}</Typography>
                        </div>

                        <div className={styles.boxInfoBody}>
                          <div className={`${styles.formControl} position-relative`}>
                            <label className={styles.formLabel}>
                              {' '}
                              {t('Old-Password')}{' '}
                            </label>
                            <Input
                              type={`${(!passwordVisible) ? "text" : "password"}`}
                              className={styles.formInput}
                              placeholder={t('Enter-Old-Password')}
                            />
                            <span className='passwordEye' onClick={(e) => setPasswordVisible(!passwordVisible)}>
                              {
                                (!passwordVisible) ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                              }
                            </span>
                          </div>
                          {validator && !validator.oldPassword && (
                            <Alert severity="error">
                              {t('password-error1')}
                              <br />
                              {t('password-error2')}
                            </Alert>
                          )}

                          <div className={styles.inline}>
                            <div className={`${styles.formControl} position-relative`}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('New-Password')}{' '}
                              </label>
                              <Input
                                type={`${(!passwordVisible) ? "text" : "password"}`}
                                className={styles.formInput}
                                placeholder={t('Enter-New-Password')}
                              />
                              <span className='passwordEye' onClick={(e) => setPasswordVisible(!passwordVisible)}>
                                {
                                  (!passwordVisible) ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                              </span>
                            </div>

                            <div className={`${styles.formControl} position-relative`}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Confirm-Password')}{' '}
                              </label>
                              <Input
                                type={`${(!passwordVisible) ? "text" : "password"}`}
                                className={styles.formInput}
                                placeholder={t('Enter-New-Password')}
                              />
                              <span className='passwordEye' onClick={(e) => setPasswordVisible(!passwordVisible)}>
                                {
                                  (!passwordVisible) ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                              </span>
                            </div>
                          </div>

                          <div className={styles.inline}>
                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.newPassword && (
                                  <Alert severity="error">
                                    {t('password-error1')}
                                    <br />
                                    {t('password-error2')}
                                  </Alert>
                                )}
                              </span>
                            </div>

                            <div className={styles.formControl}>
                              <span className="alert-field">
                                {validator && !validator.confirm_password && (
                                  <Alert severity="error">
                                    {t('confirm-password-error')}
                                  </Alert>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <Button
                        type="submit"
                        variant="contained"
                        className={`${styles['btn']} ${styles['btn_primary']}`}
                      >
                        {' '}
                        {t('update-btn')}{' '}
                      </Button>
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
  );
}
