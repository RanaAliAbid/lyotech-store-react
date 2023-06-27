// POST data types
export type ProfileData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  oldpassword: string;
  newpassword: string;
  confirm_password: string;
};

// Validators data types
export type ProfileDataValidator = {
  firstname: boolean;
  lastname: boolean;
  email: boolean;
  phone: boolean;
  oldpassword: boolean;
  newpassword: boolean;
  confirm_password: boolean;
};
