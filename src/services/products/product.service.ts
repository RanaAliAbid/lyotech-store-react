import { API_HOST } from '../../../app.config';
import { ApiService } from '../api.service';

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
