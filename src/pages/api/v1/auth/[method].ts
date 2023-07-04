// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  logoutUser,
  validateUserToken,
  signIn,
  forgotPassword,
  signUp,
  verifyEmailOtp,
  changePassword,
  resendUserEmailOtp,
} from '@/controllers/UserController';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const method = req.query.method;

  switch (method) {
    case 'signin':
      return signIn(req, res);

    case 'signup':
      return signUp(req, res);

    case 'logout':
      return logoutUser(req, res);

    case 'checktoken':
      return validateUserToken(req, res);

    case 'verify-email-otp':
      return verifyEmailOtp(req, res);

    case 'resend-email-otp':
      return resendUserEmailOtp(req, res);

    case 'forgot-password':
      return forgotPassword(req, res);

    case 'change-password':
      return changePassword(req, res);

    default:
      return res.status(400).json({ status: false, message: 'Unauthorized Request' });
  }
}
