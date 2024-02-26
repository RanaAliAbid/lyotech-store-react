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
              className={`${styles['privacyPolicy']} ${styles['infoBannerWrap']}`}
            >
              <div className={`${styles['infoBanner']}`}>
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.bannerWrap}>
                    <Grid item md={12} xs={12}>
                      <Typography variant="h1" className={styles.bannerHD}>
                      DigitalEdge Alliance Membership <br /> Privacy Policy
                      </Typography>
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
                    {/* <Typography variant="h4">
                      <strong>
                        DigitalEdge Alliance Membership Privacy Policy{' '}
                      </strong>
                    </Typography> */}

                    <List className={styles.orderedListDecimal}>
                      <ListItem>
                        <Typography variant="h5">
                          <strong> Information We Collect </strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                              Personal Information: When you sign up for
                              DigitalEdge Alliance Membership, we collect
                              personal information, including your name, email
                              address, and payment details, solely for the
                              purpose of processing your membership fee and
                              providing you with HORYS Technologies Membership benefits.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                          <strong> How We Use Your Information: </strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                              Name and Email Address: Your name and email
                              address will be used to manage your DigitalEdge
                              Alliance Membership, facilitate communication,
                              send you updates, and provide access to exclusive
                              DigitalEdge Alliance Membership benefits.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                              Payment Information: Payment information is
                              securely processed by our trusted payment
                              provider. HORYS Technologies
                              does not store or retain your payment
                              details.fits.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                          <strong> Security and Data Protection:</strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                            HORYS Technologies is committed to ensuring the security and protection of your personal information. We employ industry-standard security measures to safeguard your data from unauthorized access, loss, or theft.
                            </Typography>
                          </ListItem>

                          <ListItem>
                            <Typography variant="h5">
                            Your personal information will not be shared with third parties without your explicit consent unless required by law.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                          <strong>No Refund Policy:</strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                            DigitalEdge Alliance Membership adheres to a strict no-refund policy for membership fees. Once your payment is processed, it is non-refundable. We recommend thoroughly reviewing the membership benefits before joining.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                          <strong>Communication Preferences:</strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                            DigitalEdge Alliance Membership respects your communication preferences. You may choose to opt out of receiving newsletters and updates at any time by following the unsubscribe instructions provided in our communications.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                          <strong>Changes to Privacy Policy:</strong>
                        </Typography>

                        <List
                          className={`${styles['UnorderedListDecimal']} ${styles['underOrderList']}`}
                        >
                          <ListItem>
                            <Typography variant="h5">
                            HORYS Technologies may periodically update this Privacy Policy to reflect changes in data protection regulations or our practices. Any modifications will be promptly posted on our website, and it is your responsibility to review and agree to the updated terms.
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>



                    </List>
                  </Grid>
                </Grid>

                <Typography variant="h5">
                By becoming a DigitalEdge Alliance member, you agree to abide by the terms and conditions and the privacy policy outlined above.
                  </Typography>

                  <br />

                  <Typography variant="h5">
                  If you have any questions or concerns regarding your membership or our privacy practices, please do not hesitate to contact us at <a href='mailto:support@horystech.com'>support@horystech.com</a>.
Thank you for choosing DigitalEdge Alliance Membership as your tech community, and we look forward to serving you as a valued member!

                  </Typography>
                
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
