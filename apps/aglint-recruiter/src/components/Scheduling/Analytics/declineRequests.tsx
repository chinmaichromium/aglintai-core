import Stack from '@mui/material/Stack';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  LinearScale,
  Tooltip,
} from 'chart.js/auto';
import { memo } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  SchedulingAnalyticsContextType,
  useSchedulingAnalytics,
} from '@/src/context/SchedulingAnalytics';

import Loader from '../../Common/Loader';

export const DeclineRequests = memo(() => {
  const {
    decline_requests: { data, status },
  } = useSchedulingAnalytics();
  if (status === 'error') return <>Error</>;
  if (status === 'pending')
    return (
      <Stack style={{ height: '500px', width: '100%' }}>
        <Loader />
      </Stack>
    );
  return (
    <Stack style={{ height: '500px', width: '100%' }}>
      <BarChart data={data} />;
    </Stack>
  );
});
DeclineRequests.displayName = 'DeclineRequests';

ChartJs.register(BarElement, Tooltip, CategoryScale, LinearScale);

type Props = Pick<SchedulingAnalyticsContextType['decline_requests'], 'data'>;

const BarChart = memo(({ data }: Props) => {
  const a = [
    { completed_at: 'Jul', count: 6 },
    { completed_at: 'Aug', count: 10 },
  ] satisfies typeof data;
  const { labels, counts } = ([...data, ...a] ?? []).reduce(
    (acc, curr) => {
      acc.labels.push(curr.completed_at ?? '--');
      acc.counts.push(curr.count);
      return acc;
    },
    { labels: [], counts: [] } satisfies { labels: string[]; counts: number[] },
  );
  const bars = {
    labels: labels,
    datasets: [
      {
        label: 'Decline requests',
        data: counts,
        backgroundColor: '#8d8d86',
        borderRadius: 8,
        borderSkipped: false,
        grouped: true,
        barThickness: 40,
      },
    ],
  };
  return (
    <Bar
      options={{
        indexAxis: 'y',
        elements: {
          bar: {
            borderRadius: 20,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              title: (values) => labels[values[0].dataIndex],
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            title: {
              display: false,
              font: { weight: 'bold' },
              text: 'Dates',
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
              display: false,
              font: { weight: 'bold' },
              text: 'Decline Requests',
            },
            border: {
              color: 'transparent',
            },
            grid: {
              display: false,
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },
        },
      }}
      data={bars}
    />
  );
});
BarChart.displayName = 'BarChart';
