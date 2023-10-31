import * as React from 'react';
import { List, ListItem, Typography, RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';

import styles from '@/styles/Home.module.css';
import ShippingAddressForm from './ShippingAddressForm';
import StoreListDropDown from './StoreListDropDown';
const deliveryTypes = [
    {
        value: 'self-pickup',
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
    shippingFee
}: {
    productName: string;
    productImage: string;
    selfPickupFee: number;
    shippingFee: number;
}) {
    const [deliveryType, setDeliveryType] = React.useState(deliveryTypes[0]);
    const addressList = [
        { value: "Dubai Store 1", name: "Dubai Store 1" },
        { value: "Dubai Store 2", name: "Dubai Store 2" },
        { value: "Dubai Store 3", name: "Dubai Store 3" },
    ]
    const countryList = [
        { name: 'country 1', value: '_id124431' },
        { name: 'country 2', value: '_id124433' },
        { name: 'country 3', value: '_id124433' }
    ]

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
                                            onChange={() => setDeliveryType(type)} />
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </ListItem>
                        <ListItem className={styles.item}>
                            {deliveryType.value === 'self-pickup' && <StoreListDropDown addressList={addressList} />}
                            {deliveryType.value === 'shipping' && <ShippingAddressForm countryList={countryList} />}
                        </ListItem>
                        <ListItem className={styles.item}>
                            {deliveryType.value === 'self-pickup' && <div className={styles.fees}>
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
