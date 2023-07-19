import {
  SignInData,
  SignInDataValidator,
  SignUpData,
  SignUpDataValidator,
} from '@/services/auth/auth.types';

const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
const stringRegex = /[&\/\\#,+()@$~%.'":*?!<>{}]/g;

export const validatePassword = (password: string): boolean => {
  return passwordRegex.test(password);
};

export const validateSpacialChar = (text: string): boolean => {
  return stringRegex.test(text);
};

export const replaceSpecialChar = (text: string): string => {
  return text.replaceAll(stringRegex, '');
};

export const signUpCheckEmptyFields = (
  data: SignUpData
): SignUpDataValidator => {
  const dataValidate: SignUpDataValidator = {
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    password_confirm: true,
  };
  dataValidate.firstName = data.firstName == '' ? false : true;
  dataValidate.lastName = data.lastName == '' ? false : true;
  dataValidate.email = data.email == '' ? false : true;
  dataValidate.password = data.password == '' ? false : true;
  dataValidate.password = !validatePassword(data.password) ? false : true;
  dataValidate.password_confirm = data.password_confirm == '' ? false : true;
  dataValidate.password_confirm =
    data.password_confirm != data.password ? false : true;

  return dataValidate;
};

export const signInCheckEmptyFields = (
  data: SignInData
): SignInDataValidator => {
  const dataValidate: SignInDataValidator = { email: true, password: true };
  dataValidate.email = data.email == '' ? false : true;
  dataValidate.password = data.password == '' ? false : true;
  dataValidate.password = !validatePassword(data.password) ? false : true;

  return dataValidate;
};
