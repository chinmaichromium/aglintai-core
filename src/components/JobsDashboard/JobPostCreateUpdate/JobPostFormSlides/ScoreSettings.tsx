import { Stack } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { ResumeScoreSetting } from '@/devlink';
import ScoreWheel, {
  ScoreWheelParams,
} from '@/src/components/Common/ScoreWheel';
import ScoreWheelControls from '@/src/components/Common/ScoreWheel/controls';

import { useJobForm } from '../JobPostFormProvider';

const ScoreSettings = () => {
  const { jobForm, handleUpdateFormFields, dispatch } = useJobForm();

  const setWeights = (p) => {
    let weights;
    const prevWeights = jobForm.formFields.resumeScoreSettings;
    if (typeof p === 'function') {
      weights = p();
    } else {
      weights = p;
    }
    handleUpdateFormFields({
      path: 'resumeScoreSettings',
      value: { ...prevWeights, ...weights },
    });
  };

  return (
    <ResumeScoreSetting
      isJobAdd={jobForm.formType == 'new'}
      slotScore={
        <>
          <Stack
            direction={'row'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            gap={'40px'}
          >
            <ScoreWheelControls
              weights={
                jobForm.formFields
                  .resumeScoreSettings as unknown as ScoreWheelParams
              }
              setWeights={
                setWeights as unknown as Dispatch<
                  SetStateAction<ScoreWheelParams>
                >
              }
            />
            <ScoreWheel
              id={'ScoreWheelSetting'}
              parameter_weights={jobForm.formFields.resumeScoreSettings}
            />
          </Stack>
        </>
      }
      isProceedDisable={false}
      onClickProceed={{
        onClick: () => {
          dispatch({
            type: 'moveToSlide',
            payload: {
              nextSlide: 'screening',
            },
          });
        },
      }}
    />
  );
};
export default ScoreSettings;
