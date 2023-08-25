import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import lfiPhone from '../../img/lfiPhone.png';
import OctaCoreIcon from '../../img/octaCoreIcon.svg';
import MintingIcon from '../../img/mintingIcon.svg';
import DpiIcon from '../../img/dpiIcon.svg';
import BatteryIcon from '../../img/batteryIcon.svg';
import ZoomIcon from '../../img/zoomIcon.svg';
import RamIcon from '../../img/ramIcon.svg';

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
  lyo_special_phone1,
  lyo_special_phone2,
  lyo_tab,
  lyo_watch,
  setLocalStorage,
} from '@/utils/app.utils';
import Link from 'next/link';

export default function HomePrivate({
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
  const [accessPassword, setAccessPassword] = React.useState<string>('');
  const [validPassword, setValidPassword] = React.useState<boolean>(false);

  useEffect(() => {
    if (accessPassword === process.env.SPECIAL_PRODUCT_PASSWORD) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [accessPassword]);

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

  return validPassword ? (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <main className={styles.main}>
            <Header title="Home" />

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
                        <b></b>
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
                          onClick={(e) =>
                            addProductToCart(
                              globalContext?.homeProduct?.LYO_Special_phone1
                            )
                          }
                          variant="contained"
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          {/* Available Soon... */}
                          {t('product-btn1-shop')}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
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
                        <b></b>
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
                          onClick={(e) =>
                            addProductToCart(
                              globalContext?.homeProduct?.LYO_Special_phone2
                            )
                          }
                          variant="contained"
                          className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                          {/* Available Soon... */}
                          {t('product-btn1-shop')}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>

            {/* Content Section End */}

            <Footer />
          </main>
        </ThemeProvider>
      </div>
    </>
  ) : (
    <div>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title="Home" />

          <div className={styles.productsWrap} id="deviceSection">
            <div
              className={`${styles['productItemWrap']} ${styles['bgShape01']}`}
            >
              <Container className={styles.containerBox}>
                <Grid container spacing={3}>
                  <Grid item md={3} sm={12}></Grid>
                  <Grid item md={6} sm={12}>
                    {' '}
                    <div className={styles.inline}>
                      <Input
                        onChange={(e) => setAccessPassword(e.target.value)}
                        type="password"
                        className={`${styles.formInput} w-100`}
                        placeholder={t('Access Password')}
                        value={accessPassword}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="contained"
                      fullWidth
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      {'Submit'}
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  products: any;
}> = async ({ req, res }: { req: IncomingMessage; res: ServerResponse }) => {
  let result = null;

  if (process.env.SPECIAL_PRODUCT_ENABLE != 'true') {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  result = await getHomePageProducts(homePageProducts);

  let productsId = homePageProducts;

  productsId.LFI_ONE_Smartphone =
    result?.data?.data.find((x: any) => x.productKey === lfi_one_smartphone)
      ?._id ?? '';
  productsId.LYO_Watch =
    result?.data?.data.find((x: any) => x.productKey === lyo_watch)?._id ?? '';
  productsId.LYO_Tab =
    result?.data?.data.find((x: any) => x.productKey === lyo_tab)?._id ?? '';

  productsId.LYO_Special_phone1 =
    result?.data?.data.find((x: any) => x.productKey === lyo_special_phone1)
      ?._id ?? '';
  productsId.LYO_Special_phone2 =
    result?.data?.data.find((x: any) => x.productKey === lyo_special_phone2)
      ?._id ?? '';

  const products = productsId;
  return { props: { products } };
};
