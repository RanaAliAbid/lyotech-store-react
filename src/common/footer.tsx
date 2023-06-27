import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Link from '@mui/material/Link';

import darkLogo from '../img/dark-logo.png';

import styles from '@/styles/Home.module.css';

import useTranslation from 'next-translate/useTranslation';

export default function Footer() {
  const { t } = useTranslation('common');

  const YEAR = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.containerBox} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className={styles.footBox}>
                <img
                  src={darkLogo.src}
                  alt="logo"
                />
                <Typography variant="h5">
                  Lyotech labs electronics trading l.L.C
                </Typography>
              </div>
            </Grid>

            <Grid item md={3} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section2-header')}
                </Typography>

                <List>
                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section2-item1')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section2-item2')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section2-item3')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section2-item4')}</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item md={3} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section3-header')}
                </Typography>

                <List>
                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section3-item1')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section3-item2')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section3-item3')}</Link>
                  </ListItem>

                  <ListItem className={styles.item}>
                    <Link href="#">{t('footer-section3-item4')}</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item md={3} xs={12}>
              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section4-header1')}
                </Typography>

                <Typography variant="h5">
                  {t('footer-section4-desc1')}{' '}
                  <Link href="#"> demo@example.com </Link>
                </Typography>
              </div>

              <div className={styles.footBox}>
                <Typography variant="h4">
                  {t('footer-section4-header2')}
                </Typography>

                <Typography variant="h5">
                  {t('footer-section4-desc2')}
                </Typography>
              </div>
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
    </>
  );
}
