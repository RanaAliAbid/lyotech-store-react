import { API_HOST, PROXY_HOST } from "../../../app.config";
import { ApiService } from "../api.service";
import { ProxyService } from "../proxy.service";

export const saveUserOrder = async (data: any) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(data))
        return ProxyService.PostRequest(PROXY_HOST + '/api/v1/place-order', body);
    } catch (error) {
        return null;
    }
};

export const verifyOrderDetails = async ({id}: {id: any}) => {
    try {
        const result = await ApiService.GetRequest(`${API_HOST}/v1/order/info/${id}`);
        
        console.log("🚀 ~ file: order.service.ts:18 ~ verifyOrderDetails ~ result:", result?.data?.data)
        return result?.data?.data;
    } catch (error: any) {
        return null;
    }
}

export const generatePaymentLink = async (id: string) => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/get-payment-link?id='+id);
    } catch (error) {
        return null;
    }
}