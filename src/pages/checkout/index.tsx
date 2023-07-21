import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
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
import useTranslation from 'next-translate/useTranslation';
import CartTotalComponent from '@/components/cart/cart-total.component';

export default function Checkout() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const [paymentType, setPaymentType] = React.useState('crypto');
  const [paymentMethods, setPaymentMethods] = React.useState([]);

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const { t } = useTranslation('cart');

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType((event.target as HTMLInputElement).value);
  };

  const getPaymentMethodList = async () => {
    try {
      const result = await getPaymentMethods();

      setPaymentMethods(result?.data?.data);

      globalContext.setGlobalLoading(false);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  React.useEffect(() => {
    globalContext.setGlobalLoading(true);
    getPaymentMethodList()
  }, [globalContext.cart]);

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
                  <CartTotalComponent isCheckout={true}></CartTotalComponent>
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
