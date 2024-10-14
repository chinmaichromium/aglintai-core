import { type DatabaseTable } from '@aglint/shared-types';
import {
  type GroupReqProgress,
  type ProgressNodeType,
  type RequesProgressMetaType,
  type RequestProgressMapType,
  type TriggerActionMapType,
} from '@request/components/RequestProgress/types';
import { getSchedulFlow } from '@request/components/RequestProgress/utils/getScheduleFlow';
import { cloneDeep } from 'lodash';

import {
  type getRequestProgress,
  type getRequestWorkflow,
} from '@/queries/requests';

type RequestFormattedDetailsParams = {
  request_progress: Awaited<ReturnType<typeof getRequestProgress>>;
  request_workflow: Awaited<ReturnType<typeof getRequestWorkflow>>;
  is_slack_enabled: boolean;
  is_workflow_enabled: boolean;
  requestDetails: DatabaseTable['request'];
};

export const getRequestFormattedDetails = ({
  request_progress,
  request_workflow,
  is_slack_enabled,
  is_workflow_enabled,
  requestDetails,
}: RequestFormattedDetailsParams) => {
  const requestProgressMeta = getInitialReqData();
  const progWfMp = getProgWfMaps({ request_progress, request_workflow });
  const grouped_progress: GroupReqProgress[] =
    groupReqProgress(request_progress);

  requestProgressMeta.meta = getProgressMeta({
    reqProgressMp: progWfMp.requestProgMp,
    triggerActionMp: progWfMp.eventTargetMap,
  });

  requestProgressMeta.scheduleProgressNodes = getScheduleNodes({
    grouped_progress,
    reqParams: {
      is_slack_enabled,
      is_workflow_enabled,
      request_progress,
      request_workflow,
      requestDetails,
    },
    requestprogMp: progWfMp.requestProgMp,
    requestTargetMp: progWfMp.eventTargetMap,
    scheduleFlow: requestProgressMeta.meta.scheduleFlow,
  });

  requestProgressMeta.nextStep = getReqNextStep({
    requestprogMp: progWfMp.requestProgMp,
    requestTargetMp: progWfMp.eventTargetMap,
    scheduleFlow: requestProgressMeta.meta.scheduleFlow,
    reqParams: {
      is_slack_enabled,
      is_workflow_enabled,
      request_progress,
      request_workflow,
      requestDetails,
    },
    grouped_progress,
  });

  return requestProgressMeta;
};

const getProgWfMaps = ({
  request_progress,
  request_workflow,
}: Pick<
  RequestFormattedDetailsParams,
  'request_progress' | 'request_workflow'
>) => {
  const requestProgMp: RequestProgressMapType = {};
  const eventTargetMap: TriggerActionMapType = {};
  request_progress.forEach((row) => {
    const key = row.event_type;
    if (!requestProgMp[key]) {
      requestProgMp[key] = [];
    }
    requestProgMp[key].push({ ...row });
  });

  request_workflow.forEach((trigger_act) => {
    const trigger = trigger_act.trigger;
    eventTargetMap[trigger] = {
      trigger_details: trigger_act,
      actions: trigger_act.workflow_action ?? [],
    };
  });

  return {
    requestProgMp,
    eventTargetMap,
  };
};

const getInitialReqData = () => {
  const progressMeta: RequesProgressMetaType = {
    meta: {
      scheduleFlow: null,
      isScheduled: false,
      isCandidateAvailabilityReceived: false,
      isManualActionNeeded: true,
    },
    scheduleProgressNodes: [],
    nextStep: null,
  };

  return cloneDeep(progressMeta);
};

type NodesParamsType = {
  reqParams: RequestFormattedDetailsParams;
  scheduleFlow: ReturnType<typeof getSchedulFlow>;
  requestprogMp: RequestProgressMapType;
  requestTargetMp: TriggerActionMapType;
  grouped_progress: GroupReqProgress[];
};

