import countriesCode from "../../data/countriesCode.json";
import countries from "../../data/countries.json";
import phoneLength from "../../data/phoneLength.json";

export const homePageProducts = {
  "LFI_ONE_Smartphone": "64a6b8796516ac2db58264d9",
  "LYO_Watch": "64a407cca23f0f287a41df0a",
  "LYO_Tab": "64a408cba23f0f287a41df1e",
}

export const appLanguages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'it',
    label: 'Italian',
  },
  // {
  //   value: 'fr',
  //   label: 'French',
  // },
  // {
  //   value: 'es',
  //   label: 'Spanish',
  // },
];

export const formatCountryCode = (country: any) => {
  try {
    let code = country?.idd?.root

    if (country?.idd?.suffixes?.length == 1) {
      code += country.idd?.suffixes[0];
    }

    return code;

  } catch (error) {
    return "";
  }
}

export const countryCodeByCountryName = (country: any) => {
  try {
    const data: any = countries.data.find((x: any) => x?.name?.common == country);

    let code = countriesCode.data.find((x: any) => x.code == data?.cca2)?.dial_code
    return code;

  } catch (error) {
    return "";
  }
}

export const sortCountries = (countries: any) => {
  return countries.sort((a: any, b: any) =>
    b?.name?.common?.toLowerCase() < a?.name?.common?.toLowerCase() ? 1 :
      (b?.name?.common?.toLowerCase() > a?.name?.common?.toLowerCase() ? -1 : 0)
  );
}

export const phoneNumberLenght = (country: string) => {
  try {
    const data: any = countries.data.find((x: any) => x?.name?.common == country);

    let phoneL = phoneLength.data.find((x: any) => x.cca2 == data?.cca2)?.phLength;

    return phoneL;
  } catch (error) {
    return 0
  }
}

export const priceSymbol = (name: string) => {
  switch (name) {
    case "euro": return "€";
    case "dollar": return "$";
    case "dirahm": return "د.إ";
    default: return "€";
  }
}