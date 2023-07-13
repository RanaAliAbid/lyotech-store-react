import { PROXY_HOST } from "../../../app.config";
import { ProxyService } from "../proxy.service";

export const getPaymentMethods = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/payment-methods');
    } catch (error) {
        return null;
    }
};