import * as React from 'react';
import Head from 'next/head';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import lyoMC from '../../img/lyomerchant.png';
import usdtCoin from '../../img/theter_trc.png';
import creditCard from '../../img/creaditCard.png';


import styles from '@/styles/Home.module.css';


import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });


import { createTheme, ThemeProvider } from '@mui/material';

export default function payments () {
    const theme = createTheme({
        typography: {
            fontFamily: [
            'Work Sans',            
            ].join(','),
        },
    });      


return (
    <>
    <ThemeProvider theme={theme}>
        <main className={styles.main}>
           <Header title='Payments'/>
                <div className={styles.paddingTB60}>                
                    <Container className={styles.containerBox}>
                        <Grid container spacing={3}>
                            <Grid item md={3} xs={12} className={styles.sidebarGrid}>                               
                                <Sidebar/>    
                            </Grid>

                            <Grid item md={9} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4" >
                                        Payments options
                                    </Typography>
                                </div>     
                                <div className={`${styles["wrapBox"]} ${styles["paymentSection"]}`}> 

                                    <div className={styles.boxInfo}>
                                        <div className={styles.wrapSubTitle}>
                                            <Typography variant="h4" >
                                            Pay with Your Digital Currencies
                                            </Typography>

                                            <div className={styles.paymentLogo}>
                                                <img src={lyoMC.src} alt="" />
                                                <img src={usdtCoin.src} alt="" />
                                            </div>                                             
                                        </div> 

                                        <div className={styles.boxInfoBody}>                                        
                                            <List>
                                                <ListItem>                                                    
                                                        Enjoy the flexibility of using various crypto currencies for payments.                                                              
                                                </ListItem>
                                                <ListItem>
                                                    Benefit from the robust security features provided by blockchain technology.                                                    
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Maintain your privacy while making payments with crypto currencies.
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Conduct seamless transactions worldwide without the need for currency conversion.                                  
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Often, crypto transactions involve lower fees compared to traditional payment methods.
                                                </ListItem>                                                
                                            </List>
                                        </div>
                                    </div> 



                                    <div className={styles.boxInfo}>
                                        <div className={styles.wrapSubTitle}>
                                            <Typography variant="h4" >
                                                Pay with Ease using Debit/Credit Cards
                                            </Typography> 

                                            <div className={styles.paymentLogo}>
                                                <img src={creditCard.src} alt="" />
                                            </div>                                            
                                        </div> 

                                        <div className={styles.boxInfoBody}>                                        
                                            <List>
                                                <ListItem>
                                                    Debit/credit cards are accepted by a vast majority of merchants and service providers globally.
                                                </ListItem>
                                                <ListItem>
                                                    With a simple swipe or tap, complete your transactions swiftly, saving time at checkout.                                                 
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Leverage the robust security measures of card issuers to safeguard your financial transactions.
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Debit/credit cards are widely accepted for online purchases.                                                  
                                                </ListItem>

                                                <ListItem>                                                    
                                                    Enjoy the convenience of making payments using your debit/credit card, eliminating using alternative payment methods.
                                                </ListItem>                                                
                                            </List>                             
                                        </div>
                                    </div> 
                                </div>           
                            </Grid> 
                        </Grid>
                    </Container>

                </div>

          

            
            <Footer/>
        </main>
    </ThemeProvider>
    </>
  )
}
