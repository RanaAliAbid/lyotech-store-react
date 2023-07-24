import { PROXY_HOST } from '../../../app.config';
import { ProxyService } from '../proxy.service';

export const getCountry = async () => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + '/api/v1/country')
    } catch (error) {       
        return null;
    }
};

export const getStateDetails = async (countryCode: string) => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + `/api/v1/state-details?countryCode=${countryCode}`)
    } catch (error) {       
        return null;
    }
};

export const getCityDetails = async (stateCode: string) => {
    try {
        return ProxyService.GetRequest(PROXY_HOST + `/api/v1/city-details?stateCode=${stateCode}`)
    } catch (error) {       
        return null;
    }
};