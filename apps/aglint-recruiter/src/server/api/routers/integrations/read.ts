import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '../../trpc';

const query = async ({ ctx }: PrivateProcedure) => {
  const db = ctx.db;
  return (
    await db
      .from('integrations')
      .select('*')
      .eq('recruiter_id', ctx.recruiter_id)
      .single()
      .throwOnError()
  ).data;
};

export const read = privateProcedure.query(query);

export type Read = ProcedureDefinition<typeof read>;
