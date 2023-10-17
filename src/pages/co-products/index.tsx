import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

import Header from '../../common/header';
import Footer from '../../common/footer';
import AlertComponent from '../../common/alert';
import { List, ListItem, ListItemText } from '@mui/material';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import lfiProducts from '../../img/3d_base_hardware.png';
import device1000 from '../../img/device1000.png';
import device5000 from '../../img/device5000.png';

import supportIcon from '../../img/supportIcon.png';
import serversIcon from '../../img/serversIcon.png';
import testedIcon from '../../img/testedIcon.png';
import securityIcon from '../../img/securityIcon.png';
import lfiPhone from '../../img/lfiPhone.png';

import certificate01 from '../../img/certification-logo/certificat01.png';
import certificate02 from '../../img/certification-logo/certificat02.png';
import certificate03 from '../../img/certification-logo/certificat03.png';
import certificate04 from '../../img/certification-logo/certificat04.png';
import certificate05 from '../../img/certification-logo/certificat05.png';
import certificate06 from '../../img/certification-logo/certificat06.png';
import certificate07 from '../../img/certification-logo/certificat07.png';
import certificate08 from '../../img/certification-logo/certificat08.png';
import certificate09 from '../../img/certification-logo/certificat09.png';
import certificate10 from '../../img/certification-logo/certificat10.png';
import certificate11 from '../../img/certification-logo/certificat11.png';
import certificate12 from '../../img/certification-logo/certificat12.png';
import certificate13 from '../../img/certification-logo/certificat13.png';

import minter500 from '../../img/minter-500.png';
import minter1000 from '../../img/minter-1000.png';
import minter10000 from '../../img/minter-10000.png';
import minter5000 from '../../img/minter-5000.png';
import minterValidator from '../../img/minter-Validator.png';

import we01 from '../../img/we-are/we01.png';
import we02 from '../../img/we-are/we02.png';
import we03 from '../../img/we-are/we03.png';
import we04 from '../../img/we-are/we04.png';
import we05 from '../../img/we-are/we05.png';

import partner01 from '../../img/partners-logo/partner01.png';
import partner02 from '../../img/partners-logo/partner02.png';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';
import { getHomePageProducts } from '@/services/products/product.service';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { IncomingMessage, ServerResponse } from 'http';

import { SweetAlertOptions } from 'sweetalert2';
import {
  homePageProducts,
  lfi_one_smartphone,
  lyo_tab,
  lyo_watch,
} from '@/utils/app.utils';

