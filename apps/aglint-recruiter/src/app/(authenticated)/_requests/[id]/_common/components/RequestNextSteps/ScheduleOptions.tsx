import { type DatabaseTable } from '@aglint/shared-types';
import { dayjsLocal, supabaseWrap } from '@aglint/shared-utils';
import { toast } from '@components/hooks/use-toast';
import { deleteRequestWorkflowAction } from '@requests/components/RequestProgress/utils';
import { useMeetingList, useRequestAvailabilityDetails } from '@requests/hooks';
import React, { useMemo } from 'react';

import { ShowCode } from '@/components/Common/ShowCode';
import { UIButton } from '@/components/Common/UIButton';
import { useRequest } from '@/context/RequestContext';
import { useRequests } from '@/context/RequestsContext';
import { supabase } from '@/utils/supabase/client';

import {
  setCandidateAvailabilityDrawerOpen,
  setCandidateAvailabilityIdForReRequest,
  setReRequestAvailability,
} from '../CandidateAvailability/store';
import {
  setApplicationIdForConfirmAvailability,
  setCandidateAvailabilityId,
  useConfirmAvailabilitySchedulingFlowStore,
} from '../ConfirmAvailability/store';
import { useSelfSchedulingDrawer } from '../SelfSchedulingDrawer/_common/hooks/hooks';
import {
  initialFilters,
  setIsSelfScheduleDrawerOpen,
  useSelfSchedulingFlowStore,
} from '../SelfSchedulingDrawer/_common/store/store';

const ScheduleOptions = () => {
  const [isProceeding, setIsProceeding] = React.useState(false);
  const { refetch: refetchMeetings } = useMeetingList();
  const { findAvailibility } = useSelfSchedulingDrawer({
    refetch: refetchMeetings,
  });
  const { fetchingPlan } = useSelfSchedulingFlowStore();
  const { request_workflow, requestDetails, request_progress } = useRequest();
  const { handleAsyncUpdateRequest } = useRequests();
  const { candidateAvailabilityId } =
    useConfirmAvailabilitySchedulingFlowStore();
  const { isFetching } = useRequestAvailabilityDetails({
    availability_id: candidateAvailabilityId,
  });
  const addedWorkflow = request_workflow.data.find(
    (w) => w.trigger === 'onRequestSchedule',
  );
  let scheduleWorkflowAction: DatabaseTable['workflow_action'] = null;
  if (addedWorkflow && addedWorkflow.workflow_action.length > 0) {
    scheduleWorkflowAction = addedWorkflow.workflow_action[0];
  }

  const isActionSetAfterAvailabilityRecieved = useMemo(() => {
    if (request_workflow.data.length === 0) return false;
    const action = request_workflow.data.find(
      (w) => w.trigger === 'onReceivingAvailReq',
    );
    if (action && action.workflow_action.length > 0) {
      return true;
    }
  }, [request_workflow.data]);

  const lastEvent = useMemo(() => {
    const heading_events = request_progress.data.filter(
      (r) => r.is_progress_step === false,
    );
    if (heading_events.length === 0) return null;
    return heading_events[heading_events.length - 1];
  }, [request_progress.data]);
  const handleConfirmSlot = async (request_id: string) => {
    try {
      const [candReq] = supabaseWrap(
        await supabase
          .from('candidate_request_availability')
          .select()
          .eq('request_id', request_id),
      );
      setCandidateAvailabilityId(candReq.id);
      setApplicationIdForConfirmAvailability(candReq.application_id);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
      });
    }
  };

  const handleReReq = async (request_id: string) => {
    const [avail_req] = supabaseWrap(
      await supabase
        .from('candidate_request_availability')
        .select()
        .eq('request_id', request_id),
    );
    setCandidateAvailabilityDrawerOpen(true);
    setReRequestAvailability(true);
    setCandidateAvailabilityIdForReRequest(avail_req.id);
  };
  return (
    <>
      <ShowCode.When
        isTrue={
          Boolean(scheduleWorkflowAction) && requestDetails.status === 'to_do'
        }
      >
        <>
          <UIButton
            onClick={async () => {
              setIsProceeding(true);
              await handleAsyncUpdateRequest({
                payload: {
                  requestId: requestDetails.id,
                  requestPayload: { status: 'in_progress' },
                },
              });
              setTimeout(() => {
                setIsProceeding(false);
              }, 2000);
            }}
          >
            {isProceeding ? 'Proceeding...' : 'Click here Proceed'}
          </UIButton>
        </>
      </ShowCode.When>
      <ShowCode.When
        isTrue={
          (!scheduleWorkflowAction && !lastEvent) ||
          (lastEvent &&
            (lastEvent.event_type === 'SELF_SCHEDULE_LINK' ||
              lastEvent.event_type === 'REQ_CAND_AVAIL_EMAIL_LINK') &&
            lastEvent.status === 'failed')
        }
      >
        <>
          <UIButton
            onClick={() => {
              setCandidateAvailabilityDrawerOpen(true);
            }}
            variant='outline'
            size='sm'
          >
            Get Availability
          </UIButton>
          <UIButton
            isLoading={fetchingPlan}
            size='sm'
            onClick={async () => {
              if (fetchingPlan) return;
              if (scheduleWorkflowAction) {
                await deleteRequestWorkflowAction(scheduleWorkflowAction.id);
                await request_workflow.refetch();
              }
              await findAvailibility({
                filters: initialFilters,
                dateRange: {
                  start_date: dayjsLocal().toISOString(),
                  end_date: dayjsLocal().add(14, 'day').toISOString(),
                },
              });
              setIsSelfScheduleDrawerOpen(true);
            }}
          >
            Send Self Scheduling
          </UIButton>
        </>
      </ShowCode.When>
      <ShowCode.When
        isTrue={
          lastEvent &&
          lastEvent.event_type === 'CAND_AVAIL_REC' &&
          (!isActionSetAfterAvailabilityRecieved ||
            lastEvent.status === 'failed')
        }
      >
        <div className='flex space-x-2'>
          <UIButton
            variant='default'
            size='sm'
            onClick={async () => {
              if (scheduleWorkflowAction) {
                await deleteRequestWorkflowAction(scheduleWorkflowAction.id);
                await request_workflow.refetch();
              }
              handleConfirmSlot(lastEvent.request_id);
            }}
            isLoading={isFetching}
          >
            Schedule Interview
          </UIButton>
          <UIButton
            variant='outline'
            size='sm'
            onClick={() => {
              handleReReq(lastEvent.request_id);
            }}
          >
            Re Request Availability
          </UIButton>
        </div>
      </ShowCode.When>
    </>
  );
};

export default ScheduleOptions;
