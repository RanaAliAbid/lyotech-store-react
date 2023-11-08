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

export default function Presalepolicy() {
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
            <div
              className={`${styles['termsConditions']} ${styles['infoBannerWrap']}`}
            >
              <div className={`${styles['infoBanner']}`}>
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.bannerWrap}>
                    <Grid item md={12} xs={12}>
                      <Typography variant="h1" className={styles.bannerHD}>
                        Pre Sale Policy
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
                      <strong> About our terms </strong>
                    </Typography>

                    <Typography variant="h5">
                    These Terms and Conditions (‘Terms’) apply only when you place an order for the hardware such as L One Phone, XL Computer (500, 1000, 5000, 10,000 and Validator) (‘Device’) from the Lyotech Labs website  during the pre-sale period. By placing an order you agree to be bound by these Terms which will form a binding contract between Lyotech Labs (we, us or our) and you, the person purchasing the Device during the pre-sale (Purchaser, you or your). If you do not agree with any of these Terms, you should not proceed in purchasing the Device. Please keep a copy of these Terms for your records.
                    </Typography>
                    <br />
                    <Typography variant="h5">
                    A pre-sale is an offer to purchase Devices which are not yet available for general sale via Lyotech’s website.
                    </Typography>
                    <br />
                    <Typography variant="h5">
                    In order to place an order during the pre-sale period,, you will need to provide certain information, including but not limited to your name, address and billing information. It is your responsibility to ensure this information is accurate and up to date. If we do not have accurate information, we will not be able to keep you informed of the purchase or refund any payments, if applicable.
                    </Typography>
                    <br />
                    <Typography variant="h5">
                    These Terms may be made available in several languages; all versions are legally binding, but in the event of inconsistency between the English version and a translated version, the English version prevails.
                    </Typography>
                    <br />
                    <Typography variant="h5">

                    By purchasing the Device, you agree that you have read, understood and accepted these Terms as well as our General Terms and Conditions, Privacy & Cookie Policy, and Delivery Condition all available at the Lyotech Labs website, which are deemed to be incorporated into these Terms by reference.
                    </Typography>
                    
                    <br />
                    <div className={styles.termListItemText}>
                      <List className={styles.orderedListDecimal}>
                        <ListItem>
                          {' '}
                          <strong> Supply of Device(s) </strong>
                          <List>
                            <ListItem>
                            These Terms commences on the time of purchase (Commencement Date) and shall continue until the sale goes live, when it shall terminate automatically unless terminated earlier in accordance with clause 17 (the Term) and the updated terms and conditions will come into effect.
                            </ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          {' '}
                          <strong> Orders </strong>
                          <List>
                            <ListItem>
                            The Purchaser may at any time during the pre-sale pre-purchase a Device from the retail website (an Order).
                            </ListItem>

                            <ListItem>
                            An Order shall constitute an offer by the Purchaser to purchase the specified Device(s) in accordance with these Terms.
                            </ListItem>
                            <ListItem>
                            The offer constituted by an Order shall remain in effect and capable of being accepted by the Lyotech Labs until the Purchaser receives an order confirmation to the contact details provided at checkout, if the Purchaser does not receive an order confirmation within
                            300 days after placing the order, these Terms shall automatically be void and not binding upon either us or you.
                            </ListItem>

                            <ListItem>
                            The Lyotech Labs may accept or reject an Order at its discretion. An Order shall not be accepted, and no binding obligation to supply any Device(s) shall arise, until the Lyotech Labs’s written acceptance of the Order via order confirmation.
                            </ListItem>

                            <ListItem>
                            Rejection by the Lyotech Labs of an Order, including any communication that may accompany such rejection, shall not constitute a counter-offer capable of acceptance by the Purchaser.
                            </ListItem>
                            <ListItem>
                            Marketing and other promotional material relating to the Device(s) are illustrative only and do not form part of these Terms. The Purchaser agrees that, in submitting an Order, it has not relied on any representations or statements by the Lyotech Labs other than those expressly set out in these Terms.
                            </ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          {' '}
                          <strong> Delivery </strong>
                          <List>
                            <ListItem>
                            The product will be dispatched within a maximum timeframe of 300 days from the date of purchase, as stated in the Delivery section.
                            </ListItem>
                            <ListItem>
                            Where possible orders will be shipped to you or be ready for collection as soon as is practicable, subject to availability. Release dates are decided by our manufacturers and are subject to change. As a result, we cannot be liable for any changes to Release dates or Pre-sale period advertised by us.
                            </ListItem>

                            <ListItem>
                            The Device(s) shall be deemed delivered upon dispatch (Delivery).
                              <List>
                                <ListItem>
                                Purchasers shall not be entitled to reject the delivery of Device(s) upon delivery.
                                </ListItem>
                                <ListItem>
                                Time of Delivery is not of the essence. The Lyotech Labs shall use its reasonable endeavours to meet Delivery dates but such dates are approximate only.
                                </ListItem>
                                <ListItem>
                                The Lyotech Labs shall not be liable for any delay in or failure of Delivery.
                                </ListItem>


                                <ListItem>
                                All Devices include standard warranty for two years (the Warranty Period) provided by the manufacturer of the Device(s) (Manufacturer).
                                </ListItem>

                                <ListItem>
                                LYOTECH LABS THE MANUFACTURER MAKE NO OTHER EXPRESS WARRANTY OR CONDITION WHETHER WRITTEN OR ORAL AND, TO THE EXTENT PERMITTED BY LAW. LYOTECH LABS THE MANUFACTURER EXPRESSLY DISCLAIM ALL WARRANTIES AND CONDITIONS NOT STATED IN THIS STANDARD WARRANTY TO THE EXTENT ALLOWED BY THE APPLICABLE LAWS. LYOTECH LABS THE MANUFACTURER DISCLAIM ALL IMPLIED WARRANTIES OR CONDITIONS, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. TO THE EXTENT THAT THIS STANDARD WARRANTY OR ANY PART OF IT IS INCONSISTENT WITH THE APPLICABLE LAWS, THIS STANDARD WARRANTY OR THE CORRESPONDING PART SHALL BE DEEMED MODIFIED TO BE CONSISTENT WITH SUCH APPLICABLE LAWS.
                                </ListItem>


                                <ListItem>
                                Purchasers may purchase additional warranty packages for their devices, including either the One Care Plan for the Lfi Smartphone or the XL Computer  Care Policy for the XL Computer (500, 1,000, 5,000, 10,000 and Validator) (Additional Warranty Plans).
                                </ListItem>

                                <ListItem>
                                Additional Warranty Plans are valid for two years and subject to their own Terms and Conditions which you are solely responsible for reading and agreeing to when purchasing.
                                </ListItem>
                              </List>
                            </ListItem>

                          </List>
                        </ListItem>
                        <ListItem>
                          {' '}
                          <strong> Risk </strong>
                          <List>
                            <ListItem>
                            By purchasing the Device you acknowledge and accept that the capabilities of the Devices.
                            </ListItem>
                          </List>
                        </ListItem>

                     


                        <ListItem>
                          {' '}
                          <strong> Price </strong>
                          <List>
                            <ListItem>
                            The price of each device is variable, and subject to change at the sole discretion of Lyotech Labs. Once you make the payment and receive your order confirmation, the price cannot be changed.
                            </ListItem>
                            <ListItem>
                            The full amount of the Device will be payable upfront when purchasing.
                            </ListItem>

                            <ListItem>
                            Additional charges may occur as follows:
                              <List>
                                <ListItem>
                                a membership is required to participate in presale, if you do not already have a membership with our third-party partners, the annual fee will be added in your order.. If you are already a member this will automatically be detected at checkout and you will not be subject to this additional charge. Separate terms and conditions will apply for this membership.
                                
                                </ListItem>
                                <ListItem>
                                shipment- additional shipping charges are determined automatically at checkout based on the country you are purchasing from, and subject to change based on geographical location and time of purchase;
                                </ListItem>

                                <ListItem>
                                Additional Warranty packages are available for an additional fee
                                </ListItem>
                              </List>
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Payment </strong>
                          <List>
                            <ListItem>
                            The forms of payment accepted by Lyotech Labs are card payment
                            </ListItem>

                            <ListItem>
                            Payments made by card are subject to additional fees which will be identified at checkout.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Dispute resolution </strong>
                          <List>
                            <ListItem>
                            If any dispute arises between the parties out of or in connection with these Terms, the matter shall be referred to Lyotech Labs Customer Support at{' '}
                              <a href="https://support.lyotechlabs.com">
                                {' '}
                                support.lyotechlabs.com.{' '}
                              </a>
                            </ListItem>
                            <ListItem>
                            If the dispute is not resolved within 30 days of the referral being made, the matter may be escalated as per clause 17.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Entire agreement </strong>
                          <List>
                            <ListItem>
                            The parties agree that these Terms constitute the entire agreement between them and supersedes all previous agreements, understandings and arrangements between them, whether in writing or oral in respect of its subject matter.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Force majeure</strong>
                          <List>
                            <ListItem>
                            Lyotech Labs shall have no liability under or be deemed to be in breach of these Terms for any delays or failures in performance of these Terms which result from Force Majeure. The party subject to the Force Majeure event shall promptly notify the other party in writing when such the event causes a delay or failure in performance and when it ceases to do so.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Variation </strong>
                          <List>
                            <ListItem>
                            No variation of these Terms shall be valid or effective unless it is in writing, refers to these Terms and is expressly agreed to by each party.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Severance </strong>
                          <List>
                            <ListItem>
                            If any provision of these Terms (or part of any provision) is or becomes illegal, invalid or unenforceable, the legality, validity and enforceability of any other provision of these Terms shall not be affected.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Waiver </strong>
                          <List>
                            <ListItem>
                            No failure, delay or omission by either party in exercising any right, power or remedy provided by law or under these Terms shall operate as a waiver of that right, power or remedy, nor shall it preclude or restrict any future exercise of that or any other right or remedy. No single or partial exercise of any right, power or remedy provided by law or under these Terms shall prevent any future exercise of it or the exercise of any other right, power or remedy.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Third party rights </strong>
                          <List>
                            <ListItem>
                            Subject to clause , no one other than a party to these Terms, shall have any right to enforce any of its provisions.
                            </ListItem>
                            <ListItem>
                            The Affiliates of the Lyotech Labs shall have the right to enforce the provisions of these Terms.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Governing law </strong>
                          <List>
                            <ListItem>
                            These Terms and any dispute or claim arising out of, or in connection with, its subject matter or formation (including non-contractual disputes or claims) shall be governed by, and construed in accordance with, the laws of the United Arab Emirates.
                            </ListItem>
                          </List>
                        </ListItem>

                        <ListItem>
                          {' '}
                          <strong> Jurisdiction </strong>
                          <List>
                            <ListItem>
                            The parties irrevocably agree that the courts of United Arab Emirates.
shall have exclusive jurisdiction to settle any dispute or claim arising out of, or in connection with, these Terms, its subject matter or formation (including non-contractual disputes or claims).

                            </ListItem>
                          </List>
                        </ListItem>
                      </List>

                      <br />

                      <Typography variant="h5"> <strong> Last Updated on 10-August-2023 </strong></Typography>
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
