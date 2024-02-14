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
                      Membership Terms & Conditions
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
                          <strong> DigitalEdge Alliance Membership Terms and Conditions </strong>
                        </Typography>
                    <List className={styles.UnorderedListDecimal}>
                      <ListItem>
                        <Typography variant="h5">
                        Membership Fee: The annual membership fee for DigitalEdge Alliance Membership is 39 euros VAT included processed in AED Currency, payable upon registration. Membership is valid for one year from the date of payment and can be renewed annually.
                        </Typography>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                        Access to Discounts and Coupons: DigitalEdge Alliance members will have privileged access to a variety of discounts and coupons, ranging from substantial price reductions to special bundle offers. These offers are subject to change periodically, and members will be promptly notified via email or through the DigitalEdge Alliance Membership website.
                        </Typography>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                        Participation in Special Events: DigitalEdge Alliance members will receive priority invitations and access to a diverse array of exclusive special events, such as product launches, hands-on workshops, and thought-provoking tech seminars. Members will be given the opportunity to RSVP for these events ahead of the general public.
                        </Typography>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                        Newsletter Subscription: Subscribing to theDigitalEdge Alliance Membership newsletter ensures that members are kept up to date with the latest tech trends, product releases, and exclusive member-only promotions. The newsletter will be delivered to the email address provided during registration.
                        </Typography>
                      </ListItem>

                      <ListItem>
                        <Typography variant="h5">
                        Community Participation: DigitalEdge Alliance Membership is dedicated to fostering a vibrant tech community where members can actively engage in discussions, share their knowledge, ask questions, and connect with other tech enthusiasts and professionals. Members are encouraged to actively participate in discussions, share their insights, and network with fellow members.
                        </Typography>
                      </ListItem>


                      <ListItem>
                        <Typography variant="h5">
                        No Refund Policy: DigitalEdge Alliance Membership does not offer refunds for membership fees. Once your payment is processed, it is non-refundable. Membership benefits are available for the full duration of the one-year membership period.
                        </Typography>
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
