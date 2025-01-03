import { type SchedulingSettingType } from '@aglint/shared-types';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import {
  Section,
  SectionActions,
  SectionHeader,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import { ScrollArea } from '@components/ui/scroll-area';
import { Skeleton } from '@components/ui/skeleton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HeatMapGrid } from 'react-grid-heatmap';

import { type Meeting } from './type';
import {
  filling2dArray,
  getDatesArray,
  type GroupedEvents,
  transposeArray,
  useUserSchedules,
} from './utils';

export default function Heatmap({
  loadSetting,
}: {
  loadSetting: SchedulingSettingType['interviewLoad'];
}) {
  const [arrayDates, setArrayDates] = useState<string[]>([]);
  const [dayCount, setDayCount] = useState<{ start: number; end: number }>({
    start: -7,
    end: 26,
  });
  const [maxCount, setMaxCountInterviews] = useState(
    loadSetting.dailyLimit.value,
  );
  const params = useParams();
  const user_id = params?.user ? (params.user as string) : '';
  const router = useRouter();

  const { data, isLoading } = useUserSchedules(user_id);

  useEffect(() => {
    setMaxCountInterviews(
      Math.max(loadSetting?.dailyLimit.value, 7),
      // Math.max(loadSetting?.dailyLimit.value, data?.maxInterviewsCount ?? 0),
    );
  }, [data]);

  //dates
  const startDate = dayjsLocal(
    new Date().setDate(new Date().getDate() + dayCount.start),
  ).format('YYYY-MM-DD');

  const endDate = dayjsLocal(
    new Date().setDate(new Date().getDate() + dayCount.end),
  ).format('YYYY-MM-DD');

  const startDateUI = dayjsLocal(
    new Date().setDate(new Date().getDate() + dayCount.start),
  ).format('MMM DD YYYY');

  const endDateUI = dayjsLocal(
    new Date().setDate(new Date().getDate() + dayCount.end),
  ).format('MMM DD YYYY');

  const datesArray = getDatesArray(startDate, endDate, 'YYYY-MM-DD');

  useEffect(() => {
    setArrayDates(getDatesArray(startDate, endDate, 'YYYY-MM-DD'));
  }, [dayCount]);

  const todayTypeText =
    loadSetting?.dailyLimit.type === 'Interviews' ? 'Interview' : 'Hour';

  const weeklyTypeText =
    loadSetting?.weeklyLimit.type === 'Interviews' ? 'Interview' : 'Hour';

  const heatMapData = arrayStructure({
    datesArray,
    gridData: data?.groupedData,
    maxCount,
  });
  const yLabel: string[] = maxCount
    ? new Array(Math.ceil(maxCount)).fill('')
    : [];
  const xLabel: string[] = datesArray.map(() => 'd');

  const mapDatas: number[][] = heatMapData.map((data) => data.map(() => 1));

  return (
    <>
      {isLoading ? (
        <Skeleton className='h-[150] w-[400px]' />
      ) : (
        <Section>
          <SectionHeader>
            <SectionHeaderText>
              <SectionTitle>Meetings overview</SectionTitle>
            </SectionHeaderText>
            <SectionActions>
              <div className='mt-1 flex items-center justify-between gap-2'>
                <div className='hidden gap-4'>
                  <div className='flex gap-1'>
                    <p className='text-sm'>Daily :</p>
                    <p className='text-sm'>{loadSetting?.dailyLimit.value}</p>
                    <p className='text-sm'>{todayTypeText}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='text-sm'> Weekly : </p>
                    <p className='text-sm'>{loadSetting?.weeklyLimit.value}</p>
                    <p className='text-sm'>{weeklyTypeText}</p>
                  </div>
                </div>

                <div className='flex flex-row items-center gap-2'>
                  <p className='text-sm text-muted-foreground'>
                    Activity on{' '}
                    <span>
                      {startDateUI} - {endDateUI}
                    </span>
                  </p>
                  <div
                    className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm bg-muted'
                    onClick={() =>
                      setDayCount((pre) => ({
                        start: pre.start === 21 ? -7 : pre.start - 28,
                        end: pre.end - 28,
                      }))
                    }
                  >
                    <ChevronLeft className='h-3 w-3' />
                  </div>
                  <div
                    className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm bg-muted'
                    onClick={() =>
                      setDayCount((pre) => ({
                        start: pre.start === -7 ? 21 : pre.start + 28,
                        end: pre.end + 28,
                      }))
                    }
                  >
                    <ChevronRight className='h-3 w-3' />
                  </div>
                </div>
              </div>
            </SectionActions>
          </SectionHeader>
          <ScrollArea className='w-full'>
            <HeatMapGrid
              data={mapDatas}
              xLabels={xLabel}
              yLabels={yLabel}
              square
              cellHeight='17.3px'
              xLabelsPos='bottom'
              onClick={(x, y) => {
                if (heatMapData[x][y]?.meeting_id)
                  router.push(
                    `/interviews/view?meeting_id=${heatMapData[x][y].meeting_id}&tab=candidate_details`,
                  );
              }}
              yLabelsPos='left'
              xLabelsStyle={(index) => {
                const isToday = dayjsLocal(arrayDates[index]).isToday();
                return {
                  visibility: isToday ? 'visible' : 'hidden',
                  backgroundColor: isToday
                    ? 'hsl(var(--chart-5))'
                    : 'transparent',
                  height: '2px ',
                  padding: 0,
                  marginTop: '2px',
                  marginInline: '1px',
                  width: '17.3px',
                };
              }}
              yLabelsStyle={(index) => ({
                color: index % 1 === 0 ? '#777' : 'transparent',
                fontSize: '10px',
              })}
              cellStyle={(x: number, y: number) => {
                const value = heatMapData[x][y];

                return {
                  background:
                    value?.status === 'completed'
                      ? `hsl(var(--chart-1))`
                      : value?.status === 'confirmed'
                        ? `hsl(var(--chart-4))` // need confirm color
                        : value?.status === 'cancelled'
                          ? `hsl(var(--chart-2))`
                          : '#87878750',

                  fontSize: '4px',
                  borderRadius: '3px',
                  color: 'white',
                  border: 'none',
                  boxShadow: 'none',
                  margin: `1px`,
                };
              }}
            />
          </ScrollArea>
        </Section>
      )}
    </>
  );
}

const arrayStructure = ({
  datesArray,
  gridData,
  maxCount,
}: {
  datesArray: any[];
  gridData: GroupedEvents;
  maxCount: number;
}): Meeting[][] => {
  if (gridData) {
    Object.keys(gridData).forEach((date) => {
      if (datesArray.includes(date)) {
        const index = datesArray.indexOf(date);
        datesArray[index] = gridData[date];
      }
    });
  }

  const newDataFill1Array: Meeting[][] = datesArray?.map((data) =>
    typeof data === 'string' ? [] : data,
  );

  const filled2d = filling2dArray(newDataFill1Array, maxCount);
  return transposeArray(filled2d);
};
