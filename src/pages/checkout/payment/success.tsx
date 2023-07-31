import * as React from 'react';

import Footer from '@/common/footer';
import Header from '@/common/header';
import Sidebar from '../../../common/sidebar';

import styles from '@/styles/Home.module.css';
import { Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Link from '@mui/material/Link';
import Image from 'next/image';
import productImg from '../../../img/productImg.png';

import successImg from '../../../img/success.png';


import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { verifyOrderDetails } from '@/services/orders/order.service';
import { FaCalendar, FaInfoCircle, FaMailBulk, FaMoneyBill, FaPhoneAlt, FaShippingFast, FaUser, FaWallet } from 'react-icons/fa';

export default function PaymentSuccessComponent({ order }: InferGetServerSidePropsType<typeof getServerSideProps>) {

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
                            <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                                <Sidebar />
                            </Grid>

                            <Grid item md={9} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4">  Your Orders </Typography>
                                </div>
                                <div className={`${styles['wrapBox']} ${styles['ordersPlaceSec']}`}>
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
                                                    Placed on 24 Nov 2022
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className={styles.invoiceLinks}>
                                            <Link href="#">
                                                View invoice
                                            </Link>

                                            <Link href="#">
                                                Download invoice
                                            </Link>

                                        </div>
                                    </div>

                                    <Grid container spacing={3}>
                                        <Grid item md={7} xs={12}>
                                            <div className={styles.ordersList}>
                                                <div className={styles.orderHead}>
                                                    <Typography variant="h5">
                                                        Your Order
                                                    </Typography>
                                                </div>

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
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Model Name: LFI ONE
                                                            </Typography>
                                                            <Typography variant="h5">
                                                                {t('order-id')} : 403-1732169-5273
                                                            </Typography>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className={styles.ordersList}>
                                                <div className={styles.orderHead}>

                                                    <Typography variant="h5">
                                                        Delivery address
                                                    </Typography>


                                                </div>

                                                <div className={styles.orderBody}>
                                                    <div>
                                                        <div className={styles.addresses}>
                                                            <div className={styles.addressesType}>
                                                                <Typography variant="h4" className='text-capitalize'>
                                                                    Vimek patel
                                                                </Typography>
                                                            </div>
                                                            <div>
                                                                <Typography variant="body1">
                                                                    3rd floor, CBA technologies 57XF+XM - Dubai <br />
                                                                    Dubai, United Arab Emirates    <br />
                                                                    +971-58-1234659    <br />
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
                                                    <Typography variant="h5">
                                                        Order Summary
                                                    </Typography>
                                                </div>

                                                <div className={styles.orderBody}>
                                                    <List className={styles.orderSummary}>
                                                        <ListItem className={styles.listItem}>
                                                            <Typography variant="h5">
                                                                Payment method:
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Lyomerchant
                                                            </Typography>
                                                        </ListItem>

                                                        <ListItem className={styles.listItem}>
                                                            <Typography variant="h5">
                                                                Shipping method:
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                Express plus
                                                            </Typography>
                                                        </ListItem>
                                                    </List>
                                                </div>

                                                <div className={styles.foot}>
                                                    <Typography variant="h5">
                                                        Total Amout:
                                                    </Typography>

                                                    <Typography variant="h5">
                                                        4066.15 
                                                    </Typography>
                                                </div>
                                            </div>


                                            <div className={styles.ordersList}>
                                                <div className={styles.orderHead}>
                                                    <div>
                                                        <Typography variant="h5">
                                                            Order Status
                                                        </Typography>
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
                    <Container className={styles.containerBox}>
                        <div className='' style={{ minHeight: "50vh" }}>
                            <Grid container spacing={3}>

                                {/* <Grid item md={12} xs={12} justifyItems={"center"} alignContent={"center"}>
                                    <div
                                        className={`${styles['wrapTitle']} ${styles['orderSum']}`}
                                    >
                                        <span className='d-flex'>
                                            <Image src="/success.gif" alt='success' height={110} width={150} />
                                            <Typography className='bold-500' style={{ marginTop: "35px" }} variant='h1' color={"green"}>Your Order has been placed</Typography>
                                        </span>
                                    </div>
                                </Grid> */}

                                <Grid item md={6} xs={12} justifyItems={"center"} alignContent={"center"}>
                                    <div className={`${styles['wrapTitle']} ${styles['orderSum']}`}>
                                        <List
                                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                                            subheader={<ListSubheader>
                                                <Typography variant="h4">{t('order-summary')}</Typography>
                                            </ListSubheader>}
                                        >
                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaInfoCircle />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Order: #${order?._id}`} />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaMoneyBill />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Amount: ${order?.totalAmount} ${globalContext.currencySymbol}`} />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaWallet />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Payment Method: ${order?.paymentMethod?.name}`} />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaShippingFast />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Shipping Method: ${order?.shippingMethod?.name}`} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaCalendar />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Date: ${order?.createdAt}`} />
                                            </ListItem>
                                        </List>
                                    </div>

                                </Grid>

                                <Grid item md={6} xs={12} justifyItems={"center"} alignContent={"center"}>

                                    <div className={`${styles['wrapTitle']} ${styles['orderSum']}`}>
                                        <List
                                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                                            subheader={<ListSubheader>
                                                <Typography variant="h4">{t('order-summary')}</Typography>
                                            </ListSubheader>}
                                        >
                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaUser />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Name : ${order?.details?.shippingAddress?.firstName} ${order?.details?.shippingAddress?.lastName}`} />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaMailBulk />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Email: ${order?.details?.shippingAddress?.email}`} />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemIcon>
                                                    <FaPhoneAlt />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary={`Phone Number: ${order?.details?.shippingAddress?.phone}`} />
                                            </ListItem>
                                        </List>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>
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

        if (orderid?.length >= 1) {

            result = await verifyOrderDetails({ id: orderid });

            // if (!result || result?.isCancelled || ["pending", "failed", "cancelled"].includes(result?.status?.toLowerCase()))
            //     return {
            //         redirect: {
            //             destination: `/`,
            //             permanent: false,
            //         },
            //     };
        }
    }
    const order = result;
    return { props: { order } };
};