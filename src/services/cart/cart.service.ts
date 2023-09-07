import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const getUserCart = async () => {
  try {
    return ProxyService.GetRequest(PROXY_HOST + '/api/v1/cart');
  } catch (error) {
    return null;
  }
};

export const addToCart = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/add-to-cart', body);
  } catch (error) {
    return null;
  }
};

export const removeCartProduct = async (
  id: string,
  qty: number,
  oneCare: number = 1
) => {
  try {
    return ProxyService.DeleteRequest(
      `${PROXY_HOST}/api/v1/remove-cart?id=${id}&qty=${qty}&oneCare=${oneCare}`
    );
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

export const updateCart = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PutRequest(PROXY_HOST + '/api/v1/update-cart', body);
  } catch (error) {
    return null;
  }
};

export const getCartCurrencyRate = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/currency-rate', body);
  } catch (error) {
    return null;
  }
};

export const createCustomPayment = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PostRequest(
      PROXY_HOST + '/api/v1/custom-payment',
      body
    );
  } catch (error) {
    return null;
  }
};
