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
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { List, ListItem, ListItemText } from '@mui/material';
import productImg from '../../img/productImg.png';


import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider } from '@mui/material';


export default function OrderDetails() {

	const theme = createTheme({
		typography: {
			fontFamily: ['Work Sans'].join(','),
		},
	});




	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};


	return (
		<>
			<ThemeProvider theme={theme}>
				<main className={styles.main}>
					<Header title='trackorder-header' />
					<div className={styles.paddingTB60}>
						<Container className={styles.containerBox}>
							<Grid container spacing={3}>
								<Grid item md={3} xs={12} className={styles.sidebarGrid}>
									<Sidebar />
								</Grid>

								<Grid item md={9} xs={12} className={styles.trackOrder}>
									<div className={styles.wrapTitle}>
										<Typography variant="h4">
											Track Order
										</Typography>
									</div>
									<div className={styles.wrapBox}>
										<div className={`${styles['wrapSubTitle']} ${styles['dflex']}`}>
											<div>
												<Typography variant="h4">Order Details #256-1732169-5273</Typography>
												<Typography variant="body1"> Placed on 24 Nov 2022 </Typography>
											</div>
											<div className={styles.status}>
												<Chip className={styles.chip} label="Shipping" />
											</div>
										</div>

										<div className={styles.trackStepper}>
											<Stepper activeStep={1} alternativeLabel className={styles.alternativeLabel}>
												<Step className={styles.firstStep}>
													<StepLabel>Order  Confirmed</StepLabel>
													<Typography variant="body1">  2022 </Typography>
												</Step>

												<Step className={styles.secondStep}>
													<StepLabel>Order  Confirmed</StepLabel>
													<Typography variant="body1">  2022 </Typography>
												</Step>

												<Step className={styles.thrirdStep}>
													<StepLabel>Order  Confirmed</StepLabel>
													<Typography variant="body1">  2022 </Typography>
												</Step>
											</Stepper>
										</div>

										<div>
											<Grid container spacing={3}>
												<Grid item md={6} xs={12}>
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
												</Grid>
												<Grid item md={6} xs={12}>
													<div className={styles.ordersList}>
														<div className={styles.orderHead}>
															<Typography variant="h5">
																Delivery address
															</Typography>
														</div>
														<div className={styles.orderBody}>

															<div className={styles.addresses}>
																<Typography variant="body1">
																	51 A Wittenoon Street, <br />
																	n/a BOULDER AU <br />
																	+971-58-1234659 <br />
																</Typography>
															</div>
														</div>
													</div>
												</Grid>
											</Grid>
										</div>

										<div className={styles.trackBtnLink}>
											<Typography variant="h5">
												You can check your shipment's current status by simply clicking the button.
											</Typography>
											<Button variant="contained" className={`${styles['btn']} ${styles['btn_primary']}`}>Track Now</Button>
										</div>


										<div>
											<div className={styles.wrapTitle}>
												<Typography variant="h4">
													Item Ordered
												</Typography>
											</div>

											<div className={styles.initiateDeliveryBox}>
												<div className={styles.grayBox}>
													<div className={`${styles.productsList} mb-1`}>
														<div className={`${styles['wrapBox']} ${styles['productItem']}`}>
															<div className={styles.product}>
																<div className={`${styles['productImg']}`}>
																	<img
																		src={productImg.src}
																		alt="logo"
																		className="product_cart_image"
																	/>
																</div>
																<div>
																	<Typography
																		variant="h5"
																		className={styles.productitle}
																	>
																		L ONE Phone
																	</Typography>

																	<Typography variant="body1">
																		Model Name: L ONE 
																	</Typography>
																</div>
															</div>
														</div>

														<div>
															<Typography variant="body1">
																Category: Phone
															</Typography>
														</div>

														<div>
															<Typography variant="body1">
																Quantity: 1
															</Typography>
														</div>

														<div>
															<Typography variant="body1">
																AED 1000.00
															</Typography>
														</div>


													</div>


													<Grid container spacing={3} justifyContent="flex-end">
														<Grid item md={5} sm={6} xs={12}>
															<div className={`${styles.summaryDetails}`}>
																<List>
																	<ListItem>
																		<Typography variant="h6">
																			Subtotal
																		</Typography>
																		<Typography variant="h6">
																			AED 1000.00
																		</Typography>
																	</ListItem>
																	<ListItem>
																		<Typography variant="h6">
																			Shipping Fee
																		</Typography>
																		<Typography variant="h6">
																			AED 40.00
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
																		<Typography variant="h5"> AED 1040.00 </Typography>
																	</ListItem>
																</List>

															</div>
														</Grid>
													</Grid>

												</div>
											</div>
										</div>

									</div>


									<div className={styles.wrapBox}>
										<div className={`${styles['wrapSubTitle']} ${styles['dflex']}`}>
											<div>
												<Typography variant="h4">Order Details #256-1732169-5273</Typography>
												<Typography variant="body1"> Placed on 24 Nov 2022 </Typography>
											</div>

										</div>

										<div className={styles.wrapTitle}>
											<Typography variant="h4">
												Item Ordered
											</Typography>
										</div>

										<div className={styles.initiateDeliveryBox}>
											<div className={styles.grayBox}>
												<Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
													<AccordionSummary className={styles.accordionSummary}
														expandIcon={<ExpandMoreIcon />}
														aria-controls="panel1bh-content"
														id="panel1bh-header"
													>
														<div className={`${styles.productsList} mb-1`}>
															<div className={`${styles['wrapBox']} ${styles['productItem']}`}>
																<div className={styles.product}>
																	<div className={`${styles['productImg']}`}>
																		<img
																			src={productImg.src}
																			alt="logo"
																			className="product_cart_image"
																		/>
																	</div>
																	<div>
																		<Typography
																			variant="h5"
																			className={styles.productitle}
																		>
																			L ONE Phone
																		</Typography>

																		<Typography variant="body1">
																			Model Name: L ONE 
																		</Typography>
																		<div className={styles.status}>
																			<Chip className={styles.chip} label="Shipping" />
																		</div>
																	</div>
																</div>
															</div>

															<div>
																<Typography variant="body1">
																	Category: Phone
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	Quantity: 1
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	AED 1000.00
																</Typography>
															</div>
														</div>
													</AccordionSummary>
													<AccordionDetails className={styles.accordionDetails}>
														<div className={styles.trackStepper}>
															<Stepper activeStep={1} alternativeLabel className={styles.alternativeLabel}>
																<Step className={styles.firstStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.secondStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.thrirdStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>
															</Stepper>
														</div>

														<div>
															<Grid container spacing={3}>
																<Grid item md={6} xs={12} >
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
																</Grid>
																<Grid item md={6} xs={12}>
																	<div className={styles.ordersList}>
																		<div className={styles.orderHead}>
																			<Typography variant="h5">
																				Delivery address
																			</Typography>
																		</div>
																		<div className={styles.orderBody}>

																			<div className={styles.addresses}>
																				<Typography variant="body1">
																					51 A Wittenoon Street, <br />
																					n/a BOULDER AU <br />
																					+971-58-1234659 <br />
																				</Typography>
																			</div>
																		</div>
																	</div>
																</Grid>
															</Grid>
														</div>

														<div className={styles.trackBtnLink}>
															<Typography variant="h5">
																You can check your shipment's current status by simply clicking the button.
															</Typography>
															<Button variant="contained" className={`${styles['btn']} ${styles['btn_primary']}`}>Track Now</Button>
														</div>
													</AccordionDetails>
												</Accordion>
											</div>

											<div className={styles.grayBox}>
												<Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
													<AccordionSummary className={styles.accordionSummary}
														expandIcon={<ExpandMoreIcon />}
														aria-controls="panel1bh-content"
														id="panel1bh-header"
													>
														<div className={`${styles.productsList} mb-1`}>
															<div className={`${styles['wrapBox']} ${styles['productItem']}`}>
																<div className={styles.product}>
																	<div className={`${styles['productImg']}`}>
																		<img
																			src={productImg.src}
																			alt="logo"
																			className="product_cart_image"
																		/>
																	</div>
																	<div>
																		<Typography
																			variant="h5"
																			className={styles.productitle}
																		>
																			L ONE Phone
																		</Typography>

																		<Typography variant="body1">
																			Model Name: L ONE 
																		</Typography>

																		<div className={styles.status}>
																			<Chip className={styles.chip} label="Shipping" />
																		</div>
																	</div>
																</div>
															</div>

															<div>
																<Typography variant="body1">
																	Category: Phone
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	Quantity: 1
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	AED 1000.00
																</Typography>
															</div>
														</div>
													</AccordionSummary>
													<AccordionDetails className={styles.accordionDetails}>
														<div className={styles.trackStepper}>
															<Stepper activeStep={1} alternativeLabel className={styles.alternativeLabel}>
																<Step className={styles.firstStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.secondStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.thrirdStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>
															</Stepper>
														</div>

														<div>
															<Grid container spacing={3}>
																<Grid item md={6} xs={12} >
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
																</Grid>
																<Grid item md={6} xs={12}>
																	<div className={styles.ordersList}>
																		<div className={styles.orderHead}>
																			<Typography variant="h5">
																				Delivery address
																			</Typography>
																		</div>
																		<div className={styles.orderBody}>

																			<div className={styles.addresses}>
																				<Typography variant="body1">
																					51 A Wittenoon Street, <br />
																					n/a BOULDER AU <br />
																					+971-58-1234659 <br />
																				</Typography>
																			</div>
																		</div>
																	</div>
																</Grid>
															</Grid>
														</div>

														<div className={styles.trackBtnLink}>
															<Typography variant="h5">
																You can check your shipment's current status by simply clicking the button.
															</Typography>
															<Button variant="contained" className={`${styles['btn']} ${styles['btn_primary']}`}>Track Now</Button>
														</div>
													</AccordionDetails>
												</Accordion>
											</div>


											<div className={styles.grayBox}>
												<Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
													<AccordionSummary className={styles.accordionSummary}
														expandIcon={<ExpandMoreIcon />}
														aria-controls="panel1bh-content"
														id="panel1bh-header"
													>
														<div className={`${styles.productsList} mb-1`}>
															<div className={`${styles['wrapBox']} ${styles['productItem']}`}>
																<div className={styles.product}>
																	<div className={`${styles['productImg']}`}>
																		<img
																			src={productImg.src}
																			alt="logo"
																			className="product_cart_image"
																		/>
																	</div>
																	<div>
																		<Typography
																			variant="h5"
																			className={styles.productitle}
																		>
																			L ONE Phone
																		</Typography>

																		<Typography variant="body1">
																			Model Name: L ONE 
																		</Typography>
																		<div className={styles.status}>
																			<Chip className={styles.chip} label="Shipping" />
																		</div>
																	</div>
																</div>
															</div>

															<div>
																<Typography variant="body1">
																	Category: Phone
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	Quantity: 1
																</Typography>
															</div>

															<div>
																<Typography variant="body1">
																	AED 1000.00
																</Typography>
															</div>
														</div>
													</AccordionSummary>
													<AccordionDetails className={styles.accordionDetails}>
														<div className={styles.trackStepper}>
															<Stepper activeStep={1} alternativeLabel className={styles.alternativeLabel}>
																<Step className={styles.firstStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.secondStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>

																<Step className={styles.thrirdStep}>
																	<StepLabel>Order  Confirmed</StepLabel>
																	<Typography variant="body1">  2022 </Typography>
																</Step>
															</Stepper>
														</div>

														<div>
															<Grid container spacing={3}>
																<Grid item md={6} xs={12} >
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
																</Grid>
																<Grid item md={6} xs={12}>
																	<div className={styles.ordersList}>
																		<div className={styles.orderHead}>
																			<Typography variant="h5">
																				Delivery address
																			</Typography>
																		</div>
																		<div className={styles.orderBody}>

																			<div className={styles.addresses}>
																				<Typography variant="body1">
																					51 A Wittenoon Street, <br />
																					n/a BOULDER AU <br />
																					+971-58-1234659 <br />
																				</Typography>
																			</div>
																		</div>
																	</div>
																</Grid>
															</Grid>
														</div>

														<div className={styles.trackBtnLink}>
															<Typography variant="h5">
																You can check your shipment's current status by simply clicking the button.
															</Typography>
															<Button variant="contained" className={`${styles['btn']} ${styles['btn_primary']}`}>Track Now</Button>
														</div>
													</AccordionDetails>
												</Accordion>
											</div>


											<Grid container spacing={3} justifyContent="flex-end">
												<Grid item md={5} sm={6} xs={12}>
													<div className={`${styles.summaryDetails}`}>
														<List>
															<ListItem>
																<Typography variant="h6">
																	Subtotal
																</Typography>
																<Typography variant="h6">
																	AED 1000.00
																</Typography>
															</ListItem>
															<ListItem>
																<Typography variant="h6">
																	Shipping Fee
																</Typography>
																<Typography variant="h6">
																	AED 40.00
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
																<Typography variant="h5"> AED 1040.00 </Typography>
															</ListItem>
														</List>

													</div>
												</Grid>
											</Grid>
										</div>


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
