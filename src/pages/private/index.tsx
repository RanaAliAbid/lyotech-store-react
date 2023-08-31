import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { IncomingMessage, ServerResponse } from 'http';

const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../contexts/AuthContext';
import { getHomePageProducts } from '../../services/products/product.service';

import {
  getLocalStorage,
  homePageProducts,
  lfi_one_smartphone,
  lyo_special_phone1,
  lyo_special_phone2,
  lyo_tab,
  lyo_watch,
  setLocalStorage,
} from '../../utils/app.utils';
import Link from 'next/link';
import { createCustomPayment } from '../../services/cart/cart.service';
import MastercardCheckoutComponent from '../../components/checkout/paymentMethods/mastercardCheckout.component';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { generateVoucherCode } from '../../utils/generateVoucherCode';

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
  const [customAmount, setCustomAmount] = React.useState<any>('');
  const [customId, setCustomId] = React.useState<string>('');
  const [session, setSession] = React.useState<string>('');
  const [paymentType, setPaymentType] = React.useState<string>('');
  const [orderData, setOrderData] = React.useState<any>([]);

  const paymentTypeOptions: string[] = [
    'Phone Shipment',
    'Shipping Cost',
    'Deposit For Phones',
    'Deposit for hardware',
    'Other',
  ];

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

  const createCustomLink = async () => {
    try {
      if (
        paymentType.length == 0 ||
        customId.length == 0 ||
        isNaN(customAmount) ||
        parseFloat(customAmount ?? '0') == 0
      ) {
        return;
      }

      globalContext.setGlobalLoading(true);

      const result = await createCustomPayment({
        id: customId,
        amount: parseFloat(customAmount ?? '0'),
        paymentType: paymentType,
      });

      if (result?.data?.data?.data?.masterCardSession) {
        console.log(
          'open checkout page',
          result?.data?.data?.data?.masterCardSession.sessionId
        );
        // setOrderData(result?.data?.data?.data);
        setSession(result?.data?.data?.data?.masterCardSession.sessionId);
      }

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
    const date = new Date();
    const id = generateVoucherCode()?.code;
    setCustomId(id);

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

            {/* <div className={styles.productsWrap} id="deviceSection">
              <div
                className={`${styles['productItemWrap']} ${styles['bgShape01']}`}
              > */}
            {/* <Container className={styles.containerBox}>
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
                          {/* Available Soon... 
                          {t('product-btn1-shop')}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container> */}
            {/* </div>
            </div> */}

            <div className={styles.productsWrap} id="deviceSection">
              <div
                className={`${styles['productItemWrap']} ${styles['bgShape01']}`}
              >
                {/* <Container className={styles.containerBox}>
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
                          {/* Available Soon... *
                          {t('product-btn1-shop')}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container> */}

                <Container className={styles.containerBox}>
                  <Grid container spacing={3}>
                    <Grid item md={3} sm={12}></Grid>
                    <Grid item md={6} sm={12}>
                      <Typography>{'Choose a Payment Type '}</Typography>
                      <Select
                        label="Payment Type"
                        className={`${styles.formTextField} formSelect w-100`}
                        value={paymentType}
                        size="small"
                      >
                        <MenuItem value={paymentType} disabled>
                          Payment Type
                        </MenuItem>
                        {paymentTypeOptions.map((type: string, index: any) => (
                          <MenuItem
                            key={index}
                            value={type}
                            onClick={async (e) => {
                              setPaymentType(type);
                            }}
                          >
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                      <br />
                      <br />
                      <Typography>{'Amount in euro '}</Typography>
                      <div className={styles.inline}>
                        <Input
                          onChange={(e: any) =>
                            setCustomAmount(parseFloat(e.target.value ?? ''))
                          }
                          type="number"
                          className={`${styles.formInput} w-100`}
                          placeholder={t('Amount In Euro')}
                          value={customAmount}
                        />
                      </div>
                      <br />
                      <br />
                      <Typography>{`Invoice Id`}</Typography>
                      <div className={styles.inline}>
                        <Input
                          onChange={(e: any) => setCustomId(e.target.value)}
                          type="text"
                          readOnly
                          className={`${styles.formInput} w-100`}
                          placeholder={t('Custom Id')}
                          value={customId}
                        />
                      </div>
                      <Button
                        onClick={(e: any) => createCustomLink()}
                        type="button"
                        variant="contained"
                        fullWidth
                        className={`${styles['btn']} ${styles['btn_primary']}`}
                      >
                        {'Create Payment Link'}
                      </Button>
                      <br />
                      <br />
                      <br />

                      {/* {orderData && (
                        <div className="">
                          <Button
                            onClick={(e: any) => createCustomLink()}
                            type="button"
                            variant="contained"
                            fullWidth
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                          >
                            {'Send by Email'}
                          </Button>
                          <Button
                            onClick={(e: any) =>
                              setSession(orderData.masterCardSession.sessionId)
                            }
                            type="button"
                            variant="contained"
                            fullWidth
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                          >
                            {'Open & copy the Link'}
                          </Button>
                        </div>
                      )} */}
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>

            {session && session.length > 5 && (
              <MastercardCheckoutComponent sessionId={session} />
            )}

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
  let result: any = null;

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
