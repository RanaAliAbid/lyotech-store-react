import * as React from 'react';
import Header from '../../../common/header';
import Footer from '../../../common/footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import { useGlobalContext } from '@/contexts/GlobalContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import { getProductById } from '@/services/products/product.service';
import ProductImagesComponent from '@/components/product/productImages.component';

export default function ProductDetails() {

  const router = useRouter();
  const globalContext = useGlobalContext();
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });
  const [product, setProduct] = React.useState<any>({})
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [specificationFound, setSpecificationFound] =
    React.useState<boolean>(false);


  React.useEffect(() => {
    getProductDetails()
  }, [])

  React.useEffect(() => {
    if (
      product?.details?.specifications?.findIndex(
        (specification: any) =>
          specification?.exposed == false || !specification?.exposed,
      ) !== -1
    ) {
      setSpecificationFound(true);
    }
  }, []);

  const getProductDetails = async () => {
    try {
      globalContext.setGlobalLoading(true);

      if (!router.query?.slug) return;

      const id: any = router.query.slug
      const res = await getProductById(id)
      if (res) {
        globalContext.setGlobalLoading(false);
        setProduct(res?.data?.data)
        console.log("🚀 ~ file: index.tsx:69 ~ getProductDetails ~ (res?.data?.data:",res?.data?.data?.details?.specifications[0]);
        
      }
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }

  }

  const addProductToCart = async (id: string) => {

    // globalContext.setAlertProps({
    //   show: true,
    //   title: 'Under Maintenance...',
    //   text: '',
    //   toast: true,
    //   background: '#8B0000',
    //   showConfirmButton: false,
    //   timerProgressBar: true,
    //   callback: globalContext.closeAlert,
    // });

    // return;

    try {
      await globalContext.addCart(id, 1);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={`Product || ${product ? product?.name : ""}`} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12} direction="column">
                  <ProductImagesComponent product={product} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <div className={styles.productDetails}>
                    <Typography variant="h2" className={styles.productName}>
                      {product?.name}
                    </Typography>

                    <Typography variant="h3" className={styles.productPrice}>
                      {(product?.price * globalContext.conversionRate).toFixed(2)} {globalContext.currencySymbol}
                    </Typography>

                    <Typography variant="h5" className={styles.productSummary}>
                      <div dangerouslySetInnerHTML={{ __html: product?.details?.description }}></div>
                    </Typography>


                 
                      <>
                        <Typography variant="h4">
                          <strong>Features: </strong>
                        </Typography>
                        <Grid item xs={12}>
                          <div className='d-flex'>
                            <List className='feature-list'>
                              {product?.details?.specifications.map(
                                (
                                  specification: any,
                                  index: number,
                                ) =>
                                
                                    <ListItem
                                      key={
                                        index
                                      }
                                    >
                                      <CheckCircleOutlineIcon />
                                      <Typography variant="body1">
                                        {
                                          specification?.value
                                        }
                                      </Typography>
                                    </ListItem >
                                  
                              )}

                            </List>
                          </div>

                        </Grid>
                      </>
                  

                    {/* <div className={styles.orderInfoSec}>
                      <div className={styles.icon}>
                        <img src={truck.src} alt="logo" />
                      </div>

                     
                    </div>

                    <div className={styles.categoryInfo}>
                      <Typography variant="h5">Category: {product?.category?.name}</Typography>

                    </div> */}

                    <Button
                      onClick={(e) => addProductToCart(product?._id)}
                      variant="contained"
                      className={`${styles['btn']} ${styles['btn_primary']} mt-3`}
                    >
                      Add To Cart
                    </Button>
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
