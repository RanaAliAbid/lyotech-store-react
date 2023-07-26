import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const createMasterCardSession = async () => {
    try {
        const res = await ProxyService.GetRequest(PROXY_HOST + '/api/v1/create-session');
        return res?.data;
    } catch (error) {
        console.log("mastercard.services createMasterCardSession error:", error)
        return null;
    }
};

export const updateMasterCardSession = async (
    params: {
        sessionId: string,
        orderAmount: number
    }) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(params))
        const res = await ProxyService.PutRequest(
            PROXY_HOST + '/api/v1/update-session',
            body
        );
        return res?.data;
    } catch (error) {
        console.log("mastercard.services updateMasterCardSession error:", error)
        return null;
    }
};

export const checkMasterCard3DSEnrollment = async (
    params: {
        sessionId: string,
        orderAmount: number,
        orderId: string,
        transactionId: string,
        orderDescription: string,
        secureIdResponseUrl: string,
    }) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(params))
        const res = await ProxyService.PostRequest(
            PROXY_HOST + '/api/v1/check-enrollment',
            body
        );
        return res?.data;
    } catch (error:any) {
        console.log("mastercard.services checkMasterCard3DSEnrollment error:", error?.message)
        return null;
    }
};
