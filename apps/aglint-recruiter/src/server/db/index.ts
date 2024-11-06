import type { DB } from '@aglint/shared-types';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import {
  type ResponseCookie,
  type ResponseCookies,
} from 'next/dist/compiled/@edge-runtime/cookies';

export async function createPrivateClient(cookieStore: ResponseCookies) {
  return createServerClient<DB>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, { ...(options as ResponseCookie) }),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

export function createPublicClient() {
  return createClient<DB>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
