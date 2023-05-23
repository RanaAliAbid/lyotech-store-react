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
import Link from '@mui/material/Link';
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

import productImg from '../img/productImg.png';


import styles from '@/styles/Home.module.css'

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const accountOpen = Boolean(anchorEl);   

    const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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


    
  return (
    <>    
        <AppBar position="static" className={styles.header}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>                 
                <Link href='/' className={styles.logo}> <img src={logo.src} alt="logo" /> </Link>               

                <List className={styles.headMenu}>
                    <ListItem>  
                        <Link variant="h5"> Services </Link>
                    </ListItem>  
                    <ListItem>  
                        <Link variant="h5"> Devices </Link>
                    </ListItem>  
                    <ListItem>  
                        <Link variant="h5"> Co-Products </Link>
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
                    <AccountIcon/>
                    My Account
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
                        <Link href='allorders'> <OrderIcon/> All Orders </Link>
                    </MenuItem>
                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='wishlist'> <WishlistIcon/>  Wishlist </Link>
                    </MenuItem>
                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='trackorder'> <TrackOrderIcon/> Track Order </Link>
                    </MenuItem>
                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='addresses'> <MapIcon/> Addresses </Link>
                    </MenuItem>
                    
                    
                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='payments'> <Payments/> Payments </Link>
                    </MenuItem>

                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='profile'> <UserIcon/> Profile </Link>
                    </MenuItem>

                    <MenuItem onClick={handleAccountClose}> 
                        <Link href='preferences'> <PreferencesIcon/> Preferences </Link>
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
                    <CartIcon/>
                    Cart
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
                                    $160.00 
                                </Typography>                                                                                                                
                            </div>
                            <CloseIcon/>
                        </ListItem>    

                        <ListItem className={styles.productItem}>
                            <div className={styles.productImg}>
                                <img src={productImg.src} alt="logo" />
                            </div>
                            <div className={styles.productHead}>                                                                                        
                                <Typography variant="h5" className={styles.productitle}>
                                    LFi ONE Smartphone
                                </Typography>
                                                                      
                                <Typography variant="h6" className={styles.productPrice}>
                                    $160.00 
                                </Typography>                                                                                                                
                            </div>
                            <CloseIcon/>
                        </ListItem>    

                        <ListItem className={styles.productItem}>
                            <div className={styles.productImg}>
                                <img src={productImg.src} alt="logo" />
                            </div>
                            <div className={styles.productHead}>                                                                                        
                                <Typography variant="h5" className={styles.productitle}>
                                    LFi ONE Smartphone
                                </Typography>
                                                                      
                                <Typography variant="h6" className={styles.productPrice}>
                                    $160.00 
                                </Typography>                                                                                                                
                            </div>
                            <CloseIcon/>
                        </ListItem>    
                    </List>
                </div> 

                <div className={styles.productSubTotal}>
                    <Typography variant="h5" className={styles.productitle}>
                        SubTotal
                    </Typography>
                                                            
                    <Typography variant="h6" className={styles.productPrice}>
                        $480.00 
                    </Typography>
                </div>   

                <Button variant="outlined" href="cart" className={`${styles["btn"]} ${styles["btn_secondary"]}`} > 
                    View Cart 
                </Button>
                <Button variant="contained" href="checkout" className={`${styles["btn"]} ${styles["btn_primary"]}`} > 
                    Checkout Now
                </Button>  
                    
                </Menu>
                </div>
              
                

                </Toolbar>
            </Container>
        </AppBar>
    </>
  )


}
