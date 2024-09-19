/* eslint-disable security/detect-object-injection */
import type { DatabaseTableInsert } from '@aglint/shared-types';
import { AlertDialog, AlertDialogContent } from '@components/ui/alert-dialog';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { X } from 'lucide-react';
import { useState } from 'react';

import { UIAlert } from '@/components/Common/UIAlert';
import { UIButton } from '@/components/Common/UIButton';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import {
  useApplications,
  useApplicationsActions,
  useApplicationsStore,
} from '@/job/hooks';
import { formatSessions } from '@/utils/formatSessions';
import { capitalize } from '@/utils/text/textUtils';

import CreateRequest from './CreateRequest';
import type { SessionType } from './CreateRequest/SessionsList';

const Actions = () => {
  const checklist = useApplicationsStore((state) => state.checklist);
  const { setActionPopup, resetChecklist } = useApplicationsActions();
  const count = checklist.length;
  const enabled = count !== 0;

  return (
    <>
      <div className='flex items-center border-t border-gray-200 bg-white p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span className='text-sm text-gray-600'>
              {`Move ${count} selected candidate${count === 1 ? '' : 's'} to:`}
            </span>
            <Button variant='outline' onClick={() => setActionPopup('new')}>
              New
            </Button>
            {/* <Button
              onClick={() => setActionPopup('disqualified')}
              variant='outline'
            >
              Disqualify
            </Button> */}
            {enabled && emailVisibilities.new && (
              <Button variant='outline' onClick={() => setActionPopup('new')}>
                New
              </Button>
            )}
            {enabled && emailVisibilities.interview && (
              <Button
                variant='outline'
                onClick={() => setActionPopup('interview')}
              >
                Interview
              </Button>
            )}
            {enabled && emailVisibilities.qualified && (
              <Button
                variant='outline'
                onClick={() => setActionPopup('qualified')}
              >
                Qualified
              </Button>
            )}
            {enabled && emailVisibilities.disqualified && (
              <Button
                variant='outline'
                onClick={() => setActionPopup('disqualified')}
              >
                Disqualified
              </Button>
            )}
            <Button
              onClick={() => setChecklist([])}
              variant='ghost'
              className='text-gray-600 hover:text-gray-800'
            >
              <X className='mr-2 h-4 w-4' /> Clear Selection
            </Button>
          </div>
        </div>
      </div>
      <AlertDialog open={!!actionPopup} onOpenChange={resetActionPopup}>
        <AlertDialogContent className='p-0'>
          <MoveAction />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export { Actions };

const MoveAction = () => {
  const { actionPopup } = useApplicationsStore(({ actionPopup }) => ({
    actionPopup,
  }));
  switch (actionPopup) {
    case 'new':
      return <MoveCandidateNew />;
    case 'qualified':
      return <MoveCandidateQualified />;
    case 'disqualified':
      return <MoveCandidateDisqualified />;
    case 'interview':
      return <MoveCandidateInterview />;
  }
};

const MoveCandidateNew = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsActions();
  const { buttons, title, description } = useMeta(() => {
    handleMoveApplications({
      status: 'new',
      email: null,
    });
    resetActionPopup();
  });
  return (
    <ReusablePopup
      title={title}
      slotBody={
        <div className='space-y-4'>
          <UIAlert
            color={'error'}
            iconName={'CircleAlert'}
            title={`You are about to ${description}`}
            description={<li>All the schedules will be deleted</li>}
          />
        </div>
      }
      slotButtons={buttons}
    />
  );
};

const MoveCandidateInterview = () => {
  const { recruiterUser, isShowFeature } = useAuthDetails();
  const {
    handleMoveApplicationToInterview,
    sectionApplication: { data },
  } = useApplications();
  const checklist = useApplicationsChecklist();
  const { resetActionPopup } = useApplicationsActions();

  const [request, setRequest] = useState<DatabaseTableInsert['request']>(null);
  const [priority, setPriority] = useState<'urgent' | 'standard'>('standard');
  const [note, setNote] = useState<string>('');
  const [selectedSession, setSelectedSession] = useState<SessionType[]>([]);
  const buttonText = isShowFeature('SCHEDULING') ? 'Request and Move' : 'Move';
  const { buttons, title, description } = useMeta(() => {
    handleMoveApplicationToInterview({
      requests: checklist.map((application_id) => {
        const name =
          (data?.pages ?? [])
            .flatMap((list) => list)
            .find(({ id }) => id === application_id)?.name ?? '';
        return {
          assignee_id: request.assignee_id,
          type: request.type,
          priority: priority,
          status: request.status,
          schedule_end_date: request.schedule_end_date,
          schedule_start_date: request.schedule_start_date,
          assigner_id: recruiterUser?.user_id ?? null,
          title: `Schedule ${formatSessions(selectedSession.map(({ name }) => name))} for ${name}`,
          application_id,
          note,
        };
      }),
      sessions: selectedSession.map(({ id }) => id),
    });
    resetActionPopup();
  }, buttonText);
  const hideRequestBox = isShowFeature('SCHEDULING') ? '' : 'hidden';
  return (
    <ReusablePopup
      title={title}
      slotBody={
        <div className='flex flex-col gap-2'>
          {capitalize(description)}

          <div className={hideRequestBox}>
            <CreateRequest
              setRequest={setRequest}
              setSelectedSession={setSelectedSession}
              selectedSession={selectedSession}
              setPriority={setPriority}
              priority={priority}
              note={note}
              setNote={setNote}
            />
          </div>
        </div>
      }
      slotButtons={buttons}
    />
  );
};

const MoveCandidateQualified = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsActions();
  const { buttons, title, description } = useMeta(() => {
    handleMoveApplications({
      status: 'qualified',
      email: null,
    });
    resetActionPopup();
  });

  return (
    <ReusablePopup
      title={title}
      slotBody={
        <div className='flex flex-col gap-2'>{capitalize(description)}</div>
      }
      slotButtons={buttons}
    />
  );
};

