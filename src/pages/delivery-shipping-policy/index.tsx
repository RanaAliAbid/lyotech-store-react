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
            <div
              className={`${styles['deliverPolicy']} ${styles['infoBannerWrap']}`}
            >
              <div className={`${styles['infoBanner']}`}>
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.bannerWrap}>
                    <Grid item md={12} xs={12}>
                      <Typography variant="h1" className={styles.bannerHD}>
                        Delivery Policy
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
                          <strong> Delivery Policy</strong>
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="h5">
                          This Delivery Condition (Terms) governs the Delivery
                          of Hardware Products, included but not limited to:
                          One Phone, XK Machine (500, 1000, 5000, 10000 and
                          Validator) (Hardware), from Lyotech Labs
                          (Supplier) to individuals/businesses purchasing the
                          Hardware (Purchaser) sold on lyotechlabs.com
                          (Platform).
                        </Typography>
                      </ListItem>
                    </List>

                    <List className={styles.orderedListDecimal}>
                      <ListItem>
                        <Typography variant="h4">
                          <strong>General Provisions </strong>
                        </Typography>

                        <List>
                          <ListItem>
                            <Typography variant="h5">
                              The Supplier's General Terms and Conditions shall
                              apply in conjunction with these Terms, along with
                              the Privacy and Cookie Policy which are
                              incorporated by reference, along with all other
                              Terms, Policies and Agreements you have agreed to
                              in purchasing the Hardware.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Our selected logistic </strong>
                        </Typography>
                        <List>
                          <ListItem>
                            <Typography variant="h5">
                              Our selected logistics partner will manage the
                              transportation and delivery of your purchase to
                              the address you provide. This delivery service
                              provider will ensure fulfillment of orders and
                              ship to locations within the designated regions as
                              indicated during the checkout process
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>
                            {' '}
                            Process of Shipping and Delivery Fees{' '}
                          </strong>
                        </Typography>

                        <List>
                          <ListItem>
                            <Typography variant="h5">
                              Purchases of any Hardware are delivered by courier
                              only, there is no alternate method of receiving
                              the Hardware. Therefore, all such purchases are
                              subject to transportation fees (Delivery Fees).
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Deliveries can be expected within ninety (90)
                              working days (Monday-Friday), from the payment of
                              the shipping fee.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">Delivery Fees</Typography>
                            <List>
                              <ListItem>
                                <Typography variant="h5">
                                  Delivery Fees are subject to variation based
                                  on the location you are receiving your order
                                  to;
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The applicable Delivery Fees will be
                                  calculated automatically upon checkout when
                                  you purchase on the Platform based on your
                                  location.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Delivery Fees are solely borne by the
                                  Purchaser.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The multiple shipments may lead to multiple
                                  charges appearing on the monthly statement of
                                  the Purchaser. The charges can be found during
                                  the checkout process.
                                </Typography>
                              </ListItem>

                              {/* <ListItem>
                                                                <Typography variant="h5">
                                                                    Shipping and delivery details:
                                                                </Typography>

                                                                <List>
                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            For Purchaser purchasing from the USA, shipping will be managed by LYOTECH LABS LLC 8 The Green, Suite Rin the Cityof Dover, Zip code “ 19901
                                                                        </Typography>
                                                                    </ListItem>

                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            For Purchaser purchasing from EU, shipping will be managed by LYOTECH LABS LIMITED 33 NEWMAN STREET 2ND FLOORLONDON ENGLAND W1T 1PYCompany Number 14694218;
                                                                        </Typography>
                                                                    </ListItem>


                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            For Purchaser purchasing from MENA, shipping will be managed by LYOTECH LABS LLC WHP2-BLOCK-T COMMERCIAL Area: Saih Shuaib 3, Dubai, UAE;
                                                                        </Typography>
                                                                    </ListItem>

                                                                    <ListItem>
                                                                        <Typography variant="h5">
                                                                            For Purchaser purchasing from any other country, shipping will be managed by LYOTECH LABS Limited Room 1104, Crawford House, 70 Queen's Rd. Centra, Central, Hong Kong.
                                                                        </Typography>
                                                                    </ListItem>
                                                                </List>
                                                            </ListItem> */}
                            </List>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              We strictly adhere to the Laws of the United Arab
                              Emirates and do not engage in any transactions or
                              offer services or products to any countries under
                              the sanctions of OFAC (Office of Foreign Assets
                              Control). Futhermore, we do not deliver to the
                              following countries: Iran, Syria, North Korea,
                              Crimea, Yemen, Libya, Guinea- Bissau, Guinea,
                              South Sudan, Somalia, Venezuela, Cuba, Myanmar
                              (Burma), Zimbabwe, Afghanistan, Eritrea, Iraq,
                              Balkans, Belarus, Central African Republic, Congo,
                              Ethiopia, Nicaragua, Mali, Lebanon, CÃ´te d'Ivoire
                              (IvoryCoast), Liberia, Barbados, Panama, Haiti,
                              and Ukraine.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              This list is subject to change at the sole
                              discretion of the Supplier, for any reason
                              including but not limited to internal policy
                              decisions, Courier's policies, and international
                              sanctions or restrictions.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Purchaser acknowledges and accepts that we do not
                              issue refunds for Hardware, if between the time of
                              purchase and dispatch the list provided in clause
                              3.2 has been subject to change, we will not be
                              liable for any loss or damages endured.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Receiving Hardware </strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              The Purchaser shall not refuse to receive
                              Hardware. If they do so in breach of these Terms,
                              they will not be applicable to receive the
                              Hardware or a refund.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Delivery shall be between 9 am to 6 pm GST, Monday
                              to Friday, subject to any unforeseen delays or
                              public holidays, for which the Supplier shall not
                              be held responsible.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Notifications of Delivery</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Should it be permitted by the selected Courier
                              delivering to your destination, you may receive
                              regular updates of your order status through the
                              given Courier's tracking services.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Supplier will confirm your order via email upon
                              receiving the payment, upon which you can expect
                              the Hardware purchased to be dispatched within 90
                              working days.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Price Payment & Delivery</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Once you have made your purchase, you may be
                              unable to change the provided delivery details.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              If you wish to change your delivery details, you
                              can contact our Customer Services at: support@lyotechlabs.com, and
                              if it is before dispatch they may be able to
                              assist in the delivery details change.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Should a change in details not be possible for
                              your order, the Purchaser will bear any additional
                              costs to have the goods delivered to a different
                              location if applicable, and will not receive a
                              refund for the previous Delivery Fees.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Delivery Information</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              The Hardware purchased will be delivered to the
                              delivery address specified in your order. Please
                              ensure that you provide the correct delivery
                              details and contact information to ensure there is
                              no delay in the delivery due to misinformation.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              The Supplier reserves the right to charge you
                              additional fees for a second delivery attempt,
                              missed shipment or for the shipping return of
                              rejected goods or any other fees incurred due to
                              incorrect delivery information or receipt of the
                              Hardware.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Customs, Duties and Taxes</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Price at checkout not includes all customs, duties and
                              taxes. Any additional fees outside of those
                              included will be charged directly to the
                              Purchaser. Should these additional fees not be
                              paid and the Hardware returned to the Supplier,
                              the Supplier shall not be responsible for issuing
                              a refund and Purchaser will be required to pay the
                              consequential Delivery Fees and any additional
                              fees required for re-shipment.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Payment Confirmation</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Once the payment is made, the confirmation notice
                              will be sent to the client via email within 24
                              hours of receipt. It is the Purchaser's
                              responsibility to provide an updated email address
                              or phone number to receive the payment
                              confirmation.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Packaging</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Supplier shall properly prepare, secure and
                              package the Hardware in a manner suitable for
                              shipment to provide adequate protection against
                              damage in transit.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Should damages in transit occur to the Hardware,
                              the Supplier will not be responsible.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Warranty</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              All Hardware include standard warranty for two
                              years (the Warranty Period) provided by the
                              manufacturer of the Hardware(s) (Manufacturer).
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Standard warranty is provided by third party
                              manufacturers, not the Supplier. Supplier bears no
                              responsibility for the manufacturer's warranty,
                              and Purchasers are advised to read the terms of
                              such warranty carefully before purchasing.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Purchasers may purchase additional warranty
                              packages for their Hardware, including either the
                              One Care Plan for the One Phone or the XK
                              Minting Machine Care Policy for the XL Computer
                              (1,000 and 5,000) (Additional Warranty Plans).
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Additional Warranty Plans are valid for two years
                              and subject to their own Terms and Conditions
                              which you are solely responsible for reading and
                              agreeing to when purchasing.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              The coverage of your Hardware depends on the
                              package you have purchased, damage caused by
                              shipping will be covered to the extent as provided
                              in the terms of these individual plans.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Limitation of liability</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              To the maximum extent permitted by applicable law,
                              supplier and its employees and agents will under
                              no circumstances be liable to you or any
                              subsequent owner of the hardware for any indirect
                              or consequential damages resulting from supplier'
                              obligations under this delivery condition.
                              Supplier specifically does not warrant that (I) it
                              will be able to replace the hardware due to any
                              damage caused in delivery, (ii) it will delivery
                              the hardware by a specific time, or (iii) the
                              delivery of the hardware will be uninterrupted and
                              delivered with no error. The benefits conferred by
                              these terms are in addition to any rights and
                              remedies provided under consumer laws and
                              regulations. To the extent that liability under
                              such laws and regulations may be limited
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Force Majeure</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Supplier shall bear no liability under or be
                              deemed to be in breach of these Terms for any
                              delays or failures in performance of these Terms
                              which result from Force Majeure. The party subject
                              to the Force Majeure event shall promptly notify
                              the other party in writing when such the event
                              causes a delay or failure in performance and when
                              it ceases to do so.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Returns and Refunds</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              To facilitate returns and refunds, we have
                              implemented a comprehensive{' '}
                              <a href="https://lyotechlabs.com/return-refund-policy">
                                Return and Refund Policy{' '}
                              </a>{' '}
                              We highly recommend that you familiarize yourself
                              with the terms and conditions outlined in this
                              policy, which can be found on our Website. It is
                              important to understand and adhere to these terms
                              before initiating a return or refund for any
                              product.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Product Availability</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              The Supplier shall make reasonable efforts to
                              supply all Products ordered in conformity with
                              this agreement. The Supplier does not, however,
                              guarantee the availability of any Products.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              If shortages of any ordered Products arise for any
                              reason, the Supplier shall inform the Purchaser
                              via email of the resolution for such occurrence.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Delivery Delays</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              Supplier will not be liable for any loss of
                              damages resulting from late delivery.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              All delivery time estimations given by the
                              Supplier are indications only, and do not
                              constitute any guarantees or promises for
                              completion of delivery within these times.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Upon dispatch of the Hardware, all delivery
                              responsibility shall vest with the Courier.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Missing/Damaged Orders</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              If you do not receive your order, or your order is
                              damaged in transit, please contact our Customer
                              Support at the Details provided in clause 17 for
                              assistance with your matter.
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
                              As previously alluded to, our Customer Support
                              team will be happy to assist you with any matters
                              concerned with these Terms, you can contact us via
                              email at:{' '}
                              <a href="mailto:support@lyotechlabs.com">
                                {' '}
                                support@lyotechlabs.com{' '}
                              </a>
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h4">
                          <strong>Applicable Law and Dispute Resolution</strong>
                        </Typography>

                        <List className={styles.orderedListRoman}>
                          <ListItem>
                            <Typography variant="h5">
                              These Terms and their interpretation shall be
                              governed by the laws of Dubai, United Arab
                              Emirates. For any disputes that cannot be amicably
                              resolved, the courts of Dubai, United Arab
                              Emirates shall have the exclusive jurisdiction to
                              resolve the dispute.
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