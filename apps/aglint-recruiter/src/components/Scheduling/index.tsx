import { schedulingSettingType, SocialsType } from '@aglint/shared-types';
import { AvatarGroup, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BodyWithSublink } from '@/devlink2/BodyWithSublink';
import { Breadcrum } from '@/devlink2/Breadcrum';
import { EmptyState } from '@/devlink2/EmptyState';
import { InterviewModuleCard } from '@/devlink2/InterviewModuleCard';
import { InterviewModuleTable } from '@/devlink2/InterviewModuleTable';
import { PageLayout } from '@/devlink2/PageLayout';
import { ButtonPrimaryDefaultRegular } from '@/devlink3/ButtonPrimaryDefaultRegular';
import { TaskSwitchButton } from '@/devlink3/TaskSwitchButton';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { getFullName } from '@/src/utils/jsonResume';
import { pageRoutes } from '@/src/utils/pageRouting';
import { supabase } from '@/src/utils/supabase/client';

import Icon from '../Common/Icons/Icon';
import MuiAvatar from '../Common/MuiAvatar';
import { ShowCode } from '../Common/ShowCode';
import SyncStatus from '../JobsDashboard/JobPostCreateUpdate/JobPostFormSlides/SyncStatus';
import AllSchedules from './Candidates';
import SchedulingDashboard from './Dashboard';
import AllInterviewersComp from './Interviewers';
import InterviewerLevelSettings from './Interviewers/Interviewer/InterviewerLevelSettings';
import { Modules } from './InterviewTypes/Modules';
import { fetchInterviewModules } from './InterviewTypes/queries/utils';
import { setIsCreateDialogOpen } from './InterviewTypes/store';
import MySchedule from './MySchedules';
import Schedules from './Schedules';
import SeoSettings from './SEO/SeoSettings';
import SchedulingSettings from './Settings';
import SubNav from './Settings/SubNav';
import { SchedulingTab } from './types';

function SchedulingMainComp() {
  const router = useRouter();
  const { recruiterUser, isAllowed } = useAuthDetails();
  const [saving, setSaving] = useState<'saving' | 'saved'>('saved');
  useEffect(() => {
    if (router.isReady && !router.query.tab) {
      router.push(
        `${pageRoutes.SCHEDULING}?tab=${'dashboard' as SchedulingTab}`,
        undefined,
        {
          shallow: true,
        },
      );
    }
  }, [router]);

  const tab = router.query.tab as SchedulingTab;

  const isSubNavDisabled =
    recruiterUser.role === 'admin' ||
    recruiterUser.role === 'recruiter' ||
    recruiterUser.role === 'recruiting_coordinator';

  return (
    <>
      <SeoSettings tab={tab} />

      <PageLayout
        slotTopbarLeft={
          <>
            {isSubNavDisabled && (
              <Breadcrum
                isLink={true}
                onClickLink={{
                  onClick: () => {
                    router.push(`${pageRoutes.SCHEDULING}?tab=dashboard`);
                  },
                }}
              />
            )}

            <Breadcrum
              textName={
                isSubNavDisabled
                  ? tab === 'candidates'
                    ? 'Candidates'
                    : tab === 'schedules'
                      ? 'Schedules'
                      : tab === 'interviewers'
                        ? 'Interviewers'
                        : tab === 'interviewtypes'
                          ? 'Interview Types'
                          : tab === 'settings'
                            ? 'Settings'
                            : tab === 'dashboard'
                              ? 'Dashboard'
                              : tab === 'myschedules'
                                ? 'My Scheduler'
                                : null
                  : 'Scheduler'
              }
              showArrow={isSubNavDisabled}
            />
          </>
        }
        slotSaving={<SyncStatus status={saving} />}
        slotTopbarRight={
          <>
            {tab === 'interviewtypes' &&
              isAllowed(['admin', 'recruiter', 'recruiting_coordinator']) && (
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <ButtonPrimaryDefaultRegular
                    startIconSlot={
                      <Icon
                        variant='PlusThin'
                        height='12'
                        width='12'
                        color='#fff'
                      />
                    }
                    buttonText={'New Interview Type'}
                    buttonProps={{
                      onClick: () => {
                        setIsCreateDialogOpen(true);
                      },
                    }}
                  />
                </Stack>
              )}
            {(tab === 'schedules' || tab === 'myschedules') && (
              <TaskSwitchButton
                isIconVisible={false}
                isJobCandActive={tab === 'schedules'}
                isListActive={tab === 'myschedules'}
                onClickJobCand={{
                  onClick: () => {
                    router.push(`${pageRoutes.SCHEDULING}?tab=schedules`);
                  },
                }}
                onClickList={{
                  onClick: () => {
                    router.push(`${pageRoutes.SCHEDULING}?tab=myschedules`);
                  },
                }}
                textFirst={'All Schedules'}
                textSecond={'My Schedules'}
              />
            )}
          </>
        }
        slotBody={
          isSubNavDisabled ? (
            <BodyComp setSaving={setSaving} />
          ) : (
            <BodyWithSublink
              slotTabContent={<BodyComp setSaving={setSaving} />}
              slotSublinkTab={<SubNav />}
            />
          )
        }
      />
    </>
  );
}

export default SchedulingMainComp;

