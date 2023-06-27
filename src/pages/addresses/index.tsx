import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

export default function Addresses() {
  const { t } = useTranslation('address');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={t('header1')} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>

                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('header1')}</Typography>
                  </div>

                  <div
                    className={`${styles['wrapBox']} ${styles['addressSection']}`}
                  >
                    <div className={styles.boxInfo}>
                      <div className={styles.wrapSubTitle}>
                        <Typography variant="h4">
                          {t('Default-address')}
                        </Typography>
                      </div>

                      <div className={styles.boxInfoBody}>
                        <List>
                          <ListItem style={{ width: '100%' }}>
                            <div className={styles.addresses}>
                              <div className={styles.addressesType}>
                                <Typography variant="h4">
                                  {t('Home-address')}
                                </Typography>
                              </div>

                              <Typography variant="h5">Keanu Reeves</Typography>

                              <Typography variant="body1">
                                keanureeves@gmail.com
                              </Typography>

                              <Typography variant="body1">
                                3rd floor, CBA technologies 57XF+XM <br />
                                Dubai Dubai UAE
                              </Typography>

                              <Typography variant="body1">
                                +971-58-1234659
                              </Typography>

                              <div className={styles.actionBtn}>
                                <Button
                                  variant="outlined"
                                  className={`${styles['btn']} ${styles['btn_outlined']}`}
                                >
                                  {' '}
                                  {t('edit-btn')}{' '}
                                </Button>
                                <Button
                                  variant="text"
                                  className={`${styles['btn']} ${styles['btn_delete']}`}
                                >
                                  {t('delete-btn')}
                                </Button>
                              </div>
                            </div>
                          </ListItem>
                        </List>
                      </div>
                    </div>

                    <div className={styles.boxInfo}>
                      <div className={styles.wrapSubTitle}>
                        <Typography variant="h4">
                          {t('Other-address')}
                        </Typography>
                      </div>

                      <div className={styles.boxInfoBody}>
                        <List>
                          <ListItem>
                            <div className={styles.addresses}>
                              <div className={styles.addressesType}>
                                <Typography variant="h4">
                                  {t('Work-address')}
                                </Typography>
                                <Typography variant="h6">
                                  <Link href="#"> {t('set-as-default')} </Link>
                                </Typography>
                              </div>

                              <Typography variant="h5">Keanu Reeves</Typography>

                              <Typography variant="body1">
                                keanureeves@gmail.com
                              </Typography>

                              <Typography variant="body1">
                                3rd floor, CBA technologies 57XF+XM <br />
                                Dubai Dubai UAE
                              </Typography>

                              <Typography variant="body1">
                                +971-58-1234659
                              </Typography>

                              <div className={styles.actionBtn}>
                                <Button
                                  variant="outlined"
                                  className={`${styles['btn']} ${styles['btn_outlined']}`}
                                >
                                  {' '}
                                  {t('edit-btn')}{' '}
                                </Button>
                                <Button
                                  variant="text"
                                  className={`${styles['btn']} ${styles['btn_delete']}`}
                                >
                                  {t('delete-btn')}
                                </Button>
                              </div>
                            </div>
                          </ListItem>
                        </List>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>

          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
