import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../img/lyotech-logo.png';

import OrderIcon from '../img/orderIcon.svg';
import WishlistIcon from '../img/wishlistIcon.svg';
import MapIcon from '../img/mapIcon.svg';
import PreferencesIcon from '../img/preferencesIcon.svg';
import TrackOrderIcon from '../img/trackOrderIcon.svg';
import UserIcon from '../img/userIcon.svg';
import AccountIcon from '../img/accountIcon.svg';
import CartIcon from '../img/cartIcon.svg';
import Payments from '../img/digitalpayments.svg';
import bannerProduct from '../img/bannerProduct.png';

import productImg from '../img/productImg.png';

import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/GlobalContext';
import useTranslation from 'next-translate/useTranslation';

export default function Header({ title = "Home"}: { title: string}) {

    const authContext = useAuthContext();
    const globalContext = useGlobalContext();

    const { t } = useTranslation('common');

    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const accountOpen = Boolean(anchorEl);

    const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(authContext.userData.id == 0 || authContext.userData.authToken == "") {
            router.push(`/${locale}/auth/signin`)
            return;
        }
        setAnchorEl(event.currentTarget);
    };
    const handleAccountClose = () => {
        setAnchorEl(null);
    };

    const [anchorCart, setAnchorCart] = React.useState<null | HTMLElement>(null);
    const cartOpen = Boolean(anchorCart);

    const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorCart(event.currentTarget);
    };

    const handleCartClose = () => {
        setAnchorCart(null);
    };

    const [anchorLang, setAnchorLang] = React.useState<null | HTMLElement>(null);
    const langOpen = Boolean(anchorLang);

    const handleLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorLang(event.currentTarget);
    };

    const handleLangClose = () => {
        setAnchorLang(null);
    };
    
    React.useEffect(() => {
        globalContext.updateLocale(locale)
    }, [locale])

    const siteDescription = "LYOTECH LABS is an R&D company that works on the development of software and hardware products including mobile phones, tablets, laptops and smart watches. Our goal is giving best our customers in technologys"

    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

    return (
        <>
            <Head>
                <title>LYOTECH Labs || {title}</title>
                <meta name="description" content={siteDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="shortcut icon" href="/logo.png" type="image/png" />
                <meta name="description" content={siteDescription} />
                <meta property="og:image" content={bannerProduct.src} />
                <meta property="og:image:secure_url" content={bannerProduct.src} />
                <meta name="keywords" content="LYOTECH LABS, Phone, SmartPhone, Tablet, VPS, Cloud, Hardware" />
                <meta property="og:title" content={`LYOTECH Labs || ${title ?? "Home"}`} />
                <meta property="og:site_name" content="LYOTECH LABS" />
                <meta property="og:url" content="https://lyotechlabs.com" />
                <meta property="og:description" content={siteDescription} />
                <meta name="twitter:title" content={`LYOTECH Labs || ${title ?? "Home"}`} />
                <meta name="twitter:site" content="LYOTECH LABS" />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={bannerProduct.src} />
            </Head>

            <AppBar position="static" className={styles.header}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>

                        <Link href={`/${locale}`} className={styles.logo}> <img src={logo.src} alt="logo" /> </Link>

                        <List className={styles.headMenu}>
                            <ListItem>
                                <Link href={"#"} > {t("Services")} </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={"#"}> {t("Devices")} </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={"#"} > {t("Co-Products")} </Link>
                            </ListItem>
                        </List>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={accountOpen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={accountOpen ? 'true' : undefined}
                                onClick={handleAccountClick}
                                variant="text"
                                className={styles.myAccount}
                            >
                                <AccountIcon />
                                 {t("MyAccount")}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={accountOpen}
                                onClose={handleAccountClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                className={styles.myAccountMenu}
                            >
                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}/orders`}> <><OrderIcon /> {t("All-Orders")} </> </Link>
                                </MenuItem>
                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}/wishlist`}> <><WishlistIcon />  {t("Wishlist")} </> </Link>
                                </MenuItem>
                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}/trackorder`}> <><TrackOrderIcon /> {t("Track-Order")} </> </Link>
                                </MenuItem>
                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}/addresses`}> <><MapIcon /> {t("Addresses")} </> </Link>
                                </MenuItem>
                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}/profile`}> <><UserIcon /> {t("Profile")} </> </Link>
                                </MenuItem>

                                <MenuItem onClick={handleAccountClose}>
                                    <Link href={`/${locale}`}> <><PreferencesIcon /> {t("Preferences")}</> </Link>
                                </MenuItem>
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={cartOpen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={cartOpen ? 'true' : undefined}
                                onClick={handleCartClick}
                                variant="text"
                                className={styles.myAccount}
                            >
                                <CartIcon />
                                {t("Cart")}
                                <span className={styles.badge}>9</span>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorCart}
                                open={cartOpen}
                                onClose={handleCartClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                className={styles.myCartMenu}
                            >

                                <div>
                                    <List className={styles.productsList}>

                                        <ListItem className={styles.productItem}>
                                            <div className={styles.productImg}>
                                                <img src={productImg.src} alt="logo" />
                                            </div>
                                            <div className={styles.productHead}>
                                                <Typography variant="h5" className={styles.productitle}>
                                                    LFi ONE Smart phone LFi ONE Smartphone
                                                </Typography>

                                                <Typography variant="h6" className={styles.productPrice}>
                                                    160.00 €
                                                </Typography>
                                            </div>
                                            <CloseIcon />
                                        </ListItem>

                                    </List>
                                </div>

                                <div className={styles.productSubTotal}>
                                    <Typography variant="h5" className={styles.productitle}>
                                        {t("SubTotal")}
                                    </Typography>

                                    <Typography variant="h6" className={styles.productPrice}>
                                        160.00 €
                                    </Typography>
                                </div>

                                <Button variant="outlined" href={`/${locale}/cart`} className={`${styles["btn"]} ${styles["btn_secondary"]}`} >
                                    {t("view-cart-btn")}
                                </Button>
                                <Button variant="contained" href={`/${locale}/checkout`} className={`${styles["btn"]} ${styles["btn_primary"]}`} >
                                    {t("checkout-btn")}
                                </Button>

                            </Menu>
                        </div>


                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={langOpen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={langOpen ? 'true' : undefined}
                                onClick={handleLangClick}
                                variant="text"
                                className={styles.myAccount}
                            >
                                <span className='flag-img-main'><Image alt='' src={`/flags/${locale}.png`} width={20} height={20}/></span>
                                {locale}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorLang}
                                open={langOpen}
                                onClose={handleLangClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                className={styles.myAccountMenu}
                            >
                                <MenuItem onClick={handleLangClose}>
                                    <Link href={``} locale="en"> <><span className='flag-img'><Image alt='' src={`/flags/en.png`} width={20} height={20}/></span> English</> </Link>
                                </MenuItem>
                                <MenuItem onClick={handleLangClose}>
                                    <Link href={``} locale="it"> <><span className='flag-img'><Image alt='' src={`/flags/it.png`} width={20} height={20}/></span>  Italian</> </Link>
                                </MenuItem>
                            </Menu>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )


}
