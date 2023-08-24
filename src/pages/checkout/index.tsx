import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import {
  Alert,
  Button,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
} from '@mui/material';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import CartTotalComponent from '@/components/cart/cart-total.component';
import {
  addUserAddress,
  getUserAddressList,
  setUserDefaultAddress,
} from '@/services/addresses/addresses.service';
import ShippingFormComponent from '@/components/checkout/forms/shipping.component';
import BillingFormComponent from '@/components/checkout/forms/billing.component';
import PaymentMethodComponent from '@/components/checkout/payment.component';
import { saveUserOrder } from '@/services/orders/order.service';
import { formCheckEmptyFields } from '@/validators/order.validator';
import {
  countryCodeByCountryName,
  getLocalStorage,
  setLocalStorage,
} from '@/utils/app.utils';
import { FaArrowLeft } from 'react-icons/fa';
import DefaultAddressComponent from '@/components/checkout/address.component';
import MastercardCheckoutComponent from '@/components/checkout/paymentMethods/mastercardCheckout.component';

export default function Checkout() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const [paymentType, setPaymentType] = React.useState('lyomerchant');
  const [userAddressList, setUserAddressList] = React.useState<any>([]);
  const [changeAddress, setChangeAddress] = React.useState(false);
  const [formAddress, setFormAddress] = React.useState<any>(null);
  const [shippingSameBilling, setShippingSameBilling] = React.useState(true);
  const [localAddress, setLocalAddress] = React.useState<any>(null);
  const [formValidation, setFormValidation] = React.useState(null);
  const [enablePlaceOrder, setEnablePlaceOrder] = React.useState(false);
  const [displayAddress, setDisplayAddress] = React.useState(false);
  const [sessionId, setSessionId] = React.useState('');
  const [partnerCheckout, setPartnerCheckout] = React.useState<boolean>(false);
  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const { t } = useTranslation('cart');

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType((event.target as HTMLInputElement).value);
  };

  const getUserAddresses = async () => {
    try {
      if (!authContext.userConnected) return;

      globalContext.setGlobalLoading(true);

      const result = await getUserAddressList();

      if (result?.data && !result?.data?.data?.address?.defaultAddress) {
        setChangeAddress(true);
      }

      setUserAddressList(result?.data?.data);

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  React.useEffect(() => {
    getUserAddresses();

    if (!authContext.userConnected) {
      setChangeAddress(true);
    }

    if (globalContext?.cart?.cart?.partner) {
      setPartnerCheckout(true);
    } else {
      setPartnerCheckout(false);
    }
  }, [globalContext.cart]);

  React.useEffect(() => {
    if (!formAddress) return;

    const checkForm: any = formCheckEmptyFields(formAddress);

    if (!checkForm) return;

    if (
      !checkForm.shippingAddress.country ||
      (!checkForm.shippingAddress.city && !partnerCheckout) ||
      (!checkForm.shippingAddress.type && !partnerCheckout) ||
      (!checkForm.shippingAddress.address && !partnerCheckout) ||
      !checkForm.shippingAddress.phone ||
      !checkForm.shippingAddress.firstName ||
      !checkForm.shippingAddress.lastName ||
      !checkForm.shippingAddress.email
    ) {
      setEnablePlaceOrder(false);
    } else {
      if (!shippingSameBilling) {
        if (
          !checkForm.billingAddress.country ||
          (!checkForm.billingAddress.city && !partnerCheckout) ||
          (!checkForm.billingAddress.address && !partnerCheckout) ||
          !checkForm.billingAddress.phone ||
          !checkForm.billingAddress.firstName ||
          !checkForm.billingAddress.lastName ||
          !checkForm.billingAddress.email
        ) {
          setEnablePlaceOrder(false);
        } else {
          setEnablePlaceOrder(true);
        }
      } else {
        setEnablePlaceOrder(true);
      }
    }

    setFormValidation(checkForm);
  }, [userAddressList, formAddress, changeAddress]);

  React.useEffect(() => {
    let localCheckoutAddress: any = getLocalStorage('checkoutAddress');
    const _localAddress = JSON.parse(localCheckoutAddress);

    let addresses = {
      shippingAddress: {
        firstName:
          userAddressList?.address?.defaultAddress?.firstName ??
          _localAddress?.shippingAddress?.firstName ??
          authContext.connectedUser?.firstName ??
          '',
        lastName:
          userAddressList?.address?.defaultAddress?.lastName ??
          _localAddress?.shippingAddress?.lastName ??
          authContext.connectedUser?.lastName ??
          '',
        email:
          userAddressList?.address?.defaultAddress?.email ??
          _localAddress?.shippingAddress?.email ??
          authContext.connectedUser?.email ??
          '',
        phone:
          userAddressList?.address?.defaultAddress?.contact ??
          _localAddress?.shippingAddress?.phone ??
          '',
        address:
          userAddressList?.address?.defaultAddress?.address ??
          _localAddress?.shippingAddress?.address ??
          '',
        city:
          userAddressList?.address?.defaultAddress?.city ??
          _localAddress?.shippingAddress?.city ??
          '',
        country:
          userAddressList?.address?.defaultAddress?.country ??
          _localAddress?.shippingAddress?.country ??
          '',
        state:
          userAddressList?.address?.defaultAddress?.state ??
          _localAddress?.shippingAddress?.state ??
          '',
        address2: userAddressList?.address?.defaultAddress?.address2 ?? '',
        type: userAddressList?.address?.defaultAddress?.type ?? 'Other',
      },
      billingAddress: {
        firstName:
          userAddressList?.address?.defaultAddress?.firstName ??
          _localAddress?.shippingAddress?.firstName ??
          authContext.connectedUser?.firstName ??
          '',
        lastName:
          userAddressList?.address?.defaultAddress?.lastName ??
          _localAddress?.shippingAddress?.lastName ??
          authContext.connectedUser?.lastName ??
          '',
        email:
          userAddressList?.address?.defaultAddress?.email ??
          _localAddress?.shippingAddress?.email ??
          '',
        phone:
          userAddressList?.address?.defaultAddress?.contact ??
          _localAddress?.shippingAddress?.phone ??
          '',
        address:
          userAddressList?.address?.defaultAddress?.address ??
          _localAddress?.shippingAddress?.address ??
          '',
        city:
          userAddressList?.address?.defaultAddress?.city ??
          _localAddress?.shippingAddress?.city ??
          '',
        country:
          userAddressList?.address?.defaultAddress?.country ??
          _localAddress?.shippingAddress?.country ??
          '',
        state:
          userAddressList?.address?.defaultAddress?.state ??
          _localAddress?.shippingAddress?.state ??
          '',
        address2: userAddressList?.address?.defaultAddress?.address2 ?? '',
      },
      notes: '',
    };

    if (!userAddressList && !userAddressList?.address?.defaultAddress) {
      setChangeAddress(true);
    }

    setFormAddress(addresses);
  }, [changeAddress]);

  React.useEffect(() => {
    if (
      !authContext.userConnected &&
      formAddress &&
      formAddress?.shippingAddress?.email?.length > 5
    ) {
      setLocalStorage('checkoutAddress', JSON.stringify(formAddress));
    }
    // console.log("🚀 ~ file: index.tsx:176 ~ React.useEffect ~ formAddress:", formAddress)
  }, [formAddress]);

  const saveShippingAddress = async () => {
    try {
      globalContext.setGlobalLoading(true);

      let data = formAddress.shippingAddress;
      data.code = countryCodeByCountryName(data?.country) ?? '+971';
      data.contact = data.phone;
      data.latitude = 0;
      data.longitude = 0;

      delete data.phone;
      delete data.address2;

      const result = await addUserAddress(data);

      if (result?.data) {
        const addresses = result?.data?.data?.data?.address?.reverse();
        setChangeAddress(false);
        await setDefaultAddress(addresses[0]?.addressId ?? '');

        globalContext.setAlertProps({
          show: true,
          title: 'Your shipping address has been saved',
          text: '',
          toast: true,
          showConfirmButton: false,
          timerProgressBar: true,
          callback: globalContext.closeAlert,
        });
      }

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const setDefaultAddress = async (value: string) => {
    try {
      const result = await setUserDefaultAddress(value);
      if (result?.status === 200) {
        getUserAddresses();
      }
    } catch (error) {}
  };

  const handlePlaceOrder = async () => {
    try {
      if (!enablePlaceOrder) {
        setDisplayAddress(true);
        globalContext.setAlertProps({
          show: true,
          title: 'Please fill all required fields and retry',
          text: '',
          toast: true,
          background: '#8B0000',
          showConfirmButton: false,
          timerProgressBar: true,
          callback: globalContext.closeAlert,
        });
        return;
      }

      globalContext.setGlobalLoading(true);

      const data = {
        cartId: globalContext.cart?.cart?._id,
        shippingAddress: formAddress.shippingAddress,
        billingAddress: shippingSameBilling
          ? formAddress.shippingAddress
          : formAddress.billingAddress,
        notes: formAddress.notes,
      };

      const result = await saveUserOrder(data);
      // console.log("🚀 ~ file: index.tsx:261 ~ handlePlaceOrder ~ result:", result)

      if (result?.data?.data?.data?.masterCardSession) {
        console.log(
          'open checkout page',
          result?.data?.data?.data?.masterCardSession.sessionId
        );
        setSessionId(result?.data?.data?.data?.masterCardSession.sessionId);
      } else if (result?.data?.data?.data?.paymentLink) {
        window.location.href = result?.data?.data?.data?.paymentLink;
      } else {
        globalContext.setGlobalLoading(false);
      }
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Cart (${globalContext?.cartQtyProduct} Items)`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  {globalContext.screenWitdh > 900 && (
                    <>
                      <DefaultAddressComponent
                        changeAddress={changeAddress}
                        userAddressList={userAddressList}
                        formAddress={formAddress}
                        setDisplayAddress={setDisplayAddress}
                        setChangeAddress={setChangeAddress}
                      ></DefaultAddressComponent>
                      {/* <br /> */}
                    </>
                  )}

                  {changeAddress && (
                    <div
                      className={`mobile-fixed ${displayAddress && 'active'}`}
                    >
                      <div className={styles.wrapTitle}>
                        <Typography variant="h4">
                          <span
                            onClick={(e) => setDisplayAddress(false)}
                            className="mobile-display cursor-pointer float-left"
                            style={{ marginTop: '2px' }}
                          >
                            <FaArrowLeft></FaArrowLeft> &nbsp;&nbsp;
                          </span>
                          Shipping Address
                        </Typography>

                        {userAddressList?.address?.defaultAddress && (
                          <Typography variant="h6">
                            <Link
                              href="#"
                              onClick={(e) => setChangeAddress(!changeAddress)}
                            >
                              Use Default Address{' '}
                            </Link>
                          </Typography>
                        )}
                      </div>

                      <div className={styles.wrapBox}>
                        {/* // shipping address form  */}
                        <ShippingFormComponent
                          partnerCheckout={partnerCheckout}
                          localAddress={localAddress}
                          formAddress={formAddress}
                          setFormAddress={setFormAddress}
                        ></ShippingFormComponent>

                        {!partnerCheckout && (
                          <>
                            <div className={styles.addressBox}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    size="small"
                                    onChange={(e) =>
                                      setShippingSameBilling(
                                        !shippingSameBilling
                                      )
                                    }
                                    checked={shippingSameBilling}
                                  />
                                }
                                label="Billing Address same as shipping address."
                              />

                              {authContext.userConnected && (
                                <Typography variant="h6">
                                  <Link
                                    href="#"
                                    onClick={(e) => saveShippingAddress()}
                                  >
                                    {' '}
                                    Save this address{' '}
                                  </Link>
                                </Typography>
                              )}
                            </div>
                          </>
                        )}
                      </div>

                      {!shippingSameBilling && (
                        <>
                          <div className={`${styles.wrapTitle} mt-2`}>
                            <Typography variant="h4">
                              Billing Address
                            </Typography>
                          </div>

                          <div className={styles.wrapBox}>
                            {/* billing address form  */}
                            <BillingFormComponent
                              formAddress={formAddress}
                              setFormAddress={setFormAddress}
                            ></BillingFormComponent>
                          </div>
                        </>
                      )}

                      <Button
                        onClick={(e) => {
                          setDisplayAddress(false);
                        }}
                        variant="contained"
                        size="small"
                        className={`${styles['btn']} mt-2 mobile-display ${styles['btn_danger']} float-right`}
                      >
                        {t('Use this Address')}
                      </Button>
                    </div>
                  )}

                  {globalContext.screenWitdh > 900 && (
                    <>
                      <div className={`${styles.wrapTitle} mt-2 mb-2`}>
                        <Typography variant="h4">
                          Choose a payment method
                        </Typography>
                      </div>

                      {/* //payment method */}
                      <PaymentMethodComponent
                        paymentType={paymentType}
                        handleChangePayment={handleChangePayment}
                        setPaymentType={setPaymentType}
                      ></PaymentMethodComponent>
                    </>
                  )}

                  {sessionId && (
                    <MastercardCheckoutComponent sessionId={sessionId} />
                  )}
                </Grid>

                <Grid item md={4} xs={12}>
                  <CartTotalComponent
                    isCheckout={true}
                    handlePlaceOrder={handlePlaceOrder}
                    paymentType={paymentType}
                    handleChangePayment={handleChangePayment}
                    setDisplayAddress={setDisplayAddress}
                    addressProps={{
                      changeAddress: changeAddress,
                      userAddressList: userAddressList,
                      formAddress: formAddress,
                      setDisplayAddress: setDisplayAddress,
                      setChangeAddress: setChangeAddress,
                    }}
                  ></CartTotalComponent>
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
