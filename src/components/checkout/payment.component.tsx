import * as React from 'react';
import lyoMC from '../../img/lyomerchant.png';
import usdtCoin from '../../img/theter_trc.png';
import creditCard from '../../img/creaditCard.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ListItem from '@mui/material/ListItem';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import styles from '@/styles/Home.module.css';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getPaymentMethods } from '@/services/payments/payment.service';
import useTranslation from 'next-translate/useTranslation';


export default function PaymentMethodComponent({ paymentType, handleChangePayment }: { paymentType: any, handleChangePayment: any }) {

    const [paymentMethods, setPaymentMethods] = React.useState<any>([]);

    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const { t } = useTranslation('cart');

    const getPaymentMethodList = async () => {
        try {
            const result = await getPaymentMethods();

            setPaymentMethods(result?.data?.data);

            globalContext.setGlobalLoading(false);

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    }

    const handleChangePaymentMethod = async (
        methodName: string
    ) => {
        try {
            const id: string = paymentMethods?.find((x: any) => x?.name?.toLowerCase() === methodName)?._id ?? "";

            globalContext.setGlobalLoading(true);

            const result = await globalContext.updateCartPaymentMethod(id);

            if (!result) {
                globalContext.setGlobalLoading(false);
            }

        } catch (error) {
            globalContext.setGlobalLoading(false);
        }
    };

    React.useEffect(() => {
        getPaymentMethodList()
    }, [globalContext.cart]);

    return (
        <>
            <div
                className={`${styles['wrapBox']} ${styles['paymentBox']}`}>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={paymentType}
                    onChange={(e) => { handleChangePayment(e); handleChangePaymentMethod(e.target.value) }}
                >
                    {
                        (paymentMethods?.length > 0 && paymentMethods?.findIndex((x: any) => x?.name?.toLowerCase() === "lyomerchant") != -1) && (
                            <ListItem
                                className={`${paymentType === 'lyomerchant' ? styles.show : ''
                                    }`}
                            >
                                <div className={styles.paymentTypelogo}>
                                    <div className={styles.lyomc}>
                                        <FormControlLabel
                                            value="lyomerchant"
                                            control={
                                                <Radio
                                                    size="small"
                                                    checked={paymentType === 'lyomerchant'}
                                                />
                                            }
                                            label=""
                                        />
                                        <img src={lyoMC.src} alt="" />
                                    </div>
                                    <div className={styles.coin}>
                                        <img src={usdtCoin.src} alt="" />
                                    </div>
                                </div>

                                <div className={`${styles.payInfoBox} w-100`}>
                                    <div className={styles.note}>
                                        <Typography variant="h5">
                                            Pay with your crypto currencies via our super-cool
                                            payment gateway.
                                        </Typography>
                                    </div>
                                </div>
                            </ListItem>
                        )
                    }

                    {
                        (paymentMethods?.length > 0 && process.env.ENABLE_CC_PAYMENT == "true" && paymentMethods?.findIndex((x: any) => x?.name?.toLowerCase() === "mastercard") != -1) && (
                            <ListItem
                                className={`${paymentType === 'mastercard' ? styles.show : ''
                                    }`}
                            >
                                <div className={styles.paymentTypelogo}>
                                    <div className={styles.lyomc}>
                                        <FormControlLabel
                                            value="mastercard"
                                            control={
                                                <Radio
                                                    size="small"
                                                    checked={paymentType === 'mastercard'}
                                                />
                                            }
                                            label="Credit card"
                                        />
                                    </div>
                                    <div className={styles.usdt}>
                                        <img src={creditCard.src} alt="" />
                                    </div>
                                </div>
                                <div className={styles.payInfoBox}>
                                    {/* <Grid item md={12} xs={12}>
                                        <div className={styles.formControl}>
                                            <label> Card Number </label>
                                            <Input
                                                className={styles.formInput}
                                                placeholder="0000 0000 0000 0000"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid container className={styles.payInline}>
                                        <Grid item md={6} xs={12}>
                                            <div className={styles.formControl}>
                                                <label> Expiry date </label>
                                                <Input
                                                    className={styles.formInput}
                                                    placeholder="MM YYYY"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <div className={styles.formControl}>
                                                <label> CVV Number </label>
                                                <Input
                                                    className={styles.formInput}
                                                    placeholder="123"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid> */}
                                    {/* <FormControlLabel
                                        control={<Checkbox size="small" defaultChecked />}
                                        label="Save payment information to my account for future purchases."
                                    /> */}
                                    <div className={styles.note}>
                                        <Typography variant="h5">
                                            Pay with your credit card. TEST MODE
                                            ENABLED. In test mode, you can use the card number
                                            4242424242424242 with any CVC and a valid
                                            expiration date or check the Testing Stripe
                                            documentation for more card numbers.
                                        </Typography>
                                    </div>
                                </div>
                            </ListItem>
                        )
                    }

                </RadioGroup>
            </div>
        </>
    );
}