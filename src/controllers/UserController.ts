import { ApiData, ApiError } from '@/pages/api/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST, HASH_SALT } from '../../app.config';
import { ApiService } from '@/services/api.service';
import { compare, hash } from 'bcrypt';

export const signIn = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/login', data);

    if (result && result.status == 200) {

      res.setHeader("Set-Cookie", [
        `otpToken=${result?.data?.data?.otpVerificationToken}; HttpOnly; Max-Age=360;`,
        `token=${result?.data?.data?.token}; HttpOnly; Max-Age=360;`,
        `guestId=deleted; HttpOnly; Max-Age=0;`
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
      `otpToken=${result?.data?.data?.otpVerificationToken}; HttpOnly; Max-Age=360;`,
      `token=${result?.data?.data?.token}; HttpOnly; Max-Age=360;`,
    ]);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, 'Sucessfull register. Please verify your email'));

  } catch (error: any) {
    console.log('Catch error register ', error?.response?.data);
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

    // console.log("🚀 ~ file: UserController.ts:79 ~ result:", result?.data?.data)
    if (data.session) {
      res.setHeader("set-Cookie", [
        `userConnected=${"true"}; Max-Age=36000; path: '/';`,
        `authToken=${result?.data?.data?.accessToken}; HttpOnly; Max-Age=36000; path: '/';`,
        // `refreshToken=${result?.data?.data?.refreshToken}; HttpOnly; Max-Age=36000; path: '/';`,
        `otpToken=deleted; HttpOnly; Max-Age=0;`,
        `token=deleted; HttpOnly; Max-Age=0;`,
      ]);
    }

    res.status(200).json(ApiService.ApiResponseSuccess({}, 'Email verification completed'));

  } catch (error: any) {
    console.log('Catch error verify email otp ', error);
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

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/resend-email', data, `Bearer ${req.cookies?.otpToken}`);

    res.setHeader("Set-Cookie", [
      `otpToken=${result?.data?.data?.otpVerificationToken}; HttpOnly; Max-Age=360;`,
      `token=${result?.data?.data?.token}; HttpOnly; Max-Age=360;`,
      `guestId=deleted; HttpOnly; Max-Age=0;`
    ]);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'Email OTP sended'));

  } catch (error: any) {
    console.log('Catch error verify email otp ', error?.response);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const checkHandover = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const result = await ApiService.GetRequest(`${API_HOST}/v1/user/auth/${data?.productId}/${data?.handoverToken}`);

    res.setHeader("set-Cookie", [
      `userConnected=${"true"}; Max-Age=36000; path: '/';`,
      `authToken=${result?.data?.data?.accessToken}; HttpOnly; Max-Age=36000; path: '/';`,
      // `refreshToken=${result?.data?.data?.refreshToken}; HttpOnly; Max-Age=36000; path: '/';`,
      `otpToken=deleted; HttpOnly; Max-Age=0;`,
      `token=deleted; HttpOnly; Max-Age=0;`,
    ]);

    res.status(200).json(ApiService.ApiResponseSuccess({}, 'User account verified.'));

  } catch (error: any) {
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const validateUserToken = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    const result = await ApiService.GetRequest(API_HOST + '/v1/user/validate-token', `Bearer ${req.cookies?.partnerToken ?? req.cookies?.authToken}`);
    const token = req.cookies?.partnerToken ?? req.cookies?.authToken;

    let tokeExpiredTime = 0;
    let userId = result?.data?.data?._id;

    let timePart = token?.split(".");
    if (timePart && timePart[1]) {
      const decodedToken = JSON.parse(atob(timePart[1]));
      tokeExpiredTime = decodedToken.exp;
    }

    let userName = result?.data?.data?.user?.name ?? `${result?.data?.data?.user?.firstName} ${result?.data?.data?.user?.lastName}`
    if (result?.data?.data?.user?.firstName?.length < 1) {
      userName = result?.data?.data?.user?.email?.split("@")[0] ?? ""
    }

    if(req.cookies?.partnerToken) {
      res.setHeader("set-Cookie", [
        `authToken=${req.cookies?.partnerToken}; HttpOnly; Max-Age=36000; path: '/';`,
        `partnerToken=deleted; HttpOnly; Max-Age=0;`,
      ]);
    }

    res.status(200).json(ApiService.ApiResponseSuccess({
      exp: tokeExpiredTime,
      id: userId,
      email: result?.data?.data?.user?.email,
      name: userName,
      user: result?.data?.data?.user
    }, 'User verified'));

  } catch (error: any) {

    if (error.response?.status === 401) {
      res.setHeader("set-Cookie", [
        `userConnected=${"false"}; Max-Age=0;`,
        `authToken=deleted; HttpOnly; Max-Age=0;`,
        `refreshToken=deleted; HttpOnly; Max-Age=0;`
      ]);
      res.status(401).json(ApiService.ApiResponseError(error));
    } else {
      res.status(400).json(ApiService.ApiResponseError(error));
    }
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
    // console.log("🚀 ~ file: UserController.ts:163 ~ result:", result)

    res.setHeader("Set-Cookie", [
      `otpToken=${result?.data?.data?.jwtToken}; HttpOnly; Max-Age=3600;`,
      `token=${result?.data?.data?.token}; HttpOnly; Max-Age=3600;`,
    ]);

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

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/create-password', data, `Bearer ${req.cookies?.otpToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'Your password has been updated! Try to login now'));

  } catch (error: any) {
    console.log("🚀 ~ file: UserController.ts:194 ~ error:", error)
    console.log('Catch error change password ', error?.response?.data);
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

export const updateProfile = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const result = await ApiService.PutRequest(API_HOST + '/v1/user/update-profile', data, `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'User profile has been updated'));

  } catch (error: any) {
    console.log('Catch error update profile ', error?.response?.data);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const sendEmailOTP = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/email-otp', data, `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, 'OTP sended successfully'));

  } catch (error: any) {
    console.log('Catch error email otp send', error?.response?.data);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const getAddressList = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
      let data = req.body;

      const result = await ApiService.GetRequest(API_HOST + '/v1/user/address', `Bearer ${req.cookies?.authToken}`);
    
      res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

  } catch (error: any) {     
      res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const removeAddress = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'PUT');

  try {
      // const data = {
      //   addressId : req.query.id
      // }
    
      const result = await ApiService.DeleteRequest(API_HOST + '/v1/user/address/remove/'+req.query.id, `Bearer ${req.cookies?.authToken}`);

      res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

  } catch (error: any) {
      console.log('Catch error remove address', error?.response?.data);
      res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const setDefaultAddress = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'PUT');

  try {
    const addressId = req.query?.addressId;        

    const result = await ApiService.PutRequest(API_HOST + '/v1/user/address/default/'+ addressId, {}, `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

  } catch (error: any) {
    console.log('Catch error set default address ', error?.response?.data);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const addAddress = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const result = await ApiService.PostRequest(API_HOST + '/v1/user/address', data, `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

  } catch (error: any) {
    console.log('Catch error email otp send', error?.response);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const updateAddress = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'PUT');

  try {
    const addressId = req.query?.addressId;  
    const data = req?.body      

    const result = await ApiService.PutRequest(API_HOST + '/v1/user/address/'+ addressId, data, `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

  } catch (error: any) {
    console.log('Catch error set update address ', error?.response);
    res.status(400).json(ApiService.ApiResponseError(error));
  }
};
