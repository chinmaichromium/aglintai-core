import { type DB } from '@aglint/shared-types';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { type Ref, forwardRef, memo } from 'react';

import { GlobalIcon } from '@/devlink/GlobalIcon';
import { ScheduleProgressPill as ScheduleProgressPillDev } from '@/devlink/ScheduleProgressPill';
import { StatusBadge } from '@/devlink2/StatusBadge';
import { getBreakLabel } from '@/src/components/JobNewInterviewPlan/utils';

import IconScheduleType from '../../Candidates/ListCard/Icon';
import { getScheduleType } from '../../Candidates/utils';

type Enums = DB['public']['Enums'];

export type ScheduleProgressPillProps = {
  name: string;
  duration: number;
  status: Enums['interview_schedule_status'];
  sessionType: Enums['session_type'];
  scheduleType: Enums['interview_schedule_type'];
  position?: 'starting' | 'ending' | 'middle' | 'lone';
  date?: {
    startTime: string;
    endTime: string;
  };
};

const ScheduleProgressPill = memo(
  forwardRef(
    (
      { date = null, position = 'middle', ...props }: ScheduleProgressPillProps,
      ref: Ref<HTMLDivElement>,
    ) => {
      const isStarting = position !== 'ending' && position !== 'lone';
      const isEnding = position !== 'starting' && position !== 'lone';
      const isScheduleDate =
        (props.status === 'completed' || props.status === 'confirmed') &&
        !!date;
      const scheduleDate = getScheduleDate(date);
      const backgroundColor = statusToColor(props.status);
      const scheduleType = getScheduleType(props.scheduleType);
      const duration = getBreakLabel(props.duration);
      return (
        <Stack ref={ref}>
          <ScheduleProgressPillDev
            isEnding={isEnding}
            isStarting={isStarting}
            isScheduleDate={isScheduleDate}
            textScheduleDate={scheduleDate}
            slotInterviewTypeIcon={
              <SessionIcon sessionType={props.sessionType} />
            }
            slotMeetingTypeIcon={<IconScheduleType type={props.scheduleType} />}
            styleBgColor={{ style: { backgroundColor } }}
            textMeetingType={scheduleType}
            textScheduleName={props.name}
            textDuration={duration}
            slotScheduleStatus={<ScheduleStatus status={props.status} />}
            slotProgressIcon={<ProgressIcon status={props.status} />}
          />
        </Stack>
      );
    },
  ),
);
ScheduleProgressPill.displayName = 'ScheduleProgressPill';
export default ScheduleProgressPill;

const ScheduleStatus = memo(
  ({ status }: Pick<ScheduleProgressPillProps, 'status'>) => {
    return (
      <StatusBadge
        isCancelledVisible={status === 'cancelled'}
        isConfirmedVisible={status === 'confirmed'}
        isWaitingVisible={status === 'waiting'}
        isCompletedVisible={status === 'completed'}
        isNotScheduledVisible={status === 'not_scheduled'}
      />
    );
  },
);
ScheduleStatus.displayName = 'ScheduleStatus';

export const ProgressIcon = ({
  status,
}: Pick<ScheduleProgressPillProps, 'status'>) => {
  switch (status) {
    case 'waiting':
      return <WaitingIcon />;
    case 'confirmed':
      return <ConfirmedIcon />;
    case 'completed':
      return <CompletedIcon />;
    case 'cancelled':
      return <CancelledIcon />;
    default:
      return <NotScheduledIcon />;
  }
};
ProgressIcon.displayName = 'ProgressIcon';

export const SessionIcon = ({
  sessionType,
}: Pick<ScheduleProgressPillProps, 'sessionType'>) => {
  switch (sessionType) {
    case 'debrief':
      return <DebriefSessionIcon />;
    case 'individual':
      return <IndividualSessionIcon />;
    case 'panel':
      return <PanelSessionIcon />;
  }
};
SessionIcon.displayName = 'SessionIcon';

