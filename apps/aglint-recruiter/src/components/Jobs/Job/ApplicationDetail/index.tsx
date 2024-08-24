import { useRouter } from 'next/router';

import { PageLayout } from '@/devlink2/PageLayout';
import { Application } from '@/src/context/ApplicationContext';

import { Settings } from '../Common/SharedTopNav/actions';
import BreadCrumb from './BreadCrumb';
import SlotBody from './SlotBody';

function ApplicationDetailComp() {
  const router = useRouter();
  const application_id = router.query.application_id as string;
  const job_id = router.query.id as string;

  return (
    <>
      <Application application_id={application_id} job_id={job_id}>
        <PageLayout
          slotTopbarLeft={<BreadCrumb />}
          slotBody={<SlotBody />}
          slotTopbarRight={<Settings />}
        />
      </Application>
    </>
  );
}

export default ApplicationDetailComp;
