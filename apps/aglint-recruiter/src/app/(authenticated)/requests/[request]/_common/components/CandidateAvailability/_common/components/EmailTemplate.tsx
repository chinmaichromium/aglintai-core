import { type TargetApiPayloadType } from '@aglint/shared-types';
import { toast } from '@components/hooks/use-toast';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { ScrollArea } from '@components/ui/scroll-area';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useTenant } from '@/company/hooks';
import { Loader } from '@/components/Common/Loader';
import { ShowCode } from '@/components/Common/ShowCode';
import { UIButton } from '@/components/Common/UIButton';
import { mailSender } from '@/utils/mailSender';

import { useCandidateAvailabilitySchedulingFlowStore } from '../contexts/CandidateAvailabilityFlowStore';

function EmailTemplate({ application_id }: { application_id: string }) {
  const { recruiter_user } = useTenant();
  const { reRequestAvailability, candidateAvailabilityIdForReRequest } =
    useCandidateAvailabilitySchedulingFlowStore();
  const [emailData, setEmailData] = useState<{ html: string; subject: string }>(
    {
      html: '',
      subject: '',
    },
  );
  const [fetching, setFetching] = useState(false);
  const payload: TargetApiPayloadType<'sendAvailabilityRequest_email_applicant'> =
    {
      preview_details: {
        application_id: application_id,
      },
      organizer_user_id: recruiter_user.user_id,
      is_preview: true,
    };

  function getEmail() {
    setFetching(true);
    if (reRequestAvailability) {
      const payload1: TargetApiPayloadType<'availabilityReqResend_email_candidate'> =
        {
          is_preview: true,
          avail_req_id: candidateAvailabilityIdForReRequest,
          recruiter_user_id: recruiter_user?.user_id ?? '',
        };
      mailSender({
        target_api: 'availabilityReqResend_email_candidate',
        payload: payload1,
      })
        .then((data) => {
          setEmailData(data);
          setFetching(false);
        })
        .catch(() => {
          toast({
            variant: 'destructive',
            title: 'Fail to fetch email preview',
          });
          setFetching(false);
        });
    } else {
      mailSender({
        target_api: 'sendAvailabilityRequest_email_applicant',
        payload: payload,
      })
        .then((data) => {
          setEmailData(data);
          setFetching(false);
        })
        .catch(() => {
          toast({
            variant: 'destructive',
            title: 'Fail to fetch email preview',
          });
          setFetching(false);
        });
    }
  }
  useEffect(() => {
    if (!emailData.html) {
      getEmail();
    }
  }, []);
  return (
    <>
      <EmailTemplateHolder
        onClickEditTemplate={() => {
          window.open(
            `${process.env.NEXT_PUBLIC_HOST_NAME}/company?tab=emailTemplate&email=sendAvailabilityRequest_email_applicant`,
          );
        }}
        onClickReload={getEmail}
        slotEmail={
          <ShowCode>
            <ShowCode.When isTrue={fetching}>
              <div className='h-screen w-full'>
                <Loader />
              </div>
            </ShowCode.When>
            <ShowCode.Else>
              <ScrollArea className='h-[calc(100vh-320px)] w-full'>
                <iframe
                  data-testid='email-preview'
                  srcDoc={emailData?.html}
                  width='100%'
                  height='672px'
                  style={{ border: 'none' }}
                  title='Email Preview'
                />
              </ScrollArea>
            </ShowCode.Else>
          </ShowCode>
        }
      />
    </>
  );
}

export default EmailTemplate;

interface EmailTemplateHolderProps {
  onClickReload: () => void;
  onClickEditTemplate: () => void;
  slotEmail: React.ReactNode;
  textHeader?: string;
}

export function EmailTemplateHolder({
  onClickReload,
  onClickEditTemplate,
  slotEmail,
  textHeader = 'This is a preview only. All Actions in this email are disabled.',
}: EmailTemplateHolderProps) {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 p-2 pb-2'>
        <div className='flex items-center text-sm text-muted-foreground'>
          <Info className='mr-2 h-4 w-4' />
          {textHeader}
        </div>
        <div className='flex space-x-2'>
          <UIButton variant='outline' size='sm' onClick={onClickReload}>
            Reload
          </UIButton>
          <UIButton variant='outline' size='sm' onClick={onClickEditTemplate}>
            Edit template
          </UIButton>
        </div>
      </CardHeader>
      <CardContent className='bg-neutral-50 p-0'>{slotEmail}</CardContent>
    </Card>
  );
}
