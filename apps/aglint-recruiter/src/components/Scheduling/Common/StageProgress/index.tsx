import { ScheduleProgress as ScheduleProgressDev } from '@devlink/ScheduleProgress';
import { Stack } from '@mui/system';
import { forwardRef, type Ref } from 'react';

import { type Application } from '@/types/applications.types';

import StageProgressPill, { getPlanPillProps } from './stageProgressPill';

export type StageProgressProps = Pick<Application, 'interview_plans'>;

const StageProgress = forwardRef(
  (props: StageProgressProps, ref: Ref<HTMLDivElement>) => {
    const count = props.interview_plans.length;
    const pills = getPlanPillProps(props.interview_plans).map(
      (pillProps, index) => (
        <StageProgressPill
          key={index}
          position={
            count === 1
              ? 'lone'
              : index === 0
                ? 'starting'
                : index === count - 1
                  ? 'ending'
                  : 'middle'
          }
          pillProps={pillProps}
        />
      ),
    );
    return (
      <Stack ref={ref}>
        <ScheduleProgressDev
          slotScheduleProgressPill={pills.length ? pills : '---'}
        />
      </Stack>
    );
  },
);
StageProgress.displayName = 'StageProgress';
export default StageProgress;
