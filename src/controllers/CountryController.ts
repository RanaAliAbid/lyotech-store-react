import { ApiData, ApiError } from "@/pages/api/types";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST } from "../../app.config";
import { ApiService } from "@/services/api.service";

export const getCountryList = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {
    const result = await ApiService.GetRequest(API_HOST + '/v1/country/get-country', `Bearer ${req.cookies?.authToken}`);

    res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

  } catch (error: any) {
    res.status(400).json(ApiService.ApiResponseError(error));
    console.log('Catch error get country list', error?.response?.data);
  }
};


export const getStateDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {

    const countryCode = req.query.countryCode     
  
    const result = await ApiService.GetRequest(API_HOST + '/v1/country/state/'+ countryCode, `Bearer ${req.cookies?.authToken}`);
  
    res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

  } catch (error: any) {    
    res.status(400).json(ApiService.ApiResponseError(error));
    console.log('Catch error get state details', error?.response?.data);
  }
};

export const getCityDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError>
) => {
  res.setHeader('Allow', 'GET');

  try {

    const stateCode = req.query.stateCode     
  
    const result = await ApiService.GetRequest(API_HOST + '/v1/country/state/city/'+ stateCode, `Bearer ${req.cookies?.authToken}`);
  
    res.status(200).json(ApiService.ApiResponseSuccess(result?.data?.data, ''));

  } catch (error: any) {    
    res.status(400).json(ApiService.ApiResponseError(error));
    console.log('Catch error get state details', error?.response?.data);
  }
};