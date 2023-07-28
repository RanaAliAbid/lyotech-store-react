import * as React from 'react';

import styles from '@/styles/Home.module.css';
import { Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import Footer from '@/common/footer';
import Header from '@/common/header';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { generatePaymentLink, verifyOrderDetails } from '@/services/orders/order.service';
import { FaCalendar, FaInfoCircle, FaMailBulk, FaMoneyBill, FaPhone, FaPhoneAlt, FaShippingFast, FaUser, FaWallet } from 'react-icons/fa';

export default function PaymentSuccessComponent({ order }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const { t } = useTranslation('cart');

    const goToPaymentPage = async () => {
        try {

            globalContext.setGlobalLoading(true);

            const result = await generatePaymentLink(order?._id ?? "");

            if (result?.data?.data?.data?.paymentLink) {
                window.location.href = result?.data?.data?.data?.paymentLink;
            }

            globalContext.setGlobalLoading(false);

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <main className={styles.main}>
                <Header title={`Checkout Order`} />
                <div className={styles.paddingTB60}>
                    <Container className={styles.containerBox}>
                        <div className='' style={{ minHeight: "50vh" }}>
                            <Grid container spacing={3}>

                                <Grid item md={12} xs={12} justifyItems={"center"} alignContent={"center"}>
                                    <div
                                        className={`${styles['wrapTitle']} ${styles['orderSum']}`}
                                    >
                                        <span className='d-flex'>
                                            <Typography className='bold-500' style={{ marginTop: "35px" }} variant='h1' color={"red"}>Your Order has not been placed</Typography>
                                        </span>
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

                                    <br /><br />

                                    <Button
                                        onClick={(e) => { goToPaymentPage() }}
                                        variant="contained"
                                        size='small'
                                        className={`${styles['btn']} ${styles['btn_danger']}`}
                                    >
                                        {t('Go to payment page')}
                                    </Button>
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

            if (!result || result?.isCancelled || !["pending", "failed"].includes(result?.status?.toLowerCase())) {
                return {
                    redirect: {
                        destination: `/`,
                        permanent: false,
                    },
                };
            }
        }
    }
    const order = result;
    return { props: { order } };
};