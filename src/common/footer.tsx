import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// import Link from '@mui/material/Link';

import darkLogo from '../img/dark-logo.png';

import styles from '@/styles/Home.module.css';

import useTranslation from 'next-translate/useTranslation';

import footerCard01 from '../img/footerCard01.png';
import footerCard02 from '../img/footerCard02.png';
import footerCard03 from '../img/footerCard03.png';
import CookiesComponent from './cookies';
import { APP_HOST } from '../../app.config';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation('common');

  const YEAR = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.containerBox} maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item md={3} xs={12}>
              <div className={`${styles['footBox']} ${styles['footerInfo']}`}>
                <img src={darkLogo.src} alt="logo" />
                <Typography variant="h5">
                  Lyotech labs electronics trading l.L.C
                </Typography>

                <Typography variant="h5">
                  Licence Number. <span> 1150530 </span>
                </Typography>

                <Typography variant="h5">
                  WHP2-BLOCK-T COMMERCIAL Area: Saih Shuaib 3, Dubai, UAE PO
                  BOX: 33306
                </Typography>

                <Typography variant="h4">
                  If you have any question. please contact us{' '}
                  <a href="https://support.lyotechlabs.com" target="_blank">
                    <b></b> create ticket
                  </a>
                </Typography>

                <Typography variant="h4">
                  Phone no. <a href="tel:+971 529988825">+971 52 998 8825</a>
                </Typography>
                <div className={styles.footerCards}>
                  <img src={footerCard01.src} alt="Card" />
                  <img src={footerCard02.src} alt="Card" />
                  <img src={footerCard03.src} alt="Card" />
                </div>
              </div>
            </Grid>

            <Grid item md={3} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section2-header')}
                </Typography>

                <List>
                  <ListItem className={styles.item}>
                    <Link href="/privacy-policy">
                      {t('footer-section2-item1')}
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/terms">Terms & Conditions</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/delivery-shipping-policy">
                      Delivery & Shipping Policy
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/return-refund-policy">
                      Refund/Return Policy
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/cancellation-replacement-policy">
                      Cancellation & Replacement Policy
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item md={2} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section3-header')}
                </Typography>
                <List>
                  <ListItem className={styles.item}>
                    <Link href={`${APP_HOST}#serviceSection`}>Services</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href={`${APP_HOST}#deviceSection`}>Devices</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/co-products">Co-Products</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/about">About Us</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item md={4} xs={12}>
              <div
                className={`${styles['footBox']} ${styles['footerAddresses']}`}
              >
                <Typography variant="h4">Address</Typography>

                <Typography className={styles.uaeAddress} variant="h5">
                  <span> Lyotech Labs LLC </span>
                  WHP2-BLOCK-T COMMERCIAL Area: Saih Shuaib 3, Dubai, UAE
                </Typography>

                <Typography className={styles.doverAddress} variant="h5">
                  <span> Lyotech Labs LLC </span>8 The Green, Suite R in the
                  City of Dover, Zip code - 19901
                </Typography>

                <Typography className={styles.hongKongAddress} variant="h5">
                  <span> Lyotech labs Limited</span>
                  Room 1104, Crawford House, 70 Queen's Rd. Centra, Central,
                  Hong Kong
                </Typography>
              </div>

              {/* <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section4-header2')}
                </Typography>

                <Typography variant="h5">
                  {t('footer-section4-desc2')}
                </Typography>
              </div> */}
            </Grid>
          </Grid>
        </Container>

        <Container className={styles.containerBox} maxWidth="lg">
          <Grid container>
            <Grid item xs={12} className={styles.copyright}>
              <Typography variant="h5">
                © Copyright {YEAR}. All Rights Reserved by LYOTECH
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <CookiesComponent></CookiesComponent>
    </>
  );
}
