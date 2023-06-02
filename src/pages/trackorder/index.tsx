import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

export default function trackOrder() {

    const { t } = useTranslation('order');

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title={t("trackorder-header")} />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                                    <Sidebar />
                                </Grid>

                                <Grid item md={9} xs={12}>
                                    <div className={styles.wrapTitle}>
                                        <Typography variant="h4" >
                                            {t("trackorder-header")}
                                        </Typography>
                                    </div>
                                    <div className={styles.wrapBox}>

                                        <div className={styles.tracknote}>
                                            <Typography variant="h5">
                                                {t("trackorder-desc")}
                                            </Typography>
                                        </div>

                                        <Grid container spacing={3}>
                                            <Grid item md={12} xs={12}>
                                                <div className={styles.formControl}>
                                                    <label className={styles.formLabel}> {t("trackorder-order-id")} </label>
                                                    <Input className={styles.formInput} placeholder="123456899" />
                                                </div>

                                                <div className={styles.formControl}>
                                                    <label className={styles.formLabel}> {t("trackorder-order-email")} </label>
                                                    <Input className={styles.formInput} placeholder="Email Address" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Button variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`}> {t("trackorder-now-btn")} </Button>
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