const MoveCandidateDisqualified = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsActions();
  const [checked, setChecked] = useState(false);
  const { buttons, title, description, action } = useMeta(() => {
    handleMoveApplications({
      status: 'disqualified',
      email: checked ? 'applicantReject_email_applicant' : null,
    });
    resetActionPopup();
  });
  return (
    <>
      <ReusablePopup
        title={title}
        slotBody={
          <div className='flex flex-col gap-4'>
            <UIAlert
              color={'error'}
              iconName={'CircleAlert'}
              title={`You are about to ${description}`}
              description={
                <div className='pt-1'>
                  <li>All the schedules will be cancelled</li>
                  <li>All the related requests will be closed</li>
                  <li>You can still view the candidate details</li>
                  <li>Move to new state to start the process again</li>
                </div>
              }
            />
            <div className='flex flex-row items-center gap-4'>
              <Checkbox
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              />
              {capitalize(action)}
            </div>
          </div>
        }
        slotButtons={buttons}
      />
    </>
  );
};

function useMeta(onSubmit: () => void, buttonText: string = null) {
  const checklist = useApplicationsChecklist();
  const actionPopup = useApplicationsActionPopup();
  const { resetActionPopup } = useApplicationsActions();
  const buttons = (
    <>
      <UIButton variant='secondary' onClick={() => resetActionPopup()}>
        Cancel
      </UIButton>

      <UIButton variant='default' onClick={() => onSubmit()}>
        {buttonText ?? `Move to ${actionPopup}`}
      </UIButton>
    </>
  );
  const count = checklist.length;
  const title = `Move to ${actionPopup}`;
  const description = `move ${count} candidate${count === 1 ? '' : 's'} to ${actionPopup}`;
  const action = `Send ${actionPopup} email${count === 1 ? '' : 's'} to ${count} candidate${count === 1 ? '' : 's'}`;
  return { title, description, buttons, action, count };
}
const ReusablePopup = ({ title, slotBody, slotButtons }) => {
  const { resetActionPopup } = useApplicationsActions();
  return (
    <div className='mx-autojustify-center mx-auto flex w-[500px] items-center'>
      <div className='w-full max-w-lg'>
        <div className='flex items-center justify-between border-b border-gray-200 p-4'>
          <h2 className='font-semibold'>{title}</h2>
          <UIButton
            onClick={() => resetActionPopup()}
            variant='ghost'
            size='sm'
          >
            <X className='h-4 w-4' />
          </UIButton>
        </div>
        <div className='p-4'>{slotBody}</div>
        <div className='flex justify-end gap-2 border-t border-gray-200 p-4'>
          {slotButtons}
        </div>
      </div>
    </div>
  );
};
