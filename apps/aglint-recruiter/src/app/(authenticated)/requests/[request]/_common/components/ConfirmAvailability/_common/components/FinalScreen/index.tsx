import type {
  SessionCombinationRespType,
  TargetApiPayloadType,
} from '@aglint/shared-types';
import { ScrollArea } from '@components/ui/scroll-area';
import { useAvailabilityContext } from '@request/components/ConfirmAvailability/_common/contexts/RequestAvailabilityContext';
import DayCardWrapper from '@request/components/SelfSchedulingDrawer/_common/components/StepSlotOptions/DayCardWrapper';
import { RotateCw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Loader } from '@/components/Common/Loader';
import { ShowCode } from '@/components/Common/ShowCode';
import { UIButton } from '@/components/Common/UIButton';
import { mailSender } from '@/utils/mailSender';

import { useConfirmAvailabilitySchedulingFlowStore } from '../../contexts/AvailabilitySchedulingStore';

function FinalScreen() {
  const { selectedDateSlots } = useAvailabilityContext();
  const { applicationIdForConfirmAvailability } =
    useConfirmAvailabilitySchedulingFlowStore();

  const [emailData, setEmailData] = useState<{ html: string; subject: string }>(
    {
      html: '',
      subject: '',
    },
  );
  const [fetching, setFetching] = useState(true);
  const allSessions: SessionCombinationRespType[] = selectedDateSlots
    .map((ele) => ele.selected_dates)
    .flat()
    .map((ele) => ele.plans)
    .flat()
    .map((ele) => ele.sessions)
    .flat();
  const payload: TargetApiPayloadType<'confirmInterview_email_applicant'> = {
    application_id: applicationIdForConfirmAvailability,
    session_ids: allSessions.map((ele) => ele.session_id),
    preview_details: {
      meeting_timings: allSessions.map((ele) => ({
        meeting_end_time: ele.end_time,
        meeting_start_time: ele.start_time,
      })),
    },
    is_preview: true,
  };

  function getEmail() {
    setFetching(true);
    mailSender({
      target_api: 'confirmInterview_email_applicant',
      payload,
    })
      .then((data) => {
        setEmailData(data);
        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
      });
  }
  useEffect(() => {
    if (!emailData.html) {
      getEmail();
    }
  }, []);
  return (
    <ScrollArea className='flex h-[calc(100vh-123px)] w-full flex-col gap-2'>
      <p>Please confirm the selected schedule</p>
      <div className='flex flex-col gap-2'>
        {selectedDateSlots?.map((item, index) => {
          const date = item.selected_dates[0].curr_date;
          return (
            <DayCardWrapper
              key={index}
              selectedCombIds={[]}
              item={{
                date_range: [date],
                plans: item.selected_dates[0].plans,
              }}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onClickSelect={() => {}}
              isDayCollapseNeeded={false}
              isSlotCollapseNeeded={false}
              index={index}
              isRadioNeeded={false}
              isDayCheckboxNeeded={false}
              isSlotCheckboxNeeded={false}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              setSelectedCombIds={() => {}}
            />
          );
        })}
      </div>
      <div className='flex flex-col gap-2'>
        <p>
          While clicking send to candidate ,an email containing the following
          message will be sent to the candidate:
        </p>
        <div className='mb-2 flex flex-row justify-start gap-1'>
          <UIButton
            size={'sm'}
            variant='secondary'
            onClick={() => {
              window.open(
                `${process.env.NEXT_PUBLIC_HOST_NAME}/company?tab=emailTemplate&email=confirmInterview_email_applicant`,
              );
            }}
          >
            Edit Email Template
          </UIButton>
          <UIButton variant='ghost' size='sm' onClick={getEmail}>
            <RotateCw className='h4 w-4' />
          </UIButton>
        </div>
      </div>
      <ShowCode>
        <ShowCode.When isTrue={fetching}>
          <div className='flex h-40 w-full items-center justify-center'>
            <Loader />
          </div>
        </ShowCode.When>
        <ShowCode.Else>
          <iframe
            width={'425px'}
            height={'620px'}
            color='white'
            srcDoc={emailData?.html}
            title='Preview Email'
          />
        </ShowCode.Else>
      </ShowCode>
    </ScrollArea>
  );
}

export default FinalScreen;
