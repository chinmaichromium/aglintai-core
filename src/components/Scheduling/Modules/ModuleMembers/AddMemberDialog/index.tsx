import { Dialog } from '@mui/material';
import { useState } from 'react';

import { ConfirmationPopup } from '@/devlink3';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';

import { useAddMemberHandler } from '../../queries/hooks';
import {
  setIsAddMemberDialogOpen,
  setSelectedUsers,
  useModulesStore,
} from '../../store';
import { ModuleType } from '../../types';
import MembersAutoComplete from '../../../Common/MembersTextField';

function AddMemberDialog({ editModule }: { editModule: ModuleType }) {
  const { members } = useSchedulingContext();
  const [loading, setLoading] = useState(false);
  const isAddMemberDialogOpen = useModulesStore(
    (state) => state.isAddMemberDialogOpen,
  );
  const selectedUsers = useModulesStore((state) => state.selectedUsers);
  const trainingStatus = useModulesStore((state) => state.trainingStatus);

  const { addMemberHandler } = useAddMemberHandler();

  const allMembers = members.filter(
    (user) =>
      editModule?.relations?.findIndex(
        (rel) => rel.user_id === user.user_id,
      ) === -1,
  );

  const onClickAddMember = async () => {
    setLoading(true);
    await addMemberHandler({
      module_id: editModule.id,
      selectedUsers: selectedUsers,
      trainingStatus: trainingStatus,
    });
    setIsAddMemberDialogOpen(false);
    setSelectedUsers([]);
    setLoading(false);
  };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          background: 'transparent',
          border: 'none',
          borderRadius: '10px',
        },
      }}
      open={isAddMemberDialogOpen}
      onClose={() => {
        setIsAddMemberDialogOpen(false);
      }}
    >
      <ConfirmationPopup
        textPopupTitle={
          trainingStatus === 'qualified'
            ? 'Add Qualified Members'
            : 'Add Trainee Members'
        }
        textPopupDescription={
          'Select interview panel members from your team list.'
        }
        isIcon={false}
        slotWidget={
          <MembersAutoComplete
            disabled={loading}
            renderUsers={allMembers}
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
        }
        isWidget={true}
        onClickCancel={{
          onClick: () => {
            setIsAddMemberDialogOpen(false);
          },
        }}
        onClickAction={{
          onClick: onClickAddMember,
        }}
        textPopupButton={editModule?.relations.length > 0 ? 'Add' : 'Create'}
      />
    </Dialog>
  );
}

export default AddMemberDialog;
