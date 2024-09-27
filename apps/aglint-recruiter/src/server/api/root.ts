import { analytics } from './routers/analytics';
import { application } from './routers/application';
import { ats } from './routers/ats';
import { candidatePortal } from './routers/candidatePortal';
import { example, exampleSchema } from './routers/example';
import { get_last_login } from './routers/get_last_login';
import { get_members_with_role } from './routers/get_members_with_role';
import { integrations } from './routers/integrations';
import { interview_pool } from './routers/interview_pool';
import { interviewers } from './routers/interviewers';
import { jobs } from './routers/jobs';
import { requests } from './routers/requests';
import { rolesAndPermissions } from './routers/rolesAndPermissions';
import { scheduling } from './routers/scheduling';
import { user } from './routers/user';
import { createCallerFactory, createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  ats,
  analytics,
  candidatePortal,
  example,
  integrations,
  interviewers,
  interview_pool,
  jobs,
  requests,
  scheduling,
  application,
  get_last_login,
  get_members_with_role,
  user,
  rolesAndPermissions,
});

export const appRouterSchema = {
  example: exampleSchema,
};

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
