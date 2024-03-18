import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

import {
  AvailableOptionCardDate,
  OptionAvailable,
  OptionAvailableCard,
  ScheduleInfoConfirmed
} from '@/devlink2';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import { getFullName } from '@/src/utils/jsonResume';

import CandidateDetailsJobDrawer from '../Common/CandidateDetailsJob';
import { setIsViewProfileOpen, useSchedulingApplicationStore } from '../store';
import { setIsCancelOpen, setIsRescheduleOpen } from '../../store';

function ConfirmedComp() {
  const selectedApplication = useSchedulingApplicationStore(
    (state) => state.selectedApplication
  );
  const members = useSchedulingApplicationStore((state) => state.members);
  const isViewProfileOpen = useSchedulingApplicationStore(
    (state) => state.isViewProfileOpen
  );

  return (
    <>
      {selectedApplication.file.resume_json && (
        <CandidateDetailsJobDrawer
          applications={selectedApplication.applications}
          candidate={selectedApplication.candidates}
          file={selectedApplication.file}
          isViewProfileOpen={isViewProfileOpen}
          setIsViewProfileOpen={setIsViewProfileOpen}
        />
      )}

      <ScheduleInfoConfirmed
        textCompleted={
          selectedApplication.schedule?.confirmed_option?.plans
            ? `This Schedule has been completed on ${dayjs(
                selectedApplication.schedule.confirmed_option.plans[
                  selectedApplication.schedule.confirmed_option.plans.length - 1
                ].end_time
              ).format('DD MMM YYYY')}`
            : ''
        }
        isScheduleStatusVisible={
          selectedApplication.schedule.status === 'confirmed'
        }
        isScheduleCompletedVisible={
          selectedApplication.schedule.status === 'completed'
        }
        isScheduleCancelVisible={
          selectedApplication.schedule.status === 'cancelled'
        }
        onClickCancel={{
          onClick: () => {
            setIsCancelOpen(true);
          }
        }}
        onClickViewProfile={{
          onClick: () => {
            setIsViewProfileOpen(true);
          }
        }}
        isScheduleInfoVisible={Boolean(
          selectedApplication.schedule.confirmed_option?.transformedPlan
        )}
        onClickReschedule={{
          onClick: () => {
            setIsRescheduleOpen(true);
          }
        }}
        slotScheduleInfoCard={
          selectedApplication.schedule.confirmed_option?.transformedPlan && (
            <OptionAvailableCard
              isActive={false}
              slotCardDate={selectedApplication.schedule.confirmed_option?.transformedPlan.map(
                (plan, ind) => {
                  return Object.entries(plan).map(([date, events]) => {
                    return (
                      <AvailableOptionCardDate
                        textDate={dayjs(date).format('DD')}
                        textDay={dayjs(date).format('dddd')}
                        textMonth={dayjs(date).format('MMM')}
                        key={ind}
                        slotOptionAvailable={events.map((pl, ind) => {
                          const allMembers = [
                            ...pl.selectedIntervs,
                            ...pl.revShadowIntervs,
                            ...pl.shadowIntervs
                          ];
                          return (
                            <OptionAvailable
                              textTime={`${dayjs(pl.start_time).format(
                                'hh:mm A'
                              )} - ${dayjs(pl.end_time).format('hh:mm A')}`}
                              textTitle={pl.module_name}
                              key={ind}
                              isTitleVisible={!pl.isBreak}
                              isBreakVisible={pl.isBreak}
                              slotMember={
                                <Stack
                                  direction={'row'}
                                  sx={{
                                    flexWrap: 'wrap',
                                    gap: 2.5
                                  }}
                                >
                                  {allMembers?.map((int) => {
                                    const user = members.find(
                                      (member) =>
                                        member.user_id === int.interv_id
                                    );
                                    if (!user) return null;
                                    return (
                                      <Stack
                                        key={int.interv_id}
                                        direction={'row'}
                                        spacing={1}
                                        sx={{
                                          textWrap: 'nowrap'
                                        }}
                                      >
                                        <MuiAvatar
                                          level={getFullName(
                                            user.first_name,
                                            user.last_name
                                          )}
                                          src={user?.profile_image}
                                          variant={'circular'}
                                          width={'24px'}
                                          height={'24px'}
                                          fontSize={'12px'}
                                        />
                                        <Typography
                                          variant={'body2'}
                                          color={'#000'}
                                        >
                                          {getFullName(
                                            user.first_name,
                                            user.last_name
                                          )}
                                        </Typography>
                                      </Stack>
                                    );
                                  })}
                                </Stack>
                              }
                            />
                          );
                        })}
                      />
                    );
                  });
                }
              )}
            />
          )
        }
        textName={getFullName(
          selectedApplication.candidates.first_name,
          selectedApplication.candidates.last_name
        )}
        textRole={selectedApplication.public_jobs.job_title}
        textLocation={selectedApplication.public_jobs.location || '--'}
        slotProfileImage={
          <MuiAvatar
            level={getFullName(
              selectedApplication?.candidates.first_name,
              selectedApplication?.candidates.last_name
            )}
            src={selectedApplication?.candidates.avatar}
            variant={'circular'}
            width={'100%'}
            height={'100%'}
            fontSize={'12px'}
          />
        }
      />
    </>
  );
}

export default ConfirmedComp;