const CompletedIcon = () => {
  return (
    // <> </>
    <GlobalIcon iconName='done_all' />
    // <svg
    //   width='16'
    //   height='15'
    //   viewBox='0 0 16 15'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M7.64062 2.25C6.6875 2.26563 5.8125 2.5 5.01562 2.95312C4.21875 3.42188 3.57812 4.0625 3.09375 4.875C2.625 5.70312 2.39062 6.57812 2.39062 7.5C2.39062 8.42188 2.625 9.29688 3.09375 10.125C3.57812 10.9375 4.21875 11.5781 5.01562 12.0469C5.8125 12.5 6.6875 12.7344 7.64062 12.75C8.59375 12.7344 9.46875 12.5 10.2656 12.0469C11.0625 11.5781 11.7031 10.9375 12.1875 10.125C12.6562 9.29688 12.8906 8.42188 12.8906 7.5C12.8906 6.57812 12.6562 5.70312 12.1875 4.875C11.7031 4.0625 11.0625 3.42188 10.2656 2.95312C9.46875 2.5 8.59375 2.26563 7.64062 2.25ZM7.64062 13.5C6.54688 13.4844 5.54688 13.2188 4.64062 12.7031C3.73438 12.1719 3 11.4375 2.4375 10.5C1.90625 9.54688 1.64062 8.54688 1.64062 7.5C1.64062 6.45312 1.90625 5.45312 2.4375 4.5C3 3.5625 3.73438 2.82813 4.64062 2.29688C5.54688 1.78125 6.54688 1.51563 7.64062 1.5C8.73438 1.51563 9.73438 1.78125 10.6406 2.29688C11.5469 2.82813 12.2812 3.5625 12.8438 4.5C13.375 5.45312 13.6406 6.45312 13.6406 7.5C13.6406 8.54688 13.375 9.54688 12.8438 10.5C12.2812 11.4375 11.5469 12.1719 10.6406 12.7031C9.73438 13.2188 8.73438 13.4844 7.64062 13.5ZM10.1484 6.25781L7.14844 9.25781C6.97656 9.41406 6.80469 9.41406 6.63281 9.25781L5.13281 7.75781C4.97656 7.58594 4.97656 7.41406 5.13281 7.24219C5.30469 7.08594 5.47656 7.08594 5.64844 7.24219L6.89062 8.46094L9.63281 5.74219C9.80469 5.58594 9.97656 5.58594 10.1484 5.74219C10.3047 5.91406 10.3047 6.08594 10.1484 6.25781Z'
    //     fill='white'
    //   />
    // </svg>
  );
};

const WaitingIcon = () => {
  return (
    // <> </>
    <GlobalIcon iconName='timer' />
    // <svg
    //   width='19'
    //   height='19'
    //   viewBox='0 0 19 19'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M5.51562 3.5C5.75 3.51563 5.875 3.64062 5.89062 3.875V5H10.3906V3.875C10.4062 3.64062 10.5312 3.51563 10.7656 3.5C11 3.51563 11.125 3.64062 11.1406 3.875V5H11.8906C12.3125 5.01562 12.6641 5.16406 12.9453 5.44531C13.2266 5.72656 13.375 6.07812 13.3906 6.5V7.25V8V8.02344C13.2656 8.00781 13.1406 8 13.0156 8C12.8906 8 12.7656 8.00781 12.6406 8.02344V8H3.64062V14C3.64062 14.2188 3.71094 14.3984 3.85156 14.5391C3.99219 14.6797 4.17188 14.75 4.39062 14.75H9.82812C10.0625 15.0312 10.3359 15.2812 10.6484 15.5H4.39062C3.96875 15.4844 3.61719 15.3359 3.33594 15.0547C3.05469 14.7734 2.90625 14.4219 2.89062 14V8V7.25V6.5C2.90625 6.07812 3.05469 5.72656 3.33594 5.44531C3.61719 5.16406 3.96875 5.01562 4.39062 5H5.14062V3.875C5.15625 3.64062 5.28125 3.51563 5.51562 3.5ZM11.8906 5.75H4.39062C4.17188 5.75 3.99219 5.82031 3.85156 5.96094C3.71094 6.10156 3.64062 6.28125 3.64062 6.5V7.25H12.6406V6.5C12.6406 6.28125 12.5703 6.10156 12.4297 5.96094C12.2891 5.82031 12.1094 5.75 11.8906 5.75ZM13.0156 14.75C13.4844 14.75 13.9219 14.6328 14.3281 14.3984C14.7344 14.1641 15.0547 13.8438 15.2891 13.4375C15.5234 13.0312 15.6406 12.5938 15.6406 12.125C15.6406 11.6562 15.5234 11.2188 15.2891 10.8125C15.0547 10.4062 14.7344 10.0859 14.3281 9.85156C13.9219 9.61719 13.4844 9.5 13.0156 9.5C12.5469 9.5 12.1094 9.61719 11.7031 9.85156C11.2969 10.0859 10.9766 10.4062 10.7422 10.8125C10.5078 11.2188 10.3906 11.6562 10.3906 12.125C10.3906 12.5938 10.5078 13.0312 10.7422 13.4375C10.9766 13.8438 11.2969 14.1641 11.7031 14.3984C12.1094 14.6328 12.5469 14.75 13.0156 14.75ZM13.0156 8.75C13.625 8.75 14.1875 8.89844 14.7031 9.19531C15.2188 9.49219 15.6328 9.90625 15.9453 10.4375C16.2422 10.9688 16.3906 11.5312 16.3906 12.125C16.3906 12.7188 16.2422 13.2812 15.9453 13.8125C15.6328 14.3438 15.2188 14.7578 14.7031 15.0547C14.1875 15.3516 13.625 15.5 13.0156 15.5C12.4062 15.5 11.8438 15.3516 11.3281 15.0547C10.8125 14.7578 10.3984 14.3438 10.0859 13.8125C9.78906 13.2812 9.64062 12.7188 9.64062 12.125C9.64062 11.5312 9.78906 10.9688 10.0859 10.4375C10.3984 9.90625 10.8125 9.49219 11.3281 9.19531C11.8438 8.89844 12.4062 8.75 13.0156 8.75ZM13.0156 10.25C13.25 10.2656 13.375 10.3906 13.3906 10.625V11.75H14.1406C14.375 11.7656 14.5 11.8906 14.5156 12.125C14.5 12.3594 14.375 12.4844 14.1406 12.5H13.0156C12.7812 12.4844 12.6562 12.3594 12.6406 12.125V10.625C12.6562 10.3906 12.7812 10.2656 13.0156 10.25Z'
    //     fill='white'
    //   />
    // </svg>
  );
};