const getScheduleNodes = ({
  reqParams,
  scheduleFlow,
  grouped_progress,
  requestTargetMp,
  requestprogMp,
}: NodesParamsType) => {
  const scheduleProgressNodes: RequesProgressMetaType['scheduleProgressNodes'] =
    [];
  const {
    availbilityGroupPrgs,
    interviewScheduledGroupPrgs,
    selectScheduleGroupPrgs,
  } = getCategorizedProgress({ grouped_progress, reqParams });

  const getSelectScheduleFlow = () => {
    const selectScheduleFlow: RequesProgressMetaType['scheduleProgressNodes'][0] =
      {
        type: 'SELECT_SCHEDULE',
        status: 'not_started',
        grouped_progress: [...selectScheduleGroupPrgs],
        workflows: [],
        banners: [],
      };

    if (scheduleFlow === null && reqParams.is_workflow_enabled) {
      selectScheduleFlow.banners.push('CHOOSE_SCHEDULE_FLOW');
    }

    const status_event = reqParams.request_progress.find(
      (p) =>
        p.is_progress_step === false &&
        (p.event_type === 'SELF_SCHEDULE_LINK' ||
          p.event_type === 'REQ_CAND_AVAIL_EMAIL_LINK'),
    );
    if (status_event) {
      selectScheduleFlow.status = status_event.status;
    }

    if (
      requestprogMp['REQ_CAND_AVAIL_EMAIL_LINK'] &&
      requestprogMp['REQ_CAND_AVAIL_EMAIL_LINK'].length === 0
    ) {
      selectScheduleFlow.status =
        requestprogMp['REQ_CAND_AVAIL_EMAIL_LINK'].find(
          (p) => p.is_progress_step === false,
        )?.status ?? 'not_started';
    }

    if (
      requestTargetMp['onRequestSchedule'] &&
      requestTargetMp['onRequestSchedule'].actions.length > 0 &&
      !(
        requestprogMp['SELF_SCHEDULE_LINK'] ||
        requestprogMp['REQ_CAND_AVAIL_EMAIL_LINK']
      )
    ) {
      selectScheduleFlow.workflows.push({
        ...requestTargetMp['onRequestSchedule'],
      });
    }

    if (selectScheduleFlow.status == 'completed') {
      return selectScheduleFlow;
    }
    // banners and workflow
    if (
      scheduleFlow === 'selfSchedule' &&
      !requestprogMp['SCHEDULE_FIRST_FOLLOWUP_SELF_SCHEDULE']
    ) {
      // banner and workflow
      if (
        requestTargetMp['selfScheduleReminder'] &&
        requestTargetMp['selfScheduleReminder'].actions.length > 0
      ) {
        selectScheduleFlow.workflows.push({
          ...requestTargetMp['selfScheduleReminder'],
        });
      } else {
        selectScheduleFlow.banners.push('SELFSCHEDULE_REMINDER');
      }
    } else if (
      scheduleFlow === 'availability' &&
      !requestprogMp['SCHEDULE_FIRST_FOLLOWUP_AVAILABILITY_LINK']
    ) {
      if (
        requestTargetMp['sendAvailReqReminder'] &&
        requestTargetMp['sendAvailReqReminder'].actions.length > 0
      ) {
        selectScheduleFlow.workflows.push({
          ...requestTargetMp['sendAvailReqReminder'],
        });
      } else {
        selectScheduleFlow.banners.push('AVAILABILITY_REMINDER');
      }
    }

    return selectScheduleFlow;
  };

  const getInterviewScheduledFlow = () => {
    const interviewScheduled: RequesProgressMetaType['scheduleProgressNodes'][0] =
      {
        type: 'INTERVIEW_SCHEDULED',
        status: 'not_started',
        grouped_progress: [...interviewScheduledGroupPrgs],
        workflows: [],
        banners: [],
      };

    const status_event = reqParams.request_progress.find(
      (p) =>
        p.is_progress_step === false &&
        (p.event_type === 'CAND_CONFIRM_SLOT' ||
          p.event_type === 'RECRUITER_SCHEDULED'),
    );
    if (status_event) {
      interviewScheduled.status = status_event.status;
    }

    if (interviewScheduled.status == 'completed') {
      return interviewScheduled;
    }
    // banners and workflow
    if (!requestprogMp['SEND_INTERVIEWER_ATTENDANCE_RSVP']) {
      if (
        requestTargetMp['candidateBook'] &&
        requestTargetMp['candidateBook'].actions.length > 0
      ) {
        interviewScheduled.workflows.push({
          ...requestTargetMp['candidateBook'],
        });
      } else {
        interviewScheduled.banners.push('SLACK_CONFIRMATION');
      }
    }

    return interviewScheduled;
  };

  const getAvailbilityFlow = () => {
    const availScheduleProgressNodes: RequesProgressMetaType['scheduleProgressNodes'] =
      [
        {
          type: 'CAND_AVAIL_REC',
          status: 'not_started',
          grouped_progress: [],
          workflows: [],
          banners: [],
        },
      ];

    let idx = 0;
    for (const groupProg of availbilityGroupPrgs) {
      availScheduleProgressNodes[idx].grouped_progress.push(groupProg);
      if (
        groupProg.heading_progress.event_type ===
        'CANDIDATE_AVAILABILITY_RE_REQUESTED'
      ) {
        availScheduleProgressNodes.push({
          type: 'CAND_AVAIL_REC',
          status: 'not_started',
          grouped_progress: [],
          workflows: [],
          banners: [],
        });
        idx += 1;
      } else if (groupProg.heading_progress.event_type === 'CAND_AVAIL_REC') {
        availScheduleProgressNodes[idx].status = 'completed';
      }
    }

    for (const progNode of availScheduleProgressNodes) {
      if (progNode.status === 'completed') continue;

      if (
        !requestprogMp['SELF_SCHEDULE_LINK'] ||
        !requestprogMp['SLOT_SUGGESTION']
      ) {
        if (
          requestTargetMp['onReceivingAvailReq'] &&
          requestTargetMp['onReceivingAvailReq'].actions.length > 0
        ) {
          progNode.workflows.push({
            ...requestTargetMp['onReceivingAvailReq'],
          });
        } else {
          progNode.banners.push('AVAILABILITY_RECIEVED');
        }
      }
    }

    return availScheduleProgressNodes;
  };

  scheduleProgressNodes.push(getSelectScheduleFlow());
  if (scheduleFlow === 'availability') {
    const availNodes = getAvailbilityFlow();
    availNodes.forEach((node) => {
      scheduleProgressNodes.push(node);
    });
  }
  scheduleProgressNodes.push(getInterviewScheduledFlow());

  return scheduleProgressNodes;
};

