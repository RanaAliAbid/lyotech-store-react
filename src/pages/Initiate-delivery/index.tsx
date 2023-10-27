import * as React from 'react';
import { useRouter } from 'next/router';

import Header from '../../common/header';
import Footer from '../../common/footer';
import { List, ListItem, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';




import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';
import Link from 'next/link';
import productImg from '../../img/productImg.png';

const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';

export default function Presalepolicy() {


    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };


    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <main className={styles.main}>
                    <Header title={`Cart Items)`} />
                    <div className={styles.paddingTB60}>
                        <Container className={styles.containerBox}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className={styles.wrapTitle} >
                                        <Typography variant="h4"> Initiate delivery </Typography>

                                        <div className={`${styles['orderIDdetails']} `}>
                                            <Typography variant="h5">
                                                Order ID: #0297509
                                            </Typography>

                                            <Typography variant="body1">
                                                Placed on Jul 11, 2023
                                            </Typography>
                                        </div>
                                    </div>

                                    <div className={styles.initiateDeliveryBox}>
                                        <List className={`${styles.productsList} mb-1`}>
                                            <ListItem className={`${styles['wrapBox']} ${styles['productItem']}`}>
                                                <div className={`${styles['productImg']} ${styles['forDesktop']}`}>
                                                    <img
                                                        src={productImg.src}
                                                        alt="logo"
                                                        className="product_cart_image"
                                                    />
                                                </div>

                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div className={`${styles['productImg']} ${styles['forMobile']}`}>
                                                            <img
                                                                src={productImg.src}
                                                                alt="logo"
                                                                className="product_cart_image"
                                                            />
                                                        </div>
                                                        <div className={styles.productHead}>
                                                            <div>
                                                                <Typography
                                                                    variant="h4"
                                                                    className={styles.productitle}
                                                                >
                                                                    LFi ONE Smartphone
                                                                </Typography>

                                                                <Typography variant="body1">
                                                                    Model Name: LFI ONE
                                                                </Typography>
                                                            </div>
                                                            {/* <div className={`${styles['textRight']} ${styles['forDesktop']}`}>
                                                                <Typography variant="h5">
                                                                    Order ID: #0297509
                                                                </Typography>

                                                                <Typography variant="body1">
                                                                    Placed on Jul 11, 2023
                                                                </Typography>
                                                            </div> */}
                                                        </div>
                                                    </div>


                                                    <List className={styles.shipmentpWrapSec}>
                                                        <ListItem className={styles.item}>
                                                            <FormControl>
                                                                <Typography variant="h5">
                                                                    Self Pickup
                                                                </Typography>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    defaultValue="yes"
                                                                    name="radio-buttons-group"
                                                                >
                                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                                </RadioGroup>
                                                            </FormControl>

                                                        </ListItem>


                                                        <ListItem className={styles.item}>
                                                            <div>
                                                                <Typography variant="h5">
                                                                    Self-Pickup Store
                                                                </Typography>

                                                                <FormControl className={styles.formControl}>
                                                                    <Select
                                                                        className={styles.selectForm}
                                                                        value={age}
                                                                        onChange={handleChange}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <MenuItem value="">
                                                                            Dubai store 1
                                                                        </MenuItem>
                                                                        <MenuItem value={10}> Dubai store 2 </MenuItem>
                                                                        <MenuItem value={20}> Dubai store 3 </MenuItem>
                                                                        <MenuItem value={30}> Dubai store 4 </MenuItem>
                                                                    </Select>

                                                                </FormControl>
                                                            </div>
                                                        </ListItem>
                                                        <ListItem className={styles.item}>
                                                            
                                                            <div className={styles.fees}>
                                                                <Typography variant="body1">
                                                                    Self-Pickup Fee: &nbsp;
                                                                </Typography>
                                                                <Typography variant="h5">
                                                                    AED 40
                                                                </Typography>
                                                            </div>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </ListItem>

                                            <ListItem className={`${styles['wrapBox']} ${styles['productItem']}`}>
                                                <div className={`${styles['productImg']} ${styles['forDesktop']}`}>
                                                    <img
                                                        src={productImg.src}
                                                        alt="logo"
                                                        className="product_cart_image"
                                                    />
                                                </div>

                                                <div className={styles.productDetails}>
                                                    <div className={styles.productName}>
                                                        <div className={`${styles['productImg']} ${styles['forMobile']}`}>
                                                            <img
                                                                src={productImg.src}
                                                                alt="logo"
                                                                className="product_cart_image"
                                                            />
                                                        </div>
                                                        <div className={styles.productHead}>
                                                            <div>
                                                                <Typography
                                                                    variant="h4"
                                                                    className={styles.productitle}
                                                                >
                                                                    LFi ONE Smartphone
                                                                </Typography>

                                                                <Typography variant="body1">
                                                                    Model Name: LFI ONE
                                                                </Typography>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <List className={styles.shipmentpWrapSec}>
                                                        <ListItem className={styles.item}>
                                                            <FormControl>
                                                                <Typography variant="h5">
                                                                    Self Pickup
                                                                </Typography>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    defaultValue="no"
                                                                    name="radio-buttons-group"
                                                                >
                                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </ListItem>

                                                        <ListItem className={styles.item}>
                                                            <div>
                                                                <div className={styles.formControl}>
                                                                    <Typography variant="h5">
                                                                        Shipping Address
                                                                    </Typography>
                                                                    <Input
                                                                        className={styles.formInput}
                                                                        placeholder="City "
                                                                    />
                                                                </div>

                                                                <div className={styles.inlineForm}>
                                                                    <FormControl className={styles.formControl}>
                                                                        <label className={styles.formLabel}>
                                                                            Country
                                                                            {/* <span className="text-danger">*</span> */}
                                                                        </label>
                                                                        <Select
                                                                            className={styles.selectForm}
                                                                            value={age}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                Country 1
                                                                            </MenuItem>
                                                                            <MenuItem value={10}> Country 2 </MenuItem>
                                                                            <MenuItem value={20}> Country 3 </MenuItem>
                                                                            <MenuItem value={30}> Country 4 </MenuItem>
                                                                        </Select>

                                                                    </FormControl>

                                                                    <div className={styles.formControl}>
                                                                        <label className={styles.formLabel}>
                                                                            State
                                                                            {/* <span className="text-danger">*</span> */}
                                                                        </label>
                                                                        <Input
                                                                            className={styles.formInput}
                                                                            placeholder="State"
                                                                        />
                                                                    </div>

                                                                </div>

                                                                <div className={styles.formControl}>
                                                                    <label className={styles.formLabel}>
                                                                        Town / City
                                                                        {/* <span className="text-danger">*</span> */}
                                                                    </label>
                                                                    <Input
                                                                        className={styles.formInput}
                                                                        placeholder="City "
                                                                    />
                                                                </div>

                                                                <div className={styles.formControl}>
                                                                    <label className={styles.formLabel}>
                                                                        Pincode
                                                                        {/* <span className="text-danger">*</span> */}
                                                                    </label>
                                                                    <Input
                                                                        className={styles.formInput}
                                                                        placeholder="Pincode"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </ListItem>
                                                        <ListItem className={styles.item}>
                                                            <div className={styles.fees}>
                                                                <Typography variant="body1">
                                                                    Self-Pickup Fee: &nbsp;
                                                                </Typography>
                                                                <Typography variant="h5">
                                                                    AED 40
                                                                </Typography>
                                                            </div>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </ListItem>
                                        </List>
                                        <Grid container spacing={3} justifyContent="flex-end">
                                            <Grid item md={4} sm={6} xs={12}>
                                                <div className={`${styles.summaryDetails}`}>
                                                    <List>
                                                        <ListItem>
                                                            <Typography variant="h6">
                                                                Shipping Fee
                                                            </Typography>
                                                            <Typography variant="h6">
                                                                AED 40
                                                            </Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Typography variant="h6">
                                                            </Typography>
                                                            <Typography variant="h6">
                                                            </Typography>
                                                        </ListItem>

                                                        <ListItem className={styles.summaryfoot}>
                                                            <Typography variant="h5"> Total </Typography>
                                                            <Typography variant="h5"> AED 80.00 </Typography>
                                                        </ListItem>
                                                    </List>

                                                    <Button
                                                        variant="contained"
                                                        fullWidth
                                                        className={`${styles['btn']} ${styles['btn_primary']}`}
                                                    >
                                                        Proceed
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>


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

