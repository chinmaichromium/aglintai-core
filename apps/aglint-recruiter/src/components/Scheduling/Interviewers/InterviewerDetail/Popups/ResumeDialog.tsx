import { Text } from '@devlink/Text';
import React from 'react';

import dayjs from '@/utils/dayjs';
import { supabase } from '@/utils/supabase/client';

import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';
import { useModuleRelations } from '../hooks';
import {
  setIsPauseDialogOpen,
  setIsResumeDialogOpen,
  useInterviewerDetailStore,
} from '../store';

function ResumeDialog() {
  const [isSaving, setIsSaving] = React.useState(false);

  const { isResumeDialogOpen, selRelation } = useInterviewerDetailStore(
    (state) => ({
      isResumeDialogOpen: state.isResumeDialogOpen,
      selRelation: state.selRelation,
    }),
  );
  const { refetch } = useModuleRelations({
    user_id: selRelation?.user_id,
  });

  const resume = async () => {
    try {
      setIsSaving(true);
      await supabase
        .from('interview_module_relation')
        .update({ pause_json: null })
        .eq('id', selRelation.id)
        .throwOnError();

      await refetch();

      setIsPauseDialogOpen(false);
    } catch (_e) {
      //
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <UIDialog
        title='Resume Member'
        open={isResumeDialogOpen}
        onClose={() => {
          if (!isSaving) setIsResumeDialogOpen(false);
        }}
        slotButtons={
          <>
            <UIButton
              size='md'
              onClick={() => {
                if (!isSaving) setIsResumeDialogOpen(false);
              }}
            >
              Cancel
            </UIButton>
            <UIButton
              size='md'
              isLoading={isSaving}
              onClick={async () => {
                if (!isSaving) {
                  setIsSaving(true);
                  await resume();
                  setIsResumeDialogOpen(false);
                }
              }}
            >
              Resume
            </UIButton>
          </>
        }
      >
        <Text
          color={'neutral'}
          content={`This member is currently paused from scheduling for this interview until  ${selRelation?.pause_json?.isManual ? 'you resume' : dayjs(selRelation?.pause_json?.end_date).format('MMMM DD YYYY')}`}
        />
      </UIDialog>
    </>
  );
}

export default ResumeDialog;
