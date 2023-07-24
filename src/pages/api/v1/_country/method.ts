// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import { getStateDetails, getCountryList, getCityDetails } from '@/controllers/CountryController';

export default async function CountryHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? "";

  switch (method) {
    case 'country':
      return getCountryList(req, res);
    case 'state-details':
      return getStateDetails(req, res);
    case 'city-details':
      return getCityDetails(req, res);
  }
}
