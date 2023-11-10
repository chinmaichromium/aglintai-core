import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { get } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

import { CloseJob, CreateNewJob } from '@/devlink';
import Loader from '@/src/components/Common/Loader';
import { useJobs } from '@/src/context/JobsContext';
import toast from '@/src/utils/toast';

import CloseJobPopup from './CloseJobPopup';
import JobPublishButton from './PublishButton';
import SectionWarning from './SectionWarnings';
import { FormJobType, JobFormState, useJobForm } from '../JobPostFormProvider';
import ApplyForm from '../JobPostFormSlides/ApplyForm';
import BasicStepOne from '../JobPostFormSlides/BasicStepOne';
import BasicStepTwo from '../JobPostFormSlides/BasicStepTwo';
import Emails from '../JobPostFormSlides/EmailTemplates';
import PublishDesclaimer from '../JobPostFormSlides/PublishDesclaimer';
import ScoreSettings from '../JobPostFormSlides/ScoreSettings';
import ScreeningQns from '../JobPostFormSlides/ScreeningQnsWithVids';
import ScreeningSettings from '../JobPostFormSlides/ScreeningSettings';
import SyncStatus from '../JobPostFormSlides/SyncStatus';
import { API_FAIL_MSG } from '../utils';
import MuiPopup from '../../../Common/MuiPopup';

export type JobFormErrorParams = {
  jobTitle: string;
  company: string;
  location: string;
  department: string;
  aiQnGen: number;
};

export type slideName =
  | 'details'
  | 'templates'
  | 'screening'
  | 'workflow'
  | 'resumeScore';

export type FormErrorParams = Record<
  slideName,
  {
    title: string;
    err: string[];
  }
> | null;

