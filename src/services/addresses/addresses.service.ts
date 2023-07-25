import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const addUserAddress = async (data: any) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(data))
        return ProxyService.PostRequest(
            PROXY_HOST + '/api/v1/add-address',
            body
        );
    } catch (error) {
        return null;
    }
};

export const getUserAddressList = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/address')
    } catch (error) {
        return null;
    }
};

export const removeAddress = async (id: string) => {
    try {
        return ProxyService.DeleteRequest(`${PROXY_HOST}/api/v1/remove-address?id=${id}`);
    } catch (error) {
        return null;
    }
};

export const setUserDefaultAddress = async (id: string) => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + `/api/v1/default-address?addressId=${id}`)
    } catch (error) {
        return null;
    }
};

export const updateAddress = async (data:any, id: string) => {
    try {
        const body = await ProxyService.generateHashKey(JSON.stringify(data))
        return ProxyService.PutRequest(PROXY_HOST + `/api/v1/update-address?addressId=${id}`, body)
    } catch (error) {
        return null;
    }
};