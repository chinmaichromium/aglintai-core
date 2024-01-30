import { get } from 'lodash';

import { JobUnpublishDisclaimer } from '@/devlink';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import { useJobForm } from '../JobPostFormProvider';
import { API_FAIL_MSG, supabaseWrap } from '../utils';

function PublishDesclaimer() {
  const { jobForm, handleInitializeForm, handleUpdateRevertStatus } =
    useJobForm();

  const { recruiter } = useAuthDetails();

  const handleRevertChanges = async () => {
    try {
      handleUpdateRevertStatus(true);
      const [publishedJobPost] = supabaseWrap(
        await supabase
          .from('public_jobs')
          .update({
            draft: null,
          })
          .eq('id', jobForm.jobPostId)
          .select(),
      );
      handleInitializeForm({
        type: 'edit',
        currSlide: jobForm.currSlide,
        job: publishedJobPost,
        recruiter,
      });
      toast.success('Reverted successfully');
    } catch (err) {
      // console.log(err);
      toast.error(API_FAIL_MSG);
    } finally {
      // handleUpdateRevertStatus(false);
      //
    }
  };
  return (
    <>
      <JobUnpublishDisclaimer
        onClickDiscardChanges={{
          onClick: handleRevertChanges,
        }}
        isDiscardVisible={true}
        onClickPreview={{
          onClick: () => {
            window.open(
              `${process.env.NEXT_PUBLIC_WEBSITE}/job-post/${get(
                jobForm,
                'jobPostId',
                '',
              )}?preview=true`,
              '_blank',
            );
          },
        }}
      />
    </>
  );
}

export default PublishDesclaimer;
