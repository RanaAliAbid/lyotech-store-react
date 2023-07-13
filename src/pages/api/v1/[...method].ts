// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../types';
import { AuthUser } from '@/contexts/auth.types';
import AuthHandler from './_auth/method';
import CartHandler from './_cart/method';
import UserHandler from './_users/method';
import Producthandler from './_products/method';
import Paymenthandler from './_payments/method';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
    const methods = req.query.method;

    if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized. Request' });

    try {

        AuthHandler(req, res);

        UserHandler(req, res);

        CartHandler(req, res);

        Producthandler(req, res);

        Paymenthandler(req, res);

    } catch (error) {
        return res.status(400).json({ status: false, message: 'Unauthorized. Request' });
    }
}
