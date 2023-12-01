import { useEffect, useState } from 'react';

import { CompanySetting } from '@/devlink';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { YTransform } from '@/src/utils/framer-motions/Animation';

import AssessmentSettings from './AssessmentSettings';
import Assistant from './Assistant';
import CompanyInfoComp from './CompanyInfoComp';
import CompanyJdComp from './CompanyJdComp';
import EmailTemplate from './EmailTemplate';
import TeamManagement from './TeamManagement';
import {
  generateDepartments,
  generateRoles,
  generateTechnologies,
} from './utils';
import LoaderGrey from '../Common/LoaderGrey';

const CompanyDetailComp = () => {
  const { recruiter } = useAuthDetails();
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (recruiter?.id) {
      if (!localStorage?.getItem('departments')) {
        generateDepartments(recruiter.industry);
      }
      if (!localStorage?.getItem('technologies')) {
        generateTechnologies(recruiter.industry);
      }
      if (!localStorage?.getItem('roles')) {
        generateRoles(recruiter.industry);
      }
    }
  }, [recruiter]);

  return (
    <>
      <YTransform uniqueKey={1}>
        <CompanySetting
          slotSavingLottie={<LoaderGrey />}
          isSaving={isSaving}
          isSaved={!isSaving}
          slotCompanyInfo={<CompanyInfoComp setIsSaving={setIsSaving} />}
          slotCompanyJdSetting={<CompanyJdComp setIsSaving={setIsSaving} />}
          slotEmailTemplate={<EmailTemplate />}
          slotTeam={<TeamManagement />}
          slotAssesmentSetting={
            <AssessmentSettings setIsSaving={setIsSaving} />
          }
          slotAssisstantSettings={<Assistant />}
        />
      </YTransform>
    </>
  );
};

export default CompanyDetailComp;
