// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import { addAddress, getAddressList, removeAddress, setDefaultAddress, updateAddress, updateProfile } from '@/controllers/UserController';

export default async function UserHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? "";

  switch (method) {
    case 'update-profile':
      return updateProfile(req, res);
    case 'address':
      return getAddressList(req, res);
    case 'remove-address':
      return removeAddress(req, res);
    case 'default-address':
      return setDefaultAddress(req, res);
    case 'add-address':
      return addAddress(req, res);
    case 'update-address':
      return updateAddress(req, res);
  }
}
