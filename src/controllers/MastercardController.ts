import { ApiData, ApiError } from "@/pages/api/types";
import { ApiService } from "@/services/api.service";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST } from "../../app.config";

export const createSession = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'GET');
    try {
        const result = await ApiService.GetRequest(API_HOST + '/v1/mastercard-payment/session', `Bearer ${req.cookies?.authToken}`);
        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

    } catch (error: any) {
        console.log('Catch error mastercard create session', error?.response?.data);
        return res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const updateSession = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'PATCH');
    try {
        const data = req.body;
        const result = await ApiService.PostRequest(API_HOST + '/v1/mastercard-payment/session', data, `Bearer ${req.cookies?.authToken}`);
        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error patch master card update session', error);
        return res.status(400).json(ApiService.ApiResponseError(error));
    }
};

export const checkEnrollment = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) => {
    res.setHeader('Allow', 'POST');
    try {
        const data = req.body;
        const result = await ApiService.PostRequest(API_HOST + '/v1/mastercard-payment/3d-secure/check-enrollment', data, `Bearer ${req.cookies?.authToken}`);
        return res.status(200).json(ApiService.ApiResponseSuccess(result?.data, ''));

    } catch (error: any) {
        console.log('Catch error post master card check 3d-secure enrollment', error);
        return res.status(400).json(ApiService.ApiResponseError(error));
    }
};
