import { PlanCombinationRespType } from '@aglint/shared-types';
import { Collapse } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import { DateOption } from '@/devlink3/DateOption';
import { ScheduleOption } from '@/devlink3/ScheduleOption';

import {
  setSelectedCombIds,
  useSchedulingApplicationStore,
} from '../../../store';
import SingleDayCard from '../SingleDayCard';

function DayCardWrapper({
  isDebrief,
  item,
}: {
  isDebrief: boolean;
  item: {
    dateArray: string[];
    plans: PlanCombinationRespType[];
  };
}) {
  const selectedCombIds = useSchedulingApplicationStore(
    (state) => state.selectedCombIds,
  );
  const dates = item?.dateArray || [];
  const header = dates
    .map((date) => dayjs(date).format('MMMM DD dddd'))
    .join(' , ');
  const slots = item?.plans || [];
  const isMultiDay = dates.length > 1 ? true : false;

  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <DateOption
        onClickDateOption={{
          onClick: () => {
            setCollapse(!collapse);
          },
        }}
        key={header}
        textdate={header}
        textOptionCount={`${slots.length} options`}
        rotateArrow={{
          style: {
            transform: collapse ? 'rotate(180deg)' : '',
          },
        }}
        slotScheduleOption={
          <Collapse in={collapse}>
            {slots?.map((slot) => {
              const daySessions = dates.map((date) => {
                return {
                  date: date,
                  sessions: slot.sessions.filter(
                    (session) =>
                      dayjs(session.start_time).format('MMMM DD') ===
                      dayjs(date).format('MMMM DD'),
                  ),
                };
              });
              return (
                <ScheduleOption
                  key={slot.plan_comb_id}
                  isSelected={selectedCombIds.includes(slot.plan_comb_id)}
                  isCheckbox={false}
                  onClickSelect={{
                    onClick: () => {
                      if (isDebrief) setSelectedCombIds([slot.plan_comb_id]);
                    },
                  }}
                  isRadio={isDebrief}
                  slotSingleDaySchedule={daySessions?.map((item, ind) => {
                    return (
                      <SingleDayCard
                        key={ind}
                        item={item}
                        ind={ind}
                        isMultiDay={isMultiDay}
                      />
                    );
                  })}
                />
              );
            })}
          </Collapse>
        }
      />
    </>
  );
}

export default DayCardWrapper;
