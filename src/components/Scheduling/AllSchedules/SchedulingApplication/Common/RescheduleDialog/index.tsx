import { Dialog } from '@mui/material';

import { ConfirmationPopup } from '@/devlink3';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import {
  setIsCancelOpen,
  setIsRescheduleOpen,
  useInterviewSchedulingStore,
} from '../../../store';
import {
  setinitialSessions,
  setSelectedSessionIds,
  useSchedulingApplicationStore,
} from '../../store';

function RescheduleDialog() {
  const isRescheduleOpen = useInterviewSchedulingStore(
    (state) => state.isRescheduleOpen,
  );
  const selectedSession = useSchedulingApplicationStore(
    (state) => state.selectedSession,
  );
  const initialSessions = useSchedulingApplicationStore(
    (state) => state.initialSessions,
  );

  const onClickReschedule = async () => {
    try {
      if (selectedSession.id) {
        const { data: checkFilterJson, error: errMeetFilterJson } =
          await supabase
            .from('interview_filter_json')
            .select('*')
            .contains('session_ids', [selectedSession.id]);

        if (errMeetFilterJson) throw new Error(errMeetFilterJson.message);

        if (checkFilterJson.length > 0) {
          const updateDbArray = checkFilterJson.map((filterJson) => ({
            ...filterJson,
            session_ids: filterJson.session_ids.filter(
              (id) => id !== selectedSession.id,
            ),
          }));

          const { error: errFilterJson } = await supabase
            .from('interview_filter_json')
            .upsert(updateDbArray);

          if (errFilterJson) throw new Error(errFilterJson.message);
        }

        const { error: errMeet } = await supabase
          .from('interview_meeting')
          .update({
            status: 'cancelled',
          })
          .eq('id', selectedSession.meeting_id);
        if (errMeet) {
          throw new Error(errMeet.message);
        }

        setinitialSessions(
          initialSessions.map((session) => {
            if (session.id === selectedSession.id) {
              return {
                ...session,
                interview_meeting: {
                  ...session.interview_meeting,
                  status: 'cancelled',
                },
              };
            } else {
              return session;
            }
          }),
        );
        setIsCancelOpen(false);
        setIsRescheduleOpen(false);
        setSelectedSessionIds([selectedSession.id]);
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
          'Old schedule will be canceled and new schedule will be created. Are you sure you want to reschedule?'
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
