import Seo from '@/src/components/Common/Seo';
import SchedulingViewComp from '@/src/components/Scheduling/ScheduleDetails';

function SchedulingViewPage() {
  return (
    <>
      <Seo title={`Scheduling`} description='AI for People Products' />
      <SchedulingViewComp />
    </>
  );
}

export default SchedulingViewPage;
