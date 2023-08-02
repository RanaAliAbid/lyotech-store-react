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

export default function Mintingtermscondition() {
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
                                                Minting Terms Condition
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
                                            <strong> Minting Terms & Condition </strong>
                                        </Typography>
                                        <div className={styles.termListItemText}>
                                        <List className={styles.orderedListDecimal}>
                                            <ListItem> <strong> About Our Terms </strong> 
                                                <List >
                                                    <ListItem>
                                                        These Terms and Conditions (‘Terms’) govern how you may use the LFi platform (‘Platform’) and its
                                                        functionalities including but not limited to the hardware devices, the software, applications, and
                                                        other services to conduct Minting of tokens (‘Services’). LFi facilitates cloud Minting, hardware
                                                        Minting, software wallet Minting, and storage IPFS Minting.
                                                    </ListItem>
                                                    <ListItem>
                                                        These Terms apply between LFi (we, us or our) and you, the person accessing or using the Site (User,
                                                        you or your). These Terms form a legally binding contract between LFi and you.
                                                    </ListItem>
                                                    <ListItem>
                                                        In addition to the Terms, we have regulated and will regulate some aspects of our Services in
                                                        separate terms and conditions which apply to our Users, such as the Website Terms and Conditions
                                                        available at <a href="https://lyotechlabs.com/terms-and-conditions/"> Terms and Conditions
                                                        </a>, and the Privacy and Cookies Policy, available at <a href="https://lyotechlabs.com/privacy-and-cookies-policy/"> Privacy and Cookies Policy </a>,
                                                        which are deemed to be incorporated into this Agreement by reference.
                                                    </ListItem>
                                                    <ListItem>
                                                        Prior to making the User Account available to you, we ask you to agree to these Terms and to the
                                                        Privacy Policy by clicking “I agree” on our Platform. By agreeing, you confirm that you have read,
                                                        understood, and accepted the respective terms and the Terms become effective, from the moment we
                                                        grant you access to the respective Services on the Platform.
                                                    </ListItem>
                                                    <ListItem>
                                                        If you do not agree to the Terms or it would be unlawful for you to use our Services, you should not
                                                        provide your consent and you are not entitled to use our Services.
                                                    </ListItem>
                                                    <ListItem>
                                                        If you do not agree to the Terms or it would be unlawful for you to use our Services, you should not
                                                        provide your consent and you are not entitled to use our Services.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Risks Related To Minting </strong>
                                                <List >
                                                    <ListItem>
                                                        The process of Minting tokens might involve the following non-exhaustive list of risks:
                                                        <List>
                                                            <ListItem>
                                                                Technical risks – Minting involves the use of complex computer software and hardware
                                                                systems, which may be vulnerable to technical failures, errors, or hacking attempts. These
                                                                risks could result in loss of minted tokens, personal data breaches, and other unforeseen
                                                                issues.
                                                            </ListItem>
                                                            <ListItem>
                                                                Legal and regulatory risks: Minting may be subject to legal and regulatory requirements,
                                                                which could change over time. Failure to comply with these requirements could result in
                                                                fines, penalties, or other legal consequences.
                                                            </ListItem>
                                                            <ListItem>
                                                                Market risks: Minting may be affected by market volatility, which can lead to
                                                                fluctuations in the value of the minted tokens. The market value of the tokens could be
                                                                impacted by changes in supply and demand, changes in regulations, or other macroeconomic
                                                                factors.
                                                            </ListItem>
                                                            <ListItem>
                                                                Any other risks beyond the control of LFi: including but not limited to network
                                                                difficulty, transaction volume, power failure, hardware failure, or other incidents outside
                                                                the control of LFi.
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                    <ListItem>
                                                        We do not guarantee the success or viability of any token Minting efforts, nor do we assume
                                                        responsibility for any losses, damages, or liabilities arising from such efforts.
                                                    </ListItem>
                                                    <ListItem>
                                                        By accessing or using any LFi Services, You are voluntarily choosing to engage in sophisticated
                                                        and risky asset exchanges, transactions, and Minting activities.
                                                    </ListItem>
                                                    <ListItem>
                                                        We work hard to provide state-of-the-art systems and security. Nonetheless, certain issues and
                                                        risks are unavoidable, and if such issues or problems arise in connection with your use of our
                                                        Services, including technical difficulties with Minting tokens, it may take days, weeks, or months
                                                        to resolve, and some issues may not be resolved at all. By agreeing to these Terms, you acknowledge
                                                        that LFi is not responsible for the aforementioned risks, and you voluntarily assume and accept such
                                                        risks in deciding to engage in Minting activities.
                                                    </ListItem>
                                                    <ListItem>
                                                        You assume the risks of engaging in transactions that rely on smart contracts and other
                                                        experimental technology. Transactions may rely on smart contracts stored on various blockchains,
                                                        cryptographic tokens generated by the smart contracts, and other nascent software, applications and
                                                        systems that interact with blockchain-based networks. These technologies are experimental,
                                                        speculative, inherently risky, and subject to change. You agree and acknowledge that LFi will not be
                                                        liable for any such adversities.
                                                    </ListItem>
                                                    <ListItem>
                                                        Among other risks, bugs, malfunctions, cyberattacks, or changes to the applicable blockchain
                                                        (e.g., forks) could disrupt these technologies and even result in a total loss of digital assets and
                                                        tokens, their market value, or digital funds. We assume no liability or responsibility for any such
                                                        risks. If you are not comfortable assuming these risks, you should not access or engage in
                                                        transactions using blockchain-based technology.
                                                    </ListItem>
                                                    <ListItem>
                                                        You agree to the automated collection and disbursement of proceeds by smart contracts. You
                                                        acknowledge and agree that all transactions accessed through the Services will be automatically
                                                        processed using one or more blockchain-based smart contracts. By engaging in transactions using the
                                                        Services, you acknowledge and consent to the automatic processing of all transactions in connection
                                                        with using the Services. You further acknowledge and agree that the applicable smart contract will
                                                        dictate how the funds of a transaction and ownership of digital assets are distributed.
                                                    </ListItem>
                                                    <ListItem>
                                                        You bear sole responsibility for evaluating the Services before using them, and all transactions
                                                        accessed through the Services are irreversible, final, and without refunds. The Services may be
                                                        disabled, disrupted or adversely impacted as a result of sophisticated cyber-attacks, surges in
                                                        activity, computer viruses, and/or other operational or technical challenges, among other things. We
                                                        disclaim any ongoing obligation to notify you of all of the potential risks of using and accessing
                                                        our Services. You agree to accept these risks and agree that you will not seek to hold LFi
                                                        responsible for any consequent losses.
                                                    </ListItem>
                                                    <ListItem>
                                                        You are solely responsible for the security of your wallet. You understand and agree that you
                                                        are solely responsible for maintaining the security of your wallet. Any unauthorized access to your
                                                        wallet by third parties could result in the loss or theft of any digital asset, token or any funds
                                                        held in your account and any associated accounts. You understand and agree that we have no
                                                        involvement in, and you will not hold us responsible for managing and maintaining the security of
                                                        your wallet. You further understand and agree that we are not responsible, and you will not hold us
                                                        accountable, for any unauthorized access to your wallet.
                                                    </ListItem>
                                                    <ListItem>
                                                        We assume no liability or responsibility for any such risks mentioned. You acknowledge that you
                                                        are solely responsible for assessing and mitigating the risks associated with token Minting and
                                                        related activities, and that you bear all consequences of such activities, including but not limited
                                                        to financial losses, regulatory penalties, and legal liabilities. If you are not comfortable
                                                        assuming these risks, you should not access or engage in Minting tokens.
                                                    </ListItem>
                                                    <ListItem>
                                                        The usage of LFi’s Services in no way constitutes an offer to buy or sell any tokens not are we
                                                        offering any investment services or advice.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Using The Devices</strong>
                                                <List >
                                                    <ListItem>
                                                        The Minting hardware devices includes the LFi One Smartphone, XLFi Miners (1000 and 5000)
                                                        (‘Devices’) purchased from the Lyotech Labs website – <a href="https://lyotechlabs.com/">
                                                            lyotechlabs</a>.
                                                    </ListItem>
                                                    <ListItem>
                                                        User Registration
                                                        <List>
                                                            <ListItem>
                                                                In order to conduct Minting using the Devices, you must become a User either by: (i)
                                                                Downloading our LFi App on the LFi One Smartphone and registering as a User; or (ii)
                                                                Registering as a User and maintaining a account on our LFi website (‘User Account’).
                                                            </ListItem>
                                                            <ListItem>
                                                                The User Account will provide the User access to the online dashboard of their User
                                                                profile (Minting Portal).
                                                            </ListItem>
                                                            <ListItem>
                                                                3.4 In registering for the User Account, you confirm that:
                                                                3.4.1. You as a private individual are at least 18 years old;
                                                                3.4.2. You as a private individual, legal person, or other organization, have full legal
                                                                capacity and are fully authorized to enter into an agreement with us;
                                                                3.4.3. Your use of our Platform and Services will not violate any agreements, obligations,
                                                                laws, or regulations applicable to you.
                                                            </ListItem>
                                                            <ListItem>
                                                                LFi will provide Services only to registered Users and in accordance with the applicable
                                                                laws and regulations whose identity has been verified and who have passed the customer due
                                                                diligence process.
                                                            </ListItem>
                                                            <ListItem>
                                                                During the registration phase, we may ask you to identify yourself and provide us with
                                                                information regarding yourself and your activities. We also ask you to provide us with
                                                                certain documents evidencing the information provided. We may also ask you to provide
                                                                additional information or explain the information already provided.
                                                            </ListItem>
                                                            <ListItem>
                                                                In order to verify the information you have provided, we have the right, and in some
                                                                cases also the obligation, to make enquiries to public or private registries or to other
                                                                sources or to engage third party service providers and share your information with them.
                                                            </ListItem>
                                                            <ListItem>
                                                                You confirm that the information you provide us during the registration and later during
                                                                our relationship is true, accurate and complete.
                                                            </ListItem>
                                                            <ListItem>
                                                                It is our discretionary decision to register you as a User or refuse registration. We
                                                                would inform you of our decision either through the Platform or via the email address
                                                                provided by you during the registration process. It is your duty to provide us with a viable
                                                                working email address.
                                                            </ListItem>
                                                            <ListItem>
                                                                You are also obligated to immediately update the information you have provided with us
                                                                during the User Account opening process whenever there is change in such information.
                                                                Continuous integrity and accuracy of the information is very important for us and also for
                                                                the purposes of ensuring the orderly functioning of the Platform.
                                                            </ListItem>
                                                            <ListItem>
                                                                We may ask you to provide us with additional information during our relationship if we
                                                                deem this necessary for the purposes of understanding your activities on the Platform,
                                                                ensuring accuracy and completeness of the information or otherwise in connection with our
                                                                Services. You undertake to provide us with the requested information without delay.
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                    <ListItem>
                                                        User Account
                                                        <List >
                                                            <ListItem>
                                                                Each User must open their own individual User Account.
                                                            </ListItem>
                                                            <ListItem>
                                                                You agree to use the User Account and the Services in good faith, in accordance to
                                                                these Terms, and in complete compliance with the applicable laws and regulations.
                                                            </ListItem>
                                                            <ListItem>
                                                                You are prohibited from using these Services for any illegal or unethical activity,
                                                                including but not limited to money laundering, terrorist financing, or any other activity
                                                                that violates local or international laws. You are prohibited from using these Services in a
                                                                way that adversely interferes with or attempts to interfere with the normal operations,
                                                                and/or activities of the Platform or the legitimate interests of others, or to introduce a
                                                                virus or any other disruptive program or do any other acts which would disrupt the orderly
                                                                functioning of the Platform.
                                                            </ListItem>
                                                            <ListItem>
                                                                We reserve the right to suspend or terminate your account, report you to the appropriate
                                                                authorities and avail any remedies under the applicable laws if you are found engaging in
                                                                any prohibited activity.
                                                            </ListItem>

                                                        </List>
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> The Minting Process </strong>
                                                <List >
                                                    <ListItem>
                                                        LFi Minting Process
                                                        <List >
                                                            <ListItem>
                                                                To start Minting, User needs to have all of the following: a Device, NFT License(s), and
                                                                cLFi (collateral).
                                                            </ListItem>
                                                            <ListItem>
                                                                The terms and conditions of the cLFi tokens are available at <a href="https://docs.lfi.io/legal-documents/clfi-terms-and-condition"> cLFi Terms &amp; Condition </a>. By participating in the purchase or use of the cLFi tokens, you acknowledge and agree to
                                                                be bound by these terms and conditions.
                                                            </ListItem>
                                                            <ListItem>
                                                                Each Device is subject to different activation processes to begin Minting the LFi Token,
                                                                as defined below:
                                                                <List>
                                                                    <ListItem>
                                                                        To start Minting with the LFi One Smartphone, the User needs to go to the Minting
                                                                        Portal, scan a QR code and activate the Device to begin generating.
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        To start Minting with the XLFi 1000 and XLFi 5000, the User needs to activate the NFT
                                                                        license in the Minting Portal with the IMEI of the device.
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        To start Minting with the Cloud Minting licence, the User needs to activate the NFT
                                                                        licence in the Mintingi Portal, which will automatically start producing the LFI Tokens.
                                                                    </ListItem>
                                                                </List>
                                                            </ListItem>

                                                            <ListItem>
                                                                to provide customer services;
                                                            </ListItem>
                                                            <ListItem>
                                                                to ensure network and information security;
                                                            </ListItem>
                                                            <ListItem>
                                                                to facilitate corporate acquisitions, mergers or transactions;
                                                            </ListItem>
                                                            <ListItem>
                                                                to engage in marketing activities; and/or for transaction services via credit/debit cards.
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>

                                                    <ListItem>
                                                        Users will be able to log in to the Minting Portal on   <a href="https://lfi.io/"> lfi.io </a>  with their User Registration
                                                        credentials, in order to view their Minting statistics and rewards.
                                                    </ListItem>

                                                    <ListItem>
                                                        The Devices will contain the allocated NFT License(s) upon purchase.
                                                    </ListItem>
                                                    <ListItem>
                                                        The Minting process is designed to be used only with LFi’s compatible Devices and software. You are
                                                        solely responsible for ensuring that you use only LFi’s compatible Devices and software to conduct the
                                                        Minting of the LFi Tokens.
                                                    </ListItem>
                                                    <ListItem>
                                                        LFi shall not be liable for any damages, including but not limited to, direct, indirect, incidental,
                                                        punitive, and consequential damages arising from the use of unauthorized hardware or software to access
                                                        and use the Services.
                                                    </ListItem>
                                                    <ListItem>
                                                        You acknowledge that we may update or modify the authorized Devices’ hardware and software
                                                        requirements at any time, and you are responsible for ensuring that your Devices and software meet the
                                                        updated or modified requirements.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Fees </strong>
                                                <List >
                                                    <ListItem>
                                                        The following additional fees may be borne by the User in relation to the Services:
                                                        <List >
                                                            <ListItem>
                                                                4.5% Minting Activation Fee
                                                            </ListItem>
                                                            <ListItem>
                                                                $29 Membership Fee (if User is not already a member)
                                                            </ListItem>
                                                            <ListItem>
                                                                Device Cost
                                                            </ListItem>

                                                            <ListItem>
                                                                Additional Fees for Card Payments
                                                            </ListItem>
                                                            <ListItem>
                                                                Variable Shipping Fees based on location
                                                            </ListItem>
                                                            <ListItem>
                                                                Unless otherwise set out in these Terms, it is your sole responsibility to determine whether,
                                                                and to what extent, any taxes apply to any transactions you conduct for the Services, and to
                                                                withhold, collect, report and pay the correct amount of tax to the appropriate tax authorities.
                                                            </ListItem>
                                                        </List>
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Warranty </strong>
                                                <List >
                                                    <ListItem>
                                                        LFi do not warrant that (i) the Services will function uninterrupted, secure or available at any
                                                        particular time or location, or will be error-free or free of harmful components; (ii) any errors or
                                                        defects will be corrected; (iii) the application or software is free of viruses or other harmful
                                                        components; (iv) any content and data, including your data, will be secure or not otherwise lost or
                                                        damaged; (v) the results that may be obtained from the use of the Services will be accurate or reliable;
                                                        or (vi) the results of using the Services will meet your requirements or expectations.
                                                    </ListItem>
                                                    <ListItem>
                                                        Your use of the Services and its content is at your sole risk.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Indemnification </strong>
                                                <List >
                                                    <ListItem>
                                                        You also agree to indemnify and to hold us and our Agents harmless from and against any losses, save for
                                                        losses arising directly from our or their gross negligence, fraud or wilful default, which we or they
                                                        may suffer or incur in connection with the token Minting activities.
                                                    </ListItem>

                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Amendments To These Terms </strong>
                                                <List >
                                                    <ListItem>
                                                        We are continuously working to develop and enhance the Platform and Services. We are also aware that We
                                                        also know that the regulatory environment for virtual assets and virtual asset service providers and
                                                        expectations by the supervisory authorities are changing.
                                                    </ListItem>
                                                    <ListItem>
                                                        We reserve ourselves the discretion to amend, limit the access to, or terminate any of the
                                                        functionalities and Services on the Platform.
                                                    </ListItem>
                                                    <ListItem>
                                                        We reserve the right to unilaterally, at any time without notice, amend or update these Terms. Your
                                                        continued use of the Services after any such modifications shall constitute your acceptance of the
                                                        modified Terms.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Ownership, Use And Intellectual Property Rights </strong>
                                                <List >
                                                    <ListItem>
                                                        The intellectual property rights on the Platform and in any text, images, video, audio or other
                                                        multimedia provisions, software or other information or material submitted to or accessible from the
                                                        Devices and Services are owned by us and our licensors
                                                    </ListItem>
                                                    <ListItem>
                                                        We and our licensors reserve all our intellectual property rights (including, but not limited to, all
                                                        copyright, trade marks, domain names, design rights, database rights, patents and all other intellectual
                                                        property rights of any kind) whether registered or unregistered anywhere in the world. This means, for
                                                        example, that we remain owners of them and are free to use them as we see fit.

                                                    </ListItem>
                                                    <ListItem>
                                                        Nothing in these Terms grants you any legal rights other than as necessary for you to use it for the
                                                        purposes mentioned in these Terms.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> No Third Party Rights </strong>

                                                <List >
                                                    <ListItem>
                                                        No one other than us or you have any right to enforce any of these Terms.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Dispute Resolution </strong>
                                                <List >
                                                    <ListItem>
                                                        We will try to resolve any disputes with you quickly and efficiently. If you would like to raise a
                                                        complaint with us, please contact us as soon as possible at <a href="mailto:support@lfi.io">support@lfi.io.</a>
                                                    </ListItem>
                                                    <ListItem>
                                                        If a dispute cannot be resolved using our complaint handling procedure or you are unhappy with the
                                                        outcome, you may want to use alternative dispute resolution (ADR).
                                                    </ListItem>
                                                    <ListItem>
                                                        Any dispute arising out of or in connection with this contract, including any question regarding
                                                        its existence, validity or termination, shall be referred to and resolved by arbitration under the
                                                        applicable London Court of International Arbitration (LCIA) Rules.
                                                    </ListItem>
                                                    <ListItem>
                                                        The number of arbitrators shall be a sole neutral arbitrator. The seat of arbitration shall be
                                                        London. The language of the arbitration shall be English.
                                                    </ListItem>
                                                </List>
                                            </ListItem>
                                            <ListItem> <strong> Governing Law </strong>
                                                <List >
                                                    <ListItem>
                                                        The laws of the British Virgin Islands apply to these Terms.
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

