// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  userCart,
  userAddToCart,
  userRemoveToCart,
  userEmptyCart,
  cartShippingMethods,
  cartUpdate
} from '@/controllers/CartController';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';

export default async function CartHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? "";

  switch (method) {
    case 'cart':
      return userCart(req, res);
    case 'add-to-cart':
      return userAddToCart(req, res);
    case 'remove-cart':
      return userRemoveToCart(req, res);
    case 'delete':
      return userEmptyCart(req, res);
    case 'shipping-methods':
      return cartShippingMethods(req, res);
    case 'update-cart':
      return cartUpdate(req, res);
  }
}
