import ReorderableInterviewPlan from '@components/reorderable-interview-plan';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';

import { Loader } from '@/components/Common/Loader';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRouterPro } from '@/hooks/useRouterPro';
import { Resume } from '@/jobs/job/application/components/Resume';
import { Details } from '@/jobs/job/application/components/Scoring';

import { useApplicationMeta } from '../hooks/useApplicationMeta';
import { Activity } from './Activity';
import BreadCrumb from './BreadCrumb';
import CandidateInfo from './CandidateInfo';
import InterviewTabContent from './InterviewTab';
import Requests from './Requests';
import TabsComp, { type TabsType } from './TabPills';

function ApplicationDetailComp() {
  const router = useRouterPro();
  const tab = router.queryParams.tab as TabsType;
  const application_id = router.params.application;
  const { isLoading } = useApplicationMeta();
  const { isShowFeature } = useAuthDetails();

  if (isLoading) {
    return <Loader />;
  }

  const renderTabContent = () => {
    switch (tab) {
      case 'interview':
        return <InterviewTabContent />;
      case 'resume':
        return <Resume />;
      case 'scoring':
        return <Details />;
      case 'candidate_stages':
        return (
          <ReorderableInterviewPlan
            applicationId={application_id}
            jobId={null}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='container-lg mx-auto h-full w-full px-12'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h1 className='mb-2 text-2xl font-bold'>Application Details</h1>
          <BreadCrumb />
        </div>
      </div>
      <div className='flex'>
        <div className='flex w-9/12 flex-col gap-4 pr-6'>
          <CandidateInfo />
          <TabsComp />
          {renderTabContent()}
        </div>
        <div className='w-3/12'>
          <div className='flex flex-col space-y-4'>
            {isShowFeature('SCHEDULING') ? (
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <Requests />
                </CardContent>
              </Card>
            ) : null}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Activity />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetailComp;