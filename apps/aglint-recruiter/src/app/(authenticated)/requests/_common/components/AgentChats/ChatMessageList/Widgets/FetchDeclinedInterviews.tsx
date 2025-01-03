import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';

import { formatTimeWithTimeZone } from '@/components/Scheduling/utils';
import ROUTES from '@/utils/routing/routes';
import { getScheduleType } from '@/utils/scheduling/colors_and_enums';

import ScheduleList, {
  type ScheduleListProps,
} from '../../Components/SheduleList';
import { type ChatType } from '../hooks/fetch';

function FetchDeclinedInterviews({ chat }: { chat: ChatType }) {
  const meta = chat.metadata;
  const selPayload =
    meta?.findLast(
      (ele) => ele.function_name === 'fetch_candidate_declined_interviews',
    )?.payload ?? [];

  const uiSchedules: ScheduleListProps[] = selPayload
    ?.map((session) => {
      if (
        !session.interview_session ||
        !session.interview_session?.interview_meeting?.start_time
      )
        return;
      return {
        title: session.interview_session.name,
        type: getScheduleType(session.interview_session.schedule_type),
        date: dayjsLocal(
          session.interview_session.interview_meeting.start_time,
        ).format('DD MMM YYYY'),
        link:
          ROUTES['/interviews/view']() +
          `?meeting_id=${session.interview_session.interview_meeting.id}&tab=candidate_details`,
        time: formatTimeWithTimeZone({
          start_time: session.interview_session.interview_meeting.start_time,
          end_time: session.interview_session.interview_meeting.end_time,
        }),
      };
    })
    .filter((ele) => ele !== undefined);

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

export default FetchDeclinedInterviews;