const ConfirmedIcon = () => {
  return (
    <GlobalIcon iconName='done' />
    // <svg
    //   width='16'
    //   height='15'
    //   viewBox='0 0 16 15'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M5.39062 1.875V3H9.89062V1.875C9.90625 1.64062 10.0312 1.51563 10.2656 1.5C10.5 1.51563 10.625 1.64062 10.6406 1.875V3H11.3906C11.8125 3.01563 12.1641 3.16406 12.4453 3.44531C12.7266 3.72656 12.875 4.07812 12.8906 4.5V5.25V6V12C12.875 12.4219 12.7266 12.7734 12.4453 13.0547C12.1641 13.3359 11.8125 13.4844 11.3906 13.5H3.89062C3.46875 13.4844 3.11719 13.3359 2.83594 13.0547C2.55469 12.7734 2.40625 12.4219 2.39062 12V6V5.25V4.5C2.40625 4.07812 2.55469 3.72656 2.83594 3.44531C3.11719 3.16406 3.46875 3.01563 3.89062 3H4.64062V1.875C4.65625 1.64062 4.78125 1.51563 5.01562 1.5C5.25 1.51563 5.375 1.64062 5.39062 1.875ZM3.14062 6V12C3.14062 12.2188 3.21094 12.3984 3.35156 12.5391C3.49219 12.6797 3.67188 12.75 3.89062 12.75H11.3906C11.6094 12.75 11.7891 12.6797 11.9297 12.5391C12.0703 12.3984 12.1406 12.2188 12.1406 12V6H3.14062ZM3.89062 3.75C3.67188 3.75 3.49219 3.82031 3.35156 3.96094C3.21094 4.10156 3.14062 4.28125 3.14062 4.5V5.25H12.1406V4.5C12.1406 4.28125 12.0703 4.10156 11.9297 3.96094C11.7891 3.82031 11.6094 3.75 11.3906 3.75H3.89062ZM10.1484 8.13281L7.52344 10.7578C7.35156 10.9141 7.17969 10.9141 7.00781 10.7578L5.50781 9.25781C5.35156 9.08594 5.35156 8.91406 5.50781 8.74219C5.67969 8.58594 5.85156 8.58594 6.02344 8.74219L7.26562 9.96094L9.63281 7.61719C9.80469 7.46094 9.97656 7.46094 10.1484 7.61719C10.3047 7.78906 10.3047 7.96094 10.1484 8.13281Z'
    //     fill='white'
    //   />
    // </svg>
  );
};

