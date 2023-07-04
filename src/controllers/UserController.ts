import { ApiData, ApiError } from '@/pages/api/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST } from '../../app.config';
import { ApiService } from '@/services/api.service';


export const signIn = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/login', data);

    if (result && result.status == 200) {
      console.log(result.data.data);

      res.setHeader("Set-Cookie", [
        `otpToken=${result?.data?.data?.otpVerificationToken}; HttpOnly; Max-Age=3600;`,
        `token=${result?.data?.data?.token}; HttpOnly; Max-Age=3600;`,
      ]);

      res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, 'Sucessfull login. Please verify your email'));
    }
  } catch (error: any) {
    console.log('Catch error login ', error?.response?.data);
    if (
      error?.response?.data?.errors?.data?.jwtToken &&
      error?.response?.data?.errors?.data?.userVerified == false
    ) {
      res.status(200).json({
        message: 'Sucessfull login! Account not verified',
        status: true,
        data: error?.response?.data?.errors?.data,
      });
    } else {
      res.status(400).json(ApiService.ApiResponseError(error));
    }
  }
};

export const signUp = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;
    const result = await ApiService.PostRequest(API_HOST + '/v1/user/sign-up', data);

    res.setHeader("Set-Cookie", [
      `otpToken=${result?.data?.data?.otpVerificationToken}; HttpOnly; Max-Age=3600;`,
      `token=${result?.data?.data?.token}; HttpOnly; Max-Age=3600;`,
    ]);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, 'Sucessfull register. Please verify your email'));

  } catch (error: any) {
    console.log('Catch error register ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const verifyEmailOtp = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/verify-user', data, `Bearer ${req.cookies?.otpToken}`);

    res.setHeader("set-Cookie", [
      `userConnected=${"true"}; Max-Age=36000;`,
      `authToken=${result?.data?.data?.accessToken}; HttpOnly; Max-Age=36000;`,
      `refreshToken=${result?.data?.data?.refreshToken}; HttpOnly; Max-Age=36000;`,
      `otpToken=deleted; HttpOnly; Max-Age=0;`,
      `token=deleted; HttpOnly; Max-Age=0;`,
    ]);

    res.status(200).json(ApiService.ApiResponseSuccess({}, 'Email verification completed'));

  } catch (error: any) {
    console.log('Catch error resend email otp ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const resendUserEmailOtp = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/resend-otp', data, `Bearer ${req.cookies?.otpToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'Email OTP sended'));

  } catch (error: any) {
    console.log('Catch error verify email otp ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const validateUserToken = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    const result = await ApiService.GetRequest(API_HOST + '/v1/user/validate-token', `Bearer ${req.cookies?.authToken}`);

    const token = result?.data?.data?.accessToken;

    let tokeExpiredTime = 0;
    let userId = result?.data?.data?._id;

    let timePart = token?.split(".");
    if (timePart && timePart[1]) {
      const decodedToken = JSON.parse(atob(timePart[1]));
      tokeExpiredTime = decodedToken.exp;
    }

    res.status(200).json(ApiService.ApiResponseSuccess({
      exp: tokeExpiredTime,
      id: userId,
      email: result?.data?.data?.email,
      name: result?.data?.data?.name
    }, 'User verified'));

  } catch (error: any) {
    console.log('Catch error auth login ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const forgotPassword = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/forgot-password', data);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'Please check your email inbox to get the OTP code'));

  } catch (error: any) {
    console.log('Catch error forget password ', error?.response?.data);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const changePassword = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/create-password', data);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'Your password has been updated! Try to login now'));

  } catch (error: any) {
    console.log('Catch error change password ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const logoutUser = (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  try {
    res.setHeader("set-Cookie", [
      `userConnected=${"false"}; Max-Age=0;`,
      `authToken=deleted; HttpOnly; Max-Age=0;`,
      `refreshToken=deleted; HttpOnly; Max-Age=0;`
    ]);
    res.status(200).json(ApiService.ApiResponseSuccess({}, 'Session has been deleted'));
  } catch (error) {
    console.log('Catch error logout ', error);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
}
