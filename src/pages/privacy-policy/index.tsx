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

const theme = createTheme({
    typography: {
        fontFamily: ['Work Sans'].join(','),
    },
});


export default function Private() {
    return (
        <>
            <div>
                <ThemeProvider theme={theme}>
                    <main className={styles.main}>
                        <Header title="Home" />

                        {/* Banner Section Start */}
                        <div className={`${styles['privacyPolicy']} ${styles['infoBannerWrap']}`}>
                            <div className={`${styles['infoBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h1" className={styles.bannerHD}>
                                                Privacy and Cookies Policy
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
                                                    <strong> Privacy and Cookies Policy</strong>
                                                </Typography>
                                            </ListItem>
                                            <ListItem>

                                                <Typography variant="h5">
                                                This Privacy and Cookie Policy (“Policy”) governs the access to and use of all parts of the website and services branded as LYOTECH LABS ELECTRONICS TRADING L.L.C (“Lyotech”, “we”, “our”, “us”) and referring to the domain <a href="https://lyotechlabs.com/"> lyotechlabs </a> (hereinafter referred as the “Platform”) and all documents, data, materials or other information made available on the Platform.
                                                </Typography>

                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h5">
                                                This Policy applies to all visitors and/or users (“User”, “you”, “your”). Please read this Policy along with our Terms of Services carefully, and note that by using Lyotech, you are consenting to the collection, storage, processing and transfer of your personal information in accordance with this Policy.
                                                </Typography>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h5">
                                                This Policy may be made available in several languages; all versions are legally binding, but in the event of inconsistency between the English version and a translated version, the English version prevails.
                                                </Typography>
                                            </ListItem>
                                        </List>

                                        <List className={styles.orderedListDecimal}>
                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>DEFINITIONS </strong>
                                                </Typography>

                                                <List>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        “Personal data” means any information referring to an identified or identifiable natural and/or legal person
                                                        </Typography>
                                                    </ListItem>


                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        “Document(s)” includes any medium in which data is recorded, whether printed, or on tape, or film or by electronic means, or otherwise; map, diagram, photograph, film, microfilm, video-tape, sound recording, or machine-readable record; any record which is capable of being produced from a machine-readable record by means of equipment or a programme, or a combination of both, or any equipment or a programme, or a combination of both, and is used for that purpose by the public body or private body which holds the record.

                                                        </Typography>
                                                    </ListItem>

                                                </List>

                                            </ListItem>




                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>ACCEPTANCE </strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        By accessing and using our Platform or our services you are consenting and accepting the terms of this Policy. If you do not agree or consent with the details we require with any aspect of this Policy, you have the right to withdraw your consent, and in doing so you are required to discontinue access or usage of our services.

                                                        </Typography>

                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>THE PERSONAL INFORMATION WE COLLECT FROM USERS</strong>
                                                </Typography>
                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We may collect information about you, including but not limited to your name, email address, address, credit card details, or other billing information. In addition, we may collect information via Cookies and automatically collect information through the browser.
                                                        </Typography>
                                                    </ListItem>
                                                </List>


                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>HOW USERS’ PERSONAL DATA IS USED </strong>
                                                </Typography>

                                                <List className={styles.orderedListRoman}>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                            We may use your Personal data to:
                                                        </Typography>

                                                        <List className={styles.orderedListDisc}>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    improve our services;
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    to provide customer services;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    to ensure network and information security;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    to facilitate corporate acquisitions, mergers or transactions;
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                    to engage in marketing activities; and/or for transaction services via credit/debit cards.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                </List>

                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>DATA TRANSFER </strong>
                                                </Typography>

                                                <List >
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Except as described in this Policy, we will not disclose any of your information and we shall only share information in the following circumstances:
                                                        </Typography>

                                                        <List >
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                We may share your Personal data if required by law or good-faith that such actions are necessary to comply with the applicable laws and regulations state laws, or in a need of a litigation process, judicial or other government warrant or to cooperate with applicable law enforcements or regulatory authorities.
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                We may share your Personal data with affiliates, selected third parties, including business suppliers, distributors and subcontractors, and/or outsourced service providers when it is necessary for the delivery of our services. These third parties may have access to or process information about you as part of providing services for us. Please note that the aforementioned third parties only collect, use and disclose your information in the ways indicated by us in order to provide adequate services. We are not liable or responsible for the Privacy and Cookies Policies of these third parties. We recommend that you review the Privacy and Cookies Policy of any third-party services you interact with to understand their use of cookies and data collection practices.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                We may share or transfer your Personal data to an acquirer, successor, or assignee as part of any merger, acquisition, debt financing, sale of assets, or similar transaction, or in the event of an insolvency, bankruptcy, or receivership in which such Personal data is transferred to one or more third parties as one of our business assets.

                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                We may share your Personal data with our service providers under contracts to operate the business. For instances;
                                                                </Typography>

                                                                <List>
                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Cloud storage
                                                                        </Typography>
                                                                    </ListItem>

                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Payment process
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Transaction Monitoring
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Network Infrastructure
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Security
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Customer Support
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Marketing
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            Data analytics
                                                                        </Typography>
                                                                    </ListItem>
                                                                </List>
                                                            </ListItem>

                                                            <ListItem>
                                                        <Typography variant="h5">
                                                            We may share your Personal data with any financial institutions which we partner to process payments you have authorized.
                                                        </Typography>
                                                    </ListItem>

                                                        </List>
                                                    </ListItem>

                                                 
                                                </List>

                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        PROTECTION OF PERSONAL DATA
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        At LYOTECH LABS ELECTRONICS TRADING L.L.C, your privacy is a priority. Personal data is stored on our secure servers, following internal privacy and security protocols.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We use administrative, technical, and physical safeguards to protect your personal data, taking into account the nature of the personal data and the processing, and the threats posed. We are constantly working to improve on these safeguards to help keep your personal data secure. For more information, you can contact us using the Contact Information provided below.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We take appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, LYOTECH LABS ELECTRONICS TRADING L.L.C cannot guarantee the security of any information that is disclosed online.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        DATA RETENTION
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We may retain your data through third parties subject to their privacy policies, as long as you continue to use our Services, have an account with us, or for as long as is necessary to fulfill the purposes outlined in this Privacy and Cookies Policy.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We do not store, sell, share, rent, or lease any Credit/Debit Card details or Personally Identifiable Information to any third party. We do not pass any debit/credit card details to third parties.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        You can ask to close your account by contacting us, and we will delete your data on request. Once deleted, we will not have any information available to us through/by the third parties.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We may, however, retain your data for an additional period as is permitted or required under applicable laws, for legal, tax, or regulatory reasons, or for legitimate and lawful business purposes.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                    EUROPEAN DATA PROTECTION RIGHTS
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        EU users are advised to read the important information provided below about the transfer of personal data outside of the European Economic Area (EEA).
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        If you are located in the EEA, you will have the rights as described below.
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                You may request access to and receive information about the personal data we maintain about you, update and correct inaccuracies in your personal data, restrict or object to the processing of your personal data, have the information anonymized or deleted, as appropriate, or exercise your right to data portability to easily transfer your personal data to another company.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                You may withdraw any consent you previously provided to us regarding the processing of your personal data, at any time and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing before you withdraw your consent.
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                If you are located in the EEA, we will comply with applicable GDPR law when transferring your personal data outside of the EEA.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        COOKIE POLICY
                                                    </strong>
                                                </Typography>

                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Cookies are small text files that are placed on your device like computer, mobile or any other device by a website, containing details of your browsing history. Whenever you visit our Platform, the website sends a cookie to the device you are using to access our Platform, and your device automatically stores the Cookie in a file located within your website browser allowing us to recognize your device upon future access.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We use the following Cookies to operate our Platform, such as;
                                                        </Typography>

                                                        <List>
                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Session Cookies are temporary and expire once you close your browser. It stores information for the time, or session when you are on our Platform;
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Persistent Cookies encompasses all Cookies that remain on your hard drive until you erase or your browser does it. It depends on the Cookie’s expiration date. All persistent cookies have an expiration date written into their code, but their duration can vary;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                First-party-cookies are put on your device directly by our Platform you are visiting;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Third-party-cookies are placed on your device, not by our Platform, but by a third party like an advertiser or an analytic system. Generally, the Third-Party Cookies consist of tracking Cookies used to identify online behavior, understand interests, and then customize advertising for the User on other websites. Any information obtained from Third-Party Cookies is processed by the respective Collaborative Partners;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Google Analytics Cookies to measure our User’s interactions with the content on our Platform. These Cookies collect information about your interactions with our Platform, such as unique visits, repeat visits, session duration and website activity;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Facebook Pixel to process information about a User’s activity on our Platform, such as the website visited, Facebook identity, browser data, and more. The information processed from Facebook pixel is used to serve ads based on your interests through Facebook, as well as to measure cross-device conversions and User interactions on our Platform;
                                                                </Typography>
                                                            </ListItem>


                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Essential Cookies are known as strictly necessary Cookies for you to browse our Platform and use the features of it, such as accessing secure areas of our Platform. These Cookies are generally First-Party Session Cookies. These Cookies do not require consent from you. Essential Cookies helps to make our Platform easy to use by providing basic functions such as page navigation, language selections, authorization and filling in forms. Our Platform will not function without these Cookies and they cannot be disabled. These Cookies do not reveal the User’s identity or collect information. They are stored on the User’s device until the browser is closed;
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Functionality Cookies allow our Platform to remember choices you have made in the past like what language you prefer, what region you would like or what username and password are so you can automatically log in. We use Cookies for navigation and to facilitate your access to and use of this site. These Cookies are necessary for transmission of communications on the network or to supply services whatever requested by you. Further they help us to know which pages are the most and least popular and see how visitors move around the website;
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Performance Cookies collect information about how you use our Platform, like which page you visited and which link you clicked on. None of this type of information can be used to identify you. The sole purpose of performance cookies is to improve our Platform functions. Analytics may collect information through log data, such as; (i) IP address, (ii) Type of browser and device, (iii) Operating system, (iv) Name of the Internet Service Provider, (v) Country information, (vi) Date and time of visit, (vii) Web page origin and exit; and/or
                                                                </Typography>
                                                            </ListItem>

                                                            <ListItem>
                                                                <Typography variant="h5">
                                                                Marketing Cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an advertisement. These Cookies can share information with other organizations or advertisers. These cookies may be set through the website by our advertising partners. If you do not allow these cookies, you will experience less targeted advertising. These cookies are set on your device for up to two (2) years or deleted, if you erase your browser cookie data.
                                                                </Typography>
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        You reserve the right to decide whether to accept or reject Cookies from our Platform. You can exercise your Cookie rights by setting your preferences in the Cookie Consent Manager. However, you will not be able to reject the Essential Cookies and still access the Platform, as they are strictly necessary to provide you with our Services. In the event you choose to reject certain Cookies, you may still use our Platform though your access to some functionality and areas of our Platform may be restricted. You may also set or amend your web browser controls to accept or refuse Cookies.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        DATA PROTECTIONS
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We ensure to take certain physical and technical safeguards to protect your Personal data that we collect and maintain. However, please note and be aware that there are no security measures which are accurate and perfect or impenetrable.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Under certain circumstances we do not guarantee that Personal data of yours will not be accessed, disclosed, or amended or destroyed by breach of any of our physical and technical safeguards. If you choose to use our Platform from different jurisdictions/regions of the world with laws governing data collection, then please note that you are transferring your Personal data outside of those jurisdictions/regions for storage and processing purposes.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                    PRIVACY TERMS IN USING BLOCKCHAIN TECHNOLOGY
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Some services provided on the Platform are recorded on a public blockchain. It is a ledger which means a chain of blocks where each block contains the recording of any data transmission. Blockchains are decentralized or third-party networks which are not controlled or operated by any third-party service provider or affiliates or business partners of Lyotech, and we have no access or authority to erase, modify or alter any personal data from such networks.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We make no claims to ensure the protection of such data that utilizes blockchain technology, and we bear no liability for breaches of such data should they occur.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        By using the site, you expressly acknowledge and accept that the data on the block chain is irreversible and you consent to the permanent record of data being stored on such a blockchain.

                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>



                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        MODIFICATIONS
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        We reserve the right, at our sole discretion, to modify, amend, supplement or replace this Policy at any time and such update details shall be indicated at the top of this page.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements and standards. Therefore, the Customers’ are encouraged to frequently visit these sections to be updated about the changes on the website. Modifications will be effective on the day they are posted.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Your continued access to the Platform means that you agree to the updated content and to abide by the updated Policy.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        AML COMPLIANCE
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Your personal data may be used as we believe necessary or appropriate to comply with applicable laws (including anti-money laundering (AML) laws and know-your-customer (KYC) requirements), as collected by third parties, lawful requests and legal process, such as to respond to requests from government authorities.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Lyotech is in compliance in all material respects, and will continue to comply with all applicable laws and regulations relating to guarding against terrorism and money laundering, and Lyotech agrees to comply with the anti-money laundering programs to the extent applicable.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        Your personal data may be used for compliance purposes to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h4">
                                                    <strong>
                                                        CONTACT INFORMATION
                                                    </strong>
                                                </Typography>
                                                <List>
                                                    <ListItem>
                                                        <Typography variant="h5">
                                                        In the event of any comments, questions, inquiries or complaints regarding this Policy, the User has the right to submit questions and/or concerns at
                                                            <a href='mailto:support@lyotechlabs.com'>support@lyotechlabs.com</a>
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