const CancelledIcon = () => {
  return (
    <GlobalIcon iconName='block' />
    // <svg
    //   width='16'
    //   height='15'
    //   viewBox='0 0 16 15'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M11.0859 11.4609L3.67969 4.05469C2.85156 5.00781 2.42188 6.15625 2.39062 7.5C2.40625 8.48438 2.64844 9.36719 3.11719 10.1484C3.57031 10.9453 4.19531 11.5703 4.99219 12.0234C5.77344 12.4922 6.65625 12.7344 7.64062 12.75C8.98438 12.7188 10.1328 12.2891 11.0859 11.4609ZM11.6016 10.9453C12.4297 9.99219 12.8594 8.84375 12.8906 7.5C12.875 6.51562 12.6328 5.63281 12.1641 4.85156C11.7109 4.05469 11.0859 3.42969 10.2891 2.97656C9.50781 2.50781 8.625 2.26563 7.64062 2.25C6.29688 2.28125 5.14844 2.71094 4.19531 3.53906L11.6016 10.9453ZM1.64062 7.5C1.65625 6.40625 1.92188 5.40625 2.4375 4.5C2.96875 3.59375 3.70312 2.85938 4.64062 2.29688C5.59375 1.76562 6.59375 1.5 7.64062 1.5C8.6875 1.5 9.6875 1.76562 10.6406 2.29688C11.5781 2.85938 12.3125 3.59375 12.8438 4.5C13.3594 5.40625 13.625 6.40625 13.6406 7.5C13.625 8.59375 13.3594 9.59375 12.8438 10.5C12.3125 11.4062 11.5781 12.1406 10.6406 12.7031C9.6875 13.2344 8.6875 13.5 7.64062 13.5C6.59375 13.5 5.59375 13.2344 4.64062 12.7031C3.70312 12.1406 2.96875 11.4062 2.4375 10.5C1.92188 9.59375 1.65625 8.59375 1.64062 7.5Z'
    //     fill='white'
    //   />
    // </svg>
  );
};

const NotScheduledIcon = () => {
  return (
    // <> </>
    <GlobalIcon iconName='calendar_today' />
    // <svg
    //   width='16'
    //   height='15'
    //   viewBox='0 0 16 15'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M2.08594 6.9375C1.83594 6.90625 1.71094 6.76562 1.71094 6.51562C1.88281 5.57812 2.23438 4.74219 2.76562 4.00781C2.9375 3.82031 3.11719 3.80469 3.30469 3.96094C3.44531 4.11719 3.46094 4.28906 3.35156 4.47656C2.89844 5.10156 2.60156 5.8125 2.46094 6.60938C2.41406 6.8125 2.28906 6.92188 2.08594 6.9375ZM4.61719 3.21094C4.42969 3.32031 4.25781 3.30469 4.10156 3.16406C3.94531 2.97656 3.96094 2.79687 4.14844 2.625C4.88281 2.09375 5.72656 1.74219 6.67969 1.57031C6.91406 1.57031 7.04688 1.69531 7.07812 1.94531C7.0625 2.14844 6.95312 2.27344 6.75 2.32031C5.95312 2.46094 5.24219 2.75781 4.61719 3.21094ZM8.20312 13.0547C8.21875 12.8516 8.32812 12.7266 8.53125 12.6797C9.32812 12.5391 10.0391 12.2422 10.6641 11.7891C10.8359 11.6797 11.0078 11.6953 11.1797 11.8359C11.3359 12.0234 11.3203 12.2031 11.1328 12.375C10.3984 12.9062 9.5625 13.2578 8.625 13.4297C8.375 13.4297 8.23438 13.3047 8.20312 13.0547ZM11.9297 10.5234C12.3828 9.89844 12.6797 9.1875 12.8203 8.39062C12.8672 8.1875 12.9922 8.07812 13.1953 8.0625C13.4453 8.09375 13.5703 8.23438 13.5703 8.48438C13.3984 9.42188 13.0469 10.2578 12.5156 10.9922C12.3438 11.1797 12.1641 11.1953 11.9766 11.0391C11.8359 10.8828 11.8203 10.7109 11.9297 10.5234ZM4.10156 11.8359C4.25781 11.6953 4.42969 11.6797 4.61719 11.7891C5.24219 12.2422 5.95312 12.5391 6.75 12.6797C6.95312 12.7266 7.0625 12.8516 7.07812 13.0547C7.04688 13.3047 6.90625 13.4297 6.65625 13.4297C5.71875 13.2578 4.88281 12.9062 4.14844 12.375C3.96094 12.2031 3.94531 12.0234 4.10156 11.8359ZM2.76562 10.9922C2.23438 10.2578 1.88281 9.42188 1.71094 8.48438C1.71094 8.23438 1.83594 8.09375 2.08594 8.0625C2.28906 8.07812 2.41406 8.1875 2.46094 8.39062C2.60156 9.1875 2.89844 9.89844 3.35156 10.5234C3.46094 10.7109 3.44531 10.8828 3.30469 11.0391C3.11719 11.1953 2.9375 11.1797 2.76562 10.9922ZM11.1797 3.16406C11.0234 3.30469 10.8516 3.32031 10.6641 3.21094C10.0391 2.75781 9.32812 2.46094 8.53125 2.32031C8.32812 2.27344 8.21875 2.14844 8.20312 1.94531C8.23438 1.69531 8.375 1.57031 8.625 1.57031C9.5625 1.74219 10.3984 2.09375 11.1328 2.625C11.3203 2.79687 11.3359 2.97656 11.1797 3.16406ZM11.9297 4.47656C11.8203 4.28906 11.8359 4.11719 11.9766 3.96094C12.1641 3.80469 12.3438 3.82031 12.5156 4.00781C13.0469 4.74219 13.3984 5.57812 13.5703 6.51562C13.5703 6.76562 13.4453 6.90625 13.1953 6.9375C12.9922 6.92188 12.8672 6.8125 12.8203 6.60938C12.6797 5.8125 12.3828 5.10156 11.9297 4.47656Z'
    //     fill='white'
    //   />
    // </svg>
  );
};

