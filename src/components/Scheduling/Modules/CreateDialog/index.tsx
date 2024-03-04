import { Drawer, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { InterviewPanelSidebar, PanelMemberPill } from '@/devlink2';
import LoaderGrey from '@/src/components/Common/LoaderGrey';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import UITextField from '@/src/components/Common/UITextField';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { pageRoutes } from '@/src/utils/pageRouting';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import {
  setInterviewModules,
  setIsCreateDialogOpen,
  setModuleName,
  setSelectedUsers,
  useSchedulingStore
} from './../store';
import TeamAutoComplete from './TeamTextField';
import { createModule } from '../utils';

function CreateDialog() {
  const { recruiter, members } = useAuthDetails();
  const router = useRouter();
  const isCreatePanelOpen = useSchedulingStore(
    (state) => state.isCreateDialogOpen
  );
  const { selectedUsers, moduleName, interviewModules } = useSchedulingStore();
  const [loading, setLoading] = useState(false);

  const createPanelHandler = async () => {
    try {
      setLoading(true);
      const res: any = await createModule({
        name: moduleName,
        recruiter_id: recruiter.id,
        selectedUsers
      });
      setInterviewModules([
        ...interviewModules,
        { ...res.interviewPanel, relations: res.interviewPanelRelations }
      ]);
      setIsCreateDialogOpen(null);
      setSelectedUsers([]);
      setModuleName('');
    } catch (e) {
      toast.error('Error creating panel');
      setIsCreateDialogOpen(null);
    } finally {
      setLoading(false);
    }
  };

  const editPanelHandler = async () => {
    try {
      setLoading(true);

      // const res = await editModuleFunct({
      //   name: moduleName,
      //   selectedUsers,
      //   panel: editModule
      // });
      // setInterviewModules(
      //   interviewModules.map((module) => {
      //     if (module.id === editModule.id) {
      //       return {
      //         ...module,
      //         name: res.name,
      //         relations: res.updatedRelations
      //       };
      //     }
      //     return module;
      //   })
      // );
      // setEditModule({
      //   ...editModule,
      //   name: res.name,
      //   relations: res.updatedRelations
      // });
      close();
    } catch (e) {
      toast.error('Error editing panel');
      setIsCreateDialogOpen(null);
    } finally {
      setLoading(false);
    }
  };

  const close = () => {
    if (isCreatePanelOpen == 'create') {
      setSelectedUsers([]);
      setModuleName('');
    }
    setIsCreateDialogOpen(null);
  };

  const checkCandidate = async (user) => {
    try {
      const { data, error } = await supabase
        .from('interview_schedule')
        .select('id')
        .eq('panel_id', router.query.panel_id)
        .neq('status', 'completed');

      if (error) {
        throw new Error(error.message);
      }
      if (data.length > 0) {
        toast.error(
          'Panel member cannot be removed as interview is scheduled with this panel'
        );
        return;
      }
      setSelectedUsers(
        selectedUsers.filter((us) => us.user_id !== user.user_id)
      );
    } catch (e) {
      toast.error('Unable to remove panel member. Please try again later.');
    }
  };

  return (
    <Drawer
      anchor={'right'}
      open={isCreatePanelOpen !== null}
      onClose={() => {
        if (!loading) {
          close();
        }
      }}
    >
      <Stack sx={{ width: '450px', overflow: 'hidden' }}>
        <InterviewPanelSidebar
          isNoTeamFound={members.length === 0}
          onClickInvite={{
            onClick: () => {
              router.push(pageRoutes.COMPANY + '?tab=team');
            }
          }}
          slotLoader={
            <Stack width={16} height={16}>
              <LoaderGrey />
            </Stack>
          }
          isLoading={loading}
          isButtonEnabled={selectedUsers.length > 0 && moduleName.length > 0}
          slotPanelNameInput={
            <UITextField
              disabled={loading}
              placeholder='Enter Panel Name'
              value={moduleName}
              onChange={(e) => {
                setModuleName(e.target.value);
              }}
            />
          }
          slotPanelMemberDropdown={<TeamAutoComplete loading={loading} />}
          onClickButton={{
            onClick: () => {
              if (!loading) {
                if (isCreatePanelOpen == 'create') {
                  createPanelHandler();
                }
                if (isCreatePanelOpen == 'edit') {
                  editPanelHandler();
                }
              }
            }
          }}
          isMemberEmpty={selectedUsers.length === 0}
          slotPanelMemberPills={selectedUsers.map((user) => {
            return (
              <PanelMemberPill
                key={user.user_id}
                onClickClose={{
                  onClick: () => {
                    if (isCreatePanelOpen == 'edit') {
                      checkCandidate(user);
                    } else {
                      setSelectedUsers(
                        selectedUsers.filter(
                          (us) => us.user_id !== user.user_id
                        )
                      );
                    }
                  }
                }}
                slotImage={
                  <MuiAvatar
                    src={user.profile_image}
                    level={user.first_name}
                    variant='circular'
                    height='24px'
                    width='24px'
                    fontSize='12px'
                  />
                }
                textMemberName={user.first_name}
              />
            );
          })}
          textButton={
            isCreatePanelOpen == 'create' ? 'Create Panel' : 'Save Changes'
          }
          textPanelMemberDescription={
            isCreatePanelOpen == 'create'
              ? 'Select interview panel members from your team list.'
              : 'Add new members by selecting from the list below and remove them by clicking the close icon next to their name.'
          }
          textPanelMemberTitle={
            isCreatePanelOpen == 'create'
              ? 'Choose team members'
              : 'Panel Members'
          }
          textTitle={
            isCreatePanelOpen == 'create'
              ? 'Create Interview Panel'
              : 'Edit Interview Panel'
          }
          onClickClose={{
            onClick: () => {
              close();
            }
          }}
        />
      </Stack>
    </Drawer>
  );
}

export default CreateDialog;
