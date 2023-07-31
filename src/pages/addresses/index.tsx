import * as React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Sidebar from '../../common/sidebar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { useGlobalContext } from '@/contexts/GlobalContext';
import { useAuthContext } from '@/contexts/AuthContext';
import { getUserAddressList, removeAddress, setUserDefaultAddress, addUserAddress, updateAddress } from '@/services/addresses/addresses.service';
import { getCityDetails, getCountry, getStateDetails } from '@/services/country/country.service';
import { countryCodeByCountryName, phoneNumberLenght, sortCountries } from '@/utils/app.utils';
import countries from '../../../data/countries.json';
import styles from '@/styles/Home.module.css';

import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({ subsets: ['latin'] });

import { createTheme, ThemeProvider, Alert } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';
import { AddressData, AddressDataValidator } from '@/services/addresses/addresses.types';

export default function Addresses() {
  const { t } = useTranslation('address');

  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const globalContext = useGlobalContext();
  const authContext = useAuthContext();

  const [validator, setValidator] = React.useState<AddressDataValidator>();
  const [userAddressList, setUserAddressList] = React.useState<any>([]);
  const [countryList, setCountryList] = React.useState<any>([]);
  const [stateList, setStateList] = React.useState<any>([]);
  const [cityList, setCityList] = React.useState<any>([]);
  const [country, setCountry] = React.useState<any>("");
  const [state, setState] = React.useState<any>("");
  const [city, setCity] = React.useState<any>("");
  const [countryCode, setCountryCode] = React.useState<string>("+971");
  const [countryCodeName, setCountryCodeName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [type, setType] = React.useState<string>("Home");
  const [address, setAddress] = React.useState<string>("");
  const [address2, setAddress2] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [phoneLength, setPhoneLength] = React.useState<number>(9);
  const [updateAddressId, setUpdateAddressId] = React.useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getUserAddresses = async () => {
    try {
      globalContext.setGlobalLoading(true);

      const result = await getUserAddressList();

      setUserAddressList(result?.data?.data);

      globalContext.setGlobalLoading(false);

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const getCountryList = async () => {
    try {
      const result = await getCountry();

      setCountryList(result?.data?.data?.country);
    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  }

  const getStateDetailsOfCountry = async (value: any, autoLoadCity: boolean = false, currentAddress: any = null) => {
    try {
      const result = await getStateDetails(value);
      setStateList(result?.data?.data?.states ?? []);

      if (autoLoadCity) {
        const state = result?.data?.data?.states?.find((x: any) => x?.name === currentAddress?.state)?._id

        if (state) {
          await getCityDetailsOfState(state)
        }
      }
    } catch (error) { }
  }

  const getCityDetailsOfState = async (value: any) => {
    try {
      const result = await getCityDetails(value);
      setCityList(result?.data?.data?.cities);
    } catch (error) { }
  }

  const removeUserAddress = async (value: string) => {
    try {
      const result = await removeAddress(value);
      if (result?.status === 200) {
        getUserAddresses();
      }
    } catch (error) { }
  }

  const setDefaultAddress = async (value: string) => {
    try {
      const result = await setUserDefaultAddress(value);
      if (result?.status === 200) {
        getUserAddresses();
      }
    } catch (error) { }
  }

  const getCountryCode = async (value: string) => {
    const code: string = countryCodeByCountryName(value) ?? "+971";
    setCountryCode(code);
    setCountryCodeName(value)

    const pLenght = phoneNumberLenght(value) ?? 9;
    setPhoneLength(pLenght);
  }

  const proceedAddAddress = async (e: any) => {
    e.preventDefault();

    if (!authContext.userConnected) return;

    const postData = e.target;

    const dataValidate: AddressDataValidator = {
      country: true,
      state: true,
      city: true,
      type: true,
      address: true,
      code: true,
      contact: true,
    };

    dataValidate.country = postData[0].value == '' ? false : true;
    dataValidate.state = postData[2].value == '' ? false : true;
    dataValidate.city = postData[4].value == '' ? false : true;
    dataValidate.type = postData[6].value == '' ? false : true;
    dataValidate.address = postData[7].value == '' ? false : true;
    dataValidate.code = postData[9].value == '' ? false : true;
    dataValidate.contact = postData[11].value == '' ? false : true;

    if (postData[11].value.length != phoneLength) {
      dataValidate.contact = false;
    }

    setValidator(dataValidate);

    if (
      !dataValidate.country ||
      !dataValidate.city ||
      !dataValidate.type ||
      !dataValidate.address ||
      !dataValidate.code ||
      !dataValidate.contact
    )
      return false;

    try {
      globalContext.setGlobalLoading(true);
      handleClose();

      const data = {
        country: postData[0].value,
        state: postData[2].value,
        city: postData[4].value,
        type: postData[6].value,
        address: postData[7].value, //postData[8].value
        code: countryCodeByCountryName(postData[0].value) ?? "+971",//postData[9].value,
        contact: postData[11].value,
        latitude: 0,
        longitude: 0
      };

      let result: any;
      if (updateAddressId.length > 5) {
        result = await updateAddress(data, updateAddressId);
      } else {
        result = await addUserAddress(data)
      }

      globalContext.setGlobalLoading(false);
      if (result?.status === 200) {
        getUserAddresses();
      }

    } catch (error) {
      globalContext.setGlobalLoading(false);
    }
  };

  const editAddress = async (address: any) => {
    setUpdateAddressId(address?._id);
    await getStateDetailsOfCountry(countryList?.find((x: any) => x?.name === address?.country)?._id ?? "0", true, address);

    setCountry(address?.country);
    setCountryCodeName(address?.country);
    setAddress(address?.address);
    setType(address?.type);
    setPhone(address?.contact);
    setCountryCode(address?.code);
    setState(address?.state);
    setCity(address?.city);

    setValidator(resetValidator());

    handleOpen();
  }

  const addNewAddress = () => {
    setUpdateAddressId("");
    setCountry("");
    setCountryCodeName("");
    setAddress("");
    setType("");
    setPhone("");
    setCountryCode("");
    setState("");
    setCity("");

    setValidator(resetValidator());

    handleOpen();
  }

  const resetValidator = () => {
    const dataValidate: AddressDataValidator = {
      country: true,
      state: true,
      city: true,
      type: true,
      address: true,
      code: true,
      contact: true,
    };
    return dataValidate;
  }

  React.useEffect(() => {
    getUserAddresses();
    getCountryList();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Header title={t('header1')} />
          <div className={styles.paddingTB60}>
            <Container className={styles.containerBox}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} className={styles.sidebarGrid}>
                  <Sidebar />
                </Grid>

                <Grid item md={9} xs={12}>
                  <div className={styles.wrapTitle}>
                    <Typography variant="h4">{t('header1')}</Typography>
                    <Button onClick={() => addNewAddress()}>Add new address</Button>
                  </div>

                  <div
                    className={`${styles['wrapBox']} ${styles['addressSection']}`}
                  >
                    <div className={styles.boxInfo}>
                      <div className={styles.wrapSubTitle}>
                        <Typography variant="h4">
                          {t('Default-address')}
                        </Typography>
                      </div>

                      <div className={styles.boxInfoBody}>
                        <List>
                          <ListItem style={{ width: '100%' }}>
                            <div className={styles.addresses}>

                              {userAddressList?.address?.defaultAddress ?
                                <>
                                  <div className={styles.addressesType}>
                                    <Typography variant="h4" className='text-capitalize'>
                                      {userAddressList?.address?.defaultAddress?.type}
                                    </Typography>
                                  </div>

                                  <Typography variant="body1">
                                    {userAddressList?.address?.defaultAddress?.address}<br />
                                    {userAddressList?.address?.defaultAddress?.city}<br />
                                    {userAddressList?.address?.defaultAddress?.country}<br />
                                    <span>{userAddressList?.address?.defaultAddress?.code} {userAddressList?.address?.defaultAddress?.contact}</span>
                                  </Typography>

                                  {/* <div className={styles.actionBtn}>
                                    <Button
                                      variant="outlined"
                                      className={`${styles['btn']} ${styles['btn_outlined']}`}
                                      onClick={(e) => editAddress(userAddressList?.address?.defaultAddress)}
                                    >
                                      {' '}
                                      {t('edit-btn')}{' '}
                                    </Button>
                                    <Button
                                      variant="text"
                                      className={`${styles['btn']} ${styles['btn_delete']}`}
                                      onClick={(e) => removeUserAddress(userAddressList?.address?.defaultAddress?.addressId)}
                                    >
                                      {t('delete-btn')}
                                    </Button>
                                  </div> */}
                                </>
                                :
                                <Typography variant="body1">
                                  No addresses added
                                </Typography>
                              }
                            </div>
                          </ListItem>
                        </List>
                      </div>
                    </div>

                    <div className={styles.boxInfo}>
                      <div className={styles.wrapSubTitle}>
                        <Typography variant="h4">
                          {t('Other-address')}
                        </Typography>
                      </div>

                      <div className={styles.boxInfoBody}>
                        <List>
                          {userAddressList?.address?.address && userAddressList?.address?.address.length > 0 ?
                            userAddressList?.address?.address.map(
                              (address: any, index: any) => (
                                <ListItem key={index}>
                                  <div className={styles.addresses}>
                                    <div className={styles.addressesType}>
                                      <Typography variant="h4" className='text-capitalize'>
                                        {address?.type}
                                      </Typography>
                                      {userAddressList?.address?.defaultAddress?.addressId !== address?.addressId ?
                                        <Typography variant="h6">
                                          <Link onClick={(e) => setDefaultAddress(address?.addressId)}> {t('set-as-default')} </Link>
                                        </Typography>
                                        : ""
                                      }
                                    </div>

                                    <Typography variant="body1">
                                      {address?.address}<br />
                                      {address?.city}<br />
                                      {address?.country}<br />
                                      <span>{address?.code} {address?.contact}</span>
                                    </Typography>


                                    <div className={styles.actionBtn}>
                                      <Button
                                        variant="outlined"
                                        className={`${styles['btn']} ${styles['btn_outlined']}`}
                                        onClick={(e) => editAddress(address)}
                                      >
                                        {' '}
                                        {t('edit-btn')}{' '}
                                      </Button>
                                      <Button
                                        variant="text"
                                        className={`${styles['btn']} ${styles['btn_delete']}`}
                                        onClick={(e) => removeUserAddress(address?.addressId)}
                                      >
                                        {t('delete-btn')}
                                      </Button>
                                    </div>
                                  </div>
                                </ListItem>
                              )
                            )
                            :
                            ""
                          }


                        </List>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={styles.customModal}>
              <Typography variant="h6">
                {t('Add Address')}
              </Typography>

              <form
                method="post"
                onSubmit={(e) => proceedAddAddress(e)}
                className={styles.customForm}
              >

                <div className={`${styles.wrapBox} maxH-85`}>
                  <div className={styles.flexBox}>

                    <div className={`${styles.formControl}`} style={{ width: '98%' }}>
                      <label className={styles.formLabel}>
                        {' '}

                        <div style={{ width: "100%" }}>
                          <Stack direction="row" spacing={1}>
                            <Chip label="Type :" variant="outlined" style={{ border: "0px", width: "70px" }} />
                            <Chip color={`${(type == "Home") ? 'primary' : "default"}`} label="Home" className="cursor-pointer" onClick={(e) => setType("Home")} />
                            <Chip color={`${(type == "Work") ? 'primary' : "default"}`} label="Work" className="cursor-pointer" onClick={(e) => setType("Work")} />
                            <Chip color={`${(type == "Other") ? 'primary' : "default"}`} label="Other" className="cursor-pointer" onClick={(e) => setType("Other")} />
                          </Stack>
                        </div>
                      </label>
                      <Input
                        className={styles.formInput}
                        placeholder="Address type"
                        value={type}
                        readOnly
                        onChange={(e) => setType(e.target.value)}
                      />
                      <div className={styles.inline}>
                        <div className={`${styles.formControl} w-100`}>
                          <span className="alert-field">
                            {validator && !validator.type && (
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
                        Country *{' '}
                      </label>
                      <Select
                        label="Country"
                        className={`${styles.formTextField} formSelect`}
                        value={country ?? ""}
                        size="small"
                      >
                        {countryList.map((country: any, index: any) => (
                          <MenuItem
                            key={index}
                            value={country.name}
                            onClick={(e) => {
                              getStateDetailsOfCountry(country._id);
                              setCountry(country.name);
                              setCountryCodeName(country.name);
                            }}
                          >
                            {country.name}
                          </MenuItem>
                        ))}

                      </Select>

                      <div className={styles.inline}>
                        <div className={`${styles.formControl} w-100`}>
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
                          value={state ?? ""}
                          size="small"
                        >
                          <MenuItem value={""}>
                            Select a State/Region
                          </MenuItem>
                          {stateList && stateList.length > 0 ?
                            stateList.map((state: any, index: any) => (
                              <MenuItem
                                key={index}
                                value={state?.name}
                                onClick={(e) => {
                                  getCityDetailsOfState(state._id);
                                  setState(state?.name)
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
                        <div className={`${styles.formControl} w-100`}>
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
                          value={city ?? ""}
                          size="small"
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
                                  setCity(city?.name)
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
                        <div className={`${styles.formControl} w-100`}>
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
                        Address line 1 *{' '}
                      </label>
                      <Input
                        className={styles.formInput}
                        placeholder="Address line 1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <div className={styles.inline}>
                        <div className={`${styles.formControl} w-100`}>
                          <span className="alert-field">
                            {validator && !validator.address && (
                              <Alert severity="error">
                                {t('required-field-error')}
                              </Alert>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.formControl}`} style={{ display: "none" }}>
                      <label className={styles.formLabel}>
                        {' '}
                        Address line 2 {' '}
                      </label>
                      <Input
                        className={styles.formInput}
                        placeholder="Address line 2"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>


                    <div className={styles.formControl}>
                      <label className={styles.formLabel}>
                        {' '}
                        Country code *{' '}
                      </label>
                      <Select
                        className={styles.formTextField}
                        value={countryCodeName}
                        defaultValue={"United Arab Emirates"}
                        variant="outlined"
                        size="small"
                      >
                        <MenuItem value={""}>
                          Select a state/region
                        </MenuItem>
                        {sortCountries(countries.data).map(
                          (country: any, index: any) => (
                            <MenuItem
                              className="countries-menu-item"
                              key={index}
                              value={country?.name?.common}
                              onClick={(e) => {
                                getCountryCode(country?.name?.common);
                              }}
                            >
                              <img
                                src={country?.flags?.png}
                                className="country-flag"
                                style={{ float: "left" }}
                              />{' '}
                              &nbsp;<span className="badge" style={{ width: "60px" }}>({countryCodeByCountryName(country?.name?.common)})</span> {country?.name?.common}
                            </MenuItem>
                          )
                        )}
                      </Select>
                      <div className={styles.inline}>
                        <div className={`${styles.formControl} w-100`}>
                          <span className="alert-field">
                            {validator && !validator.code && (
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
                        Mobile number *{' '}

                      </label>
                      <Input
                        className={styles.formInput}
                        value={phone}
                        type='number'
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <div className={`${styles.formControl} w-100`}>
                        <span className="alert-field">
                          {validator && !validator.contact && (
                            <Alert severity="error">
                              {t('required-field-error')} (Length: {phoneLength})
                            </Alert>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleClose()}
                    type="button"
                    variant="contained"
                    className={`${styles['btn']} bg-danger`}
                  >
                    {' '}
                    Close
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    className={`${styles['btn']} ${styles['btn_primary']} float-right`}
                  >
                    {' '}
                    Save Address
                  </Button>
                </div>

              </form>

            </Box>
          </Modal>

          <Footer />
        </main>
      </ThemeProvider >
    </>
  );
}
