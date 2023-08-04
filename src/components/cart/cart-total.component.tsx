import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import Link from '@mui/material/Link';
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
import PaymentMethodComponent from '../checkout/payment.component';
import DefaultAddressComponent from '../checkout/address.component';
import Link from 'next/link';

import productImage from '../../img/thumImg.png';


export default function CartTotalComponent(
    { isCheckout, handlePlaceOrder, paymentType, handleChangePayment, setDisplayAddress, addressProps }:
        { isCheckout: boolean, handlePlaceOrder?: any, paymentType?: any, handleChangePayment?: any, setDisplayAddress?: any, addressProps?: any }) {

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
    const [cartVat, setCartVat] = React.useState<any>(null);
    const [termsCheckbox, setTermsCheckbox] = React.useState<any>({
        presale: false,
        onecare: false,
        minting: false,
    });
    const [showTermsCheckbox, setShowTermsCheckbox] = React.useState(false);
    const [showOneCareModal, setShowOneCareModal] = React.useState(false);

    React.useEffect(() => {
        if (termsCheckbox.presale && termsCheckbox.onecare && termsCheckbox.minting) {
            setShowTermsCheckbox(false);
        }
    }, [termsCheckbox])

    React.useEffect(() => {
        setShippingMethods(globalContext?.cart?.shippingMethods ?? []);
        setCartFees(globalContext?.cart?.cart?.fees ?? []);
        setCartVat(globalContext?.cart?.appliedTax ?? null)
    }, [globalContext.cart]);

    const [shippingType, setShippingType] = React.useState<string>('');

    const handleChangeShippingType = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        return;

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

    const handleClickShippingType = async (
        shippingMethodId: string
    ) => {
        try {
            globalContext.setGlobalLoading(true);

            const result = await globalContext.updateCartShippingMethod(shippingMethodId);

            if (!result) {
                globalContext.setGlobalLoading(false);
            }

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    React.useEffect(() => {
        setShowOneCareModal(false);
        setShippingType(globalContext?.cart?.cart?.shippingMethod ?? "")

        if (!globalContext?.cart?.cart?.products || globalContext?.cart?.cart?.products?.length == 0) {
            globalContext.setGlobalLoading(true);
            router.push("/")
            setTimeout(() => {
                globalContext.setGlobalLoading(false);
            }, 200);
        }
    }, [globalContext.cart]);

    const updateCartOneCarePolicy = async (status: boolean, id: string, force = false) => {
        try {
            if (!status && !force) {
                setShowOneCareModal(true);
                return;
            }

            if (status) {
                if (globalContext?.cart?.cart?.oneCare?.findIndex((x: any) => x.productId == id) !== -1) {
                    setShowOneCareModal(false);
                    return;
                }
            }

            globalContext.setGlobalLoading(true);

            setShowOneCareModal(false);

            const result = await globalContext.updateCartOneCare(id, status);

            if (!result) {
                globalContext.setGlobalLoading(false);
            }

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    const placeUserOrder = async () => {
        if (!termsCheckbox.presale || !termsCheckbox.onecare || !termsCheckbox.minting) {
            setShowTermsCheckbox(true);
            return;
        }

        if (!handlePlaceOrder) return;

        handlePlaceOrder()
    }

    return (
        <div className='position-relative'>

            <div
                className={`${styles['wrapTitle']} ${styles['orderSum']}`}
            >
                <Typography variant="h4">{t('header-summary')}</Typography>

                {/* <Typography variant="h6">Order ID: #0297509</Typography> */}
            </div>

            <div className={styles.wrapBox}>
                <div className={`${styles.summaryDetails}`}>
                    <List>
                        <ListItem className={styles.subTotal}>
                            <Typography variant="h6">
                                {t('Subtotal')} ({globalContext?.cartQtyProduct} {t('items')})
                            </Typography>
                            <Typography variant="h6">{globalContext?.cart?.cart?.totalAmount?.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                        </ListItem>

                        {
                            (isCheckout) && (
                                globalContext.cart?.cart?.products?.map((cartItem: any, index: any) => (
                                    <ListItem key={index} className={styles.productsLists}>
                                        <div className={styles.productsData}>
                                            <div className={styles.productImg}>
                                                <img src={cartItem?.productId?.images[0]?.link ?? productImage.src} alt="logo" />
                                            </div>

                                            <div className={styles.productInfo}>
                                                <Typography variant="h4">  {cartItem?.productId?.name} </Typography>
                                                <Typography variant="h6">  Model Name: {cartItem?.productId?.name}</Typography>
                                                {
                                                    (globalContext?.cart?.cart?.totalAmount == 0) ? (
                                                        <Typography variant="h5">
                                                            <span> {cartItem?.productId?.price?.toFixed(globalContext.priceToFixed)} </span>
                                                            <b>
                                                                {
                                                                    parseFloat(cartItem?.productId?.price?.toFixed(globalContext.priceToFixed)) - parseFloat(globalContext.cart?.cart?.coupon?.find((x: any) => x.productId == cartItem?.productId?._id)?.couponId?.amount)
                                                                }
                                                            </b>
                                                            &nbsp;
                                                            {globalContext.currencySymbol}
                                                        </Typography>
                                                    ) : (
                                                        <Typography variant="h5"> {cartItem?.productId?.price?.toFixed(globalContext.priceToFixed)}  {globalContext.currencySymbol}  </Typography>
                                                    )
                                                }

                                            </div>
                                        </div>

                                    </ListItem>
                                ))

                            )
                        }

                        <ListItem>
                            <Typography variant="h6"><b>{t('Shipping Methods')}</b></Typography>
                            {/* <Typography variant="h6">
                                <Link>Details</Link>
                            </Typography> */}
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
                                            onClick={(e) => { (shippingType !== method?.shippingMethod?._id) ? handleClickShippingType(method?.shippingMethod?._id) : "" }}
                                            key={index}
                                            className={`${shippingType === method?.shippingMethod?._id ? styles.active : ''
                                                } cursor-pointer`}
                                        >
                                            <FormControlLabel
                                                value={method?.shippingMethod?._id}
                                                control={
                                                    <Radio
                                                        size="small"
                                                        checked={shippingType === method?.shippingMethod?._id}
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

                        {
                            (cartVat?.amount) ? (
                                <ListItem>
                                    <Typography variant="h6">
                                        {t('VAT')} {cartVat?.percentage}%
                                    </Typography>
                                    <Typography variant="h6">{cartVat.amount.toFixed(globalContext.priceToFixed)} {globalContext.currencySymbol}</Typography>
                                </ListItem>
                            ) : <></>
                        }

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

                    {
                        (globalContext.screenWitdh <= 900 && setDisplayAddress) && (
                            <>
                                <div className={`${styles.wrapTitle} mt-2 mb-2`}>

                                    <DefaultAddressComponent
                                        changeAddress={addressProps?.changeAddress}
                                        userAddressList={addressProps?.userAddressList}
                                        formAddress={addressProps?.formAddress}
                                        setDisplayAddress={addressProps?.setDisplayAddress}
                                        setChangeAddress={addressProps?.setChangeAddress}></DefaultAddressComponent>

                                </div>

                                <div className={`${styles.wrapTitle} mt-2 mb-2`}>
                                    <Typography variant="h4">
                                        Choose a payment method
                                    </Typography>
                                </div>

                                {/* //payment method */}
                                <PaymentMethodComponent paymentType={paymentType} handleChangePayment={handleChangePayment}></PaymentMethodComponent>
                                <br />
                                <br />
                            </>
                        )
                    }

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

            {
                (showOneCareModal) && (
                    <div className="oneCarePolicyModal">
                        <Typography variant="h4" className="bold-500">{t('One Care Policy')}</Typography>
                        <br />
                        <Typography variant="h6">
                            <p>
                                Your phone is susceptible to physical damage and unexpected accidents can happen at any time.
                            </p>
                            <br />
                            <p>
                                One Care offers comprehensive protection that covers you against these unforeseen damages.
                            </p>
                            <br />
                            <p>
                                Don't take the risk of expensive repairs or replacements - ensure that you're protected with One Care today.
                            </p>
                            <br />
                            <div className="">
                                <Button
                                    onClick={(e) => { updateCartOneCarePolicy(false, globalContext?.cart?.cart?.products[0]?.productId?._id ?? "", true) }}
                                    variant="outlined"
                                    size='small'
                                    color="error"
                                >
                                    {t('No')}
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                    onClick={(e) => { updateCartOneCarePolicy(true, globalContext?.cart?.cart?.products[0]?.productId?._id ?? "") }}
                                    variant="outlined"
                                    size='small'
                                    className={``}
                                >
                                    {t('Yes')}
                                </Button>
                            </div>
                        </Typography>
                    </div>
                )
            }

            <Modal
                open={showTermsCheckbox}
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
                                I have read and Accept <Link rel='noreferrer' target='_blank' href={`/pre-sale-policy`}><span className='text-primary cursor-pointer'>Presale Policy</span></Link>
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
                                I have read and Accept <Link rel='noreferrer' target='_blank' href={`/onecare-policy`}><span className='text-primary cursor-pointer'>One Care Policy</span></Link>
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
                                I have read and Accept <Link rel='noreferrer' target='_blank' href={`/minting-terms-condition`}><span className='text-primary cursor-pointer'>Hardware Minting Policy</span></Link>
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
        </div>
    );
}
