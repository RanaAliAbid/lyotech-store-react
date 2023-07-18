import { PROXY_HOST } from '../../../app.config';
import { ProfileData } from './profile.types';
import { ProxyService } from '../proxy.service';

export const updateUserProfile = async (params: ProfileData) => {
  try {
    const body = await ProxyService.generateHashKey(JSON.stringify(params))
    return ProxyService.PutRequest(
      PROXY_HOST + '/api/v1/update-profile',
      body
    );
  } catch (error) {
    return null;
  }
};
