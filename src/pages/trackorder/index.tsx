import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getTrackingDetails } from '@/services/orders/order.service';
import moment from 'moment';

export default function TrackOrder() {
  const { t } = useTranslation('order');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();
  const [formData, setFormData] = React.useState({
    orderid: "",
    email: authContext.connectedUser?.email
  })
  const [orderDetails, setOrderDetails] = React.useState<any>(null)

  const handleTrackOrder = async () => {
    try {

      setOrderDetails(null)

      if (formData.orderid.length > 0) {
        const response = await getTrackingDetails(formData)

        setOrderDetails(response.data)

        if (response.data?.link) {
          window.open(response.data.link, '_blank');
        }

      } else {
        globalContext.setAlertProps({
          show: true,
          title: "Please fill the form",
          text: "",
          toast: true,
          background: "#8B0000",
          showConfirmButton: false,
          timerProgressBar: true,
          callback: globalContext.closeAlert
        })
      }

    } catch (error) {
      console.log("🚀 ~ handleTrackOrder ~ error:", error)
      globalContext.setAlertProps({
        show: true,
        title: "An error occured or no order found",
        text: "",
        toast: true,
        background: "#8B0000",
        showConfirmButton: false,
        timerProgressBar: true,
        callback: globalContext.closeAlert
      })
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={t('trackorder-header')} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>

                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">
                      {t('trackorder-header')}
                    </Typography>
                  </div>
                  <div className={styles.wrapBox}>
                    <div className={styles.tracknote}>
                      <Typography variant="h5">
                        {t('trackorder-desc')}
                      </Typography>
                    </div>

                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        <div className={styles.formControl}>
                          <label className={styles.formLabel}>
                            {' '}
                            {t('trackorder-order-id')}{' * '}
                          </label>
                          <Input
                            className={styles.formInput}
                            placeholder="123456899"
                            value={formData.orderid}
                            onChange={(e: any) => setFormData({
                              ...formData,
                              orderid: e.target.value
                            })}
                          />
                        </div>

                        <div className={styles.formControl}>
                          <label className={styles.formLabel}>
                            {' '}
                            {t('trackorder-order-email')}{' '}
                          </label>
                          <Input
                            className={styles.formInput}
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e: any) => setFormData({
                              ...formData,
                              email: e.target.value
                            })}
                            readOnly
                            disabled={true}
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Button
                      onClick={handleTrackOrder}
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      {' '}
                      {t('trackorder-now-btn')}{' '}
                    </Button>
                  </div>

                  {
                    (orderDetails) && <>
                      <br /><br />

                      <div className={styles.wrapBox}>
                        <Grid container spacing={3}>
                          <Grid item md={12} xs={12}>
                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Order Status')}{': '} {orderDetails?.order?.status}
                              </label>
                            </div>

                            <div className={styles.formControl}>
                              <label className={styles.formLabel}>
                                {' '}
                                {t('Order Date')}{': '} {moment(orderDetails?.order?.createdAt).format("DD MMM YYYY")}
                              </label>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </>
                  }

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
