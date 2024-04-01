import { Stack } from '@mui/material';
import dayjs from 'dayjs';

import {
  AvailableOptionCardDate,
  OptionAvailable,
  OptionAvailableCard,
} from '@/devlink2';
import { AvatarWithName } from '@/devlink3';
import Loader from '@/src/components/Common/Loader';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import { getFullName } from '@/src/utils/jsonResume';
import { PlanCombinationType } from '@/src/utils/scheduling_v1/types';

interface SchedulingOptionCompProps {
  isBadgeVisible?: boolean;
  schedulingOptions: PlanCombinationType[];
  isInterviewVisible?: boolean;
  loading?: boolean;
}

function SchedulingOptionComp({
  isBadgeVisible = false,
  schedulingOptions,
  isInterviewVisible = true,
  loading = false,
}: SchedulingOptionCompProps) {
  return (
    <Stack spacing={2}>
      {!loading && schedulingOptions.length === 0 && <div>Unable to fetch</div>}
      {loading && schedulingOptions.length === 0 && (
        <Stack width={'100%'} height={'100%'}>
          <Loader />
        </Stack>
      )}
      {schedulingOptions?.map((option, ind) => {
        return (
          <OptionAvailableCard
            isActive={false}
            key={ind}
            slotCardDate={option.sessions?.map((ses, indOpt) => {
              return (
                <AvailableOptionCardDate
                  isDateWrapVisible={
                    indOpt == 0 ||
                    !dayjs(option.sessions[indOpt - 1]?.start_time).isSame(
                      ses.start_time,
                      'day',
                    ) // temp fix for hiding date.
                  }
                  textDate={dayjs(ses.start_time).format('DD')}
                  textDay={dayjs(ses.start_time).format('dddd')}
                  textMonth={dayjs(ses.start_time).format('MMM')}
                  key={ind}
                  slotOptionAvailable={
                    <>
                      <OptionAvailable
                        textTime={`${dayjs(ses.start_time).format(
                          'hh:mm A',
                        )} - ${dayjs(ses.end_time).format('hh:mm A')}`}
                        textTitle={ses.module_name}
                        key={ind}
                        textBreakTime={`${ses.break_duration} Minutes` || ''}
                        isTitleVisible={true}
                        isBreakVisible={false}
                        slotMember={
                          isInterviewVisible && (
                            <Stack
                              direction={'row'}
                              sx={{
                                flexWrap: 'wrap',
                                gap: 2.5,
                              }}
                            >
                              {ses.selectedIntervs?.map((int) => {
                                return (
                                  <AvatarWithName
                                    key={int.user_id}
                                    textName={int.first_name}
                                    slotAvatar={
                                      <MuiAvatar
                                        level={getFullName(
                                          int.first_name,
                                          int.last_name,
                                        )}
                                        src={int?.profile_image}
                                        variant={'circular'}
                                        width={'24px'}
                                        height={'24px'}
                                        fontSize={'12px'}
                                      />
                                    }
                                  />
                                );
                              })}
                              {ses.shadowIntervs?.map((int) => {
                                return (
                                  <AvatarWithName
                                    key={int.user_id}
                                    isShadowVisible={isBadgeVisible && true}
                                    isReverseShadowVisible={
                                      isBadgeVisible && false
                                    }
                                    textName={int.first_name}
                                    slotAvatar={
                                      <MuiAvatar
                                        level={getFullName(
                                          int.first_name,
                                          int.last_name,
                                        )}
                                        src={int?.profile_image}
                                        variant={'circular'}
                                        width={'24px'}
                                        height={'24px'}
                                        fontSize={'12px'}
                                      />
                                    }
                                  />
                                );
                              })}
                              {ses.revShadowIntervs?.map((int) => {
                                return (
                                  <AvatarWithName
                                    key={int.user_id}
                                    isShadowVisible={isBadgeVisible && false}
                                    isReverseShadowVisible={
                                      isBadgeVisible && true
                                    }
                                    textName={int.first_name}
                                    slotAvatar={
                                      <MuiAvatar
                                        level={getFullName(
                                          int.first_name,
                                          int.last_name,
                                        )}
                                        src={int?.profile_image}
                                        variant={'circular'}
                                        width={'24px'}
                                        height={'24px'}
                                        fontSize={'12px'}
                                      />
                                    }
                                  />
                                );
                              })}
                            </Stack>
                          )
                        }
                      />
                      {indOpt !== option.sessions.length - 1 && (
                        <OptionAvailable
                          key={ind}
                          textTime={''}
                          textBreakTime={`${ses.break_duration} Minutes` || ''}
                          isTitleVisible={false}
                          isBreakVisible={true}
                        />
                      )}
                    </>
                  }
                />
              );
            })}
          />
        );
      })}
    </Stack>
  );
}

export default SchedulingOptionComp;
