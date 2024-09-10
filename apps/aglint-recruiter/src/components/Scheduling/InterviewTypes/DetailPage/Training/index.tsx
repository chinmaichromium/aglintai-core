import { getFullName } from '@aglint/shared-utils';
import { useToast } from '@components/hooks/use-toast';
import { Checkbox } from '@components/ui/checkbox';
import { ButtonSolid } from '@devlink/ButtonSolid';
import { IconButtonSoft } from '@devlink/IconButtonSoft';
import { Text } from '@devlink/Text';
import { GlobalBanner } from '@devlink2/GlobalBanner';
import { GlobalBannerShort } from '@devlink2/GlobalBannerShort';
import { ModuleSetting } from '@devlink2/ModuleSetting';
import { TrainingSetting } from '@devlink2/TrainingSetting';
import { TrainingSettingItem } from '@devlink2/TrainingSettingItem';
import { Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { AlertCircle, Settings } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import MuiAvatar from '@/components/Common/MuiAvatar';
import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';
import UIDrawer from '@/components/Common/UIDrawer';
import UITypography from '@/components/Common/UITypography';
import MuiNumberfield from '@/components/CompanyDetailComp/OldSettingsSchedule/Components/MuiNumberfield';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useSchedulingContext } from '@/context/SchedulingMain/SchedulingMainProvider';
import { supabase } from '@/utils/supabase/client';

import MembersAutoComplete, {
  type MemberTypeAutoComplete,
} from '../../../Common/MembersTextField';
import { setIsModuleSettingsDialogOpen } from '../../store';
import { type ModuleType } from '../../types';
import SlotTrainingMembers from '../SlotBodyComp/SlotTrainingMembers';

