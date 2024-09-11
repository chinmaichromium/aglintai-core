/* eslint-disable security/detect-object-injection */
import { type DatabaseEnums } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import { Alert, AlertDescription } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import axios from 'axios';
import { Lightbulb, Plus } from 'lucide-react';
import React from 'react';

import { ShowCode } from '@/components/Common/ShowCode';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRequest } from '@/context/RequestContext';
import { supabase } from '@/utils/supabase/client';
import toast from '@/utils/toast';

import { useRequestProgressProvider } from '../progressCtx';
import { RequestProgressTracker } from '../RequestProgressTracker';
import {
  createRequestWorkflowAction,
  deleteRequestWorkflowAction,
} from '../utils';
import { workflowCopy } from '../utils/copy';
import { progressStatusToTense } from '../utils/getProgressColor';
import { apiTargetToEvents } from '../utils/progressMaps';
import EventNode from './EventNode';

type TenseType = 'past' | 'present' | 'future' | 'error';

const InterviewScheduled = () => {
  const { reqTriggerActionsMap: triggerActionMp, reqProgressMap } =
    useRequestProgressProvider();
  const { recruiter } = useAuthDetails();
  const { request_workflow, requestDetails: currentRequest } = useRequest();
  const [, setRsvpSending] = React.useState(false);
  const event_status =
    reqProgressMap['CAND_CONFIRM_SLOT']?.[0] ??
    reqProgressMap['SCHEDULE_INTERVIEW_SLOT']?.[0];

  let tense: TenseType = 'future';
  if (event_status) {
    tense = progressStatusToTense(event_status.status);
  }

  const handleAddAction = async (
    target_api: DatabaseEnums['email_slack_types'],
  ) => {
    try {
      await createRequestWorkflowAction({
        wAction: {
          target_api: target_api as any,
          order: 0,
          action_type: 'slack',
        },
        recruiter_id: recruiter.id,
        request_id: currentRequest.id,
      });
      await request_workflow.refetch();
    } catch (err) {
      toast.error('Failed to add action');
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleDeleteScheduleAction = async (workflowActionId: string) => {
    try {
      await deleteRequestWorkflowAction(workflowActionId);
      await request_workflow.refetch();
    } catch (err) {
      toast.error('Failed to remove action');
    }
  };
  // eslint-disable-next-line no-unused-vars
  const handleSendRsVpReminder = async () => {
    try {
      setRsvpSending(true);
      const sesn_reln = supabaseWrap(
        await supabase
          .from('request_relation')
          .select()
          .eq('request_id', currentRequest.id),
      );

      for (const reln of sesn_reln) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_AGENT_API}/api/slack/candidateBook_slack_interviewerForConfirmation`,
          {
            session_id: reln.session_id,
            application_id: currentRequest.application_id,
            request_id: currentRequest.id,
          },
        );
      }
    } catch (err) {
      toast.error('Failed to send RSVP reminder');
      setRsvpSending(false);
    }
  };
  let isWorkflowSet = false;
  if (triggerActionMp['candidateBook']?.length > 0) {
    isWorkflowSet = true;
  }
  return (
    <RequestProgressTracker
      circleIndicator={tense === 'past' ? 'success' : 'default'}
      textRequestProgress={'When inteview is scheduled'}
      slotProgress={
        <>
          {triggerActionMp['candidateBook']?.map((action, idx) => {
            return (
              <EventNode
                key={idx}
                currEventTrigger='candidateBook'
                eventType={apiTargetToEvents[action.target_api]}
                reqProgresMap={reqProgressMap}
                currWAction={action}
              />
            );
          })}
          <ShowCode.When isTrue={!isWorkflowSet}>
            <Alert
              variant='default'
              className='bg-purple-100 border-purple-200 mb-4'
            >
              <Lightbulb className='h-4 w-4 text-purple-500' />
              <AlertDescription className='flex flex-col items-end'>
                <p className='mb-4 w-full'>
                  {workflowCopy['SEND_INTERVIEWER_ATTENDANCE_RSVP'][tense]}
                </p>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    handleAddAction(
                      'candidateBook_slack_interviewerForConfirmation',
                    )
                  }
                >
                  <Plus className='h-4 w-4' />
                  Add RSVP
                </Button>
              </AlertDescription>
            </Alert>
          </ShowCode.When>
        </>
      }
    />
  );
};

export default InterviewScheduled;
