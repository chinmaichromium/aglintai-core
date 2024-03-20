import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { ButtonPrimaryRegular } from '@/devlink';
import {
  AvailableOption,
  InterviewPlanEmpty,
  SchedulingFlow,
} from '@/devlink2';
import { AvatarWithName, InterviewBreakCard } from '@/devlink3';
import Loader from '@/src/components/Common/Loader';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import { ResumeJson } from '@/src/pages/api/resumeScoring/types';
import { getFullName } from '@/src/utils/jsonResume';
import { pageRoutes } from '@/src/utils/pageRouting';

import GetScheduleOptions from './GetScheduleOptions';
import CandidateDetailsJobDrawer from '../Common/CandidateDetailsJob';
import InterviewPlanCardComp from '../Common/InterviewPlanCardComp';
import SchedulingOptionComp from '../Common/ScheduleOption';
import { useSendInviteForCandidate } from '../hooks';
import { setIsViewProfileOpen, useSchedulingApplicationStore } from '../store';
import { filterRecordsByDate, getAllUniqueDates } from '../../utils';

dayjs.extend(utc);
dayjs.extend(timezone);

function NotScheduledApplication() {
  const router = useRouter();
  const selectedApplication = useSchedulingApplicationStore(
    (state) => state.selectedApplication,
  );
  const interviewModules = useSchedulingApplicationStore(
    (state) => state.interviewModules,
  );
  const members = useSchedulingApplicationStore((state) => state.members);
  const step = useSchedulingApplicationStore((state) => state.step);
  const fetchingPlan = useSchedulingApplicationStore(
    (state) => state.fetchingPlan,
  );
  const fetchingSchedule = useSchedulingApplicationStore(
    (state) => state.fetchingSchedule,
  );
  const isViewProfileOpen = useSchedulingApplicationStore(
    (state) => state.isViewProfileOpen,
  );
  const schedulingOptions = useSchedulingApplicationStore(
    (state) => state.schedulingOptions,
  );

  const allPlans = useMemo(() => {
    return selectedApplication?.public_jobs?.interview_plan?.plan;
  }, [selectedApplication?.public_jobs?.interview_plan?.plan]);

  const { sendToCandidate } = useSendInviteForCandidate();

  const coordinator = members.find(
    (member) =>
      member.user_id ===
      selectedApplication?.public_jobs?.interview_plan?.coordinator?.interv_id,
  );

  const schOptLocalTimeZone = schedulingOptions?.map((option) => ({
    ...option,
    plans: option.plans.map((plan) => ({
      ...plan,
      start_time: dayjs(plan.start_time).tz(dayjs.tz.guess()).toISOString(),
      end_time: dayjs(plan.end_time).tz(dayjs.tz.guess()).toISOString(),
    })),
  }));

  const uniqueDates = getAllUniqueDates({
    records: schOptLocalTimeZone,
  }) as string[];

  const [selectedDate, setSelectedDate] = useState<string>(uniqueDates[0]);

  const filteredRecords = selectedDate
    ? filterRecordsByDate({ records: schOptLocalTimeZone, date: selectedDate })
    : schOptLocalTimeZone;

  return (
    <>
      {selectedApplication?.file?.resume_json && (
        <CandidateDetailsJobDrawer
          applications={selectedApplication.applications}
          candidate={selectedApplication.candidates}
          file={selectedApplication.file}
          isViewProfileOpen={isViewProfileOpen}
          setIsViewProfileOpen={setIsViewProfileOpen}
        />
      )}
      {!fetchingSchedule ? (
        allPlans?.length > 0 ? (
          <SchedulingFlow
            textCurrentRole={
              (selectedApplication.file.resume_json as unknown as ResumeJson)
                ?.basics?.currentJobTitle || '--'
            }
            textName={getFullName(
              selectedApplication.candidates.first_name,
              selectedApplication.candidates.last_name,
            )}
            onClickViewProfile={{
              onClick: () => {
                setIsViewProfileOpen(true);
              },
            }}
            textCandidateMail={selectedApplication.candidates.email}
            slotCandidateImage={
              <MuiAvatar
                level={getFullName(
                  selectedApplication.candidates.first_name,
                  selectedApplication.candidates.last_name,
                )}
                src={selectedApplication.candidates.avatar}
                variant={'rounded'}
                width={'74px'}
                height={'74px'}
                fontSize={'36px'}
              />
            }
            onClickJobSettings={{
              onClick: () => {
                router.push(
                  `${pageRoutes.JOBS}/${selectedApplication.public_jobs.id}/interview-plan`,
                );
              },
            }}
            slotAvatarWithName={
              coordinator ? (
                <AvatarWithName
                  textName={getFullName(
                    coordinator.first_name,
                    coordinator.last_name,
                  )}
                  slotAvatar={
                    <MuiAvatar
                      level={getFullName(
                        coordinator.first_name,
                        coordinator.last_name,
                      )}
                      src={coordinator.profile_image}
                      variant={'circular'}
                      width={'100%'}
                      height={'100%'}
                      fontSize={'12px'}
                    />
                  }
                />
              ) : (
                'None'
              )
            }
            textRole={selectedApplication.public_jobs.job_title}
            textLocation={selectedApplication.public_jobs.location || '--'}
            slotScheduleOptions={
              <>
                {fetchingPlan ? (
                  <Stack height={'100%'} width={'100%'}>
                    <Loader />
                  </Stack>
                ) : step === 1 ? (
                  <GetScheduleOptions />
                ) : (
                  <AvailableOption
                    slotTimeFixer={
                      <Stack
                        gap={2}
                        direction={'row'}
                        sx={{
                          flexWrap: 'wrap',
                        }}
                      >
                        {uniqueDates.map((date) => (
                          <Stack
                            direction={'row'}
                            key={date}
                            sx={{
                              cursor: 'pointer',
                              border: '1px solid #E9EBED',
                              backgroundColor:
                                selectedDate === date ? '#F7F9FB' : 'white',
                              padding: '4px 12px',
                              borderRadius: '10px',
                            }}
                            onClick={() => {
                              setSelectedDate(date);
                            }}
                            spacing={1}
                          >
                            <Typography variant='body2' fontWeight={700}>
                              {dayjs(date).format('DD')}
                            </Typography>
                            <Typography variant='body2'>
                              {dayjs(date).format('MMMM')}
                            </Typography>
                            <Typography variant='body2'>
                              {dayjs(date).format('YYYY')}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    }
                    slotSendCandidatesButton={
                      <Stack direction={'row'} pt={4}>
                        <ButtonPrimaryRegular
                          textLabel={'Send to Candidate'}
                          onClickButton={{
                            onClick: async () => {
                              sendToCandidate({
                                allPlans,
                              });
                            },
                          }}
                        />
                      </Stack>
                    }
                    slotOptionAvailableCard={
                      <SchedulingOptionComp
                        schedulingOptions={filteredRecords}
                        isBadgeVisible={true}
                      />
                    }
                  />
                )}
              </>
            }
            slotPlanCard={
              <>
                {allPlans.map((plan) => {
                  const mod = interviewModules.find(
                    (module) => module.id === plan.module_id,
                  );
                  return plan.isBreak ? (
                    <InterviewBreakCard
                      textDuration={plan.duration + ' Minutes'}
                      isEditDeleteVisible={false}
                    />
                  ) : (
                    <InterviewPlanCardComp
                      members={members}
                      plan={plan}
                      mod={mod}
                    />
                  );
                })}
              </>
            }
          />
        ) : (
          <InterviewPlanEmpty
            onClickCreateInterviewPlan={{
              onClick: () => {
                router.push(
                  `${pageRoutes.JOBS}/${selectedApplication.public_jobs.id}/interview-plan`,
                );
              },
            }}
          />
        )
      ) : (
        <Loader />
      )}
    </>
  );
}

export default NotScheduledApplication;
