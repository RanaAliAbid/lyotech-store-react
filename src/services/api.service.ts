import axios from 'axios';
import { API_KEY } from '../../app.config';

const GetRequest = (url: string, authToken?: string) => {
  try {
    const config = {
      method: 'GET',
      url: url,
      // signal: AbortSignal.timeout(5000),
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
      // signal: AbortSignal.timeout(15000),
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
      // signal: AbortSignal.timeout(5000),
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
      // signal: AbortSignal.timeout(5000),
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

const ApiResponseError = (error: any) => {
  return {
    message:
      error?.response?.data?.msg ??
      '' + ' ' + error?.response?.data?.errors?.msg ??
      '',
    status: false,
  };
}

const ApiResponseSuccess = (result:any, msg?: string) => {
  return {
    message: msg ?? 'Sucess',
    status: true,
    data: result,
  };
}

export const ApiService = {
  GetRequest,
  PostRequest,
  PutRequest,
  DeleteRequest,
  ApiResponseError,
  ApiResponseSuccess
};