export default function CoProducts({
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
    return;
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
    globalContext.setHomeProduct(products);
  }, [products]);

  const handleBuyFromPartner = () => {
    globalContext.setAlertProps({
      show: true,
      title: 'Partner Shop',
      text: 'Please go to your partner portal to place your orders.',
      toast: true,
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      callback: globalContext.closeAlert,
    });
  };

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <main className={styles.main}>
            <Header title="Co-Products" />
            {/* Banner Section Start */}
            <div
              className={`${styles['paddingT0']} ${styles['mainBannerLfi-Wrap']}`}
            >
              <div className={`${styles['mainBannerLfi']}`}>
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.bannerWrap}>
                    <Grid item md={6} xs={12}>
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
                          Create your layered ecosystem, where getting your
                          economic independence is not a dream. It is a system.
                        </Typography>

                        <Button
                          href="#deviceSection"
                          variant="contained"
                          style={{ color: 'white' }}
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          {t('Learn More')}
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
                        <div className={styles.bannerImgLFi}>
                          <Image
                            width={'900'}
                            height={'523'}
                            style={{ width: '100%', height: 'auto' }}
                            src={lfiProducts.src}
                            alt="Banner"
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
                        id="deviceSection"
                        className={`${styles['wrapBox']} ${styles['servicesItem']}`}
                      >
                        <div className={`${styles['servicesIcon']}`}>
                          <img src={supportIcon.src} alt="Icon" />
                        </div>
                        <Typography variant="h5">
                          Technical support 24/7
                        </Typography>
                        <Typography variant="h6">
                          Our technical teams are available 24 hours a day, 7
                          days a week.
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
                          Don't worry about your servers, our technical team
                          will take care of them.
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
                          All our devices have been tested and approved by our
                          experts.
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
                          Our datacentres are ISO 27001-certified, PCI DDS3,
                          GDPR Data Protection and Storage protected.
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            {/* Services Section End */}

            {/* LFi One Smartphone Section Start */}

            <div
              className={`${styles['productItemWrap']} ${styles['LfiPhoneSpecs']}`}
            >
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
                      <span>LFi ONE</span> Smartphone
                    </Typography>
                    <br />

                    <Typography variant="h5">
                      {(1397.0 * globalContext.conversionRate)?.toFixed(
                        globalContext.priceToFixed
                      )}
                      &nbsp;{globalContext.currencySymbol}
                    </Typography>
                    <Typography variant="h4">Specifications</Typography>

                    <Typography variant="h6">ARM Cortex 3GHz</Typography>

                    <Typography variant="h6">12GB Ram 256GB ROM</Typography>

                    <Typography variant="h6">6.78 FHD</Typography>

                    <Typography variant="h6">
                      64MPX Main Camera with Macro and Zoom
                    </Typography>

                    <Typography variant="h6">6100 MAh Battery Power</Typography>

                    <div className={styles.BuyLfiPhone}>
                      <Button
                        onClick={(e) =>
                          addProductToCart(
                            globalContext?.homeProduct?.LFI_ONE_Smartphone
                          )
                        }
                        variant="contained"
                        className={`${styles['btn']} ${styles['btn_primary']}`}
                      >
                        Available Soon...
                        {/* Buy Now */}
                      </Button>

                      {/* <Button
                        onClick={(e) => handleBuyFromPartner()}
                        variant="contained"
                        className={`${styles['btn']} ${styles['btn_primary']}`}
                      >
                        Buy from Partners
                      </Button> */}
                    </div>

                    <Typography variant="h6" className={styles.needHelp}>
                      Need Help?
                      <a
                        href="https://support.lyotechlabs.com/"
                        target="_blank"
                      >
                        {' '}
                        Create Ticket
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </div>

            {/* LFi One Smartphone Section End */}

            {/* LFi Hardware Section Start */}

            {/* Lfi Device Section Start */}

            <div
              className={`${styles['productItemWrap']} ${styles['LfiDeviceWrap']}`}
            >
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
                    viewport={{ once: true }}
                  >
                    <Typography variant="h1">
                      <strong> xLFi 500 </strong>
                    </Typography>

                    <Typography variant="h3">
                      Start the journey as a LFi Computer
                    </Typography>

                    {/* <Typography variant="h5">
                      XLFi 500 is the entry point in the amazing world of LFi
                      Minting platform. Enjoy its compact design and its
                      performances.{' '}
                    </Typography> */}

                    <Typography variant="h4">
                      <strong>Features: </strong>
                    </Typography>

                    <div className={styles.devicInfoList}>
                      <span>
                        <Typography variant="h5">2.4Ghz / 5Ghz</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">1 WAN 1 LAN</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">
                          External 12V power Adapter
                        </Typography>
                      </span>

                      <span>
                        <Typography variant="h5">14x13x6 cm</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">
                          Premium Plastic Case
                        </Typography>
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
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
                      <img src={minter500.src} alt="Device" />
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
                      <img src={minter1000.src} alt="Device" />
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
                    viewport={{ once: true }}
                  >
                    <Typography variant="h1">
                      <strong> xLFi 1000 </strong>
                    </Typography>

                    <Typography variant="h3">
                      Upgrade your level with more power.
                    </Typography>

                    {/*<Typography variant="h5">
                      XLFi 1000 is the first born of Aluminum Aeronautic Grade
                      Minters with great power and sleek design.
                    </Typography> */}

                    <Typography variant="h4">
                      <strong>Features: </strong>
                    </Typography>
                    <div className={styles.devicInfoList}>
                      <span>
                        <Typography variant="h5">2.4Ghz / 5Ghz</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">1 WAN 1 LAN</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">110-220V</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">14x13x6 cm</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">Aluminum Case</Typography>
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      Coming Soon
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>

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
                    viewport={{ once: true }}
                  >
                    <Typography variant="h1">
                      <strong>xLFi 5000 </strong>
                    </Typography>

                    <Typography variant="h3">
                      You chose to be a protagonist in the LFi Projects
                    </Typography>
                    {/* 
                    <Typography variant="h5">
                      XLFi 5000 increase your minting power, keeping its
                      distinctive sign with a sleek Aluminum Aeronautic Grade
                      case: power with style.
                    </Typography> */}

                    <Typography variant="h4">
                      <strong>Features: </strong>
                    </Typography>

                    <div className={styles.devicInfoList}>
                      <span>
                        <Typography variant="h5">2.4Ghz / 5Ghz</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">1 WAN 1 LAN</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">110-220V</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">16x14x8 cm</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">Aluminum Case</Typography>
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
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
                      <img src={minter5000.src} alt="Device" />
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
                      <img src={minter10000.src} alt="Device" />
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
                    viewport={{ once: true }}
                  >
                    <Typography variant="h1">
                      <strong>xLFi 10000 </strong>
                    </Typography>

                    <Typography variant="h3">
                      Bring the game to another level and raise your LFi power.
                    </Typography>

                    {/* <Typography variant="h5">
                      XLFi 10000 is designed for who want the maximum and the
                      best. Elevate your minting power to the top, keeping its
                      distinctive sign with a sleek Aluminum Aeronautic Grade
                      case: power with style.
                    </Typography> */}

                    <Typography variant="h4">
                      <strong>Features: </strong>
                    </Typography>

                    <div className={styles.devicInfoList}>
                      <span>
                        <Typography variant="h5">2.4Ghz / 5Ghz</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">1 WAN 1 LAN</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">110-220V</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">20x15x10 cm</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">Aluminum Case</Typography>
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      Coming Soon
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>

              <Grid container spacing={0}>
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
                    viewport={{ once: true }}
                  >
                    <Typography variant="h1">
                      <strong>xLFi Validator</strong>
                    </Typography>

                    <Typography variant="h3">
                      When power it's not enough and you want to rule the LFi
                      Game: be a validator.
                    </Typography>

                    {/* <Typography variant="h5">
                      XLFi Validator is the one you can't miss, the real game
                      changer. Become a validatore node-point and take the
                      maximum with performance peak and power output. Enjoy the
                      unique Black Aluminum Aeronautic Grade case: minting with
                      style.
                    </Typography> */}

                    <Typography variant="h4">
                      <strong>Features: </strong>
                    </Typography>

                    <div className={styles.devicInfoList}>
                      <span>
                        <Typography variant="h5">2.4Ghz / 5Ghz</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">1 WAN 1 LAN</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">110-220V</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">20x15x10 cm</Typography>
                      </span>

                      <span>
                        <Typography variant="h5">
                          Black Aluminum Case
                        </Typography>
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      Coming Soon
                    </Button>
                  </motion.div>
                </Grid>

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
                      <img src={minterValidator.src} alt="Device" />
                    </motion.div>
                  </div>
                </Grid>
              </Grid>
            </div>

            {/* Lfi Device Section End */}

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
                        {/* <img src={certificate01.src} alt="Certification Logo" />
                        <img src={certificate02.src} alt="Certification Logo" /> */}

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
                        <img src={we05.src} alt="We Are Logo" />
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
                        <img src={we04.src} alt="We Are Logo" />
                        <img src={certificate03.src} alt="Certification Logo" />
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
                        {/* <img src={partner01.src} alt="Partner Logo" /> */}
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
