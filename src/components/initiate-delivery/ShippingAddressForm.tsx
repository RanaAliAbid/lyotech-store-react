import * as React from 'react';
import { Typography, FormControl, Input, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styles from '@/styles/Home.module.css';

export default function ShippingAddressForm({
    countryList
}: {
    countryList: any
}) {
    const [country, setCountry] = React.useState(countryList[0]);
    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target);
    };

    return (
        <>

            <div>
                <div className={styles.formControl}>
                    <Typography variant="h5">
                        Shipping Address
                    </Typography>
                    <Input
                        className={styles.formInput}
                        placeholder="Address "
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
                            value={country?.value}
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
                    />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        Postal Code
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Postal Code"
                    />
                </div>
            </div>
        </>


    );
}
