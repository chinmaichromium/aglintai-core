import {
  Autocomplete,
  capitalize,
  Drawer,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { ButtonPrimaryRegular, Checkbox } from '@/devlink';
import { ModuleSetting } from '@/devlink2';
import UITextField from '@/src/components/Common/UITextField';
import UITypography from '@/src/components/Common/UITypography';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import MembersAutoComplete, {
  MemberTypeAutoComplete,
} from '../../../../Common/MembersTextField';
import { QueryKeysInteviewModules } from '../../../queries/type';
import { setIsModuleSettingsDialogOpen, useModulesStore } from '../../../store';
import { ModuleType } from '../../../types';

function ModuleSettingDrawer({ editModule }: { editModule: ModuleType }) {
  const { recruiter } = useAuthDetails();
  const queryClient = useQueryClient();
  const isModuleSettingsDialogOpen = useModulesStore(
    (state) => state.isModuleSettingsDialogOpen,
  );
  const { members } = useSchedulingContext();
  const [localModule, setEditLocalModule] = useState<ModuleType | null>(null);
  const [selectedUsers, setSelectedUsers] = React.useState<
    MemberTypeAutoComplete[]
  >([]);

  useEffect(() => {
    if (editModule) {
      setEditLocalModule(editModule);
      setSelectedUsers(
        members.filter((member) =>
          editModule.settings.approve_users.includes(member.user_id),
        ),
      );
    }
  }, [editModule]);

  const updateModule = async () => {
    const { data, error } = await supabase
      .from('interview_module')
      .update({
        name: localModule.name,
        description: localModule.description,
        settings: localModule.settings,
        department: editModule.department,
      })
      .eq('id', editModule.id)
      .select();
    if (!error) {
      const updatedEditModule = {
        ...editModule,
        ...data[0],
      } as ModuleType;

      queryClient.setQueryData<ModuleType>(
        QueryKeysInteviewModules.USERS_BY_MODULE_ID({
          moduleId: editModule.id,
        }),
        {
          ...updatedEditModule,
        },
      );
      setIsModuleSettingsDialogOpen(false);
    }
  };

  return (
    <Drawer
      anchor={'right'}
      open={isModuleSettingsDialogOpen}
      onClose={() => {
        setIsModuleSettingsDialogOpen(false);
      }}
    >
      {localModule && (
        <ModuleSetting
          onClickClose={{
            onClick: () => setIsModuleSettingsDialogOpen(false),
          }}
          slotModuleNameInput={
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder='Module Name'
                value={localModule.name}
                onChange={(e) =>
                  setEditLocalModule((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
              <Stack gap={'5px'}>
                <UITypography type={'small'} fontBold={'default'}>
                  Department
                </UITypography>
                <Autocomplete
                  fullWidth
                  value={localModule.department}
                  onChange={(event: any, newValue: string | null) => {
                    setEditLocalModule((prev) => ({
                      ...prev,
                      department: newValue,
                    }));
                  }}
                  options={recruiter?.departments?.map((departments) =>
                    capitalize(departments),
                  )}
                  renderInput={(params) => (
                    <TextField
                      margin='none'
                      {...params}
                      name='department'
                      placeholder='Department'
                    />
                  )}
                />
              </Stack>
              <UITextField
                label='Objective'
                multiline
                placeholder='Ex. Node JS Developer'
                fullWidth
                value={localModule.description}
                onChange={(e) => {
                  setEditLocalModule((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </Stack>
          }
          isRequireTrainingVisible={localModule?.settings?.require_training}
          slotRequiresTrainingToggle={
            <Checkbox
              isChecked={localModule?.settings?.require_training}
              onClickCheck={{
                onClick: () => {
                  if (
                    localModule.relations.filter(
                      (relation) => relation.training_status === 'training',
                    ).length == 0
                  ) {
                    {
                      setEditLocalModule((prev) => ({
                        ...prev,
                        settings: {
                          ...prev.settings,
                          require_training: !prev.settings.require_training,
                        },
                      }));
                    }
                  } else if (
                    localModule.settings.require_training === false &&
                    localModule.relations.filter(
                      (relation) => relation.training_status === 'training',
                    ).length > 0
                  ) {
                    //this condition is not needed actually just temporary
                    setEditLocalModule((prev) => ({
                      ...prev,
                      settings: {
                        ...prev.settings,
                        require_training: !prev.settings.require_training,
                      },
                    }));
                  } else {
                    toast.error(
                      'Cannot disable training when there are members in training',
                    );
                  }
                },
              }}
            />
          }
          isApprovalDoneVisible={localModule?.settings?.reqruire_approval}
          slotCheckbox={
            <Checkbox
              isChecked={localModule?.settings?.reqruire_approval}
              onClickCheck={{
                onClick: () => {
                  setEditLocalModule((prev) => ({
                    ...prev,
                    settings: {
                      ...prev.settings,
                      reqruire_approval: !prev.settings.reqruire_approval,
                    },
                  }));
                },
              }}
            />
          }
          slotButtonPrimary={
            <Stack width={'100%'}>
              <ButtonPrimaryRegular
                textLabel={'Save Changes'}
                onClickButton={{
                  onClick: updateModule,
                }}
              />
            </Stack>
          }
          slotApprovalDoneInput={
            <MembersAutoComplete
              disabled={false}
              renderUsers={members}
              setSelectedUsers={setSelectedUsers}
              selectedUsers={selectedUsers}
              pillColor='#fff'
              maxWidth='430px'
            />
          }
          slotInputNoOfReverse={
            <TextField
              sx={{ width: '200px' }}
              select
              value={localModule.settings.noReverseShadow}
              onChange={(e) => {
                setEditLocalModule((prev) => ({
                  ...prev,
                  settings: {
                    ...prev.settings,
                    noReverseShadow: Number(e.target.value),
                  },
                }));
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </TextField>
          }
          slotInputNoOfShadow={
            <TextField
              sx={{ width: '200px' }}
              select
              value={localModule.settings.noShadow}
              onChange={(e) => {
                setEditLocalModule((prev) => ({
                  ...prev,
                  settings: {
                    ...prev.settings,
                    noShadow: Number(e.target.value),
                  },
                }));
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </TextField>
          }
        />
      )}
    </Drawer>
  );
}

export default ModuleSettingDrawer;
