import * as React from 'react';
import { List, ListItem, Typography, RadioGroup, FormControl, FormControlLabel, Radio, CircularProgress } from '@mui/material';

import styles from '@/styles/Home.module.css';
import ShippingAddressForm from './ShippingAddressForm';
import StoreListDropDown from './StoreListDropDown';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { getPickUpStores, updateDeliveryCartOrder } from '@/services/orders/order.service';
import { debounce } from '@/utils/app.utils';
const deliveryTypes = [
    {
        value: 'shipping',
        label: 'Yes'
    },
    {
        value: 'pickup',
        label: 'No'
    },
]
export default function DeliveryOrderItem({
    productName,
    productImage,
    selfPickupFee,
    shippingFee,
    countryList,
    orderId,
    shippingAddress,
    shippingCountry,
    shippingId,
    getCartOrder,
    setDataLoading,
    orderShippingType
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
    shippingId: string;
    getCartOrder: Function;
    setDataLoading: any;
    orderShippingType: string
}) {

    const [deliveryType, setDeliveryType] = React.useState(orderShippingType === "self-pickup" ? deliveryTypes[1] : deliveryTypes[0]);
    const [storeList, setStoreList] = React.useState([]);
    const [deliveryDetails, setDeliveryDetails] = React.useState({ country: shippingCountry, shippingType: deliveryTypes[0].value, storeId: null, shippingAddress: shippingAddress });
    const globalContext = useGlobalContext();
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        let data = deliveryDetails

        deliveryDetails.shippingType = deliveryType.value

        if (deliveryType.value === 'pickup') {

            if (deliveryDetails?.storeId) {
                setDataLoading(true);

                delete deliveryDetails.shippingAddress;

                debounce(updateDeliveryDetails, 1000, {
                    shippingId: shippingId,
                    orderId: orderId,
                    data: deliveryDetails,
                })
            }

        } else {
            if (deliveryDetails.shippingAddress?.firstName?.length > 1 &&
                deliveryDetails.shippingAddress?.lastName?.length > 1 &&
                deliveryDetails.shippingAddress?.city?.length > 1 &&
                deliveryDetails.shippingAddress?.state?.length > 1 &&
                deliveryDetails.shippingAddress?.phone?.length > 1 &&
                deliveryDetails.shippingAddress?.postalCode?.length > 1 &&
                (deliveryDetails.shippingAddress?.country || shippingCountry)) {
                //
                data.shippingAddress.country = countryList?.find((x: any) => x._id === (deliveryDetails?.country ?? shippingCountry))?.name

                setDataLoading(true);

                debounce(updateDeliveryDetails, 2000, {
                    shippingId: shippingId,
                    orderId: orderId,
                    data: {
                        ...deliveryDetails,
                        storeId: null
                    }
                })
            }
        }

    }, [deliveryDetails])



    const updateDeliveryDetails = async (data: any) => {
        try {
            setLoading(true);
            setDataLoading(true);
            const result = await updateDeliveryCartOrder(data);

            if (!result) return;

            getCartOrder && getCartOrder(false);
        } catch (error) { }
        setLoading(false);
    }

    const getStoreList = async (country: string = '') => {

        if (!country) return;

        globalContext.setGlobalLoading(true);
        const result = await getPickUpStores({
            country: country
        });
        setStoreList(result)
        globalContext.setGlobalLoading(false);
    }

    const handleChangePickUpStore = (data: any) => {
        setDeliveryDetails(prevState => { return { ...prevState, storeId: data.store } })
    }

    const handleChangeShippingType = (type: any) => {
        setDeliveryType(type)
        setDeliveryDetails(prevState => { return { ...prevState, shippingType: type.value } })
    }

    const handleDeliveryAddress = (data: any) => {
        setLoading(false);

        if (deliveryType.value === 'pickup') {

            setDeliveryDetails({
                ...deliveryDetails,
                country: data?.shippingCountry?._id ?? data?.shippingCountry,
                storeId: null
            })

            getStoreList(data?.shippingCountry?._id ?? data?.shippingCountry)

            return;
        }

        setDeliveryDetails(prevState => { return { ...prevState, shippingAddress: data?.shippingAddress, country: data?.shippingCountry?._id, storeId: null } })
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
                                    Shipping
                                </Typography>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={orderShippingType === "self-pickup" ? 'no' : 'yes'}
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
                            {deliveryType.value === 'pickup' && <StoreListDropDown
                                countryList={countryList}
                                shippingCountry={countryList.find((item: any) => item._id == deliveryDetails.country)}
                                addressList={storeList}
                                onChange={handleChangePickUpStore}
                                handleDeliveryAddress={handleDeliveryAddress} />}
                            {deliveryType.value === 'shipping' && <ShippingAddressForm
                                countryList={countryList}
                                shippingCountry={countryList.find((item: any) => item._id == deliveryDetails.country)}
                                address={shippingAddress}
                                onChange={handleDeliveryAddress} />}
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

                            <p>{loading && <><CircularProgress /></>}</p>
                        </ListItem>
                    </List>
                </div>
            </ListItem>
        </>


    );
}
