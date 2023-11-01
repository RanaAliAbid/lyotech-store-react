import { ApiData, ApiError } from '@/pages/api/types';
import { ApiService } from '@/services/api.service';
import { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST } from '../../app.config';

export const placeUserOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const token = req.cookies?.authToken ?? null;
    const guestId = req.cookies?.guestId ?? null;

    let result;

    if (token) {
      result = await ApiService.PostRequest(
        API_HOST + '/v1/order',
        data,
        `Bearer ${token}`
      );
    } else {
      result = await ApiService.PostRequest(
        API_HOST + '/v1/order/guest',
        data,
        `${guestId}`,
        true
      );

      res.setHeader('Set-Cookie', [
        `guestId=${guestId}; HttpOnly; Max-Age=3600;`,
      ]);
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data, ''));
  } catch (error: any) {
    console.log('Catch error add to cart ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const getOrders = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    let data = req.body;

    const token = req.cookies?.authToken ?? null;
    const guestId = req.cookies?.guestId ?? null;
    const page = req.query?.page ?? 1;

    let result;

    if (token) {
      result = await ApiService.GetRequest(
        API_HOST + '/v1/order?page=' + page,
        `Bearer ${token}`
      );
    } else {
      result = await ApiService.GetRequest(
        API_HOST + '/v1/order/guest?page=' + page,
        `${guestId}`,
        true
      );
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data, ''));
  } catch (error: any) {
    console.log('Catch error get user orders ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const deleteOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'DELETE');

  try {
    let data = req.body;

    const token = req.cookies?.authToken ?? null;
    const guestId = req.cookies?.guestId ?? null;
    const id = req?.query?.id ?? '';

    let result;

    if (token) {
      result = await ApiService.PutRequest(
        API_HOST + '/v1/order/cancel/' + id,
        {},
        `Bearer ${token}`
      );
    } else {
      result = await ApiService.PutRequest(
        API_HOST + '/v1/order/guest/cancel/' + id,
        {},
        `${guestId}`,
        true
      );
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data, ''));
  } catch (error: any) {
    console.log('Catch error cancel user order ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const getPaymentLink = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    let data = req.body;

    const token = req.cookies?.authToken ?? null;
    const guestId = req.cookies?.guestId ?? null;
    const orderId = req.query?.id ?? '';

    let result;

    if (token) {
      result = await ApiService.GetRequest(
        API_HOST + '/v1/order/generate-payment-link/' + orderId,
        `Bearer ${token}`
      );
    } else {
      result = await ApiService.GetRequest(
        API_HOST + '/v1/order/guest/generate-payment-link/' + orderId,
        `${guestId}`,
        true
      );

      res.setHeader('Set-Cookie', [
        `guestId=${guestId}; HttpOnly; Max-Age=3600;`,
      ]);
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data, ''));
  } catch (error: any) {
    console.log('Catch error add to cart ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const createCustomPayment = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let data = req.body;

    const token = req.cookies?.authToken ?? null;
    const guestId = req.cookies?.guestId ?? null;
    const orderId = req.query?.id ?? '';

    let result;

    if (token) {
      result = await ApiService.PostRequest(
        API_HOST + '/v1/order/custom',
        data,
        `Bearer ${token}`
      );
    } else {
      result = await ApiService.PostRequest(
        API_HOST + '/v1/order/custom',
        data,
        `${guestId}`,
        true
      );
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data, ''));
  } catch (error: any) {
    console.log('Catch error add to cart ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const getInitiateShipping = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    const { cartOrderId } = req.query;
    const token = req.cookies?.authToken ?? null;
    let result;
    if (token) {
      result = await ApiService.GetRequest(
        API_HOST +
          `/v1/user/user-partner/order/initiate-shipping/${cartOrderId}`,
        `Bearer ${token}`
      );
    }
    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data?.data, ''));
  } catch (error: any) {
    console.log(
      'Catch error get initiate shipping order',
      error?.response?.data
    );
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};

export const updateShippingDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'POST');

  try {
    let { data, orderId, cartOrderId } = req.body;
    console.log(
      '🚀 ~ file: OrderController.ts:241 ~ data, orderId, cartOrderId :',
      data,
      orderId,
      cartOrderId
    );
    const token = req.cookies?.authToken ?? null;

    let result;

    if (token) {
      result = await ApiService.PutRequest(
        API_HOST +
          `/v1/user/user-partner/order/update-shipping/${cartOrderId}/${orderId}`,
        data,
        `Bearer ${token}`
      );
    }

    return res
      .status(200)
      .json(ApiService.ApiResponseSuccess(result?.data?.data, ''));
  } catch (error: any) {
    console.log('🚀 ~ file: OrderController.ts:258 ~ error:', error);
    console.log('Catch error add to cart ', error?.response?.data);
    return res.status(400).json(ApiService.ApiResponseError(error));
  }
};
