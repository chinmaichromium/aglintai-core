import { JobDetails } from '@devlink2/JobDetails';
import { PageLayout } from '@devlink2/PageLayout';
import { CircularProgress, Stack } from '@mui/material';

import Loader from '@/components/Common/Loader';
import { useApplicationsChecklist, useJob } from '@/job/hooks';

import { Actions } from './Actions';
import DNDProvider from './DNDProvider';
import Filters from './Filters';
import { JobNotFound } from './JobNotFound';
import { SharedActions } from './SharedTopNav/actions';
import { SharedBreadCrumbs } from './SharedTopNav/breadcrumbs';
import { Table } from './Table';
import Tabs from './Tabs';

export const ApplicationsDashboard = () => {
  const { job, jobLoad } = useJob();
  return jobLoad ? (
    job ? (
      <ApplicationsComponent />
    ) : (
      <JobNotFound />
    )
  ) : (
    <Stack width={'100%'} height={'100vh'} justifyContent={'center'}>
      <Loader />
    </Stack>
  );
};

const ApplicationsComponent = () => {
  const checklist = useApplicationsChecklist();
  return (
    <DNDProvider>
      <PageLayout
        slotBody={
          <JobDetails
            isImportCandidates={false}
            isFetchingPillVisible={false}
            slotRefresh={<></>}
            slotShowFilterButton={<></>}
            slotLoadingLottie={
              <CircularProgress
                style={{
                  color: '#17494D',
                  width: '12px',
                  height: '12px',
                }}
              />
            }
            slotBreadcrumb={<></>}
            slotGlobalBanner={<></>}
            slotTabs={<Tabs />}
            slotTable={<Table />}
            isFilterVisible={true}
            slotFilters={checklist.length === 0 ? <Filters /> : <Actions />}
          />
        }
        slotTopbarRight={<SharedActions />}
        slotTopbarLeft={<SharedBreadCrumbs />}
      />
    </DNDProvider>
  );
};