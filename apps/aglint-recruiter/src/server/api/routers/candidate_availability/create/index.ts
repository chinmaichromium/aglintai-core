import { type DatabaseTableInsert } from '@aglint/shared-types';
import { availabilityTypeSchema } from '@aglint/shared-types/src/db/tables/candidate_request_availability.type';
import { z, type ZodSchema } from 'zod';

import { type PrivateProcedure, privateProcedure } from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

type Input = ZodSchema<
  Pick<
    DatabaseTableInsert['candidate_request_availability'],
    | 'application_id'
    | 'recruiter_id'
    | 'availability'
    | 'date_range'
    | 'is_task_created'
    | 'number_of_days'
    | 'number_of_slots'
    | 'total_slots'
    | 'request_id'
  >
>;
const schema = z.object({
  application_id: z.string().uuid(),
  recruiter_id: z.string().uuid(),
  availability: availabilityTypeSchema.nullable(),
  date_range: z.array(z.string()),
  is_task_created: z.boolean().nullable(),
  number_of_days: z.number().nullable(),
  number_of_slots: z.number().nullable(),
  total_slots: z.number().nullable(),
  request_id: z.string().uuid().nullable(),
}); // verify satisfies Input from Zod

const query = async ({ input }: PrivateProcedure<Input>) => {
  const db = createPrivateClient();
  return (
    await db
      .from('candidate_request_availability')
      .insert({ ...input })
      .select()
      .single()
      .throwOnError()
  ).data;
};

export const create = privateProcedure.input(schema).mutation(query);