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
    const [country, setCountry] = React.useState(shippingCountry);
    const [shippingAddress, setShippingAddress] = React.useState(address);

    React.useEffect(() => {
        onChange({ shippingCountry: country, shippingAddress: shippingAddress });
    }, [country, shippingAddress])

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
        if (event.target.value) {
            setShippingAddress({
                ...shippingAddress,
                country: event.target.value
            })

            setShippingAddress({
                ...shippingAddress,
                country: countryList?.find((x: any) => x._id === country)?.name
            })
        }
    };


    return (
        <>

            <div>
                <div className={styles.inlineForm}>
                    <div className={styles.formControl}>
                        <Typography variant="h5">
                            First Name <span className="text-danger">*</span>
                        </Typography>

                        <Input
                            className={styles.formInput}
                            placeholder="First Name"
                            value={shippingAddress?.firstName}
                            required={true}
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, firstName: e.target.value } })}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <Typography variant="h5">
                            Last Name <span className="text-danger">*</span>
                        </Typography>

                        <Input
                            className={styles.formInput}
                            placeholder="Fist Name"
                            value={shippingAddress?.lastName}
                            required={true}
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, lastName: e.target.value } })}
                        />
                    </div>

                </div>


                <div className={styles.formControl}>
                    <Typography variant="h5">
                        Address <span className="text-danger">*</span>
                    </Typography>

                    <Input
                        className={styles.formInput}
                        placeholder="Address"
                        value={shippingAddress?.address}
                        required={true}
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, address: e.target.value } })}
                    />
                </div>

                <div className={styles.inlineForm}>
                    <FormControl className={styles.formControl}>
                        <label className={styles.formLabel}>
                            Country <span className="text-danger">*</span>
                        </label>
                        <Select
                            className={styles.selectForm}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            required={true}
                            onChange={handleChange}
                            value={country ?? countryList[0]}
                        >
                            {countryList?.map((item: any, index: number) =>
                                <MenuItem value={item} key={index}> {item.name}</MenuItem>
                            )}
                        </Select>

                    </FormControl>

                    <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                            State / Region <span className="text-danger">*</span>
                        </label>
                        <Input
                            className={styles.formInput}
                            placeholder="State"
                            required={true}
                            value={shippingAddress?.state}
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, state: e.target.value } })}
                        />
                    </div>

                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        Town / City <span className="text-danger">*</span>
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="City "
                        required={true}
                        value={shippingAddress?.city}
                        onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, city: e.target.value } })}
                    />
                </div>



                <div className={styles.inlineForm}>
                    <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                            Postal Code <span className="text-danger">*</span>
                        </label>
                        <Input
                            required={true}
                            className={styles.formInput}
                            placeholder="Postal Code"
                            value={shippingAddress?.postalCode}
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, postalCode: e.target.value } })}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <label className={styles.formLabel}>
                            Phone Number <span className="text-danger">*</span>
                        </label>
                        <Input
                            className={styles.formInput}
                            required={true}
                            placeholder="Phone Number"
                            value={shippingAddress?.phone}
                            onChange={(e) => setShippingAddress((prevState: any) => { return { ...prevState, phone: e.target.value } })}
                        />
                    </div>

                </div>
            </div>
        </>


    );
}
