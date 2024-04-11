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
                <img src={darkLogo.src} className={styles.footerLogo} alt="logo" />
                <Typography variant="h5" className="semiBold">
                  <strong> HORYS GLOBAL ELECTRONICS TRADING L.L.C - UAE </strong>
                </Typography>

                <Typography variant="h5" className={styles.noMarginBottom}>
                  TLN: <span> 1150530 </span>
                </Typography>

                <Typography variant="h5">
                  {/* Office 701, Emaar Square Building 1,
                  00000 Downtown, Dubai U.A.E. */}
                  Whp2-block-T Commercial <br />Saih Shuaib 3, Dubai, U.A.E.
                </Typography>

                <Typography variant="h4">
                  <a href="https://support.horystechnologies.com" target="_blank">
                    <b> Help & Support</b>
                  </a>
                </Typography>

                {/* <Typography variant="h4">
                  Phone no. <a href="tel:+971 529988825">+971 52 998 8825</a>
                </Typography> */}
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
                  {t('footer-section3-header')}
                </Typography>

                <List>
                  <ListItem className={styles.item}>
                    {/* <Link href="https://docs.lyotechlabs.com/introduction/what-is-lyotech-labs"> */}
                    <Link href="javascript:void(0)">
                      About Us
                    </Link>
                  </ListItem>

                   <ListItem className={styles.item}>
                  {/*  <Link
                      href="https://docs.lyotechlabs.com/legal-documents/pre-sale-policy"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">

                      Pre-Sale Policy and Terms
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/membership-terms-conditions">
                      Membership Terms & Conditions
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/membership-privacy-policy" >
                      Membership Privacy Policy
                    </Link>
                  </ListItem>


                  {/* <ListItem className={styles.item}>
                    <Link href="/pre-sale-policy">
                      Pre-Sale Policy and Terms
                    </Link>
                  </ListItem> */}




                  <ListItem className={styles.item}>
                    {/* <Link
                      href="https://docs.lyotechlabs.com/legal-documents/privacy-and-cookies-policy"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">

                      {t('footer-section2-item1')}
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    {/* <Link
                      href="https://docs.lyotechlabs.com/legal-documents/terms-and-conditions"
                      href="/terms"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">

                      Terms & Conditions
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    {/* <Link
                      href="https://docs.lyotechlabs.com/help-center/shipping-and-delivery"
                      href="/delivery-shipping-policy"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">            
                      Delivery & Shipping Policy
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    {/* <Link
                      href="https://docs.lyotechlabs.com/legal-documents/return-and-refund-policy"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">
                      Refund/Return Policy
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    {/* <Link
                      href="https://docs.lyotechlabs.com/legal-documents/cancellation-and-replacement-policy"
                      target="_blank"
                    > */}
                    <Link href="javascript:void(0)">
                      Cancellation & Replacement Policy
                    </Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/troubleshooting" target='_blank'>
                      Troubleshooting
                    </Link>
                  </ListItem>

                  {/* <ListItem className={styles.item}>
                    <Link className={styles.docBtn} href="https://docs.lyotechlabs.com" target='_blank'>
                    Docs and Guides
                    </Link>
                  </ListItem> */}
                </List>
              </div>
            </Grid>

            <Grid item md={2} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {/* {t('footer-section2-header')} */}
                  Products
                </Typography>

                <List>
                  <ListItem className={styles.item}>
                    <Link href={`#serviceSection`}>Services</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href={`#deviceSection`}>Devices</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="/co-products">Co-Products</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item md={4} xs={12}>
              <div
                className={`${styles['footBox']} ${styles['footerAddresses']}`}
              >
                <Typography variant="h4">Global Offices</Typography>

                <Typography className={styles.doverAddress} variant="h5">
                  <span> HORYS TECHNOLOGIES LLC - Delaware
 </span>
                  8 The green Suite R, <br />
                  19901 Dover DE, U.S.A.
                </Typography>

                <Typography className={styles.hongKongAddress} variant="h5">
                  <span> HORYS TECHNOLOGIES Limited - Hong Kong
</span>
                  {/* 1104 Crawford House,<br />
                  70 Queens Road Central, H.K. */}
                  Office 705, 73 Chai Wan Kok St, <br />
                  Tsuen Wan, H.K.
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
                © Copyright {YEAR}. All Rights Reserved by HORYS Technologies
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <CookiesComponent></CookiesComponent>
    </>
  );
}
