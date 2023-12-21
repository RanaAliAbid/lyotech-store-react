import * as React from 'react';

import styles from '@/styles/Home.module.css';

import Input from '@mui/material/Input';
import { Alert, MenuItem, Select } from '@mui/material';

import { AddressDataValidator } from '@/services/addresses/addresses.types';
import { getCityDetails, getCountry, getStateDetails } from '@/services/country/country.service';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';

export default function BillingFormComponent({ formAddress, setFormAddress }: { formAddress: any, setFormAddress: any }) {

    const [validator, setValidator] = React.useState<AddressDataValidator>();
    const [cityList, setCityList] = React.useState<any>([]);
    const [countryList, setCountryList] = React.useState<any>([]);
    const [state, setState] = React.useState<any>("");
    const [city, setCity] = React.useState<any>("");
    const [countryCode, setCountryCode] = React.useState<string>("+971");
    const [countryCodeName, setCountryCodeName] = React.useState<string>("");
    const [stateList, setStateList] = React.useState<any>([]);
    const [hideStateList, setHideStateList] = React.useState<boolean>(false);

    const globalContext = useGlobalContext();
    const authContext = useAuthContext();
    const { t } = useTranslation('cart');


    const getCountryList = async () => {
        try {
            const result = await getCountry();

            // if (formAddress?.billingAddress?.country) {
            //     getStateDetailsOfCountry(
            //         result?.data?.data?.country?.find((x: any) => x.name === formAddress?.billingAddress?.country ?? "")?._id,
            //         true,
            //         formAddress?.billingAddress
            //     );
            // }

            setCountryList(result?.data?.data?.country);

            globalContext.setGlobalLoading(false);
        } catch (error) { }
    }

    const handleChangeCountryName = async (name: string) => {
        let currentAddress = formAddress
        currentAddress.billingAddress.country = name;
        // currentAddress.billingAddress.city = "";
        // currentAddress.billingAddress.state = "";

        setFormAddress(currentAddress)
        // setCityList([])
        // setStateList([])
    }

    const getStateDetailsOfCountry = async (value: any, autoLoadCity: boolean = false, currentAddress: any = null) => {
        return;
        try {
            setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, state: "" } })
            setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, city: "" } })

            const result = await getStateDetails(value);

            if (result?.data?.data?.cities) {
                setCityList(result?.data?.data?.cities);
                setHideStateList(true);
                setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, state: "" } })
            } else {
                setStateList(result?.data?.data?.states ?? []);

                if (autoLoadCity) {
                    const state = result?.data?.data?.states?.find((x: any) => x?.name === currentAddress?.state ?? "")?._id

                    if (state) {
                        await getCityDetailsOfState(state)
                    }
                }
            }

        } catch (error) { }
    }

    const getCityDetailsOfState = async (value: any) => {
        return;
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
                        First name  <span className="text-danger">*</span>{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="First name"
                        value={formAddress?.billingAddress?.firstName}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, firstName: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Last name  <span className="text-danger">*</span>{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Last name"
                        value={formAddress?.billingAddress?.lastName}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, lastName: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Email Address  <span className="text-danger">*</span>{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Email Address"
                        value={formAddress?.billingAddress?.email}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, email: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}> Phone <span className="text-danger">*</span></label>
                    <Input
                        className={styles.formInput}
                        placeholder="Phone Number"
                        value={formAddress?.billingAddress?.phone}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, phone: e.target.value } })} />
                </div>

                <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Country  <span className="text-danger">*</span>{' '}
                    </label>

                    {
                        (countryList && countryList.length > 0) && (
                            <Select
                                label="Country"
                                className={`${styles.formTextField} formSelect`}
                                value={formAddress?.billingAddress?.country}
                                size='small'
                            >
                                <MenuItem value={formAddress?.billingAddress?.country ?? ""} disabled>
                                    Select a Country
                                </MenuItem>
                                {countryList.map((country: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={country.name}
                                        onClick={async (e) => {
                                            await handleChangeCountryName(country.name)
                                            getStateDetailsOfCountry(country._id);
                                            // setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, country: country.name } })
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
                    <label className={styles.formLabel}> State / Region
                        {/* <span className="text-danger">*</span> */}
                    </label>
                    <Input
                        className={styles.formInput}
                        value={formAddress?.billingAddress?.state ?? ""}
                        placeholder="State / Region"
                        onChange={(e) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, state: e.target.value } })}
                    />
                    {/* {
                        <Select
                            label="States"
                            className={styles.formTextField}
                            value={formAddress?.billingAddress?.state ?? ""}
                            size='small'
                            disabled={hideStateList}
                        >
                            <MenuItem value={formAddress?.billingAddress?.state ?? ""} disabled>
                                Select a State/Region
                            </MenuItem>
                            {stateList && stateList.length > 0 ?
                                stateList.map((state: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={state?.name}
                                        onClick={(e) => {
                                            getCityDetailsOfState(state._id);
                                            setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, state: state?.name } })
                                        }}
                                    >
                                        {state?.name}
                                    </MenuItem>
                                ))
                                : "Select a state"
                            }
                        </Select>
                    } */}
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
                        Town / City  <span className="text-danger">*</span>{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        value={formAddress?.billingAddress?.city ?? ""}
                        placeholder="City "
                        onChange={(e) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, city: e.target.value } })}
                    />
                    {/* {
                        <Select
                            label="City"
                            className={styles.formTextField}
                            value={formAddress?.billingAddress?.city ?? ""}
                            size='small'
                        >
                            <MenuItem value={formAddress?.billingAddress?.city ?? ""}>
                                Select a state/region
                            </MenuItem>
                            {cityList && cityList.length > 0 ?
                                cityList.map((city: any, index: any) => (
                                    <MenuItem
                                        key={index}
                                        value={city?.name}
                                        onClick={(e) => {
                                            setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, city: city?.name } })
                                        }}
                                    >
                                        {city?.name}
                                    </MenuItem>
                                ))
                                : "Select a city"
                            }
                        </Select>
                    } */}
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
                        Address  <span className="text-danger">*</span>{' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Address Street, Area, ..."
                        value={formAddress?.billingAddress?.address}
                        inputProps={{ maxLength: 100 }}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, address: e.target.value } })} />
                </div>

                {/* <div className={styles.formControl}>
                    <label className={styles.formLabel}>
                        {' '}
                        Address line 2 {' '}
                    </label>
                    <Input
                        className={styles.formInput}
                        placeholder="Address line 2"
                        value={formAddress?.billingAddress?.address2}
                        onChange={(e: any) => setFormAddress({ ...formAddress, billingAddress: { ...formAddress.billingAddress, address2: e.target.value } })} />
                </div> */}
            </div>
        </>
    );
}