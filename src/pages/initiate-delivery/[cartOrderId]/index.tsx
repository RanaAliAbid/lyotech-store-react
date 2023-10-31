import * as React from 'react';
import moment from 'moment'
import { useRouter } from 'next/router'
import Header from '../../../common/header';
import Footer from '../../../common/footer';
import { List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { createTheme, ThemeProvider } from '@mui/material';
import DeliveryOrderItem from '@/components/initiate-delivery/DeliveryOrderItem';
import { getDeliveryCartOrder } from '@/services/orders/order.service';
import { useGlobalContext } from '@/contexts/GlobalContext';

export default function InitiateDelivery() {
    const [cartOrder, setCartOrder] = React.useState({})
    const router = useRouter();
    const globalContext = useGlobalContext();
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    React.useEffect(() => {
        getCartOrder(router.query.cartOrderId)
    }, [])

    const getCartOrder = async (cartOrderId: any) => {
        globalContext.setGlobalLoading(true);
        const res = await getDeliveryCartOrder({ cartOrderId: cartOrderId })
        if (!res) {
            router.push('/')
            globalContext.setGlobalLoading(false);
        } else {
            setCartOrder(res)
            globalContext.setGlobalLoading(false);
        }
    }

    return (
        <>
            {cartOrder && <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title={`Cart Items)`} />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className={styles.wrapTitle} >
                                        <Typography variant="h4"> Initiate delivery </Typography>

                                        <div className={`${styles['orderIDdetails']} `}>
                                            <Typography variant="h5">
                                                Order ID: #{cartOrder?.cartOrder?.invoiceId}
                                            </Typography>

                                            <Typography variant="body1">
                                                Placed on {cartOrder?.createdAt &&
                                                    moment(cartOrder.createdAt).format(
                                                        'MMM DD, YYYY'
                                                    )}
                                            </Typography>
                                        </div>
                                    </div>

                                    <div className={styles.initiateDeliveryBox}>
                                        <List className={`${styles.productsList} mb-1`}>
                                            {cartOrder?.orders && cartOrder.orders.map((order) =>
                                                <DeliveryOrderItem key={order.order._id}
                                                    productName={order.order.products[0].productId.name}
                                                    productImage={order.order.products[0].productId.featuredImage.link}
                                                    selfPickupFee={order.selfPickupFee}
                                                    shippingFee={order.shippingFee}
                                                />
                                            )}
                                        </List>
                                        <Grid container spacing={3} justifyContent="flex-end">
                                            <Grid item md={4} sm={6} xs={12}>
                                                <div className={`${styles.summaryDetails}`}>
                                                    <List>
                                                        <ListItem>
                                                            <Typography variant="h6">
                                                                Shipping Fee
                                                            </Typography>
                                                            <Typography variant="h6">
                                                                AED {cartOrder.totalShippingFee}
                                                            </Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Typography variant="h6">
                                                                Self-PickUp Fee
                                                            </Typography>
                                                            <Typography variant="h6">
                                                                AED {cartOrder.totalSelfPickupFee}
                                                            </Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Typography variant="h6">
                                                                Tax
                                                            </Typography>
                                                            <Typography variant="h6">
                                                                AED {cartOrder.totalAppliedTax}
                                                            </Typography>
                                                        </ListItem>

                                                        <ListItem className={styles.summaryfoot}>
                                                            <Typography variant="h5"> Total </Typography>
                                                            <Typography variant="h5"> AED {cartOrder.totalAmount} </Typography>
                                                        </ListItem>
                                                    </List>

                                                    <Button
                                                        variant="contained"
                                                        fullWidth
                                                        className={`${styles['btn']} ${styles['btn_primary']}`}
                                                    >
                                                        Proceed
                                                    </Button>
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
            </ThemeProvider>}
        </>
    );
}