import { ApiData, ApiError } from '@/pages/api/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST, API_KEY, ironOptions } from '../../app.config';
import { AuthUser } from '@/contexts/auth.types';
import jwt from 'jsonwebtoken';

export const getUserSession = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthUser | ApiError>
) => {
  // try {
  //     const user = req.session?.user ?? {id: 0, authToken: "", isAdmin: false}
  //     res.status(200).json(user)
  // } catch (error) {
  //     res.status(400).json({ message: "An internal error occured.", status: false })
  // }
};

export const signIn = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/login',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      console.log(result.data.data);

      if (result.data.code == 200) {
        // const token = jwt.sign({test: "frank"}, ironOptions.password);

        res.status(200).json({
          message: 'Sucessfull login',
          status: true,
          data: result?.data?.data,
        });
      } else {
        res
          .status(400)
          .json({ message: result.data?.errors?.msg, status: false });
      }
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
      res.status(400).json({
        message:
          error?.response?.data?.msg ??
          '' + ' ' + error?.response?.data?.errors?.msg ??
          '',
        status: false,
      });
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

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/sign-up',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        // 'X-API-KEY': process.env.API_KEY
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      if (result.data?.code == 200) {
        res.status(200).json({
          message: 'Sucessfull register. Please verify your email',
          status: true,
          data: result?.data,
        });
      }
    }
  } catch (error: any) {
    console.log('Catch error register ', error);
    res.status(400).json({
      message:
        error?.response?.data?.msg ??
        '' + ' ' + error?.response?.data?.errors?.msg ??
        '',
      status: false,
    });
  }
};

export const verifyEmailOtp = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req?.body;

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/verify-user',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.headers?.token}` ?? '',
        // 'X-API-KEY': process.env.API_KEY
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      if (result.data?.code == 200) {
        res.status(200).json({
          message: 'Email verification completed',
          status: true,
          data: result?.data,
        });
      }
    }
  } catch (error: any) {
    console.log('Catch error verify email otp ', error);
    res.status(400).json({
      message:
        error?.response?.data?.msg ??
        '' + ' ' + error?.response?.data?.errors?.msg ??
        '',
      status: false,
    });
  }
};

export const checkUserToken = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/auth',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      if (result.data?.code == 200) {
        res.status(200).json({
          message: 'User token verified',
          status: true,
          data: result?.data,
        });
      }
    }
  } catch (error: any) {
    console.log('Catch error auth login ', error);
    res.status(400).json({
      message:
        error?.response?.data?.msg ??
        '' + ' ' + error?.response?.data?.errors?.msg ??
        '',
      status: false,
    });
  }
};

export const forgotPassword = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/forgot-password',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      if (result.data?.code == 200) {
        res.status(200).json({
          message: 'Please check your email inbox to get the OTP code',
          status: true,
          data: result?.data,
        });
      }
    }
  } catch (error: any) {
    console.log('Catch error forget password ', error?.response?.data);
    res.status(400).json({
      message:
        error?.response?.data?.msg ??
        '' + ' ' + error?.response?.data?.errors?.msg ??
        '',
      status: false,
    });
  }
};

export const changePassword = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const config = {
      method: 'POST',
      url: API_HOST + '/v1/user/create-password',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    };
    const result = await axios(config);

    if (result.status == 200) {
      if (result.data?.code == 200) {
        res.status(200).json({
          message: 'Your password has been updated! Try to login now',
          status: true,
          data: result?.data,
        });
      }
    }
  } catch (error: any) {
    console.log('Catch error change password ', error);
    res.status(400).json({
      message:
        error?.response?.data?.msg ??
        '' + ' ' + error?.response?.data?.errors?.msg ??
        '',
      status: false,
    });
  }
};
