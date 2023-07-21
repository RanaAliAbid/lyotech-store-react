import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

import productImg from '../../img/productImg.png';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import { verifyUserHandover } from '@/services/auth/auth.service';

import useTranslation from 'next-translate/useTranslation';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { IncomingMessage, ServerResponse } from 'http';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { addUserWishList } from '@/services/wishlist/wishlist.service';
import { feesType } from '@/utils/app.utils';
import Image from 'next/image';

export default function Cart({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const { t } = useTranslation('cart');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const router = useRouter();
  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const [shippingMethods, setShippingMethods] = React.useState([]);
  const [cartFees, setCartFees] = React.useState([]);

  const addIntoCart = async (id: string) => {
    try {
      // if (!authContext.userConnected) return;
      const currentQty = globalContext.cart?.cart?.products?.find((x: any) => x.productId?._id === id)?.quantity ?? 0;
      const inputQty = document.getElementById(`cartProduct-${id}`) as HTMLInputElement;
      if (!inputQty) return;
      let quantityToAdd = parseInt(inputQty.value) - currentQty;
      if (quantityToAdd == 0) {
        quantityToAdd = 1
      }
      if (quantityToAdd < 0) return;

      await globalContext.addCart(id, quantityToAdd);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const deleteFromCart = async (id: string, qty?: number) => {
    try {
      // if (!authContext.userConnected) return;

      let quantityToRemove = qty;

      if (!qty) {
        const currentQty = globalContext.cart?.cart?.products?.find((x: any) => x.productId?._id === id)?.quantity ?? 0;
        const inputQty = document.getElementById(`cartProduct-${id}`) as HTMLInputElement;
        if (!inputQty) return;
        const inputQuantity = parseInt(inputQty.value);

        if (inputQuantity <= 0 || inputQuantity > currentQty) return;

        if (inputQuantity == currentQty) {
          quantityToRemove = 1;

        } else if (inputQuantity < currentQty) {
          quantityToRemove = currentQty - inputQuantity;
        }
      }

      const result = await globalContext.deleteCart(id, quantityToRemove);

      if (!result) {
        globalContext.setGlobalLoading(false);
      }

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const addProductToWishList = async (id: string) => {
    try {

      if (!authContext.userConnected) return;

      globalContext.setGlobalLoading(true);

      const data = {
        productId: id
      }
      const result = await addUserWishList(data);

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  React.useEffect(() => {
    setShippingMethods(globalContext?.cart?.shippingMethods ?? []);
    setCartFees(globalContext?.cart?.cart?.fees ?? []);
  }, [globalContext.cart]);

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

  const [shippingType, setShippingType] = React.useState<string>('');

  const handleChangeShippingType = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      globalContext.setGlobalLoading(true);

      const shippingMethodId = (event.target as HTMLInputElement).value

      const result = await globalContext.updateCartShippingMethod(shippingMethodId);

      if (!result) {
        globalContext.setGlobalLoading(false);
      }

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  React.useEffect(() => {
    setShippingType(globalContext?.cart?.cart?.shippingMethod ?? "")
  }, [globalContext.cart]);

  const updateCartOneCarePolicy = async (status: boolean, id: string) => {
    try {
      globalContext.setGlobalLoading(true);

      const data = {
        productId: id
      }
      const result = await globalContext.updateCartOneCare(id, status);

      if (!result) {
        globalContext.setGlobalLoading(false);
      }

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  // const getUserCart = async (user_handover: string, product_id: number) => {
  //   const result = await verifyUserHandover({
  //     handoverToken: user_handover,
  //     productId: product_id,
  //   });
  //   console.log(result);
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Cart (${globalContext.cart?.cart?.products?.length} Items)`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('header1')}</Typography>

                    <Typography variant="h6">({globalContext.cart?.cart?.products?.length} {t('items')})</Typography>
                  </div>

                  {
                    globalContext.cart?.cart?.products?.map((cartItem: any, index: any) => (
                      <>
                        <List className={`${styles.productsList} mb-1`}>
                          <ListItem
                            className={`${styles['wrapBox']} ${styles['productItem']}`}
                          >
                            <div
                              className={`${styles['productImg']} ${styles['forDesktop']}`}
                            >
                              <img src={cartItem?.productId?.images[0]?.link ?? productImg.src} alt="logo" className='product_cart_image' />
                            </div>

                            <div className={styles.productDetails}>
                              <div className={styles.productName}>
                                <div
                                  className={`${styles['productImg']} ${styles['forMobile']}`}
                                >
                                  <img src={cartItem?.productId?.images[0]?.link ?? productImg.src} alt="logo" />
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
                                      {t('Model-Name')}: {cartItem?.productId?.name}
                                    </Typography>
                                  </div>
                                  <div>
                                    <Typography
                                      variant="h3"
                                      className={styles.productPrice}
                                    >
                                      {cartItem?.productId?.price?.toFixed(globalContext.priceToFixed)} €
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                              <Typography
                                variant="h6"
                                className={styles.productSummary}
                              >
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit,
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
                                    <div className={styles.qtyBtn} onClick={(e) => deleteFromCart(cartItem?.productId?._id)}>
                                      {' '}
                                      <RemoveIcon />{' '}
                                    </div>
                                    {
                                      (!globalContext.globalLoading) && (
                                        <Input
                                          id={`cartProduct-${cartItem?.productId?._id}`}
                                          placeholder={cartItem?.quantity}
                                          className={styles.formControl}
                                          defaultValue={cartItem?.quantity}
                                        />
                                      )
                                    }
                                    <div className={styles.qtyBtn} onClick={(e) => addIntoCart(cartItem?.productId?._id)}>
                                      {' '}
                                      <AddIcon />{' '}
                                    </div>
                                  </div>
                                </ListItem>

                                {
                                  (authContext.userConnected) && (
                                    <ListItem className={styles.item} onClick={(e) => addProductToWishList(cartItem?.productId?._id)}>
                                      <Link href="#" className={styles.wishlist}>
                                        <FavoriteBorderIcon />
                                        <Typography variant="h6">
                                          {t('Move-to-Wishlist')}
                                        </Typography>
                                      </Link>
                                    </ListItem>
                                  )
                                }

                                <ListItem className={styles.item} onClick={(e) => deleteFromCart(cartItem?.productId?._id, 0)}>
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
                      </>
                    ))
                  }

                  {
                    (globalContext?.cart?.length == 0) && (
                      <div className='w-100 text-center position-relative'>
                        <div className="notfound">
                          <Image src={"/not-found.gif"} alt='Not Found' fill={true} />
                        </div>
                        <h4 className='bold-900'>Your cart is empty</h4>
                      </div>
                    )
                  }

                </Grid>

                <Grid item md={4} xs={12}>
                  <div
                    className={`${styles['wrapTitle']} ${styles['orderSum']}`}
                  >
                    <Typography variant="h4">{t('header-summary')}</Typography>

                    <Typography variant="h6">Order ID: #0297509</Typography>
                  </div>

                  <div className={styles.wrapBox}>
                    <div className={styles.summaryDetails}>
                      <List>
                        <ListItem className={styles.subTotal}>
                          <Typography variant="h6">
                            {t('Subtotal')} ({globalContext?.cart?.cart?.products?.length} {t('items')})
                          </Typography>
                          <Typography variant="h6">{globalContext?.cart?.cart?.totalAmount?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
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
                            (shippingMethods && shippingMethods.length > 0) ? (
                              shippingMethods?.map((method: any, index: any) => (
                                <ListItem
                                  key={index}
                                  className={`${shippingType === method?.shippingMethod ? styles.active : ''
                                    }`}
                                >
                                  <FormControlLabel
                                    value={method?.shippingMethod}
                                    control={
                                      <Radio
                                        size="small"
                                        checked={shippingType === method?.shippingMethod}
                                      />
                                    }
                                    label={method.name}
                                  />
                                  <Typography variant="h6">{method?.amount} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                              ))
                            ) : (
                              <></>
                            )
                          }
                        </RadioGroup>
                      </List>

                      <List>

                        {
                          (cartFees?.length > 0) && (
                            cartFees.map((item: any, index: any) => (
                              (!["oneCare", "payment"].includes(item.type)) && (
                                <ListItem>
                                  <Typography variant="h6">
                                    {t(feesType(item.type))}
                                  </Typography>
                                  <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                              )
                            ))
                          )
                        }


                        {/* <ListItem>
                          <Typography variant="h6">{t('VAT')} 5%</Typography>
                          <Typography variant="h6">16.43 €</Typography>
                        </ListItem>*/}

                      </List>

                      <List>
                        {
                          (cartFees?.length > 0) && (
                            cartFees.map((item: any, index: any) => (
                              (["payment"].includes(item.type)) && (
                                <ListItem>
                                  <Typography variant="h6">
                                    {t(feesType(item.type))}
                                  </Typography>
                                  <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                              )
                            ))
                          )
                        }
                      </List>

                      <List className={styles.policySummary}>
                        {
                          (cartFees?.length > 0) && (
                            cartFees.map((item: any, index: any) => (
                              (["oneCare"].includes(item.type)) && (
                                <ListItem>
                                  <div className={styles.allCenter}>

                                    <Checkbox
                                      defaultChecked={
                                        (globalContext?.cart?.cart?.oneCare?.findIndex((x: any) => x.productId == globalContext?.cart?.cart?.products[0]?.productId?._id) !== -1) ? true : false}
                                      onChange={(e) => updateCartOneCarePolicy(e.target.checked, globalContext?.cart?.cart?.products[0]?.productId?._id ?? "")}
                                      size="small"
                                    />

                                    <Typography variant="h5">
                                      {t(feesType(item.type))}
                                    </Typography>
                                  </div>
                                  <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                              )
                            ))
                          )
                        }
                      </List>

                      <List>
                        <ListItem className={styles.summaryfoot}>
                          <Typography variant="h5">{t('Total')}</Typography>
                          <Typography variant="h5">{globalContext?.cart?.cart?.totalIncludingFees?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                        </ListItem>
                      </List>
                    </div>
                    <Button
                      onClick={(e) => { (globalContext.cart?.cart?.products?.length > 0) && router.push(`/${router.locale}/checkout`) }}
                      variant="contained"
                      fullWidth
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      {t('Checkout-btn')}
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


export const getServerSideProps: GetServerSideProps<{ data: any }> = async ({
  req,
  res,
}: {
  req: IncomingMessage;
  res: ServerResponse;
}) => {
  let currentUrl = req.url?.split('?')[1] ?? '';

  if (currentUrl) {
    const urlParams = new URLSearchParams(currentUrl);
    const product_id = urlParams.get('product_id') ?? '';
    const user_handover = urlParams.get('user_handover') ?? '';
    console.log('params', urlParams);

    const result = verifyUserHandover({
      handoverToken: user_handover,
      productId: parseInt(product_id),
    });
  }
  const data = '';
  return { props: { data } };
};
