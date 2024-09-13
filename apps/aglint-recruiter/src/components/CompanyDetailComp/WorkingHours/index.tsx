import type { schedulingSettingType } from '@aglint/shared-types';
import { toast } from '@components/hooks/use-toast';
import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';

import type { TimezoneObj } from '@/components/CompanyDetailComp/Scheduling';

import BreakTimeCard from './BreakTime';
import TimeZone from './TimeZone';
import WorkTime from './WorkTime';

export default function WorkingHour({
  updateSettings,
  initialData,
}: {
  updateSettings: any;
  initialData: schedulingSettingType;
}) {
  const [workingHours, setWorkingHours] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState<TimezoneObj>(null);
  const [selectedHourBreak, setSelectedHourBreak] = useState<{
    start_time: string;
    end_time: string;
  } | null>({ start_time: '', end_time: '' });

  useEffect(() => {
    initialLoad();
  }, []);

  function initialLoad() {
    if (initialData) {
      const schedulingSettingData = cloneDeep(
        initialData,
      ) as schedulingSettingType;
      setSelectedTimeZone({ ...schedulingSettingData.timeZone } as TimezoneObj);
      setSelectedHourBreak({
        start_time: schedulingSettingData.break_hour?.start_time,
        end_time: schedulingSettingData.break_hour?.end_time,
      });
      setWorkingHours(cloneDeep(schedulingSettingData.workingHours));
    }
  }

  const handleUpdate = async (updatedData) => {
    try {
      const schedulingSettingObj = {
        ...initialData,
        ...updatedData,
      } as schedulingSettingType;
      await updateSettings(schedulingSettingObj);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  };
  return (
    <div className='flex flex-col w-[660px] gap-4 mx-auto mb-8'>
      <TimeZone
        timeZone={initialData?.timeZone?.label}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
        handleUpdate={handleUpdate}
      />
      <WorkTime
        workingHours={workingHours}
        setWorkingHours={setWorkingHours}
        handleUpdate={handleUpdate}
      />
      <BreakTimeCard
        breaktime={selectedHourBreak}
        setSelectedHourBreak={setSelectedHourBreak}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
