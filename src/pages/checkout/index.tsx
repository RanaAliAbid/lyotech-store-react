import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';

import lyoMC from '../../img/lyomerchant.png';
import usdtCoin from '../../img/theter_trc.png';
import creditCard from '../../img/creaditCard.png';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getPaymentMethods } from '@/services/payments/payment.service';
import { getShippingMethods } from '@/services/cart/cart.service';
import useTranslation from 'next-translate/useTranslation';

export default function Checkout() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const [shippingType, setShippingType] = React.useState('express');
  const [paymentType, setPaymentType] = React.useState('crypto');
  const [paymentMethods, setPaymentMethods] = React.useState([]);
  const [shippingMethods, setShippingMethods] = React.useState([]);

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const { t } = useTranslation('cart');

  const handleChangeShippingType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShippingType((event.target as HTMLInputElement).value);
  };

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType((event.target as HTMLInputElement).value);
  };

  const getPaymentMethodList = async () => {
    try {
      const result = await getPaymentMethods();

      setPaymentMethods(result?.data?.data);

      getShippingMethodList()

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const getShippingMethodList = async () => {
    try {
      const result = await getShippingMethods();

      setShippingMethods(result?.data?.data);

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  React.useEffect(() => {
    globalContext.setGlobalLoading(true);
    getPaymentMethodList()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Cart (${globalContext.cart?.cart?.products?.length} Items)`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <div className={styles.wrapTitle}>
                        <Typography variant="h4">Shipping Address</Typography>

                        <Typography variant="h6">
                          <Link href="#"> Add new address </Link>
                        </Typography>
                      </div>

                      <div
                        className={`${styles['wrapBox']} ${styles['addresses']}`}
                      >
                        <div className={styles.addressesType}>
                          <Typography variant="h4">Work</Typography>
                          <Typography variant="h6">
                            <Link href="#"> Change </Link>
                          </Typography>
                        </div>

                        <Typography variant="h5">Vimek patel</Typography>

                        <Typography variant="body1">
                          vimekpatel123456@gmail.com
                        </Typography>

                        <Typography variant="body1">
                          3rd floor, CBA technologies 57XF+XM <br />
                          Dubai Dubai UAE
                        </Typography>

                        <Typography variant="body1">+971-58-1234659</Typography>
                      </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <div className={styles.wrapTitle}>
                        <Typography variant="h4">Billing address</Typography>
                      </div>
                      <div
                        className={`${styles['wrapBox']} ${styles['addresses']}`}
                      >
                        <div className={styles.addressesType}>
                          <Typography variant="h4">Work</Typography>
                          <Typography variant="h6">
                            <Link href="#"> Change </Link>
                          </Typography>
                        </div>

                        <Typography variant="h5">Vimek patel</Typography>

                        <Typography variant="body1">
                          vimekpatel123456@gmail.com
                        </Typography>

                        <Typography variant="body1">
                          3rd floor, CBA technologies 57XF+XM <br />
                          Dubai Dubai UAE
                        </Typography>

                        <Typography variant="body1">+971-58-1234659</Typography>
                      </div>
                    </Grid>
                  </Grid>

                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">Shipping Address</Typography>

                    <Typography variant="h6">
                      <Link href="#"> Add new address </Link>
                    </Typography>
                  </div>

                  <div className={styles.wrapBox}>
                    <div className={styles.flexBox}>
                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          First name *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="First name"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Last name *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Last name"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Email Address *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Email Address"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}> Phone * </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Country / Region *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Country / Region"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}> State </label>
                        <Input
                          className={styles.formInput}
                          placeholder="State"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Town / City *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Town / City"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Partner User ID *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Partner User ID "
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Address line 1 *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Address line 1"
                        />
                      </div>

                      <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                          {' '}
                          Address line 2 *{' '}
                        </label>
                        <Input
                          className={styles.formInput}
                          placeholder="Address line 2"
                        />
                      </div>
                    </div>

                    <div className={styles.addressBox}>
                      <FormControlLabel
                        control={<Checkbox size="small" defaultChecked />}
                        label="Billing Address same as shipping address."
                      />
                      <Typography variant="h6">
                        <Link href="#"> Add Billing address </Link>
                      </Typography>
                    </div>
                  </div>

                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">
                      Choose a payment method
                    </Typography>
                  </div>

                  <div
                    className={`${styles['wrapBox']} ${styles['paymentBox']}`}
                  >
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      value={paymentType}
                      onChange={handleChangePayment}
                    >
                      {
                        (paymentMethods?.length > 0 && paymentMethods?.findIndex((x: any) => x?.type?.name?.toLowerCase() === "crypto") != -1) && (
                          <ListItem
                            className={`${paymentType === 'crypto' ? styles.show : ''
                              }`}
                          >
                            <div className={styles.paymentTypelogo}>
                              <div className={styles.lyomc}>
                                <FormControlLabel
                                  value="crypto"
                                  control={
                                    <Radio
                                      size="small"
                                      checked={paymentType === 'crypto'}
                                    />
                                  }
                                  label=""
                                />
                                <img src={lyoMC.src} alt="" />
                              </div>
                              <div className={styles.coin}>
                                <img src={usdtCoin.src} alt="" />
                              </div>
                            </div>

                            <div className={styles.payInfoBox}>
                              <div className={styles.note}>
                                <Typography variant="h5">
                                  Pay with your crypto currencies via our super-cool
                                  payment gateway.
                                </Typography>
                              </div>
                            </div>
                          </ListItem>
                        )
                      }

                      {
                        (paymentMethods?.length > 0 && paymentMethods?.findIndex((x: any) => x?.type?.name?.toLowerCase() === "card") != -1) && (
                          <ListItem
                            className={`${paymentType === 'creditCard' ? styles.show : ''
                              }`}
                          >
                            <div className={styles.paymentTypelogo}>
                              <div className={styles.lyomc}>
                                <FormControlLabel
                                  value="creditCard"
                                  control={
                                    <Radio
                                      size="small"
                                      checked={paymentType === 'creditCard'}
                                    />
                                  }
                                  label="Credit card"
                                />
                              </div>
                              <div className={styles.usdt}>
                                <img src={creditCard.src} alt="" />
                              </div>
                            </div>
                            <div className={styles.payInfoBox}>
                              <Grid item md={12} xs={12}>
                                <div className={styles.formControl}>
                                  <label> Card Number </label>
                                  <Input
                                    className={styles.formInput}
                                    placeholder="0000 0000 0000 0000"
                                  />
                                </div>
                              </Grid>
                              <Grid container className={styles.payInline}>
                                <Grid item md={6} xs={12}>
                                  <div className={styles.formControl}>
                                    <label> Expiry date </label>
                                    <Input
                                      className={styles.formInput}
                                      placeholder="MM YYYY"
                                    />
                                  </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                  <div className={styles.formControl}>
                                    <label> CVV Number </label>
                                    <Input
                                      className={styles.formInput}
                                      placeholder="123"
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                              <FormControlLabel
                                control={<Checkbox size="small" defaultChecked />}
                                label="Save payment information to my account for future purchases."
                              />
                              <div className={styles.note}>
                                <Typography variant="h5">
                                  Pay with your credit card via Stripe. TEST MODE
                                  ENABLED. In test mode, you can use the card number
                                  4242424242424242 with any CVC and a valid
                                  expiration date or check the Testing Stripe
                                  documentation for more card numbers.
                                </Typography>
                              </div>
                            </div>
                          </ListItem>
                        )
                      }

                    </RadioGroup>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div
                    className={`${styles['wrapTitle']} ${styles['orderSum']}`}
                  >
                    <Typography variant="h4">Order Summary</Typography>

                    {/* <Typography variant="h6">Order ID: #0297509</Typography> */}
                  </div>

                  <div className={styles.wrapBox}>
                    <div className={styles.summaryDetails}>
                      <List>
                        <ListItem className={styles.subTotal}>
                          <Typography variant="h6">
                            {t('Subtotal')} ({globalContext?.cart?.cart?.products?.length} items)
                          </Typography>
                          <Typography variant="h6">{globalContext?.cart?.cart?.totalAmount} {globalContext.currencySymbol}</Typography>
                        </ListItem>

                        <ListItem>
                          <Typography variant="h6">{t('Shipping')}</Typography>
                          <Typography variant="h6">
                            <Link>Details</Link>
                          </Typography>
                        </ListItem>
                      </List>

                      <List className={styles.shippingType}>
                        <RadioGroup
                          name="controlled-radio-buttons-group"
                          value={shippingType}
                          onChange={handleChangeShippingType}
                        >
                          {
                            (shippingMethods && shippingMethods?.length > 0) ? (
                              shippingMethods?.map((method: any, index: any) => (
                                <ListItem
                                  key={index}
                                  className={`${shippingType === method?._id ? styles.active : ''
                                    }`}
                                >
                                  <FormControlLabel
                                    value={method?._id}
                                    control={
                                      <Radio
                                        size="small"
                                        checked={shippingType === method?._id}
                                      />
                                    }
                                    label={method.name}
                                  />
                                  <Typography variant="h6">{method?.price} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                              ))
                            ) : (
                              <></>
                            )
                          }

                        </RadioGroup>
                      </List>

                      <List>
                        <ListItem>
                          <Typography variant="h6">Membership Fee</Typography>
                          <Typography variant="h6">49.00 €</Typography>
                        </ListItem>

                        <ListItem>
                          <Typography variant="h6">VAT 5%</Typography>
                          <Typography variant="h6">16.43 €</Typography>
                        </ListItem>

                        <ListItem>
                          <Typography variant="h6">Activation Fee</Typography>
                          <Typography variant="h6">13.50 €</Typography>
                        </ListItem>
                      </List>

                      <List>
                        <ListItem>
                          <Typography variant="h6">
                            Payment Processing Fee
                          </Typography>
                          <Typography variant="h6">04.00 €</Typography>
                        </ListItem>
                      </List>

                      <List className={styles.policySummary}>
                        <ListItem>
                          <div className={styles.allCenter}>
                            <Checkbox size="small" defaultChecked />
                            <Typography variant="h5">
                              One Care Policy
                            </Typography>
                          </div>
                          <Typography variant="h6">150.00 €</Typography>
                        </ListItem>
                      </List>

                      <List>
                        <ListItem className={styles.summaryfoot}>
                          <Typography variant="h5">Total</Typography>
                          <Typography variant="h5">579.18 €</Typography>
                        </ListItem>
                      </List>
                    </div>
                    <Button
                      variant="contained"
                      fullWidth
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      Checkout
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>

          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
