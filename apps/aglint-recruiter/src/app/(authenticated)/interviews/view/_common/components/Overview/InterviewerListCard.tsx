import { type DatabaseTable } from '@aglint/shared-types';

import InterviewerUserDetail from '../../../../../../../components/Scheduling/Common/InterviewerUserDetail';
import { type ScheduleDetailsType } from '../../hooks/useScheduleDetails';

function InterviewerListCard({
  schedule,
  item,
  cancelReasons,
}: {
  schedule: ScheduleDetailsType['schedule_data'];
  item: ScheduleDetailsType['schedule_data']['users'][0];
  cancelReasons: ScheduleDetailsType['cancel_data'];
}) {
  const cancelReason = cancelReasons?.find(
    (cancel) =>
      cancel.interview_session_cancel?.session_relation_id ===
      item.interview_session_relation.id,
  )?.interview_session_cancel;

  return (
    <InterviewerUserDetail
      interview_meeting={{
        end_time: schedule.interview_meeting.end_time,
        start_time: schedule.interview_meeting.start_time,
        status: schedule.interview_meeting.status,
      }}
      accepted_status={item.interview_session_relation.accepted_status}
      cancelReason={cancelReason as DatabaseTable['interview_session_cancel']}
      userDetails={{
        first_name: item?.user_details?.first_name ?? '',
        last_name: item?.user_details?.last_name ?? '',
        position: item?.user_details?.position ?? '',
        user_id: item?.user_details?.user_id ?? '',
        profile_image: item?.user_details?.profile_image ?? 'avatar.png',
      }}
      interviewerTimeZone={
        item?.user_details?.scheduling_settings?.timeZone?.tzCode ?? '--'
      }
      isCalendarConnected={true}
      isPaused={false}
      pause_json={null}
      trainingType={item.interview_session_relation.training_type}
      interviewerType={item.interview_session_relation.interviewer_type}
    />
  );
}

export default InterviewerListCard;
