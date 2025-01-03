/* eslint-disable no-console */
import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';

export const worldSchema = z.object({ worldId: z.string().uuid() });

const mutation = async ({
  input: { worldId },
  ctx,
}: PrivateProcedure<typeof worldSchema>) => {
  const db = ctx.db;
  if (db) {
    console.log(`World from the db: ${worldId}`);
  }
  console.log(`World from the db: ${worldId}`);
  return { worldId };
};

export const world = privateProcedure.input(worldSchema).mutation(mutation);

export type World = ProcedureDefinition<typeof world>;
