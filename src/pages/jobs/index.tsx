import JobsProvider /*,{useJobs}*/ from '@context/JobsContext';

import Seo from '@/src/components/Common/Seo';
import DashboardComp from '@/src/components/JobsDashboard';

const Dashboard = () => {
  return (
    <>
      <Seo
        title='Aglint | Jobs'
        description='AI Powered Talent Development Platform.'
      />
      <DashboardComp />
    </>
  );
};

Dashboard.getProvider = function getProvider(page) {
  return <JobsProvider>{page}</JobsProvider>;
};

export default Dashboard;