const IndividualSessionIcon = () => {
  return (
    <GlobalIcon iconName='person' />
    // <svg
    //   width='24'
    //   height='24'
    //   viewBox='0 0 24 24'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M4.5 4H19.5C20.2083 4.02083 20.8021 4.26042 21.2812 4.71875C21.7396 5.19792 21.9792 5.79167 22 6.5V17.5C21.9792 18.2083 21.7396 18.8021 21.2812 19.2812C20.8021 19.7396 20.2083 19.9792 19.5 20H4.5C3.79167 19.9792 3.19792 19.7396 2.71875 19.2812C2.26042 18.8021 2.02083 18.2083 2 17.5V6.5C2.02083 5.79167 2.26042 5.19792 2.71875 4.71875C3.19792 4.26042 3.79167 4.02083 4.5 4ZM3 6.5V17.5C3.02083 17.9167 3.16667 18.2708 3.4375 18.5625C3.72917 18.8333 4.08333 18.9792 4.5 19H19.5C19.9167 18.9792 20.2708 18.8333 20.5625 18.5625C20.8333 18.2708 20.9792 17.9167 21 17.5V6.5C20.9792 6.08333 20.8333 5.72917 20.5625 5.4375C20.2708 5.16667 19.9167 5.02083 19.5 5H4.5C4.08333 5.02083 3.72917 5.16667 3.4375 5.4375C3.16667 5.72917 3.02083 6.08333 3 6.5ZM11 10C11 10.2917 11.0938 10.5312 11.2812 10.7188C11.4688 10.9062 11.7083 11 12 11C12.2917 11 12.5312 10.9062 12.7188 10.7188C12.9062 10.5312 13 10.2917 13 10C13 9.70833 12.9062 9.46875 12.7188 9.28125C12.5312 9.09375 12.2917 9 12 9C11.7083 9 11.4688 9.09375 11.2812 9.28125C11.0938 9.46875 11 9.70833 11 10ZM14 10C13.9792 10.75 13.6458 11.3229 13 11.7188C12.3333 12.0938 11.6667 12.0938 11 11.7188C10.3542 11.3229 10.0208 10.75 10 10C10.0208 9.25 10.3542 8.67708 11 8.28125C11.6667 7.90625 12.3333 7.90625 13 8.28125C13.6458 8.67708 13.9792 9.25 14 10ZM13.25 14H10.75C10.1042 14.0417 9.69792 14.375 9.53125 15H14.4688C14.3021 14.375 13.8958 14.0417 13.25 14ZM10.75 13H13.25C13.8958 13.0208 14.4271 13.2396 14.8438 13.6562C15.2604 14.0729 15.4792 14.6042 15.5 15.25C15.4583 15.7083 15.2083 15.9583 14.75 16H9.25C8.79167 15.9583 8.54167 15.7083 8.5 15.25C8.52083 14.6042 8.73958 14.0729 9.15625 13.6562C9.57292 13.2396 10.1042 13.0208 10.75 13Z'
    //     fill='#2F3941'
    //   ></path>
    // </svg>
  );
};

