import { Dialog } from '@mui/material';

import { DeletePopup } from '@/devlink3';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import {
  deleteMemberSchedulingStore,
  setIsDeleteMemberDialogOpen,
  useSchedulingStore
} from '../../store';
import { deleteRelationByUserId } from '../../utils';

function DeleteMemberDialog() {
  const { allModules, setAllModules } = useSchedulingContext();
  const isDeleteMemberDialogOpen = useSchedulingStore(
    (state) => state.isDeleteMemberDialogOpen
  );
  const editModule = useSchedulingStore((state) => state.editModule);
  const selUser = useSchedulingStore((state) => state.selUser);

  const deleteRelation = async () => {
    try {
      const { data } = await supabase
        .from('interview_meeting_user')
        .select('*,interview_meeting!inner(*)')
        .eq('interviewer_id', selUser.user_id)
        .eq('interview_meeting.module_id', editModule.id);

      const isActiveMeeting = data.some(
        (meet) => meet.interview_meeting.start_time > new Date().toISOString()
      );
      if (!isActiveMeeting) {
        const isDeleted = await deleteRelationByUserId({
          module_id: editModule.id,
          user_id: selUser.user_id
        });
        if (isDeleted) {
          const updatedModules = allModules.map((mod) => {
            if (mod.interview_modules.id === editModule.id) {
              const filteredUsers = mod.users.filter(
                (user) => user.user_id !== selUser.user_id
              );
              mod.users = filteredUsers;
            }
            return mod;
          });
          setAllModules([...updatedModules]);
          deleteMemberSchedulingStore(selUser.user_id);
        } else {
          throw new Error();
        }
      } else {
        toast.error('Cannot delete user, active schedules are present');
      }
    } catch (e) {
      setIsDeleteMemberDialogOpen(false);
      toast.error('Error deleting user');
    }
  };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          background: 'transparent',
          border: 'none',
          borderRadius: '10px'
        }
      }}
      open={isDeleteMemberDialogOpen}
      onClose={() => {
        setIsDeleteMemberDialogOpen(false);
      }}
    >
      <DeletePopup
        textTitle={'Remove Member'}
        textDescription={
          'By clicking remove the member will be permanently removed from this interview module'
        }
        isIcon={false}
        onClickCancel={{
          onClick: () => {
            setIsDeleteMemberDialogOpen(false);
          }
        }}
        onClickDelete={{
          onClick: () => {
            if (selUser.id) deleteRelation();
          }
        }}
        buttonText={'Delete'}
      />
    </Dialog>
  );
}

export default DeleteMemberDialog;
