import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { InterviewMemberList } from '@/devlink2/InterviewMemberList';
import { ModuleMembers } from '@/devlink2/ModuleMembers';
import { NewTabPill } from '@/devlink3/NewTabPill';
import Loader from '@/src/components/Common/Loader';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';
import ROUTES from '@/src/utils/routing/routes';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import Instructions from '../../../ScheduleDetails/Instructions';
import {
  useGetMeetingsByModuleId,
  useModuleAndUsers,
} from '../../queries/hooks';
import {
  setIsAddMemberDialogOpen,
  setIsSettingsDialogOpen,
  setTrainingStatus,
} from '../../store';
import { ModuleType } from '../../types';
import AddMemberDialog from '../AddMemberDialog';
import DeleteMemberDialog from '../DeleteMemberDialog';
import ModuleSettingComp from '../ModuleSetting';
import PauseDialog from '../PauseDialog';
import ResumeMemberDialog from '../ResumeMemberDialog';
import SchedulesModules from '../Schedules';
import { TabsModuleMembers } from '../type';
import SettingsDialog from './EditModule';
import SlotQualifiedMembers from './SlotQualifiedMembers';
import SlotTrainingMembers from './SlotTrainingMembers';
import { tabsModuleMembers } from './utils';

interface SlotBodyCompProps {
  editModule: ModuleType;
  fetchingModule: boolean;
  isFetching: boolean;
}

function SlotBodyComp({
  editModule,
  fetchingModule,
  isFetching,
}: SlotBodyCompProps) {
  const router = useRouter();
  const { loading } = useSchedulingContext();

  const { data: meetingData, isLoading } = useGetMeetingsByModuleId();

  const currentTab = router.query.tab as TabsModuleMembers['queryParams'];

  const [textValue, setTextValue] = useState(null);

  const { refetch } = useModuleAndUsers();
  
  async function updateInstruction() {
    if (textValue) {
      const { data } = await supabase
        .from('interview_module')
        .update({ instructions: textValue })
        .eq('id', editModule?.id)
        .select();
      if (data) {
        toast.success('Instructions updated successfully.');
        refetch();
      }
    }
  }
  return (
    <>
      <SettingsDialog editModule={editModule} />
      <AddMemberDialog editModule={editModule} />
      <DeleteMemberDialog />
      <PauseDialog />
      <ResumeMemberDialog editModule={editModule} />

      {fetchingModule || loading || (!editModule && isFetching) ? (
        <Stack height={'100%'} width={'100%'}>
          <Loader />
        </Stack>
      ) : (
        editModule && (
          <InterviewMemberList
            onClickEdit={{
              onClick: () => {
                setIsSettingsDialogOpen(true);
              },
            }}
            slotNewTabPill={
              <Stack direction={'row'}>
                {tabsModuleMembers.map((tab) => {
                  return (
                    <NewTabPill
                      key={tab.queryParams}
                      textLabel={tab.name}
                      isPillActive={
                        currentTab === tab.queryParams ||
                        (!currentTab && tab.queryParams == 'members')
                      }
                      onClickPill={{
                        onClick: () => {
                          router.push(
                            ROUTES['/scheduling/module/members/[module_id]']({
                              module_id: editModule.id,
                            }) + `?tab=${tab.queryParams}`,
                            undefined,
                            {
                              shallow: true,
                            },
                          );
                        },
                      }}
                    />
                  );
                })}
              </Stack>
            }
            textDepartment={editModule.department || '--'}
            textObjective={editModule.description || 'No description'}
            slotModuleContent={
              <>
                {(currentTab === 'members' || !currentTab) && (
                  <ModuleMembers
                    isMembersTrainingVisible={
                      editModule.settings?.require_training
                    }
                    slotQualifiedMemberList={
                      !isLoading && (
                        <SlotQualifiedMembers
                          editModule={editModule}
                          meetingData={meetingData}
                        />
                      )
                    }
                    slotMembersInTraining={
                      <SlotTrainingMembers
                        editModule={editModule}
                        meetingData={meetingData}
                      />
                    }
                    onClickAddMember={{
                      onClick: () => {
                        setIsAddMemberDialogOpen(true);
                        setTrainingStatus('qualified');
                      },
                    }}
                    onClickAddTrainee={{
                      onClick: () => {
                        setIsAddMemberDialogOpen(true);
                        setTrainingStatus('training');
                      },
                    }}
                  />
                )}
                {currentTab === 'schedules' && <SchedulesModules />}

                {currentTab === 'instructions' && (
                  <>
                    <Instructions
                      instruction={editModule?.instructions}
                      setTextValue={setTextValue}
                      showEditButton={true}
                      updateInstruction={updateInstruction}
                    />
                  </>
                )}

                {currentTab === 'training' && (
                  <ModuleSettingComp editModule={editModule} />
                )}
              </>
            }
          />
        )
      )}
    </>
  );
}

export default SlotBodyComp;
