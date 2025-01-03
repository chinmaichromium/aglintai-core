import type { DatabaseFunctions, ZodTypeToSchema } from '@aglint/shared-types';
import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';

type Params = DatabaseFunctions['get_applicant_badges']['Args'];

const schema = z.object({
  job_id: z.string().uuid(),
}) satisfies ZodTypeToSchema<Params>;

const query = async ({ input, ctx }: PrivateProcedure<typeof schema>) => {
  const db = ctx.db;
  return (await db.rpc('get_applicant_badges', input).single()).data;
};

export const badges = privateProcedure.input(schema).query(query);

export type Badges = ProcedureDefinition<typeof badges>;
