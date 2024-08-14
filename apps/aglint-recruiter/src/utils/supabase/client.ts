'use client';

import { DB } from '@aglint/shared-types';
import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createBrowserClient<DB>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);

