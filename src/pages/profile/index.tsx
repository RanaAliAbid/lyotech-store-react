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
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import styles from '@/styles/Home.module.css';


import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });


import { createTheme, ThemeProvider } from '@mui/material';

export default function profile () {
    const theme = createTheme({
        typography: {
            fontFamily: [
            'Work Sans',            
            ].join(','),
        },
    });   
    
    
    const currencies = [
        {
          value: 'Eng',
          label: 'English',
        },
        {
          value: 'Fre',
          label: 'French',
        },
        {
          value: 'Ita',
          label: 'Italian',
        },
        {
          value: 'Spa',
          label: 'Spanish',
        },
      ];


return (
    <>
    <ThemeProvider theme={theme}>
        <main className={styles.main}>
           <Header title='Profile'/>
                <div className={styles.paddingTB60}>                
                    <Container className={styles.containerBox}>
                        <Grid container spacing={3}>
                            <Grid item md={3} xs={12} className={styles.sidebarGrid}> 
                                <Sidebar/>   
                            </Grid>

                            <Grid item md={9} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4" >
                                        Profile
                                    </Typography>
                                </div>     
                                <div className={`${styles["wrapBox"]} ${styles["profileSec"]}`}>
                                    <div className={styles.boxInfo}>
                                        <div className={styles.wrapSubTitle}>
                                            <Typography variant="h4" >
                                                General Info
                                            </Typography>
                                        </div> 

                                        <div className={styles.boxInfoBody}>                                        

                                        <div className={styles.inline}>
                                            <div className={styles.formControl}>    
                                                <label className={styles.formLabel}> First name </label>                                                
                                                <Input  className={styles.formInput} value="Keanu" />
                                            </div>

                                            <div className={styles.formControl}>    
                                                <label className={styles.formLabel}> Last name  </label>                                                
                                                <Input  className={styles.formInput} value="Reeves" /> 
                                            </div>
                                        </div>


                                        <div className={styles.inline}>
                                            <div className={styles.formControl}>    
                                                <label className={styles.formLabel}> Email Address </label>                                                
                                                <Input  className={styles.formInput} value="keanureeves@gmail.com" />
                                            </div>

                                            <div className={styles.formControl}>    
                                                <label className={styles.formLabel}> Mobile Number  </label>                                                
                                                <Input  className={styles.formInput} value="+971 58 149 5699" /> 
                                            </div>
                                        </div>

                                        <div className={styles.formControl}>    
                                            <label className={styles.formLabel}> Preferred language </label>
                                            <TextField
                                                className={styles.formTextField}
                                                id="filled-select-currency"
                                                select                                                
                                                defaultValue="Eng"                                                
                                                variant="outlined"
                                                >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                                
                                        </div>

                                        </div>
                                    </div>   
                                    <div className={styles.boxInfo}>
                                        <div className={styles.wrapSubTitle}>
                                            <Typography variant="h4" >
                                                Security
                                            </Typography>
                                        </div> 
                                        <div className={styles.boxInfoBody}>
                                            <div className={styles.formControl}>    
                                                <label className={styles.formLabel}> Old Password </label>                                                
                                                <Input  className={styles.formInput} placeholder="Enter old password" />
                                            </div>

                                            <div className={styles.inline}>
                                                <div className={styles.formControl}>    
                                                    <label className={styles.formLabel}> New Password </label>                                                
                                                    <Input  className={styles.formInput} placeholder="Password" />
                                                </div>

                                                <div className={styles.formControl}>    
                                                    <label className={styles.formLabel}> Confirm Password </label>                                                
                                                    <Input  className={styles.formInput} placeholder="Password" /> 
                                                </div>
                                            </div>
                                        </div>                         
                                    </div>                
                                    <Button variant="contained"  className={`${styles["btn"]} ${styles["btn_primary"]}`}> Update </Button>                       
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
