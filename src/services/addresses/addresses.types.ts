/////// Post data types

export type AddressData = {
    type: string;  
    address: string;
    country: string;
    city: string;
    code: string;
    contact: number;
    latitude: number;
    longitude: number;
  };

/////// Validators Types

  export type AddressDataValidator = {
    type: boolean;  
    address: boolean;
    state: boolean;
    country: boolean;
    city: boolean;
    code: boolean;
    contact: boolean;  
  };