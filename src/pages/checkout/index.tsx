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

import { Alert, createTheme, MenuItem, Select, ThemeProvider } from '@mui/material';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import CartTotalComponent from '@/components/cart/cart-total.component';
import { addUserAddress, getUserAddressList, setUserDefaultAddress } from '@/services/addresses/addresses.service';
import ShippingFormComponent from '@/components/checkout/forms/shipping.component';
import BillingFormComponent from '@/components/checkout/forms/billing.component';
import PaymentMethodComponent from '@/components/checkout/payment.component';
import { saveUserOrder } from '@/services/orders/order.service';
import { formCheckEmptyFields } from '@/validators/order.validator';
import { countryCodeByCountryName, getLocalStorage, setLocalStorage } from '@/utils/app.utils';

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
  }

  React.useEffect(() => {
    getUserAddresses()

    if (!authContext.userConnected) {
      setChangeAddress(true);
    }

  }, [globalContext.cart]);

  React.useEffect(() => {

    let localCheckoutAddress: any = getLocalStorage("checkoutAddress")
    const _localAddress = JSON.parse(localCheckoutAddress)

    let addresses = {
      shippingAddress: {
        firstName: authContext.connectedUser?.firstName ?? _localAddress?.shippingAddress?.firstName ?? "",
        lastName: authContext.connectedUser?.lastName ?? _localAddress?.shippingAddress?.lastName ?? "",
        email: authContext.connectedUser?.email ?? _localAddress?.shippingAddress?.email ?? "",
        phone: userAddressList?.address?.defaultAddress?.contact ?? _localAddress?.shippingAddress?.phone ?? "",
        address: userAddressList?.address?.defaultAddress?.address ?? _localAddress?.shippingAddress?.address ?? "",
        city: userAddressList?.address?.defaultAddress?.city ?? _localAddress?.shippingAddress?.city ?? "",
        country: userAddressList?.address?.defaultAddress?.country ?? _localAddress?.shippingAddress?.country ?? "",
        state: userAddressList?.address?.defaultAddress?.state ?? _localAddress?.shippingAddress?.state ?? "",
        address2: userAddressList?.address?.defaultAddress?.address2 ?? "",
        type: userAddressList?.address?.defaultAddress?.type ?? "",
      },
      billingAddress: {
        firstName: authContext.connectedUser?.firstName ?? "",
        lastName: authContext.connectedUser?.lastName ?? "",
        email: authContext.connectedUser?.email ?? "",
        phone: userAddressList?.address?.defaultAddress?.contact ?? "",
        address: userAddressList?.address?.defaultAddress?.address ?? "",
        city: userAddressList?.address?.defaultAddress?.city ?? "",
        country: userAddressList?.address?.defaultAddress?.country ?? "",
        state: userAddressList?.address?.defaultAddress?.state ?? "",
        address2: userAddressList?.address?.defaultAddress?.address2 ?? "",
      },
      notes: "",
    }

    const checkForm: any = formCheckEmptyFields(addresses);

    if (!userAddressList && !userAddressList?.address?.defaultAddress) {
      setChangeAddress(true);
    }

    setFormAddress(addresses)
  }, [changeAddress]);


  React.useEffect(() => {
    if (!authContext.userConnected && formAddress && formAddress?.shippingAddress?.email?.length > 5) {
      setLocalStorage("checkoutAddress", JSON.stringify(formAddress));
    }
  }, [formAddress])


  const saveShippingAddress = async () => {
    try {

      globalContext.setGlobalLoading(true);

      let data = formAddress.shippingAddress
      data.code = countryCodeByCountryName(data?.country) ?? "+971"
      data.type = "Work"
      data.contact = data.phone
      data.latitude = 0
      data.longitude = 0

      delete data.phone;
      delete data.address2;

      const result = await addUserAddress(data);

      if (result?.data) {
        const addresses = result?.data?.data?.data?.address?.reverse();
        setChangeAddress(false);
        await setDefaultAddress(addresses[0]?.addressId ?? "")
      }

      globalContext.setGlobalLoading(false);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const setDefaultAddress = async (value: string) => {
    try {
      const result = await setUserDefaultAddress(value);
      if (result?.status === 200) {
        getUserAddresses();
      }
    } catch (error) { }
  }


  const handlePlaceOrder = async () => {
    try {

      globalContext.setGlobalLoading(true);

      const data = {
        cartId: globalContext.cart?.cart?._id,
        shippingAddress: formAddress.shippingAddress,
        billingAddress: shippingSameBilling ? formAddress.shippingAddress : formAddress.billingAddress,
        notes: formAddress.notes
      }

      const result = await saveUserOrder(data);

      if (result?.data?.data?.data?.paymentLink) {
        window.location.href = result?.data?.data?.data?.paymentLink;
      }

      globalContext.setGlobalLoading(false);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Cart (${globalContext.cart?.cart?.products?.length} Items)`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>

                  {
                    (authContext.userConnected && !changeAddress && userAddressList?.address?.defaultAddress?._id) && (
                      <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                          <div className={styles.wrapTitle}>
                            <Typography variant="h4">Shipping Address</Typography>

                            <Typography variant="h6">
                              <Link href="#" onClick={(e) => setChangeAddress(!changeAddress)}> Add new address </Link>
                            </Typography>
                          </div>


                          <div
                            className={`${styles['wrapBox']} ${styles['addresses']}`}
                          >
                            <div className={styles.addressesType}>
                              <Typography variant="h4">{userAddressList?.address?.defaultAddress?.type}</Typography>
                              <Typography variant="h6">
                                <Link href="#" onClick={(e) => setChangeAddress(!changeAddress)}> Change </Link>
                              </Typography>
                            </div>

                            <Typography variant="h5">{authContext?.connectedUserName}</Typography>

                            <Typography variant="body1">
                              {authContext?.connectedUserEmail}
                            </Typography>

                            <Typography variant="body1">
                              {userAddressList?.address?.defaultAddress?.address}  <br />
                              {userAddressList?.address?.defaultAddress?.city}&nbsp;
                              {userAddressList?.address?.defaultAddress?.state},&nbsp;
                              {userAddressList?.address?.defaultAddress?.country}
                            </Typography>

                            <Typography variant="body1">{userAddressList?.address?.defaultAddress?.code}-
                              {userAddressList?.address?.defaultAddress?.contact}</Typography>
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
                              <Typography variant="h4">{userAddressList?.address?.defaultAddress?.type}</Typography>
                              <Typography variant="h6">
                                <Link href="#"> Change </Link>
                              </Typography>
                            </div>

                            <Typography variant="h5">{authContext?.connectedUserName}</Typography>

                            <Typography variant="body1">
                              {authContext?.connectedUserEmail}
                            </Typography>

                            <Typography variant="body1">
                              {userAddressList?.address?.defaultAddress?.address}  <br />
                              {userAddressList?.address?.defaultAddress?.city}&nbsp;
                              {userAddressList?.address?.defaultAddress?.state},&nbsp;
                              {userAddressList?.address?.defaultAddress?.country}
                            </Typography>

                            <Typography variant="body1">{userAddressList?.address?.defaultAddress?.code}-
                              {userAddressList?.address?.defaultAddress?.contact}</Typography>
                          </div>
                        </Grid>
                      </Grid>
                    )
                  }


                  {
                    (changeAddress) && (
                      <>
                        <div className={styles.wrapTitle}>
                          <Typography variant="h4">Shipping Address</Typography>

                          {
                            (userAddressList?.address?.defaultAddress) && (
                              <Typography variant="h6">
                                <Link href="#" onClick={(e) => setChangeAddress(!changeAddress)}>Use Default Address </Link>
                              </Typography>
                            )
                          }
                        </div>

                        <div className={styles.wrapBox}>
                          {/* // shipping address form  */}
                          <ShippingFormComponent localAddress={localAddress} formAddress={formAddress} setFormAddress={setFormAddress}></ShippingFormComponent>

                          <div className={styles.addressBox}>
                            <FormControlLabel
                              control={<Checkbox size="small" onChange={(e) => setShippingSameBilling(!shippingSameBilling)} checked={shippingSameBilling} />}
                              label="Billing Address same as shipping address."
                            />

                            {
                              (authContext.userConnected) && (
                                <Typography variant="h6">
                                  <Link href="#" onClick={(e) => saveShippingAddress()}> Save this address </Link>
                                </Typography>
                              )
                            }

                          </div>
                        </div>

                        {
                          (!shippingSameBilling) && (
                            <>
                              <div className={`${styles.wrapTitle} mt-2`}>
                                <Typography variant="h4">Billing Address</Typography>
                              </div>

                              <div className={styles.wrapBox}>
                                {/* billing address form  */}
                                <BillingFormComponent formAddress={formAddress} setFormAddress={setFormAddress}></BillingFormComponent>
                              </div>
                            </>
                          )
                        }
                      </>
                    )
                  }

                  <div className={`${styles.wrapTitle} mt-2 mb-2`}>
                    <Typography variant="h4">
                      Choose a payment method
                    </Typography>
                  </div>

                  {/* //payment method */}
                  <PaymentMethodComponent paymentType={paymentType} handleChangePayment={handleChangePayment}></PaymentMethodComponent>

                </Grid>

                <Grid item md={4} xs={12}>
                  <CartTotalComponent isCheckout={true} handlePlaceOrder={handlePlaceOrder}></CartTotalComponent>
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
