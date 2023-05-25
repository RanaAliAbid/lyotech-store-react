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
import Input from '@mui/material/Input';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'

import productImg from '../../img/productImg.png';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';

import { verifyUserHandover } from '@/components/auth/auth.service';

import useTranslation from 'next-translate/useTranslation';

// export const getServerSideProps: GetServerSideProps<{
//     data: AuthUser;
// }> = async () => {
//     const result = await getUserSession();

//     console.log(result, "saaaaaa xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//     const data = result?.data ?? null;
//     return { props: { data } };
// };


export default function cart({ }) {

    const { t } = useTranslation('cart');

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Work Sans',
            ].join(','),
        },
    });

    const router = useRouter()

    React.useEffect(() => {
        const urlParams = router.query

        if (urlParams && urlParams.product_id && urlParams.user_handover) {

            const user_handover = urlParams.user_handover.toString()
            const product_id = urlParams.product_id.toString()

            getUserCart(user_handover, parseInt(product_id))
        }
    }, [])

    const [shippingType, setShippingType] = React.useState<string>('express');

    const handleChangeShippingType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShippingType((event.target as HTMLInputElement).value);
    };

    const getUserCart = async (user_handover: string, product_id: number) => {
        const result = await verifyUserHandover({ user_handover: user_handover, product_id: product_id })
        console.log(result)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title='Cart' />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item md={8} xs={12}>
                                    <div className={styles.wrapTitle}>
                                        <Typography variant="h4" >
                                            {t("header1")}
                                        </Typography>

                                        <Typography variant="h6" >
                                            (3 {t("items")})
                                        </Typography>
                                    </div>
                                    <List className={styles.productsList}>
                                        <ListItem className={`${styles["wrapBox"]} ${styles["productItem"]}`}>
                                            <div className={`${styles["productImg"]} ${styles["forDesktop"]}`}>
                                                <img src={productImg.src} alt="logo" />
                                            </div>

                                            <div className={styles.productDetails}>
                                                <div className={styles.productName}>
                                                    <div className={`${styles["productImg"]} ${styles["forMobile"]}`}>
                                                        <img src={productImg.src} alt="logo" />
                                                    </div>
                                                    <div className={styles.productHead}>
                                                        <div>
                                                            <Typography variant="h4" className={styles.productitle}>
                                                                LFi ONE Smartphone
                                                            </Typography>

                                                            <Typography variant="body1">
                                                                {t("Model-Name")}: LFI ONE
                                                            </Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant="h3" className={styles.productPrice}>
                                                                $160.00
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Typography variant="h6" className={styles.productSummary}>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                </Typography>
                                                <Typography variant="h6">
                                                    <strong>
                                                        {t("product-delivery")}
                                                    </strong>
                                                </Typography>
                                                <List className={styles.productWrapSec}>
                                                    <ListItem className={styles.item}>
                                                        <Typography variant="h5">
                                                            {t("Quantity")}
                                                        </Typography>
                                                        <div className={styles.productQty}>
                                                            <div className={styles.qtyBtn}> <RemoveIcon /> </div>
                                                            <Input placeholder='0' className={styles.formControl} defaultValue="0" />
                                                            <div className={styles.qtyBtn}> <AddIcon /> </div>
                                                        </div>
                                                    </ListItem>

                                                    <ListItem className={styles.item}>
                                                        <Link href='#' className={styles.wishlist}>
                                                            <FavoriteBorderIcon />
                                                            <Typography variant="h6">
                                                                {t("Move-to-Wishlist")}
                                                            </Typography>
                                                        </Link>
                                                    </ListItem>

                                                    <ListItem className={styles.item}>
                                                        <Link href='#' className={styles.remove}>
                                                            <DeleteOutlineIcon />
                                                            <Typography variant="h6">
                                                                {t("Remove")}
                                                            </Typography>
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </ListItem>

                                    </List>

                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <div className={`${styles["wrapTitle"]} ${styles["orderSum"]}`}>
                                        <Typography variant="h4" >
                                            {t("header-summary")}
                                        </Typography>

                                        <Typography variant="h6" >
                                            Order ID: #0297509
                                        </Typography>
                                    </div>

                                    <div className={styles.wrapBox}>
                                        <div className={styles.summaryDetails}>
                                            <List>
                                                <ListItem className={styles.subTotal}>
                                                    <Typography variant="h6" >
                                                        {t("Subtotal")} (3 {t("items")})
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        $480.00
                                                    </Typography>
                                                </ListItem>

                                                <ListItem>
                                                    <Typography variant="h6" >
                                                        {t("Shipping")}
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        <Link>
                                                            Details
                                                        </Link>
                                                    </Typography>
                                                </ListItem>
                                            </List>

                                            <List className={styles.shippingType}>

                                                <RadioGroup
                                                    name="controlled-radio-buttons-group"
                                                    value={shippingType}
                                                    onChange={handleChangeShippingType}
                                                >
                                                    <ListItem className={`${shippingType === "express" ? styles.active : ""}`}>
                                                        <FormControlLabel value="express" control={<Radio size="small" checked={shippingType === "express"} />} label={t("Express-Saver")} />
                                                        <Typography variant="h6" >
                                                            102.35 €
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem className={`${shippingType === "local" ? styles.active : ""}`} >
                                                        <FormControlLabel value="local" control={<Radio size="small" checked={shippingType === "local"} />} label={t("Local-pickup")} />
                                                        <Typography variant="h6">
                                                            20.00 €
                                                        </Typography>
                                                    </ListItem>
                                                </RadioGroup>



                                            </List>

                                            <List>
                                                <ListItem>
                                                    <Typography variant="h6" >
                                                        {t("Membership-Fee")}
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        49.00 €
                                                    </Typography>
                                                </ListItem>

                                                <ListItem>
                                                    <Typography variant="h6" >
                                                        {t("VAT")} 5%
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        16.43 €
                                                    </Typography>
                                                </ListItem>

                                                <ListItem>
                                                    <Typography variant="h6" >
                                                        {t("Activation-Fee")}
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        13.50  €
                                                    </Typography>
                                                </ListItem>
                                            </List>

                                            <List>
                                                <ListItem>
                                                    <Typography variant="h6" >
                                                        {t("Payment-Processing-Fee")}
                                                    </Typography>
                                                    <Typography variant="h6" >
                                                        104.00 €
                                                    </Typography>
                                                </ListItem>
                                            </List>

                                            <List className={styles.policySummary}>
                                                <ListItem>
                                                    <div className={styles.allCenter}>
                                                        <Checkbox size="small" defaultChecked />
                                                        <Typography variant="h5" >
                                                            {t("One-Care-Policy")}
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="h6" >
                                                        150.00 €
                                                    </Typography>
                                                </ListItem>
                                            </List>

                                            <List>
                                                <ListItem className={styles.summaryfoot}>
                                                    <Typography variant="h5" >
                                                        {t("Total")}
                                                    </Typography>
                                                    <Typography variant="h5" >
                                                        579.18 €
                                                    </Typography>
                                                </ListItem>
                                            </List>
                                        </div>
                                        <Button variant="contained" fullWidth className={`${styles["btn"]} ${styles["btn_primary"]}`} >{t("Checkout-btn")}</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>

                    </div>

                    <Footer />
                </main>
            </ThemeProvider>
        </>
    )
}
