import * as React from 'react';

import styles from '@/styles/Home.module.css';
import { Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import Footer from '@/common/footer';
import Header from '@/common/header';
import Image from 'next/image';
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


    React.useEffect(() => {

    }, [])

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
                                            <Image src="/success.gif" alt='success' height={110} width={150} />
                                            <Typography className='bold-500' style={{ marginTop: "35px" }} variant='h1' color={"green"}>Your Order has been placed</Typography>
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

            if (!result || result?.isCancelled || ["pending", "failed", "cancelled"].includes(result?.status?.toLowerCase()))
                return {
                    redirect: {
                        destination: `/`,
                        permanent: false,
                    },
                };
        }
    }
    const order = result;
    return { props: { order } };
};