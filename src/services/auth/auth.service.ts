import {
  ForgotPasswordData,
  PartnerLinkData,
  SignInData,
  SignUpData,
} from './auth.types';
import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const verifyUserHandover = async (params: PartnerLinkData) => {
  try {
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/checktoken',
      params
    );
  } catch (error) {
    return null;
  }
};

export const validateUserSession = async () => {
  try {
    return ProxyService.GetRequest(PROXY_HOST + '/api/v1/checktoken');
  } catch (error) {
    return null;
  }
};

export const signInUser = async (params: SignInData) => {
  try {
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/signin', params);
  } catch (error) {
    return null;
  }
};

export const signUpUser = async (params: SignUpData) => {
  try {
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/signup', params);
  } catch (error) {
    return null;
  }
};

export const validateUserEmailOtp = async (
  token: string,
  otp: string,
  keyToken: string
) => {
  try {
    const params = { token: token, otp: parseInt(otp) };
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/verify-email-otp',
      params,
      keyToken
    );
  } catch (error) {
    return null;
  }
};

export const resendUserEmailOtp = async (
  token: string,
  keyToken: string
) => {
  try {
    const params = { token: token };
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/resend-email-otp',
      params,
      keyToken
    );
  } catch (error) {
    return null;
  }
};

export const fogotPasswordUser = async (params: ForgotPasswordData) => {
  try {
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/forgot-password',
      params
    );
  } catch (error) {
    return null;
  }
};

export const changePasswordUser = async (params: ForgotPasswordData) => {
  try {
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/change-password',
      params
    );
  } catch (error) {
    return null;
  }
};

export const signOutUser = async () => {
  try {
    return ProxyService.GetRequest(PROXY_HOST + '/api/v1/logout');
  } catch (error) {
    return null;
  }
};