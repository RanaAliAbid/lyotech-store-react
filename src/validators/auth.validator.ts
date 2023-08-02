import {
  SignInData,
  SignInDataValidator,
  SignUpData,
  SignUpDataValidator,
} from '@/services/auth/auth.types';

const passwordRegex:any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const stringRegex = /[&\/\\#,+()@$~%.'":*?!<>{}]/g;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validatePassword = (password: string): boolean => {
  return passwordRegex.test(password);
};

export const validateSpacialChar = (text: string): boolean => {
  return stringRegex.test(text);
};

export const replaceSpecialChar = (text: string): string => {
  return text.replaceAll(stringRegex, '');
};

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const signUpCheckEmptyFields = (
  data: SignUpData | undefined
): SignUpDataValidator => {
  const dataValidate: SignUpDataValidator = {
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    password_confirm: true,
  };
  dataValidate.firstName = data?.firstName == '' ? false : true;
  dataValidate.lastName = data?.lastName == '' ? false : true;
  dataValidate.email = !validateEmail(data?.email ?? "") ? false : true;
  dataValidate.password = data?.password == '' ? false : true;
  dataValidate.password = !validatePassword(data?.password ?? "") ? false : true;
  dataValidate.password_confirm = data?.password_confirm == '' ? false : true;
  dataValidate.password_confirm =
    data?.password_confirm != data?.password ? false : true;

  return dataValidate;
};

export const signInCheckEmptyFields = (
  data: SignInData
): SignInDataValidator => {
  const dataValidate: SignInDataValidator = { email: true, password: true };
  dataValidate.email = !validateEmail(data?.email ?? "") ? false : true;
  dataValidate.password = data.password == '' ? false : true;
  dataValidate.password = !validatePassword(data.password) ? false : true;

  return dataValidate;
};
