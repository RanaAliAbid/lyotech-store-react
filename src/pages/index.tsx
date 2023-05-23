import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"
import Head from 'next/head';
import Header from '../pages/common/header';
import Footer from '../pages/common/footer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bannerProduct from '../img/bannerProduct.png';
import supportIcon from '../img/supportIcon.png';
import serversIcon from '../img/serversIcon.png';
import testedIcon from '../img/testedIcon.png';
import securityIcon from '../img/securityIcon.png';
import lfiPhone from '../img/lfiPhone.png';
import lyoTabImg from '../img/lyoTabImg.png';
import lyoWatchImg from '../img/lyoWatchImg.png';
import OctaCoreIcon from '../img/octaCoreIcon.svg';
import MintingIcon from '../img/mintingIcon.svg';
import DpiIcon from '../img/dpiIcon.svg';
import BatteryIcon from '../img/batteryIcon.svg';
import ZoomIcon from '../img/zoomIcon.svg';
import RamIcon from '../img/ramIcon.svg';
import HealthIcon from '../img/healthIcon.svg';
import CalenderIcon from '../img/calenderIcon.svg';
import weAre01 from '../img/partners-logo/weAre01.jpg';
import weAre02 from '../img/partners-logo/weAre02.jpg';
import weAre03 from '../img/partners-logo/weAre03.jpg';
import weAre04 from '../img/partners-logo/weAre04.jpg';
import pclogo01 from '../img/partners-logo/pclogo01.jpg';
import pclogo02 from '../img/partners-logo/pclogo02.jpg';
import pclogo03 from '../img/partners-logo/pclogo03.jpg';
import pclogo04 from '../img/partners-logo/pclogo04.jpg';
import pclogo05 from '../img/partners-logo/pclogo05.jpg';
import styles from '@/styles/Home.module.css';


