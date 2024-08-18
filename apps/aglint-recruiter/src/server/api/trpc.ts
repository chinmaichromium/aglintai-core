import { initTRPC, TRPCError } from '@trpc/server';
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import superjson from 'superjson';
import { ZodError } from 'zod';

import { createClient } from '../db';

type CreateContextOptions = {
  headers: Headers | null;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  const cookieStore = cookies();
  const db = createClient({
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options as unknown as ResponseCookie),
          );
        } catch {
          //
        }
      },
    },
  });
  return {
    ...opts,
    cookies: cookieStore,
    db,
  };
};

export const createTRPCContext = async (opts: CreateContextOptions) => {
  return createInnerTRPCContext(opts);
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  // eslint-disable-next-line no-console
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

const refreshMiddleware = t.middleware(async ({ next, ctx }) => {
  const {
    data: { user },
  } = await ctx.db.auth.getUser();
  if (!user) {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return await next({
    ctx: {
      ...ctx,
      user,
    },
  });
});

export const publicProcedure = t.procedure.use(timingMiddleware);

export const privateProcedure = t.procedure
  .use(timingMiddleware)
  .use(refreshMiddleware);
