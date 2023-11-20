import * as React from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import Header from '../../../common/header';
import Footer from '../../../common/footer';
import { LinearProgress, List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { createTheme, ThemeProvider } from '@mui/material';
import DeliveryOrderItem from '@/components/initiate-delivery/DeliveryOrderItem';
import {
    getDeliveryCartOrder,
    createShippingPaymentLink,
} from '@/services/orders/order.service';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { getCountry } from '@/services/country/country.service';
import MastercardCheckoutComponent from '@/components/checkout/paymentMethods/mastercardCheckout.component';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function InitiateDelivery() {
    //
    const [cartOrder, setCartOrder] = React.useState<any>(null);
    const [countryList, setCountryList] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [sessionId, setSessionId] = React.useState('');
    const [enableProceedButton, setEnableProceedButton] = React.useState<Boolean>(false);

    const router = useRouter();
    const globalContext = useGlobalContext();
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    React.useEffect(() => {
        globalContext.setGlobalLoading(true);
        getCartOrder(true);
        getCountryList();
    }, []);

    const getCartOrder = async (init: boolean) => {
        //
        if (!router.query?.cartOrderId) return;

        if (!init) {
            setLoading(true);
        }

        const id: any = router.query.cartOrderId;

        const res = await getDeliveryCartOrder({ cartOrderId: id });
        if (!res) {
            router.push('/');
            globalContext.setGlobalLoading(false);
        } else {
            setCartOrder(res);
            globalContext.setGlobalLoading(false);
        }
        setLoading(false);
    };

    const getCountryList = async () => {
        const result = await getCountry();
        setCountryList(result?.data?.data?.country);
    };

    const handlePlaceOrder = async (e: any, shippingId: string) => {
        try {
            e.preventDefault();

            if (!enableProceedButton) return;

            globalContext.setGlobalLoading(true);

            const data = {
                shippingId: shippingId,
            };

            const result = await createShippingPaymentLink(data);

            if (result?.data?.data?.data?.sessionId) {
                console.log('open checkout page', result?.data?.data?.data?.sessionId);
                setSessionId(result?.data?.data?.data?.sessionId);
            } else if (result?.data?.data?.data?.paymentLink) {
                window.location.href = result?.data?.data?.data?.paymentLink;
            } else if (result?.data?.data?.data?.redirectUrl) {
                window.location.href = result?.data?.data?.data?.redirectUrl;
            } else {
                globalContext.setGlobalLoading(false);
            }
        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    React.useEffect(() => {
        setEnableProceedButton(false);
        if (!cartOrder) return;
        for (let order of cartOrder?.orders) {
            if (order.shippingType != 'no') {
                setEnableProceedButton(true);
            }
        }
    }, [cartOrder])

    return (
        <>
            <ThemeProvider theme={theme}>
                {cartOrder && countryList?.length > 0 ? (
                    <main className={styles.main}>
                        <Header title={`Cart Items)`} />
                        <div className={styles.paddingTB60}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <div className={styles.wrapTitle}>
                                            <Typography variant="h4"><Link style={{ color: 'red' }} href={`${process.env.CLOUDX_URL}/shop/orders`}><ArrowBackIosNewIcon style={{ float: 'left' }} /> <span style={{ float: 'left', marginBottom: '-15px' }}>Back</span></Link><br /> Initiate delivery </Typography>

                                            <div className={`${styles['orderIDdetails']} `}>
                                                <Typography variant="h5">
                                                    Order ID: #{cartOrder?.cartOrder?.invoiceId}
                                                </Typography>

                                                <Typography variant="body1">
                                                    Placed on{' '}
                                                    {cartOrder?.createdAt &&
                                                        moment(cartOrder.createdAt).format('MMM DD, YYYY')}
                                                </Typography>
                                            </div>
                                        </div>

                                        <form
                                            onSubmit={(e: any) => handlePlaceOrder(e, cartOrder?._id)}
                                        >
                                            <div className={styles.initiateDeliveryBox}>
                                                <List className={`${styles.productsList} mb-1`}>
                                                    {cartOrder?.orders &&
                                                        cartOrder?.orders.map((order: any) => (
                                                            <DeliveryOrderItem
                                                                key={order.order._id}
                                                                productName={
                                                                    order.order.products[0].productId.name
                                                                }
                                                                productImage={
                                                                    order.order.products[0].productId
                                                                        .featuredImage.link
                                                                }
                                                                selfPickupFee={order.selfPickupFee}
                                                                shippingFee={order.shippingFee}
                                                                countryList={countryList}
                                                                orderId={order.order._id}
                                                                cartOrderId={cartOrder?.cartOrder?._id}
                                                                shippingId={cartOrder?._id}
                                                                totalOrders={cartOrder?.orders?.length ?? 0}
                                                                shippingCountry={order.shippingCountry}
                                                                shippingAddress={order.shippingAddress}
                                                                getCartOrder={getCartOrder}
                                                                setDataLoading={setLoading}
                                                                orderShippingType={order.shippingType}
                                                                billingAddress={cartOrder?.cartOrder?.billingAddress}
                                                            />
                                                        ))}
                                                </List>

                                                <br />
                                                <br />
                                                <Grid container spacing={3} justifyContent="flex-end">
                                                    <Grid item md={4} sm={6} xs={12}>
                                                        <div className={`${styles.summaryDetails}`}>
                                                            <List>
                                                                {cartOrder.totalShippingFee > 0 && (
                                                                    <ListItem>
                                                                        <Typography variant="h6">
                                                                            Shipping Fee
                                                                        </Typography>
                                                                        <Typography variant="h6">
                                                                            {(cartOrder.totalShippingFee * globalContext.conversionRate).toFixed(2)} {globalContext.currencySymbol}
                                                                        </Typography>
                                                                    </ListItem>
                                                                )}

                                                                {cartOrder.totalSelfPickupFee > 0 && (
                                                                    <ListItem>
                                                                        <Typography variant="h6">
                                                                            Self-PickUp Fee
                                                                        </Typography>
                                                                        <Typography variant="h6">
                                                                            {(cartOrder.totalSelfPickupFee * globalContext.conversionRate).toFixed(2)} {globalContext.currencySymbol}
                                                                        </Typography>
                                                                    </ListItem>
                                                                )}

                                                                {cartOrder.totalAppliedTax > 0 && (
                                                                    <ListItem>
                                                                        <Typography variant="h6">VAT</Typography>
                                                                        <Typography variant="h6">
                                                                            {(cartOrder.totalAppliedTax * globalContext.conversionRate).toFixed(2)} {globalContext.currencySymbol}
                                                                        </Typography>
                                                                    </ListItem>
                                                                )}

                                                                <ListItem className={styles.summaryfoot}>
                                                                    <Typography variant="h5"> Total </Typography>
                                                                    <Typography variant="h5">
                                                                        {' '}
                                                                        {(cartOrder.totalAmount * globalContext.conversionRate).toFixed(2)}{' '} {globalContext.currencySymbol}
                                                                    </Typography>
                                                                </ListItem>
                                                            </List>

                                                            {loading ? (
                                                                <>
                                                                    <Typography variant="h5"> Loading Amount... </Typography>
                                                                    <br />
                                                                    <LinearProgress />
                                                                </>
                                                            ) : (
                                                                enableProceedButton && <Button
                                                                    variant="contained"
                                                                    fullWidth
                                                                    type="submit"
                                                                    disabled={loading}
                                                                    className={`${styles['btn']} ${styles['btn_primary']}`}
                                                                >
                                                                    Proceed
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>

                        {sessionId && <MastercardCheckoutComponent sessionId={sessionId} />}

                        <Footer />
                    </main>
                ) : (
                    <></>
                )}
            </ThemeProvider>
        </>
    );
}
