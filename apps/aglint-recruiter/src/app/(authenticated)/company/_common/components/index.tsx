import { useRouterPro } from '@/hooks/useRouterPro';

import CompanyInfoComp from './CompanyDetails';
import Holidays from './Holidays';
import PortalSettings from './PortalSettings';
import RolesAndPermissionsComponent from './Roles';
import SchedulingSettings from './Scheduling';
import SchedulingReasons from './SchedulingReason';
import SettingsSubNabItem from './SideNav';
import type { CompanySettingTabsType } from './SideNav/utils';
import TeamManagement from './TeamManagement';
import SchedulerEmailTemps from './Templates';
import WorkingHour from './WorkingHours';

const CompanyDetailComp = () => {
  const router = useRouterPro();
  const tab = router?.queryParams?.tab as CompanySettingTabsType;
  return (
    <div className='container mx-auto'>
      <div className='mb-6 flex gap-6'>
        <div className='w-1/4'>
          <div className='sticky top-[32px]'>
            <SettingsSubNabItem />
          </div>
        </div>
        <div className='w-3/4'>
          {tab === 'company-info' && <CompanyInfoComp />}
          {tab === 'team' && <TeamManagement />}
          {tab === 'roles' && <RolesAndPermissionsComponent />}
          {tab === 'schedulingReasons' && <SchedulingReasons />}
          {tab === 'workingHours' && <WorkingHour />}
          {tab === 'holidays' && <Holidays />}
          {tab === 'scheduling' && <SchedulingSettings />}
          {tab === 'portalSettings' && <PortalSettings />}
          {(tab === 'emailTemplate' ||
            tab === 'slackTemplate' ||
            tab === 'agentTemplate' ||
            tab === 'calenderTemplate') && <SchedulerEmailTemps />}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailComp;
