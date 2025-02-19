import {
  ForgotPasswordData,
  PartnerLinkData,
  SignInData,
  SignUpData,
} from './auth.types';
import { API_HOST, PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';
import { ApiService } from '../api.service';

export const verifyUserHandover = async (params: PartnerLinkData) => {
  try {
    const result = await ApiService.GetRequest(
      `${API_HOST}/v1/user/auth/${params?.productId}/${params?.handoverToken}/${params?.voucher}`
    );

    return {
      success: true,
      message: 'Product added to cart',
      data: result?.data?.data?.jwtToken,
    };
  } catch (error: any) {
    console.log(
      '🚀 ~ file: auth.service.ts:22 ~ verifyUserHandover ~ error:',
      error
    );
    return {
      success: false,
      message:
        error?.response?.data?.msg?.message ??
        'An error occured please try again later',
      data: null,
    };
  }
};

export const verifyUserCheckoutToken = async ({
  token,
  payment = false,
}: {
  token: string;
  payment: boolean;
}) => {
  try {
    const result = await ApiService.GetRequest(
      `${API_HOST}/v1/user/user-partner/checkout/${atob(token)}`
    );
    // console.log("🚀 ~ file: auth.service.ts:48 ~ result:", result)

    return {
      success: true,
      message: 'Product added to cart',
      data: result?.data?.data?.accessToken,
    };
  } catch (error: any) {
    console.log(
      '🚀 ~ file: auth.service.ts:22 ~ verifyUserCheckoutToken ~ error:',
      error
    );
    return {
      success: false,
      message:
        error?.response?.data?.msg?.message ??
        'An error occured please try again later',
      data: null,
    };
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/signin', body);
  } catch (error) {
    return null;
  }
};

export const signUpUser = async (params: SignUpData | undefined) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/verify-email-otp',
      body,
      keyToken
    );
  } catch (error) {
    return null;
  }
};

export const resendUserEmailOtp = async (token: string, keyToken: string) => {
  try {
    const params = { token: token };
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
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
    const body = await ProxyService.generateHashKey(JSON.stringify(params));
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
