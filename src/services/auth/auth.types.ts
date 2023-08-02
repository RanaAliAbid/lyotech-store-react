/////// Post data types

export type PartnerLinkData = {
  productId: number;
  handoverToken: string;
  voucher:string
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirm: string;
};

export type ForgotPasswordData = {
  email: string;
};

export type EmailOtpData = {
  otp: number;
  accesstoken: string;
};

/////// Validators Types

export type SignInDataValidator = {
  email: boolean;
  password: boolean;
};

export type SignUpDataValidator = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  password_confirm: boolean;
};

export type EmailOtpDataValidaor = {
  otp: {
    required: boolean;
    regex: string;
  };
  accesstoken: {
    required: boolean;
    regex: string;
  };
};
