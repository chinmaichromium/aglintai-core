import { cn } from '@lib/utils';
import {
  ExternalLink,
  Hourglass,
  Pencil,
  Trash,
  UserRound,
  Users,
} from 'lucide-react';
import React, { useState } from 'react';

import { UIButton } from '@/components/Common/UIButton';
import UITypography from '@/components/Common/UITypography';

export interface InterviewPlanDetailProps {
  className?: string;
  textModuleName?: React.ReactNode;
  isDebriefIconVisible?: boolean;
  isOnetoOneIconVisible?: boolean;
  isPanelIconVisible?: boolean;
  textDuration?: React.ReactNode;
  slotPlatformIcon?: React.ReactNode;
  textPlatformName?: React.ReactNode;
  textLink?: React.ReactNode;
  textSelected?: React.ReactNode;
  slotInterviewers?: React.ReactNode;
  onClickLink?: () => void;
  onClickEditSession?: () => void;
  isBreakCardVisible?: boolean;
  slotBreakCard?: React.ReactNode;
  onClickDeleteSession?: () => void;
  slotAddScheduleCard?: React.ReactNode;
  slotButtons?: React.ReactNode;
}

export function InterviewPlanDetail({
  className,
  textModuleName,
  isDebriefIconVisible = false,
  isOnetoOneIconVisible = false,
  isPanelIconVisible = false,
  textDuration,
  onClickEditSession,
  slotPlatformIcon,
  textPlatformName,
  textLink,
  textSelected,
  onClickDeleteSession,
  slotInterviewers,
  onClickLink,
  isBreakCardVisible = false,
  slotBreakCard,
  slotAddScheduleCard,
  slotButtons,
}: InterviewPlanDetailProps) {
  const [hover, setHover] = useState(false);
  return (
    <div className={cn('relative', className)}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='relative flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4'
      >
        <div className='flex h-[30px] items-center justify-between gap-1'>
          <div>
            <div className='flex items-center gap-1'>
              {isDebriefIconVisible && <Users size={16} />}
              {isOnetoOneIconVisible && <UserRound size={16} />}
              {isPanelIconVisible && <UserRound size={16} />}
              <div>{textModuleName}</div>
            </div>
          </div>
          {hover && (
            <div className='flex gap-2'>
              <UIButton
                size='sm'
                onClick={onClickEditSession}
                variant='secondary'
                icon={<Pencil />}
              />
              <UIButton
                size='sm'
                onClick={onClickDeleteSession}
                variant='secondary'
                icon={<Trash />}
              />
            </div>
          )}
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1 text-sm'>
            <Hourglass size={12} />
            <span>{textDuration}</span>
          </div>
          <div className='flex items-center gap-1 text-sm'>
            {slotPlatformIcon}
            <span>{textPlatformName}</span>
          </div>
        </div>
        <div>
          <div
            className='flex w-fit cursor-pointer items-center gap-2 rounded-sm bg-orange-50 p-[3px] px-2 hover:bg-orange-100'
            onClick={onClickLink}
          >
            <UITypography className='text-red-900' variant='p' type='small'>
              {textLink}
            </UITypography>
            <ExternalLink size={12} className='text-red-900' />
          </div>
        </div>
        <div>
          <div className='text-sm mt-2 text-gray-600'>{textSelected}</div>
          <div>{slotInterviewers}</div>
        </div>
        <div className='absolute right-4 top-4 hidden gap-2 group-hover:flex'>
          {slotButtons}
        </div>
      </div>
      {isBreakCardVisible && <div className='pt-2'>{slotBreakCard}</div>}
      <div>{slotAddScheduleCard}</div>
    </div>
  );
}
