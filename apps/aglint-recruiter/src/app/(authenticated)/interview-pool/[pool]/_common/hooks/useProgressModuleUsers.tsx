import type { TrainingProgress } from '@/routers/interview_pool/training_progress';
import type { ProcedureQuery } from '@/server/api/trpc';
import { api } from '@/trpc/client';

import { useModuleAndUsers } from './useModuleAndUsers';

export const useProgressModuleUsers = (): ProcedureQuery<TrainingProgress> => {
  const { data: editModule } = useModuleAndUsers();
  const trainer_ids = (editModule?.relations || [])
    .filter((rel) => rel.training_status === 'training')
    .map((user) => {
      return user.id;
    })
    .filter((f) => f !== undefined);
  return api.interview_pool.training_progress.useQuery(
    {
      trainer_ids,
    },
    {
      enabled: !!trainer_ids.length,
    },
  );
};
