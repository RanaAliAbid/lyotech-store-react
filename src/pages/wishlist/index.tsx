import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import productImg from '../../img/thumImg.png';
import StarRateIcon from '@mui/icons-material/StarRate';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getUserWishList, removeUserWishList } from '@/services/wishlist/wishlist.service';
import Image from 'next/image';
export default function Wishlist() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const [userWishList, setUserWishList] = React.useState<any>([]);

  const getProductFromWishList = async () => {
    try {
      globalContext.setGlobalLoading(true);

      const result = await getUserWishList();

      setUserWishList(result?.data?.data)

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const removeProductFromWishList = async (id: string) => {
    try {
      globalContext.setGlobalLoading(true);

      const result = await removeUserWishList(id);

      await getProductFromWishList();

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const addProductToCart = async (id: string) => {
    try {
      await globalContext.addCart(id, 1);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  React.useEffect(() => {
    getProductFromWishList()
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title="WishList" />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>
                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">Wishlist</Typography>
                  </div>
                  <div
                    className={`${styles['wrapBox']} ${styles['wishlistSection']}`}
                  >
                    <List className={styles.wishlists}>

                      {
                        (userWishList && userWishList?.products?.length > 0) ? (
                          userWishList?.products?.map((item: any, index: any) => (
                            <ListItem className={styles.productItem}>
                              <div className={styles.productImg}>
                                <img src={productImg.src} alt="logo" />
                              </div>
                              <div className={styles.productDetails}>
                                <div className={styles.productName}>
                                  <div>
                                    <Typography variant="h5">
                                      {item?.productId?.name}
                                    </Typography>

                                    <Typography variant="body1">
                                      Model Name: {item?.productId?.name}
                                    </Typography>
                                  </div>
                                </div>
                                <div className={styles.productReview}>
                                  <div className={styles.reviewStars}>
                                    <StarRateIcon className={styles.active} />
                                    <StarRateIcon className={styles.active} />
                                    <StarRateIcon className={styles.active} />
                                    <StarRateIcon className={styles.active} />
                                    <StarRateIcon />
                                  </div>
                                  <Typography variant="h6">( 1 Review )</Typography>
                                </div>
                                <Typography
                                  variant="h3"
                                  className={styles.productPrice}
                                >
                                  {item?.productId?.price?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}
                                </Typography>
                              </div>
                              <div className={styles.actionBtn}>
                                <Button
                                  onClick={(e) => addProductToCart(item?.productId?._id)}
                                  variant="contained"
                                  className={`${styles['btn']} ${styles['btn_primary']}`}
                                >
                                  {' '}
                                  Add To Cart
                                </Button>
                                <Button
                                  onClick={(e) => removeProductFromWishList(item?.productId?._id)}
                                  variant="outlined"
                                  className={`${styles['btn']} ${styles['btn_outlined']}`}
                                >
                                  Remove
                                </Button>
                              </div>
                            </ListItem>
                          ))
                        ) : (
                          <div className='w-100 text-center'>
                            <div className="notfound"><Image src={"/not-found.gif"} alt='Not Found' fill={true} /></div>
                          </div>
                        )
                      }

                    </List>
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
