import { ApiData, ApiError } from "@/pages/api/types";
import { ApiService } from "@/services/api.service";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST } from "../../app.config";

export const userCart = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let data = req.body;

        const result = await ApiService.GetRequest(API_HOST + '/v1/cart', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error cart ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const userAddToCart = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'POST');

    try {
        let data = req.body;

        const result = await ApiService.PostRequest(API_HOST + '/v1/cart', {product: data}, `Bearer ${req.cookies?.authToken}`);
        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error add to cart ', error);
        return res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const userRemoveToCart = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'PUT');

    try {
        const data = {
            product: {
                productId: req.query.id ?? "",
                quantity: req.query.qty ?? 0
              }
        }

        const result = await ApiService.PutRequest(API_HOST + '/v1/cart/remove', data, `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error remove to cart ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const userEmptyCart = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'DELETE');

    try {
        let data = req.body;

        const result = await ApiService.DeleteRequest(API_HOST + '/v1/cart', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error empty to cart ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const cartShippingMethods = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let data = req.body;

        const result = await ApiService.GetRequest(API_HOST + '/v1/shipping/shipping-method', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error cart shipping method ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};