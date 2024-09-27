import { createTRPCRouter } from '../../trpc';
import { candidatesModule } from './candidates';
import { createInterviewPool } from './create_pool';
import { feedbackPool } from './feedback';
import { interviewPools } from './interview_types';
import { interviewPoolUsers } from './module_and_users';
import { schedulesPool } from './schedules';
import { trainingProgress } from './training_progress';

export const interview_pool = createTRPCRouter({
  module_and_users: interviewPoolUsers,
  training_progress: trainingProgress,
  candidates: candidatesModule,
  feedbacks: feedbackPool,
  schedules: schedulesPool,
  interview_pool: interviewPools,
  create_pool: createInterviewPool,
});
