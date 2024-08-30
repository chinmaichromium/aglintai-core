import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cookies, headers } from 'next/headers';
import { cache } from 'react';

import { AppRouter, createCaller } from '../server/api/root';
import { createTRPCContext } from '../server/api/trpc';
import { createQueryClient } from './query-client';

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');
  const cooks = cookies();
  return createTRPCContext({
    headers: heads,
    cookies: cooks,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
