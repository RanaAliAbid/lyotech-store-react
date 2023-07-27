import { PROXY_HOST } from "../../../app.config";
import { ProxyService } from "../proxy.service";

export const saveUserOrder = async (data: any) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(data))
        return ProxyService.PostRequest(PROXY_HOST + '/api/v1/place-order', body);
    } catch (error) {
        return null;
    }
};