import type { DatabaseEnums, DatabaseTable } from '@aglint/shared-types';
import { Dialog, DialogContent } from '@components/ui/dialog';
import { Skeleton } from '@components/ui/skeleton';
import { useRequest } from '@request/hooks';
import React, { useEffect, useMemo } from 'react';

import { ShowCode } from '@/components/Common/ShowCode';
import type { Read } from '@/routers/tenant/templates/read';
import type { ProcedureQuery } from '@/server/api/trpc';
import { api } from '@/trpc/client';
import { type emailTemplateCopy } from '@/types/companyEmailTypes';
import { ACTION_TRIGGER_MAP } from '@/workflows/constants';

import CandidateCancelled from './CandidateCancelled';
import InterviewerDecline from './InterviewerDecline';
import { RequestProgressContext } from './progressCtx';
import ScheduleProgress from './ScheduleProgress';
import { SelectedActionsDetailsProvider } from './ScheduleProgress/dialogCtx';
import WorkflowActionDialog from './ScheduleProgress/WorkflowActionDialog';
import type { RequestProgressMapType, TriggerActionMapType } from './types';

type EmailTemplate = DatabaseTable['company_email_template'] & {
  type: keyof typeof emailTemplateCopy;
};

function RequestProgress() {
  const { request_progress, request_workflow, requestDetails } = useRequest();
  const { data: fetchedTemps, status } = useCompanyTemplates();
  const [triggerDetails, setTriggerDetails] = React.useState<{
    trigger: DatabaseTable['workflow']['trigger'];
    interval: number;
  }>({ interval: 0, trigger: 'onRequestSchedule' });
  const [showEditDialog, setShowEditDialog] = React.useState(false);
  const [companyEmailTemplates, setCompanyEmailTemplates] = React.useState<
    EmailTemplate[]
  >([]);

  useEffect(() => {
    if (status === 'success') {
      setCompanyEmailTemplates(fetchedTemps);
    }
  }, [status, fetchedTemps]);

  const reqTriggerActionsMap = useMemo(() => {
    const mp: TriggerActionMapType = {};
    request_workflow.data.forEach((trigger_act) => {
      mp[trigger_act.trigger] = {
        trigger_details: trigger_act,
        actions: trigger_act.workflow_action ?? [],
      };
    });
    return mp;
  }, [request_workflow.data]);

  const reqProgressMap: RequestProgressMapType = useMemo(() => {
    const mp: RequestProgressMapType = {};
    request_progress.data.forEach((row) => {
      const key = row.event_type;
      if (!mp[key]) {
        mp[key] = [];
      }
      mp[key].push({ ...row });
    });
    return mp;
  }, [request_progress.data]);

  const companyEmailTemplatesMp = useMemo(() => {
    const mp: Partial<
      Record<
        DatabaseEnums['email_slack_types'],
        DatabaseTable['company_email_template']
      >
    > = {};
    companyEmailTemplates.forEach((row) => {
      mp[row.type] = row;
    });
    return mp;
  }, [companyEmailTemplates]);

  return (
    <RequestProgressContext.Provider
      value={{
        companyEmailTemplatesMp,
        reqProgressMap,
        reqTriggerActionsMap,
        setShowEditDialog,
        showEditDialog,
        triggerDetails,
        setTriggerDetails,
      }}
    >
      <div className='row-gap-1 mt-4'>
        <ShowCode>
          <ShowCode.When isTrue={request_progress.status === 'pending'}>
            <RequestProgressSkeleton />
          </ShowCode.When>
          <ShowCode.When isTrue={request_progress.status === 'error'}>
            <>Error</>
          </ShowCode.When>
          <ShowCode.Else>
            <ShowCode>
              <ShowCode.When
                isTrue={requestDetails.type === 'schedule_request'}
              >
                <ScheduleProgress />
              </ShowCode.When>
              <ShowCode.When isTrue={requestDetails.type === 'decline_request'}>
                <>
                  <InterviewerDecline />
                </>
              </ShowCode.When>
              <ShowCode.When
                isTrue={requestDetails.type === 'reschedule_request'}
              >
                <ScheduleProgress />
              </ShowCode.When>
              <ShowCode.When
                isTrue={requestDetails.type === 'cancel_schedule_request'}
              >
                <CandidateCancelled />
              </ShowCode.When>
            </ShowCode>
          </ShowCode.Else>
        </ShowCode>
      </div>

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className='p-0'>
          <SelectedActionsDetailsProvider
            defaultSelectedActionsDetails={getInitialActionDetails({
              companyEmailTemplatesMp,
              triggerDetails,
              reqTriggerActionsMap,
            })}
            companyTemplatesMp={companyEmailTemplatesMp}
          >
            <WorkflowActionDialog />
          </SelectedActionsDetailsProvider>
        </DialogContent>
      </Dialog>
    </RequestProgressContext.Provider>
  );
}

export default RequestProgress;

export function RequestProgressSkeleton() {
  return (
    <div className='row-gap-1'>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

const getInitialActionDetails = ({
  companyEmailTemplatesMp,
  reqTriggerActionsMap,
  triggerDetails,
}: {
  triggerDetails: {
    trigger: DatabaseTable['workflow']['trigger'];
    interval: number;
  };
  reqTriggerActionsMap: TriggerActionMapType;
  companyEmailTemplatesMp: Partial<
    Record<
      DatabaseEnums['email_slack_types'],
      DatabaseTable['company_email_template']
    >
  >;
}) => {
  const editTrigger = triggerDetails.trigger;
  if (
    reqTriggerActionsMap[editTrigger] &&
    reqTriggerActionsMap[editTrigger].actions.length > 0
  ) {
    return reqTriggerActionsMap[editTrigger].actions[0];
  } else {
    let template: DatabaseTable['company_email_template'] | null = null;
    let scheduleFlow: DatabaseEnums['email_slack_types'] | null = null;
    if (editTrigger === 'onRequestSchedule') {
      scheduleFlow = 'sendSelfScheduleRequest_email_applicant';
    } else if (editTrigger === 'sendAvailReqReminder') {
      scheduleFlow = 'sendAvailReqReminder_email_applicant';
    } else if (editTrigger === 'selfScheduleReminder') {
      scheduleFlow = 'selfScheduleReminder_email_applicant';
    }
    if (scheduleFlow && companyEmailTemplatesMp[scheduleFlow]) {
      template = companyEmailTemplatesMp[scheduleFlow]!;
    }

    const wAction: DatabaseTable['workflow_action'] = {
      action_type: ACTION_TRIGGER_MAP[editTrigger][0].value.action_type as any,
      created_at: '',
      id: '',
      order: 0,
      target_api: ACTION_TRIGGER_MAP[editTrigger][0].value.target_api as any,
      workflow_id: '',
      payload: {
        email: {
          body: template ? template.body : '',
          subject: template ? template.subject : '',
        },
        agent: (ACTION_TRIGGER_MAP[editTrigger][0].value.payload as any)?.agent,
      },
    };
    return wAction;
  }
};

const useCompanyTemplates = (): ProcedureQuery<Read> =>
  api.tenant.templates.read.useQuery();
