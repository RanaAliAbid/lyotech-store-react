import * as React from 'react';
import { List, ListItem, Typography, RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';

import styles from '@/styles/Home.module.css';
import ShippingAddressForm from './ShippingAddressForm';
import StoreListDropDown from './StoreListDropDown';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { updateDeliveryCartOrder } from '@/services/orders/order.service';
const deliveryTypes = [
    {
        value: 'pickup',
        label: 'Yes'
    },
    {
        value: 'shipping',
        label: 'No'
    }
]
export default function DeliveryOrderItem({
    productName,
    productImage,
    selfPickupFee,
    shippingFee,
    countryList,
    orderId,
    cartOrderId,
    shippingAddress,
    shippingCountry
}: {
    productName: string;
    productImage: string;
    cartOrderId: string;
    shippingCountry: string;
    orderId: string;
    selfPickupFee: number;
    shippingFee: number;
    countryList: any;
    shippingAddress: any;
}) {
    console.log("🚀 ~ file: DeliveryOrderItem.tsx:40 ~ shippingCountry:>>>>>>>>>>>>>>>>>>>>>>", shippingCountry)
    const [deliveryType, setDeliveryType] = React.useState(deliveryTypes[0]);
    const [deliveryDetails, setDeliveryDetails] = React.useState({ country: shippingCountry, shippingAddress: shippingAddress });
    const globalContext = useGlobalContext();
    const addressList = [
        { value: "Dubai Store 1", name: "Dubai Store 1" },
        { value: "Dubai Store 2", name: "Dubai Store 2" },
        { value: "Dubai Store 3", name: "Dubai Store 3" },
    ]

    const updateDeliveryDetails = async () => {
        globalContext.setGlobalLoading(true);
        const result = await updateDeliveryCartOrder({
            cartOrderId: cartOrderId,
            orderId: orderId,
            data: deliveryDetails
        });
        globalContext.setGlobalLoading(false);
    }

    React.useEffect(() => {
        updateDeliveryDetails();
    }, [deliveryDetails.country])

    const handleChangePickUpStore = (store: string) => {
        setDeliveryDetails(prevState => { return { ...prevState, store: store } })
    }

    const handleChangeShippingType = (type: any) => {
        setDeliveryType(type)
        setDeliveryDetails(prevState => { return { ...prevState, shippingType: type.value } })
    }

    const handleDeliveryAddress = (data: any) => {
        if (data?.shippingCountry) setDeliveryDetails(prevState => { return { ...prevState, shippingCountry: data.shippingCountry } })
        if (data?.shippingAddress) setDeliveryDetails(prevState => { return { ...prevState, shippingAddress: data.shippingAddress } })
    }

    return (
        <>
            <ListItem className={`${styles['wrapBox']} ${styles['productItem']}`}>
                <div className={`${styles['productImg']} ${styles['forDesktop']}`}>
                    <img
                        src={productImage}
                        alt="logo"
                        className="product_cart_image"
                    />
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.productName}>
                        <div className={`${styles['productImg']} ${styles['forMobile']}`}>
                            <img
                                src={productImage}
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
                                    {productName}
                                </Typography>

                                <Typography variant="body1">
                                    Model Name: {productName}
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
                                    defaultValue="yes"
                                    name="radio-buttons-group"
                                    value={deliveryType.value}
                                >
                                    {deliveryTypes.map((type, index) =>
                                        <FormControlLabel key={`radio-d-type-${type.value}${index}`} value={type.value} control={<Radio />} label={type.label}
                                            onChange={() => { handleChangeShippingType(type) }} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </ListItem>
                        <ListItem className={styles.item}>
                            {deliveryType.value === 'pickup' && <StoreListDropDown addressList={addressList} onChange={(data: string) => handleChangePickUpStore(data)} />}
                            {deliveryType.value === 'shipping' && <ShippingAddressForm
                                countryList={countryList}
                                shippingCountry={countryList.find((item: any) => item._id === deliveryDetails.country)}
                                address={shippingAddress}
                                onChange={(data: string) => handleDeliveryAddress(data)} />}
                        </ListItem>
                        <ListItem className={styles.item}>
                            {deliveryType.value === 'pickup' && <div className={styles.fees}>
                                <Typography variant="body1">
                                    Self-Pickup Fee: &nbsp;
                                </Typography>
                                <Typography variant="h5">
                                    AED {selfPickupFee}
                                </Typography>
                            </div>}
                            {deliveryType.value === 'shipping' && <div className={styles.fees}>
                                <Typography variant="body1">
                                    Shipping Fee: &nbsp;
                                </Typography>
                                <Typography variant="h5">
                                    AED {shippingFee}
                                </Typography>
                            </div>}
                        </ListItem>
                    </List>
                </div>
            </ListItem>
        </>


    );
}
