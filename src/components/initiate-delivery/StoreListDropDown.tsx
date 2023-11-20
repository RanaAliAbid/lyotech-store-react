import * as React from 'react';
import { Typography, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from '@/styles/Home.module.css';

export default function StoreListDropDown({
    addressList,
    countryList,
    shippingCountry,
    onChange,
    handleDeliveryAddress
}: {
    addressList: any,
    countryList: any,
    shippingCountry: any,
    onChange: Function,
    handleDeliveryAddress: any
}) {

    const [country, setCountry] = React.useState(shippingCountry?._id ?? shippingCountry);
    const [pickUpAddress, setPickUpAddress] = React.useState<any>("");

    React.useEffect(() => {
        handleDeliveryAddress({
            shippingCountry: country
        })
    }, [country])

    React.useEffect(() => {
        setPickUpAddress(addressList?.[0]?._id)
    }, [addressList])

    React.useEffect(() => {
        onChange({
            store: pickUpAddress
        })
    }, [pickUpAddress])

    return (
        <>
            <div className={styles.inlineForm}>
                <FormControl className={styles.formControl}>
                    <label className={styles.formLabel}>
                        Country <span className="text-danger">*</span>
                    </label>
                    <Select
                        className={styles.selectForm}
                        displayEmpty
                        required={true}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={(e) => { setCountry(e.target.value) }}
                        value={country ?? countryList?.find((c: any) => c.name == "United Arab Emirates")}
                    >
                        {countryList?.map((item: any, index: number) =>
                            item.name.includes("United Arab Emirates") && <MenuItem value={item._id} key={index}> {item.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>

            <Typography variant="h5">
                Self-Pickup Store <span className="text-danger">*</span>
            </Typography>
            <FormControl className={styles.formControl}>
                <Select
                    className={styles.selectForm}
                    value={pickUpAddress ?? ""}
                    onChange={(e) => setPickUpAddress(e.target.value)}
                    required={true}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {addressList?.map((item: any, index: number) =>
                        <MenuItem value={item._id} key={index}> {item.address}&nbsp;&nbsp;<br /> <small>{item?.country?.name}, {item?.city}</small></MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    );
}
