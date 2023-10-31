import * as React from 'react';
import { Typography, FormControl, Input, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styles from '@/styles/Home.module.css';

export default function ShippingAddressForm({
    countryList,
    address,
    shippingCountry,
    onChange
}: {
    countryList: any
    address: any
    shippingCountry: string
    onChange: Function
}) {
    const [country, setCountry] = React.useState(countryList.find((item) => item._id === shippingCountry));
    const [shippingAddress, setShippingAddress] = React.useState(address);
    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target);
        if (event.target?.code) setShippingAddress((prevState: any) => prevState.county = event.target.code)
        if (event.target?._id) { onChange({ country: event.target._id }) }
    };

    return (
        <>

            <div>
                <div className={styles.formControl}>
                    <Typography variant="h5">
                        First Name
                    </Typography>

                    <Input
                        className={styles.formInput}
                        placeholder="First Name"
                        value={shippingAddress?.firstName}
                        onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, firstName: shippingAddress.firstName } })}
                    />
                </div>
                <div className={styles.formControl}>
                    <Typography variant="h5">
                        Last Name
                    </Typography>

                    <Input
                        className={styles.formInput}
                        placeholder="Fist Name"
                        value={shippingAddress?.address}
                        onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, address: shippingAddress.lastName } })}
                    />
                </div>
                <div className={styles.formControl}>
                    <Typography variant="h5">
                        Shipping Address
                    </Typography>

                    <Input
                        className={styles.formInput}
                        placeholder="Address"
                        value={shippingAddress?.address}
                        onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, address: shippingAddress.address } })}
                    />
                </div>

                <div className={styles.inlineForm}>
                    <FormControl className={styles.formControl}>
                        <label className={styles.formLabel}>
                            Country
                        </label>
                        <Select
                            className={styles.selectForm}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            onChange={handleChange}
                            value={country?._id}
                        >
                            {countryList?.map((item: any, index: number) =>
                                <MenuItem value={item._id} key={index}> {item.name}</MenuItem>
                            )}
                        </Select>

                    </FormControl>

                    <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                            State
                        </label>
                        <Input
                            className={styles.formInput}
                            placeholder="State"
                            value={shippingAddress?.state}
                            onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, state: shippingAddress.state } })}
                        />
                    </div>

                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        Town / City
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="City "
                        value={shippingAddress?.city}
                        onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, state: shippingAddress.city } })}
                    />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        Postal Code
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Postal Code"
                        value={shippingAddress?.postalCode}
                        onChange={() => setShippingAddress((prevState: any) => { return { ...prevState, state: shippingAddress.postalCode } })}
                    />
                </div>
            </div>
        </>


    );
}