// inlint utils
const groupReqProgress = (progress: DatabaseTable['request_progress'][]) => {
  const grouped_progress: GroupReqProgress[] = [];

  if (progress.length === 0) {
    return grouped_progress;
  }
  grouped_progress.push({
    group_id: progress[0].grouped_progress_id,
    heading_progress: progress[0], // should be heading arr
    detail_progress: [],
  });

  for (let i = 1; i < progress.length; i++) {
    const row = progress[i];
    if (
      grouped_progress[grouped_progress.length - 1].group_id ===
        row.grouped_progress_id &&
      row.is_progress_step === true
    ) {
      grouped_progress[grouped_progress.length - 1].detail_progress.push({
        ...row,
      });
    } else if (
      grouped_progress[grouped_progress.length - 1].group_id !==
        row.grouped_progress_id &&
      row.is_progress_step === false
    ) {
      grouped_progress.push({
        group_id: row.grouped_progress_id,
        heading_progress: { ...row },
        detail_progress: [],
      });
    } else {
      console.error('Error in grouping progress');
    }
  }

  return grouped_progress;
};

const getReqNextStep = ({
  requestTargetMp,
  scheduleFlow,
  reqParams,
  grouped_progress,
  requestprogMp,
}: Pick<
  NodesParamsType,
  | 'requestprogMp'
  | 'scheduleFlow'
  | 'requestTargetMp'
  | 'reqParams'
  | 'grouped_progress'
>) => {
  let nextStep: RequesProgressMetaType['nextStep'] = null;
  if (scheduleFlow === null) {
    nextStep = 'CHOOSE_SCHEDULE_MODE';
  }
  const lastProgressEvent =
    grouped_progress.length === 0
      ? null
      : grouped_progress[grouped_progress.length - 1].heading_progress;

  if (lastProgressEvent) {
    if (lastProgressEvent.event_type === 'CAND_AVAIL_REC') {
      if (!requestTargetMp['onReceivingAvailReq']) {
        nextStep = 'CAND_AVAIL_RECIEVED';
      }
    } else if (
      lastProgressEvent.event_type === 'SELF_SCHEDULE_LINK' &&
      lastProgressEvent.status === 'failed'
    ) {
      if (requestprogMp['CAND_AVAIL_REC']) {
        nextStep = 'CAND_AVAIL_RECIEVED';
      } else {
        nextStep = 'CHOOSE_SCHEDULE_MODE';
      }
    } else if (
      lastProgressEvent.event_type === 'REQ_CAND_AVAIL_EMAIL_LINK' &&
      lastProgressEvent.status === 'failed'
    ) {
      nextStep = 'CHOOSE_SCHEDULE_MODE';
    }
  } else if (
    reqParams.requestDetails.status === 'to_do' &&
    requestTargetMp['onRequestSchedule'] &&
    requestTargetMp['onRequestSchedule'].actions.length > 0
  ) {
    nextStep = 'REQUEST_PROCEED';
  }

  if (
    reqParams.requestDetails.type === 'decline_request' &&
    reqParams.requestDetails.status === 'to_do'
  ) {
    nextStep = 'SCHEDULE_DEBRIEF';
  }

  return nextStep;
};

