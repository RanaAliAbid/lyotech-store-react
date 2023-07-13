import { PROXY_HOST } from "../../../app.config";
import { ProxyService } from "../proxy.service";

export const getUserCart = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/cart');
    } catch (error) {
        return null;
    }
};

export const addToCart = async (data: any) => {
    try {
        return ProxyService.PostRequest(PROXY_HOST + '/api/v1/add-to-cart', data);
    } catch (error) {
        return null;
    }
};

export const removeCartProduct = async (id: string, qty: number) => {
    try {
        return ProxyService.DeleteRequest(`${PROXY_HOST}/api/v1/remove-cart?id=${id}&qty=${qty}`);
    } catch (error) {
        return null;
    }
};

export const getShippingMethods = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/shipping-methods');
    } catch (error) {
        return null;
    }
};