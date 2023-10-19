import React from 'react';

import { InterviewCompleted } from '@/devlink';
import { useInterviewDetailsContext } from '@/src/context/InterviewDetails';

import CompleteLottie from './CompletedLottie';
import MuiAvatar from '../../Common/MuiAvatar';

function InterviewThanks() {
  const { jobDetails, candidateDetails } = useInterviewDetailsContext();
  return (
    <InterviewCompleted
      slotCompanyLogo={
        jobDetails?.logo ? (
          <MuiAvatar width={'60px'} height={'60px'} src={jobDetails?.logo} />
        ) : null
      }
      slotLottie={<CompleteLottie />}
      onClickSupport={{
        onClick: () => {
          window.open(
            `https://recruiter.aglinthq.com/support/create?id=${candidateDetails?.application_id}`,
          );
        },
      }}
      // textDescription={}
    />
  );
}

export default InterviewThanks;
