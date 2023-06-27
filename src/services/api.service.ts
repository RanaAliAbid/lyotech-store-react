import axios from 'axios';
import { API_KEY } from '../../app.config';

const GetRequest = (url: string, authToken?: string) => {
  try {
    const config = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
        'X-API-KEY': API_KEY,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const PostRequest = (url: string, data: any, authToken?: string) => {
  try {
    const config = {
      method: 'POST',
      url: url,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
        'X-API-KEY': API_KEY,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const DeleteRequest = (url: string, authToken?: string) => {
  try {
    const config = {
      method: 'DELETE',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
        'X-API-KEY': API_KEY,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const PutRequest = (url: string, data: any, authToken?: string) => {
  try {
    const config = {
      method: 'PUT',
      url: url,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
        'X-API-KEY': API_KEY,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

export const ApiService = {
  GetRequest,
  PostRequest,
  PutRequest,
  DeleteRequest,
};