const PanelSessionIcon = () => {
  return (
    <GlobalIcon iconName='groups' />
    // <svg
    //   width='24'
    //   height='24'
    //   viewBox='0 0 24 24'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M4.5 4H19.5C20.2083 4.02083 20.8021 4.26042 21.2812 4.71875C21.7396 5.19792 21.9792 5.79167 22 6.5V17.5C21.9792 18.2083 21.7396 18.8021 21.2812 19.2812C20.8021 19.7396 20.2083 19.9792 19.5 20H4.5C3.79167 19.9792 3.19792 19.7396 2.71875 19.2812C2.26042 18.8021 2.02083 18.2083 2 17.5V6.5C2.02083 5.79167 2.26042 5.19792 2.71875 4.71875C3.19792 4.26042 3.79167 4.02083 4.5 4ZM3 6.5V17.5C3.02083 17.9167 3.16667 18.2708 3.4375 18.5625C3.72917 18.8333 4.08333 18.9792 4.5 19H19.5C19.9167 18.9792 20.2708 18.8333 20.5625 18.5625C20.8333 18.2708 20.9792 17.9167 21 17.5V6.5C20.9792 6.08333 20.8333 5.72917 20.5625 5.4375C20.2708 5.16667 19.9167 5.02083 19.5 5H4.5C4.08333 5.02083 3.72917 5.16667 3.4375 5.4375C3.16667 5.72917 3.02083 6.08333 3 6.5ZM11 10C11 10.2917 11.0938 10.5312 11.2812 10.7188C11.4688 10.9062 11.7083 11 12 11C12.2917 11 12.5312 10.9062 12.7188 10.7188C12.9062 10.5312 13 10.2917 13 10C13 9.70833 12.9062 9.46875 12.7188 9.28125C12.5312 9.09375 12.2917 9 12 9C11.7083 9 11.4688 9.09375 11.2812 9.28125C11.0938 9.46875 11 9.70833 11 10ZM14 10C13.9792 10.75 13.6458 11.3229 13 11.7188C12.3333 12.0938 11.6667 12.0938 11 11.7188C10.3542 11.3229 10.0208 10.75 10 10C10.0208 9.25 10.3542 8.67708 11 8.28125C11.6667 7.90625 12.3333 7.90625 13 8.28125C13.6458 8.67708 13.9792 9.25 14 10ZM13.25 14H10.75C10.1042 14.0417 9.69792 14.375 9.53125 15H14.4688C14.3021 14.375 13.8958 14.0417 13.25 14ZM10.75 13H12H13.25C13.8958 13.0208 14.4271 13.2396 14.8438 13.6562C15.2604 14.0729 15.4792 14.6042 15.5 15.25C15.4583 15.7083 15.2083 15.9583 14.75 16H9.25C8.79167 15.9583 8.54167 15.7083 8.5 15.25C8.52083 14.6042 8.73958 14.0729 9.15625 13.6562C9.57292 13.2396 10.1042 13.0208 10.75 13ZM7 9.5C7.02083 9.8125 7.1875 9.97917 7.5 10C7.79167 9.97917 7.95833 9.8125 8 9.5C7.95833 9.1875 7.79167 9.02083 7.5 9C7.1875 9.02083 7.02083 9.1875 7 9.5ZM9 9.5C8.97917 10.0625 8.72917 10.5 8.25 10.8125C7.75 11.0625 7.25 11.0625 6.75 10.8125C6.27083 10.5 6.02083 10.0625 6 9.5C6.02083 8.9375 6.27083 8.5 6.75 8.1875C7.25 7.9375 7.75 7.9375 8.25 8.1875C8.72917 8.5 8.97917 8.9375 9 9.5ZM6 13.75V14C5.97917 14.3125 5.8125 14.4792 5.5 14.5C5.1875 14.4792 5.02083 14.3125 5 14V13.75C5.02083 13.25 5.1875 12.8333 5.5 12.5C5.83333 12.1875 6.25 12.0208 6.75 12H8.5C8.8125 12.0208 8.97917 12.1875 9 12.5C8.97917 12.8125 8.8125 12.9792 8.5 13H6.75C6.29167 13.0417 6.04167 13.2917 6 13.75ZM16.5 9C16.2083 9.02083 16.0417 9.1875 16 9.5C16.0417 9.8125 16.2083 9.97917 16.5 10C16.8125 9.97917 16.9792 9.8125 17 9.5C16.9792 9.1875 16.8125 9.02083 16.5 9ZM16.5 11C15.9375 10.9792 15.5104 10.7292 15.2188 10.25C14.9479 9.75 14.9479 9.25 15.2188 8.75C15.5104 8.27083 15.9375 8.02083 16.5 8C17.0625 8.02083 17.5 8.27083 17.8125 8.75C18.0833 9.25 18.0833 9.75 17.8125 10.25C17.5 10.7292 17.0625 10.9792 16.5 11ZM17.25 13H15.5C15.1875 12.9792 15.0208 12.8125 15 12.5C15.0208 12.1875 15.1875 12.0208 15.5 12H17.25C17.75 12.0208 18.1667 12.1875 18.5 12.5C18.8125 12.8333 18.9792 13.25 19 13.75V14C18.9792 14.3125 18.8125 14.4792 18.5 14.5C18.1875 14.4792 18.0208 14.3125 18 14V13.75C17.9583 13.2917 17.7083 13.0417 17.25 13Z'
    //     fill='#2F3941'
    //   ></path>
    // </svg>
  );
};

