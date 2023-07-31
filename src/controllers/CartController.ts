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

        const token = req.cookies?.partnerToken ?? req.cookies?.authToken ?? null;
        const guestId = req.cookies?.partnerToken ?? req.cookies?.guestId ?? null;

        let result;

        if (token) {
            result = await ApiService.GetRequest(API_HOST + '/v1/cart', `Bearer ${token}`);
        } else {
            result = await ApiService.GetRequest(API_HOST + '/v1/cart/guest', `${guestId}`, true);
        }

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {

        if (req.cookies?.guestId) {
            res.setHeader("Set-Cookie", [
                `guestId=""; HttpOnly; Max-Age=0;`
            ]);
        }

        if (error.response?.status === 401) {
            res.setHeader("set-Cookie", [
                `userConnected=${"false"}; Max-Age=0;`,
                `authToken=deleted; HttpOnly; Max-Age=0;`,
                `refreshToken=deleted; HttpOnly; Max-Age=0;`
            ]);
        }

        res.status(200).json(ApiService.ApiResponseSuccess([], 'No cart found'));
        // res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const userAddToCart = async (
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
            result = await ApiService.PostRequest(API_HOST + '/v1/cart', { product: data }, `Bearer ${token}`);
        } else {
            result = await ApiService.PostRequest(API_HOST + '/v1/cart/guest', { product: data }, `${guestId}`, true);

            res.setHeader("Set-Cookie", [
                `guestId=${result?.data?.data?.guestId}; HttpOnly; Max-Age=3600;`
            ]);
        }

        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error add to cart ', error?.response?.data);
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

        const token = req.cookies?.authToken ?? null;
        const guestId = req.cookies?.guestId ?? null;

        let result;

        if (token) {
            result = await ApiService.PutRequest(API_HOST + '/v1/cart/remove', data, `Bearer ${token}`);
        } else {
            result = await ApiService.PutRequest(API_HOST + '/v1/cart/guest/remove', data, `${guestId}`, true);
        }

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error remove to cart ', error?.response);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const userEmptyCart = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'DELETE');

    try {

        const token = req.cookies?.authToken ?? null;
        const guestId = req.cookies?.guestId ?? null;

        let result;

        if (token) {
            result = await ApiService.DeleteRequest(API_HOST + '/v1/cart', `Bearer ${token}`);
        } else {
            result = await ApiService.DeleteRequest(API_HOST + '/v1/cart/guest', `${guestId}`, true);
        }

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

        const result = await ApiService.GetRequest(API_HOST + '/v1/shipping/shipping-method', `Bearer ${req.cookies?.authToken}`);

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error cart shipping method ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const cartUpdate = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');

    try {

        let data = req.body;

        const token = req.cookies?.authToken ?? null;
        const guestId = req.cookies?.guestId ?? null;

        let result;

        if (token) {
            result = await ApiService.PutRequest(API_HOST + '/v1/cart/update', data, `Bearer ${token}`);
        } else {
            result = await ApiService.PutRequest(API_HOST + '/v1/cart/guest/update', data, `${guestId}`, true);
        }

        res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error cart update ', error?.response?.data);
        res.status(400).json(ApiService.ApiResponseError(error));
    }
};