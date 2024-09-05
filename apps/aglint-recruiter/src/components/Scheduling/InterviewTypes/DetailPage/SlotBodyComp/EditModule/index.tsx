import { ButtonSoft } from '@devlink/ButtonSoft';
import { ButtonSolid } from '@devlink/ButtonSolid';
import { DcPopup } from '@devlink/DcPopup';
import {
  Autocomplete,
  capitalize,
  Dialog,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { UITextArea } from '@/components/Common/UITextArea';
import UITypography from '@/components/Common/UITypography';
import { useSchedulingContext } from '@/context/SchedulingMain/SchedulingMainProvider';
import { useAllDepartments } from '@/queries/departments';
import { supabase } from '@/utils/supabase/client';

import { useModuleAndUsers } from '../../../queries/hooks';
import { setIsSettingsDialogOpen, useModulesStore } from '../../../store';
import { type ModuleType } from '../../../types';

function SettingsDialog({ editModule }: { editModule: ModuleType }) {
  const { members } = useSchedulingContext();
  const isSettingDialogOpen = useModulesStore(
    (state) => state.isSettingDialogOpen,
  );
  const [localModule, setEditLocalModule] = useState<ModuleType | null>(null);

  const { refetch } = useModuleAndUsers();

  useEffect(() => {
    if (editModule) {
      setEditLocalModule(editModule);
    }
  }, [editModule, members]);

  const updateModule = async () => {
    try {
      await supabase
        .from('interview_module')
        .update({
          name: localModule.name,
          description: localModule.description,
          department_id: localModule.department_id,
        })
        .eq('id', editModule.id)
        .throwOnError();

      refetch();
      setIsSettingsDialogOpen(false);
    } catch (e) {
      //
    }
  };

  const { data: departments } = useAllDepartments();

  return (
    <Dialog
      open={isSettingDialogOpen}
      onClose={() => {
        setIsSettingsDialogOpen(false);
      }}
    >
      <DcPopup
        popupName={'Edit'}
        slotBody={
          <Stack spacing={2}>
            <TextField
              fullWidth
              placeholder='Ex: Initial Screening'
              value={localModule?.name}
              onChange={(e) =>
                setEditLocalModule((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
            <Stack gap={'var(--space-1)'}>
              <UITypography type={'small'} fontBold={'default'}>
                Department
              </UITypography>
              <Autocomplete
                id='country-select-demo'
                options={departments}
                value={departments?.find(
                  (dep) => dep.id === localModule?.department_id,
                )}
                getOptionLabel={(option) => option.name}
                onChange={(event, newValue) => {
                  setEditLocalModule((prev) => ({
                    ...prev,
                    department_id: newValue?.id,
                  }));
                }}
                renderOption={(props, option) => {
                  const { ...optionProps } = props;
                  return (
                    <MenuItem {...optionProps}>
                      {capitalize(option.name)}
                    </MenuItem>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder='Select Department'
                    fullWidth
                  />
                )}
              />
            </Stack>
            <UITextArea
              label='Objective'
              placeholder='Add a brief description of the interview'
              fullWidth
              value={localModule?.description}
              onChange={(e) => {
                setEditLocalModule((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />
          </Stack>
        }
        onClickClosePopup={{ onClick: () => setIsSettingsDialogOpen(false) }}
        slotButtons={
          <>
            <ButtonSoft
              textButton='Cancel'
              size={2}
              color={'neutral'}
              onClickButton={{
                onClick: () => setIsSettingsDialogOpen(false),
              }}
            />
            <ButtonSolid
              size={2}
              textButton={'Update'}
              onClickButton={{ onClick: updateModule }}
            />
          </>
        }
      />
    </Dialog>
  );
}

export default SettingsDialog;
