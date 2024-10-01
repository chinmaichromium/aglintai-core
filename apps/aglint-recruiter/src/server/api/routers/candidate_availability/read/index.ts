import { z } from 'zod';

import { type PrivateProcedure, privateProcedure } from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

const schema = z.object({
  candidate_availability_id: z.string().uuid(),
});

const query = async ({ input }: PrivateProcedure<typeof schema>) => {
  const { candidate_availability_id } = input;
  const db = createPrivateClient();
  return (
    await db
      .from('candidate_request_availability')
      .select('*')
      .eq('id', candidate_availability_id)
      .single()
      .throwOnError()
  ).data;
};

export const readCandidateAvailability = privateProcedure
  .input(schema)
  .query(query);
