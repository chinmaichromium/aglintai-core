import { type NextRequest, NextResponse } from 'next/server';

import { server_check_permissions } from './utils/middleware/util';
import { allowedPaths } from './utils/paths/allowed';
import PERMISSIONS from './utils/routing/permissions';

export async function middleware(request: NextRequest) {
  const requestUrl = request.nextUrl.pathname;
  if (isAllowedPaths(requestUrl)) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

  const { isAllowed, id, rec_id, role } = await server_check_permissions({
    getVal: (name) => request.cookies.get(name)?.value,
    // eslint-disable-next-line security/detect-object-injection
    permissions: PERMISSIONS[requestUrl],
  });

  console.log({ isAllowed, id, rec_id, role });

  if (requestUrl.startsWith('/api/')) {
    if (isAllowed) {
      // user this headers to get id and role for requester
      request.headers.append('x-requester-id', id);
      request.headers.append('x-requester-rec_id', rec_id);
      request.headers.append('x-requester-role', role);
    } else {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }
  } else {
    // not login
    if (!isAllowed) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ['/login', '/', '/signup', '/api/:function*'],
};

const isAllowedPaths = (reqUrl: any) => {
  return allowedPaths.has(reqUrl);
};
