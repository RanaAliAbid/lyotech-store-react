import * as React from 'react';

import styles from '@/styles/Home.module.css';

import Input from '@mui/material/Input';
import { Alert, MenuItem, Select } from '@mui/material';

import { AddressDataValidator } from '@/services/addresses/addresses.types';
import { getCityDetails, getCountry, getStateDetails } from '@/services/country/country.service';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';

export default function ShippingFormComponent({ formAddress, setFormAddress }: { formAddress: any, setFormAddress: any }) {

    const [validator, setValidator] = React.useState<AddressDataValidator>();
    const [cityList, setCityList] = React.useState<any>([]);
    const [countryList, setCountryList] = React.useState<any>([]);
    const [state, setState] = React.useState<any>("");
    const [city, setCity] = React.useState<any>("");
    const [countryCode, setCountryCode] = React.useState<string>("+971");
    const [countryCodeName, setCountryCodeName] = React.useState<string>("");
    const [stateList, setStateList] = React.useState<any>([]);

    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const { t } = useTranslation('cart');


    const getCountryList = async () => {
        try {
            const result = await getCountry();

            if (formAddress?.shippingAddress?.country) {
                getStateDetailsOfCountry(
                    result?.data?.data?.country?.find((x: any) => x.name === formAddress?.shippingAddress?.country ?? "")?._id,
                    true,
                    formAddress?.shippingAddress
                );
            }

            setCountryList(result?.data?.data?.country);

            globalContext.setGlobalLoading(false);
        } catch (error) { }
    }

    const getStateDetailsOfCountry = async (value: any, autoLoadCity: boolean = false, currentAddress: any = null) => {
        try {
            const result = await getStateDetails(value);
            setStateList(result?.data?.data?.states ?? []);

            if (autoLoadCity) {
                const state = result?.data?.data?.states?.find((x: any) => x?.name === currentAddress?.state ?? "")?._id

                if (state) {
                    await getCityDetailsOfState(state)
                }
            } else {
                // setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, state: "" } })
            }
        } catch (error) { }
    }

    const getCityDetailsOfState = async (value: any) => {
        try {
            const result = await getCityDetails(value);
            setCityList(result?.data?.data?.cities);
        } catch (error) { }
    }

    React.useEffect(() => {
        getCountryList()
    }, [])

    return (
        <>
            <div className={styles.flexBox}>
                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        First name *{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="First name"
                        value={formAddress?.shippingAddress?.firstName}
                        onChange={(e: any) => setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, firstName: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Last name *{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Last name"
                        value={formAddress?.shippingAddress?.lastName}
                        onChange={(e: any) => setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, lastName: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Email Address *{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Email Address"
                        value={formAddress?.shippingAddress?.email}
                        onChange={(e: any) => setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, email: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}> Phone * </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Phone Number"
                        value={formAddress?.shippingAddress?.phone}
                        onChange={(e: any) => setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, phone: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Country *{' '}
                    </label>

                    {
                        (countryList && countryList.length > 0) && (
                            <Select
                                label="Country"
                                className={`${styles.formTextField} formSelect`}
                                value={formAddress?.shippingAddress?.country}
                            >
                                <MenuItem value={""} disabled>
                                    Select a Country
                                </MenuItem>
                                {countryList.map((country: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={country.name}
                                        onClick={(e) => {
                                            getStateDetailsOfCountry(country._id);
                                            setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, country: country.name } })
                                            setCountryCodeName(country.name);
                                        }}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        )
                    }

                    <div className={styles.inline}>
                        <div className={styles.formControl}>
                            <span className="alert-field">
                                {validator && !validator.country && (
                                    <Alert severity="error">
                                        {t('required-field-error')}
                                    </Alert>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}> State / Region *</label>
                    {
                        <Select
                            label="States"
                            className={styles.formTextField}
                            value={formAddress?.shippingAddress?.state ?? ""}
                        >
                            <MenuItem value={""} disabled>
                                Select a State/Region
                            </MenuItem>
                            {stateList && stateList.length > 0 ?
                                stateList.map((state: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={state?.name}
                                        onClick={(e) => {
                                            getCityDetailsOfState(state._id);
                                            setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, state: state?.name } })
                                        }}
                                    >
                                        {state?.name}
                                    </MenuItem>
                                ))
                                : "Select a state"
                            }
                        </Select>
                    }
                    <div className={styles.inline}>
                        <div className={styles.formControl}>
                            <span className="alert-field">
                                {validator && !validator.state && (
                                    <Alert severity="error">
                                        {t('required-field-error')}
                                    </Alert>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Town / City *{' '}
                    </label>
                    {
                        <Select
                            label="City"
                            className={styles.formTextField}
                            value={formAddress?.shippingAddress?.city ?? ""}
                        >
                            <MenuItem value={""}>
                                Select a state/region
                            </MenuItem>
                            {cityList && cityList.length > 0 ?
                                cityList.map((city: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={city?.name}
                                        onClick={(e) => {
                                            setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, city: city?.name } })
                                        }}
                                    >
                                        {city?.name}
                                    </MenuItem>
                                ))
                                : "Select a city"
                            }
                        </Select>
                    }
                    <div className={styles.inline}>
                        <div className={styles.formControl}>
                            <span className="alert-field">
                                {validator && !validator.city && (
                                    <Alert severity="error">
                                        {t('required-field-error')}
                                    </Alert>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Partner User ID *{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Partner User ID "
                    />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Address *{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Address Street, Area, ..."
                        value={formAddress?.shippingAddress?.address}
                        onChange={(e: any) => setFormAddress({ ...formAddress, shippingAddress: { ...formAddress.shippingAddress, address: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Order notes {' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Order notes (optional)"
                        value={formAddress?.notes}
                        onChange={(e: any) => setFormAddress({ ...formAddress, notes: e.target.value })} />
                </div>
            </div>
        </>
    );
}