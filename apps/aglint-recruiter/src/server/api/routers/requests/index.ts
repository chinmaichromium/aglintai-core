import { createTRPCRouter } from '../../trpc';
import { create } from './create';
import { note } from './note';
import { read } from './read';
import { utils } from './utils';

export const requests = createTRPCRouter({
  create,
  note,
  read,
  utils,
});