import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';
export default function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    return (
        <>
            <Head>
                <title>Home - LYOTECH Labs</title>
                <meta name="description" content="LYOTECH LABS is an R&D company that works on the development of software and hardware products including mobile phones, tablets, laptops and smart watches. Our goal is giving best our customers in technologys" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <ThemeProvider theme={theme} >
                    <main className={styles.main} >
                        <Header />
                        {/* Banner Section Start */}
                        <div className={styles.paddingT0} >
                            <div className={`${styles["mainBanner"]}`}>
                                <Container className={styles.containerBox} >
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={6} xs={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                    visibility: 'hidden'
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 1, delay: 0.25 }}
                                                viewport={{ once: true }}
                                            >
                                                <Typography variant="h1" className={styles.bannerHD}>
                                                    LYOTECH LABS
                                                </Typography>

                                                <Typography variant="h6" className={styles.bannerTxt}>
                                                    LYOTECH LABS is an R&D company that works on the
                                                    development of software and hardware products including mobile phones, tablets, laptops and smart watches.
                                                </Typography>
                                                <Button variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`}>Shop Now</Button>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={6} xs={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "100%",
                                                    visibility: 'hidden'
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 1, delay: 0.25 }}
                                                viewport={{ once: true }}>
                                                <div className={styles.bannerImg}>
                                                    <img src={bannerProduct.src} alt="logo" />
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
                                                y: "100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.2, delay: 0.5 }}
                                            viewport={{ once: true }}>
                                            <div className={`${styles["wrapBox"]} ${styles["servicesItem"]}`}>
                                                <div className={`${styles["servicesIcon"]}`}>
                                                    <img src={supportIcon.src} alt='Icon' />
                                                </div>
                                                <Typography variant='h5'>
                                                    Technical support 24/7
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Our technical teams are available 24 hours a  day, 7 days a week.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: "100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.3, delay: 0.6 }}
                                            viewport={{ once: true }}>
                                            <div className={`${styles["wrapBox"]} ${styles["servicesItem"]}`}>
                                                <div className={styles.servicesIcon}>
                                                    <img src={serversIcon.src} alt='Icon' />
                                                </div>
                                                <Typography variant='h5'>
                                                    Fully managed servers
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Don’t worry about your servers,  our technical team will take care of them.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: "100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.4, delay: 0.7 }}
                                            viewport={{ once: true }}>
                                            <div className={`${styles["wrapBox"]} ${styles["servicesItem"]}`}>
                                                <div className={`${styles["servicesIcon"]}`}>
                                                    <img src={testedIcon.src} alt='Icon' />
                                                </div>
                                                <Typography variant='h5'>
                                                    Hardware & components tested and certified
                                                </Typography>
                                                <Typography variant='h6'>
                                                    All our devices have been tested and approved by our experts.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: "100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            viewport={{ once: true }}>

                                            <div className={`${styles["wrapBox"]} ${styles["servicesItem"]}`}>
                                                <div className={`${styles["servicesIcon"]}`}>
                                                    <img src={securityIcon.src} alt='Icon' />
                                                </div>
                                                <Typography variant='h5'>
                                                    Technical security & redundancy
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Our datacentres are ISO 27001-certified, PCI DDS3, GPDR Data Protection and Storage protected.
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        {/* Services Section End */}

                        {/* Servers Section Start */}
                        <div className={`${styles["paddingTB60"]} ${styles["serverWrap"]}`}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <div className={styles.sectionHeading}>
                                            <Typography variant='h2'>
                                                Linux Virtual Private Servers
                                            </Typography>
                                            <Typography variant='h6'>
                                                Our Linux VPS solutions are designed to suit all of your needs, and scale up as your business grows.
                                                We guarantee a high performance and a range of distributions for the Linux VPS.
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item md={8} sm={6} xs={12}>
                                        <div className={`${styles["serverItem"]} ${styles["rootAccessImg"]}`}>
                                            <div className={styles.serverItemOverlay}></div>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                    visibility: 'hidden',
                                                    zIndex: 2
                                                }}
                                                whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    Full Root Access in VPS Hosting
                                                </Typography>
                                            </motion.div>
                                        </div>
                                    </Grid>

                                    <Grid item md={4} sm={6} xs={12}>
                                        <div className={`${styles["serverItem"]} ${styles["ssdServerImg"]}`}>
                                            <div className={styles.serverItemOverlay}></div>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                    visibility: 'hidden',
                                                    zIndex: 2
                                                }}
                                                whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    SSD Dedicated Server
                                                    Hosting
                                                </Typography>
                                            </motion.div>
                                        </div>
                                    </Grid>

                                    <Grid item md={4} sm={6} xs={12}>
                                        <div className={`${styles["serverItem"]} ${styles["ultSpeedImgImg"]}`}>
                                            <div className={styles.serverItemOverlay}></div>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                    visibility: 'hidden',
                                                    zIndex: 2
                                                }}
                                                whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    1Gbps Unlimited
                                                    Bandwidth
                                                </Typography>
                                            </motion.div>
                                        </div>
                                    </Grid>

                                    <Grid item md={8} sm={6} xs={12}>
                                        <div className={`${styles["serverItem"]} ${styles["optimizeVPSImg"]}`}>
                                            <div className={styles.serverItemOverlay}></div>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                    visibility: 'hidden',
                                                    zIndex: 2
                                                }}
                                                whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    100% Optimize VPS
                                                </Typography>
                                            </motion.div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>

                        <div className={styles.productsWrap}>
                            <div className={`${styles["productItemWrap"]} ${styles["bgShape01"]}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} >
                                        <Grid item md={6} sm={12}>
                                            <div className={styles.productItemImg}>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: "-100%",
                                                        visibility: 'hidden',
                                                    }}
                                                    whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                    transition={{ duration: 0.5, delay: 0.25 }}
                                                    viewport={{ once: true }}>
                                                    <img src={lfiPhone.src} alt='LFi Smartphone' />
                                                </motion.div>
                                            </div>
                                        </Grid>
                                        <Grid item md={6} sm={12}>
                                            <Typography variant='h2'>
                                                <span>LFi</span> ONE Smartphone
                                            </Typography>

                                            <Typography variant='h6'>
                                                Mint while you use your LFi One. The LFi One is a unique smartphone: not only can you
                                                enjoy high-level features, but you can also mint LFi tokens.
                                            </Typography>

                                            <Typography variant='h4'>
                                                Versatile Use
                                            </Typography>

                                            <Grid container spacing={3} className={styles.productSpec} >
                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<OctaCoreIcon/>
                                                            <Typography variant='h6'>
                                                                OctaCore MTK 2.4 Ghz
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<ZoomIcon/>
                                                            <Typography variant='h6'>
                                                                Sony 64MPX Main Camera with Macro and Zoom
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>



                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<RamIcon/>
                                                            <Typography variant='h6'>
                                                                12GB RAM
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>


                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<BatteryIcon/>
                                                            <Typography variant='h6'>
                                                                6100 mAh Battery Power
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>



                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<DpiIcon/>
                                                            <Typography variant='h6'>
                                                                IPS 6.78” FHD+
                                                                @ 120Hz 396 DPI
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>


                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<MintingIcon/>
                                                            <Typography variant='h6'>
                                                                Mobile Minting App Native
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>
                                            </Grid>

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.2, delay: 0.25 }}
                                                viewport={{ once: true }}>

                                                <Button variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`}>Shop Now</Button>
                                            </motion.div>
                                        </Grid>

                                    </Grid>
                                </Container>
                            </div>


                            <div className={`${styles["productItemWrap"]} ${styles["bgShape02"]}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} >

                                        <Grid item md={12} xs={12} className={styles.watchHeading}>
                                            <Typography variant='h2'>
                                                <span>LYO</span>  WATCH
                                            </Typography>

                                            <Typography variant='h6'>
                                                Smartwatch to stay connected always. Two screen options are available
                                                to match your personal style.
                                            </Typography>
                                        </Grid>



                                        <Grid item md={4} sm={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.3, delay: 0.25 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    Super-long Battery Life &
                                                    Health Data Tracker
                                                </Typography>

                                                <Grid container spacing={3} className={styles.productSpec} >
                                                    <Grid item md={12}>
                                                        <span>                                                            
															<OctaCoreIcon/>
                                                            <Typography variant='h6'>
                                                                Up to 3 days in Smart  Mode.
                                                            </Typography>
                                                        </span>
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <span>                                                            
															<CalenderIcon/>
                                                            <Typography variant='h6'>
                                                                Up to 45 days in Essential Mode.
                                                            </Typography>
                                                        </span>
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <span>                                                            
															<HealthIcon/>
                                                            <Typography variant='h6'>
                                                                Track your physical and mental
                                                                health with in-built LYO apps.
                                                            </Typography>
                                                        </span>
                                                    </Grid>

                                                </Grid>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={4} sm={12}>
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.2, delay: 0.15 }}
                                                viewport={{ once: true }}>
                                                <div className={styles.productItemImg}>
                                                    <img src={lyoWatchImg.src} alt='LYO Watch' />
                                                </div>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={4} sm={12}>

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.3, delay: 0.25 }}
                                                viewport={{ once: true }}>
                                                <Typography variant='h4'>
                                                    Integrated with Crypto Apps
                                                </Typography>

                                                <Grid container spacing={3} className={styles.productSpec} >
                                                    <Grid item md={12} xs={12}>
                                                       
                                                            <Typography variant='h6'>
                                                                Check real-time prices of LYO BTC, ETH,
                                                                Altcoins on your watch.
                                                            </Typography>
                                                       
                                                    </Grid>
                                                </Grid>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: "100%",
                                                        visibility: 'hidden',
                                                    }}
                                                    whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                    transition={{ duration: 0.4, delay: 0.30 }}
                                                    viewport={{ once: true }}>
                                                    <Button variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`} >Shop Now</Button>
                                                </motion.div>

                                            </motion.div>
                                        </Grid>



                                    </Grid>
                                </Container>
                            </div>

                            <div className={`${styles["productItemWrap"]} ${styles["bgShape01"]}`}>
                                <Container  className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.lyoTabMain} >

                                        <Grid item md={6} sm={12}>
                                            <Typography variant='h2'>
                                                <span>LYO</span> TAB
                                            </Typography>

                                            <Typography variant='h6'>
                                                Versatile design with keyboard and touchscreen to fit  every occasion.
                                                To take with you everywhere.
                                            </Typography>

                                            <Typography variant='h4'>
                                                Versatile Use
                                            </Typography>

                                            <Grid container spacing={3} className={styles.productSpec} >
                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<OctaCoreIcon/>
                                                            <Typography variant='h6'>
                                                                OctaCore MTK 2.4 Ghz
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<ZoomIcon/>
                                                            <Typography variant='h6'>
                                                                Sony 64MPX Main Camera with Macro and Zoom
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>



                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<RamIcon/>
                                                            <Typography variant='h6'>
                                                                12GB RAM
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>


                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<BatteryIcon/>
                                                            <Typography variant='h6'>
                                                                6100 mAh Battery Power
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>



                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.2, delay: 0.15 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<DpiIcon/>
                                                            <Typography variant='h6'>
                                                                10.1″ Full-HD Display
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>


                                                <Grid item md={6}>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            x: "-100%",
                                                            visibility: 'hidden',
                                                        }}
                                                        whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                        transition={{ duration: 0.4, delay: 0.30 }}
                                                        viewport={{ once: true }}>
                                                        <span>                                                            
															<MintingIcon/>
                                                            <Typography variant='h6'>
                                                                Minting App Native
                                                            </Typography>
                                                        </span>
                                                    </motion.div>
                                                </Grid>
                                            </Grid>

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.4, delay: 0.30 }}
                                                viewport={{ once: true }}>
                                                <Button variant="contained" className={`${styles["btn"]} ${styles["btn_primary"]}`} >Shop Now</Button>
                                            </motion.div>
                                        </Grid>

                                        <Grid item md={6} sm={12}>

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: "100%",
                                                    visibility: 'hidden',
                                                }}
                                                whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                                transition={{ duration: 0.3, delay: 0.25 }}
                                                viewport={{ once: true }}>

                                                <div className={styles.productItemImg}>
                                                    <img src={lyoTabImg.src} alt='LYO Tab' />
                                                </div>
                                            </motion.div>
                                        </Grid>

                                    </Grid>
                                </Container>
                            </div>

                        </div>

                        {/* Content Section End */}

                        {/* Partners Section Start */}

                        <div className={styles.partersWrap}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} sm={12}>
                                    <div className={styles.sectionHeading}>
                                        <Typography variant='h2'>
                                            We Are
                                        </Typography>
                                        </div>

                                        <br></br>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: "-100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                            // animate={mainControls}
                                            transition={{ duration: 0.3, delay: 0.10 }}
                                            viewport={{ once: true }}>


                                            <div className={styles.partnersImg}>
                                                <img src={weAre01.src} alt='Partner Logo' />
                                                <img src={weAre02.src} alt='Partner Logo' />
                                                <img src={weAre03.src} alt='Partner Logo' />
                                                <img src={weAre04.src} alt='Partner Logo' />
                                            </div>
                                        </motion.div>
                                    </Grid>

                                    <Grid item md={6} sm={12}>
                                    <div className={styles.sectionHeading}>
                                        <Typography variant='h2'>
                                            Product Certifications
                                        </Typography>
                                        </div>
                                        <br></br>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: "100%",
                                                visibility: 'hidden'
                                            }}
                                            whileInView={{ opacity: 1, x: 0, visibility: 'visible' }}
                                            // animate={mainControls}
                                            transition={{ duration: 0.3, delay: 0.10 }}
                                            viewport={{ once: true }}>
                                            <div className={styles.partnersImg}>
                                                <img src={pclogo01.src} alt='Partner Logo' />
                                                <img src={pclogo02.src} alt='Partner Logo' />
                                                <img src={pclogo03.src} alt='Partner Logo' />
                                                <img src={pclogo04.src} alt='Partner Logo' />
                                                <img src={pclogo05.src} alt='Partner Logo' />
                                            </div>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Container>

                        </div>

                        {/* Partners Section End */}
                        <Footer />
                    </main >
                </ThemeProvider >

                {/* <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={slideControls}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    style={{
                        position: "absolute",
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: "red",
                        zIndex: 20,
                    }}
                /> */}
            </div>
        </>
    )
}

