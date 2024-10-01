import { interviewModuleInsertSchema } from '@aglint/shared-types';
import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type RequiredPayload,
} from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

const schema = interviewModuleInsertSchema.extend({
  isTraining: z.boolean(),
  recruiter_id: z.number().optional(),
});

const mutation = async ({
  input,
  ctx: { recruiter_id },
}: PrivateProcedure<typeof schema>) => {
  const db = createPrivateClient();
  delete input.isTraining;
  const payload = {
    ...input,
    recruiter_id,
    settings: {
      require_training: input.isTraining,
      noShadow: 2,
      noReverseShadow: 2,
      reqruire_approval: false,
    },
  };
  return (
    await db
      .from('interview_module')
      .insert(payload as RequiredPayload<typeof payload>)
      .select('id')
      .single()
      .throwOnError()
  ).data;
};

export const createInterviewPool = privateProcedure
  .input(schema)
  .mutation(mutation);
