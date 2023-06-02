import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import lyoMC from '../../img/lyomerchant.png';
import usdtCoin from '../../img/theter_trc.png';
import creditCard from '../../img/creaditCard.png';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

export default function payments() {

    const { t } = useTranslation('payments');

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
                                    <div className={`${styles["wrapBox"]} ${styles["paymentSection"]}`}>

                                        <div className={styles.boxInfo}>
                                            <div className={styles.wrapSubTitle}>
                                                <Typography variant="h4" >
                                                    {t("subheader1")}
                                                </Typography>

                                                <div className={styles.paymentLogo}>
                                                    <img src={lyoMC.src} alt="" />
                                                    <img src={usdtCoin.src} alt="" />
                                                </div>
                                            </div>

                                            <div className={styles.boxInfoBody}>
                                                <List>
                                                    <ListItem>
                                                        {t("details1")}
                                                    </ListItem>
                                                    <ListItem>
                                                        {t("details2")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details3")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details4")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details5")}
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>

                                        <div className={styles.boxInfo}>
                                            <div className={styles.wrapSubTitle}>
                                                <Typography variant="h4" >
                                                    {t("subheader2")}
                                                </Typography>

                                                <div className={styles.paymentLogo}>
                                                    <img src={creditCard.src} alt="" />
                                                </div>
                                            </div>

                                            <div className={styles.boxInfoBody}>
                                                <List>
                                                    <ListItem>
                                                        {t("details6")}
                                                    </ListItem>
                                                    <ListItem>
                                                        {t("details7")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details8")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details9")}
                                                    </ListItem>

                                                    <ListItem>
                                                        {t("details10")}
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>
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
