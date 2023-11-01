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
    const [country, setCountry] = React.useState(countryList.find((item: any) => item._id === shippingCountry));
    const [shippingAddress, setShippingAddress] = React.useState(address);


    React.useEffect(() => {
        onChange({ shippingAddress: shippingAddress, shippingCountry: country?._id });
    }, [country, shippingAddress])

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target);
        if (event.target?.code) setShippingAddress((prevState: any) => prevState.county = event.target.code)
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
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, firstName: e.target.value } })}
                    />
                </div>
                <div className={styles.formControl}>
                    <Typography variant="h5">
                        Last Name
                    </Typography>

                    <Input
                        className={styles.formInput}
                        placeholder="Fist Name"
                        value={shippingAddress?.lastName}
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, lastName: e.target.value } })}
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
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, address: e.target.value } })}
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
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, state: e.target.value } })}
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
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, state: e.target.value } })}
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
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, state: e.target.value } })}
                    />
                </div>
            </div>
        </>


    );
}
