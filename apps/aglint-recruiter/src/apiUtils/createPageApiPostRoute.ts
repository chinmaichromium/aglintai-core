/* eslint-disable no-unused-vars */
import { CApiError } from '@aglint/shared-utils';
import { AxiosError } from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';
export const createPageApiPostRoute = (
  schema: any,
  call_back_handler: (p: any) => any,
  onError?: (e: any) => any,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (req.method !== 'POST') {
        return void res.status(405).json({ error: 'Method Not Allowed' });
      }
      let parsed_body;
      if (schema) {
        parsed_body = schema.parse(req.body);
      } else {
        parsed_body = req.body;
      }
      const resp = await call_back_handler(parsed_body);
      if (!resp) {
        return void res.status(204).end();
      }
      return void res.status(200).json(resp);
    } catch (error: any) {
      console.error('ERROR TYPE : \n', error.type);
      console.error('ERROR STACK : \n', error.stack);
      console.error('ERROR message : \n', error.message);
      if (onError) {
        await onError(error);
      }
      if (error instanceof CApiError) {
        if (error.type === 'CLIENT') {
          return void res
            .status(400)
            .json({ type: error.type, error: error.message });
        } else {
          return void res
            .status(500)
            .json({ type: error.type, error: error.message });
        }
      }
      if (error instanceof AxiosError) {
        return void res
          .status(500)
          .json({ type: 'AXIOS_ERROR', error: error.response?.data });
      }
      return void res
        .status(500)
        .json({ type: 'UNKNOWN', error: error.message });
    }
  };
};
