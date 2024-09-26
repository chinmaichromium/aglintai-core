import type {
  DatabaseFunctions,
  DatabaseTable,
  ZodTypeToSchema,
} from '@aglint/shared-types';
import { z } from 'zod';

import { type PrivateProcedure, privateProcedure } from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';
import { formatSessions } from '@/utils/formatSessions';

import { createRequestSchema } from '../../../requests/create/create_request';

type Params =
  | {
      status: Extract<DatabaseTable['applications']['status'], 'interview'>;
      job_id: string;
      applications: string[];
      body: null | DatabaseFunctions['move_to_interview']['Args'];
    }
  | {
      status: Exclude<DatabaseTable['applications']['status'], 'interview'>;
      job_id: string;
      applications: string[];
    };

const nonInterviewSchema = z.object({
  status: z.enum(['new', 'qualified', 'disqualified']),
  job_id: z.string().uuid(),
  applications: z.array(z.string().uuid()),
});

const interviewSchema = z.object({
  status: z.literal('interview'),
  job_id: z.string().uuid(),
  applications: z.array(z.string().uuid()),
  body: createRequestSchema.omit({ application: true }).nullable(),
});

const schema = z.discriminatedUnion('status', [
  interviewSchema,
  nonInterviewSchema,
]) satisfies ZodTypeToSchema<Params>;

const moveToInterview = async ({
  ctx,
  input,
}: PrivateProcedure<typeof interviewSchema>) => {
  const db = createPrivateClient();
  if (!input.body) {
    const { body: _body, applications, ...rest } = input;
    const payload = applications.map((id) => ({
      id,
      recruiter_id: ctx.recruiter_id,
      ...rest,
    }));
    return await db.from('applications').upsert(payload).throwOnError();
  }
  const [{ data }, { data: session_names }] = await Promise.all([
    db
      .from('application_view')
      .select('id, name')
      .in('id', input.applications)
      .throwOnError(),
    db
      .from('interview_session')
      .select('name')
      .in('id', input.body.sessions)
      .throwOnError(),
  ]);
  const sessions = formatSessions(session_names.map(({ name }) => name));
  const requests: DatabaseFunctions['move_to_interview']['Args']['requests'] =
    data.map(({ id: application_id, name }) => ({
      application_id,
      title: `Schedule ${sessions} for ${name}`,
      status: 'to_do',
      assigner_id: ctx.user_id,
      ...input.body.request,
    }));
  return await db.rpc('move_to_interview', {
    applications: input.applications,
    sessions: input.body.sessions,
    requests,
  });
};

const moveToNonInterview = async ({
  ctx,
  input,
}: PrivateProcedure<typeof nonInterviewSchema>) => {
  const db = createPrivateClient();
  const { applications, ...rest } = input;
  const payload = applications.map((id) => ({
    id,
    recruiter_id: ctx.recruiter_id,
    ...rest,
  }));
  return await db.from('applications').upsert(payload).throwOnError();
};

const mutation = async ({ ctx, input }: PrivateProcedure<typeof schema>) => {
  if (input.status === 'interview')
    return await moveToInterview({ ctx, input });
  return await moveToNonInterview({ ctx, input });
};

export const move = privateProcedure.input(schema).mutation(mutation);
