import {
  type NextApiRequest as nextApiRequest,
  type NextApiResponse as nextApiResponse,
} from 'next';

export interface NextApiRequest extends nextApiRequest {
  headers: {
    'x-requester-id'?: string;
    'x-requester-role'?: string;
    'x-requester-rec_id'?: string;
  } & nextApiRequest['headers'];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NextApiResponse extends nextApiResponse {}

export interface ApiInterface {
  request: unknown;
  response: unknown;
}
