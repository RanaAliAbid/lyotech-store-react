import { ApiData, ApiError } from "@/pages/api/types";
import { ApiService } from "@/services/api.service";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST } from "../../app.config";

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
            result = await ApiService.PostRequest(API_HOST + '/v1/order', data, `Bearer ${token}`);
        } else {
            result = await ApiService.PostRequest(API_HOST + '/v1/order/guest', data, `${guestId}`, true);

            res.setHeader("Set-Cookie", [
                `guestId=${guestId}; HttpOnly; Max-Age=3600;`
            ]);
        }

        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

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

        let result;

        if (token) {
            result = await ApiService.GetRequest(API_HOST + '/v1/order', `Bearer ${token}`);
        } else {
            result = await ApiService.GetRequest(API_HOST + '/v1/order/guest', `${guestId}`, true);
        }

        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error get user orders ', error?.response?.data);
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
        const orderId = req.query?.id ?? "";

        let result;

        if (token) {
            result = await ApiService.GetRequest(API_HOST + '/v1/order/generate-payment-link/'+orderId, `Bearer ${token}`);
        } else {
            result = await ApiService.GetRequest(API_HOST + '/v1/order/guest/generate-payment-link/'+orderId, `${guestId}`, true);

            res.setHeader("Set-Cookie", [
                `guestId=${guestId}; HttpOnly; Max-Age=3600;`
            ]);
        }

        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error add to cart ', error?.response?.data);
        return res.status(400).json(ApiService.ApiResponseError(error));
    }
};