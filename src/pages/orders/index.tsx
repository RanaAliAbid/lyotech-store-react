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
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from '@mui/material/Link';

import productImg from '../../img/productImg.png';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

export default function allOrders() {

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
                    <Header title={t("order-header")} />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                                    <Sidebar />
                                </Grid>
                                <Grid item md={9} xs={12}>
                                    <div className={styles.wrapTitle}>
                                        <Typography variant="h4" >
                                            {t("order-header")}
                                        </Typography>
                                    </div>
                                    <div className={`${styles["wrapBox"]}`}>
                                        <List>
                                            <ListItem className={styles.ordersList}>
                                                <div className={styles.orderHead}>
                                                    <div>
                                                        <Typography variant="h5">
                                                            {t("order-id")} :
                                                        </Typography>
                                                        <Typography variant="h6">
                                                            403-1732169-5273
                                                        </Typography>
                                                    </div>

                                                    <div>
                                                        <Typography variant="h5">
                                                            {t("order-Status")}:
                                                        </Typography>
                                                        <Typography variant="h6" className={styles.textgreen}>
                                                            Delivered
                                                        </Typography>
                                                    </div>

                                                    <div>
                                                        <Typography variant="h5">
                                                            {t("order-Total")}:
                                                        </Typography>
                                                        <Typography variant="h6" className={styles.textBlue}>
                                                            $811.00
                                                        </Typography>
                                                    </div>
                                                </div>

                                                <div className={styles.orderBody}>
                                                    <List>
                                                        <ListItem className={styles.productItem}>
                                                            <div className={styles.productImg}>
                                                                <img src={productImg.src} alt="logo" />
                                                            </div>
                                                            <div className={styles.productDetails}>
                                                                <div className={styles.productName}>
                                                                    <div>
                                                                        <Typography variant="h4" className={styles.productitle}>
                                                                            LFi ONE Smartphone
                                                                        </Typography>

                                                                        <Typography variant="body1">
                                                                            Model Name: LFI ONE
                                                                        </Typography>
                                                                    </div>
                                                                </div>

                                                                <Link href='#' variant="h6">
                                                                    {t("write-review")}
                                                                </Link>

                                                            </div>
                                                        </ListItem>

                                                        <ListItem className={styles.productItem}>
                                                            <div className={styles.productImg}>
                                                                <img src={productImg.src} alt="logo" />
                                                            </div>
                                                            <div className={styles.productDetails}>
                                                                <div className={styles.productName}>
                                                                    <div>
                                                                        <Typography variant="h4" className={styles.productitle}>
                                                                            LFi ONE Smartphone
                                                                        </Typography>

                                                                        <Typography variant="body1">
                                                                            Model Name: LFI ONE
                                                                        </Typography>
                                                                    </div>

                                                                </div>

                                                                <Link href='#' variant="h6">
                                                                    {t("write-review")}
                                                                </Link>

                                                            </div>
                                                        </ListItem>

                                                        <ListItem className={styles.productItem}>
                                                            <div className={styles.productImg}>
                                                                <img src={productImg.src} alt="logo" />
                                                            </div>
                                                            <div className={styles.productDetails}>
                                                                <div className={styles.productName}>
                                                                    <div>
                                                                        <Typography variant="h4" className={styles.productitle}>
                                                                            LFi ONE Smartphone
                                                                        </Typography>

                                                                        <Typography variant="body1">
                                                                            Model Name: LFI ONE
                                                                        </Typography>
                                                                    </div>

                                                                </div>

                                                                <Link href='#' variant="h6">
                                                                    {t("write-review")}
                                                                </Link>

                                                            </div>
                                                        </ListItem>

                                                    </List>
                                                </div>

                                                <div className={styles.foot}>
                                                    <Link href='#' variant="h6">
                                                        {t("order-view-details")}
                                                    </Link>
                                                </div>
                                            </ListItem>


                                        </List>

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
