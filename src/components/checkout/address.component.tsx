import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from '@/styles/Home.module.css';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getPaymentMethods } from '@/services/payments/payment.service';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';


export default function DefaultAddressComponent(
    { changeAddress, userAddressList, setChangeAddress, formAddress, setDisplayAddress }:
        { changeAddress: any, userAddressList: any, setChangeAddress: any, formAddress: any, setDisplayAddress: any }) {

    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const { t } = useTranslation('cart');

    return (
        <>
            {
                (authContext.userConnected && !changeAddress && userAddressList?.address?.defaultAddress?._id) ? (
                    <>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4">Shipping Address</Typography>

                                    <Typography variant="h6">
                                        <Link href="#" onClick={(e) => setChangeAddress(!changeAddress)}> Add new address </Link>
                                    </Typography>
                                </div>


                                <div
                                    className={`${styles['wrapBox']} ${styles['addresses']}`}
                                >
                                    <div className={styles.addressesType}>
                                        <Typography variant="h4">{userAddressList?.address?.defaultAddress?.type}</Typography>
                                        <Typography variant="h6">
                                            <Link href="#" onClick={(e) => setChangeAddress(!changeAddress)}> Change </Link>
                                        </Typography>
                                    </div>

                                    <Typography variant="h5">{authContext?.connectedUserName}</Typography>

                                    <Typography variant="body1">
                                        {authContext?.connectedUserEmail}
                                    </Typography>

                                    <Typography variant="body1">
                                        {userAddressList?.address?.defaultAddress?.address}  <br />
                                        {userAddressList?.address?.defaultAddress?.city}&nbsp;
                                        {userAddressList?.address?.defaultAddress?.state},&nbsp;
                                        {userAddressList?.address?.defaultAddress?.country}
                                    </Typography>

                                    <Typography variant="body1">{userAddressList?.address?.defaultAddress?.code}-
                                        {userAddressList?.address?.defaultAddress?.contact}</Typography>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4">Billing address</Typography>
                                </div>
                                <div
                                    className={`${styles['wrapBox']} ${styles['addresses']}`}
                                >
                                    <div className={styles.addressesType}>
                                        <Typography variant="h4">{userAddressList?.address?.defaultAddress?.type}</Typography>
                                        <Typography variant="h6">
                                            <Link href="#"> Change </Link>
                                        </Typography>
                                    </div>

                                    <Typography variant="h5">{authContext?.connectedUserName}</Typography>

                                    <Typography variant="body1">
                                        {authContext?.connectedUserEmail}
                                    </Typography>

                                    <Typography variant="body1">
                                        {userAddressList?.address?.defaultAddress?.address}  <br />
                                        {userAddressList?.address?.defaultAddress?.city}&nbsp;
                                        {userAddressList?.address?.defaultAddress?.state},&nbsp;
                                        {userAddressList?.address?.defaultAddress?.country}
                                    </Typography>

                                    <Typography variant="body1">{userAddressList?.address?.defaultAddress?.code}-
                                        {userAddressList?.address?.defaultAddress?.contact}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    (globalContext.screenWitdh <= 900) && (
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <div className={styles.wrapTitle}>
                                    <Typography variant="h4">Shipping Address</Typography>
                                </div>

                                <div
                                    className={`${styles['wrapBox']} ${styles['addresses']}`}
                                >
                                    <div className={styles.addressesType}>
                                        <Typography variant="h4">
                                            {/* {formAddress?.shippingAddress?.type} */}
                                            {formAddress?.shippingAddress?.firstName} {formAddress?.shippingAddress?.lastName}
                                        </Typography>
                                        <Typography variant="h6">
                                            <Link href="#" onClick={(e) => setDisplayAddress(true)}> Change </Link>
                                        </Typography>
                                    </div>

                                    <Typography variant="h5">{authContext?.connectedUserName}</Typography>

                                    <Typography variant="body1">
                                        {authContext?.connectedUserEmail}
                                    </Typography>

                                    <Typography variant="body1">
                                        {formAddress?.shippingAddress?.address}<br /> {formAddress?.shippingAddress?.city}&nbsp;
                                        {formAddress?.shippingAddress?.state},&nbsp;
                                        {formAddress?.shippingAddress?.country}
                                    </Typography>

                                    <Typography variant="body1">
                                        {/* {formAddress?.shippingAddress?.code}- */}
                                        {formAddress?.shippingAddress?.phone}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    )

                )
            }
        </>
    );
}