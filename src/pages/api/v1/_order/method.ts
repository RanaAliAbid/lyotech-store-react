// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import {
  getOrders,
  getPaymentLink,
  placeUserOrder,
  deleteOrder,
  createCustomPayment,
  getInitiateShipping,
  updateShippingDetails,
  getPickUpStoreByCountry,
  getShippingPaymentLink,
  getTrackingDetails
} from '@/controllers/OrderController';

export default async function OrderHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods)
    return res
      .status(400)
      .json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? '';

  switch (method) {
    case 'place-order':
      return placeUserOrder(req, res);
    case 'get-payment-link':
      return getPaymentLink(req, res);
    case 'orders':
      return getOrders(req, res);
    case 'delete-order':
      return deleteOrder(req, res);
    case 'custom-payment':
      return createCustomPayment(req, res);
    case 'get-initiate-shipping':
      return getInitiateShipping(req, res);
    case 'place-shipping-order':
      return getShippingPaymentLink(req, res);
    case 'update-shipping-details':
      return updateShippingDetails(req, res);
    case 'get-pickup-store':
      return getPickUpStoreByCountry(req, res);
    case 'track-order':
      return getTrackingDetails(req, res);
  }
}
