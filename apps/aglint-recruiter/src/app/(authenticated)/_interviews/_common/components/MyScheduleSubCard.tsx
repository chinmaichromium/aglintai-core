import { Briefcase, ChevronDown, MapPin } from 'lucide-react';

import UITypography from '@/components/Common/UITypography';

type MeetingSlotProps = {
  slotStatus: string | React.ReactNode;
  textTime?: string;
  isTimeVisible?: boolean;
  isOnetoOneVisible?: boolean;
  isPanelIconVisible?: boolean;
  isDebriefIconVisible?: boolean;
  textMeetingTitle?: string;
  textMeetingPlatform?: string;
  slotMeetingIcon?: React.ReactNode;
  isMeetingPlatformVisible?: boolean;
  isDurationVisible?: boolean;
  textDuration?: string;
  isLocationVisible?: boolean;
  textLocation?: string;
  isPhoneCallVisible?: boolean;
  bgColorProps?: React.CSSProperties;
  textJob?: string | React.ReactNode;
  slotMembersList?: React.ReactNode;
  onClickDropdownIocn?: any;
  isMembersListVisible?: boolean;
  isDropdownIconVisible?: boolean;
  slotAvatarWithName?: React.ReactNode;
  isAvatarWithNameVisible?: boolean;
};

export function MyScheduleSubCard({
  slotStatus,
  textTime,
  isTimeVisible,
  isOnetoOneVisible,
  isPanelIconVisible,
  isDebriefIconVisible,
  textMeetingTitle,
  textMeetingPlatform,
  slotMeetingIcon,
  isMeetingPlatformVisible,
  isDurationVisible,
  textDuration,
  isLocationVisible,
  textLocation,
  isPhoneCallVisible,
  // bgColorProps,
  textJob,
  slotMembersList,
  onClickDropdownIocn,
  isMembersListVisible,
  isDropdownIconVisible,
  slotAvatarWithName,
  isAvatarWithNameVisible,
}: MeetingSlotProps) {
  return (
    <div className='relative h-full w-full rounded-lg'>
      {/* style={bgColorProps} */}
      <div className='flex h-full w-full flex-col items-stretch justify-start rounded-lg border-[1px] bg-white p-4'>
        <div className='z-1 relative flex items-start justify-between gap-2'>
          <div className='flex items-start justify-start gap-5'>
            <div className='flex min-w-[148px] flex-col gap-2'>
              {isTimeVisible && (
                <div>
                  <UITypography variant='p' type='small'>
                    {textTime}
                  </UITypography>
                </div>
              )}
              <div>{slotStatus}</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-start gap-1'>
                {isOnetoOneVisible && (
                  <div className='flex items-center justify-center'>
                    {/* Add your SVG or icon here */}
                  </div>
                )}
                {isPanelIconVisible && (
                  <div className='flex items-center justify-center'>
                    {/* Add your SVG or icon here */}
                  </div>
                )}
                {isDebriefIconVisible && (
                  <div className='flex items-center justify-center'>
                    {/* Add your SVG or icon here */}
                  </div>
                )}
                <UITypography variant='p' type='small'>
                  {textMeetingTitle}
                </UITypography>
              </div>
              {isPhoneCallVisible && (
                <div className='flex items-center gap-1'>
                  <div className='flex items-center justify-center'>
                    {/* Add your SVG or icon here */}
                  </div>
                  <div>Phone Call</div>
                </div>
              )}
              <div className='flex items-center gap-2'>
                {isMeetingPlatformVisible && (
                  <div className='flex items-center gap-1'>
                    <div>{slotMeetingIcon}</div>
                    <UITypography variant='p' type='small'>
                      {textMeetingPlatform}
                    </UITypography>
                  </div>
                )}
                {isDurationVisible && (
                  <div className='flex items-center gap-1'>
                    <div className='flex items-center justify-center'>
                      {/* Add your SVG or icon here */}
                    </div>
                    <UITypography variant='p' type='small'>
                      {textDuration}
                    </UITypography>
                  </div>
                )}
              </div>
              {isLocationVisible && (
                <div className='flex items-center gap-1'>
                  <div className='flex items-center justify-center'>
                    <MapPin size={14} />
                  </div>
                  <div>{textLocation}</div>
                </div>
              )}
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <div className='flex items-center justify-center'>
                    <Briefcase size={14} />
                  </div>
                  <UITypography variant='p' type='small'>
                    {textJob}
                  </UITypography>
                </div>
                {isAvatarWithNameVisible && <div>{slotAvatarWithName}</div>}
              </div>
            </div>
          </div>
          {isDropdownIconVisible && (
            <div
              className='flex h-6 w-6 cursor-pointer items-center justify-center rounded hover:bg-neutral-300'
              onClick={onClickDropdownIocn}
            >
              <ChevronDown size={14} />
            </div>
          )}
        </div>
        {isMembersListVisible && (
          <div className='mt-2 flex flex-col gap-2'>{slotMembersList}</div>
        )}
      </div>
    </div>
  );
}