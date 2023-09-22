import * as React from 'react';

import styles from '@/styles/Home.module.css';

import Input from '@mui/material/Input';
import { Alert, MenuItem, Select } from '@mui/material';

import { AddressDataValidator } from '@/services/addresses/addresses.types';
import {
  getCityDetails,
  getCountry,
  getStateDetails,
} from '@/services/country/country.service';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import useTranslation from 'next-translate/useTranslation';

export default function ShippingFormComponent({
  localAddress,
  formAddress,
  setFormAddress,
  partnerCheckout,
}: {
  localAddress: any;
  formAddress: any;
  setFormAddress: any;
  partnerCheckout: boolean;
}) {
  const [validator, setValidator] = React.useState<AddressDataValidator>();
  const [cityList, setCityList] = React.useState<any>([]);
  const [countryList, setCountryList] = React.useState<any>([]);
  const [state, setState] = React.useState<any>('');
  const [city, setCity] = React.useState<any>('');
  const [countryCode, setCountryCode] = React.useState<string>('+971');
  const [countryCodeName, setCountryCodeName] = React.useState<string>('');
  const [stateList, setStateList] = React.useState<any>([]);
  const [hideStateList, setHideStateList] = React.useState<boolean>(false);

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();
  const { t } = useTranslation('cart');

  const getCountryList = async () => {
    try {
      const result: any = await getCountry();

      // if (formAddress?.shippingAddress?.country) {
      //   getStateDetailsOfCountry(
      //     result?.data?.data?.country?.find(
      //       (x: any) => x.name === formAddress?.shippingAddress?.country ?? ''
      //     )?._id,
      //     true,
      //     formAddress?.shippingAddress
      //   );
      // } else {
      //
      const tmpCountry = result?.data?.data?.country?.find(
        (x: any) => x._id === globalContext?.cart?.cart?.country ?? ''
      )?.name;

      setFormAddress({
        ...formAddress,
        shippingAddress: {
          ...formAddress.shippingAddress,
          country: tmpCountry,
        },
      });
      // }

      setCountryList(result?.data?.data?.country);

      globalContext.setGlobalLoading(false);
    } catch (error) {}
  };

  const handleChangeCountryType = async (countryId: string) => {
    try {
      globalContext.setGlobalLoading(true);

      const result = await globalContext.updateCartCountry(countryId);

      if (!result) {
        globalContext.setGlobalLoading(false);
      }
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const handleChangeCountryName = async (name: string) => {
    let currentAddress = formAddress;
    currentAddress.shippingAddress.country = name;
    // currentAddress.shippingAddress.city = "";
    // currentAddress.shippingAddress.state = "";

    setFormAddress(currentAddress);
    // setCityList([])
    // setStateList([])
  };

  const getStateDetailsOfCountry = async (
    value: any,
    autoLoadCity: boolean = false,
    currentAddress: any = null
  ) => {
    try {
      return;
      const result = await getStateDetails(value);

      if (result?.data?.data?.cities) {
        setCityList(result?.data?.data?.cities);
        setHideStateList(true);
        setFormAddress({
          ...formAddress,
          shippingAddress: { ...formAddress.shippingAddress, state: '' },
        });
      } else {
        setHideStateList(false);

        setStateList(result?.data?.data?.states ?? []);

        if (autoLoadCity) {
          const state = result?.data?.data?.states?.find(
            (x: any) => x?.name === currentAddress?.state ?? ''
          )?._id;

          if (state) {
            await getCityDetailsOfState(state);
          }
        }
      }
    } catch (error) {}
  };

  const getCityDetailsOfState = async (value: any) => {
    try {
      return;
      const result = await getCityDetails(value);
      setCityList(result?.data?.data?.cities);
    } catch (error) {}
  };

  React.useEffect(() => {
    getCountryList();
  }, [localAddress]);

  React.useEffect(() => {
    if (countryList && countryList.length > 0) {
      const countryId = countryList.find(
        (country: any) =>
          country.name.toLowerCase() ===
            formAddress?.shippingAddress?.country?.toLowerCase() ??
          'united arab emirates'
      )?._id;
      // && !globalContext.cart?.cart?.partner
      if (countryId?.length > 5) {
        handleChangeCountryType(countryId);
      }
    }
  }, [countryList]);

  return (
    <>
      <div className={styles.flexBox}>
        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            {' '}
            First name <span className="text-danger">*</span>{' '}
          </label>
          <Input
            className={styles.formInput}
            placeholder="First name"
            value={formAddress?.shippingAddress?.firstName}
            onChange={(e: any) =>
              setFormAddress({
                ...formAddress,
                shippingAddress: {
                  ...formAddress.shippingAddress,
                  firstName: e.target.value,
                },
              })
            }
          />
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            {' '}
            Last name <span className="text-danger">*</span>{' '}
          </label>
          <Input
            className={styles.formInput}
            placeholder="Last name"
            value={formAddress?.shippingAddress?.lastName}
            onChange={(e: any) =>
              setFormAddress({
                ...formAddress,
                shippingAddress: {
                  ...formAddress.shippingAddress,
                  lastName: e.target.value,
                },
              })
            }
          />
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            {' '}
            Email Address <span className="text-danger">*</span>{' '}
          </label>
          <Input
            className={styles.formInput}
            placeholder="Email Address"
            value={formAddress?.shippingAddress?.email}
            onChange={(e: any) =>
              setFormAddress({
                ...formAddress,
                shippingAddress: {
                  ...formAddress.shippingAddress,
                  email: e.target.value,
                },
              })
            }
          />
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            {' '}
            Phone <span className="text-danger">*</span>
          </label>
          <Input
            className={styles.formInput}
            placeholder="Phone Number"
            value={formAddress?.shippingAddress?.phone}
            onChange={(e: any) =>
              setFormAddress({
                ...formAddress,
                shippingAddress: {
                  ...formAddress.shippingAddress,
                  phone: e.target.value,
                },
              })
            }
          />
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            {' '}
            Country <span className="text-danger">*</span>{' '}
          </label>

          {countryList && countryList.length > 0 && (
            <Select
              label="Country"
              className={`${styles.formTextField} formSelect`}
              value={formAddress?.shippingAddress?.country ?? ''}
              size="small"
            >
              <MenuItem
                value={formAddress?.shippingAddress?.country ?? ''}
                disabled
              >
                Select a Country
              </MenuItem>
              {countryList.map((country: any, index: any) => (
                <MenuItem
                  key={index}
                  value={country.name}
                  onClick={async (e) => {
                    await handleChangeCountryName(country.name);
                    getStateDetailsOfCountry(country._id);
                    setCountryCodeName(country.name);
                    handleChangeCountryType(country._id);
                  }}
                >
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          )}

          <div className={styles.inline}>
            <div className={styles.formControl}>
              <span className="alert-field">
                {validator && !validator.country && (
                  <Alert severity="error">{t('required-field-error')}</Alert>
                )}
              </span>
            </div>
          </div>
        </div>

        {!partnerCheckout && (
          <>
            <div className={styles.formControl}>
              <label className={styles.formLabel}>
                {' '}
                State / Region
                {/* <span className="text-danger">*</span> */}
              </label>
              <Input
                className={styles.formInput}
                value={formAddress?.shippingAddress?.state ?? ''}
                placeholder="State / Region"
                onChange={(e) =>
                  setFormAddress({
                    ...formAddress,
                    shippingAddress: {
                      ...formAddress.shippingAddress,
                      state: e.target.value,
                    },
                  })
                }
              />

              {/* {
                        <Select
                            label="States"
                            className={styles.formTextField}
                            value={formAddress?.shippingAddress?.state ?? ""}
                            size='small'
                            disabled={hideStateList}
                        >
                            <MenuItem value={formAddress?.shippingAddress?.state ?? ""} disabled>
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
                Town / City <span className="text-danger">*</span>{' '}
              </label>
              <Input
                className={styles.formInput}
                value={formAddress?.shippingAddress?.city ?? ''}
                placeholder="City "
                onChange={(e) =>
                  setFormAddress({
                    ...formAddress,
                    shippingAddress: {
                      ...formAddress.shippingAddress,
                      city: e.target.value,
                    },
                  })
                }
              />
              {/* {
                        <Select
                            label="City"
                            className={styles.formTextField}
                            value={formAddress?.shippingAddress?.city ?? ""}
                            size='small'
                        >
                            <MenuItem value={formAddress?.shippingAddress?.city ?? ""}>
                                Select a city
                            </MenuItem> */}

              {/* {cityList && cityList.length > 0 ?
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
                            } */}
              {/* </Select>
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
              <label className={styles.formLabel}> Partner User ID </label>
              <Input
                className={styles.formInput}
                disabled
                value={authContext?.connectedUser?.licNumber ?? ''}
                placeholder="Partner User ID "
              />
            </div>

            <div className={styles.formControl}>
              <label className={styles.formLabel}>
                {' '}
                Address <span className="text-danger">*</span>{' '}
              </label>
              <Input
                className={styles.formInput}
                placeholder="Address Street, Area, ..."
                value={formAddress?.shippingAddress?.address}
                onChange={(e: any) =>
                  setFormAddress({
                    ...formAddress,
                    shippingAddress: {
                      ...formAddress.shippingAddress,
                      address: e.target.value,
                    },
                  })
                }
              />
            </div>
          </>
        )}

        <div className={styles.formControl}>
          <label className={styles.formLabel}> Order notes </label>
          <Input
            className={styles.formInput}
            placeholder="Order notes (optional)"
            value={formAddress?.notes}
            onChange={(e: any) =>
              setFormAddress({ ...formAddress, notes: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}
