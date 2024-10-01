import type { DatabaseFunctions, ZodTypeToSchema } from '@aglint/shared-types';
import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type RequiredPayload,
} from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

type Params = DatabaseFunctions['get_applicant_locations']['Args'];

const schema = z.object({
  job_id: z.string().uuid(),
}) satisfies ZodTypeToSchema<Params>;

const query = async ({ input }: PrivateProcedure<typeof schema>) => {
  const db = createPrivateClient();
  return (
    (
      await db
        .rpc('get_applicant_locations', input as RequiredPayload<typeof input>)
        .single()
    ).data?.locations ?? null
  );
};

export const locations = privateProcedure.input(schema).query(query);
