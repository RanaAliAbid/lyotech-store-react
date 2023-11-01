import { API_HOST, PROXY_HOST } from '../../../app.config';
import { ApiService } from '../api.service';
import { ProxyService } from '../proxy.service';

export const getHomePageProducts = async (homePageProducts: any) => {
  try {
    const references = Object.values(homePageProducts);

    const result = await ApiService.GetRequest(
      `${API_HOST}/v1/product?productKey=${references}`
    );

    return result;
  } catch (error: any) {
    return null;
  }
};

export const getProductById = async (id: string) => {
	try {
		return ProxyService.GetRequest(
			`${PROXY_HOST}/api/v1/product?id=${id}`,
			'',
		);
	} catch (error) {
		return null;
	}
};