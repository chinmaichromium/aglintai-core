import {
  type InterviewLoadType,
  type SchedulingSettingType,
} from '@aglint/shared-types';
import { type CustomSchedulingSettingsUser } from '@aglint/shared-types/src/db/tables/recruiter_user.types';
import { toast } from '@components/hooks/use-toast';
import { ScrollArea } from '@components/ui/scroll-area';
import cloneDeep from 'lodash/cloneDeep';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

import { useTenantMembers } from '@/company/hooks';
import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';
import { useRouterPro } from '@/hooks/useRouterPro';
import { api } from '@/trpc/client';
import { type timeZone as timeZones } from '@/utils/timeZone';

import { EditAvailabilityForm } from './ui/EditAvailabilityFormUI';

export const LoadMax = {
  dailyHours: 8,
  dailyInterviews: 10,
  weeklyHours: 40,
  weeklyInterviews: 50,
};

type TimeZoneType = (typeof timeZones)[number];

export const EditAvailabiityDialog = ({
  setIsEditOpen,
  isEditOpen,
}: {
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  isEditOpen: boolean;
}) => {
  const { allMembers } = useTenantMembers();
  const router = useRouterPro();
  const user_id = router?.params?.user as string;
  const member = allMembers.find((mem) => mem.user_id === user_id);
  const [isSaving, setIsSaving] = useState(false);

  const { mutateAsync } = api.user.update_user.useMutation();
  // State variables for scheduling settings
  const [workingHours, setWorkingHours] = useState<
    SchedulingSettingType['workingHours']
  >([]);
  const [timeZone, setTimeZone] = useState<TimeZoneType | null>(null);

  // State variables for keywords
  const [freeKeyWords, setFreeKeywords] = useState<string[]>([]);
  const [softConflictsKeyWords, setSoftConflictsKeyWords] = useState<string[]>(
    [],
  );
  const [outOfOffice, setOutOfOffice] = useState<string[]>([]);
  const [recruitingBlocks, setRecruitingBlocks] = useState<string[]>([]);

  // State variables for interview limits
  const [dailyLmit, setDailyLimit] = useState<InterviewLoadType['daily']>({
    type: 'Hours',
    value: 20,
    max: LoadMax.dailyHours,
  });
  const [weeklyLmit, setWeeklyLimit] = useState<InterviewLoadType['weekly']>({
    type: 'Hours',
    value: 10,
    max: LoadMax.weeklyHours,
  });

  const handleDailyValue = (value: number) => {
    setDailyLimit((pre) => ({
      ...pre,
      max: pre.type === 'Hours' ? LoadMax.dailyHours : LoadMax.dailyInterviews,
      value:
        pre.type === 'Hours'
          ? value > LoadMax.dailyHours
            ? LoadMax.dailyHours
            : value
          : value > LoadMax.dailyInterviews
            ? LoadMax.dailyInterviews
            : value,
    }));
  };

  const handleWeeklyValue = (value: number) => {
    setWeeklyLimit((pre) => ({
      ...pre,
      max:
        pre.type === 'Hours' ? LoadMax.weeklyHours : LoadMax.weeklyInterviews,
      value:
        pre.type === 'Hours'
          ? value > LoadMax.weeklyHours
            ? LoadMax.weeklyHours
            : value
          : value > LoadMax.weeklyInterviews
            ? LoadMax.weeklyInterviews
            : value,
    }));
  };
  const handleType = (type: 'Hours' | 'Interviews') => {
    setDailyLimit((pre) => ({
      ...pre,
      type,
    }));
    setWeeklyLimit((pre) => ({
      ...pre,
      type,
    }));
    handleDailyValue(dailyLmit.value);
    handleWeeklyValue(weeklyLmit.value);
  };

  function initialLoad() {
    if (schedulingSettings) {
      const schedulingSettingData = cloneDeep(
        schedulingSettings,
      ) as SchedulingSettingType;

      const workingHoursCopy = cloneDeep(schedulingSettingData.workingHours);
      const timeZoneCopy = cloneDeep(
        schedulingSettingData.timeZone,
      ) as TimeZoneType;

      setDailyLimit({
        type: schedulingSettingData.interviewLoad.dailyLimit.type,
        value: schedulingSettingData.interviewLoad.dailyLimit.value,
        max:
          schedulingSettingData.interviewLoad.dailyLimit.type === 'Hours'
            ? LoadMax.dailyHours
            : LoadMax.dailyInterviews,
      });

      setWeeklyLimit({
        type: schedulingSettingData.interviewLoad.weeklyLimit.type,
        value: schedulingSettingData.interviewLoad.weeklyLimit.value,
        max:
          schedulingSettingData.interviewLoad.dailyLimit.type === 'Hours'
            ? LoadMax.weeklyHours
            : LoadMax.weeklyInterviews,
      });

      setTimeZone(timeZoneCopy);
      setWorkingHours(workingHoursCopy);
      setFreeKeywords(schedulingSettingData?.schedulingKeyWords?.free);
      setSoftConflictsKeyWords(
        schedulingSettingData?.schedulingKeyWords?.SoftConflicts || [],
      );
      setOutOfOffice(
        schedulingSettingData?.schedulingKeyWords?.outOfOffice || [],
      );
      setRecruitingBlocks(
        schedulingSettingData?.schedulingKeyWords?.recruitingBlocks || [],
      );
    }
  }

  useEffect(() => {
    initialLoad();
  }, []);

  const keywords = [
    {
      title: 'Free',
      description:
        'When these keywords appear in a calendar event title, overlapping interviews will not be considered scheduling conflicts.',
      value: freeKeyWords,
      changeHandler: setFreeKeywords,
    },
    {
      title: 'Soft Conflicts',
      description:
        'When these keywords are found in a calendar event title, overlapping interviews will be marked as soft conflicts and will require your confirmation to schedule.',
      value: softConflictsKeyWords,
      changeHandler: setSoftConflictsKeyWords,
    },
    {
      title: 'Out of Office',
      description:
        'When any of these specified keywords appear in a calendar event title, the day will be considered an Out of Office day, and interviews will not be scheduled.',
      value: outOfOffice,
      changeHandler: setOutOfOffice,
    },
    {
      title: 'Recruiting Blocks',
      description:
        ' If these keywords are found in a calendar event title, these blocks will be first preference for scheduling interviews.',
      value: recruitingBlocks,
      changeHandler: setRecruitingBlocks,
    },
  ];

  if (!member) return null;

  const schedulingSettings = member?.scheduling_settings;

  const updateHandle = async () => {
    if (!timeZone || !workingHours)
      return toast({ title: 'Please fill required fields' });

    try {
      setIsSaving(true);
      const schedulingSettingObj: CustomSchedulingSettingsUser = {
        ...schedulingSettings,
        interviewLoad: {
          dailyLimit: {
            type: dailyLmit.type,
            value: dailyLmit.value,
          },
          weeklyLimit: {
            type: weeklyLmit.type,
            value: weeklyLmit.value,
          },
        },
        timeZone: timeZone,
        workingHours: workingHours,
        schedulingKeyWords: {
          free: freeKeyWords,
          SoftConflicts: softConflictsKeyWords,
          outOfOffice: outOfOffice,
          recruitingBlocks: recruitingBlocks,
        },
      };

      await mutateAsync({
        scheduling_settings: schedulingSettingObj,
        user_id,
      });
      toast({ title: 'Availability update Successfully' });
      setIsEditOpen(false);
    } catch (e) {
      toast({ title: 'Availability update failed', variant: 'destructive' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <UIDialog
        open={isEditOpen}
        title='Update Availability'
        size='xl'
        onClose={() => setIsEditOpen(false)}
        slotButtons={
          <>
            <UIButton
              variant='secondary'
              onClick={() => {
                if (!isSaving) setIsEditOpen(false);
              }}
            >
              Cancel
            </UIButton>
            <UIButton
              isLoading={isSaving}
              disabled={isSaving}
              onClick={updateHandle}
            >
              Update
            </UIButton>
          </>
        }
      >
        <ScrollArea>
          <EditAvailabilityForm
            dailyLimit={dailyLmit}
            handleDailyValue={handleDailyValue}
            handleType={handleType}
            handleWeeklyValue={handleWeeklyValue}
            keywords={keywords}
            setTimeZone={setTimeZone}
            setWorkingHours={setWorkingHours}
            timeZone={timeZone || null}
            weeklyLmit={weeklyLmit}
            workingHours={workingHours}
          />
        </ScrollArea>
      </UIDialog>
    </>
  );
};
