import { hash256 } from '@/utils/app.utils';
import axios from 'axios';

const GetRequest = (url: string, token?: string) => {
  try {
    const config = {
      method: 'GET',
      url: url,
      withCredentials: true,
      signal: AbortSignal.timeout(5000),
      headers: {
        'Content-Type': 'application/json',
        // token: token,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const PostRequest = (url: string, data: any, token?: string) => {
  try {
    const config = {
      method: 'POST',
      url: url,
      data: JSON.stringify(data),
      withCredentials: true,
      signal: AbortSignal.timeout(5000),
      headers: {
        'Content-Type': 'application/json',
        // token: token,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const DeleteRequest = (url: string, token?: string) => {
  try {
    const config = {
      method: 'DELETE',
      withCredentials: true,
      signal: AbortSignal.timeout(5000),
      url: url,
      headers: {
        'Content-Type': 'application/json',
        // token: token,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const PutRequest = (url: string, data: any, token?: string) => {
  try {
    const config = {
      method: 'PUT',
      url: url,
      data: JSON.stringify(data),
      withCredentials: true,
      signal: AbortSignal.timeout(5000),
      headers: {
        'Content-Type': 'application/json',
        // token: token,
      },
    };

    return axios(config);
  } catch (error) {
    return null;
  }
};

const generateHashKey = async (requestBody: string) => {
  const hashKey = await hash256(requestBody);
  let body: any = JSON.parse(requestBody)
  body.hashKey = hashKey
  return body;
}

export const ProxyService = {
  GetRequest,
  PostRequest,
  PutRequest,
  DeleteRequest,
  generateHashKey
};
