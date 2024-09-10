import {
  type DatabaseEnums,
  type DatabaseTableInsert,
} from '@aglint/shared-types';
import { Button } from '@components/ui/button';
import { WorkflowItem } from '@devlink3/WorkflowItem';
import axios from 'axios';
import { get } from 'lodash';
import { Play } from 'lucide-react';
import React, { useState } from 'react';

import UISelectDropDown from '@/components/Common/UISelectDropDown';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRequest } from '@/context/RequestContext';
import toast from '@/utils/toast';
import { ACTION_TRIGGER_MAP } from '@/workflows/constants';

import { useRequestProgressProvider } from '../progressCtx';
import { TargetAPIBody } from '../WorkflowComps/TargetAPIBody';
import {
  agentTargetApiEmailEndPoint,
  useSelectedActionsDetails,
} from './dialogCtx';

const WorkflowActionDialog = () => {
  const { recruiter } = useAuthDetails();
  const { request_workflow, requestDetails: currentRequest } = useRequest();
  const {
    reqTriggerActionsMap,
    companyEmailTemplatesMp,
    editTrigger,
    setShowEditDialog,
  } = useRequestProgressProvider();

  const {
    selectedActionsDetails,
    setSelectedActionsDetails,
    setEmailTemplate,
    emailTemplate,
    agentInstructions,
    setTiptapLoadStatus,
  } = useSelectedActionsDetails();

  const [isAddingAction, setIsAddingAction] = useState(false);
  const handleChangeSelectedAction = (
    target_api: DatabaseEnums['email_slack_types'],
  ) => {
    setTiptapLoadStatus({ email: true, agent: true });
    if (
      get(reqTriggerActionsMap, editTrigger, []).length > 0 &&
      reqTriggerActionsMap[editTrigger][0].target_api === target_api
    ) {
      const existing_workflow_action = reqTriggerActionsMap[editTrigger][0];
      setEmailTemplate({
        body: existing_workflow_action.payload?.email?.body || '',
        subject: existing_workflow_action.payload?.email?.subject || '',
      });
      existing_workflow_action.payload = undefined;
      setSelectedActionsDetails({
        ...existing_workflow_action,
      });
    } else {
      let emailTempKey = target_api;
      if (agentTargetApiEmailEndPoint[target_api]) {
        emailTempKey = agentTargetApiEmailEndPoint[target_api];
      }
      const emailSlackTemplate = companyEmailTemplatesMp[emailTempKey];
      setEmailTemplate({
        body: emailSlackTemplate?.body || '',
        subject: emailSlackTemplate?.subject || '',
      });
      const defaultActDetails = ACTION_TRIGGER_MAP[editTrigger].find(
        (t) => t.value.target_api === target_api,
      );
      setSelectedActionsDetails({
        id: undefined,
        action_type: defaultActDetails.value.action_type,
        created_at: new Date().toISOString(),
        order: 0,
        target_api: target_api as any,
        workflow_id: undefined,
      });
    }

    setTiptapLoadStatus({ email: false, agent: false });
  };
  const handleSaveScheduleAction = async (
    wAction: DatabaseTableInsert['workflow_action'],
  ) => {
    try {
      if (agentInstructions.length > 0) {
        const { data } = await axios.post('/api/ai/self-schedule-request', {
          instruction: agentInstructions,
        });
        console.log(data);
      }
      setIsAddingAction(true);
      // await createRequestWorkflowAction({
      //   wAction,
      //   request_id: currentRequest.id,
      //   recruiter_id: recruiter.id,
      // });
      // save json
      // request_workflow.refetch();
    } catch (err) {
      toast.error('Failed to add action');
    } finally {
      setIsAddingAction(false);
      // setShowEditDialog(false);
    }
  };

  return (
    <WorkflowItem
      textWorkflowType={'Action'}
      textTypeDescription={'An action to be performed'}
      slotWorkflowIcon={<ActionIcon />}
      isDeleteVisible={false}
      slotInputFields={
        <>
          <UISelectDropDown
            label='Do this'
            onValueChange={(value) => {
              handleChangeSelectedAction(value as any);
            }}
            value={selectedActionsDetails.target_api}
            menuOptions={ACTION_TRIGGER_MAP[editTrigger].map((action) => ({
              name: action.name,
              value: action.value.target_api,
            }))}
          />
          <TargetAPIBody action={selectedActionsDetails} />
          <Button
            variant='default'
            onClick={() => {
              handleSaveScheduleAction({
                action_type: selectedActionsDetails.action_type as any,
                target_api: selectedActionsDetails.target_api as any,
                order: 0,
                workflow_id: selectedActionsDetails.workflow_id,
                payload: {
                  email: emailTemplate,
                },
              });
            }}
          >
            {isAddingAction ? 'Adding...' : 'Add Action'}
          </Button>
        </>
      }
    />
  );
};

export default WorkflowActionDialog;

const ActionIcon = () => {
  return <Play size={12} />;
};
ActionIcon.displayName = 'ActionIcon';
