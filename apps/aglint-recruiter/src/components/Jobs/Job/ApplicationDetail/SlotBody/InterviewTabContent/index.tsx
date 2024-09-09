import ReorderableInterviewPlan from '@components/reorderable-interview-plan';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { InterviewStage } from '@devlink3/InterviewStage';
import { Stack } from '@mui/material';

import Loader from '@/components/Common/Loader';
import { useApplication } from '@/context/ApplicationContext';
import { useInterviewModules } from '@/queries/interview-modules';

import { ActionEmptyState } from '../../../Common/CandidateDrawer/Common/ActionEmptyState';
import Progress from '../Progress';
import DialogSchedule from './ScheduleDialog';
import StageSessions from './StageSessions';
import SideDrawerEdit from './StageSessions/EditDrawer';
import { UIButton } from '@/components/Common/UIButton';
import { ExternalLink } from 'lucide-react';

function InterviewTabContent() {
  const {
    interview: { data: stages, isLoading: isLoadingSession, refetch },
    details: { isLoading: isLoadingDetail },
    application_id,
  } = useApplication();

  useInterviewModules(); //needed to fetch interview modules which is used in edit interview plan

  if (isLoadingSession || isLoadingDetail)
    return (
      <Stack height={'50vh'}>
        <Loader />
      </Stack>
    );

  if (stages.length === 0)
    return (
      <Stack padding={'var(--space-4)'}>
        <ActionEmptyState />
      </Stack>
    );

  return (
    <>
      <SideDrawerEdit refetch={refetch} />
      <Tabs defaultValue='internal'>
        <TabsList>
          <TabsTrigger value='internal'>Internal</TabsTrigger>
          <TabsTrigger value='candidate'>Candidate</TabsTrigger>
        </TabsList>
        <TabsContent value='internal'>
          <InterviewStage
            slotInterviewStage={<StageSessions />}
            slotPiplineTab={<Progress />}
          />
        </TabsContent>
        <TabsContent value='candidate'>
          <UIButton
            variant='secondary'
            onClick={() => {
              window.open(`/candidate/${application_id}/home`, '_blank');
            }}
            size='sm'
            rightIcon={<ExternalLink />}
          >
            Portal
          </UIButton>
          <ReorderableInterviewPlan
            applicationId={stages[0].interview_plan.application_id}
            jobId={null}
          />
        </TabsContent>
      </Tabs>

      <DialogSchedule />
    </>
  );
}

export default InterviewTabContent;
