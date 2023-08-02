import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Header from '../common/header';
import Footer from '../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import serversIcon from '../img/serversIcon.png';

import styles from '@/styles/Home.module.css';

import { Button, createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';

export default function NotFound() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    const { t } = useTranslation('home');
    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const router = useRouter();

    return (
        <>

            <div>
                <ThemeProvider theme={theme}>
                    <main className={styles.main}>
                        <Header title="Home" />
                        {/* Banner Section Start */}
                        {/* <div className={styles.paddingT0}>
                            <div className={`${styles['mainBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={6} xs={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: '100%',
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    visibility: 'visible',
                                                }}
                                                transition={{ duration: 1, delay: 0.25 }}
                                                viewport={{ once: true }}
                                            >
                                                <Typography variant="h1" className={styles.bannerHD}>
                                                    {t('header1')}
                                                </Typography>

                                                <Typography variant="h6" className={styles.bannerTxt}>
                                                    {t('subheader1')}
                                                </Typography>

                                                <Button
                                                    variant="contained"
                                                    className={`${styles['btn']} ${styles['btn_primary']}`}
                                                >
                                                    {t('banner-btn-title')}
                                                </Button>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={6} xs={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: '100%',
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    visibility: 'visible',
                                                }}
                                                transition={{ duration: 1, delay: 0.25 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className={styles.bannerImg}>
                                                    <Image
                                                        width={'640'}
                                                        height={'523'}
                                                        style={{ width: '100%', height: 'auto' }}
                                                        src={bannerProduct.src}
                                                        alt="logo"
                                                    />
                                                </div>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div> */}
                        {/* Banner Section End */}

                        {/* Services Section Start */}
                        <div className={styles.homeServicesWrap} id='serviceSection' style={{ minHeight: "50vh" }}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: '100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.2, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className={`${styles['wrapBox']} ${styles['servicesItem']}`}
                                            >
                                                {/* <div className={`${styles['servicesIcon']}`}> */}
                                                <img style={{ width: "40%", borderRadius: "50%" }} src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg" alt="Icon" />
                                                {/* </div> */}
                                                <br />
                                                <br />
                                                <Typography variant="h1">
                                                    Page Not Found
                                                </Typography>
                                                <Typography variant="h6">
                                                    The page you are trying to access is not available
                                                </Typography>
                                                <br />
                                                <br />
                                                <Button
                                                    onClick={(e) => { router.push("/") }}
                                                    variant="contained"
                                                    className={`${styles['btn']} ${styles['btn_primary']}`}
                                                >
                                                    Go back to homepage
                                                </Button>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                </Grid>
                            </Container>
                        </div>
                        {/* Services Section End */}

                        <Footer />
                    </main>
                </ThemeProvider>
            </div>
        </>
    );
}