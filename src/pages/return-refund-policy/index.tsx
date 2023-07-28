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
                        <div className={`${styles['returnPolicy']} ${styles['infoBannerWrap']}`}>
                            <div className={`${styles['infoBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h1" className={styles.bannerHD}>
                                                Return and Refund Policy
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
                                                    <strong> Return and Refund Policy </strong>
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h5">
                                                    These Terms and Conditions (“Terms”) are made between the customer (“Customer(s)”, “you”, “your”) and LYOTECH LABS (“LYOTECH LABS”, “we”, “us”, “ours”) and govern your access to and use of all parts of the website and mobile application branded as LYOTECH LABS ELECTRONICS TRADING L.L.C and referring to the domain <a href="https://lyotechlabs.com/"> lyotechlabs </a> (the “Website”, “App”).
                                                </Typography>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h5">
                                                    By accessing or making a purchase on our Website, you acknowledge that you have carefully read, fully understood, and unconditionally accepted all of the Terms outlined in this agreement. You hereby affirm that you are legally bound by these Terms, including our Privacy Policy & Cookie Policy, and any other policies that are made available on our Website, which may govern your use of LYOTECH LABS ELECTRONICS TRADING L.L.C, depending on the specific activity conducted.
                                                </Typography>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h5">
                                                    LYOTECH LABS ELECTRONICS TRADING L.L.C does not trade with or provide any services to OFAC and sanctioned countries.
                                                </Typography>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h5">
                                                    Any user who is a minor/under the age of 18 shall not be allowed to register as a User of the website and shall not transact on or use the Website or its services.
                                                </Typography>
                                            </ListItem>
                                        </List>



                                        <List className={styles.orderedListDecimal}>
                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Returns </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Eligibility
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Only products that are unused, unopened, and in their original packaging are eligible for return, for the following reasons:
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    The product must be in the same condition as when it was received by the Customer.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    If the product has been opened, we will determine whether it’s eligible for return under our sole discretion.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    If you find a defect after opening or using the product, it won’t be eligible for return. Instead, the manufacturer’s repair or replacement warranty will cover it.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>

                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Timeframe
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    You must initiate the return process within thirty (30) days from the date of product delivery.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    After the specified timeframe, returns may not be accepted, except in cases of warranty claims.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Return Procedure:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    To initiate a return of the Hardware for repair or replacement, raise a ticket online at support.lyotechlabs.com under the dedicated section ‘Return Merchandize Authorization (‘RMA’), including full details of your request. To familiarize yourself with the terms and conditions regarding the RMA process, request thatest you review the RMA policy available on our Website. This policy outlines the specific guidelines and procedures for returning merchandise for repair or replacement.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Our customer support team will guide you through the return process, including providing you with the appropriate return address and instructions.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    You are responsible for the cost of shipping the product back to us unless the return is due to our error or a defective product.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Inspection and Approval:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Once we receive the returned product, our team will inspect it to ensure it meets the eligibility criteria mentioned in section 1.1.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    If the product passes the inspection, we will process the return and issue a refund according to our refund policy.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Refunds </strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Refund Eligibility:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Refunds will be issued for eligible returned products in accordance with the terms and conditions mentioned in section 1.1.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    The refund may be subject to deductions for any applicable restocking fees, shipping costs, or other charges as specified in our refund policy.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Refund Process:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Once the return is approved, we will initiate the refund process.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    The refund will be processed using the same payment method used for the original purchase unless otherwise agreed upon.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    For approved refunds, the amount paid will be credited back to the original credit or debit card used for the payment. You shall be aware that during the process of refund, there shall be a deduction of the payment transaction fee, delivery or assembly costs incurred, or any other applicable fee associated with the payment. This deduction covers any fees incurred during the initial payment transaction. If you made the payment using a stablecoin, the refund process will be conducted in a similar manner. This means that the refund will be processed through the same stablecoin transaction, and the transaction fee or any other applicable fee associated with the payment will be deducted.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>



                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Refund Timeframe:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    Refunds will be made onto the original mode of payment and will be processed within 10 to 45 days depends on the issuing bank of the credit card. The timeframe for the refund to be reflected in your account is subject to variation based on your payment provider.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    It should be noted that the processing time for refunds through Visa or Mastercard may differ due to factors such as the policies of the issuing bank or financial institution. Typically, it can take from a few days to several weeks for the refund to appear on your credit card statement and be processed in your account.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>




                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Exceptions: </strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Non-Returnable Items:Certain products, including but not limited to downloadable software, digital codes, and personalized/customized items, may not be eligible for return or refund. Please check the product description or contact our customer support for more information.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Damaged or Defective Products:If you receive a damaged or defective product, please contact our customer support immediately to initiate the return and refund process. We may require photographic evidence or other documentation to assess the damage or defect before proceeding with the return and refund.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Contact Us</strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            If you have any questions or concerns regarding our Return and Refund Policy, please contact our customer support team for assistance at <a href="mailto:support.lyotechlabs.com"> support.lyotechlabs.com. </a>
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

