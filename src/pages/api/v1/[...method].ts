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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
    const methods = req.query.method;

    if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized. Request' });

    try {

        if ((req?.method == "POST" && req?.body?.hashKey?.length > 0) || (!req?.body?.hashKey && req?.method == "GET")) {

            let authorize = false;

            if(req?.method != "GET") {
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
    
                Producthandler(req, res);
    
                Paymenthandler(req, res);

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
