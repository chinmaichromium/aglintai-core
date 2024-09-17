import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  LinearScale,
  Tooltip,
} from 'chart.js/auto';
import { capitalize } from 'lodash';
import { BarChart2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { useInterviewConversion } from '@/queries/scheduling-dashboard';

import SchedulingDropdown from './SchedulingDropdown';
import { interviewConversionTimeFormat } from './utils';

const InterviewConversion = () => {
  const [type, setType] =
    useState<InterviewConversionGraphProps['type']>('month');
  return (
    <>
      <div className='h-full w-full'>
        <div className='flex flex-col space-y-4'>
          <div className='flex justify-end'>
            <SchedulingDropdown type={type} setType={setType} />
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <InterviewConversionGraph type={type} />
          </div>
        </div>
      </div>
    </>
  );
};

type InterviewConversionGraphProps = {
  type: Parameters<typeof useInterviewConversion>[0];
};

const InterviewConversionGraph = ({ type }: InterviewConversionGraphProps) => {
  const { data, status } = useInterviewConversion(type);

  if (status === 'pending')
    return (
      <div className='flex h-[350px] items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin text-gray-400' />
      </div>
    );

  if (!(!!data && !!Array.isArray(data) && data.length !== 0))
    return (
      <div className='h-[296px]'>
        <div className='flex h-full flex-col items-center justify-center'>
          <BarChart2 className='h-12 w-12 text-gray-400' />
          <p className='mt-2 text-sm text-gray-500'>No data available</p>
        </div>
      </div>
    );

  const interviewConversion = interviewConversionTimeFormat(type, data);
  return (
    <InterviewConversionComponent
      key={`InterviewConversionComponent${type}`}
      interviewConversion={interviewConversion}
      type={type}
    />
  );
};

export default InterviewConversion;

type InterviewConversionProps = {
  interviewConversion: ReturnType<typeof useInterviewConversion>['data'];
  type: InterviewConversionGraphProps['type'];
};

const InterviewConversionComponent = ({
  interviewConversion,
  type,
}: InterviewConversionProps) => {
  return <LineChart interviewConversion={interviewConversion} type={type} />;
};

ChartJs.register(BarElement, Tooltip, CategoryScale, LinearScale);

const LineChart = ({ interviewConversion, type }: InterviewConversionProps) => {
  const matches = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 1920px)').matches;
    }
    return false;
  }, []);
  const { names, counts, pointBackgroundColor } = interviewConversion.reduce(
    (acc, { timeline, count }) => {
      acc.names.push(timeline);
      acc.counts.push(count);
      acc.pointBackgroundColor.push('#8d8d8690');
      return acc;
    },
    { names: [], counts: [], pointBackgroundColor: [] },
  );
  const dataLines = {
    labels: names,
    datasets: [
      {
        label: 'Offers',
        fill: true,
        backgroundColor: (context) => {
          const bgColor = ['#68737d25', 'transparent'];
          if (!context.chart.chartArea) return;
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        },
        data: counts,
        borderColor: '#bcbbb5',
        pointBackgroundColor,
        tension: 0.3,
      },
    ],
  };

  return (
    <Line
      id='scheduling_dashboard_line_graph'
      options={{
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: matches ? 4 : 3,
        plugins: {
          tooltip: {
            callbacks: {
              title: (values) => `${values[0].label}`, //year${+values[0].label === 1 ? '' : 's'}
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              font: { weight: 'bold' },
              text: `${capitalize(type)}s`,
            },
            border: {
              color: 'transparent',
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              font: { weight: 'bold' },
              text: 'Offers',
            },
            border: {
              color: 'transparent',
            },
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },
        },
      }}
      data={dataLines}
    />
  );
};
