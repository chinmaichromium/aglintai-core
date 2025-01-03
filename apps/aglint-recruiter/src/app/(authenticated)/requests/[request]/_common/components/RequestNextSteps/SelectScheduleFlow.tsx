import { type DatabaseTable } from '@aglint/shared-types';
import { dayjsLocal } from '@aglint/shared-utils';
import { useRequest } from '@request/hooks';
import React from 'react';

import { UIButton } from '@/common/UIButton';
import { supabase } from '@/utils/supabase/client';

import { setCandidateAvailabilityDrawerOpen } from '../CandidateAvailability/_common/contexts/CandidateAvailabilityFlowStore';
import { deleteRequestWorkflowAction } from '../RequestProgress/utils';
import { useFindAvailibility } from '../SelfSchedulingDrawer/_common/hooks/useFindAvailibility';
import {
  initialFilters,
  setIsSelfScheduleDrawerOpen,
  useSelfSchedulingFlowStore,
} from '../SelfSchedulingDrawer/_common/store/store';

const SelectScheduleFlow = () => {
  const { request_workflow, requestDetails } = useRequest();
  const { findAvailibility } = useFindAvailibility();
  const { fetchingPlan } = useSelfSchedulingFlowStore();
  const addedWorkflow = request_workflow.data.find(
    (w) => w.trigger === 'onRequestSchedule',
  );
  let scheduleWorkflowAction: DatabaseTable['workflow_action'] | null = null;
  if (addedWorkflow && addedWorkflow.workflow_action.length > 0) {
    scheduleWorkflowAction = addedWorkflow.workflow_action[0];
  }

  return (
    <div className='flex space-x-2'>
      <UIButton
        onClick={async () => {
          if (scheduleWorkflowAction) {
            await deleteRequestWorkflowAction(scheduleWorkflowAction.id);
            await deleteRequestProgress(requestDetails.id);
            await request_workflow.refetch();
          }
          setCandidateAvailabilityDrawerOpen(true);
        }}
        variant='outline'
        size='sm'
        data-testid='get-availability-btn'
      >
        Get Availability
      </UIButton>

      <UIButton
        isLoading={fetchingPlan}
        size='sm'
        data-testid='self-schedule-btn'
        onClick={async () => {
          if (fetchingPlan) return;
          if (scheduleWorkflowAction) {
            await deleteRequestWorkflowAction(scheduleWorkflowAction.id);
            await deleteRequestProgress(requestDetails.id);

            await request_workflow.refetch();
          }
          const scheduleStartDate = dayjsLocal().isAfter(
            requestDetails.schedule_start_date,
            'date',
          )
            ? dayjsLocal().toISOString()
            : requestDetails.schedule_start_date;
          const scheduleEndDate = dayjsLocal(scheduleStartDate).add(3, 'day');
          await findAvailibility({
            filters: initialFilters,
            dateRange: {
              start_date: scheduleStartDate,
              end_date: scheduleEndDate.toISOString(),
            },
          });
          setIsSelfScheduleDrawerOpen(true);
        }}
      >
        Send Self Scheduling
      </UIButton>
    </div>
  );
};

export default SelectScheduleFlow;

const deleteRequestProgress = async (requestId: string) => {
  await supabase.from('request_progress').delete().eq('request_id', requestId);
};
