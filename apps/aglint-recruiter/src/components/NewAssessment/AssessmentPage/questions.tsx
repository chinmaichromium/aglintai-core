import { Stack } from '@mui/material';
import { capitalize } from 'lodash';
import { type FC, type ReactNode } from 'react';

import { QuestionCard as QuestionCardDev } from '@/devlink2/QuestionCard';
import { QuestionCardLoader } from '@/devlink2/QuestionCardLoader';
import { QuestionsEmpty } from '@/devlink2/QuestionsEmpty';
import { useAssessmentQuestionCreate } from '@/src/queries/assessment/questions';

import { useRecommendationCardDrop } from '../hooks';
import useAssessmentStore from '../Stores';
import { getQuestionDefaults, getSafeQuestionType } from '../utils';
import { useAssessment } from './context';

const AssessmentQuestions = () => {
  const {
    questions: { status, data },
  } = useAssessment();
  const { isOver, dropRef } = useRecommendationCardDrop();

  if (status === 'pending') return <AssessmentQuestionsLoading />;

  if (data.length === 0)
    return (
      <DroppableWrapper dropRef={dropRef}>
        {isOver ? <DropppableCard /> : <AssessmentQuestionsEmpty />}
      </DroppableWrapper>
    );

  return (
    <DroppableWrapper dropRef={dropRef}>
      <Questions />
      {isOver && <DropppableCard />}
    </DroppableWrapper>
  );
};

export default AssessmentQuestions;

const Questions = () => {
  const {
    questions: { data },
  } = useAssessment();
  const { currentQuestion, setCurrentQuestion } = useAssessmentStore(
    (state) => ({
      currentQuestion: state.currentQuestion,
      setCurrentQuestion: state.setCurrentQuestion,
    }),
  );
  const cards = data.map(({ question, type, duration }, i) => {
    const empty = question.label.trim() === '';
    return (
      <QuestionCardDev
        key={i}
        textQuestion={
          <Stack
            style={{ color: empty ? 'var(--neutral-11)' : 'var(--neutral-12)' }}
          >
            {empty ? 'Type Question' : question.label}
          </Stack>
        }
        textQuestionType={capitalize(getSafeQuestionType(type))}
        onClickQuestion={{ onClick: () => setCurrentQuestion(i) }}
        textDuration={`${duration} minutes`}
        isActive={currentQuestion === i}
      />
    );
  });
  return <>{cards}</>;
};

const DroppableWrapper: FC<{
  dropRef: ReturnType<typeof useRecommendationCardDrop>['dropRef'];
  children: ReactNode;
}> = ({ dropRef, children }) => {
  return (
    <Stack ref={dropRef as any} gap={2} height={'100%'}>
      {children}
    </Stack>
  );
};

const DropppableCard = () => {
  return (
    <Stack height={'var(--space-2)'}>
      <QuestionCardDev isDropping={true} />
    </Stack>
  );
};

const AssessmentQuestionsEmpty = () => {
  const {
    mutation: { mutate },
  } = useAssessmentQuestionCreate();
  const handleAddQuestion = () => {
    const defaults = getQuestionDefaults('qna');
    mutate({ ...(defaults as any), id: null });
  };
  return <QuestionsEmpty onClickAdd={{ onClick: () => handleAddQuestion() }} />;
};

const AssessmentQuestionsLoading = () => {
  const cards = [...Array(8)].map((a, i) => <QuestionCardLoader key={i} />);
  return <>{cards}</>;
};
