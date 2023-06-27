import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

import truck from '../../img/truck.png';

import productImage02 from '../../img/productImg/mobBigImg02.png';
import productImage03 from '../../img/productImg/mobBigImg03.png';
import productImage01 from '../../img/productImg/mobBigImg01.png';
import productImage04 from '../../img/productImg/mobBigImg04.png';
import productImage05 from '../../img/productImg/mobBigImg05.png';

import Zoom from 'react-image-zoom';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

export default function ProductDetails() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title="Products" />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12} direction="column">
                  <Carousel
                    className={styles.carousel}
                    showArrows={false}
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    swipeable={true}
                    thumbWidth={100}
                  >
                    <div>
                      <Zoom
                        img={productImage01.src}
                        zoomScale={1.8}
                        width={600}
                        height={600}
                      />
                      <img
                        className={styles.thumbImg}
                        src={productImage01.src}
                      />
                    </div>
                    <div>
                      <Zoom
                        img={productImage02.src}
                        zoomScale={1.8}
                        width={600}
                        height={600}
                      />
                      <img
                        className={styles.thumbImg}
                        src={productImage02.src}
                      />
                    </div>
                    <div>
                      <Zoom
                        img={productImage03.src}
                        zoomScale={1.8}
                        width={600}
                        height={600}
                      />
                      <img
                        className={styles.thumbImg}
                        src={productImage03.src}
                      />
                    </div>
                    <div>
                      <Zoom
                        img={productImage04.src}
                        zoomScale={1.8}
                        width={600}
                        height={600}
                      />
                      <img
                        className={styles.thumbImg}
                        src={productImage04.src}
                      />
                    </div>
                    <div>
                      <Zoom
                        img={productImage05.src}
                        zoomScale={1.8}
                        width={600}
                        height={600}
                      />
                      <img
                        className={styles.thumbImg}
                        src={productImage05.src}
                      />
                    </div>
                  </Carousel>
                </Grid>

                <Grid item md={6} xs={12}>
                  <div className={styles.productDetails}>
                    <Typography variant="h2" className={styles.productName}>
                      LFi ONE Smartphone
                    </Typography>

                    <Typography variant="subtitle1">
                      Model Name: LFI ONE
                    </Typography>

                    <Typography variant="h3" className={styles.productPrice}>
                      $160.00 - <span> $260.00 </span>
                    </Typography>

                    <div className={styles.productReview}>
                      <div className={styles.reviewStars}>
                        <StarRateIcon className={styles.active} />
                        <StarRateIcon className={styles.active} />
                        <StarRateIcon className={styles.active} />
                        <StarRateIcon className={styles.active} />
                        <StarRateIcon />
                      </div>

                      <Typography variant="h6">( 10 Review )</Typography>
                    </div>

                    <Typography variant="h5" className={styles.productSummary}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmo tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimo veniam, quis nostrud
                      exercitation ullamco laboris nisi.
                    </Typography>

                    <List className={styles.productWrapSec}>
                      <ListItem className={styles.item}>
                        <Typography variant="h5">Quantity</Typography>
                        <div className={styles.productQty}>
                          <div className={styles.qtyBtn}>
                            {' '}
                            <RemoveIcon />{' '}
                          </div>
                          <Input
                            className={styles.formControl}
                            defaultValue="0"
                          />
                          <div className={styles.qtyBtn}>
                            {' '}
                            <AddIcon />{' '}
                          </div>
                        </div>
                      </ListItem>

                      <ListItem className={styles.item}>
                        <Typography variant="h5">Whooaa it is</Typography>
                        <Typography variant="h5" className={styles.inStock}>
                          In Stock
                        </Typography>
                      </ListItem>

                      <ListItem className={styles.item}>
                        <FavoriteBorderIcon />
                        <Typography variant="h5">Add to Wishlist</Typography>
                      </ListItem>
                    </List>

                    <div className={styles.orderInfoSec}>
                      <div className={styles.icon}>
                        <img src={truck.src} alt="logo" />
                      </div>

                      <div className={styles.text}>
                        <Typography variant="h5">Order Now !..</Typography>
                        <Typography variant="h6">
                          2-day Delivery Speedy and reliable parcel delivery!
                        </Typography>
                      </div>
                    </div>

                    <div className={styles.categoryInfo}>
                      <Typography variant="h5">Category:</Typography>

                      <List>
                        <ListItem>
                          <Link> Phone </Link>
                        </ListItem>

                        <ListItem>
                          <Link> Smartphone </Link>
                        </ListItem>

                        <ListItem>
                          <Link> Headphone </Link>
                        </ListItem>
                      </List>
                    </div>

                    <Button
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']}`}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>

            <Container className={styles.containerBox}>
              <Grid container>
                <Grid item md={12}>
                  <Box sx={{ typography: 'body1' }} className={styles.tabInfo}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                          className={styles.tablist}
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                          centered
                        >
                          <Tab label="Overview" value="1" />
                          <Tab label="Specifications" value="2" />
                          <Tab label="Reviews" value="3" />
                        </TabList>
                      </Box>

                      <TabPanel
                        value="1"
                        className={`${styles['tabPanel']} ${styles['overview']}`}
                      >
                        <div>
                          <Typography variant="h5">
                            The iPhone 14 Pro models are much more feature rich
                            than the iPhone 14 models, offering camera
                            technology improvements, better display
                            capabilities, a faster A16 chip, and more. The 6.7
                            iPhone 14 Pro models features flat edges, stainless
                            steel enclosure, a textured matte glass back, IP68
                            water resistance, and a Ceramic Shield-protected
                            display. The 48-megapixel lens also enables a 2x
                            Telephoto mode that uses the middle 12 megapixels
                            for full-resolution photos with no digital zoom.
                            This joins the existing 3x zoom enabled by the
                            dedicated Telephoto lens, which has also been
                            improved. The iPhone 14 Pro models support 5G
                            connectivity and uses a new Qualcomm X65 modem.
                          </Typography>

                          <Typography variant="h5">
                            The iPhone 14 Pro models are much more feature rich
                            than the iPhone 14 models, offering camera
                            technology improvements, better display
                            capabilities, a faster A16 chip, and more. The 6.7
                            iPhone 14 Pro models features flat edges, stainless
                            steel enclosure, a textured matte glass back, IP68
                            water resistance, and a Ceramic Shield-protected
                            display. The 48-megapixel lens also enables a 2x
                            Telephoto mode that uses the middle 12 megapixels
                            for full-resolution photos with no digital zoom.
                            This joins the existing 3x zoom enabled by the
                            dedicated Telephoto lens, which has also been
                            improved. The iPhone 14 Pro models support 5G
                            connectivity and uses a new Qualcomm X65 modem.
                          </Typography>
                        </div>
                      </TabPanel>

                      <TabPanel value="2" className={`${styles['tabPanel']}`}>
                        <Grid
                          container
                          spacing={3}
                          className={styles.specificationTable}
                        >
                          <Grid item md={6} xs={12}>
                            <table>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                            </table>
                          </Grid>

                          <Grid item md={6} xs={12}>
                            <table>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                              <tr>
                                <td> Processor </td>
                                <td> Octa Cores </td>
                              </tr>

                              <tr>
                                <td> CPU Clock Frequency </td>
                                <td>
                                  {' '}
                                  2 Cores A78 2.4GHz / 6 Cores A55 2.0GHz{' '}
                                </td>
                              </tr>
                            </table>
                          </Grid>
                        </Grid>
                      </TabPanel>

                      <TabPanel value="3" className={`${styles['tabPanel']}`}>
                        <Grid
                          container
                          spacing={3}
                          className={styles.reviewTab}
                        >
                          <Grid
                            item
                            md={8}
                            xs={12}
                            className={`${styles['reviewTabSpace']} ${styles['customerReviewsBox']}`}
                          >
                            <Typography variant="h4">
                              Customer Reviews
                            </Typography>
                            <List>
                              <ListItem className={styles.reviewItem}>
                                <div className={styles.nameBadge}>
                                  <Typography variant="h5">RM</Typography>
                                </div>

                                <div className={styles.reviewSummry}>
                                  <Typography variant="h5">
                                    Rita Maria
                                  </Typography>
                                  <div className={styles.productReview}>
                                    <div className={styles.reviewStars}>
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon />
                                    </div>
                                    <Typography
                                      variant="h6"
                                      className={styles.status}
                                    >
                                      Excellent
                                    </Typography>

                                    <Typography variant="h6">
                                      12 April 2023
                                    </Typography>
                                  </div>
                                  <Typography variant="h6">
                                    All perfect. Trusted seller and good
                                    delivery service. Happy with my new phone.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmo tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minimo veniam, quis nostrud
                                    exercitation ullamco laboris nisi.
                                  </Typography>
                                </div>
                              </ListItem>

                              <ListItem className={styles.reviewItem}>
                                <div className={styles.nameBadge}>
                                  <Typography variant="h5">RM</Typography>
                                </div>

                                <div className={styles.reviewSummry}>
                                  <Typography variant="h5">
                                    Rita Maria
                                  </Typography>
                                  <div className={styles.productReview}>
                                    <div className={styles.reviewStars}>
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon />
                                    </div>
                                    <Typography
                                      variant="h6"
                                      className={styles.status}
                                    >
                                      Excellent
                                    </Typography>

                                    <Typography variant="h6">
                                      12 April 2023
                                    </Typography>
                                  </div>
                                  <Typography variant="h6">
                                    All perfect. Trusted seller and good
                                    delivery service. Happy with my new phone.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmo tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minimo veniam, quis nostrud
                                    exercitation ullamco laboris nisi.
                                  </Typography>
                                </div>
                              </ListItem>

                              <ListItem className={styles.reviewItem}>
                                <div className={styles.nameBadge}>
                                  <Typography variant="h5">RM</Typography>
                                </div>

                                <div className={styles.reviewSummry}>
                                  <Typography variant="h5">
                                    Rita Maria
                                  </Typography>
                                  <div className={styles.productReview}>
                                    <div className={styles.reviewStars}>
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon className={styles.active} />
                                      <StarRateIcon />
                                    </div>
                                    <Typography
                                      variant="h6"
                                      className={styles.status}
                                    >
                                      Excellent
                                    </Typography>

                                    <Typography variant="h6">
                                      12 April 2023
                                    </Typography>
                                  </div>
                                  <Typography variant="h6">
                                    All perfect. Trusted seller and good
                                    delivery service. Happy with my new phone.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmo tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minimo veniam, quis nostrud
                                    exercitation ullamco laboris nisi.
                                  </Typography>
                                </div>
                              </ListItem>
                            </List>
                          </Grid>

                          <Grid
                            item
                            md={4}
                            xs={12}
                            className={styles.reviewTabSpace}
                          >
                            <Typography variant="h4">
                              Rating based on Reviews
                            </Typography>
                            <div className={styles.productReview}>
                              <div className={styles.reviewStars}>
                                <StarRateIcon className={styles.active} />
                                <StarRateIcon className={styles.active} />
                                <StarRateIcon className={styles.active} />
                                <StarRateIcon className={styles.active} />
                                <StarRateIcon />
                              </div>

                              <Typography variant="h5">4.6 out of 5</Typography>
                            </div>

                            <div className={styles.reviewStatusBox}>
                              <List>
                                <ListItem className={styles.reviewStatus}>
                                  <Typography variant="h5">5 Star</Typography>
                                  <LinearProgress
                                    className={styles.fiveStarStatus}
                                    variant="determinate"
                                    value={83}
                                  />
                                  <Typography
                                    variant="h5"
                                    className={styles.fiveStatus}
                                  >
                                    83%
                                  </Typography>
                                </ListItem>

                                <ListItem className={styles.reviewStatus}>
                                  <Typography variant="h5">4 Star</Typography>
                                  <LinearProgress
                                    className={styles.fourStarStatus}
                                    variant="determinate"
                                    value={50}
                                  />
                                  <Typography
                                    variant="h5"
                                    className={styles.fourStatus}
                                  >
                                    50%
                                  </Typography>
                                </ListItem>

                                <ListItem className={styles.reviewStatus}>
                                  <Typography variant="h5">3 Star</Typography>
                                  <LinearProgress
                                    className={styles.threeStarStatus}
                                    variant="determinate"
                                    value={30}
                                  />
                                  <Typography
                                    variant="h5"
                                    className={styles.threeStatus}
                                  >
                                    30%
                                  </Typography>
                                </ListItem>

                                <ListItem className={styles.reviewStatus}>
                                  <Typography variant="h5">2 Star</Typography>
                                  <LinearProgress
                                    className={styles.twoStarStatus}
                                    variant="determinate"
                                    value={25}
                                  />
                                  <Typography
                                    variant="h5"
                                    className={styles.twoStatus}
                                  >
                                    25%
                                  </Typography>
                                </ListItem>

                                <ListItem className={styles.reviewStatus}>
                                  <Typography variant="h5">1 Star</Typography>
                                  <LinearProgress
                                    className={styles.oneStarStatus}
                                    variant="determinate"
                                    value={5}
                                  />
                                  <Typography
                                    variant="h5"
                                    className={styles.oneStatus}
                                  >
                                    5%
                                  </Typography>
                                </ListItem>
                              </List>
                            </div>
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </TabContext>
                  </Box>
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
