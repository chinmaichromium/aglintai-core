import React from 'react';

import Seo from '@/components/Common/Seo';
import Interviewer from '@/components/Scheduling/Interviewers/InterviewerDetail';
import { InterviewerContextProvider } from '@/context/InterviewerContext/InterviewerContext';

function UserProfilePage() {
  return (
    <>
      <Seo
        title={`Interviewer - Scheduling | Aglint AI`}
        description='AI for People Products'
      />
      <Interviewer />
    </>
  );
}

UserProfilePage.privateProvider = function privateProvider(page) {
  return <InterviewerContextProvider>{page}</InterviewerContextProvider>;
};

export default UserProfilePage;
