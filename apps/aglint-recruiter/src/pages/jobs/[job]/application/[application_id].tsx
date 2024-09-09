import ApplicationDetail from '@/components/ApplicationDetail';
import {
  ApplicationsProvider,
  ApplicationsStoreProvider,
  JobProvider,
} from '@/job/contexts';

function ApplicationDetailPage() {
  return (
    <>
      <ApplicationDetail />
    </>
  );
}

ApplicationDetailPage.privateProvider = (page) => (
  <JobProvider>
    <ApplicationsStoreProvider>
      <ApplicationsProvider>{page}</ApplicationsProvider>
    </ApplicationsStoreProvider>
  </JobProvider>
);

export default ApplicationDetailPage;
