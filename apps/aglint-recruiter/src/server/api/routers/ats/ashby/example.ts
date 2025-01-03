import { z } from 'zod';

import {
  type ATSProcedure,
  atsProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';

const schema = z.object({ recruiter_id: z.string().uuid() });

const mutation = ({ input }: ATSProcedure<typeof schema>) => {
  return `Hello ${input.recruiter_id}`;
};

export const example = atsProcedure.input(schema).mutation(mutation);

export type Example = ProcedureDefinition<typeof example>;
