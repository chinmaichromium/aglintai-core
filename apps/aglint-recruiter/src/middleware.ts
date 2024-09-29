import { type NextRequest, NextResponse } from 'next/server';

import { createPrivateClient } from './server/db';
import { allowedPaths, dynamicPublicRoutes } from './utils/paths/allowed';

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
// 1. Specify protected and public routes
const publicRoutes = [...allowedPaths] as const;

export async function middleware(req: NextRequest) {
  // Check the origin from the request
  const origin = req.headers.get('origin') ?? '';
  const isAllowedOrigin = origin.startsWith('http://localhost');

  const isPreflight = req.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isPublicRoute =
    publicRoutes.includes(path as (typeof publicRoutes)[number]) ||
    dynamicPublicRoutes.some((regex) => regex.test(path));

  const supabase = createPrivateClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) NextResponse.redirect(new URL('/', req.nextUrl));
  if (isPublicRoute) {
    if (data.session && path === '/login')
      return NextResponse.redirect(new URL('/jobs', req.nextUrl));
  } else {
    if (!data.session)
      return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*.svg$|sitemap.xml|robots.txt).*)',
  ],
};
