import { useQuery } from '@tanstack/react-query';

import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { type Database } from '@/src/types/schema';
import { supabase } from '@/src/utils/supabase/client';

import { Assessment } from '.';
import { assessmentQueryKeys } from './keys';
import { CustomQuestionType } from './questions';

const TABLE = 'question_bank' as const;
type QuestionBankTable = Database['public']['Tables'][typeof TABLE];
type QuestionBankDb = Omit<QuestionBankTable['Row'], 'embeddings'>;
export type RecommendationQuestion = QuestionBankDb & CustomQuestionType;

export const useAssessmentRecommendedQuestions = (assessment: Assessment) => {
  const { recruiter_id } = useAuthDetails();
  const { queryKey } = assessmentQueryKeys.recommendations({
    assessment_id: assessment?.id ?? null,
    mode: assessment?.mode ?? null,
  });
  const response = useQuery({
    queryKey,
    queryFn: () => readAssessmentRecommendedQuestionsDbAction(assessment.mode),
    gcTime: assessment ? 1000 * 60 * 5 : 0,
    enabled: !!assessment && !!recruiter_id,
  });
  return { ...response };
};

const readAssessmentRecommendedQuestionsDbAction = async (
  mode: Assessment['mode'] = 'classic',
) => {
  const query = supabase
    .from(TABLE)
    .select(
      'id, created_at, question, answer, type, level, duration, description, required',
    )
    .order('created_at', { ascending: true });
  if (mode !== 'classic') query.eq('type', 'qna');
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data as unknown as RecommendationQuestion[];
};
