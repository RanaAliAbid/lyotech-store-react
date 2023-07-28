import Header from '../../common/header';
import Footer from '../../common/footer';
import { List, ListItem, ListItemText } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';


const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';

export default function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Work Sans'].join(','),
        },
    });

    return (
        <>
            <div>
                <ThemeProvider theme={theme}>
                    <main className={styles.main}>
                        <Header title="Home" />

                        {/* Banner Section Start */}
                        <div className={`${styles['aboutUs']} ${styles['infoBannerWrap']}`}>
                            <div className={`${styles['infoBanner']}`}>
                                <Container className={styles.containerBox}>
                                    <Grid container spacing={3} className={styles.bannerWrap}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h1" className={styles.bannerHD}>
                                                About Us
                                            </Typography>

                                            
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                        {/* Banner Section End */}


                        {/* Text Section Start */}

                        <div className={`${styles['lyoInfo']}`}>
                            <Container className={styles.containerBox}>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>

                                        <List>
                                            <ListItem>

                                                <Typography variant="h5">
                                                    <strong> LYOTECH LABS </strong> is a dynamic R&D company that specializes in the development of software and hardware products, creating a benchmark in the world of innovative technology and is revolutionizing the FinTech landscape with its cutting-edge solutions.
                                                </Typography>

                                            </ListItem>
                                            <ListItem>

                                                <Typography variant="h5">
                                                    <strong> LYOTECH LABS </strong> <br />
                                                    aims to develop and deliver innovative, secure, and user-friendly fintech solutions that create an ever-lasting impact.
                                                    In addition to its hardware products, LYOTECH LABS also provides Linux Virtual Private Server (VPS) hosting solutions that cater to all business needs and are scalable to accommodate growth. The company offers a wide selection of Linux distributions to choose from, allowing clients to select the operating system that best suits their requirements.
                                                </Typography>
                                            </ListItem>
                                            <ListItem>


                                                <Typography variant="h5">
                                                    <strong>  LYOTECH LABS </strong> builds its servers with top-quality hardware and components that have been thoroughly tested and approved by their experts. This ensures that clients’ server infrastructure is reliable and performs efficiently.
                                                </Typography>

                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h5">
                                                    <strong>  LYOTECH LABS </strong> products are designed to make a positive impact on people’s lives. Whether it’s through their smartphones or smartwatches, the company’s products help people stay connected with the world around them, along with integrating innovation and state-of-the-art elements of technology. With their VPS hosting solutions, LYOTECH LABS provides businesses with a reliable and scalable infrastructure to support their growth.
                                                </Typography>
                                            </ListItem>
                                        </List>

                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        {/* Test Section End */}


                        <Footer />
                    </main>
                </ThemeProvider>


            </div>
        </>
    );
}

