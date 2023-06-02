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
export default function wishlist() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });


    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title='WishList' />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                                    <Sidebar />
                                </Grid>
                                <Grid item md={9} xs={12}>
                                    <div className={styles.wrapTitle}>
                                        <Typography variant="h4" >
                                            Wishlist
                                        </Typography>
                                    </div>
                                    <div className={`${styles["wrapBox"]} ${styles["wishlistSection"]}`}>


                                        <List className={styles.wishlists}>

                                            <ListItem className={styles.productItem}>
                                                <div className={styles.productImg}>
                                                    <img src={productImg.src} alt="logo" />
                                                </div>
                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div>
                                                            <Typography variant="h5">
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Model Name: LFI ONE
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
                                                        <Typography variant="h6">
                                                            ( 10 Review )
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="h3" className={styles.productPrice}>
                                                        $160.00
                                                    </Typography>
                                                </div>
                                                <div className={styles.actionBtn}>
                                                    <Button variant="contained"
                                                        className={`${styles["btn"]} ${styles["btn_primary"]}`}> Add To Cart</Button>
                                                    <Button variant="outlined" className={`${styles["btn"]} ${styles["btn_outlined"]}`}>Remove</Button>
                                                </div>
                                            </ListItem>

                                            <ListItem className={styles.productItem}>
                                                <div className={styles.productImg}>
                                                    <img src={productImg.src} alt="logo" />
                                                </div>
                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div>
                                                            <Typography variant="h5">
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Model Name: LFI ONE
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
                                                        <Typography variant="h6">
                                                            ( 10 Review )
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="h3" className={styles.productPrice}>
                                                        $160.00
                                                    </Typography>
                                                </div>
                                                <div className={styles.actionBtn}>
                                                    <Button variant="contained"
                                                        className={`${styles["btn"]} ${styles["btn_primary"]}`}> Add To Cart</Button>
                                                    <Button variant="outlined" className={`${styles["btn"]} ${styles["btn_outlined"]}`}>Remove</Button>
                                                </div>
                                            </ListItem>

                                            <ListItem className={styles.productItem}>
                                                <div className={styles.productImg}>
                                                    <img src={productImg.src} alt="logo" />
                                                </div>
                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div>
                                                            <Typography variant="h5">
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Model Name: LFI ONE
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
                                                        <Typography variant="h6">
                                                            ( 10 Review )
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="h3" className={styles.productPrice}>
                                                        $160.00
                                                    </Typography>
                                                </div>
                                                <div className={styles.actionBtn}>
                                                    <Button variant="contained"
                                                        className={`${styles["btn"]} ${styles["btn_primary"]}`}> Add To Cart</Button>
                                                    <Button variant="outlined" className={`${styles["btn"]} ${styles["btn_outlined"]}`}>Remove</Button>
                                                </div>
                                            </ListItem>

                                            <ListItem className={styles.productItem}>
                                                <div className={styles.productImg}>
                                                    <img src={productImg.src} alt="logo" />
                                                </div>
                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div>
                                                            <Typography variant="h5">
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Model Name: LFI ONE
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
                                                        <Typography variant="h6">
                                                            ( 10 Review )
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="h3" className={styles.productPrice}>
                                                        $160.00
                                                    </Typography>
                                                </div>
                                                <div className={styles.actionBtn}>
                                                    <Button variant="contained"
                                                        className={`${styles["btn"]} ${styles["btn_primary"]}`}> Add To Cart</Button>
                                                    <Button variant="outlined" className={`${styles["btn"]} ${styles["btn_outlined"]}`}>Remove</Button>
                                                </div>
                                            </ListItem>

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
    )
}
