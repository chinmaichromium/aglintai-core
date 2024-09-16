/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import type { DatabaseTable, RecursiveRequired } from '@aglint/shared-types';
import { initTRPC, TRPCError } from '@trpc/server';
import type { ProcedureBuilder } from '@trpc/server/unstable-core-do-not-import';
import superjson from 'superjson';
import { type z, ZodError } from 'zod';

import { getDecryptKey } from '@/api/sync/greenhouse/util';

import { createPrivateClient, createPublicClient } from '../db';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../enums';
import { authorize } from '../utils';

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const adminDb = createPublicClient();
  return { ...opts, adminDb };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
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

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  // if (t._config.isDev) {
  //   const waitMs = Math.floor(Math.random() * 400) + 100;
  //   await new Promise((resolve) => setTimeout(resolve, waitMs));
  // }

  const result = await next();

  const end = Date.now();
  // eslint-disable-next-line no-console
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
  return result;
});

const atsMiddleware = t.middleware(async ({ next, ctx, input }) => {
  const recruiter_id = (input as any)
    .recruiter_id as DatabaseTable['recruiter']['id'];
  if (!recruiter_id)
    throw new TRPCError({
      code: 'UNPROCESSABLE_CONTENT',
      message: 'Invalid payload',
    });
  const { ats } = (
    await ctx.adminDb
      .from('recruiter_preferences')
      .select('ats')
      .eq('recruiter_id', recruiter_id)
      .single()
      .throwOnError()
  ).data;
  if (ats === 'Aglint')
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Not supported',
    });
  return await next({
    ctx: {
      ...ctx,
      ats,
    },
  });
});

const greenhouseMiddleware = t.middleware(async ({ next, ctx, input }) => {
  const recruiter_id = (input as any)
    .recruiter_id as DatabaseTable['recruiter']['id'];
  const ats = (ctx as any).ats as DatabaseTable['recruiter_preferences']['ats'];
  if (!recruiter_id || ats !== 'Greenhouse')
    throw new TRPCError({
      code: 'UNPROCESSABLE_CONTENT',
      message: 'Invalid payload',
    });
  const { greenhouse_key, greenhouse_metadata } = (
    await ctx.adminDb
      .from('integrations')
      .select('greenhouse_key, greenhouse_metadata')
      .eq('recruiter_id', recruiter_id)
      .single()
      .throwOnError()
  ).data;
  if (!greenhouse_key)
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Missing greenhouse key',
    });
  const decryptKey = await getDecryptKey(greenhouse_key);
  return await next({
    ctx: {
      ...ctx,
      ats,
      greenhouse_metadata,
      decryptKey,
    },
  });
});

const leverMiddleware = t.middleware(async ({ next, ctx, input }) => {
  const recruiter_id = (input as any)
    .recruiter_id as DatabaseTable['recruiter']['id'];
  const ats = (ctx as any).ats as DatabaseTable['recruiter_preferences']['ats'];
  if (!recruiter_id || ats !== 'Lever')
    throw new TRPCError({
      code: 'UNPROCESSABLE_CONTENT',
      message: 'Invalid payload',
    });
  const { lever_key } = (
    await ctx.adminDb
      .from('integrations')
      .select('lever_key')
      .eq('recruiter_id', recruiter_id)
      .single()
      .throwOnError()
  ).data;
  if (!lever_key)
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Missing lever key',
    });
  const decryptKey = await getDecryptKey(lever_key);
  return await next({
    ctx: {
      ...ctx,
      ats,
      decryptKey,
    },
  });
});

const ashbyMiddleware = t.middleware(async ({ next, ctx, input }) => {
  const recruiter_id = (input as any)
    .recruiter_id as DatabaseTable['recruiter']['id'];
  const ats = (ctx as any).ats as DatabaseTable['recruiter_preferences']['ats'];
  if (!recruiter_id || ats !== 'Ashby')
    throw new TRPCError({
      code: 'UNPROCESSABLE_CONTENT',
      message: 'Invalid payload',
    });
  const { ashby_key } = (
    await ctx.adminDb
      .from('integrations')
      .select('ashby_key')
      .eq('recruiter_id', recruiter_id)
      .single()
      .throwOnError()
  ).data;
  if (!ashby_key)
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Missing ashby key',
    });
  const decryptKey = await getDecryptKey(ashby_key);
  return await next({
    ctx: {
      ...ctx,
      ats,
      decryptKey,
    },
  });
});

const authMiddleware = t.middleware(async ({ next, ctx, path }) => {
  const db = createPrivateClient();

  const {
    data: { user },
  } = await db.auth.getUser();

  if (!user) {
    throw new TRPCError({ code: 'FORBIDDEN', message: UNAUTHENTICATED });
  }

  const { data } = await db
    .from('recruiter_relation')
    .select(
      'recruiter_id, roles(name, role_permissions(permissions(name, is_enable)))',
    )
    .eq('user_id', user.id)
    .single()
    .throwOnError();

  if (!data) {
    throw new TRPCError({ code: 'FORBIDDEN', message: UNAUTHENTICATED });
  }

  const {
    recruiter_id,
    roles: { role_permissions },
  } = data;
  const permissions = role_permissions.reduce(
    (acc, { permissions: { is_enable, name } }) => {
      if (is_enable) acc.push(name);
      return acc;
    },
    [] as (typeof role_permissions)[number]['permissions']['name'][],
  );

  if (!authorize(path, permissions))
    throw new TRPCError({ code: 'UNAUTHORIZED', message: UNAUTHORIZED });

  return await next({
    ctx: {
      ...ctx,
      db,
      user,
      recruiter_id,
    },
  });
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */

export const publicProcedure = t.procedure.use(timingMiddleware);
export type PublicProcedure<T> = Procedure<T, typeof publicProcedure>;

export const greenhouseProcedure = t.procedure
  .use(timingMiddleware)
  .use(atsMiddleware)
  .use(greenhouseMiddleware);
export type GreenhouseProcedure<T> = Procedure<T, typeof greenhouseProcedure>;

export const leverProcedure = t.procedure
  .use(timingMiddleware)
  .use(atsMiddleware)
  .use(leverMiddleware);
export type LeverProcedure<T> = Procedure<T, typeof leverProcedure>;

export const ashbyProcedure = t.procedure
  .use(timingMiddleware)
  .use(atsMiddleware)
  .use(ashbyMiddleware);
export type AshbyProcedure<T> = Procedure<T, typeof ashbyProcedure>;

/**
 * Private (authenticated) procedure
 *
 * This procedure is intended for queries and mutations that require the user to be authenticated.
 * It ensures that the user is logged in and authorized before accessing the API. User session data + permissions
 * are always accessible through the middleware chain, and you can safely assume the presence of an authenticated user.
 */

export const privateProcedure = t.procedure
  .use(timingMiddleware)
  .use(authMiddleware);
export type PrivateProcedure<T> = Procedure<T, typeof privateProcedure>;

type Procedure<
  T,
  U extends ProcedureBuilder<any, any, any, any, any, any, any, any>,
> =
  T extends z.ZodObject<any, any, any, any, any>
    ? U extends ProcedureBuilder<
        infer TContext,
        any,
        infer TContextOverrides,
        any,
        any,
        any,
        any,
        any
      >
      ? {
          ctx: TContext & TContextOverrides;
          input: RecursiveRequired<z.infer<T>>;
        }
      : never
    : never;
