/* eslint-disable no-unused-vars */
import { Dialog } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

import { ConfirmationPopup } from '@/devlink3';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

function RescheduleDialog({
  isRescheduleOpen,
  setIsRescheduleOpen,
}: {
  isRescheduleOpen: boolean;
  setIsRescheduleOpen: (x: boolean) => void;
}) {
  const router = useRouter();
  const meeting_id = router.query.meeting_id;

  const onClickReschedule = async () => {
    try {
      if (meeting_id) {
        const { data, error } = await supabase
          .from('interview_meeting')
          .update({ status: 'cancelled' })
          .eq('id', meeting_id)
          .select();
        if (error) {
          throw new Error(error.message);
        }
        setIsRescheduleOpen(false);
        if (data[0].meeting_json)
          axios.post('/api/scheduling/v2/cancel_calender_event', {
            calender_event: data[0].meeting_json,
          });
      }
    } catch (e) {
      toast.error(e.message);
    }
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
      open={isRescheduleOpen}
      onClose={() => {
        setIsRescheduleOpen(false);
      }}
    >
      <ConfirmationPopup
        textPopupTitle={'Confirm Reschedule'}
        textPopupDescription={
          'Old schedule will be deleted and new schedule will be created. Are you sure you want to reschedule?'
        }
        isIcon={false}
        onClickCancel={{
          onClick: () => {
            setIsRescheduleOpen(false);
          },
        }}
        onClickAction={{
          onClick: onClickReschedule,
        }}
        textPopupButton={'Confirm'}
      />
    </Dialog>
  );
}

export default RescheduleDialog;
