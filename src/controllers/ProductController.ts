import { ApiData, ApiError } from "@/pages/api/types";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST } from "../../app.config";
import { ApiService } from "@/services/api.service";

export const getProducts = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let data = req.body;

        const result = await ApiService.GetRequest(API_HOST + '/v1/product', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error products ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const addToWishList = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let data = req.body;

        const result = await ApiService.PostRequest(API_HOST + '/v1/wishlist', data, `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error wishlist add ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const removeFromWishList = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let productId = req.query?.productId ?? "";

        const result = await ApiService.PutRequest(API_HOST + '/v1/wishlist/remove/'+productId, {}, `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error wishlist get ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const getWishList = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {
        let data = req.body;

        const result = await ApiService.GetRequest(API_HOST + '/v1/wishlist', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error wishlist get ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};