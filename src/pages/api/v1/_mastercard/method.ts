// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiData, ApiError } from '../../types';
import { AuthUser } from '@/contexts/auth.types';
import { createSession, updateSession } from '@/controllers/MastercardController';

export default async function MasterCardHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | ApiError | AuthUser>
) {
  const methods = req.query.method;

  if (!methods) return res.status(400).json({ status: false, message: 'Unauthorized Request.' });
  const method = methods[0] ?? "";
  switch (method) {
    case 'create-session':
      return createSession(req, res);
    case 'update-session':
      return updateSession(req, res);
  }
}
