import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';

import { formatTimeWithTimeZone } from '@/components/Scheduling/utils';
import ROUTES from '@/utils/routing/routes';
import { getScheduleType } from '@/utils/scheduling/colors_and_enums';

import ScheduleList, {
  type ScheduleListProps,
} from '../../Components/SheduleList';
import { type ChatType } from '../hooks/fetch';

function FetchScheduledInterviews({ chat }: { chat: ChatType }) {
  const meta = chat.metadata;
  const selPayload =
    meta?.findLast((ele) => ele.function_name === 'fetch_scheduled_interviews')
      ?.payload || [];

  const uiSchedules: ScheduleListProps[] = selPayload?.map((session) => {
    return {
      title: session.interview_session[0].name,
      type: getScheduleType(session.interview_session[0].schedule_type),
      date: dayjsLocal(session.start_time).format('DD MMM YYYY'),
      link:
        ROUTES['/interviews/view']() +
        `?meeting_id=${session.id}&tab=candidate_details`,
      time: session.start_time
        ? formatTimeWithTimeZone({
            start_time: session.start_time,
            end_time: session.end_time,
          })
        : '',
    };
  });

  return (
    <div className='w-full space-y-2'>
      {selPayload?.length > 0 ? (
        <ScheduleList schedules={uiSchedules} />
      ) : (
        <p>No scheduled interviews</p>
      )}
    </div>
  );
}

export default FetchScheduledInterviews;
