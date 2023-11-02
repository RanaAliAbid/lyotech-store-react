// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import { addToWishList, getProduct, getProducts, getWishList, removeFromWishList } from '@/controllers/ProductController';

export default async function Producthandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? "";

  switch (method) {
    case 'products':
      return getProducts(req, res);
    case 'add-wishlist':
      return addToWishList(req, res);
    case 'remove-wishlist':
      return removeFromWishList(req, res);
    case 'wishlist':
      return getWishList(req, res);
    case 'product':
      return getProduct(req, res);
  }
}
