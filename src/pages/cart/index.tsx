import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Input from '@mui/material/Input';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Link from '@mui/material/Link';
import productImg from '../../img/productImg.png';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';

import { createTheme, ThemeProvider } from '@mui/material';
import {
  verifyUserCheckoutToken,
  verifyUserHandover,
} from '@/services/auth/auth.service';
import useTranslation from 'next-translate/useTranslation';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { IncomingMessage, ServerResponse } from 'http';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { addUserWishList } from '@/services/wishlist/wishlist.service';
import Image from 'next/image';
import CartTotalComponent from '@/components/cart/cart-total.component';
import { createShippingPaymentLink } from '@/services/orders/order.service';
import { getShippingPaymentSession, getSubscriptionPaymentSession } from '@/controllers/OrderController';

export default function Cart({
  userJwt,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation('cart');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const addIntoCart = async (id: string) => {
    try {
      // if (globalContext?.cart?.cart?.partner?.length > 0) {
      //   return;
      // }

      const currentQty =
        globalContext.cart?.cart?.products?.find(
          (x: any) => x.productId?._id === id
        )?.quantity ?? 0;
      const inputQty = document.getElementById(
        `cartProduct-${id}`
      ) as HTMLInputElement;
      if (!inputQty) return;
      let quantityToAdd = parseInt(inputQty.value) - currentQty;
      if (quantityToAdd == 0) {
        quantityToAdd = 1;
      }
      if (quantityToAdd < 0) return;

      await globalContext.addCart(
        id,
        quantityToAdd,
        globalContext?.cart?.cart?.oneCare?.findIndex(
          (oneCare: any) => oneCare.productId === id
        ) !== -1
          ? 1
          : 0
      );
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const deleteFromCart = async (id: string, qty?: number) => {
    try {
      // if (globalContext?.cart?.cart?.partner?.length > 0) {
      //   return;
      // }

      let quantityToRemove = qty;

      if (!qty) {
        const currentQty =
          globalContext.cart?.cart?.products?.find(
            (x: any) => x.productId?._id === id
          )?.quantity ?? 0;
        const inputQty = document.getElementById(
          `cartProduct-${id}`
        ) as HTMLInputElement;
        if (!inputQty) return;
        const inputQuantity = parseInt(inputQty.value);

        if (inputQuantity <= 0 || inputQuantity > currentQty) return;

        if (inputQuantity == currentQty) {
          quantityToRemove = 1;
        } else if (inputQuantity < currentQty) {
          quantityToRemove = currentQty - inputQuantity;
        }
      }

      const result = await globalContext.deleteCart(
        id,
        quantityToRemove,
        globalContext?.cart?.cart?.oneCare?.findIndex(
          (oneCare: any) => oneCare.productId === id
        ) !== -1
          ? 1
          : 0
      );

      if (!result) {
        globalContext.setGlobalLoading(false);
      } else {
        globalContext.setAlertProps({
          show: true,
          title: 'Your cart product has been remove',
          text: '',
          toast: true,
          showConfirmButton: false,
          timerProgressBar: true,
          callback: globalContext.closeAlert,
        });
      }
    } catch (error) {
      globalContext.setGlobalLoading(false);

      globalContext.setAlertProps({
        show: true,
        title: 'Sorry an error occured.',
        text: '',
        toast: true,
        showConfirmButton: false,
        background: '#8B0000',
        timerProgressBar: true,
        callback: globalContext.closeAlert,
      });
    }
  };

  const addProductToWishList = async (id: string) => {
    try {
      if (!authContext.userConnected) return;

      globalContext.setGlobalLoading(true);

      const data = {
        productId: id,
      };
      const result = await addUserWishList(data);

      globalContext.setAlertProps({
        show: true,
        title: 'Your whishlist has been added',
        text: '',
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: globalContext.closeAlert,
      });

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  React.useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);

      const user_handover = urlParams.get('user_handover')?.toString() ?? '';
      const product_id = urlParams.get('product_id')?.toString() ?? '';

      if (user_handover && product_id) {
        // getUserCart(user_handover, parseInt(product_id))
      }
    } catch (error) { }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Cart (${globalContext?.cartQtyProduct} Items)`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('header1')}</Typography>

                    <Typography variant="h6">
                      ({globalContext?.cartQtyProduct} {t('items')})
                    </Typography>
                  </div>

                  {globalContext.cart?.cart?.products?.map(
                    (cartItem: any, index: any) => (
                      // <>
                      <List
                        className={`${styles.productsList} mb-1`}
                        key={index}
                      >
                        <ListItem
                          className={`${styles['wrapBox']} ${styles['productItem']}`}
                        >
                          <div
                            className={`${styles['productImg']} ${styles['forDesktop']}`}
                          >
                            <img
                              src={
                                cartItem?.productId?.images[0]?.link ??
                                productImg.src
                              }
                              alt="logo"
                              className="product_cart_image"
                            />
                          </div>

                          <div className={styles.productDetails}>
                            <div className={styles.productName}>
                              <div
                                className={`${styles['productImg']} ${styles['forMobile']}`}
                              >
                                <img
                                  src={
                                    cartItem?.productId?.images[0]?.link ??
                                    productImg.src
                                  }
                                  alt="logo"
                                />
                              </div>
                              <div className={styles.productHead}>
                                <div>
                                  <Typography
                                    variant="h4"
                                    className={styles.productitle}
                                  >
                                    {cartItem?.productId?.name}
                                  </Typography>

                                  <Typography variant="body1">
                                    {t('Model-Name')}:{' '}
                                    {cartItem?.productId?.name}
                                  </Typography>
                                </div>
                                <div>
                                  <Typography
                                    variant="h3"
                                    className={styles.productPrice}
                                  >
                                    {(
                                      cartItem?.productId?.price *
                                      globalContext.conversionRate
                                    )?.toFixed(globalContext.priceToFixed)}{' '}
                                    {globalContext.currencySymbol}
                                  </Typography>
                                </div>
                              </div>
                            </div>
                            <Typography
                              variant="h6"
                              className={styles.productSummary}
                            >
                              {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                              elit, Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, */}
                            </Typography>
                            <Typography variant="h6">
                              <strong>{t('product-delivery')}</strong>
                            </Typography>
                            <List className={styles.productWrapSec}>
                              <ListItem className={styles.item}>
                                <Typography variant="h5">
                                  {t('Quantity')}
                                </Typography>
                                <div className={styles.productQty}>
                                  <div
                                    className={styles.qtyBtn}
                                    onClick={(e) =>
                                      deleteFromCart(cartItem?.productId?._id)
                                    }
                                  >
                                    {' '}
                                    <RemoveIcon />{' '}
                                  </div>
                                  {!globalContext.globalLoading ? (
                                    <Input
                                      id={`cartProduct-${cartItem?.productId?._id}`}
                                      className={styles.formControl}
                                      defaultValue={cartItem?.quantity}
                                    // disabled={
                                    //   globalContext?.cart?.cart?.partner
                                    //     ?.length > 0
                                    // }
                                    />
                                  ) : (
                                    <div
                                      className={`${styles.formControl}`}
                                      style={{
                                        border: '1px solid #f5f5f5',
                                        height: '28px',
                                        borderRadius: '25px',
                                      }}
                                    >
                                      {/* // */}
                                    </div>
                                  )}
                                  <div
                                    className={styles.qtyBtn}
                                    onClick={(e) =>
                                      addIntoCart(cartItem?.productId?._id)
                                    }
                                  >
                                    {' '}
                                    <AddIcon />{' '}
                                  </div>
                                </div>
                              </ListItem>

                              {authContext.userConnected && (
                                <ListItem
                                  className={styles.item}
                                  onClick={(e) =>
                                    addProductToWishList(
                                      cartItem?.productId?._id
                                    )
                                  }
                                >
                                  <Link href="#" className={styles.wishlist}>
                                    <FavoriteBorderIcon />
                                    <Typography variant="h6">
                                      {t('Move-to-Wishlist')}
                                    </Typography>
                                  </Link>
                                </ListItem>
                              )}

                              <ListItem
                                className={styles.item}
                                onClick={(e) =>
                                  deleteFromCart(cartItem?.productId?._id, 0)
                                }
                              >
                                <Link href="#" className={styles.remove}>
                                  <DeleteOutlineIcon />
                                  <Typography variant="h6">
                                    {t('Remove')}
                                  </Typography>
                                </Link>
                              </ListItem>
                            </List>
                          </div>
                        </ListItem>
                      </List>
                      // </>
                    )
                  )}

                  {globalContext?.cart?.length == 0 && (
                    <div className="w-100 text-center position-relative">
                      <div className="notfound">
                        <Image
                          src={'/not-found.gif'}
                          alt="Not Found"
                          fill={true}
                        />
                      </div>
                      <h4 className="bold-900">Your cart is empty</h4>
                    </div>
                  )}
                </Grid>

                <Grid item md={4} xs={12}>
                  <CartTotalComponent isCheckout={false}></CartTotalComponent>
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

export const getServerSideProps: GetServerSideProps<{
  userJwt: any;
  message: any;
}> = async ({ req, res }: { req: IncomingMessage; res: ServerResponse }) => {
  let currentUrl = req.url?.split('?')[1] ?? '';
  let result = null;

  if (currentUrl) {
    const urlParams = new URLSearchParams(currentUrl);

    const product_id = urlParams.get('product_id') ?? '';
    const user_handover = urlParams.get('user_handover') ?? '';
    const voucher = urlParams.get('voucher') ?? '';
    const checkout_token = urlParams.get('checkout_token') ?? '';
    const shipping_token = urlParams.get('shipping_token') ?? '';
    const cart_id = urlParams.get('id') ?? null;
    const subscription_token = urlParams.get('s_token') ?? '';
    const subscription_id = urlParams.get('s_id') ?? null;

    if (product_id?.length >= 1 && user_handover?.length >= 1) {
      result = await verifyUserHandover({
        handoverToken: user_handover,
        productId: parseInt(product_id),
        voucher: voucher,
      });

      if (!result?.data || result?.data?.length < 9) {
        return {
          redirect: {
            destination: `/?error=${btoa(result?.message)}`,
            permanent: false,
          },
        };
      }

      if (result?.data?.length > 10) {
        res.setHeader('set-Cookie', [
          `userConnected=${'true'}; Max-Age=36000; path: '/';`,
          `partnerToken=${result?.data}; HttpOnly; Max-Age=20; path: '/';`,
          `otpToken=deleted; HttpOnly; Max-Age=0;`,
          `token=deleted; HttpOnly; Max-Age=0;`,
        ]);

        return {
          redirect: {
            destination: `/checkout`,
            permanent: false,
          },
        };
      }
    }

    if (checkout_token?.length > 0 || shipping_token?.length > 0 || subscription_token?.length > 0) {
      let destination = ''
      let token = ''

      if (checkout_token?.length > 0) {
        destination = '/checkout';
        token = checkout_token;
        //
      } else if (shipping_token?.length > 0) {
        token = shipping_token;
        //
      } else {
        token = subscription_token;
      }

      result = await verifyUserCheckoutToken({
        token: token,
        payment: true,
      });

      // console.log("🚀 ~ file: index.tsx:464 ~ result:", result)

      if (!result?.data || result?.data?.length < 9) {
        return {
          redirect: {
            destination: `/?error=${btoa(result?.message)}`,
            permanent: false,
          },
        };
      }

      if (result?.data?.length > 10) {
        res.setHeader('set-Cookie', [
          `userConnected=${'true'}; Max-Age=36000; path: '/';`,
          `partnerToken=${result?.data}; HttpOnly; Max-Age=20; path: '/';`,
          `otpToken=deleted; HttpOnly; Max-Age=0;`,
          `token=deleted; HttpOnly; Max-Age=0;`,
        ]);

        if (shipping_token?.length > 0 && cart_id) {

          const paymentSession = await getShippingPaymentSession(cart_id, result.data);

          // console.log("🚀 ~ file: index.tsx:488 ~ result:", paymentSession)

          if (!paymentSession?.data?.sessionId) {
            return {
              redirect: {
                destination: `/?error=${btoa(paymentSession?.message)}`,
                permanent: false,
              },
            };
          }


          destination = `/checkout?s=${paymentSession?.data?.sessionId}`;

          //
        } else if (subscription_token?.length > 0 && subscription_id) {

          const paymentSession = await getSubscriptionPaymentSession(subscription_id, result.data);

          if (!paymentSession?.data?.sessionId) {
            return {
              redirect: {
                destination: `/?error=${btoa(paymentSession?.message)}`,
                permanent: false,
              },
            };
          }


          destination = `/checkout?s=${paymentSession?.data?.sessionId}`;
        }

        return {
          redirect: {
            destination: destination,
            permanent: false,
          },
        };
      }
    }
  }
  const userJwt = result;
  const message = result?.message ?? '';
  return { props: { userJwt, message } };
};
