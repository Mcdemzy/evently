// pages/api/auth-data.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@clerk/nextjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sessionClaims } = auth();
  res.status(200).json({ userId: sessionClaims?.userId });
}
