import React from 'react';

import { AssessmentSuccessfull } from '@/devlink2';

function AssessmentThanksPage() {
  return (
    <div>
      <AssessmentSuccessfull />
    </div>
  );
}

export default AssessmentThanksPage;

AssessmentThanksPage.getLayout = (page) => {
  return <>{page}</>;
};

