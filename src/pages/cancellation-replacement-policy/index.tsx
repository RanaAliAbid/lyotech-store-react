import Header from '../../common/header';
import Footer from '../../common/footer';
import { List, ListItem, ListItemText } from '@mui/material';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';


const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';

export default function Private() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });



    return (
        <>
            <div>
                <ThemeProvider theme={theme}>
                    <main className={styles.main}>
                        <Header title="Home" />

                        {/* Banner Section Start */}
                        <div className={`${styles['cancelPolicy']} ${styles['infoBannerWrap']}`}>
                            <div className={`${styles['infoBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h1" className={styles.bannerHD}>
                                                Cancellation and Replacement Policy
                                            </Typography>

                                            {/* <Typography variant="h4" className={styles.bannerTxt}>
                                                Home > Private Policy
                                            </Typography> */}
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                        {/* Banner Section End */}



                        {/* Text Section Start */}

                        <div className={`${styles['lyoInfo']}`}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>

                                        <List>
                                            <ListItem>

                                                <Typography variant="h4">
                                                    <strong> Last Update: July 2023 </strong>
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h5">
                                                    This Cancellation and Replacement Policy ("this Policy") governs the terms and conditions for canceling an order on the LYOTECH LABS website ("Website," "we," "our") made by the customer ("Customer," "you," "your") before it has been shipped. This Policy should be read in conjunction with the Delivery Policy available on our Website.
                                                </Typography>
                                            </ListItem>
                                        </List>



                                        <List className={styles.orderedListDecimal}>
                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Cancellation of Order: </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            You have the right to cancel your order before it has been shipped from our warehouse.
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            The cancellation of the order shall be made within twenty-four (24) hours from the time of order confirmation.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Conditions for cancellation: </strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            To request a cancellation, you must contact our customer support team at
                                                            <a href='mailto:support@lyotechlabs.com'>support@lyotechlabs.com</a>
                                                            within this timeframe, providing the necessary order details and reason for cancellation.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            If your cancellation request is received and processed before the order is shipped, subject to Section 1.5, you may indeed be eligible for a refund. In such cases, the amount you paid will be credited back to the original credit or debit card used for the payment.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            You shall be aware that during the process of refund, there shall be a deduction of the payment transaction fee or any other applicable fee associated with the payment. This deduction covers any fees incurred during the initial payment transaction.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Please refer to our Delivery Policy for information on the expected shipping timeframes.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            In the event that the stipulated time frame mentioned in Section 1.2 has lapsed or if the order has already been shipped, Customers will need to follow the Return and Refund Policy as outlined on our Website. This policy provides details on the process and requirements for returning the product and requesting a refund. It is the customer's responsibility to familiarize themselves with the Return and Refund Policy and follow the necessary steps outlined therein.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        {/* Test Section End */}


                        <Footer />
                    </main>
                </ThemeProvider>


            </div>
        </>
    );
}

