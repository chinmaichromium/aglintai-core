import { TextWithIcon } from '@/devlink2';
import LottieAnimations from '@/src/components/Common/Lotties/LottieIcons';
import React from 'react';
import CheckCircleFilled from '../CheckCircleFilled';
import { EventTargetMapType, RequestProgressMapType } from '../types';
import { getProgressColor } from '../utils/getProgressColor';
import { useRequest } from '@/src/context/RequestContext';
import ScheduleFlows from '../Actions/Schedule';
import { DatabaseEnums } from '@aglint/shared-types';
import { ShowCode } from '@/src/components/Common/ShowCode';
import { Stack } from '@mui/material';
import { progressStatusToTense } from '../utils/progressStatusToTense';
import { workflowCopy } from '../utils/copy';

const SelectScheduleFlow = ({
  eventTargetMap,
  reqProgressMap,
}: {
  eventTargetMap: EventTargetMapType;
  reqProgressMap: RequestProgressMapType;
}) => {
  const { request_progress } = useRequest();
  const eventWActions = eventTargetMap['onRequestSchedule'] ?? [];
  const isManualSchedule = eventWActions.length === 0;

  let progrEndIdx = request_progress.data.findIndex(
    (prog) =>
      prog.event_type === 'SELF_SCHEDULE_LINK' ||
      prog.event_type === 'REQ_CAND_AVAIL_EMAIL_LINK',
  );
  let scheduleFlowProg = request_progress.data.slice(0, progrEndIdx + 1);
  let scheduleFlow: DatabaseEnums['email_slack_types'];
  if (
    eventTargetMap['onRequestSchedule'] &&
    eventTargetMap['onRequestSchedule'].length > 0
  ) {
    scheduleFlow = eventTargetMap['onRequestSchedule'][0];
  }
  return (
    <Stack rowGap={1}>
      <TextWithIcon
        textContent={<>EVENT : Candidate Schedule</>}
        iconSize={3}
        fontSize={1}
        // color={getProgressColor(tense)}
      />
      <Stack ml={4}>
        {isManualSchedule && scheduleFlowProg.length === 0 && <ScheduleFlows />}
        <ShowCode when={isManualSchedule}>
          {scheduleFlowProg.map((prog) => {
            let tense = progressStatusToTense(prog.status);
            return (
              <>
                <TextWithIcon
                  textContent={workflowCopy[prog.event_type][tense]}
                  iconSize={3}
                  fontSize={1}
                  // color={getProgressColor(tense)}
                  iconName={
                    tense === 'past' ? (
                      <CheckCircleFilled />
                    ) : tense === 'future' ? (
                      'circle'
                    ) : (
                      <LottieAnimations
                        animation='loading_spinner'
                        size={1.2}
                      />
                    )
                  }
                />
              </>
            );
          })}
        </ShowCode>
      </Stack>
    </Stack>
  );
};

export default SelectScheduleFlow;
