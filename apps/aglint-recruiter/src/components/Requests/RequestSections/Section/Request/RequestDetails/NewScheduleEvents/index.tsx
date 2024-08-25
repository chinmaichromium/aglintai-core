import React, { useMemo } from 'react';

import { useRequest } from '@/src/context/RequestContext';

import {
  EventTargetMapType,
  RequestProgressMapType,
  TriggerActionsType,
} from '../RequestProgress/types';
import InterviewSchedule from './InterviewSchedule';

const NewScheduleEvents = ({
  eventActions,
}: {
  eventActions: TriggerActionsType;
}) => {
  const { request_progress } = useRequest();
  const eventTargetMap = useMemo(() => {
    let mp: EventTargetMapType = {};

    eventActions.forEach((eA) => {
      mp[eA.trigger] = eA.workflow_action.map((wA) => {
        return wA.target_api;
      });
    });
    return mp;
  }, [eventActions]);
  const reqProgressMap: RequestProgressMapType = useMemo(() => {
    let mp: RequestProgressMapType = {};

    request_progress.data.forEach((row) => {
      if (!mp[row.event_type]) {
        mp[row.event_type] = [];
      }
      mp[row.event_type].push({ ...row });
    });
    return mp;
  }, [request_progress]);
  //   let scheduleFlow: DatabaseEnums['email_slack_types'];
  //   if (eventTargetMap['onRequestSchedule']) {
  //     scheduleFlow = eventTargetMap['onRequestSchedule'][0];
  //   } else {
  //     //
  //   }
  return (
    <>
      <p>schedule flow</p>
      <p>middlw steps</p>
      <InterviewSchedule
        eventTargetMap={eventTargetMap}
        reqProgressMap={reqProgressMap}
      />
    </>
  );
};

export default NewScheduleEvents;
