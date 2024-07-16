import { RecruiterUserType } from '@aglint/shared-types';
import { Autocomplete, Dialog, Typography } from '@mui/material';
import React, { useState } from 'react';

import { ButtonSolid } from '@/devlink/ButtonSolid';
import { GlobalBannerInline } from '@/devlink2/GlobalBannerInline';
import { ConfirmationPopup } from '@/devlink3/ConfirmationPopup';
import UITextField from '@/src/components/Common/UITextField';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { capitalizeFirstLetter } from '@/src/utils/text/textUtils';

function RoleEditMember({
  user,
  defaultRole,
  close,
  errorMessage,
  handelMemberUpdate,
  options,
}: {
  user: RecruiterUserType;
  defaultRole?: string;
  close: () => void;
  errorMessage: string;
  // eslint-disable-next-line no-unused-vars
  handelMemberUpdate: ReturnType<typeof useAuthDetails>['handelMemberUpdate'];
  options: { role: string; id: string }[];
}) {
  const [role_id, setRole_id] = useState<string>(defaultRole || user.role_id);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog
      open={true}
      onClose={() => {
        // resetState();
        close();
      }}
    >
      <ConfirmationPopup
        onClickCancel={{ onClick: close }}
        isYellowButtonVisible={false}
        isSlotButtonVisible={true}
        slotButton={
          <ButtonSolid
            textButton='Update'
            size={2}
            isLoading={isLoading}
            isDisabled={role_id === user.role_id}
            onClickButton={{
              onClick: async () => {
                setIsLoading(true);
                await handelMemberUpdate({
                  user_id: user.user_id,
                  data: { role_id: role_id },
                });
                setIsLoading(false);
              },
            }}
          />
        }
        textPopupTitle={'Update Role'}
        isIcon={false}
        isBlueButtonVisible={false}
        isDescriptionVisible={false}
        textPopupDescription={`Update role for ${user.first_name} ${user.last_name}`}
        textPopupButton={'Update'}
        onClickAction={{
          onClick: () => {
            handelMemberUpdate({
              user_id: user.user_id,
              data: { role_id: role_id },
            });
          },
        }}
        slotWidget={
          <>
            {role_id && role_id !== user.role_id && (
              <GlobalBannerInline
                color={'warning'}
                textContent={
                  'User role will be changed to ' +
                  capitalizeFirstLetter(
                    options.find((item) => item.id === role_id).role,
                  )
                }
                slotButton={<></>}
              />
            )}
            {errorMessage && (
              <Typography fontWeight={600}>Warning: {errorMessage}</Typography>
            )}
            <Autocomplete
              fullWidth
              disableClearable
              disabled={Boolean(errorMessage)}
              value={options.find((item) => item.id === role_id)}
              getOptionLabel={(option) => capitalizeFirstLetter(option.role)}
              onChange={(_, newValue) => {
                setRole_id(newValue.id);
              }}
              id='controllable-states-demo'
              options={options}
              renderOption={(props, op) => (
                <li {...props}>{capitalizeFirstLetter(op.role)}</li>
              )}
              renderInput={(params) => (
                <UITextField
                  {...params}
                  name='Role'
                  placeholder='Choose Role'
                  label='Role: '
                  //   required
                  //   error={formError.role}
                  //   helperText={formError.role ? 'Role must required' : ''}
                  //   onFocus={() => {
                  //     setFormError({ ...formError, role: false });
                  //   }}
                />
              )}
            />
          </>
        }
      />
    </Dialog>
  );
}

export default RoleEditMember;
