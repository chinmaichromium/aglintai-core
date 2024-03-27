import { useRouter } from 'next/router';
import React from 'react';

import { CreateNewJob } from '@/devlink';
import { Breadcrum, PageLayout } from '@/devlink2';
import { usePhoneScreening } from '@/src/context/PhoneScreeningContext/PhoneScreeningContext';

import SyncStatus from '../JobsDashboard/JobPostCreateUpdate/JobPostFormSlides/SyncStatus';
import ScreeningComp from './TemplateComps/ScreeningComp';
import ScreeningSideBar from './TemplateComps/SideBar';

export const ScreeningDashboardBread = () => {
  const router = useRouter();
  const { phoneScreenignForm } = usePhoneScreening();
  return (
    <>
      <Breadcrum
        textName={`Screening`}
        isLink={true}
        onClickLink={{
          onClick: () => {
            router.push('/screening');
          },
        }}
      />
      <Breadcrum textName={phoneScreenignForm.title} showArrow={true} />
    </>
  );
};

const PhoneScreenTemplate = () => {
  const { phoneScreenignForm } = usePhoneScreening();
  return (
    <>
      <PageLayout
        slotTopbarLeft={<ScreeningDashboardBread />}
        slotBody={
          <CreateNewJob
            isHeaderVisible={false}
            isSideNavVisible={false}
            isDetailsActive={false}
            isEmailTemplateActive={false}
            isScreeningQuestionsActive={false}
            isScoreSettingActive={false}
            isWorkflowsActive={false}
            textJobName={false}
            isScreeningActive
            isProceedVisible={false}
            slotCreateJob={
              <>
                <ScreeningComp />
              </>
            }
            slotSavedChanges={
              <>
                <SyncStatus status={phoneScreenignForm.syncStatus} />
              </>
            }
            slotSideSection={<ScreeningSideBar />}
          />
        }
      />
    </>
  );
};

export default PhoneScreenTemplate;
