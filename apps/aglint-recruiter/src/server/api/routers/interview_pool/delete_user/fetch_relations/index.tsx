import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';

const schema = z.object({
  module_id: z.string(),
  selected_user_id: z.string(),
});

const query = async ({
  input: { module_id, selected_user_id },
  ctx,
}: PrivateProcedure<typeof schema>) => {
  const db = ctx.db;
  const [meetDet, meetInt] = await Promise.all([
    db
      .from('meeting_details')
      .select('*')
      .contains('confirmed_user_ids', [selected_user_id])
      .eq('module_id', module_id)
      .eq('status', 'confirmed')
      .throwOnError(),
    db
      .from('meeting_interviewers')
      .select('*')
      .eq('interview_module_relation_id', selected_user_id)
      .is('meeting_id', null)
      .throwOnError(),
  ]);

  const { data: jobs } = await db
    .from('public_jobs')
    .select('id,job_title')
    .in('id', meetInt?.data ? meetInt.data.flatMap((meet) => meet.job_id) : [])
    .throwOnError();

  return {
    isOngoingSchedules: meetDet?.data?.length ? meetDet.data.length > 0 : false,
    connectedJobs: jobs,
  };
};

export const fetchRelations = privateProcedure.input(schema).query(query);

export type FetchRelations = ProcedureDefinition<typeof fetchRelations>;
