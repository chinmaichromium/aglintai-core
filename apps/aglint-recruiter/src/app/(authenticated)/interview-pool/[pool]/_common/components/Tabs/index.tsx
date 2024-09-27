import UITabs from '@/components/Common/UITabs';
import { useRouterPro } from '@/hooks/useRouterPro';
import ROUTES from '@/utils/routing/routes';

import { usePoolCandidates } from '../../hooks/useCandidateModule';
import { usePoolFeedbacks } from '../../hooks/usePoolFeedback';
import { usePoolSchedules } from '../../hooks/useSchedulesPool';
import Candidates from './Candidates';
import Feedback from './Feedback';
import InstructionsComp from './Instructions';
import Interviewers from './Interviewers';
import Schedules from './Schedules';
import Training from './Training';

function InterviewDetailsTabs() {
  const router = useRouterPro();
  const tabs = [
    {
      name: 'Interviewers',
      id: 'interviewers',
      content: <Interviewers />,
    },
    {
      name: 'Training',
      id: 'training',
      content: <Training />,
    },
    {
      name: 'Schedules',
      id: 'schedules',
      content: <Schedules />,
    },
    {
      name: 'Instructions',
      id: 'instructions',
      content: <InstructionsComp />,
    },
    {
      name: 'Candidates',
      id: 'candidates',
      content: <Candidates />,
    },

    {
      name: 'Feedback',
      id: 'feedback',
      tabComp: <Feedback />,
    },
  ];

  usePoolSchedules({
    filters: ['confirmed', 'completed', 'cancelled'],
  });
  usePoolCandidates();
  usePoolFeedbacks();

  const type_id = router.params.pool;
  return (
    <>
      <UITabs
        tabs={tabs}
        defaultValue={(router.queryParams.tab as string) || 'interviewers'}
        onClick={(value) => {
          router.replace(
            ROUTES['/interview-pool/[pool]']({
              type_id,
            }) +
              '?tab=' +
              value,
          );
        }}
      />
    </>
  );
}

export default InterviewDetailsTabs;
