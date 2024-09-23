import { z } from 'zod';

import { type PrivateProcedure, privateProcedure } from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

const applicationRequestSchema = z.object({
  application_id: z.string().uuid(),
});

const query = async (
  ctx: PrivateProcedure<typeof applicationRequestSchema>,
) => {
  return await getApplicationRequests(ctx);
};

export const applicationRequest = privateProcedure
  .input(applicationRequestSchema)
  .query(query);

const getApplicationRequests = async (
  ctx: PrivateProcedure<typeof applicationRequestSchema>,
) => {
  const db = createPrivateClient();
  const {
    input: { application_id },
  } = ctx;
  return (
    await db
      .from('request')
      .select(
        '*,assignee_details:recruiter_user!request_assignee_id_fkey(first_name, last_name, profile_image),request_relation(*)',
      )
      .eq('application_id', application_id)
      .order('created_at', { ascending: false })
      .throwOnError()
  ).data;
};