const DebriefSessionIcon = () => {
  return (
    <GlobalIcon iconName='text_snippet' />
    // <svg
    //   width='22'
    //   height='16'
    //   viewBox='0 0 22 16'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M2 5.5C2.04167 6.64583 2.51042 7.65625 3.40625 8.53125C3.55208 8.69792 3.58333 8.88542 3.5 9.09375C3.16667 9.73958 2.77083 10.3646 2.3125 10.9688C3.3125 10.8646 4.27083 10.5938 5.1875 10.1562C5.35417 10.0729 5.54167 9.97917 5.75 9.875C5.83333 9.83333 5.9375 9.82292 6.0625 9.84375C6.54167 9.94792 7.02083 10 7.5 10C9.125 9.95833 10.4375 9.5 11.4375 8.625C12.4583 7.75 12.9792 6.70833 13 5.5C12.9792 4.29167 12.4583 3.25 11.4375 2.375C10.4375 1.5 9.125 1.04167 7.5 1C5.875 1.04167 4.5625 1.5 3.5625 2.375C2.54167 3.25 2.02083 4.29167 2 5.5ZM7.5 0C9.33333 0.0416667 10.8646 0.583333 12.0938 1.625C13.3229 2.64583 13.9583 3.9375 14 5.5C13.9583 7.0625 13.3229 8.36458 12.0938 9.40625C10.8646 10.4271 9.33333 10.9583 7.5 11C7 11 6.51042 10.9583 6.03125 10.875C5.88542 10.9375 5.73958 11 5.59375 11.0625C4.40625 11.625 3.125 11.9375 1.75 12C1.4375 11.9792 1.20833 11.8229 1.0625 11.5312C0.9375 11.2396 0.979167 10.9792 1.1875 10.75H1.21875C1.67708 10.2083 2.08333 9.60417 2.4375 8.9375C2.02083 8.47917 1.67708 7.95833 1.40625 7.375C1.13542 6.8125 1 6.1875 1 5.5C1.04167 3.9375 1.67708 2.64583 2.90625 1.625C4.13542 0.583333 5.66667 0.0416667 7.5 0ZM14.9688 5.03125C14.9479 4.67708 14.8958 4.33333 14.8125 4C16.5833 4.10417 18.0417 4.66667 19.1875 5.6875C20.3542 6.72917 20.9583 8 21 9.5C21 10.1875 20.8646 10.8125 20.5938 11.375C20.3229 11.9583 19.9792 12.4792 19.5625 12.9375C19.9167 13.6042 20.3333 14.2083 20.8125 14.75C21 14.9792 21.0417 15.25 20.9375 15.5625C20.7917 15.8333 20.5625 15.9792 20.25 16C18.875 15.9375 17.5938 15.625 16.4062 15.0625C16.2604 15 16.1146 14.9271 15.9688 14.8438C15.4896 14.9479 15 15 14.5 15C13.2083 14.9792 12.0417 14.6979 11 14.1562C9.97917 13.5938 9.19792 12.8542 8.65625 11.9375C9.01042 11.875 9.36458 11.8021 9.71875 11.7188C10.1771 12.3854 10.8229 12.9271 11.6562 13.3438C12.4688 13.7604 13.4167 13.9792 14.5 14C14.9792 14 15.4583 13.9479 15.9375 13.8438C16.0625 13.8229 16.1771 13.8333 16.2812 13.875C16.4688 13.9792 16.6562 14.0729 16.8438 14.1562C17.7396 14.5729 18.6875 14.8438 19.6875 14.9688C19.2292 14.3646 18.8333 13.7396 18.5 13.0938C18.4167 12.8854 18.4479 12.6979 18.5938 12.5312C19.4896 11.6562 19.9583 10.6458 20 9.5C19.9792 8.35417 19.5104 7.35417 18.5938 6.5C17.6771 5.64583 16.4688 5.15625 14.9688 5.03125Z'
    //     fill='#2F3941'
    //   ></path>
    // </svg>
  );
};

