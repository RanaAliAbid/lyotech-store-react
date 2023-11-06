import { API_HOST, PROXY_HOST } from '../../../app.config';
import { ApiService } from '../api.service';
import { ProxyService } from '../proxy.service';

export const saveUserOrder = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/place-order', body);
  } catch (error) {
    return null;
  }
};

export const createShippingPaymentLink = async (data: any) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(data));
    return ProxyService.PostRequest(PROXY_HOST + '/api/v1/place-shipping-order', body);
  } catch (error) {
    return null;
  }
}

export const verifyOrderDetails = async ({ id }: { id: any }) => {
  try {
    const result = await ApiService.GetRequest(
      `${API_HOST}/v1/order/info/${id}`
    );

    return result?.data?.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: order.service.ts:26 ~ verifyOrderDetails ~ error:',
      error
    );
    return null;
  }
};

export const getDeliveryCartOrder = async ({
  cartOrderId,
}: {
  cartOrderId: string;
}) => {
  try {
    const result = await ProxyService.GetRequest(
      PROXY_HOST + `/api/v1/get-initiate-shipping?cartOrderId=${cartOrderId}`
    );
    return result?.data?.data;
  } catch (error: any) {
    return null;
  }
};

export const getPickUpStores = async ({ country }: { country: string }) => {
  try {
    const result = await ProxyService.GetRequest(
      PROXY_HOST + `/api/v1/get-pickup-store?country=${country}`
    );
    return result?.data?.data;
  } catch (error: any) {
    return null;
  }
};

export const updateDeliveryCartOrder = async ({
  data,
  orderId,
  shippingId,
}: {
  data: any;
  orderId: string;
  shippingId: string;
}) => {
  try {

    const body = await ProxyService.generateHashKey(JSON.stringify({ data: data, orderId: orderId, shippingId: shippingId }));

    const result = await ProxyService.PostRequest(
      PROXY_HOST + `/api/v1/update-shipping-details`,
      body
    );
    return result?.data?.data;
  } catch (error: any) {
    return null;
  }
};

export const generatePaymentLink = async (id: string) => {
  try {
    return ProxyService.GetRequest(
      PROXY_HOST + '/api/v1/get-payment-link?id=' + id
    );
  } catch (error) {
    return null;
  }
};

export const getUserOrders = async ({ page }: { page: any }) => {
  try {
    return ProxyService.GetRequest(PROXY_HOST + '/api/v1/orders?page=' + page);
  } catch (error) {
    return null;
  }
};

export const deleteUserOrders = async (id: string) => {
  try {
    return ProxyService.DeleteRequest(
      PROXY_HOST + '/api/v1/delete-order?id=' + id
    );
  } catch (error) {
    return null;
  }
};

export const getPartnerRediectionLink = async (id: string) => {
  try {
    const result = await ApiService.GetRequest(
      `${API_HOST}/v1/user/user-partner/partner-details/${id}`
    );
    console.log(
      '🚀 ~ file: order.service.ts:63 ~ getPartnerRediectionLink ~ result:',
      result
    );

    return result?.data?.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: order.service.ts:26 ~ getPartnerRediectionLink ~ error:',
      error
    );
    return null;
  }
};
