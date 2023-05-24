import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Link from '@mui/material/Link';

import darkLogo from '../img/dark-logo.png';


import styles from '@/styles/Home.module.css'

export default function Footer() {
    
  return (
    <>    
    <div className={styles.footer}>    
        <Container className={styles.containerBox} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item md={3} xs={12}>
                    <div className={styles.footBox}>
                        <img src={darkLogo.src} alt="logo" />
                        <Typography variant="h5" >
                            Lyotech labs electronics trading l.L.C    
                        </Typography>
                    </div>                   
                </Grid>

                <Grid item md={3} xs={12}>
                    <div className={styles.footBox}>
                        <Typography variant="h4" >
                            Products    
                        </Typography>

                        <List>
                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Privacy & Cookies Policy
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Terms
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Legal
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Customer Support
                                </Link> 
                            </ListItem>
                        </List>
                    </div>
                </Grid>

                <Grid item md={3} xs={12}>
                <div className={styles.footBox}>
                        <Typography variant="h4" >
                        Information
                        </Typography>

                        <List>
                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Privacy & Cookies Policy
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Terms
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Legal
                                </Link> 
                            </ListItem>

                            <ListItem className={styles.item}>
                                <Link href="#">
                                    Customer Support
                                </Link> 
                            </ListItem>
                        </List>
                    </div>
                </Grid>

                <Grid item md={3} xs={12}>
                    <div className={styles.footBox}>
                        <Typography variant="h4" >
                            Talk To Us    
                        </Typography>

                        <Typography variant="h5" >
                            If you have any question. please contact us  <Link href="#"> demo@example.com  </Link>  
                        </Typography>
                    </div>

                    <div className={styles.footBox}>                    
                        <Typography variant="h4" >
                            Address   
                        </Typography>

                        <Typography variant="h5" >
                            WHP2-BLOCK-T, 
                            Commercial Area: Saih Shuaib 3,
                            Dubai, UAE
                        </Typography>

                    </div>
                </Grid>
            </Grid>
        </Container>

        <Container className={styles.containerBox} maxWidth="lg">
            <Grid container>
                <Grid item xs={12} className={styles.copyright}>
                    <Typography variant="h5">
                        © Copyright 2023. All Rights Reserved by LYOTECH
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
    </>
  )


}
