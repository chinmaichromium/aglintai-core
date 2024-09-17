
import { UIButton } from '@/components/Common/UIButton';
import UIDrawer from '@/components/Common/UIDrawer';
import UITextField from '@/components/Common/UITextField';
import { ScheduleTypeField } from '@/job/interview-plan/components/sessionForms';

import DebriedForm from './DebriefFrom';
import SessionDuration from './DurationDropdown';
import { useEditSession } from './hooks';
import InterviewModeComp from './InterviewMode';
import ModuleDropdown from './ModuleDropdown';
import { setEditSession, useEditSessionDrawerStore } from './store';

function SideDrawerEdit({ refetch }: { refetch: () => void }) {
  const { isEditOpen } = useEditSessionDrawerStore((state) => ({
    isEditOpen: state.isEditOpen,
  }));

  const { editSession, saving, errorValidation } = useEditSessionDrawerStore(
    (state) => ({
      editSession: state.editSession,
      saving: state.saving,
      errorValidation: state.errorValidation,
    }),
  );

  const { handleClose, handleSave } = useEditSession({
    refetch,
  });

  return (
    <UIDrawer
      open={isEditOpen}
      onClose={() => {
        if (!saving) handleClose();
      }}
      size='sm'
      title='Edit Session'
      slotBottom={
        <>
          <UIButton fullWidth variant='secondary' onClick={() => handleClose()}>
            Cancel
          </UIButton>
          <UIButton
            fullWidth
            variant='default'
            disabled={errorValidation.some((err) => err.error)}
            isLoading={Boolean(saving)}
            onClick={() => {
              if (!saving) {
                handleSave();
              }
            }}
          >
            Save
          </UIButton>
        </>
      }
    >
      <div>
        {editSession &&
        editSession.interview_session.session_type !== 'debrief' ? (
          <div className='flex flex-col space-y-4'>
            <div>
              <UITextField
                name='name'
                placeholder='Session name'
                value={editSession.interview_session.name}
                onChange={(e) =>
                  setEditSession({
                    interview_session: {
                      ...editSession.interview_session,
                      name: e.target.value,
                    },
                  })
                }
                error={
                  errorValidation.find((err) => err.field === 'session_name')
                    ?.error
                }
                helperText={
                  errorValidation.find((err) => err.field === 'session_name')
                    ?.message
                }
              />
            </div>
            <div>
              <SessionDuration />
            </div>
            <div>
              <ModuleDropdown />
            </div>
            <div>
              <ScheduleTypeField
                value={editSession.interview_session.schedule_type}
                handleTypeChange={(value) => {
                  setEditSession({
                    interview_session: {
                      ...editSession.interview_session,
                      schedule_type: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <InterviewModeComp />
            </div>
          </div>
        ) : (
          editSession && <DebriedForm />
        )}
      </div>
    </UIDrawer>
  );
}

export default SideDrawerEdit;