function JobForm() {
  const { handleJobDelete } = useJobs();
  const { jobForm, dispatch, formWarnings } = useJobForm();
  const router = useRouter();
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [formError, setFormError] = useState<JobFormErrorParams>({
    jobTitle: '',
    company: '',
    location: '',
    department: '',
    aiQnGen: 0,
  });

  const [jdWarn, setJdWarn] = useState<'' | 'show' | 'shown'>('');
  let formSlide = <></>;
  const { currSlide } = jobForm;
  if (jobForm.isJobPostReverting) {
    formSlide = (
      <Stack alignItems={'center'} justifyItems={'center'} height={'300px'}>
        <Loader />
      </Stack>
    );
  } else if (currSlide === 'details') {
    formSlide = (
      <>
        <BasicStepOne formError={formError} setFormError={setFormError} />
        <BasicStepTwo
          showWarnOnEdit={() => {
            if (jdWarn !== 'shown') setJdWarn('show');
          }}
        />
      </>
    );
  } else if (currSlide === 'applyForm') {
    formSlide = <ApplyForm />;
  } else if (currSlide === 'resumeScore') {
    formSlide = <ScoreSettings />;
  } else if (currSlide === 'templates') {
    formSlide = <Emails />;
  } else if (currSlide == 'screening') {
    formSlide = <ScreeningQns />;
  } else if (currSlide == 'workflow') {
    formSlide = <ScreeningSettings />;
  }

  const formValidation = () => {
    let flag = true;
    const { company, jobTitle, jobLocation, department } = jobForm.formFields;
    if (currSlide === 'details') {
      if (isEmpty(jobTitle.trim())) {
        flag = false;
        setFormError((p) => ({ ...p, jobTitle: 'Please Enter Job Title' }));
      }

      if (isEmpty(company?.trim())) {
        flag = false;
        setFormError((p) => ({ ...p, company: 'Please Enter Company Name' }));
      }

      if (isEmpty(jobLocation.trim())) {
        flag = false;
        setFormError((p) => ({ ...p, location: 'Please Enter Location' }));
      }

      if (isEmpty(get(jobForm, 'formFields.jobDescription', ''))) {
        return false;
      }

      if (isEmpty(get(jobForm, 'formFields.skills', []))) {
        return false;
      }
      if (isEmpty(department.trim())) {
        flag = false;
        setFormError((p) => ({ ...p, department: 'Please Enter Department' }));
      }
    }

    if (currSlide === 'screening') {
      const interviewConfig = get(
        jobForm,
        'formFields.interviewConfig',
        {},
      ) as FormJobType['interviewConfig'];

      if (formError.aiQnGen > 0) {
        toast.error('Please wait till qusetions get generated');
        return false;
      }

      let totalQns = 0;

      if (get(interviewConfig, 'skill.value', false)) {
        let count = get(interviewConfig, 'skill.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (get(interviewConfig, 'behavior.value', false)) {
        let count = get(interviewConfig, 'behavior.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (get(interviewConfig, 'communication.value', false)) {
        let count = get(interviewConfig, 'communication.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (get(interviewConfig, 'performance.value', false)) {
        let count = get(interviewConfig, 'performance.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (get(interviewConfig, 'education.value', false)) {
        let count = get(interviewConfig, 'education.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (get(interviewConfig, 'general.value', false)) {
        let count = get(interviewConfig, 'general.questions', []).length;
        if (count === 0) {
          return false;
        }
        totalQns += count;
      }
      if (totalQns < 10 || totalQns > 25) {
        flag = false;
      }
    }
    return flag;
  };

  const changeSlide = (nextSlide: JobFormState['currSlide']) => {
    formValidation();
    dispatch({
      type: 'moveToSlide',
      payload: {
        nextSlide: nextSlide,
      },
    });
    handleUpdateMaxVisitedSlideNo(slidePathToNum[String(nextSlide)]);
  };

  let formTitle = `Create Job - ${
    jobForm.formFields.jobTitle ? jobForm.formFields.jobTitle : 'Untitled'
  }`;
  if (jobForm.formType === 'edit') {
    formTitle = `Edit Job - ${
      jobForm.formFields.jobTitle ? jobForm.formFields.jobTitle : 'Untitled'
    }`;
  }
  const warning = formWarnings;

  const handleUpdateMaxVisitedSlideNo = (slideNo: number) => {
    if (jobForm.formType === 'edit') return;
    const currMax = Number(
      localStorage.getItem(`MaxVisitedSlideNo-${jobForm.jobPostId}`) || -1,
    );
    if (slideNo > currMax) {
      localStorage.setItem(
        `MaxVisitedSlideNo-${jobForm.jobPostId}`,
        String(slideNo),
      );
    }
  };

  const handleDeleteJob = async () => {
    try {
      const isDeleted = await handleJobDelete(jobForm.jobPostId);
      if (!isDeleted) throw new Error('Job delete fail');
      router.replace('/jobs');
      toast.error('Deleted Draft job SuccessFully');
    } catch (err) {
      toast.error(API_FAIL_MSG);
    }
  };

  const isShowChangesWarn =
    jobForm.formType === 'edit' &&
    !jobForm.formFields.isDraftCleared &&
    jobForm.jobPostStatus === 'published';

  return (
    <>
      <CreateNewJob
        slotCreateJob={<>{formSlide}</>}
        onClickApplyForm={{
          onClick: () => {
            changeSlide('applyForm');
          },
        }}
        onClickEmailTemplates={{
          onClick: () => {
            changeSlide('templates');
          },
        }}
        onClickDetails={{
          onClick: () => {
            changeSlide('details');
          },
        }}
        onClickScoreSetting={{
          onClick: () => {
            changeSlide('resumeScore');
          },
        }}
        onClickScreeningQuestions={{
          onClick: () => {
            changeSlide('screening');
          },
        }}
        onClickWorkflows={{
          onClick: () => {
            changeSlide('workflow');
          },
        }}
        onClickBack={{
          onClick: () => {
            router.back();
          },
        }}
        isApplyFormActive={currSlide === 'applyForm'}
        isDetailsActive={currSlide === 'details'}
        isEmailTemplateActive={currSlide === 'templates'}
        isScreeningQuestionsActive={currSlide === 'screening'}
        isScoreSettingActive={currSlide === 'resumeScore'}
        isWorkflowsActive={currSlide === 'workflow'}
        textJobName={formTitle}
        //
        slotSavedChanges={
          <>
            <SyncStatus status={jobForm.syncStatus} />
          </>
        }
        onClickPreview={{
          onClick: () => {
            window.open(
              `${process.env.NEXT_PUBLIC_WEBSITE}/job-post/${get(
                jobForm,
                'jobPostId',
                '',
              )}&preview=true`,
              '_blank',
            );
          },
        }}
        slotDisclaimerDetails={
          <>
            <SectionWarning
              warnings={warning}
              slidePath={'details'}
              currSlideNo={1}
            />
          </>
        }
        slotDisclaimerApplyForm={
          <>
            {/* <SectionWarning warnings={warning} slidePath={'details'} /> */}
          </>
        }
        slotDisclaimerScoreSetting={
          <>
            <SectionWarning
              warnings={warning}
              slidePath={'resumeScore'}
              currSlideNo={3}
            />
          </>
        }
        slotDisclaimerScreening={
          <>
            <SectionWarning
              warnings={warning}
              slidePath={'screening'}
              currSlideNo={4}
            />
          </>
        }
        slotDisclaimerWorkflow={
          <>
            <SectionWarning
              warnings={warning}
              slidePath={'workflow'}
              currSlideNo={5}
            />
          </>
        }
        slotEmailDisclaimer={
          <>
            <SectionWarning
              warnings={warning}
              slidePath={'templates'}
              currSlideNo={6}
            />
          </>
        }
        slotCloseJob={
          <>
            {jobForm.formType === 'edit' &&
              jobForm.jobPostStatus === 'draft' && (
                <CloseJob
                  onClickCloseJob={{
                    onClick: () => handleDeleteJob(),
                  }}
                  isCloseJob={false}
                  isDeleteJob={true}
                  isTextVisible={false}
                />
              )}

            {jobForm.jobPostStatus === 'published' && (
              <CloseJob
                onClickCloseJob={{
                  onClick: () => setIsDeletePopupOpen(true),
                }}
                isCloseJob={true}
              />
            )}
          </>
        }
        slotUnpublishDisclaimer={
          <>{isShowChangesWarn && <PublishDesclaimer />}</>
        }
        onClickPreviewChanges={{
          onClick: () => {
            window.open(
              `${process.env.NEXT_PUBLIC_WEBSITE}/job-post/${get(
                jobForm,
                'jobPostId',
                '',
              )}&preview=true`,
              '_blank',
            );
          },
        }}
        slotPublishButton={
          <>{jobForm.formType === 'edit' && <JobPublishButton />}</>
        }
      />
      <MuiPopup
        props={{
          onClose: () => {
            setIsDeletePopupOpen(false);
          },
          open: isDeletePopupOpen,
        }}
      >
        <Paper>
          <CloseJobPopup
            onClose={() => {
              setIsDeletePopupOpen(false);
            }}
          />
        </Paper>
      </MuiPopup>
    </>
  );
}

export default JobForm;

const slidePathToNum: Record<JobFormState['currSlide'], number> = {
  details: 1,
  applyForm: 2,
  resumeScore: 3,
  screening: 4,
  workflow: 5,
  templates: 6,
};
