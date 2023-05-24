// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkUserToken, signIn } from '@/controllers/UserController'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData, ApiError } from '../../types';
import { ironOptions } from "../../../../../app.config";
import { withIronSessionApiRoute } from "iron-session/next";

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) {

    const method = req.query.method;

    switch (method) {
        case "signin":
            signIn(req, res)
            break;

        case "checktoken":
            checkUserToken(req, res)
            break;

        default:
            res.status(400).json({ status: false, message: 'Unauthorized Request' })
    }
}

export default withIronSessionApiRoute(handler, ironOptions);