function ModuleSettingComp({
  editModule,
  refetch,
}: {
  editModule: ModuleType;
  refetch: () => void;
}) {
  const { toast } = useToast();
  const { members } = useSchedulingContext();
  const [localModule, setEditLocalModule] = useState<ModuleType | null>(null);
  const [errorApproval, setErrorApproval] = useState(false);
  const [selectedUsers, setSelectedUsers] = React.useState<
    MemberTypeAutoComplete[]
  >([]);
  const [disableOpen, setDisableOpen] = React.useState(false);
  const [isBannerLoading, setBannerLoading] = useState(false);
  const { checkPermissions } = useRolesAndPermissions();
  const [open, setOpen] = React.useState(false);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editModule) {
      setEditLocalModule(editModule);
      setSelectedUsers(
        members.filter((member) =>
          editModule.settings.approve_users.includes(member.user_id),
        ),
      );
    }
  }, [editModule, members]);

  const updateModule = async () => {
    if (localModule.settings.reqruire_approval) {
      if (selectedUsers.length === 0) {
        setErrorApproval(true);
        return false;
      }
    }
    try {
      setIsSaving(true);
      if (
        localModule.settings.reqruire_approval &&
        selectedUsers.length === 0
      ) {
        setErrorApproval(true);
        return;
      }

      await supabase
        .from('interview_module')
        .update({
          settings: {
            ...localModule.settings,
          },
        })
        .eq('id', editModule.id)
        .select()
        .throwOnError();

      updateApproveUsers(
        editModule.settings.approve_users,
        selectedUsers.map((sel) => sel.user_id),
        editModule.id,
      );

      await refetch();
      setIsModuleSettingsDialogOpen(false);
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update module',
      });
    } finally {
      setErrorApproval(false);
      setIsSaving(false);
      setOpen(false);
    }
  };

  const updateApproveUsers = async (
    olduser_ids: string[],
    newuser_ids: string[],
    module_id: string,
  ) => {
    // Calculate the difference
    const usersToDelete = olduser_ids.filter(
      (user_id) => !newuser_ids.includes(user_id),
    );
    const usersToInsert = newuser_ids.filter(
      (user_id) => !olduser_ids.includes(user_id),
    );

    // Delete users no longer approved
    if (usersToDelete.length > 0) {
      await supabase
        .from('interview_module_approve_users')
        .delete()
        .in('user_id', usersToDelete);
    }

    // Insert new approved users
    if (usersToInsert.length > 0) {
      await supabase
        .from('interview_module_approve_users')
        .insert(usersToInsert.map((user_id) => ({ user_id, module_id })));
    }
  };

  const qualifiedUserIds =
    editModule?.relations
      .filter((s) => s.training_status === 'qualified')
      .map((s) => s.user_id) || [];

  const dropDownMembers = members.filter((mem) =>
    qualifiedUserIds.includes(mem.user_id),
  );

  const approvers = members.filter((member) =>
    editModule.settings.approve_users.includes(member.user_id),
  );

  const enableDiabaleTraining = async ({
    type,
  }: {
    type: 'enable' | 'disable';
  }) => {
    try {
      setBannerLoading(true);
      await supabase
        .from('interview_module')
        .update({
          settings: {
            ...localModule.settings,
            require_training: type === 'disable' ? false : true,
          },
        })
        .eq('id', editModule.id)
        .select()
        .throwOnError();
      await refetch();

      updateApproveUsers(
        editModule.settings.approve_users,
        selectedUsers.map((sel) => sel.user_id),
        editModule.id,
      );

      await refetch();
      setIsModuleSettingsDialogOpen(false);
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update module',
      });
    } finally {
      setBannerLoading(false);
      setOpen(false);
      setDisableOpen(false);
    }
  };

  const [isDisableError, setDisableError] = useState(false);
  const disableError = () => {
    setDisableError(true);
    setTimeout(() => {
      setDisableError(false);
    }, 5000);
  };

  return (
    <Stack p={'var(--space-4)'} spacing={'var(--space-4)'} maxWidth={'900px'}>
      {!editModule?.settings?.require_training && (
        <GlobalBanner
          textTitle='To add trainee interviewers and track their progress, enable training using the button on the right.'
          textDescription=''
          color={'warning'}
          slotButtons={
            <UIButton
              variant='default'
              size='sm'
              isLoading={isBannerLoading}
              disabled={isBannerLoading}
              onClick={enableDiabaleTraining.bind(null, { type: 'enable' })}
            >
              Enable
            </UIButton>
          }
        />
      )}
      {editModule?.settings?.require_training && (
        <div className='flex flex-col gap-2'>
          <Text content='Trainee' weight={'medium'} />

          <TrainingSetting
            isApprovalVisible={editModule?.settings?.reqruire_approval}
            isDisable={!editModule?.settings?.require_training}
            isEnable={editModule?.settings?.require_training}
            textHeading={
              editModule?.settings?.require_training
                ? 'Click on settings to adjust the default training settings, such as the number of shadow and reverse shadow interviews required.'
                : 'Training is disabled for this module'
            }
            textShadow={`${editModule.settings.noShadow} shadow interviews required by each trainee`}
            textReverseShadow={`${editModule.settings.noReverseShadow} reverse shadow interviews required by each trainee`}
            slotButton={
              checkPermissions(['interview_types']) ? (
                <UIButton
                  variant='secondary'
                  leftIcon={<Settings />}
                  size='sm'
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Settings
                </UIButton>
              ) : (
                <></>
              )
            }
            slotApproval={approvers.map((user, i) => (
              <Link href={`/user/profile/${user.user_id}`} key={i}>
                <TrainingSettingItem
                  text={getFullName(user.first_name, user.last_name)}
                  slotImage={
                    <MuiAvatar
                      src={user.profile_image}
                      level={getFullName(user?.first_name, user?.last_name)}
                      variant='rounded'
                      height='20px'
                      width='20px'
                      fontSize='12px'
                    />
                  }
                />
              </Link>
            ))}
          />
        </div>
      )}
      {editModule?.settings?.require_training && (
        <div className='flex flex-col gap-4'>
          <SlotTrainingMembers editModule={editModule} refetch={refetch} />
        </div>
      )}
      <UIDrawer
        size='sm'
        title='Training members update'
        open={open}
        slotBottom={
          <>
            <UIButton
              fullWidth
              variant='outline'
              color='neutral'
              size='md'
              onClick={() => setOpen(false)}
            >
              Close
            </UIButton>
            <UIButton
              fullWidth
              variant='default'
              size='md'
              disabled={
                isSaving ||
                (localModule?.settings.reqruire_approval &&
                  selectedUsers.length === 0) ||
                _.isEqual(
                  {
                    ...localModule?.settings,
                    approve_users: selectedUsers.map((user) => user.user_id),
                  },
                  editModule?.settings,
                )
              }
              isLoading={isSaving}
              onClick={() => {
                if (!isSaving) {
                  updateModule();
                }
              }}
            >
              Update
            </UIButton>
          </>
        }
        onClose={() => {
          if (
            !_.isEqual(
              {
                ...localModule?.settings,
                approve_users: selectedUsers
                  ?.map((user) => user.user_id)
                  .sort(),
              },
              {
                ...editModule?.settings,
                approve_users: editModule?.settings.approve_users.sort(),
              },
            )
          ) {
            setTimeout(() => {
              setEditLocalModule(() => ({
                ...localModule,
                settings: { ...editModule.settings },
              }));
              setSelectedUsers(() =>
                dropDownMembers.filter((mem) =>
                  editModule?.settings.approve_users.includes(mem.user_id),
                ),
              );
            }, 500);
          }
          setOpen(false);
        }}
      >
        <>
          {localModule && (
            <ModuleSetting
              onClickClose={{
                onClick: () => setIsModuleSettingsDialogOpen(false),
              }}
              isDisable={!localModule?.settings?.require_training}
              isRequireTrainingVisible={true}
              isApprovalDoneVisible={localModule?.settings?.reqruire_approval}
              slotCheckbox={
                <Checkbox
                  checked={localModule?.settings?.reqruire_approval}
                  onChange={() => {
                    setEditLocalModule((prev) => ({
                      ...prev,
                      settings: {
                        ...prev.settings,
                        reqruire_approval: !prev.settings.reqruire_approval,
                      },
                    }));
                  }}
                />
              }
              slotButtonPrimary={<></>}
              slotApprovalDoneInput={
                <>
                  <MembersAutoComplete
                    error={errorApproval || selectedUsers.length === 0}
                    renderUsers={dropDownMembers}
                    setSelectedUsers={setSelectedUsers}
                    selectedUsers={selectedUsers}
                    pillColor='var(--neutral-3)'
                    maxWidth='430px'
                    onUserSelect={() => setErrorApproval(false)}
                  />
                  {selectedUsers.length === 0 && (
                    <Typography
                      color={'var(--error-9)'}
                      mb={'var(--space-2)'}
                      pt={'2px'}
                    >
                      <AlertCircle className='h-3 w-3 text-[var(--error-9)]' />
                      Please select users to approve or uncheck require approval
                    </Typography>
                  )}
                </>
              }
              slotInputNoOfReverse={
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <IconButtonSoft
                    isDisabled={localModule.settings.noReverseShadow === 1}
                    color={'neutral'}
                    iconName='remove'
                    size={1}
                    onClickButton={{
                      onClick: () => {
                        setEditLocalModule((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            noReverseShadow: Number(
                              localModule.settings.noReverseShadow - 1,
                            ),
                          },
                        }));
                      },
                    }}
                  />
                  <MuiNumberfield
                    width='80px'
                    isMarginTop={false}
                    value={localModule.settings.noReverseShadow}
                    isDebounceEnable={false}
                    handleSelect={(value) =>
                      setEditLocalModule((prev) => ({
                        ...prev,
                        settings: {
                          ...prev.settings,
                          noReverseShadow:
                            value === 0
                              ? editModule.settings.noReverseShadow
                              : value,
                        },
                      }))
                    }
                  />
                  <IconButtonSoft
                    iconName='Add'
                    size={1}
                    color={'neutral'}
                    onClickButton={{
                      onClick: () => {
                        setEditLocalModule((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            noReverseShadow: Number(
                              localModule.settings.noReverseShadow + 1,
                            ),
                          },
                        }));
                      },
                    }}
                  />
                </Stack>
              }
              slotInputNoOfShadow={
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <IconButtonSoft
                    isDisabled={localModule.settings.noShadow === 1}
                    color={'neutral'}
                    iconName='remove'
                    size={1}
                    onClickButton={{
                      onClick: () => {
                        setEditLocalModule((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            noShadow: Number(localModule.settings.noShadow - 1),
                          },
                        }));
                      },
                    }}
                  />
                  <MuiNumberfield
                    width='80px'
                    isMarginTop={false}
                    value={localModule.settings.noShadow}
                    isDebounceEnable={false}
                    handleSelect={(value) =>
                      setEditLocalModule((prev) => ({
                        ...prev,
                        settings: {
                          ...prev.settings,
                          noShadow:
                            value === 0 ? editModule.settings.noShadow : value,
                        },
                      }))
                    }
                  />
                  <IconButtonSoft
                    iconName='Add'
                    size={1}
                    color={'neutral'}
                    onClickButton={{
                      onClick: () => {
                        setEditLocalModule((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            noShadow: Number(localModule.settings.noShadow + 1),
                          },
                        }));
                      },
                    }}
                  />
                </Stack>
              }
            />
          )}
          {editModule?.settings?.require_training && (
            <Stack marginInline={2}>
              <GlobalBannerShort
                color={'error'}
                textTitle='Disable Training'
                textDescription='Disabling training will stop tracking trainee progress and remove access to trainee interviewer features.'
                slotButtons={
                  <>
                    <ButtonSolid
                      textButton='Disable'
                      color={'error'}
                      onClickButton={{
                        onClick: () => {
                          if (
                            localModule.relations.filter(
                              (relation) =>
                                relation.training_status === 'training' &&
                                !relation.is_archived,
                            ).length > 0
                          ) {
                            // toast.warning(
                            //   'Cannot disable training while members are still in training.',
                            // );
                            disableError();
                          } else {
                            setDisableOpen(true);
                          }
                        },
                      }}
                    />
                  </>
                }
              />

              {isDisableError && (
                <Typography mt={1} color={'error'}>
                  <AlertCircle size={12} color='var(--error-9)' />
                  Cannot disable training while members are still in training.
                </Typography>
              )}
            </Stack>
          )}
        </>
      </UIDrawer>
      <UIDialog
        title='Disable Training'
        open={disableOpen}
        onClose={() => setDisableOpen(false)}
        slotButtons={
          <>
            <UIButton
              variant='outline'
              size='sm'
              onClick={() => setDisableOpen(false)}
            >
              Cancel
            </UIButton>

            <UIButton
              variant='destructive'
              size='sm'
              isLoading={isBannerLoading}
              disabled={isBannerLoading}
              onClick={() => enableDiabaleTraining({ type: 'disable' })}
            >
              Disable Training
            </UIButton>
          </>
        }
      >
        <>
          <UITypography>
            Are you sure you want to disable training?
          </UITypography>
          <div>
            <ol>
              <li>Stop tracking trainee progress</li>
              <li>Remove access to trainee interviewer features</li>
            </ol>
          </div>
        </>
      </UIDialog>
    </Stack>
  );
}

export default ModuleSettingComp;

// {
//   onClick: () => {
//     enableDiabaleTraining({ type: 'disable' });
//   },
// }
