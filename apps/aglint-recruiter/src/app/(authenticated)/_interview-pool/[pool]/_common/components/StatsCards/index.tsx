import CandidatePipeline from './candidatePipeline';
import InterviewerPerformance from './interviewerPerformance';
import InterviewStatistics from './interviewStatistics';

function StatsCards({ module_id }: { module_id: string }) {
  return (
    <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <InterviewStatistics module_id={module_id} />

      <CandidatePipeline module_id={module_id} />

      <InterviewerPerformance module_id={module_id} />
    </div>
  );
}

export default StatsCards;
