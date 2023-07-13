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
  sendEmailOTP,
} from '@/controllers/UserController';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import { userCart } from '@/controllers/CartController';

export default async function AuthHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {

  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });

  const method = methods[0] ?? "";

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

    case 'email-otp':
      return sendEmailOTP(req, res);
  }
}
