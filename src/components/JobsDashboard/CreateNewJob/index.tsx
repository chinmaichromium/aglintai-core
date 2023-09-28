import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { get } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';

import { CreateNewJobDrawer, StepBottomProgress } from '@/devlink';
import { pageRoutes } from '@/src/utils/pageRouting';
import toast from '@/src/utils/toast';

import SelectImportMethod from './Forms/SelectImportMethod';
import StepFour from './Forms/StepFour';
import StepOne from './Forms/StepOne';
import Stepthree from './Forms/Stepthree';
import StepTwo from './Forms/StepTwo';
import SuccessPage from './Forms/SuccessPage';
import { useJobForm } from './JobPostFormProvider';

type CreateNewJobParams = {
  open: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateNewJob({ open, setDrawerOpen }: CreateNewJobParams) {
  const router = useRouter();
  const { jobForm, dispatch } = useJobForm();
  const [formError, setFormError] = useState({
    jobTitle: '',
    company: '',
    location: '',
  });

  let formSlide = null;
  const { slideNo } = jobForm;
  if (slideNo === 0) {
    formSlide = <SelectImportMethod nextSlide={() => changeSlide(1)} />;
  } else if (slideNo === 1) {
    formSlide = <StepOne formError={formError} setFormError={setFormError} />;
  } else if (slideNo === 2) {
    formSlide = <StepTwo />;
  } else if (slideNo === 3) {
    formSlide = <Stepthree />;
  } else if (slideNo == 4) {
    formSlide = <StepFour />;
  } else if (slideNo == 5) {
    formSlide = <SuccessPage />;
  }
  const changeSlide = async (newSlideNo: number) => {
    try {
      dispatch({
        type: 'moveToSlide',
        payload: {
          slideNo: newSlideNo,
        },
      });
    } catch (err) {
      // console.log(err);
    }
  };

  const isformValid = () => {
    let flag = true;

    const { company, jobTitle, jobLocation } = jobForm.formFields;
    if (slideNo === 2) {
      if (isEmpty(jobTitle)) {
        flag = false;
        setFormError((p) => ({ ...p, jobTitle: 'Please Enter Job Title' }));
      }

      if (isEmpty(company)) {
        flag = false;
        setFormError((p) => ({ ...p, company: 'Please Enter Company Name' }));
      }

      if (isEmpty(jobLocation)) {
        flag = false;
        setFormError((p) => ({ ...p, location: 'Please Enter Location' }));
      }
    }

    if (slideNo == 2) {
      if (isEmpty(get(jobForm, 'formFields.jobDescription', ''))) {
        toast.error('Please provide job description to move to next Step');
        return false;
      }

      if (isEmpty(get(jobForm, 'formFields.skills', []))) {
        toast.error('Please provide required skills to move to next Step');
        return false;
      }
    }
    return flag;
  };

  const handleClickBack = () => {
    changeSlide(slideNo !== 0 ? slideNo - 1 : slideNo);
  };

  const handleClickContinue = () => {
    if (slideNo === 2) {
      if (!isformValid()) return;
    }
    changeSlide(slideNo + 1);
  };

  const handleDrawerClose = () => {
    router.push(pageRoutes.JOBS, undefined, {
      shallow: true,
    });
    setDrawerOpen(() => false);
    dispatch({ type: 'closeForm' });
  };
  return (
    <>
      <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
        <Stack p={2} width={'500px'} position={'relative'} minHeight={'100vh'}>
          <CreateNewJobDrawer
            onClickClose={{ onClick: handleDrawerClose }}
            slotNewJobStep={formSlide}
            slotBottomButtonProgress={
              slideNo >= 1 &&
              slideNo < 5 && (
                <StepBottomProgress
                  textStepCount={`Step ${slideNo} of 4`}
                  onClickBack={{
                    onClick: handleClickBack,
                  }}
                  onClickContinue={{
                    onClick: handleClickContinue,
                  }}
                  slotProgressBar={
                    <>
                      <LinearProgress
                        variant='determinate'
                        color='primary'
                        value={(slideNo / 4) * 100}
                      />
                    </>
                  }
                  // isDraftSaved={false}
                  // isSavetoDraftVisible={true}
                  isSkipButtonVisible={slideNo == 3 || slideNo == 4}
                  onClickSkip={{
                    onClick: handleDrawerClose,
                  }}
                />
              )
            }
          />
        </Stack>
      </Drawer>
    </>
  );
}

export default CreateNewJob;
