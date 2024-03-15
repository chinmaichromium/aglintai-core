import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ConfirmationPopup } from '@/devlink3';
import UITextField from '@/src/components/Common/UITextField';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';
import { pageRoutes } from '@/src/utils/pageRouting';
import toast from '@/src/utils/toast';

import {
  setIsCreateDialogOpen,
  setSelectedUsers,
  useSchedulingStore
} from '../store';
import { createModule } from '../utils';

function CreateModuleDialog() {
  const router = useRouter();
  const { recruiter } = useAuthDetails();
  const { allModules, setAllModules } = useSchedulingContext();
  const { isCreateDialogOpen } = useSchedulingStore();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const createModuleHandler = async () => {
    if (text && !loading) {
      try {
        setLoading(true);

        const res = await createModule({
          name: text,
          recruiter_id: recruiter.id
        });
        router.push(`${pageRoutes.INTERVIEWMODULE}/members/${res.id}`);
        setAllModules([
          ...allModules,
          {
            interview_modules: res,
            completed_meeting_count: 0,
            upcoming_meeting_count: 0,
            users: []
          }
        ]);
        setIsCreateDialogOpen(null);
        setSelectedUsers([]);
      } catch (e) {
        toast.error('Error creating panel');
        setIsCreateDialogOpen(null);
      } finally {
        setLoading(true);
      }
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
      open={isCreateDialogOpen}
      onClose={() => {
        setIsCreateDialogOpen(false);
      }}
    >
      <ConfirmationPopup
        textPopupTitle={'Create Interview Module'}
        textPopupDescription={'Name'}
        isIcon={false}
        slotWidget={
          <UITextField
            placeholder='Ex. Node JS Developer'
            fullWidth
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                createModuleHandler();
              }
            }}
          />
        }
        isWidget={true}
        onClickCancel={{
          onClick: () => {
            setIsCreateDialogOpen(false);
          }
        }}
        onClickAction={{
          onClick: createModuleHandler
        }}
        textPopupButton={'Create'}
      />
    </Dialog>
  );
}

export default CreateModuleDialog;
