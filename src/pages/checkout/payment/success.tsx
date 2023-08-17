import * as React from 'react';

import Footer from '@/common/footer';
import Header from '@/common/header';
import Sidebar from '../../../common/sidebar';

import styles from '@/styles/Home.module.css';
import {
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import productImg from '../../../img/productImg.png';

import successImg from '../../../img/success.png';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { verifyOrderDetails } from '@/services/orders/order.service';
import moment from 'moment';

export default function PaymentSuccessComponent({
  order,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();
  const { t } = useTranslation('cart');

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Header title={`Checkout Order`} />
        <div className={styles.paddingTB60}>
          <Container className={styles.containerBox}>
            <Grid container spacing={3}>
              {authContext.userConnected && (
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>
              )}

              <Grid item md={authContext.userConnected ? 9 : 12} xs={12}>
                <div className={styles.wrapTitle}>
                  <Typography variant="h4"> Your Orders </Typography>
                </div>
                <div
                  className={`${styles['wrapBox']} ${styles['ordersPlaceSec']}`}
                >
                  <div className={styles.orderHeadStatus}>
                    <div className={styles.titles}>
                      <div className={styles.statusImg}>
                        <img src={successImg.src} alt="logo" />
                      </div>
                      <div className={styles.statusText}>
                        <Typography variant="h5">
                          Your Orders Successfully placed
                        </Typography>

                        <Typography variant="h6">
                          Placed on{' '}
                          {order?.details?.createdAt &&
                            moment(order.details.createdAt).format(
                              'DD MMM YYYY'
                            )}
                        </Typography>
                      </div>
                    </div>
                    <div className={styles.invoiceLinks}>
                      <Link href="#">View invoice</Link>

                      <Link href="#">Download invoice</Link>
                    </div>
                  </div>

                  <Grid container spacing={3}>
                    <Grid item md={7} xs={12}>
                      <div className={styles.ordersList}>
                        <div className={styles.orderHead}>
                          <Typography variant="h5">Your Order</Typography>
                        </div>
                        {order?.products?.map((product: any) => (
                          <div className={styles.orderdetail}>
                            <div className={styles.productImg}>
                              <img src={productImg.src} alt="logo" />
                            </div>
                            <div className={styles.productDetails}>
                              <div className={styles.productName}>
                                <Typography
                                  variant="h4"
                                  className={styles.productitle}
                                >
                                  {product?.productId?.name}
                                </Typography>
                                <Typography variant="body1">
                                  {product?.productId?.shortDescription
                                    ? product.productId.shortDescription
                                    : product?.productId?.name}
                                </Typography>
                                <Typography variant="h5">
                                  Quantity: {product?.quantity}
                                </Typography>
                                <Typography variant="h5">
                                  Price:{' '}
                                  {product?.orderPrice *
                                    globalContext.conversionRate}
                                </Typography>
                                <Typography variant="h5">
                                  {t('order-id')} : {order?._id}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className={styles.ordersList}>
                        <div className={styles.orderHead}>
                          <Typography variant="h5">Delivery address</Typography>
                        </div>
                        <div className={styles.orderBody}>
                          <div>
                            <div className={styles.addresses}>
                              <div className={styles.addressesType}>
                                <Typography
                                  variant="h4"
                                  className="text-capitalize"
                                >
                                  {order?.details?.shippingAddress?.firstName}{' '}
                                  {order?.details?.shippingAddress?.lastName}
                                </Typography>
                              </div>
                              <div>
                                <Typography variant="body1">
                                  {order?.details?.shippingAddress?.address},{' '}
                                  {order?.details?.shippingAddress?.city} <br />
                                  {order?.details?.shippingAddress?.state},{' '}
                                  {order?.details?.shippingAddress?.country}{' '}
                                  <br />
                                  {order?.details?.shippingAddress?.phone}{' '}
                                  <br />
                                  <span> </span>
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={5} xs={12}>
                      <div className={styles.ordersList}>
                        <div className={styles.orderHead}>
                          <Typography variant="h5">Order Summary</Typography>
                        </div>

                        <div className={styles.orderBody}>
                          <List className={styles.orderSummary}>
                            <ListItem className={styles.listItem}>
                              <Typography variant="h5">
                                Payment method:
                              </Typography>

                              <Typography variant="body1">
                                {order?.paymentMethod?.name}
                              </Typography>
                            </ListItem>

                            <ListItem className={styles.listItem}>
                              <Typography variant="h5">
                                Shipping method:
                              </Typography>

                              <Typography variant="body1">
                                {order?.shippingMethod?.name}
                              </Typography>
                            </ListItem>
                          </List>
                        </div>

                        <div className={styles.foot}>
                          <Typography variant="h5">Total Amount:</Typography>

                          <Typography variant="h5">
                            {(
                              order?.totalAmount * globalContext.conversionRate
                            )?.toFixed(2)}{' '}
                            {globalContext.currencySymbol}
                          </Typography>
                        </div>
                      </div>

                      <div className={styles.ordersList}>
                        <div className={styles.orderHead}>
                          <div>
                            <Typography variant="h5">Order Status</Typography>
                          </div>
                        </div>

                        <div className={styles.orderBody}>
                          <Typography variant="h6">
                            Your Orders Successfully placed
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Footer />
      </main>
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps<{ order: any }> = async ({
  req,
  res,
}: {
  req: IncomingMessage;
  res: ServerResponse;
}) => {
  let currentUrl = req.url?.split('?')[1] ?? '';
  let result = null;

  if (currentUrl) {
    const urlParams = new URLSearchParams(currentUrl);
    const orderid = urlParams.get('invoiceNumber') ?? '';
    const transId = urlParams.get('transID') ?? '';
    const resultIndicator = urlParams.get('resultIndicator') ?? '';

    if (orderid?.length >= 1) {
      result = await verifyOrderDetails({ id: orderid });

      if (
        !result ||
        result?.isCancelled ||
        ['pending', 'failed', 'cancelled'].includes(
          result?.status?.toLowerCase()
        )
      )
        return {
          redirect: {
            destination: `/`,
            permanent: false,
          },
        };

      if (transId?.length > 0 || resultIndicator?.length > 0) {
        return {
          redirect: {
            destination: `/checkout/payment/success?invoiceNumber=${orderid}`,
            permanent: false,
          },
        };
      }
    }
  }
  const order = result;
  return { props: { order } };
};
