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

export default function Onecarepolicy() {
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
                                                Onecare Policy
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
                                        <Typography variant="h4">
                                            <strong> Pre-sale Policy </strong>
                                        </Typography>



                                        <div className={styles.termListItemText}>
                                         
                                            <List className={styles.orderedListDecimal} >
                                                <ListItem> <strong> The Plan </strong>
                                                    <List >
                                                        <ListItem>
                                                            This contract (the “Plan”) governs the services provided by LYOTECH LABS ELECTRONICS TRADING L.L.C for your OneCare plan
                                                            purchase and includes the terms in this document, your Plan Confirmation (“Plan Confirmation“), and
                                                            the original sales receipt for your Plan.
                                                        </ListItem>
                                                        <ListItem>
                                                            Your Plan Confirmation will be provided to you at the time of purchase or sent to you automatically
                                                            thereafter. If you purchased your Plan from LYOTECH LABS ELECTRONICS TRADING L.L.C, you may obtain a copy of your Plan
                                                            Confirmation by going to the purchases page on your account.
                                                        </ListItem>
                                                        <ListItem>
                                                            Benefits under this Plan are in addition to your rights under applicable laws, and the
                                                            manufacturer's standard hardware warranty.
                                                        </ListItem>
                                                        <ListItem>
                                                            The Plan covers the LFi One Smartphone listed on your Plan Confirmation (“Covered Device”). The Plan
                                                            only applies to one device, therefore if you have multiple devices you wish to cover, you must
                                                            purchase a separate Plan for each device.
                                                        </ListItem>
                                                        <ListItem>
                                                            This Plan does not cover the XLfi Miners (500, 1000 and 5000).
                                                        </ListItem>
                                                        <ListItem>
                                                            Covered Device includes any replacement product provided to you by LYOTECH LABS ELECTRONICS TRADING L.L.C under this Plan.
                                                        </ListItem>
                                                        <ListItem>
                                                            Coverage begins when you purchase the Plan, and continues for 24 months, unless canceled prior (the
                                                            “Plan Term”). In case the Covered Device is replaced, the Plan does not renew from the issuance of a
                                                            new device, instead the original date on the receipt when purchasing the Covered Device will apply.
                                                        </ListItem>
                                                    </List>
                                                </ListItem>
                                                <ListItem> <strong> Payment </strong>
                                                    <List >
                                                        <ListItem>
                                                            The Price of the Plan is available on the original sales receipt as provided by LYOTECH LABS ELECTRONICS TRADING L.L.C, and
                                                            will be US $ 117 made on a one-time upfront payment basis.
                                                        </ListItem>

                                                        <ListItem>
                                                            The Plan can only be purchased during the time of pre-sale or purchase of the Covered Device. Once
                                                            you have purchased a device, you cannot purchase the Plan independently.
                                                        </ListItem>
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C reserves the right to change the price of the Plan, and in such occurrences this will
                                                            be notified to you prior to payment.
                                                        </ListItem>

                                                        <ListItem>
                                                            Payment shall be made by either card or cryptocurrency, with the choice of payment method at the
                                                            sole discretion of the purchaser.
                                                        </ListItem>

                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C only accepts cryptocurrency payments made in stablecoins.
                                                        </ListItem>
                                                        <ListItem>
                                                            If the payment is made via card, Lyotech will charge a 5% fee. If the payment is made in
                                                            cryptocurrency, Lyotech will not charge any fees.
                                                        </ListItem>
                                                    </List>
                                                </ListItem>
                                                <ListItem>  <strong> What is Covered? </strong>
                                                    <List >
                                                        <ListItem>
                                                            Hardware Services for Defects (“Hardware Service”)
                                                            <p>
                                                                If during the Plan Term, you submit a valid claim by notifying LYOTECH LABS ELECTRONICS TRADING L.L.C that a defect in
                                                                materials and workmanship has arisen in the Covered Device, LYOTECH LABS ELECTRONICS TRADING L.L.C may, at its discretion,
                                                                either:
                                                                <List >
                                                                    <ListItem>
                                                                        repair the defect remotely by assisting you in actions required
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        repair the defect at no charge, using new parts, or
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        exchange the Covered Device with a replacement product that is new or comprised of new
                                                                        and/or previously used genuine LYOTECH LABS ELECTRONICS TRADING L.L.C parts and has been tested and passed Lyotech
                                                                        Labs functional requirements, subject to additional costs to be borne by you.
                                                                    </ListItem>
                                                                </List>

                                                                If LYOTECH LABS ELECTRONICS TRADING L.L.C exchanges the Covered Device, the original product becomes LYOTECH LABS ELECTRONICS TRADING L.L.C’s property
                                                                and the replacement product is your property, with coverage effective for the remainder of the Plan
                                                                Term. The Plan term does not renew even if the device is fully replaced. LYOTECH LABS ELECTRONICS TRADING L.L.C may use
                                                                Covered Devices or replacement parts for service that are sourced from a country that is different
                                                                from the country from which the Covered Device or original parts were sourced.
                                                            </p>

                                                        </ListItem>
                                                        <ListItem>
                                                            Services for Accidental Damage from Handling (“ADH Service”)
                                                            <p>
                                                                If, during the Plan Term, you submit a valid claim by notifying LYOTECH LABS ELECTRONICS TRADING L.L.C that the Covered
                                                                Device has broken due to accidental damage from handling resulting from an unexpected and
                                                                unintentional external event (such as, drops and damage caused by liquid contact) LYOTECH LABS ELECTRONICS TRADING L.L.C
                                                                may, at its discretion, either
                                                                <List >
                                                                    <ListItem>
                                                                        repair the defect using new parts, or
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        exchange the Covered Device with a replacement product that is new or comprised of new
                                                                        and/or previously used genuine LYOTECH LABS ELECTRONICS TRADING L.L.C parts and has been tested and passed Lyotech
                                                                        Labs functional requirements, subject to additional costs to be borne by you.
                                                                    </ListItem>
                                                                </List>
                                                                These are subject to exceptions as provided for in Clause 4 of this Plan.
                                                            </p>
                                                        </ListItem>

                                                        <ListItem>
                                                            What is not Covered?
                                                            <List >
                                                                <ListItem>
                                                                    LYOTECH LABS ELECTRONICS TRADING L.L.C may restrict Hardware Service and ADH Services to the country where the Covered
                                                                    Device was originally purchased.
                                                                </ListItem>
                                                                <ListItem>
                                                                    LYOTECH LABS ELECTRONICS TRADING L.L.C will not provide Hardware Services or ADH Services in the following
                                                                    circumstances:
                                                                    <List >
                                                                        <ListItem>
                                                                            To protect against normal wear and tear, or to repair cosmetic damage not affecting
                                                                            the functionality of the Covered Device.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To conduct preventive maintenance.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To replace Covered Device that is lost or stolen.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair damage caused by reckless, abusive, willful or intentional conduct, or any
                                                                            use of the
                                                                            Covered Device in a manner not normal or intended by LYOTECH LABS ELECTRONICS TRADING L.L.C.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair damage caused by a product that is not Covered Device.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair any damage to Covered Device (regardless of the cause) if the Covered
                                                                            Device has been opened, serviced, modified, or altered by anyone other than Lyotech
                                                                            Labs or an authorized representative of LYOTECH LABS ELECTRONICS TRADING L.L.C.
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair pre-existing conditions of the Covered Device if you purchased the Plan
                                                                            after you purchased the Covered Device;
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair any damage to Covered Device with a serial number that has been altered,
                                                                            defaced or removed; or
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            To repair damages caused by fire, earthquake, landslides, tsunamis, volcanic
                                                                            activities, and/or extreme weather or temperature damage.
                                                                        </ListItem>
                                                                    </List>
                                                                </ListItem>

                                                            </List>
                                                        </ListItem>

                                                    </List>
                                                </ListItem>
                                                <ListItem>  <strong> Delivery </strong>
                                                    <List >
                                                        <ListItem>
                                                            Manufacturer's Warranty
                                                            <ListItem>
                                                                Upon purchasing a device from LYOTECH LABS ELECTRONICS TRADING L.L.C, standard warranty is provided by the LYOTECH LABS ELECTRONICS TRADING L.L.C for a
                                                                period of one (2) years.
                                                            </ListItem>

                                                            <ListItem>
                                                                Customers that have purchased the OneCare Plan, will be entitled to an additional year of standard
                                                                warranty upon expiration of their Plan.
                                                            </ListItem>

                                                            <ListItem>
                                                                Standard warranty is provided by LYOTECH LABS ELECTRONICS TRADING L.L.C. 
                                                                <br></br> LYOTECH LABS ELECTRONICS TRADING L.L.C bears 
                                                                responsibility for the manufacturer’s warranty, and customers are advised to read the terms of
                                                                warranty carefully before purchasing
                                                            </ListItem>

                                                        </ListItem>
                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> How to Obtain Service and Support? </strong>
                                                    <List >
                                                        <ListItem>
                                                            You may obtain service or support by referring to the ‘RMA’ tab on the LYOTECH LABS ELECTRONICS TRADING L.L.C website at: <a
                                                                href="mailto:support.lyotechlabs.com">support.lyotechlabs.com </a> and raising a ticket.
                                                        </ListItem>
                                                        <ListItem>
                                                            As per the RMA Policy, you must provide the full details required in the RMA Form upon request, and
                                                            present your Plan Confirmation, as well as the original sales receipt for your Covered Device and your
                                                            Plan.
                                                        </ListItem>

                                                        <ListItem>
                                                            If your request cannot be resolved remotely by customer support remotely, you may be required to send
                                                            your device to our repair center located in Dubai, United Arab Emirates for repair or replacement.
                                                            Please be aware you will bear all costs for shipments and any additional fees associated outside the
                                                            repair should this be required.
                                                        </ListItem>

                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> Service Options </strong>

                                                    <List >
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C will provide hardware services to you through one or more of these options (Repair
                                                            Services):
                                                            <List>
                                                                <ListItem>
                                                                    Customer support remote resolution. If you have an issue that may be fixed remotely, customer
                                                                    support will use their best efforts to assist you in resolving the problem. Once you contact
                                                                    customer support they will schedule a time to assist and instruct you on how to try and renew
                                                                    the device from your location.
                                                                </ListItem>
                                                                <ListItem>
                                                                    Mail-in repair. Should your Covered Device not be fixable via option 7(a), you may be required
                                                                    to send it to our authorized repair center located in Dubai, United Arab Emirates. Customer
                                                                    support will provide you with full process and shipping details should this circumstance occur
                                                                    and we will repair or replace the Covered Device upon evaluation. Please be aware you will be
                                                                    responsible for any additional costs outside of the repair, including shipment. It is also
                                                                    important to note that repairs and replacements will only begin/be issued once the original
                                                                    device is received at the repair center.
                                                                </ListItem>
                                                            </List>
                                                        </ListItem>
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C may at its discretion either return your Covered Device or provide a replacement if the
                                                            Device cannot be recovered.
                                                        </ListItem>
                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> Your Responsibilities </strong>

                                                    <List >
                                                        <ListItem>
                                                            To receive service or support under the Plan, you agree to:
                                                            <List>
                                                                <ListItem>
                                                                    Provide your Plan Agreement Number and a copy of your Plan’s original proof of purchase,
                                                                </ListItem>
                                                                <ListItem>
                                                                    Provide information about the symptoms and causes of the issues with the Covered Device,
                                                                </ListItem>
                                                                <ListItem>
                                                                    Respond to requests for information needed to diagnose or service the Covered Device,
                                                                </ListItem>
                                                                <ListItem>
                                                                    Follow instructions LYOTECH LABS ELECTRONICS TRADING L.L.C gives you, to pay the additional costs outside of the repair
                                                                    and
                                                                </ListItem>
                                                                <ListItem>
                                                                    Send the Covered Device to the repair center in good time in order to receive the Repair
                                                                    Services (if Mail-in repair is required).
                                                                </ListItem>
                                                            </List>
                                                        </ListItem>
                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> Limitation of Liability </strong>

                                                    <List >
                                                        <ListItem>
                                                            To the maximum extent permitted by applicable law, LYOTECH LABS ELECTRONICS TRADING L.L.C and its employees and agents will under
                                                            no circumstances be liable to you or any subsequent owner of the covered device for any indirect or
                                                            consequential damages resulting from LYOTECH LABS ELECTRONICS TRADING L.L.C’ obligations under this plan. LYOTECH LABS ELECTRONICS TRADING L.L.C
                                                            specifically does not warrant that

                                                            (I) it will be able to repair or replace the covered device without risk to or loss of programs or data,
                                                            (ii) it will maintain the confidentiality of data, or
                                                            (iii) the operation of the product will be uninterrupted or error-free. The benefits conferred by this
                                                            plan are in addition to any rights and remedies provided under consumer laws and regulations. To the
                                                            extent that liability under such laws and regulations may be limited, LYOTECH LABS ELECTRONICS TRADING L.L.C’ liability is
                                                            limited, at its sole option, to replacement or repair of the covered device or supply of the service.
                                                        </ListItem>

                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> Transfer of Plan  </strong>
                                                    

                                                    <List >
                                                        <ListItem>
                                                            You are not permitted under any circumstances to make any transfers of rights under this Plan to another
                                                            party or device.
                                                        </ListItem>

                                                    </List>
                                                </ListItem>

                                                <ListItem> <strong> General Terms </strong>

                                                    <List >
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C may subcontract or assign performance of its obligations to third parties but shall not be
                                                            relieved of its obligations to you in doing so.
                                                        </ListItem>

                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C is not responsible for any failures or delays in performing under the Plan that are
                                                            due to events outside of LYOTECH LABS ELECTRONICS TRADING L.L.C’s reasonable control.
                                                        </ListItem>
                                                        <ListItem>
                                                            You are not required to perform preventative maintenance on the Covered Device to receive service
                                                            under the Plan.
                                                        </ListItem>
                                                        <ListItem>
                                                            In carrying out its obligations LYOTECH LABS ELECTRONICS TRADING L.L.C may, at its discretion and solely for the purposes of
                                                            monitoring the quality of LYOTECH LABS ELECTRONICS TRADING L.L.C’s response, record part or all of the calls between you and
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C.
                                                        </ListItem>
                                                        <ListItem>
                                                            You agree that any information or data disclosed to LYOTECH LABS ELECTRONICS TRADING L.L.C under this Plan is not
                                                            confidential or proprietary to you. Furthermore, you agree that LYOTECH LABS ELECTRONICS TRADING L.L.C may collect and process
                                                            data on your behalf when it provides any service. This may include transferring your data to affiliated
                                                            companies or service providers in accordance with the LYOTECH LABS ELECTRONICS TRADING L.L.C Customer Privacy Policy.
                                                        </ListItem>
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C has security measures, which should protect your data against unauthorized access or
                                                            disclosure as well as unlawful destruction.
                                                        </ListItem>
                                                        <ListItem>
                                                            You understand and agree that by purchasing the Plan, LYOTECH LABS ELECTRONICS TRADING L.L.C will use, process, transfer, and
                                                            protect your information in accordance with LYOTECH LABS ELECTRONICS TRADING L.L.C Customer Privacy Policy, available at
                                                            docs.lyotechlabs.com which is deemed to be incorporated to this Plan by reference.
                                                        </ListItem>
                                                        <ListItem>
                                                            Without prejudice to the foregoing, you agree that LYOTECH LABS ELECTRONICS TRADING L.L.C, its affiliates or service
                                                            providers may use and process your name, device serial number, contact information, repair history and
                                                            other personal information we, our affiliates or service providers collect or generate in relation to
                                                            your Plan, for the purposes of: (i) providing and administering the Repair Services under the Plan and
                                                            performing this contract; (ii) ensuring service quality; and (iii) communicating with you regarding your
                                                            Plan, related financial transactions, and Repair Services and support provided under this contract. For
                                                            such purposes, you agree that this may include the transfer of your personal information between Lyotech
                                                            Labs, its affiliates and service providers. If you have any questions regarding the processing of your
                                                            personal data, contact LYOTECH LABS ELECTRONICS TRADING L.L.C through the email provided.
                                                        </ListItem>
                                                        <ListItem>
                                                            The terms of the Plan, including the original sales receipt of the Plan and the Plan Confirmation,
                                                            shall prevail over any conflicting, additional, or other terms of any purchase order or other document,
                                                            and constitute your and LYOTECH LABS ELECTRONICS TRADING L.L.C’s entire understanding with respect to the Plan.
                                                        </ListItem>
                                                        <ListItem>
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C is not obligated to renew this Plan. If LYOTECH LABS ELECTRONICS TRADING L.L.C does offer to renew this Plan,
                                                            LYOTECH LABS ELECTRONICS TRADING L.L.C will determine the price and terms.
                                                        </ListItem>
                                                        <ListItem>
                                                            There is no informal dispute settlement process available under this Plan.
                                                        </ListItem>
                                                        <ListItem>
                                                            As used in this Plan, ”LYOTECH LABS ELECTRONICS TRADING L.L.C“ is LYOTECH LABS ELECTRONICS TRADING L.L.C, a company registered in Delaware, with
                                                            its registered office at 8 The Green, Suite R in the city of Dover, Zip code 19901, and registered
                                                            number 6813858.
                                                        </ListItem>
                                                        <ListItem>
                                                            The laws of the United Arab Emirates govern Plans purchased. Any disputes arising out of or in
                                                            connection with a Plan purchased, including any question regarding the existence, validity or
                                                            termination of a Plan or these terms shall be subject to the exclusive jurisdiction of the Courts of the
                                                            Dubai, United Arab Emirates.
                                                        </ListItem>
                                                    </List>
                                                </ListItem>



                                            </List>
                                        </div>
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

