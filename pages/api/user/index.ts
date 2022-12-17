import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ message: 'ok' });
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ message: 'ok' });
  });

export default handler;
