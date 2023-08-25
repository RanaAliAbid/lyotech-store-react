import countriesCode from '../../data/countriesCode.json';
import countries from '../../data/countries.json';
import phoneLength from '../../data/phoneLength.json';
import secureLocalStorage from 'react-secure-storage';
import { withSwal } from 'react-sweetalert2';

export const lfi_one_smartphone = 'lfiphone';
export const lyo_watch = 'lyowatch';
export const lyo_tab = 'lyotab';
export const lyo_special_phone1 = 'lyo_special_phone1';
export const lyo_special_phone2 = 'lyo_special_phone2';

export const homePageProducts = {
  LFI_ONE_Smartphone: lfi_one_smartphone,
  LYO_Watch: lyo_watch,
  LYO_Tab: lyo_tab,
  LYO_Special_phone1: lyo_special_phone1,
  LYO_Special_phone2: lyo_special_phone2,
};

export const _defaultHomePageProducts = homePageProducts;

export const appLanguages = [
  {
    value: 'en',
    label: 'English',
    status: true,
  },
  {
    value: 'it',
    label: 'Italian',
    status: true,
  },
];

export const formatCountryCode = (country: any) => {
  try {
    let code = country?.idd?.root;

    if (country?.idd?.suffixes?.length == 1) {
      code += country.idd?.suffixes[0];
    }

    return code;
  } catch (error) {
    return '';
  }
};

export const countryCodeByCountryName = (country: any) => {
  try {
    const data: any = countries.data.find(
      (x: any) => x?.name?.common == country
    );

    let code = countriesCode.data.find(
      (x: any) => x.code == data?.cca2
    )?.dial_code;
    return code;
  } catch (error) {
    return '';
  }
};

export const sortCountries = (countries: any) => {
  return countries.sort((a: any, b: any) =>
    b?.name?.common?.toLowerCase() < a?.name?.common?.toLowerCase()
      ? 1
      : b?.name?.common?.toLowerCase() > a?.name?.common?.toLowerCase()
      ? -1
      : 0
  );
};

export const phoneNumberLenght = (country: string) => {
  try {
    const data: any = countries.data.find(
      (x: any) => x?.name?.common.toLowerCase() == country.toLowerCase()
    );

    let phoneL = phoneLength.data.find(
      (x: any) => x.cca2 == data?.cca2
    )?.phLength;

    return phoneL;
  } catch (error) {
    return 0;
  }
};

export const setLocalStorage = (key: string, data: string) => {
  secureLocalStorage.setItem(key, data);
  return true;
};

export const getLocalStorage = (key: string) => {
  return secureLocalStorage.getItem(key);
};

export const hash256 = async (string: string) => {
  try {
    if (process.env.APP_ENV_TYPE === 'dev')
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  } catch (e) {
    console.log(e);
    return '';
  }
};

export const priceSymbol = (name: string) => {
  switch (name) {
    case 'euro':
      return '€';
    case 'dollar':
      return '$';
    case 'dirahm':
      return 'د.إ';
    default:
      return '€';
  }
};

export const priceShortName = (name: string) => {
  switch (name) {
    case 'euro':
      return 'EUR';
    case 'dollar':
      return 'USD';
    case 'dirahm':
      return 'AED';
    default:
      return 'EUR';
  }
};

export const feesType = (name: string) => {
  switch (name) {
    case 'activation':
      return 'Activation-Fee';
    case 'membership':
      return 'Membership-Fee';
    case 'payment':
      return 'Payment-Processing-Fee';
    case 'oneCare':
      return 'One-Care-Policy';
    case 'shipping':
      return 'Shipping Fee';
    case 'vat':
      return 'VAT';
    case 'platform':
      return 'Platform Processing Fee';
    default:
      return '';
  }
};

export function trimStringData(stringData: string | undefined, length: number) {
  if (!stringData) return;
  return (
    stringData.slice(0, length / 2) + '...' + stringData.slice(-length / 2)
  );
}

export const copyTextToClipboard = (text: any) => {
  // Copy text to Clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return true;
  } else {
    return false;
  }
};
