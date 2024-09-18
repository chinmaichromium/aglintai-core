'use client';
import UITypography from '@/components/Common/UITypography';

type MeetingDetails = {
  slotCandidateList?: React.ReactNode;
  slotCandidateButton?: React.ReactNode;
  isCandidateButtonVisible?: boolean;
  slotInterviewerList: React.ReactNode;
  slotInterviewerButton?: React.ReactNode;
  isInterviewerButtonVisible?: boolean;
  slotOrganizerList: React.ReactNode;
  slotHiringTeamList: React.ReactNode;
  slotInterviewTypeButton: React.ReactNode;
  textMonth?: string;
  textDate?: string;
  textDay?: string;
  textPanelName?: string;
  slotStatusBadge: React.ReactNode;
  textTime?: string;
  textDuration?: string;
  textMeetingPlatform?: string;
  textMeetingLink?: string;
  slotPanelIcon: React.ReactNode;
  slotMeetingIcon: React.ReactNode;
  slotJoinMeeting: React.ReactNode;
  textInterviewerCount?: string;
  isMeetingLinkVisible?: boolean;
  isTimingVisible?: boolean;
  isDateCardVisible?: boolean;
  textInterviewer?: string;
};

export function NewScheduleDetail({
  slotCandidateList,
  slotCandidateButton,
  isCandidateButtonVisible = true,
  slotInterviewerList,
  slotInterviewerButton,
  isInterviewerButtonVisible = true,
  slotOrganizerList,
  slotHiringTeamList,
  slotInterviewTypeButton,
  textMonth = 'Feb',
  textDate = '24',
  textDay = 'Friday',
  textPanelName = 'This is a global text component',
  slotStatusBadge,
  textTime = 'This is a global text component',
  textDuration = 'This is a global text component',
  textMeetingPlatform = 'This is a global text component',
  textMeetingLink = 'this is link',
  slotPanelIcon,
  slotMeetingIcon,
  slotJoinMeeting,
  textInterviewerCount = '(4)',
  isMeetingLinkVisible = true,
  isTimingVisible = true,
  isDateCardVisible = true,
  textInterviewer = 'Interviewers',
}: MeetingDetails) {
  return (
    <div className='flex w-full flex-col gap-4 rounded-lg border border-neutral-300 bg-white p-4'>
      <div className='flex items-center justify-start gap-4'>
        {isDateCardVisible && (
          <div className='flex h-24 w-24 flex-col items-center justify-center rounded-md bg-neutral-100'>
            <UITypography
              variant='p'
              type='small'
              fontBold='normal'
              className='text-neutral-600'
            >
              {textMonth}
            </UITypography>
            <UITypography
              variant='p'
              type='large'
              fontBold='normal'
              className='text-neutral-600'
            >
              {textDate}
            </UITypography>
            <UITypography
              variant='p'
              type='extraSmall'
              fontBold='normal'
              className='text-neutral-600'
            >
              {textDay}
            </UITypography>
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div>{slotPanelIcon}</div>
              <UITypography variant='p' type='medium' fontBold='normal'>
                {textPanelName}
              </UITypography>
            </div>
            <div>{slotStatusBadge}</div>
          </div>
          <div className='flex items-center gap-4'>
            {isTimingVisible && (
              <div>
                <UITypography variant='p' type='medium'>
                  {textTime}
                </UITypography>
              </div>
            )}
            <UITypography variant='p' type='medium'>
              {textDuration}
            </UITypography>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div>{slotMeetingIcon}</div>
              <UITypography variant='p' type='small'>
                {textMeetingPlatform}
              </UITypography>
            </div>
            {isMeetingLinkVisible && (
              <div className='flex items-center gap-1'>
                <UITypography variant='p' type='medium'>
                  {textMeetingLink}
                </UITypography>
                <div>{slotJoinMeeting}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex h-full w-full items-stretch justify-start'>
        <div className='flex h-full w-2/3 flex-col gap-4 pr-4'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>{slotCandidateList}</div>
            {isCandidateButtonVisible && <div>{slotCandidateButton}</div>}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <UITypography variant='p' type='small'>
                {textInterviewer}
              </UITypography>
              <UITypography variant='p' type='small'>
                {textInterviewerCount}
              </UITypography>
            </div>
            <div className='flex flex-col gap-2'>{slotInterviewerList}</div>
            {isInterviewerButtonVisible && <div>{slotInterviewerButton}</div>}
          </div>
        </div>
        <div className='flex w-1/3 flex-col gap-4 border-l border-neutral-300 pl-6'>
          <div className='flex flex-col gap-2'>
            <UITypography variant='p' type='small'>
              Organizer
            </UITypography>
            <div className='flex flex-col gap-2'>{slotOrganizerList}</div>
          </div>
          <div className='flex flex-col gap-2'>
            <UITypography variant='p' type='small'>
              Hiring Team
            </UITypography>
            <div className='flex flex-col gap-2'>{slotHiringTeamList}</div>
          </div>
          <div className='flex flex-col gap-2'>
            <UITypography variant='p' type='small'>
              Interview Type
            </UITypography>
            <div>{slotInterviewTypeButton}</div>
          </div>
        </div>
      </div>
    </div>
  );
}