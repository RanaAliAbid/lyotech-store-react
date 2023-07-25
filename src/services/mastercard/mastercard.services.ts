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
        id: string,
        amount: number
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
