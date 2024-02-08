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
import { Alert } from '@mui/material';
import productImg from '../../../img/productImg.png';

import successImg from '../../../img/success.png';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  getPartnerRediectionLink,
  verifyOrderDetails,
  verifyOrderMembershipDetails,
  verifyOrderShippingDetails
} from '@/services/orders/order.service';
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
                  {['pending'].includes(order?.status?.toLowerCase()) &&
                    ['mastercard'].includes(
                      order?.paymentMethod?.name.toLowerCase()
                    ) ? (
                    <div className={styles.orderHeadStatus}>
                      <div className={styles.titles}>
                        <div className={styles.statusText}>
                          <Typography variant="h5">
                            Your order is pending for payment
                          </Typography>

                          <Typography variant="h6">
                            Placed on{' '}
                            {order?.createdAt &&
                              moment(order.createdAt).format(
                                'DD MMM YYYY'
                              )}
                          </Typography>

                          <div className="alert alert-primary">
                            <Typography variant="h6">
                              <br />

                              <Alert severity="info">
                                {t(
                                  'If you already made the payment please wait for a few minutes & refresh...'
                                )}
                              </Alert>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      {/* <div className={styles.invoiceLinks}>
                        <Link href="#">View invoice</Link>

                        <Link href="#">Download invoice</Link>
                      </div> */}
                    </div>
                  ) : (
                    <div className={styles.orderHeadStatus}>
                      <div className={styles.titles}>
                        <div className={styles.statusImg}>
                          <img src={successImg.src} alt="logo" />
                        </div>
                        <div className={styles.statusText}>
                          <Typography variant="h5">
                            Your Order Successfully placed
                          </Typography>

                          <Typography variant="h6">
                            Placed on{' '}
                            {order?.createdAt &&
                              moment(order.createdAt).format(
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
                  )}

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
                            {['pending'].includes(
                              order?.status?.toLowerCase()
                            ) &&
                              ['mastercard'].includes(
                                order?.paymentMethod?.name.toLowerCase()
                              ) ? (
                              <>
                                <Alert severity="info">
                                  {t(
                                    'If you already made the payment please wait for a few minutes...'
                                  )}
                                </Alert>
                                <br />
                                <br />
                                <span
                                  className="cursor-pointer text-primary"
                                  onClick={() => {
                                    window.open(
                                      `https://support.lyotechlabs.com/`,
                                      '_blank'
                                    );
                                  }}
                                >
                                  Contact the Support
                                </span>
                              </>
                            ) : (
                              <>Your Orders Successfully placed</>
                            )}
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

      if (!result || result.length === 0) {
        const cartOrder = await verifyOrderShippingDetails({ id: orderid });

        if (cartOrder) {
          const rs = await validatePartnerAndRediredct({
            id: cartOrder.partner,
            orderid: cartOrder.cartOrderId,
            success: true,
          });
          return {
            redirect: rs.redirect,
          };
        } else {

          const subscription = await verifyOrderMembershipDetails({ id: orderid });

          if (subscription) {
            const rs = await validatePartnerAndRediredct({
              id: subscription.partner,
              subscriptionid: subscription.membershipId,
              success: true,
            });
            return {
              redirect: rs.redirect,
            };
          }
          //
        }
      }


      if (
        !result ||
        result?.isCancelled ||
        ['failed', 'cancelled'].includes(result?.status?.toLowerCase())
      ) {
        if (result?.partner) {
          const rs = await validatePartnerAndRediredct({
            id: result.partner,
            orderid: orderid,
            success: false,
          });
          return {
            redirect: rs.redirect,
          };
        }
        return {
          redirect: {
            destination: `/`,
            permanent: false,
          },
        };
      }

      if (
        ['pending'].includes(result?.status?.toLowerCase()) &&
        !['mastercard'].includes(result?.paymentMethod?.name.toLowerCase())
      ) {
        return {
          redirect: {
            destination: `/`,
            permanent: false,
          },
        };
      }

      if (transId?.length > 0 || resultIndicator?.length > 0) {
        if (result?.partner) {
          const rs = await validatePartnerAndRediredct({
            id: result.partner,
            orderid: orderid,
            success: true,
          });
          return {
            redirect: rs.redirect,
          };
        }

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

export const validatePartnerAndRediredct = async ({
  id,
  success = false,
  orderid,
  subscriptionid,
}: {
  id: string;
  success: boolean;
  orderid?: string;
  subscriptionid?: string
}) => {
  try {
    const partnerDetails = await getPartnerRediectionLink(id);

    if (!partnerDetails) {
      return {
        redirect: {
          destination: `/`,
          permanent: false,
        },
      };
    }

    if (subscriptionid != null) {
      return {
        redirect: {
          destination: `${success
            ? `${process.env.APP_ENV_TYPE === 'dev'
              ? `${process.env.CLOUDX_URL}/profile`
              : `${process.env.CLOUDX_URL}/profile`
            }`
            : `${process.env.CLOUDX_URL}/profile?m=failed`
            }`,
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `${success
          ? `${process.env.APP_ENV_TYPE === 'dev'
            ? `${process.env.CLOUDX_URL}/shop/checkout`
            : partnerDetails?.successUrl
          }?order=${orderid}`
          : `${partnerDetails?.errorUrl}?order=${orderid}`
          }`,
        permanent: false,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
};
