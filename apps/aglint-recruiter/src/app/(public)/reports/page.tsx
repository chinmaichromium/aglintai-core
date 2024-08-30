'use client';
import CompletedInterviewsOverTime from '@/src/components/Charts/ CompletedInterviewsOverTime';
import ConfirmationVsCompletion from '@/src/components/Charts/ConfirmationVsCompletiont';
import { ConversionRateRadialChart } from '@/src/components/Charts/ConversionRateRadialChart';
import InterviewTypeDistribution from '@/src/components/Charts/InterviewTypeDistribution';
import JobDashboardChart from '@/src/components/Charts/JobDashboardChart';
import MonthlyRequestWorkloadChart from '@/src/components/Charts/MonthlyRequestWorkloadByType';
import RequestHandlingOverQuartersChart from '@/src/components/Charts/RequestHandlingOverQuarters';
import { RequestTrend } from '@/src/components/Charts/RequestTrend';
import RequestTypesDelaysChart from '@/src/components/Charts/RequestTypesDelaysChart';
import UrgentVsStandard from '@/src/components/Charts/UrgentVsStandard';

export default function ReportsPage() {
  return (
    <div>
      <CompletedInterviewsOverTime />
      <ConversionRateRadialChart />
      <JobDashboardChart />
      <RequestTrend />
      <div className='grid grid-cols-2 gap-4'>
        <UrgentVsStandard />
        <RequestTypesDelaysChart />
        <MonthlyRequestWorkloadChart />
        <RequestHandlingOverQuartersChart />
        <InterviewTypeDistribution />
        <ConfirmationVsCompletion />
      </div>
    </div>
  );
}
