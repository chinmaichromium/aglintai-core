import { Collapse, Stack } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { StatusBadge } from '@/devlink2';
import { MyScheduleSubCard } from '@/devlink3';
import { getBreakLabel } from '@/src/components/JobNewInterviewPlan/utils';

import IconScheduleType from '../../../AllSchedules/ListCard/Icon';
import { getTimeZoneBrowser } from '../../../AllSchedules/SchedulingApplication/utils';
import { getScheduleType } from '../../../AllSchedules/utils';
import { ScheduleListType } from '..';
import InterviewerDetailsCard from './interviewerDetailsCard';

function ScheduleMeetingCard({
  meetingDetails,
}: {
  meetingDetails: ScheduleListType[number];
}) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Stack
        sx={{
          cursor: 'pointer',
        }}
      >
        <MyScheduleSubCard
          slotThreeDot={
            <IconEye
              onClick={() => {
                router.push(
                  `/scheduling/view?meeting_id=${meetingDetails.interview_meeting.meeting_id}&tab=candidate_details`,
                );
              }}
              stroke={1}
            >
              View
            </IconEye>
          }
          onClickDropdownIocn={{
            onClick: (e) => {
              e.preventDefault();
              setCollapseOpen((pre) => !pre);
            },
          }}
          slotMembersList={
            <>
              <Collapse in={collapseOpen}>
                <Stack direction={'column'} gap={'10px'}>
                  {meetingDetails.users.map((user, i) => {
                    return (
                      <InterviewerDetailsCard
                        key={i}
                        meetingTiming={{
                          startDate:
                            meetingDetails.interview_meeting.start_time,
                          endDate: meetingDetails.interview_meeting.end_time,
                        }}
                        user={user}
                      />
                    );
                  })}
                </Stack>
              </Collapse>
            </>
          }
          textTime={`${dayjs(meetingDetails.interview_meeting?.start_time).format('hh:mm A')} - ${dayjs(meetingDetails.interview_meeting?.end_time).format('hh:mm A')}  ${getTimeZoneBrowser()}`}
          textMeetingPlatform={getScheduleType(
            meetingDetails?.interview_meeting.schedule_type,
          )}
          textMeetingTitle={meetingDetails?.interview_meeting?.session_name}
          slotMeetingIcon={
            <IconScheduleType
              type={meetingDetails?.interview_meeting?.schedule_type}
            />
          }
          isMeetingPlatformVisible={
            meetingDetails.interview_meeting?.schedule_type === 'google_meet' ||
            meetingDetails.interview_meeting?.schedule_type === 'zoom'
          }
          isDurationVisible={true}
          isPhoneCallVisible={false}
          isTimeVisible={Boolean(meetingDetails.interview_meeting?.start_time)}
          slotStatus={
            <StatusBadge
              isCancelledVisible={
                meetingDetails.interview_meeting?.status === 'cancelled'
              }
              isConfirmedVisible={
                meetingDetails.interview_meeting?.status === 'confirmed'
              }
              isWaitingVisible={
                meetingDetails.interview_meeting?.status === 'waiting'
              }
              isCompletedVisible={
                meetingDetails.interview_meeting?.status === 'completed'
              }
              isNotScheduledVisible={
                meetingDetails.interview_meeting?.status === 'not_scheduled'
              }
            />
          }
          isLocationVisible={false}
          textDuration={getBreakLabel(
            meetingDetails.interview_meeting.session_duration,
          )}
          textJob={meetingDetails?.interview_meeting?.job_title}
        />
      </Stack>
    </>
  );
}

export default ScheduleMeetingCard;
