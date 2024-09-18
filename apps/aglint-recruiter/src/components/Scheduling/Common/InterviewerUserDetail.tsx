import { type DatabaseTable } from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import { Briefcase } from 'lucide-react';

import InterviewerAcceptDeclineIcon from '@/components/Common/Icons/InterviewerAcceptDeclineIcon';
import { UIBadge } from '@/components/Common/UIBadge';

import { getPauseMemberText } from '../../../app/(authenticated)/_interview-pool/[pool]/_common/utils/utils';
import InterviewerTrainingTypeIcon from '../../Common/Icons/InterviewerTrainingTypeIcon';
import { formatTimeWithTimeZone, getShortTimeZone } from '../utils';

function InterviewerUserDetail({
  interview_meeting,
  cancelReason,
  accepted_status,
  isCalendarConnected,
  isPaused,
  pause_json,
  userDetails,
  interviewerTimeZone,
  trainingType,
  interviewerType,
}: {
  interview_meeting: Pick<
    DatabaseTable['interview_meeting'],
    'start_time' | 'end_time' | 'status'
  >;
  cancelReason: DatabaseTable['interview_session_cancel'];
  accepted_status: DatabaseTable['interview_session_relation']['accepted_status'];
  isCalendarConnected: boolean;
  isPaused: boolean;
  pause_json: DatabaseTable['interview_module_relation']['pause_json'];
  userDetails: {
    profile_image: string;
    position: string;
    user_id: string;
    first_name: string;
    last_name: string;
  };
  interviewerTimeZone: string;
  trainingType: DatabaseTable['interview_session_relation']['training_type'];
  interviewerType: DatabaseTable['interview_session_relation']['interviewer_type'];
}) {
  return (
    <div className='flex items-center space-x-4'>
      <div className='flex-shrink-0'>
        {userDetails.profile_image ? (
          <Avatar
            style={{
              height: '50px',
              width: '50px',
            }}
          >
            <AvatarImage
              src={userDetails.profile_image}
              alt={getFullName(userDetails.first_name, userDetails.last_name)}
            />
            <AvatarFallback>
              {getFullName(
                userDetails.first_name,
                userDetails.last_name,
              ).charAt(0)}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500'>
            {getFullName(userDetails.first_name, userDetails.last_name).charAt(
              0,
            )}
          </div>
        )}
      </div>
      <div className='flex-grow'>
        <p className='text-sm font-medium'>
          {getFullName(userDetails.first_name, userDetails.last_name)}
        </p>
        {userDetails?.position && (
          <div className='mt-1 flex items-center text-xs text-gray-500'>
            <Briefcase className='mr-1 h-3 w-3' />
            <span>{userDetails.position}</span>
          </div>
        )}
        <p className='text-xs text-muted-foreground'>
          {interview_meeting?.start_time
            ? formatTimeWithTimeZone({
                start_time: interview_meeting.start_time,
                end_time: interview_meeting.end_time,
                timeZone: interviewerTimeZone,
              })
            : getShortTimeZone(interviewerTimeZone)}
        </p>
      </div>
      <div className='flex items-center space-x-2'>
        {trainingType ? (
          <InterviewerTrainingTypeIcon type={trainingType} />
        ) : interviewerType !== 'qualified' && trainingType !== 'qualified' ? (
          <UIBadge color={'info'} textBadge={'Training'} size={'sm'} />
        ) : null}
        {interview_meeting?.status === 'confirmed' && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='cursor-pointer'>
                <InterviewerAcceptDeclineIcon type={accepted_status} />
              </div>
            </TooltipTrigger>
            {cancelReason?.reason && (
              <TooltipContent>
                <div className='space-y-1 p-2'>
                  <p className='text-warning text-sm'>
                    Reason : {cancelReason?.reason}
                  </p>
                  {cancelReason?.other_details?.note && (
                    <p className='text-sm text-muted-foreground'>
                      Notes : {cancelReason?.other_details?.note}
                    </p>
                  )}
                </div>
              </TooltipContent>
            )}
          </Tooltip>
        )}
        {interview_meeting?.status !== 'confirmed' &&
          interview_meeting?.status !== 'completed' && (
            <>
              {!isCalendarConnected && (
                <UIBadge
                  size={'sm'}
                  iconName={'CalendarOff'}
                  color={'error'}
                  textBadge={`Calendar not connected`}
                />
              )}
              {isPaused && (
                <UIBadge
                  size={'sm'}
                  color={'error'}
                  iconName={'CalendarFold'}
                  textBadge={`Paused ${getPauseMemberText(pause_json)}`}
                />
              )}
            </>
          )}
      </div>
    </div>
  );
}

export default InterviewerUserDetail;
