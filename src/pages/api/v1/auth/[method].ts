// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import UsersController from '@/controllers/UserController'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData, ApiError } from '../../types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError>
) {

    const method = req.query.method;

    switch (method) {
        case "signin":
            UsersController.signIn(req, res)
            break;

        case "signup":
            UsersController.signIn(req, res)
            break;

        case "checktoken":
            UsersController.checkToken(req, res)
            break;

        default:
            res.status(400).json({ status: false, message: 'Unauthorized Request' })
    }
}