export const statusToColor = (status: ScheduleProgressPillProps['status']) => {
  switch (status) {
    case 'waiting':
      return 'var(--status-waiting)';
    case 'confirmed':
      return 'var(--status-confirmed)';
    case 'completed':
      return 'var(--status-completed)';
    case 'cancelled':
      return 'var(--status-cancelled)';
    default:
      return 'var(--status-default)';
  }
};

export const getScheduleDate = (date: ScheduleProgressPillProps['date']) => {
  if (!date) return '---';
  const startTime = `${dayjs(date.startTime).format('MMM')} ${dayjs(
    date.startTime,
  ).format('DD')}, ${dayjs(date.startTime).format('YYYY')}, ${dayjs(
    date.startTime,
  ).format('hh:mm A')}`;
  const endTime = `${dayjs(date.endTime).format('MMM')} ${dayjs(
    date.endTime,
  ).format('DD')}, ${dayjs(date.endTime).format('YYYY')}, ${dayjs(
    date.endTime,
  ).format('hh:mm A')}`;
  return `${startTime} - ${endTime}`;
};

// const InProgressIcon = () => {
//   return (
//     <svg
//       width='16'
//       height='15'
//       viewBox='0 0 16 15'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//     >
//       <path
//         d='M5.39062 1.875V3H9.89062V1.875C9.90625 1.64062 10.0312 1.51563 10.2656 1.5C10.5 1.51563 10.625 1.64062 10.6406 1.875V3H11.3906C11.8125 3.01563 12.1641 3.16406 12.4453 3.44531C12.7266 3.72656 12.875 4.07812 12.8906 4.5V5.25V6V12C12.875 12.4219 12.7266 12.7734 12.4453 13.0547C12.1641 13.3359 11.8125 13.4844 11.3906 13.5H3.89062C3.46875 13.4844 3.11719 13.3359 2.83594 13.0547C2.55469 12.7734 2.40625 12.4219 2.39062 12V6V5.25V4.5C2.40625 4.07812 2.55469 3.72656 2.83594 3.44531C3.11719 3.16406 3.46875 3.01563 3.89062 3H4.64062V1.875C4.65625 1.64062 4.78125 1.51563 5.01562 1.5C5.25 1.51563 5.375 1.64062 5.39062 1.875ZM3.14062 6V12C3.14062 12.2188 3.21094 12.3984 3.35156 12.5391C3.49219 12.6797 3.67188 12.75 3.89062 12.75H11.3906C11.6094 12.75 11.7891 12.6797 11.9297 12.5391C12.0703 12.3984 12.1406 12.2188 12.1406 12V6H3.14062ZM3.89062 3.75C3.67188 3.75 3.49219 3.82031 3.35156 3.96094C3.21094 4.10156 3.14062 4.28125 3.14062 4.5V5.25H12.1406V4.5C12.1406 4.28125 12.0703 4.10156 11.9297 3.96094C11.7891 3.82031 11.6094 3.75 11.3906 3.75H3.89062ZM4.82812 7.5C4.71875 7.51562 4.65625 7.57812 4.64062 7.6875V9.5625C4.65625 9.67188 4.71875 9.73438 4.82812 9.75H6.70312C6.8125 9.73438 6.875 9.67188 6.89062 9.5625V7.6875C6.875 7.57812 6.8125 7.51562 6.70312 7.5H4.82812ZM3.89062 7.6875C3.89062 7.42188 3.98438 7.20312 4.17188 7.03125C4.34375 6.84375 4.5625 6.75 4.82812 6.75H6.70312C6.96875 6.75 7.1875 6.84375 7.35938 7.03125C7.54688 7.20312 7.64062 7.42188 7.64062 7.6875V9.5625C7.64062 9.82812 7.54688 10.0469 7.35938 10.2188C7.1875 10.4062 6.96875 10.5 6.70312 10.5H4.82812C4.5625 10.5 4.34375 10.4062 4.17188 10.2188C3.98438 10.0469 3.89062 9.82812 3.89062 9.5625V7.6875Z'
//         fill='white'
//       />
//     </svg>
//   );
// };
