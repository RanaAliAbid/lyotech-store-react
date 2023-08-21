import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Header from '../common/header';
import Footer from '../common/footer';

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
import certificate01 from '../img/certification-logo/certificat01.png';
import certificate02 from '../img/certification-logo/certificat02.png';
import certificate03 from '../img/certification-logo/certificat03.png';
import certificate04 from '../img/certification-logo/certificat04.png';
import certificate05 from '../img/certification-logo/certificat05.png';
import certificate06 from '../img/certification-logo/certificat06.png';
import certificate07 from '../img/certification-logo/certificat07.png';
import certificate08 from '../img/certification-logo/certificat08.png';
import certificate09 from '../img/certification-logo/certificat09.png';
import certificate10 from '../img/certification-logo/certificat10.png';
import certificate11 from '../img/certification-logo/certificat11.png';
import certificate12 from '../img/certification-logo/certificat12.png';
import certificate13 from '../img/certification-logo/certificat13.png';

import we01 from '../img/we-are/we01.png';
import we02 from '../img/we-are/we02.png';
import we03 from '../img/we-are/we03.png';
import we04 from '../img/we-are/we04.png';
import we05 from '../img/we-are/we05.png';

import partner01 from '../img/partners-logo/partner01.png';
import partner02 from '../img/partners-logo/partner02.png';

import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { IncomingMessage, ServerResponse } from 'http';

const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';
import { getHomePageProducts } from '@/services/products/product.service';

import {
  getLocalStorage,
  homePageProducts,
  lfi_one_smartphone,
  lyo_tab,
  lyo_watch,
  setLocalStorage,
} from '@/utils/app.utils';
import Link from 'next/link';

