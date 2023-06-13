// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkUserToken, signIn, getUserSession, forgotPassword, signUp, verifyEmailOtp, changePassword } from '@/controllers/UserController'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiData | ApiError | AuthUser>
) {

    const method = req.query.method;

    switch (method) {
        case "signin":
            signIn(req, res)
            break;

        case "signup":
            signUp(req, res)
            break;

        case "user-session":
            getUserSession(req, res)
            break;

        case "checktoken":
            checkUserToken(req, res)
            break;

        case "verify-email-otp":
            verifyEmailOtp(req, res)
            break;

        case "forgot-password":
            forgotPassword(req, res)
            break;

        case "change-password":
            changePassword(req, res)
            break;

        default:
            res.status(400).json({ status: false, message: 'Unauthorized Request' })
    }
}