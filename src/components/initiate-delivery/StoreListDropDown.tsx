import * as React from 'react';
import { Typography, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from '@/styles/Home.module.css';

export default function StoreListDropDown({
    addressList
}: {
    addressList: any
}) {
    const [pickUpAddress, setPickUpAddress] = React.useState(addressList[0]);
    const handleChange = (event: SelectChangeEvent) => {
        setPickUpAddress(event.target);
    };

    return (
        <>
            <Typography variant="h5">
                Self-Pickup Store
            </Typography>
            <FormControl className={styles.formControl}>
                <Select
                    className={styles.selectForm}
                    value={pickUpAddress?.value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {addressList?.map((item: any, index: number) =>
                        <MenuItem value={item.value} key={index}> {item.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    );
}
