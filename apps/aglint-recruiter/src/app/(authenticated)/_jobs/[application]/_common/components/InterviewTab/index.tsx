import { Skeleton } from '@components/ui/skeleton';

import { UIAlert } from '@/components/Common/UIAlert';
import { ActionEmptyState } from '@/job/components/CandidateDrawer/Common/ActionEmptyState';
import { useInterviewModules } from '@/queries/interview-modules';

import { useInterviewStages } from '../../hooks/useInterviewStages';
import SideDrawerEdit from '../EditDrawer';
import StageSessions from '../InterviewStage';
import Progress from '../InterviewStage/Progress';
import DialogSchedule from '../ScheduleDialog';
import { InterviewStage } from '../ui/InterviewStage';

function InterviewTabContent() {
  const { data: stages, isLoading, refetch, error } = useInterviewStages();

  useInterviewModules(); //needed to fetch interview modules which is used in edit interview plan

  if (isLoading)
    return (
      <div className='flex flex-row gap-4'>
        <div className='flex min-w-[320px] flex-col space-y-4'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className='h-[70px] w-full' />
          ))}
        </div>
        <div className='flex w-full flex-col space-y-4'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className='h-[100px] w-full' />
          ))}
        </div>
      </div>
    );

  if (error) {
    return <UIAlert title={'Error Fetching Stages'} />;
  }

  if (stages.length === 0)
    return (
      <div className='p-4'>
        <ActionEmptyState />
      </div>
    );

  return (
    <>
      <SideDrawerEdit refetch={refetch} />
      <InterviewStage
        slotInterviewStage={<StageSessions />}
        slotPipelineTab={<Progress />}
      />
      <DialogSchedule />
    </>
  );
}

export default InterviewTabContent;
