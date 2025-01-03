import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';
import { createPublicClient } from '@/server/db';

export const schema = z.object({
  recruiter_id: z.string().uuid(),
  search: z.string().optional(),
  limit: z.number().min(1).nullish(),
  cursor: z.number().nullish(),
});

const pageSize = 9;

const query = async ({ input }: PrivateProcedure<typeof schema>) => {
  const adminDb = createPublicClient();
  const cursor = input?.cursor ?? 0;
  const query = adminDb
    .from('recruiter_relation')
    .select(
      `recruiter_user!public_recruiter_relation_user_id_fkey(user_id, first_name, last_name)`,
    )
    .range(cursor, cursor + pageSize)
    .eq('recruiter_id', input.recruiter_id)
    .eq('is_active', true)
    .in('recruiter_user.status', ['active', 'suspended']);
  if (input.search)
    query.or(
      `first_name.ilike.%${input.search}%,last_name.ilike.%${input.search}%`,
      { referencedTable: 'recruiter_user' },
    );
  query.order('user_id', {
    referencedTable: 'recruiter_user',
    ascending: false,
  });
  const { data, count } = await query.throwOnError();
  const safeData = (data ?? [])
    .flatMap(({ recruiter_user }) => recruiter_user)
    .filter((recruiter_user) => recruiter_user !== null)
    .map(({ first_name, last_name, user_id }, i) => ({
      id: user_id,
      label: `${first_name ?? ''} ${last_name ?? ''}`,
      cursor: cursor + i,
    }));
  const nextCursor =
    cursor < (count ?? 0) && safeData[safeData.length - 1]
      ? safeData[safeData.length - 1].cursor + 1
      : null;
  return {
    items: safeData,
    nextCursor,
  };
};

export const assignees = privateProcedure.input(schema).query(query);

export type Assignees = ProcedureDefinition<typeof assignees>;
