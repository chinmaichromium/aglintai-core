import { Button } from '@components/ui/button';
import {} from '@components/ui/dropdown-menu';
import { ChevronDown, Pause } from 'lucide-react';
import React from 'react';

interface MemberListCardProps {
  isDropdownIconVisible?: boolean;
  onClickDropdownIcon?: { onClick: () => void };
  slotThreeDot?: React.ReactNode;
  isTrainingProgessVisible: boolean;
  isTrainingProgressDetailVisible?: boolean;
  isTrainingCompletedVisible?: boolean;
  slotProgressBar?: React.ReactNode;
  slotTrainingProgressDetail?: React.ReactNode;
  textName: string;
  isTextObjectiveVisible?: boolean;
  isPauseResumeVisible: boolean;
  isScheduleCountVisible?: boolean;
  isProfileVisible?: boolean;
  isInterviewsVisible?: boolean;
  textConfirmed?: number;
  textCancel?: number;
  countCompletedSchedule?: number;
  textPause?: string;
  textPauseResumeDate?: string;
  onClickCard?: { onClick: () => void };
  onClickApproveCandidate?: { onClick: () => void };
  slotProfileImage?: React.ReactNode;
  textRole?: string;
  isThreeDotVisible: boolean;
  textObjective?: React.ReactNode;
  isPendingApprovalVisible?: any;
  isApproveCandidateButtonVisible?: any;
  textTodayInterview?: any;
  textWeekInterview?: any;
  onClickPauseInterview?: any;
  slotBadge?: any;
}

export function MemberListCardShadcn({
  isDropdownIconVisible,
  onClickDropdownIcon,
  slotThreeDot,
  isTrainingProgessVisible,
  isTrainingProgressDetailVisible,
  isTrainingCompletedVisible,
  slotProgressBar,
  slotTrainingProgressDetail,
  textName,
  isTextObjectiveVisible,
  isPauseResumeVisible,
  isScheduleCountVisible,
  isProfileVisible,
  textConfirmed,
  textCancel,
  countCompletedSchedule,
  textPause,
  textPauseResumeDate,
  onClickCard,
  onClickApproveCandidate,
  slotProfileImage,
  textRole,
  isThreeDotVisible,
  textObjective,
  isInterviewsVisible,
  textTodayInterview,
  textWeekInterview,
  // isPendingApprovalVisible,
  // isApproveCandidateButtonVisible,
  // onClickPauseInterview,
  // slotBadge,
}: MemberListCardProps) {
  return (
    <div className='border border-gray-200 rounded-lg bg-white'>
      <div className='flex justify-between items-center p-3'>
        <div className='flex items-center space-x-5 '>
          {isProfileVisible && slotProfileImage}
          <div
            className='flex flex-col w-[250px]'
            onClick={onClickCard?.onClick}
          >
            <span className='font-medium'>{textName}</span>
            {textRole && (
              <span className='text-sm text-gray-500'>{textRole}</span>
            )}
            {isTextObjectiveVisible && textObjective && (
              <span className='text-sm text-gray-600'>{textObjective}</span>
            )}
          </div>

          {isTrainingProgessVisible && slotProgressBar && (
            <div className='flex-grow'>{slotProgressBar}</div>
          )}
        </div>

        <div className='flex items-center space-x-4 '>
          {isScheduleCountVisible && (
            <div className='flex space-x-2'>
              <div className='px-3 py-1 bg-blue-50 rounded-md'>
                <span className='text-sm'>{textConfirmed}</span>
              </div>
              <div className='px-3 py-1 bg-green-50 rounded-md'>
                <span className='text-sm'>{countCompletedSchedule}</span>
              </div>
              <div className='px-3 py-1 bg-red-50 rounded-md'>
                <span className='text-sm'>{textCancel}</span>
              </div>
            </div>
          )}

          {isTrainingCompletedVisible && onClickApproveCandidate && (
            <Button onClick={onClickApproveCandidate.onClick}>
              Approve Candidate
            </Button>
          )}

          {isDropdownIconVisible && onClickDropdownIcon && (
            <Button
              variant='ghost'
              size='sm'
              onClick={onClickDropdownIcon.onClick}
            >
              <ChevronDown className='h-4 w-4' />
            </Button>
          )}

          {isInterviewsVisible && (
            <div className='flex gap-2'>
              <div className='w-[120px] p-[5px] bg-slate-100 rounded-sm'>
                <p>Today</p>
                <p>{textTodayInterview}</p>
              </div>
              <div className='w-[120px] p-[5px] bg-slate-100 rounded-sm'>
                <p>Week</p>
                <p>{textWeekInterview}</p>
              </div>
            </div>
          )}

          {isThreeDotVisible && slotThreeDot}
        </div>
      </div>

      {isTrainingProgressDetailVisible && slotTrainingProgressDetail}

      {isPauseResumeVisible && textPause && textPauseResumeDate && (
        <div className='flex items-center justify-between p-2 bg-orange-50'>
          <div className='flex items-center text-orange-600'>
            <Pause className='h-4 w-4 mr-2' />
            <span className='text-sm'>{textPause}</span>
          </div>
          <span className='text-sm text-orange-700'>{textPauseResumeDate}</span>
        </div>
      )}
    </div>
  );
}