export default function Home({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      if (!id) {
        globalContext.setAlertProps({
          show: true,
          title: `Coming Soon...`,
          text: '',
          toast: true,
          showConfirmButton: false,
          background: '#8B0000',
          timer: 6000,
          timerProgressBar: true,
          callback: globalContext.closeAlert,
        });

        return;
      }

      const result = await globalContext.addCart(id, 1);

      if (result) return router.push('/cart');

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  useEffect(() => {
    let localProd: any = getLocalStorage('productsId') ?? '';

    if (products?.LFI_ONE_Smartphone?.length > 3) {
      setLocalStorage('productsId', JSON.stringify(products));
      globalContext.setHomeProduct(products);
    } else {
      if (localProd.length > 3) {
        localProd = JSON.parse(localProd);

        globalContext.setHomeProduct(localProd);
      }
    }
  }, [products]);

  React.useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const _errorMessage = urlParams.get('error');

      if (_errorMessage != null) {
        globalContext.setAlertProps({
          show: true,
          title: atob(_errorMessage),
          text: '',
          toast: true,
          showConfirmButton: false,
          background: '#8B0000',
          timer: 6000,
          timerProgressBar: true,
          callback: globalContext.closeAlert,
        });

        router.push('/');
      }
    } catch (error) {}
  }, []);

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <main className={styles.main}>
            <Header title="Home" />
            {/* Banner Section Start */}
            <div className={styles.paddingT0}>
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

                        <Link href="#deviceSection">
                          <Button
                            variant="contained"
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                          >
                            {t('banner-btn-title')}
                          </Button>
                        </Link>
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
            </div>
            {/* Banner Section End */}

            {/* Services Section Start */}
            <div className={styles.homeServicesWrap} id="serviceSection">
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
                          {t('service-header1')}
                        </Typography>
                        <Typography variant="h6">
                          {t('service-desc1')}
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
                          {t('service-header2')}
                        </Typography>
                        <Typography variant="h6">
                          {t('service-desc2')}
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
                          {t('service-header3')}
                        </Typography>
                        <Typography variant="h6">
                          {t('service-desc3')}
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
                          {t('service-header4')}
                        </Typography>
                        <Typography variant="h6">
                          {t('service-desc4')}
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            {/* Services Section End */}

            {/* Servers Section Start */}
            <div className={`${styles['paddingTB60']} ${styles['serverWrap']}`}>
              <Container className={styles.containerBox}>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <div className={styles.sectionHeading}>
                      <Typography variant="h2">{t('server-header')}</Typography>
                      <Typography variant="h6">{t('server-desc')}</Typography>
                    </div>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={8} sm={6} xs={12}>
                    <div
                      className={`${styles['serverItem']} ${styles['rootAccessImg']}`}
                    >
                      <div className={styles.serverItemOverlay}></div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: '100%',
                          visibility: 'hidden',
                          zIndex: 2,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          visibility: 'visible',
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Typography variant="h4">
                          {t('server-item1-header')}
                        </Typography>
                      </motion.div>
                    </div>
                  </Grid>

                  <Grid item md={4} sm={6} xs={12}>
                    <div
                      className={`${styles['serverItem']} ${styles['ssdServerImg']}`}
                    >
                      <div className={styles.serverItemOverlay}></div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: '100%',
                          visibility: 'hidden',
                          zIndex: 2,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          visibility: 'visible',
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Typography variant="h4">
                          {t('server-item2-header')}
                        </Typography>
                      </motion.div>
                    </div>
                  </Grid>

                  <Grid item md={4} sm={6} xs={12}>
                    <div
                      className={`${styles['serverItem']} ${styles['ultSpeedImgImg']}`}
                    >
                      <div className={styles.serverItemOverlay}></div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: '100%',
                          visibility: 'hidden',
                          zIndex: 2,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          visibility: 'visible',
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Typography variant="h4">
                          {t('server-item3-header')}
                        </Typography>
                      </motion.div>
                    </div>
                  </Grid>

                  <Grid item md={8} sm={6} xs={12}>
                    <div
                      className={`${styles['serverItem']} ${styles['optimizeVPSImg']}`}
                    >
                      <div className={styles.serverItemOverlay}></div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: '100%',
                          visibility: 'hidden',
                          zIndex: 2,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          visibility: 'visible',
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Typography variant="h4">
                          {t('server-item4-header')}
                        </Typography>
                      </motion.div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>

            <div className={styles.productsWrap} id="deviceSection">
              <div
                className={`${styles['productItemWrap']} ${styles['bgShape01']}`}
              >
                <Container className={styles.containerBox}>
                  <Grid container spacing={3}>
                    <Grid item md={6} sm={12}>
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
                    <Grid item md={6} sm={12}>
                      <Typography variant="h2">
                        <span>LFi</span> ONE {t('product-item1-header')}
                      </Typography>

                      <br />

                      <Typography variant="h5">
                        <b>
                          {/* {(1397.0 * globalContext.conversionRate)?.toFixed(
                            globalContext.priceToFixed
                          )}
                          &nbsp;{globalContext.currencySymbol} */}
                        </b>
                      </Typography>
                      <br />

                      <Typography variant="h6">
                        {t('product-item1-desc')}
                      </Typography>

                      <Typography variant="h4">
                        {t('product-item1-subheader')}
                      </Typography>

                      <Grid
                        container
                        spacing={3}
                        className={styles.productSpec}
                      >
                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <OctaCoreIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">
                              OctaCore MTK 2.4 Ghz
                            </Typography>
                          </motion.div>
                        </Grid>
                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <ZoomIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">
                              Sony 64MPX Main Camera with Macro and Zoom
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <RamIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">12GB RAM</Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <BatteryIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">
                              6100 mAh Battery Power
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <DpiIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">
                              IPS 6.78” FHD+ @ 120Hz 396 DPI
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <MintingIcon /> &nbsp;
                            </span>
                            <Typography variant="h6">
                              Mobile Minting App Native
                            </Typography>
                          </motion.div>
                        </Grid>
                      </Grid>

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: '100%',
                          visibility: 'hidden',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          marginTop: '20px',
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          visibility: 'visible',
                        }}
                        transition={{ duration: 0.2, delay: 0.25 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          onClick={
                            (e) => {}
                            // addProductToCart(
                            //   globalContext?.homeProduct?.LFI_ONE_Smartphone
                            // )
                          }
                          variant="contained"
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          Available Soon...
                          {/* {t('product-btn1-shop')} */}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container>
              </div>

              <div
                className={`${styles['productItemWrap']} ${styles['bgShape02']}`}
              >
                <Container className={styles.containerBox}>
                  <Grid container spacing={3}>
                    <Grid item md={12} xs={12} className={styles.watchHeading}>
                      <Typography variant="h2">
                        <span>LYO</span> WATCH
                      </Typography>

                      <Typography variant="h6">
                        {t('product-item2-desc')}
                      </Typography>
                    </Grid>

                    <Grid item md={4} sm={12}>
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
                        <Typography variant="h4">
                          {t('product-item2-subheader1')}
                        </Typography>

                        <Grid
                          container
                          spacing={3}
                          className={styles.productSpec}
                        >
                          <Grid item md={12}>
                            <div className={styles.productItemSpec}>
                              <span>
                                <OctaCoreIcon /> &nbsp;
                              </span>
                              <Typography variant="h6">
                                {t('product-item2-carac1')}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item md={12}>
                            <div className={styles.productItemSpec}>
                              <span>
                                <CalenderIcon /> &nbsp;
                              </span>
                              <Typography variant="h6">
                                {t('product-item2-carac2')}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item md={12}>
                            <div className={styles.productItemSpec}>
                              <span>
                                <HealthIcon /> &nbsp;
                              </span>
                              <Typography variant="h6">
                                {t('product-item2-carac3')}
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </motion.div>
                    </Grid>

                    <Grid item md={4} sm={12}>
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
                        transition={{ duration: 0.2, delay: 0.15 }}
                        viewport={{ once: true }}
                      >
                        <div className={styles.productItemImg}>
                          <img src={lyoWatchImg.src} alt="LYO Watch" />
                        </div>
                      </motion.div>
                    </Grid>

                    <Grid item md={4} sm={12}>
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
                        <Typography variant="h4">
                          {t('product-item2-subheader2')}
                        </Typography>

                        <Grid
                          container
                          spacing={3}
                          className={styles.productSpec}
                        >
                          <Grid item md={12} xs={12}>
                            <Typography variant="h6">
                              {t('product-item2-carac4')}
                            </Typography>
                          </Grid>
                        </Grid>

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
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Button
                            onClick={(e) =>
                              addProductToCart(
                                globalContext?.homeProduct?.LYO_Watch
                              )
                            }
                            variant="contained"
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                          >
                            {/* {t('product-btn2-shop')} */}
                            Coming Soon...
                          </Button>
                        </motion.div>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container>
              </div>

              <div
                className={`${styles['productItemWrap']} ${styles['bgShape01']}`}
              >
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.lyoTabMain}>
                    <Grid item md={6} sm={12}>
                      <Typography variant="h2">
                        <span>LYO</span> TAB
                      </Typography>

                      <Typography variant="h6">
                        {t('product-item3-desc')}
                      </Typography>

                      <Typography variant="h4">Versatile Use</Typography>

                      <Grid
                        container
                        spacing={3}
                        className={styles.productSpec}
                      >
                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <OctaCoreIcon />
                            </span>
                            <Typography variant="h6">
                              OctaCore MTK 2.4 Ghz
                            </Typography>
                          </motion.div>
                        </Grid>
                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <ZoomIcon />
                            </span>
                            <Typography variant="h6">
                              Sony 64MPX Main Camera with Macro and Zoom
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <RamIcon />
                            </span>
                            <Typography variant="h6">12GB RAM</Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <BatteryIcon />
                            </span>
                            <Typography variant="h6">
                              6100 mAh Battery Power
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.2, delay: 0.15 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <DpiIcon />
                            </span>
                            <Typography variant="h6">
                              10.1″ Full-HD Display
                            </Typography>
                          </motion.div>
                        </Grid>

                        <Grid item md={6}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: '-100%',
                              visibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              marginTop: '20px',
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              visibility: 'visible',
                            }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span>
                              <MintingIcon />
                            </span>
                            <Typography variant="h6">
                              Minting App Native
                            </Typography>
                          </motion.div>
                        </Grid>
                      </Grid>

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
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          onClick={(e) =>
                            addProductToCart(
                              globalContext?.homeProduct?.LYO_Tab
                            )
                          }
                          variant="contained"
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          {/* {t('product-btn3-shop')} */}
                          Coming Soon...
                        </Button>
                      </motion.div>
                    </Grid>

                    <Grid item md={6} sm={12}>
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
                        <div className={styles.productItemImg}>
                          <img src={lyoTabImg.src} alt="LYO Tab" />
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
                  <Grid item md={12} sm={12}>
                    <div className={styles.sectionHeading}>
                      <Typography variant="h2">
                        product certification
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
                        <img src={certificate01.src} alt="Certification Logo" />
                        <img src={certificate02.src} alt="Certification Logo" />
                        <img src={certificate03.src} alt="Certification Logo" />
                        <img src={certificate04.src} alt="Certification Logo" />
                        <img src={certificate05.src} alt="Certification Logo" />
                        <img src={certificate06.src} alt="Certification Logo" />
                        <img src={certificate07.src} alt="Certification Logo" />
                        <img src={certificate08.src} alt="Certification Logo" />
                        <img src={certificate09.src} alt="Certification Logo" />
                        <img src={certificate10.src} alt="Certification Logo" />
                        <img src={certificate11.src} alt="Certification Logo" />
                        <img src={certificate12.src} alt="Certification Logo" />
                        <img src={certificate13.src} alt="Certification Logo" />
                      </div>
                    </motion.div>
                  </Grid>

                  <Grid item md={12} sm={12}>
                    <div className={styles.sectionHeading}>
                      <Typography variant="h2">We Are</Typography>
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
                        <img src={we01.src} alt="We Are Logo" />
                        <img src={we02.src} alt="We Are Logo" />
                        <img src={we03.src} alt="We Are Logo" />
                        <img src={we04.src} alt="We Are Logo" />
                        <img src={we05.src} alt="We Are Logo" />
                      </div>
                    </motion.div>
                  </Grid>

                  <Grid item md={12} sm={12}>
                    <div className={styles.sectionHeading}>
                      <Typography variant="h2">Our Partners</Typography>
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
                      <div className={styles.partnersImg03}>
                        <img src={partner01.src} alt="Partner Logo" />
                        <img src={partner02.src} alt="Partner Logo" />
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
  );
}

export const getServerSideProps: GetServerSideProps<{
  products: any;
}> = async ({ req, res }: { req: IncomingMessage; res: ServerResponse }) => {
  let result = null;

  result = await getHomePageProducts(homePageProducts);

  let productsId = homePageProducts;

  productsId.LFI_ONE_Smartphone =
    result?.data?.data.find((x: any) => x.productKey === lfi_one_smartphone)
      ?._id ?? '';
  productsId.LYO_Watch =
    result?.data?.data.find((x: any) => x.productKey === lyo_watch)?._id ?? '';
  productsId.LYO_Tab =
    result?.data?.data.find((x: any) => x.productKey === lyo_tab)?._id ?? '';

  const products = productsId;
  return { props: { products } };
};
