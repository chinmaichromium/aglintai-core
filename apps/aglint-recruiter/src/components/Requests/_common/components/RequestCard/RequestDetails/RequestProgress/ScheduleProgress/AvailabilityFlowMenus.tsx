import { type DatabaseTable } from '@aglint/shared-types';
import { ButtonSoft } from '@devlink/ButtonSoft';
import { Stack } from '@mui/material';
import React, { useMemo } from 'react';

import { ShowCode } from '@/components/Common/ShowCode';
import { useRequest } from '@/context/RequestContext';

import { useRequestProgressProvider } from '../progressCtx';
import { type RequestProgressMapType } from '../types';
import { apiTargetToEvents } from '../utils/progressMaps';
import EventNode from './EventNode';

const AvailabilityFlowMenus = ({
  isManualSchedule,
  isSelectScheduleFlowComplete,
}: {
  isManualSchedule: boolean;
  isSelectScheduleFlowComplete: boolean;
}) => {
  const { reqTriggerActionsMap, setEditTrigger, setShowEditDialog } =
    useRequestProgressProvider();
  const { request_progress } = useRequest();

  const { progres: availFlowProg, currEventMap } = useMemo(() => {
    const currEventMap: RequestProgressMapType = {};
    const progres: DatabaseTable['request_progress'][] = [];

    if (request_progress.data.length === 0) {
      return {
        progres,
        currEventMap,
      };
    }

    for (const prog of request_progress.data) {
      if (prog.event_type === 'CAND_AVAIL_REC') {
        break;
      }
      if (!currEventMap[prog.event_type]) {
        currEventMap[prog.event_type] = [];
      }
      currEventMap[prog.event_type].push(prog);
      progres.push({
        ...prog,
      });
    }
    return { progres, currEventMap };
  }, [request_progress.data]);

  let eventWActions: DatabaseTable['workflow_action'][] = [];
  if (reqTriggerActionsMap['onRequestSchedule']) {
    eventWActions = [...reqTriggerActionsMap['onRequestSchedule']];
  }

  return (
    <>
      <ShowCode.When isTrue={isManualSchedule}>
        <>
          {availFlowProg
            .filter((s) => s.is_progress_step === false)
            .map((prog) => {
              return (
                <>
                  <EventNode
                    key={prog.id}
                    eventType={prog.event_type}
                    currEventTrigger={'onRequestSchedule'}
                    reqProgresMap={currEventMap}
                  />
                </>
              );
            })}
        </>
      </ShowCode.When>
      <ShowCode.When isTrue={!isManualSchedule}>
        {eventWActions.map((action) => {
          const eventAction = apiTargetToEvents[action.target_api];
          return (
            <EventNode
              eventType={eventAction}
              reqProgresMap={currEventMap}
              currEventTrigger={'onRequestSchedule'}
              currWAction={action}
              key={action.id}
            />
          );
        })}
      </ShowCode.When>
      <ShowCode.When
        isTrue={
          (!isSelectScheduleFlowComplete &&
            Boolean(!reqTriggerActionsMap['sendAvailReqReminder'])) ||
          Boolean(
            reqTriggerActionsMap['sendAvailReqReminder'] &&
              reqTriggerActionsMap['sendAvailReqReminder'].length === 0,
          )
        }
      >
        <Stack direction={'row'}>
          <ButtonSoft
            size={1}
            textButton={'Schedule Reminder'}
            onClickButton={{
              onClick: () => {
                setEditTrigger('sendAvailReqReminder');
                setShowEditDialog(true);
              },
            }}
          />
        </Stack>
      </ShowCode.When>
      <ShowCode.When
        isTrue={Boolean(
          reqTriggerActionsMap['sendAvailReqReminder'] &&
            reqTriggerActionsMap['sendAvailReqReminder'].length > 0,
        )}
      >
        {reqTriggerActionsMap['sendAvailReqReminder'] &&
          reqTriggerActionsMap['sendAvailReqReminder'].length > 0 && (
            <EventNode
              eventType={
                apiTargetToEvents['sendAvailReqReminder_email_applicant']
              }
              reqProgresMap={currEventMap}
              currEventTrigger={'sendAvailReqReminder'}
              currWAction={reqTriggerActionsMap.sendAvailReqReminder[0]}
            />
          )}
      </ShowCode.When>
    </>
  );
};

export default AvailabilityFlowMenus;
