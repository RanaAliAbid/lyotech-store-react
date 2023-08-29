import Header from '../../common/header';
import Footer from '../../common/footer';
import { List, ListItem, ListItemText } from '@mui/material';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';
import Link from 'next/link';

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
                        <div className={`${styles['termsConditions']} ${styles['infoBannerWrap']}`}>
                            <div className={`${styles['infoBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h1" className={styles.bannerHD}>
                                                Terms and Conditions
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
                                                    <strong> Terms and Conditions </strong>
                                                </Typography>
                                            </ListItem>

                                            <ListItem>
                                            <Typography variant="h5">
                                                These Terms and Conditions (“Terms”) are made between the customer (“Customer(s)”, “you”, “your”) and LYOTECH LABS ELECTRONICS TRADING L.L.C (“LYOTECH LABS ELECTRONICS TRADING L.L.C”, “we”, “us”, “ours”) and govern your access to and use of all parts of the website and mobile application branded as LYOTECH LABS ELECTRONICS TRADING L.L.C and referring to the domain <a href="https://lyotechlabs.com/"> lyotechlabs </a> (the “Website”, “App”). By accessing or making a purchase on our Website, you acknowledge that you have carefully read, fully understood, and unconditionally accepted all of the Terms outlined in this agreement. You hereby affirm that you are legally bound by these Terms, including our Privacy Policy & Cookie Policy, and any other policies that are made available on our Website, which may govern your use of LYOTECH LABS ELECTRONICS TRADING L.L.C, depending on the specific activity conducted. LYOTECH LABS ELECTRONICS TRADING L.L.C does not trade with or provide any services to OFAC and sanctioned countries. Customer using the website who are Minor /under the age of 18 shall not register as a Customer of the website and shall not transact on or use the website.
                                                </Typography>
                                            </ListItem>
                                        </List>




                                        <List className={styles.orderedListDecimal}>
                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Products and Services </strong>
                                                </Typography>

                                                <List>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C produces a range of Hardware and Services, as can be found on our Website.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        As a Customer of LYOTECH LABS ELECTRONICS TRADING L.L.C you acknowledge that each Hardware and Service is sold on an as and when basis determined by availability
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C makes no warranties or representations that the Hardware or Services will be fit for any purpose other than the ones explicitly stated on our Website. All Products and Services provided on our website are for personal use only; none of these Products and Services are authorized for commercial or industrial use, unless it is explicitly stated.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Each Hardware and/or Service may be subject to additional terms and conditions, in which case these Terms will be duly incorporated into as a result of your acceptance being a Customer of LYOTECH LABS ELECTRONICS TRADING L.L.C..
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Images and colors in our Products shown on our Website are for visual representation purposes only. It must be understood that the actual images, colors, dimensions, shapes and including display settings used on the site may not actually reflect the original Product. Accurate specifications of each Product are provided in addition to visuals, and it is your sole responsibility to ensure these specifications meet your purpose.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>




                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Account Set Up </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        In order to make any online purchase, you will need to register on our Website by giving your personal identification details. You acknowledge it is your responsibility to ensure that your name and password to access your account on the Website is kept confidential.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        In the event you believe that your username or password is being hacked or is likely to be used by any third parties, you should immediately notify us. We shall have the right to refuse access, suspend temporarily or delete the account or edit the contents at any time without notice.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C will never under any circumstances ask you for your passwords or any authentication codes, and we assume no responsibility for any loss that you may sustain due to compromise of account login credentials due to no fault of LYOTECH LABS ELECTRONICS TRADING L.L.C and/or failure or act on any notices or alerts that we may send you.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Privacy and Personal InformationS</strong>
                                                </Typography>
                                                <List >
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Our Privacy & Cookies Policy which can be found at <a href="https://lyotechlabs.com/privacy-policy"> privacy and cookies policy </a> that governs access to and use all parts of our Website and it applies to all Customers and others who access or use our Website. The purpose of the Privacy Policy describes how, why and when LYOTECH LABS ELECTRONICS TRADING L.L.C collects, processes and manages Customers’ personal data through the Website, and as previously mentioned is duly incorporated into these Terms by reference.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        The Customer is responsible for maintaining the confidentiality of his account.
                                                        </Typography>
                                                    </ListItem>

                                                    
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Ownership and Intellectual Property Rights</strong>
                                                </Typography>

                                                <List >
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        These Terms grant limited license to access and use our Website and hereby you agree that all the text, graphics, user interfaces, visual interface, images, Logos, sounds, process flow diagrams, computer code, programs, software, Products, information and documents, design, structure, page headers, layout of any content included in our Website are exclusively owned, controlled, licensed and they are strictly subjected to trademark, service mark, copyright and other intellectual property rights by LYOTECH LABS ELECTRONICS TRADING L.L.C and/or licensors and affiliates.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>Risk Disclosure</strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C Hardware and Services are independent of their activities which may be conducted through third parties, we do not make any warranties or representations regarding the operation of our third party providers and will not be liable for any loss or damage endured by the Customer as a result of such third parties.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        By purchasing a Hardware or Service you acknowledge and accept that the capabilities may include engaging in activities utilizing blockchain technology and more. These activities are of a risky and uncertain nature that may result in financial loss or other such losses, for which LYOTECH LABS ELECTRONICS TRADING L.L.C bears no responsibility. It is the sole responsibility of the Customer to educate themselves on the activities they choose to engage in, and the risks associated with such activities. If you are not comfortable assuming these risks, you should not access or engage in transactions using blockchain-based technology.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Supplier does not accept returns or refunds for the Hardware under any circumstances, returned Hardware for the purpose of repair will be governed by the applicable warranty plan purchased.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                    Price, Payment and Delivery
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        The price of each Hardware and Service offered by LYOTECH LABS ELECTRONICS TRADING L.L.C is subject to variability and may be changed at the sole discretion of LYOTECH LABS ELECTRONICS TRADING L.L.C. Once a payment has been made and an order confirmation has been received, the price of the purchased items or services cannot be changed. It is the Customer’s responsibility to visit the Website as needed to stay updated on the latest pricing information.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Purchases made on the Website may be subject to additional charges and payment conditions, which will be clearly defined during the checkout process or in the specific terms applicable to such purchase.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C accepts card payments, including Visa and Mastercard credit/debit cards which can be made in AED. Cardholder must retain a copy of transaction records and <a href="https://lyotechlabs.com/"> lyotechlabs.com </a> policies and rules.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        The displayed price and currency at the checkout page, will be the same price and currency printed on the Transaction Receipt and the amount charged to the card will be shown in your card currency.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Payments made by card are subject to additional fees which will be identified at checkout.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Full details of our delivery terms can be found in our Delivery Condition which can be found here 
                                                        <a href="https://lyotechlabs.com/delivery-shipping-policy"> Delivery policy </a> and is duly incorporated into these Terms by reference should you purchase Hardware, and is subject to change at the sole discretion of LYOTECH LABS ELECTRONICS TRADING L.L.C. It is the Customers responsibility to regularly check these changes, especially at the time of purchase.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        Warranty
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Warranty provisions are subject to the specific Hardware or Service you purchase.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            Hardware Warranty:
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                All Hardware include standard warranty for one year (“Warranty Period”) provided by the manufacturer of the Hardware(s) (“Manufacturer”).
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Standard warranty is provided by third party manufacturers, not LYOTECH LABS ELECTRONICS TRADING L.L.C. LYOTECH LABS ELECTRONICS TRADING L.L.C bears no responsibility for the manufacturer’s warranty, and Customers are advised to read the terms of such warranty carefully before purchasing.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Customers may purchase additional warranty packages for their Hardware which can be found at checkout upon purchasing (“Additional Warranty Plans”).
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Additional Warranty Plans are subject to their own Terms and Conditions which you are solely responsible for reading and agreeing to when purchasing.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                The coverage of your Hardware depends on the package you have purchased.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Shipping Warranty: If you do not receive your order, or your order is damaged in transit, please contact our Customer Support at the Details provided in the ‘Contact Us’ clause for assistance with your matter.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>







                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                    Third Party Service Providers and Links
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C relies on third party service providers in order to fulfill the performance of the Platform to Users, and exercise maximum compliance and security. We will not be responsible for any fault or damage caused by any third party service provider, and herein exclude ourselves from any liability that may arise as a result of such third party service providers actions.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C Website may direct you to third party websites in relation to our Hardware and Services. Whilst we have adequate security measures in place to protect your use of our Website, we bear no responsibility for any occurrence upon clicking such links, and it is the Customers responsibility to make a judgment whether to follow such links. LYOTECH LABS ELECTRONICS TRADING L.L.C will not be held liable in relation to any access or utilization of a third party link.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        Miscellaneous
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        You agree and acknowledge that you are making use of our services at your own risk and they are offered on an “AS IS” and “AS AVAILABLE” basis without any representation or warranty. In accordance with the applicable law, we exclude all express or implied warranties, terms and conditions including, but not limited to, implied warranties of merchantability, fitness for a particular purpose and non-infringement. In addition to the extent permitted by applicable law, in no event whether as a result of Product defect, breach of contract, warranty; tort; copyright, trademark, trade secret, patent and other intellectual property infringement or otherwise, shall LYOTECH LABS ELECTRONICS TRADING L.L.C or any of its agents or affiliates be liable for any special, consequential, incidental, indirect or exemplary damages, including, but not limited to, loss of profit, loss of use of the Products, cost of substitute Product.

                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        No one other than LYOTECH LABS ELECTRONICS TRADING L.L.C, LYOTECH LABS ELECTRONICS TRADING L.L.C affiliates and the Customer to these Terms, shall have any right to enforce any of its provisions.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        No failure, delay or omission by either party in exercising any right, power or remedy provided by law or under these Terms shall operate as a waiver of that right, power or remedy, nor shall it preclude or restrict any future exercise of that or any other right or remedy. No single or partial exercise of any right, power or remedy provided by law or under these Terms shall prevent any future exercise of it or the exercise of any other right, power or remedy.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        If any provision of these Terms (or part of any provision) is or becomes illegal, invalid or unenforceable, the legality, validity and enforceability of any other provision of these Terms shall not be affected.
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        LYOTECH LABS ELECTRONICS TRADING L.L.C shall have no liability under or be deemed to be in breach of these Terms for any delays or failures in performance of these Terms which result from Force Majeure. The party subject to the Force Majeure event shall promptly notify the other party in writing when such the event causes a delay or failure in performance and when it ceases to do so.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        Modification
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        These Terms and any other policies available on our Website are subject to modification at the sole discretion of LYOTECH LABS ELECTRONICS TRADING L.L.C. Any changes or updates will be effective immediately upon being posted on the Website. It is the responsibility of the Customers to regularly check for updates and review the amended Terms and policies. By continuing to use the Website after any modifications, you signify your acceptance of the revised Terms and policies.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        Contact Us
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            LYOTECH LABS Customer Support is available to answer any inquiries you may have regarding these Terms at:
                                                            <a href='mailto:support@lyotechlabs.com'>support@lyotechlabs.com</a>
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        Governing Law and Dispute Resolution
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        The laws of the United Arab Emirates govern Plans purchased. Any disputes arising out of or in connection with these Terms, shall be subject to the exclusive jurisdiction of the Courts of Dubai, United Arab Emirates.
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

