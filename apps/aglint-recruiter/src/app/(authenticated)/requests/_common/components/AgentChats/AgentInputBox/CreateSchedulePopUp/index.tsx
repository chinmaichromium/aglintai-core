import { dayjsLocal, getFullName } from '@aglint/shared-utils';
import { useRequests } from '@requests/hooks';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

import { useTenant } from '@/company/hooks';
import { UIButton } from '@/components/Common/UIButton';

import { type selectedItemsType } from '../utils';
import SelectScheduleDate from './SelectScheduleDate';

function CreateSchedulePopUp({
  selectedItems,
  setSelectedItems,
  setText,
}: {
  selectedItems: selectedItemsType | null;
  // eslint-disable-next-line no-unused-vars
  setSelectedItems: (x: selectedItemsType | null) => void;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { handleAsyncCreateRequests } = useRequests();
  const { recruiter_user } = useTenant();
  const [loading, setLoading] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({
    start_date: dayjsLocal().toString(),
    end_date: dayjsLocal().add(7, 'day').toString(),
  });
  const assigner = 'user';
  const assignerText =
    assigner === 'user'
      ? `assign to ${getFullName(recruiter_user.first_name, recruiter_user.last_name)}`
      : assigner === 'email'
        ? 'send an email'
        : assigner === 'phone'
          ? 'make a phone call'
          : '';
  const candidate = selectedItems?.applicant_name.length
    ? selectedItems?.applicant_name[0]?.name
    : `{{candidate}}`;
  const scheduleType = selectedItems?.schedule_type.length
    ? selectedItems?.schedule_type[0]?.name
    : '{{schedule_type}}';
  const interviewName = selectedItems?.interview_name.length
    ? selectedItems?.interview_name.map((ele) => ele.name).join(',')
    : '{{interviews}}';
  async function createNewRequest() {
    const selectedSession = selectedItems?.interview_name;
    if (selectedSession?.length && selectedItems?.applicant_name.length) {
      setLoading(true);
      await handleAsyncCreateRequests({
        payload: {
          request: {
            priority: 'standard',
            assigner_id: recruiter_user.user_id,
            assignee_id: recruiter_user.user_id,
            title: `${getFullName(recruiter_user.first_name, recruiter_user.last_name)} requested to schedule a ${selectedSession.map((ele) => ele.name).join(' ,')} for ${selectedItems.applicant_name[0].name}`,
            status: 'in_progress',
            type: 'schedule_request',
            schedule_start_date: selectedDateRange.start_date,
            schedule_end_date: selectedDateRange.end_date,
            note: null,
          },
          application: selectedItems?.applicant_name[0].id,
          sessions: selectedItems?.interview_name.map((ele) => ele.id),
        },
      });
      setLoading(false);
      setSelectedItems(null);
      setText('');
    }
  }

  return selectedItems?.schedule_type[0]?.id === 'schedule' &&
    selectedItems.applicant_name[0]?.id &&
    !!selectedItems.interview_name.length ? (
    <div className='relative -top-2.5 px-4'>
      <div className='rounded-md border p-4 shadow-sm'>
        <div className='mb-2 text-sm text-gray-700'>Schedule an interview</div>
        <div className='flex h-full w-full flex-col items-end justify-between p-1'>
          <div>
            <p className='text-sm text-muted-foreground'>
              {`Aglint AI will ${assignerText} to ${candidate} to get ${scheduleType} for the ${interviewName} interview between.`}
            </p>
            <SelectScheduleDate
              scheduleDate={{
                start_date: selectedDateRange.start_date,
                end_date: selectedDateRange.end_date,
              }}
              onChange={(e: any) => {
                if (e[1]) {
                  setSelectedDateRange({
                    start_date: e[0],
                    end_date: e[1],
                  });
                } else {
                  setSelectedDateRange({
                    start_date: e[0],
                    end_date: '',
                  });
                }
              }}
            />
          </div>
          <UIButton
            variant='default'
            leftIcon={<Send />}
            onClick={createNewRequest}
            isLoading={loading}
            disabled={
              Boolean(!selectedItems?.interview_name.length) ||
              Boolean(!selectedItems?.applicant_name.length)
            }
          >
            Create Request
          </UIButton>
        </div>
      </div>
    </div>
  ) : null;
}

export default CreateSchedulePopUp;
