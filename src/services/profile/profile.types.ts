// POST data types
export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
  countryCode: string;
  prefferredLanguage: string;
  oldPassword: boolean;
  newPassword: boolean;
  confirm_password: string;
};

// Validators data types
export type ProfileDataValidator = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  mobileNumber: boolean;
  prefferredLanguage: boolean;
  countryCode: boolean;
  oldPassword: boolean;
  newPassword: boolean;
  confirm_password: boolean;
};
