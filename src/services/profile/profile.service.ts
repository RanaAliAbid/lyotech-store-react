import axios from 'axios';
import { APP_HOST } from '../../../app.config';
import { ProfileData } from './profile.types';

export const updateUserProfile = async (params: ProfileData) => {
  try {
    const config = {
      method: 'POST',
      url: APP_HOST + '/api/v1/auth/signin',
      data: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};
