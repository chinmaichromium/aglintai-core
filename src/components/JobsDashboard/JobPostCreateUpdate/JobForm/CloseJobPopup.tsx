import { set } from 'lodash';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

import { CloseJobModal } from '@/devlink';
import { useJobs } from '@/src/context/JobsContext';
import { Job } from '@/src/queries/job/types';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { useJobForm } from '../JobPostFormProvider';
import { supabaseWrap } from '../utils';
import UITextField from '../../../Common/UITextField';

const CloseJobPopup = ({ onClose }) => {
  const { handleUIJobUpdate } = useJobs();
  const router = useRouter();
  const [confirmJobTitle, setConfirmJobTitle] = useState({
    value: '',
    error: '',
  });
  const { jobForm } = useJobForm();
  const handleCloseJob = async () => {
    try {
      if (confirmJobTitle.value !== jobForm.formFields.jobTitle) {
        setConfirmJobTitle((p) => ({
          ...p,
          error: 'Incorrect job title',
        }));
        return;
      }
      const [publicJob] = supabaseWrap(
        await supabase.from('public_jobs').select().eq('id', jobForm.jobPostId),
      ) as unknown as any;
      //TODO: supabaseWrap type fix needed
      const newActiveStatus = publicJob.active_status;
      set(newActiveStatus, 'closed.isActive', true);
      const [job] = supabaseWrap(
        await supabase
          .from('public_jobs')
          .update({
            active_status: {
              ...newActiveStatus,
            },
            status: 'closed',
          })
          .eq('id', jobForm.jobPostId)
          .select(),
      );
      handleUIJobUpdate({
        ...job,
        jd_json: job.jd_json as Job['jd_json'],
        active_status: job.active_status as Job['active_status'],
        parameter_weights: job.parameter_weights as Job['parameter_weights'],
        draft: job.draft as Job['draft'],
        processing_count: {
          'not started': 0,
          failed: 0,
          processing: 0,
          success: 0,
        },
        count: {
          new: 0,
          interview: 0,
          qualified: 0,
          disqualified: 0,
        },
      });
      router.replace('/jobs');
    } catch (err) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <>
      <CloseJobModal
        slotInput={
          <UITextField
            placeholder={jobForm.formFields.jobTitle}
            error={Boolean(confirmJobTitle.error)}
            helperText={confirmJobTitle.error}
            value={confirmJobTitle.value}
            onChange={(e) => {
              setConfirmJobTitle((p) => ({
                ...p,
                error: '',
                value: e.target.value,
              }));
            }}
          />
        }
        onClickCancel={{ onClick: onClose }}
        onClickCloseJob={{ onClick: handleCloseJob }}
        textJobTitle={jobForm.formFields.jobTitle}
        textLocation={jobForm.formFields.jobLocation}
      />
    </>
  );
};

export default CloseJobPopup;
