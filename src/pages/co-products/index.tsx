import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import lfiProducts from '../../img/lfi-products.png';
import device1000 from '../../img/device1000.png';
import device5000 from '../../img/device5000.png';

import supportIcon from '../../img/supportIcon.png';
import serversIcon from '../../img/serversIcon.png';
import testedIcon from '../../img/testedIcon.png';
import securityIcon from '../../img/securityIcon.png';
import lfiPhone from '../../img/lfiPhone.png';

import weAre01 from '../../img/partners-logo/weAre01.jpg';
import weAre02 from '../../img/partners-logo/weAre02.jpg';
import weAre03 from '../../img/partners-logo/weAre03.jpg';
import weAre04 from '../../img/partners-logo/weAre04.jpg';
import pclogo01 from '../../img/partners-logo/pclogo01.jpg';
import pclogo02 from '../../img/partners-logo/pclogo02.jpg';
import pclogo03 from '../../img/partners-logo/pclogo03.jpg';
import pclogo04 from '../../img/partners-logo/pclogo04.jpg';
import pclogo05 from '../../img/partners-logo/pclogo05.jpg';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';


const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { homePageProducts } from '@/utils/app.utils';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';
import { getHomePageProducts } from '@/services/products/product.service';

export default function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    const { t } = useTranslation('home');
    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const router = useRouter();

    const addProductToCart = async (id: string) => {
        try {
            if (!id) return;

            const result = await globalContext.addCart(id, 1);

            if (result) return router.push("/cart");

            globalContext.setGlobalLoading(false);

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    }

    return (
        <>
            <div>
                <ThemeProvider theme={theme}>
                    <main className={styles.main}>
                        <Header title="Home" />
                        {/* Banner Section Start */}
                        <div className={`${styles['paddingT0']} ${styles['mainBannerLfi-Wrap']}`}>
                            <div className={`${styles['mainBannerLfi']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: '100%',
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    visibility: 'visible',
                                                }}
                                                transition={{ duration: 1, delay: 0.25 }}
                                                viewport={{ once: true }}
                                            >
                                                <Typography variant="h1" className={styles.bannerHD}>
                                                    Build Your
                                                    <span> Independence</span>
                                                </Typography>

                                                <Typography variant="h6" className={styles.bannerTxt}>
                                                    Create your layered ecosystem, where getting your economic independence is not a dream. It is a system.
                                                </Typography>

                                                <Button
                                                    variant="contained"
                                                    className={`${styles['btn']} ${styles['btn_primary']}`}
                                                >
                                                    {t('Learn More')}
                                                </Button>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={12} xs={12}>
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
                                                <div className={styles.bannerImgLFi}>
                                                    <Image
                                                        width={'900'}
                                                        height={'523'}
                                                        style={{ width: '100%', height: 'auto' }}
                                                        src={lfiProducts.src}
                                                        alt="logo"
                                                    />
                                                </div>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                        {/* Banner Section End */}

                        {/* Services Section Start */}
                        <div className={styles.homeServicesWrap}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={3} sm={6} xs={12}>
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
                                                <div className={`${styles['servicesIcon']}`}>
                                                    <img src={supportIcon.src} alt="Icon" />
                                                </div>
                                                <Typography variant="h5">
                                                    Technical support 24/7
                                                </Typography>
                                                <Typography variant="h6">
                                                    Our technical teams are available 24 hours a day, 7 days a week.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: '100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.3, delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className={`${styles['wrapBox']} ${styles['servicesItem']}`}
                                            >
                                                <div className={styles.servicesIcon}>
                                                    <img src={serversIcon.src} alt="Icon" />
                                                </div>
                                                <Typography variant="h5">
                                                    Fully managed servers
                                                </Typography>
                                                <Typography variant="h6">
                                                    Don't worry about your servers, our technical team will take care of them.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: '100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.4, delay: 0.7 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className={`${styles['wrapBox']} ${styles['servicesItem']}`}
                                            >
                                                <div className={`${styles['servicesIcon']}`}>
                                                    <img src={testedIcon.src} alt="Icon" />
                                                </div>
                                                <Typography variant="h5">
                                                    Hardware & components tested and certified
                                                </Typography>
                                                <Typography variant="h6">
                                                    All our devices have been tested and approved by our experts.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: '100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className={`${styles['wrapBox']} ${styles['servicesItem']}`}
                                            >
                                                <div className={`${styles['servicesIcon']}`}>
                                                    <img src={securityIcon.src} alt="Icon" />
                                                </div>
                                                <Typography variant="h5">
                                                    Technical security & redundancy
                                                </Typography>
                                                <Typography variant="h6">
                                                    Our datacentres are ISO 27001-certified, PCI DDS3, GPDR Data Protection and Storage protected.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        {/* Services Section End */}

                        {/* LFi One Smartphone Section Start */}

                        <div className={`${styles['productItemWrap']} ${styles['LfiPhoneSpecs']}`}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <div className={styles.productItemImg}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: '-100%',
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    visibility: 'visible',
                                                }}
                                                transition={{ duration: 0.5, delay: 0.25 }}
                                                viewport={{ once: true }}
                                            >
                                                <img src={lfiPhone.src} alt="LFi Smartphone" />
                                            </motion.div>
                                        </div>
                                    </Grid>


                                    <Grid item md={6} sm={12} className={styles.phoneInfo}>
                                        <Typography variant="h2">
                                            <span>LFi</span> Smartphone
                                        </Typography>

                                        <Typography variant="h5">
                                            1,397.00 €
                                        </Typography>
                                        <Typography variant="h4">
                                            Specifications
                                        </Typography>

                                        <Typography variant="h6">
                                            ARM Cortex 3GHz
                                        </Typography>

                                        <Typography variant="h6">
                                            12GB Ram 256GB ROM
                                        </Typography>


                                        <Typography variant="h6">
                                            6.78 FHD
                                        </Typography>

                                        <Typography variant="h6">
                                            64MPX Main Camera with Macro and Zoom
                                        </Typography>

                                        <Typography variant="h6">
                                            6100 MAh Battery Power
                                        </Typography>


                                        <div className={styles.BuyLfiPhone}>
                                            <Button
                                                variant="contained"
                                                className={`${styles['btn']} ${styles['btn_primary']}`}>
                                                Buy Now
                                            </Button>

                                            <Button
                                                variant="contained"
                                                className={`${styles['btn']} ${styles['btn_primary']}`}>
                                                Buy from Partners
                                            </Button>
                                        </div>

                                        <Typography variant="h6" className={styles.needHelp}>
                                            Need Help?
                                            <a href="https://support.lyotechlabs.com/" target="_blank"> Create Ticket</a>
                                        </Typography>
                                    </Grid>
                                </Grid>






                            </Container>
                        </div>

                        {/* LFi One Smartphone Section End */}

                        {/* LFi Hardware Section Start */}

                        {/* Lfi Device Section Start */}

                        <div className={`${styles['productItemWrap']} ${styles['LfiDeviceWrap']}`}>

                            <Grid container spacing={0} className={styles.DeviceInfoWrap}>
                                <Grid item md={6} xs={12} className={styles.DeviceInfo}>

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: '-100%',
                                            visibility: 'hidden',
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            visibility: 'visible',
                                        }}
                                        transition={{ duration: 0.3, delay: 0.25 }}
                                        viewport={{ once: true }}>
                                        <Typography variant="h4">
                                            XLFi Computer 1000
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            className={`${styles['btn']} ${styles['btn_primary']}`}>
                                            Coming Soon
                                        </Button>
                                    </motion.div>

                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <div className={styles.LfiDeviceImg}>
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
                                            transition={{ duration: 0.3, delay: 0.25 }}
                                            viewport={{ once: true }}
                                        >
                                            <img src={device1000.src} alt="Device" />
                                        </motion.div>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>

                                <Grid item md={6} xs={12}>
                                    <div className={styles.LfiDeviceImg}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: '-100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                visibility: 'visible',
                                            }}
                                            transition={{ duration: 0.3, delay: 0.25 }}
                                            viewport={{ once: true }}
                                        >
                                            <img src={device5000.src} alt="Device" />
                                        </motion.div>
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12} className={styles.DeviceInfo}>
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
                                        transition={{ duration: 0.3, delay: 0.25 }}
                                        viewport={{ once: true }}>
                                        <Typography variant="h4">
                                            XLFi Computer 5000
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            className={`${styles['btn']} ${styles['btn_primary']}`}>
                                            Coming Soon
                                        </Button>
                                    </motion.div>
                                </Grid>

                            </Grid>


                        </div>



                        {/* Lfi Device Section End */}



                        {/* Partners Section Start */}

                        <div className={styles.partersWrap}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} sm={12}>
                                        <div className={styles.sectionHeading}>
                                            <Typography variant="h2">
                                                We Are
                                            </Typography>
                                        </div>

                                        <br></br>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: '-100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                            // animate={mainControls}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className={styles.partnersImg}>
                                                <img src={weAre01.src} alt="Partner Logo" />
                                                <img src={weAre02.src} alt="Partner Logo" />
                                                <img src={weAre03.src} alt="Partner Logo" />
                                                <img src={weAre04.src} alt="Partner Logo" />
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={6} sm={12}>
                                        <div className={styles.sectionHeading}>
                                            <Typography variant="h2">
                                                Product Certifications
                                            </Typography>
                                        </div>
                                        <br></br>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: '100%',
                                                visibility: 'hidden',
                                            }}
                                            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                            // animate={mainControls}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className={styles.partnersImg}>
                                                <img src={pclogo01.src} alt="Partner Logo" />
                                                <img src={pclogo02.src} alt="Partner Logo" />
                                                <img src={pclogo03.src} alt="Partner Logo" />
                                                <img src={pclogo04.src} alt="Partner Logo" />
                                                <img src={pclogo05.src} alt="Partner Logo" />
                                            </div>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>

                        {/* Partners Section End */}




                        <Footer />
                    </main>
                </ThemeProvider>
            </div>
        </>
    );
}

