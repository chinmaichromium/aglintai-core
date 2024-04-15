import { AvatarGroup, InputAdornment, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  BodyWithSublink,
  EmptyState,
  InterviewModuleCard,
  InterviewModuleTable,
  PageLayout,
} from '@/devlink2';
import { ButtonPrimaryDefaultRegular } from '@/devlink3';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { SocialsType } from '@/src/types/data.types';
import { getFullName } from '@/src/utils/jsonResume';
import { pageRoutes } from '@/src/utils/pageRouting';
import { supabase } from '@/src/utils/supabase/client';

import Icon from '../Common/Icons/Icon';
import MuiAvatar from '../Common/MuiAvatar';
import UITextField from '../Common/UITextField';
import InterviewTab from '../CompanyDetailComp/Interviewers';
import InterviewerLevelSettings from '../CompanyDetailComp/Interviewers/Interviewer/InterviewerLevelSettings';
import SyncStatus from '../JobsDashboard/JobPostCreateUpdate/JobPostFormSlides/SyncStatus';
import AllSchedules from './AllSchedules';
import { Modules } from './Modules/Modules';
import { fetchInterviewModules } from './Modules/queries/utils';
import {
  setIsCreateDialogOpen,
  setSearchText,
  useModulesStore,
} from './Modules/store';
import MySchedule from './MySchedule';
import SchedulingSettings from './Settings';
import { schedulingSettingType } from './Settings/types';
import SubNav from './SubNav';
import { SchedulingTab } from './types';

function SchedulingMainComp() {
  const router = useRouter();
  const { recruiter, setRecruiter, allowAction, isAllowed, recruiterUser } =
    useAuthDetails();
  const [saving, setSaving] = useState<'saving' | 'saved'>('saved');
  const { searchText } = useModulesStore();
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

  useEffect(() => {
    if (router.isReady && !router.query.tab) {
      router.push(
        `${pageRoutes.SCHEDULING}?tab=${'myschedules' as SchedulingTab}`,
        undefined,
        {
          shallow: true,
        },
      );
    }
  }, [router]);

  const tab = router.query.tab as SchedulingTab;
  return (
    <>
      <PageLayout
        slotSaving={<SyncStatus status={saving} />}
        slotTopbarRight={
          <>
            {tab === 'interviewtypes' && (
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <UITextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon variant='JobSearch' height='14' />
                      </InputAdornment>
                    ),
                  }}
                  placeholder='Search by name'
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  borderRadius={10}
                />

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
          </>
        }
        slotBody={
          <BodyWithSublink
            slotTabContent={
              tab === 'candidates' ? (
                allowAction(<AllSchedules />, [
                  'admin',
                  'recruiter',
                  'scheduler',
                ])
              ) : tab === 'myschedules' ? (
                <MySchedule />
              ) : tab === 'interviewtypes' ? (
                allowAction(<Modules />, ['admin', 'recruiter', 'scheduler'])
              ) : tab === 'interviewers' ? (
                allowAction(<InterviewTab />, [
                  'admin',
                  'recruiter',
                  'scheduler',
                ])
              ) : tab === 'interviewmodules' ? (
                allowAction(
                  <InterviewerModule
                    user_id={recruiterUser.user_id}
                    recruiter_id={recruiter.id}
                  />,
                  ['interviewer'],
                )
              ) : tab === 'settings' ? (
                isAllowed(['interviewer']) ? (
                  <InterviewerSetting />
                ) : (
                  allowAction(
                    <SchedulingSettings
                      updateSettings={updateSettings}
                      initialData={recruiter?.scheduling_settings}
                    />,
                    ['admin', 'recruiter', 'scheduler'],
                  )
                )
              ) : (
                ''
              )
            }
            slotSublinkTab={<SubNav />}
          />
        }
      />
    </>
  );
}

export default SchedulingMainComp;

const InterviewerModule = ({
  recruiter_id,
  user_id,
}: {
  recruiter_id: string;
  user_id: string;
}) => {
  const router = useRouter();
  const { data } = useInterviewModules({ recruiter_id, user_id });
  return (
    <InterviewModuleTable
      slotInterviewModuleCard={
        <Stack width={'100%'} height={'calc(100vh - 112px)'}>
          {data.length > 0 ? (
            data.map((mod) => {
              return (
                <InterviewModuleCard
                  key={mod.interview_modules.id}
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
                            level={getFullName(user.first_name, user.last_name)}
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
                    mod.users.length !== 0 ? `${mod.users.length} Members` : ''
                  }
                  textCompletedSchedules={mod.completed_meeting_count}
                  textUpcomingSchedules={mod.upcoming_meeting_count}
                  isCompletedScheduleEmpty={mod.completed_meeting_count === 0}
                  isCompletedScheduleVisible={mod.completed_meeting_count > 0}
                  isUpcomingScheduleEmpty={mod.upcoming_meeting_count === 0}
                  isUpcomingScheduleVisible={mod.upcoming_meeting_count > 0}
                />
              );
            })
          ) : (
            <Stack>
              <EmptyState
                slotIcons={<Icon height='60' width='80' variant='EmptyState' />}
                textDescription={'No Interview Modules'}
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
    <InterviewerLevelSettings
      setOpenDrawer={() => {}}
      closeBtnVisible={false}
      initialData={recruiterUser.scheduling_settings}
      updateSettings={(x) => {
        return handelMemberUpdate({
          user_id: userDetails.user.id,
          data: { scheduling_settings: x },
        });
      }}
      isOverflow={true}
    />
  );
};