const BodyComp = ({ setSaving }) => {
  const router = useRouter();
  const tab = router.query.tab as SchedulingTab;
  const { recruiter, allowAction, isAllowed, recruiterUser, setRecruiter } =
    useAuthDetails();
  async function updateSettings(schedulingSettingObj: schedulingSettingType) {
    setSaving('saving');
    const { data: updatedRecruiter, error } = await supabase
      .from('recruiter')
      .update({ scheduling_settings: schedulingSettingObj })
      .eq('id', recruiter.id)
      .select()
      .single();
    if (!error) {
      setRecruiter(
        {
          ...updatedRecruiter,
          socials: updatedRecruiter?.socials as unknown as SocialsType,
        }!,
      );
    }
    setSaving('saved');
  }

  return (
    <>
      <ShowCode>
        <ShowCode.When isTrue={tab === 'candidates'}>
          {allowAction(<AllSchedules />, [
            'admin',
            'recruiter',
            'recruiting_coordinator',
          ])}
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'interviewtypes'}>
          {isAllowed(['admin', 'recruiter', 'recruiting_coordinator']) ? (
            <Modules />
          ) : (
            <InterviewerModule
              user_id={recruiterUser.user_id}
              recruiter_id={recruiter.id}
            />
          )}
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'interviewers'}>
          {allowAction(<AllInterviewersComp />, [
            'admin',
            'recruiter',
            'recruiting_coordinator',
          ])}
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'settings'}>
          {isAllowed(['interviewer']) ? (
            <InterviewerSetting />
          ) : (
            allowAction(
              <SchedulingSettings
                updateSettings={updateSettings}
                initialData={recruiter?.scheduling_settings}
              />,
              ['admin', 'recruiter', 'recruiting_coordinator'],
            )
          )}
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'schedules'}>
          <Schedules />
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'myschedules'}>
          <MySchedule />
        </ShowCode.When>
        <ShowCode.Else>
          {allowAction(<SchedulingDashboard />, [
            'admin',
            'recruiter',
            'recruiting_coordinator',
          ])}
        </ShowCode.Else>
      </ShowCode>
    </>
  );
};

const InterviewerModule = ({
  recruiter_id,
  user_id,
}: {
  recruiter_id: string;
  user_id: string;
}) => {
  const router = useRouter();
  const { data } = useInterviewModules({ recruiter_id, user_id });
  const filteredData = data.filter(
    (item) => !item.interview_modules.is_archived,
  );

  return (
    <InterviewModuleTable
      isFilterVisible={false}
      slotInterviewModuleCard={
        <Stack width={'100%'} height={'calc(100vh - 112px)'}>
          {filteredData.length > 0 ? (
            filteredData.map((mod) => {
              return (
                <Stack
                  key={mod.interview_modules.id}
                  sx={{ pointerEvents: 'fill' }}
                >
                  <InterviewModuleCard
                    isObjectiveVisible={Boolean(
                      mod.interview_modules.description,
                    )}
                    onClickCard={{
                      onClick: () => {
                        router.push(
                          pageRoutes.INTERVIEWMODULE +
                            `/${mod.interview_modules.id}`,
                        );
                      },
                    }}
                    textObjective={mod.interview_modules.description}
                    textModuleName={mod.interview_modules.name}
                    slotMemberPic={
                      <AvatarGroup
                        total={mod.users.length}
                        sx={{
                          '& .MuiAvatar-root': {
                            width: '26px',
                            height: '26px',
                            fontSize: '12px',
                          },
                        }}
                      >
                        {mod.users.slice(0, 5).map((user) => {
                          return (
                            <MuiAvatar
                              key={user.user_id}
                              src={user.profile_image}
                              level={getFullName(
                                user.first_name,
                                user.last_name,
                              )}
                              variant='circular'
                              height='26px'
                              width='26px'
                              fontSize='12px'
                            />
                          );
                        })}
                      </AvatarGroup>
                    }
                    textMembersCount={
                      mod.users.length !== 0
                        ? `${mod.users.length} Members`
                        : ''
                    }
                    textCompletedSchedules={mod.completed_meeting_count}
                    textUpcomingSchedules={mod.upcoming_meeting_count}
                    isCompletedScheduleEmpty={mod.completed_meeting_count === 0}
                    isCompletedScheduleVisible={mod.completed_meeting_count > 0}
                    isUpcomingScheduleEmpty={mod.upcoming_meeting_count === 0}
                    isUpcomingScheduleVisible={mod.upcoming_meeting_count > 0}
                  />
                </Stack>
              );
            })
          ) : (
            <Stack>
              <EmptyState
                slotIcons={<Icon height='60' width='80' variant='EmptyState' />}
                textDescription={'No interview types found.'}
              />
            </Stack>
          )}
        </Stack>
      }
    />
  );
};

export const useInterviewModules = ({
  recruiter_id,
  user_id,
}: {
  recruiter_id: string;
  user_id: string;
}) => {
  const { recruiter } = useAuthDetails();
  const query = useQuery({
    queryKey: ['my_interview_module'],
    queryFn: () =>
      fetchInterviewModules(recruiter_id).then((data) =>
        data.filter((item) =>
          Boolean(item.users.find((user) => user.user_id === user_id)),
        ),
      ),
    enabled: !!recruiter.id,
    initialData: [],
    refetchOnWindowFocus: false,
  });
  return query;
};

const InterviewerSetting = () => {
  const { handelMemberUpdate, userDetails, recruiterUser } = useAuthDetails();
  return (
    <Stack height={'calc( 100vh - 60px)'}>
      <InterviewerLevelSettings
        initialData={recruiterUser.scheduling_settings}
        updateSettings={(x) => {
          return handelMemberUpdate({
            user_id: userDetails.user.id,
            data: { scheduling_settings: x },
          });
        }}
        isAvailability={true}
      />
    </Stack>
  );
};
