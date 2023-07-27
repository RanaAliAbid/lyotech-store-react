import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import useTranslation from 'next-translate/useTranslation';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { feesType } from '@/utils/app.utils';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';

export default function CartTotalComponent({ isCheckout, handlePlaceOrder }: { isCheckout: boolean, handlePlaceOrder: any }) {

    const { t } = useTranslation('cart');

    const modalStyle = {
        position: 'absolute' as 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        width: 400,
        background: "#fff",
        borderRadius: 3,
        border: '0px solid #000',
        boxShadow: 24,
        p: 2,
    };

    const router = useRouter();
    const globalContext = useGlobalContext();
    const authContext = useAuthContext();

    const [shippingMethods, setShippingMethods] = React.useState([]);
    const [cartFees, setCartFees] = React.useState([]);
    const [termsCheckbox, setTermsCheckbox] = React.useState<any>({
        presale: false,
        onecare: false,
        minting: false,
    });
    const [showTermsCheckbox, setShowTermsCheckbox] = React.useState(false);

    React.useEffect(() => {
        if (termsCheckbox.presale && termsCheckbox.onecare && termsCheckbox.minting) {
            setShowTermsCheckbox(false);
        }
    }, [termsCheckbox])

    React.useEffect(() => {
        setShippingMethods(globalContext?.cart?.shippingMethods ?? []);
        setCartFees(globalContext?.cart?.cart?.fees ?? []);
    }, [globalContext.cart]);

    const [shippingType, setShippingType] = React.useState<string>('');

    const handleChangeShippingType = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        try {
            globalContext.setGlobalLoading(true);

            const shippingMethodId = (event.target as HTMLInputElement).value

            const result = await globalContext.updateCartShippingMethod(shippingMethodId);

            if (!result) {
                globalContext.setGlobalLoading(false);
            }

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    React.useEffect(() => {
        setShippingType(globalContext?.cart?.cart?.shippingMethod ?? "")
    }, [globalContext.cart]);

    const updateCartOneCarePolicy = async (status: boolean, id: string) => {
        try {
            globalContext.setGlobalLoading(true);

            const result = await globalContext.updateCartOneCare(id, status);

            if (!result) {
                globalContext.setGlobalLoading(false);
            }

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    const placeUserOrder = async () => {
        if (!termsCheckbox.presale && !termsCheckbox.onecare && !termsCheckbox.minting) {
            setShowTermsCheckbox(true);
            return;
        }

        if (!handlePlaceOrder) return;

        handlePlaceOrder()
    }

    return (
        <>

            <div
                className={`${styles['wrapTitle']} ${styles['orderSum']}`}
            >
                <Typography variant="h4">{t('header-summary')}</Typography>

                <Typography variant="h6">Order ID: #0297509</Typography>
            </div>

            <div className={styles.wrapBox}>
                <div className={styles.summaryDetails}>
                    <List>
                        <ListItem className={styles.subTotal}>
                            <Typography variant="h6">
                                {t('Subtotal')} ({globalContext?.cart?.cart?.products?.length} {t('items')})
                            </Typography>
                            <Typography variant="h6">{globalContext?.cart?.cart?.totalAmount?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                        </ListItem>

                        <ListItem>
                            <Typography variant="h6">{t('Shipping')}</Typography>
                            <Typography variant="h6">
                                <Link>Details</Link>
                            </Typography>
                        </ListItem>
                    </List>

                    <List className={styles.shippingType}>
                        <RadioGroup
                            name="controlled-radio-buttons-group"
                            value={shippingType}
                            onChange={handleChangeShippingType}
                        >

                            {
                                (shippingMethods && shippingMethods.length > 0) ? (
                                    shippingMethods?.map((method: any, index: any) => (
                                        <ListItem
                                            key={index}
                                            className={`${shippingType === method?.shippingMethod ? styles.active : ''
                                                }`}
                                        >
                                            <FormControlLabel
                                                value={method?.shippingMethod}
                                                control={
                                                    <Radio
                                                        size="small"
                                                        checked={shippingType === method?.shippingMethod}
                                                    />
                                                }
                                                label={method.name}
                                            />
                                            <Typography variant="h6">{method?.amount} {globalContext.currencySymbol}</Typography>
                                        </ListItem>
                                    ))
                                ) : (
                                    <></>
                                )
                            }
                        </RadioGroup>
                    </List>

                    <List>

                        {
                            (cartFees?.length > 0) && (
                                cartFees.map((item: any, index: any) => (
                                    (!["oneCare", "payment"].includes(item.type)) && (
                                        <ListItem key={index}>
                                            <Typography variant="h6">
                                                {t(feesType(item.type))}
                                            </Typography>
                                            <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                        </ListItem>
                                    )
                                ))
                            )
                        }


                        {/* <ListItem>
                          <Typography variant="h6">{t('VAT')} 5%</Typography>
                          <Typography variant="h6">16.43 €</Typography>
                        </ListItem>*/}

                    </List>

                    <List>
                        {
                            (cartFees?.length > 0) && (
                                cartFees.map((item: any, index: any) => (
                                    (["payment"].includes(item.type)) && (
                                        <ListItem key={index}>
                                            <Typography variant="h6">
                                                {t(feesType(item.type))}
                                            </Typography>
                                            <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                        </ListItem>
                                    )
                                ))
                            )
                        }
                    </List>

                    <List className={styles.policySummary}>
                        {
                            (cartFees?.length > 0) && (
                                cartFees.map((item: any, index: any) => (
                                    (["oneCare"].includes(item.type)) && (
                                        <ListItem key={index}>
                                            <div className={styles.allCenter}>

                                                <Checkbox
                                                    checked={
                                                        (globalContext?.cart?.cart?.oneCare?.findIndex((x: any) => x.productId == globalContext?.cart?.cart?.products[0]?.productId?._id) !== -1) ? true : false}
                                                    onChange={(e) => updateCartOneCarePolicy(e.target.checked, globalContext?.cart?.cart?.products[0]?.productId?._id ?? "")}
                                                    size="small"
                                                />

                                                <Typography variant="h5">
                                                    {t(feesType(item.type))}
                                                </Typography>
                                            </div>
                                            <Typography variant="h6">{item?.fee?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                        </ListItem>
                                    )
                                ))
                            )
                        }
                    </List>

                    <List>
                        <ListItem className={styles.summaryfoot}>
                            <Typography variant="h5">{t('Total')}</Typography>
                            <Typography variant="h5">{globalContext?.cart?.cart?.totalIncludingFees?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                        </ListItem>
                    </List>
                </div>

                {
                    (isCheckout) ? (
                        <Button
                            onClick={(e) => { placeUserOrder() }}
                            variant="contained"
                            fullWidth
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                            {t('place-order-btn')}
                        </Button>
                    ) : (
                        <Button
                            onClick={(e) => { (globalContext.cart?.cart?.products?.length > 0) && router.push(`/${router.locale}/checkout`) }}
                            variant="contained"
                            fullWidth
                            className={`${styles['btn']} ${styles['btn_primary']}`}
                        >
                            {t('Checkout-btn')}
                        </Button>
                    )
                }

            </div>


            <Modal
                open={showTermsCheckbox}
                onClose={setShowTermsCheckbox}
            >
                <Box sx={{ ...modalStyle, maxWidth: '500px', width: '100%' }}>
                    <Alert color='info'>Please read and accept our terms and conditions</Alert>

                    <ListItem>
                        <div className={styles.allCenter}>
                            <Checkbox
                                checked={termsCheckbox.presale}
                                onChange={(e) => setTermsCheckbox({ ...termsCheckbox, presale: e.target.checked })}
                                size="small"
                            />
                            <Typography variant="h6" className='t-13'>
                                I have read and Accept <span className='text-primary cursor-pointer'>Presale Policy</span>
                            </Typography>
                        </div>
                    </ListItem>

                    <ListItem>
                        <div className={styles.allCenter}>
                            <Checkbox
                                checked={termsCheckbox.onecare}
                                onChange={(e) => setTermsCheckbox({ ...termsCheckbox, onecare: e.target.checked })}
                                size="small"
                            />
                            <Typography variant="h6" className='t-13'>
                                I have read and Accept <span className='text-primary cursor-pointer'>One Care Policy</span>
                            </Typography>
                        </div>
                    </ListItem>

                    <ListItem>
                        <div className={styles.allCenter}>
                            <Checkbox
                                checked={termsCheckbox.minting}
                                onChange={(e) => setTermsCheckbox({ ...termsCheckbox, minting: e.target.checked })}
                                size="small"
                            />
                            <Typography variant="h6" className='t-13'>
                                I have read and Accept <span className='text-primary cursor-pointer'>Hardware Minting Policy</span>
                            </Typography>
                        </div>
                    </ListItem>


                    <Button
                        onClick={(e) => { setShowTermsCheckbox(false) }}
                        variant="contained"
                        size='small'
                        className={`${styles['btn']} ${styles['btn_danger']} float-right`}
                    >
                        {t('close')}
                    </Button>
                </Box>
            </Modal>
        </>
    );
}
