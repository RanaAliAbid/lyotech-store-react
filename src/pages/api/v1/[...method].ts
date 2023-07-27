// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../types';
import { AuthUser } from '@/contexts/auth.types';
import AuthHandler from './_auth/method';
import CartHandler from './_cart/method';
import UserHandler from './_users/method';
import Producthandler from './_products/method';
import Paymenthandler from './_payments/method';
import { hash256 } from '@/utils/app.utils';
import CountryHandler from './_country/method';
import OrderHandler from './_order/method';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
    const methods = req.query.method;

    if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized. Request' });

    try {

        if ((["POST", "PUT"].includes(req?.method ?? "")  && req?.body?.hashKey?.length > 0) || (!req?.body?.hashKey && !["POST", "PUT"].includes(req?.method ?? ""))) {

            let authorize = false;

            if(["POST", "PUT"].includes(req?.method ?? "")) {
                const bodyKey = req?.body?.hashKey ?? ""
                let params = req?.body ?? {}
                delete params.hashKey;

                const hashKey = await hash256(JSON.stringify(params));

                if(hashKey === bodyKey) {
                    authorize = true;
                }else{
                    authorize = false;
                }
            }else{
                authorize = true;
            }

            if(authorize) {
                
                AuthHandler(req, res);

                UserHandler(req, res);
    
                CartHandler(req, res);

                OrderHandler(req, res);
    
                Producthandler(req, res);
    
                Paymenthandler(req, res);

                CountryHandler(req, res);

            }else{
                return res.status(400).json({ status: false, message: 'Unauthorized. Request....' });
            }
            
        }else{
            return res.status(400).json({ status: false, message: 'Unauthorized. Request...' });
        }

    } catch (error) {
        return res.status(400).json({ status: false, message: 'Unauthorized. Request' });
    }
}
