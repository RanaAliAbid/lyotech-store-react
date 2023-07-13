import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const addUserWishList = async (params: any) => {
    try {
        return ProxyService.PostRequest(
            PROXY_HOST + '/api/v1/add-wishlist',
            params
        );
    } catch (error) {
        return null;
    }
};

export const removeUserWishList = async (productId: string) => {
    try {
        return ProxyService.DeleteRequest(
            PROXY_HOST + '/api/v1/remove-wishlist?productId=' + productId
        );
    } catch (error) {
        return null;
    }
};

export const getUserWishList = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/wishlist');
    } catch (error) {
        return null;
    }
};
