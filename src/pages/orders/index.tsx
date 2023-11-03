import * as React from 'react';

import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import productImg from '../../img/productImg.png';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider, Button } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import {
  deleteUserOrders,
  getUserOrders,
} from '@/services/orders/order.service';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';

import { generatePaymentLink } from '@/services/orders/order.service';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { trimStringData } from '@/utils/app.utils';
import PaginationComponent from '@/common/pagination';
import MastercardCheckoutComponent from '@/components/checkout/paymentMethods/mastercardCheckout.component';

export default function AllOrders() {
  const { t } = useTranslation('order');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();
  const router = useRouter();
  const [pageNumber, setPageNumber] = React.useState(1);
  const [sessionId, setSessionId] = React.useState('');
  const [orders, setOrders] = React.useState([]);

  const [pagination, setPagination] = React.useState<any>({
    totalPages: 0,
    currentPage: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    nextPage: null,
    prevPage: null,
  });

  const fetchOrderPaginate = (page: any) => {
    setPageNumber(page);
  };

  React.useEffect(() => {
    handleGetOrders();
  }, [pageNumber]);

  const handleGetOrders = async () => {
    try {
      globalContext.setGlobalLoading(true);

      const result = await getUserOrders({ page: pageNumber });

      setOrders(result?.data?.data?.data?.docs);

      setPagination({
        totalPages: result?.data?.data?.data?.totalPages,
        currentPage: result?.data?.data?.data?.page,
        pagingCounter: result?.data?.data?.data?.pagingCounter,
        hasPrevPage: result?.data?.data?.data?.hasPrevPage,
        hasNextPage: result?.data?.data?.data?.hasNextPage,
        nextPage: result?.data?.data?.data?.nextPage,
        prevPage: result?.data?.data?.data?.prevPage,
      });

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const cancelUserOrder = async (id: string) => {
    if (!id) return;
    try {
      globalContext.setGlobalLoading(true);

      const result = await deleteUserOrders(id);

      await handleGetOrders();

      globalContext.setGlobalLoading(false);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const placeOrderNow = async (id: string) => {
    if (!id) return;
    try {
      globalContext.setGlobalLoading(true);

      const result = await generatePaymentLink(id);

      if (result?.data?.data?.data?.masterCardSession) {
        //
        setSessionId(result?.data?.data?.data?.masterCardSession.sessionId);
      } else if (result?.data?.data?.data?.paymentLink) {
        //
        window.location.href = result?.data?.data?.data?.paymentLink;
      } else {
        //
        globalContext.setGlobalLoading(false);
      }
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetOrders();
  }, []);

  const openOrderDetails = (id: string, status: string) => {
    router.push('/orders/view?id=' + id);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={t('order-header')} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>
                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('order-header')}</Typography>
                  </div>
                  <div className={`${styles['wrapBox']}`}>
                    <List>
                      {orders && orders?.length > 0 ? (
                        <>
                          {orders?.map((order: any, index: any) => (
                            <ListItem
                              key={index}
                              className={`${styles.ordersList}`}
                            >
                              <div className={styles.orderHead}>
                                <div className="cursor-pointer">
                                  <Typography variant="h5">
                                    {t('order-id')} :
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    onClick={() => {
                                      globalContext?.copyToClipboard(
                                        order?._id
                                      );
                                    }}
                                  >
                                    {trimStringData(order?._id, 15)}
                                  </Typography>
                                </div>

                                <div>
                                  <Typography variant="h5">
                                    {t('order-Status')}:
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    className={`${
                                      order?.status == 'cancelled'
                                        ? 'text-danger'
                                        : order?.status == 'pending'
                                        ? 'text-primary'
                                        : styles.textgreen
                                    }
                                    `}
                                  >
                                    {order?.status}
                                  </Typography>
                                </div>

                                <div>
                                  <Typography variant="h5">
                                    {t('order-Total')}:
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    className={styles.textBlue}
                                  >
                                    {(
                                      order?.totalAmount *
                                      globalContext.conversionRate
                                    )?.toFixed(globalContext.priceToFixed)}
                                    {globalContext?.currencySymbol}
                                  </Typography>
                                </div>
                              </div>

                              <div className={`${styles.orderBody} w-100`}>
                                <List>
                                  {order?.products &&
                                  order?.products?.length > 0 ? (
                                    order?.products.map((product: any) => (
                                      <ListItem
                                        className={`${styles.productItem} w-100`}
                                      >
                                        <div className={`${styles.productImg}`}>
                                          <img
                                            src={productImg.src}
                                            alt="logo"
                                            style={{
                                              maxWidth: '100px',
                                              objectFit: `cover`,
                                            }}
                                          />
                                        </div>
                                        <div
                                          className={`${styles.productDetails} w-100`}
                                        >
                                          <div className={styles.productName}>
                                            <div>
                                              <Typography
                                                variant="h4"
                                                className={styles.productitle}
                                              >
                                                {product.productId?.name}
                                              </Typography>

                                              <Typography variant="body1">
                                                Model Name: L ONE
                                              </Typography>
                                            </div>
                                          </div>
                                        </div>
                                      </ListItem>
                                    ))
                                  ) : (
                                    <></>
                                  )}
                                </List>
                              </div>

                              <div className={styles.foot}>
                                <Button
                                  onClick={(e) => {
                                    openOrderDetails(
                                      order?._id,
                                      order?.status?.toLowerCase()
                                    );
                                  }}
                                  variant="outlined"
                                  size="small"
                                  className={``}
                                >
                                  {t('order-view-details')}
                                </Button>

                                {order?.status?.toLowerCase() == 'pending' && (
                                  <>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button
                                      onClick={(e) => {
                                        cancelUserOrder(order?._id);
                                      }}
                                      variant="outlined"
                                      size="small"
                                      color="error"
                                    >
                                      {t('Cancel')}
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button
                                      onClick={(e) => {
                                        placeOrderNow(order?._id);
                                      }}
                                      variant="outlined"
                                      size="small"
                                      className={``}
                                    >
                                      {t('Pay now')}
                                    </Button>
                                  </>
                                )}
                              </div>
                            </ListItem>
                          ))}
                          <div style={{ padding: '12px' }}>
                            <br />
                            <PaginationComponent
                              pagination={pagination}
                              onSelect={fetchOrderPaginate}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-100 text-center">
                            <div className="notfound">
                              <Image
                                src={'/not-found.gif'}
                                alt="Not Found"
                                fill={true}
                              />
                            </div>
                          </div>
                          <div className="w-100 text-center">
                            <Typography
                              variant="h4"
                              className={styles.productitle}
                            >
                              No Order Found
                            </Typography>
                          </div>
                        </>
                      )}
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>

          {sessionId && <MastercardCheckoutComponent sessionId={sessionId} />}

          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
