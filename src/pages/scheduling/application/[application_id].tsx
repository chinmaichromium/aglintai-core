import Seo from '@/src/components/Common/Seo';
import SchedulingApplication from '@/src/components/Scheduling/AllSchedules/SchedulingApplication';

export default function SchedulingApplicationPage() {
  return (
    <>
      <Seo
        title={`Scheduling`}
        description='AI for People Products'
      />
      <SchedulingApplication />
    </>
  );
}
