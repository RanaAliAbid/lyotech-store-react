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
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/checktoken',
      body
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/signin', body);
  } catch (error) {
    return null;
  }
};

export const signUpUser = async (params: SignUpData) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/signup', body);
  } catch (error) {
    return null;
  }
};

export const validateUserEmailOtp = async (
  token: string,
  otp: string,
  keyToken: string,
  session: boolean = false
) => {
  try {
    const params = { token: token, otp: parseInt(otp), session: !session };
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/verify-email-otp',
      body,
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/resend-email-otp',
      body,
      keyToken
    );
  } catch (error) {
    return null;
  }
};

export const fogotPasswordUser = async (params: ForgotPasswordData) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/forgot-password',
      body
    );
  } catch (error) {
    return null;
  }
};

export const changePasswordUser = async (params: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/change-password',
      body
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