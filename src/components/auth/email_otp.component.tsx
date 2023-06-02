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

    // const { t } = useTranslation('emailotp');

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
        </>
    )
}
