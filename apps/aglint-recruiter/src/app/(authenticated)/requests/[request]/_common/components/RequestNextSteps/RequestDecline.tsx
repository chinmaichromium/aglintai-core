import {
  type APIUpdateMeetingInterviewers,
  type ConflictReason,
} from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import { toast } from '@components/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { useRequest } from '@request/hooks';
import { useMeetingList } from '@requests/hooks';
import axios from 'axios';
import { ArrowDownUp } from 'lucide-react';
import React from 'react';

import { ShowCode } from '@/common/ShowCode';
import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';
import { api } from '@/trpc/client';

import ConflictWithHover from '../SelfSchedulingDrawer/_common/components/ui/ConflictWithHover';
import { MemberRow } from '../SelfSchedulingDrawer/_common/components/ui/MemberRow';

const RequestDecline = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState<string | null>(
    null,
  );
  const [isProceeding, setIsProceeding] = React.useState(false);

  const [isInterviewerChanging, setIsInterviewerChanging] =
    React.useState(false);

  const { requestDetails, declineProgressMeta } = useRequest();
  const { data: meetingTime, refetch } = useMeetingList();

  if (!declineProgressMeta || declineProgressMeta.nextStep == null) {
    return <></>;
  }
  const declinedUserDetails = (meetingTime ?? [])
    .flat()
    .map((item) => item.cancel_reasons)
    .flat()
    .find(
      (item) => item.interview_session_cancel.request_id === requestDetails.id,
    );
  const {
    data: alternativeInts,
    isPending,
    isSuccess: isAlternativeIntsSuccess,
    mutateAsync,
  } = api.scheduling.v1.findReplacementInts.useMutation();

  const session_details = requestDetails.request_relation[0].interview_session;

  const handleGetAvailableInterviewers = async () => {
    try {
      if (isPending) return;
      if (!declinedUserDetails) return;
      const intSesnCancel = declinedUserDetails.interview_session_cancel;
      if (
        !intSesnCancel ||
        !intSesnCancel.session_relation_id ||
        !intSesnCancel.session_id
      )
        return;
      await mutateAsync({
        declined_int_sesn_reln_id: intSesnCancel.session_relation_id,
        session_id: intSesnCancel.session_id,
      });
      setIsDialogOpen(true);
    } catch (e) {
      toast({
        title: 'Failed to get available interviewers',
        variant: 'destructive',
      });
    }
  };
  const changeInterviewer = async () => {
    try {
      if (!declinedUserDetails) return;
      if (!session_details) {
        toast({
          title: 'Session details not found',
          variant: 'destructive',
        });
        return;
      }
      const intSesnCancel = declinedUserDetails.interview_session_cancel;
      if (
        !intSesnCancel ||
        !intSesnCancel.session_relation_id ||
        !intSesnCancel.session_id ||
        !selectedMember
      )
        return;
      setIsInterviewerChanging(true);
      const payload: APIUpdateMeetingInterviewers = {
        curr_declined_int_sesn_reln_id: intSesnCancel.session_relation_id,
        new_int_user_id: selectedMember,
        session_id: intSesnCancel.session_id,
        request_id: requestDetails.id,
      };
      await axios.post(
        '/api/scheduling/v1/update-meeting-interviewers',
        payload,
      );
      toast({
        title: 'Interviewer changed successfully',
        variant: 'default',
      });
      setIsDialogOpen(false);
      await refetch();
    } catch (err) {
      toast({
        title: 'Failed to change interviewer',
        variant: 'destructive',
      });
    } finally {
      setIsInterviewerChanging(false);
    }
  };
  return (
    <>
      <div className='mt-4'>
        <ShowCode.When isTrue={declineProgressMeta.nextStep === 'MANUAL'}>
          <UIButton
            onClick={handleGetAvailableInterviewers}
            isLoading={isPending}
            data-testid='change-interviewer-button'
          >
            Change Interviewer
          </UIButton>
        </ShowCode.When>
        <ShowCode.When
          isTrue={declineProgressMeta.nextStep === 'REQUEST_PROCEED'}
        >
          <UIButton
            disabled={isProceeding}
            onClick={async () => {
              setIsProceeding(true);
              await axios.post('/api/request/execute-workflow', {
                request_id: requestDetails.id,
              });
              setTimeout(async () => {
                setIsProceeding(false);
              }, 2000);
            }}
          >
            {isProceeding ? 'Proceeding...' : 'Proceed with AI'}
          </UIButton>
        </ShowCode.When>
      </div>
      <UIDialog
        title='Interviewers'
        open={isDialogOpen}
        size='lg'
        onClose={() => {
          setIsDialogOpen(false);
        }}
        onClickSecondary={() => {
          setIsDialogOpen(false);
        }}
        onClickPrimary={changeInterviewer}
        isPrimaryActionLoading={isInterviewerChanging}
      >
        <div
          className='flex flex-col gap-2'
          data-testid='interviewer-list-container'
        >
          {declinedUserDetails && (
            <div className='rounded-mdbg-muted p-2'>
              <MemberRow
                slotConflicts={<></>}
                slotInterviewerImage={
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      src={
                        declinedUserDetails.recruiter_user.profile_image ?? '#'
                      }
                      alt={declinedUserDetails.recruiter_user.first_name}
                    />
                    <AvatarFallback>
                      {declinedUserDetails.recruiter_user.first_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                }
                iconTraining={<></>}
                textName={getFullName(
                  declinedUserDetails.recruiter_user.first_name,
                  declinedUserDetails.recruiter_user.last_name,
                )}
                textRole={declinedUserDetails.recruiter_user.position ?? ''}
              />
            </div>
          )}
          <div className='flex flex-row justify-center'>
            <ArrowDownUp size={18} />
          </div>
          <div className='flex max-h-[400px] w-full flex-col gap-2 overflow-y-auto px-2'>
            {isAlternativeIntsSuccess &&
              alternativeInts.map((item) => {
                const isSelected =
                  selectedMember === item.replacement_int.user_id;
                return (
                  <div
                    key={item.replacement_int.user_id}
                    className={`rounded-mdbg-muted p-2 ${
                      isSelected
                        ? 'rounded-md border border-gray-100 outline'
                        : ''
                    }`}
                    data-testid='alternative-interviewer-item'
                    onClick={() => {
                      setSelectedMember(item.replacement_int.user_id);
                    }}
                  >
                    <MemberRow
                      key={item.replacement_int.user_id}
                      slotConflicts={
                        <ConflictWithHover
                          conflictReasons={item.conflicts as ConflictReason[]}
                          isToolTipVisible={true}
                        />
                      }
                      slotInterviewerImage={
                        <Avatar className='h-8 w-8'>
                          <AvatarImage
                            src={item.replacement_int.profile_image ?? '#'}
                            alt={item.replacement_int.first_name}
                          />
                          <AvatarFallback>
                            {item.replacement_int.first_name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      }
                      iconTraining={<></>}
                      textName={getFullName(
                        item.replacement_int.first_name,
                        item.replacement_int.last_name,
                      )}
                      textRole={item.replacement_int.position}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </UIDialog>
    </>
  );
};

export default RequestDecline;
