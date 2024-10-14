'use client';
import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { loggerLink } from '@trpc/client/links/loggerLink';
import {
  createTRPCReact,
  unstable_httpBatchStreamLink,
} from '@trpc/react-query';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import { useState } from 'react';
import superjson from 'superjson';

import { useLogout } from '@/authenticated/hooks/useLogout';

import type { AppRouter } from '../server/api/root';
import { createQueryClient } from './query-client';

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = (
  logout?: (_queryClient: QueryClient) => Promise<void>,
) => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient(logout));
};

// export const api = createTRPCClient<AppRouter>({
// links: [
// splitLink({
//   condition: (op) => op.context.disableBatch === true,
//   true: httpLink({
//     url: `${getBaseUrl()}/api/trpc`,
//     transformer: superjson as any,
//   }),
//   false: httpBatchLink({
//     url: `${getBaseUrl()}/api/trpc`,
//     transformer: superjson as any,
//   }),
// }),
// loggerLink({
//   enabled: (opts) =>
//     process.env.NODE_ENV === 'development' ||
//     (opts.direction === 'down' && opts.result instanceof Error),
// }),
// ],
// });

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export type Unvoid<T> = T extends void ? never : T;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const { logout } = useLogout();
  const queryClient = getQueryClient(logout);

  const url = getBaseUrl();
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: `${url}/api/trpc`,
          transformer: superjson,
          methodOverride: 'POST',
          headers: () => {
            const headers = new Headers();
            headers.set('x-trpc-source', 'nextjs-react');
            return headers;
          },
        }),
      ],
    }),
  );

  const showRQDevTools = url.startsWith('http://localhost:');

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {showRQDevTools && <ReactQueryDevtools />}
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}

function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const api = createTRPCReact<AppRouter>();
