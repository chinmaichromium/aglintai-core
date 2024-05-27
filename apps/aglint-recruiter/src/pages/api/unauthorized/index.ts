import { NextApiResponse } from '@/src/interface/NextApiRequest.interface';

export default async function handler(res: NextApiResponse) {
  res.status(401).end('unauthorized access!');
}