const getProgressMeta = ({
  reqProgressMp,
  triggerActionMp,
}: {
  reqProgressMp: RequestProgressMapType;
  triggerActionMp: TriggerActionMapType;
}) => {
  const meta: RequesProgressMetaType['meta'] = {
    scheduleFlow: null,
    isScheduled: false,
    isCandidateAvailabilityReceived: false,
    isManualActionNeeded: false,
  };

  if (
    (reqProgressMp['CAND_CONFIRM_SLOT'] &&
      reqProgressMp['CAND_CONFIRM_SLOT'][0].status == 'completed') ||
    (reqProgressMp['RECRUITER_SCHEDULED'] &&
      reqProgressMp['RECRUITER_SCHEDULED'][0].status == 'completed')
  ) {
    meta.isScheduled = true;
  }
  if (
    reqProgressMp['CAND_AVAIL_REC'] &&
    reqProgressMp['CAND_AVAIL_REC'][0].status == 'completed'
  ) {
    meta.isCandidateAvailabilityReceived = true;
  }
  meta.scheduleFlow = getSchedulFlow({
    eventTargetMap: triggerActionMp,
    requestProgMp: reqProgressMp,
  });
  return meta;
};

const getCategorizedProgress = ({
  grouped_progress,
  reqParams,
}: Pick<NodesParamsType, 'grouped_progress' | 'reqParams'>) => {
  const headingProgEvents = reqParams.request_progress.filter(
    (p) => p.is_progress_step === false,
  );

  let currentProgressNode: ProgressNodeType = 'SELECT_SCHEDULE';
  const selectScheduleGroupPrgs: GroupReqProgress[] = [];
  const availbilityGroupPrgs: GroupReqProgress[] = [];
  const interviewScheduledGroupPrgs: GroupReqProgress[] = [];

  for (const headingProg of headingProgEvents) {
    if (headingProg.event_type === 'CAND_AVAIL_REC') {
      currentProgressNode = 'CAND_AVAIL_REC';
    } else if (
      headingProg.event_type === 'CAND_CONFIRM_SLOT' ||
      headingProg.event_type === 'RECRUITER_SCHEDULED'
    ) {
      currentProgressNode = 'INTERVIEW_SCHEDULED';
    }
    const grouProgress = grouped_progress.find(
      (g) => g.group_id === headingProg.grouped_progress_id,
    );
    if (!grouProgress) {
      console.error('Error in grouping progress');
      continue;
    }
    if (currentProgressNode === 'SELECT_SCHEDULE') {
      selectScheduleGroupPrgs.push(grouProgress);
    } else if (currentProgressNode === 'CAND_AVAIL_REC') {
      availbilityGroupPrgs.push(grouProgress);
    } else if (currentProgressNode === 'INTERVIEW_SCHEDULED') {
      interviewScheduledGroupPrgs.push(grouProgress);
    }
    //
  }

  return {
    selectScheduleGroupPrgs,
    availbilityGroupPrgs,
    interviewScheduledGroupPrgs,
  };
};