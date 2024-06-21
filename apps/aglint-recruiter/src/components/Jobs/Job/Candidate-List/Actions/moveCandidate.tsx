/* eslint-disable security/detect-object-injection */
import { DatabaseEnums } from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import { Collapse, Dialog, Stack } from '@mui/material';
import { useState } from 'react';

import { ButtonGhost } from '@/devlink/ButtonGhost';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { CandidateSelectionPopup } from '@/devlink2/CandidateSelectionPopup';
import { SelectActionsDropdown } from '@/devlink2/SelectActionsDropdown';
import { TaskStatesProvider } from '@/src/components/Tasks/TaskStatesContext';
import { useApplications } from '@/src/context/ApplicationsContext';
import { useApplicationsStore } from '@/src/context/ApplicationsContext/store';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { createTasks } from '@/src/utils/createTasks';

import CreateTask from './createTask';

const MoveCandidate = () => {
  const { emailVisibilities } = useApplications();
  const { actionPopup, checklist, setActionPopup, resetActionPopup } =
    useApplicationsStore(
      ({ actionPopup, checklist, setActionPopup, resetActionPopup }) => ({
        actionPopup,
        checklist,
        setActionPopup,
        resetActionPopup,
      }),
    );
  const enabled = checklist.length !== 0;
  return (
    <>
      <SelectActionsDropdown
        isAssessment={enabled && emailVisibilities.assessment}
        isDisqualified={enabled && emailVisibilities.disqualified}
        isInterview={enabled && emailVisibilities.interview}
        isMoveNew={enabled && emailVisibilities.new}
        isQualified={enabled && emailVisibilities.qualified}
        isScreening={enabled && emailVisibilities.screening}
        onClickAssessment={{ onClick: () => setActionPopup('assessment') }}
        onClickDisqualified={{ onClick: () => setActionPopup('disqualified') }}
        onClickInterview={{ onClick: () => setActionPopup('interview') }}
        onClickMoveNew={{ onClick: () => setActionPopup('new') }}
        onClickQualified={{ onClick: () => setActionPopup('qualified') }}
        onClickScreening={{ onClick: () => setActionPopup('screening') }}
      />
      <Dialog open={!!actionPopup} onClose={() => resetActionPopup()}>
        <MoveAction />
      </Dialog>
    </>
  );
};

export { MoveCandidate };

const MoveAction = () => {
  const { actionPopup } = useApplicationsStore(({ actionPopup }) => ({
    actionPopup,
  }));
  switch (actionPopup) {
    case 'assessment':
      return <MoveCandidateAssessment />;
    case 'new':
      return <MoveCandidateNew />;
    case 'qualified':
      return <MoveCandidateQualified />;
    case 'disqualified':
      return <MoveCandidateDisqualified />;
    case 'screening':
      return <MoveCandidateScreening />;
    case 'interview':
      return <MoveCandidateInterview />;
  }
};

const MoveCandidateNew = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsStore(({ resetActionPopup }) => ({
    resetActionPopup,
  }));
  const { buttons, title, description } = useMeta(() => {
    handleMoveApplications({
      status: 'new',
      email: null,
    });
    resetActionPopup();
  });
  return (
    <CandidateSelectionPopup
      textHeader={title}
      textDescription={description}
      isCheckVisible={false}
      isChecked={false}
      textCheck={null}
      textWarning={null}
      slotMoveAssessment={<></>}
      isWarningVisible={false}
      onclickCheck={null}
      onclickClose={{ onClick: () => resetActionPopup() }}
      slotButtons={buttons}
    />
  );
};

const MoveCandidateScreening = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsStore(({ resetActionPopup }) => ({
    resetActionPopup,
  }));
  const [check, setCheck] = useState(false);
  const { buttons, title, description, action } = useMeta(() => {
    handleMoveApplications({
      status: 'screening',
      email: check ? 'phoneScreen_email_candidate' : null,
    });
    resetActionPopup();
  });
  return (
    <CandidateSelectionPopup
      textHeader={title}
      textDescription={description}
      isCheckVisible={true}
      textCheck={action}
      isChecked={check}
      isWarningVisible={false}
      textWarning={null}
      slotMoveAssessment={<></>}
      onclickCheck={{ onClick: () => setCheck((prev) => !prev) }}
      onclickClose={{ onClick: () => resetActionPopup() }}
      slotButtons={buttons}
    />
  );
};

const MoveCandidateAssessment = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsStore(({ resetActionPopup }) => ({
    resetActionPopup,
  }));
  const { buttons, title, description, action } = useMeta(() => {
    handleMoveApplications({
      status: 'assessment',
      email: null,
    });
    resetActionPopup();
  });
  return (
    <CandidateSelectionPopup
      textHeader={title}
      textDescription={description}
      isCheckVisible={true}
      textCheck={action}
      isChecked={false}
      isWarningVisible={false}
      textWarning={null}
      slotMoveAssessment={<></>}
      onclickCheck={null}
      onclickClose={{ onClick: () => resetActionPopup() }}
      slotButtons={buttons}
    />
  );
};

type TaskType = {
  assignee: string[];
  schedule_date_range: { start_date: string; end_date: string };
  session_ids: any[];
  task_owner: string;
  status: DatabaseEnums['task_status'];
  priority: DatabaseEnums['task_priority'];
  type: DatabaseEnums['task_type_enum'];
  due_date: string;
  start_date: string;
  name: string;
};

const MoveCandidateInterview = () => {
  const { recruiter_id, recruiterUser } = useAuthDetails();
  const { handleMoveApplications, job, sectionApplication } = useApplications();
  const { resetActionPopup, checklist } = useApplicationsStore(
    ({ resetActionPopup, checklist }) => ({
      checklist,
      resetActionPopup,
    }),
  );

  const [taskCheck, setTaskCheck] = useState(false);
  const [task, setTask] = useState<TaskType>(null);

  const createTask = async () =>
    taskCheck &&
    (await createTasks(
      recruiter_id,
      {
        id: recruiterUser.user_id,
        name: getFullName(recruiterUser.first_name, recruiterUser.last_name),
      },
      (sectionApplication?.data?.pages ?? [])
        .flatMap((page) => page)
        .filter(({ id }) => checklist.includes(id))
        .map(({ id, name }) => ({ id, name })),
      task,
    ));

  const { buttons, title, description } = useMeta(() => {
    handleMoveApplications({
      status: 'interview',
      email: null,
      callBacks: [createTask()],
    });
    resetActionPopup();
  });

  return (
    <TaskStatesProvider>
      <CandidateSelectionPopup
        textHeader={title}
        textDescription={description}
        isCheckVisible={true}
        textCheck={'Create scheduling task'}
        isChecked={taskCheck}
        isWarningVisible={false}
        textWarning={null}
        slotMoveAssessment={
          <Collapse in={taskCheck}>
            <CreateTask
              applications={checklist}
              setTask={setTask}
              job_id={job?.id}
            />
          </Collapse>
        }
        onclickCheck={{ onClick: () => setTaskCheck((prev) => !prev) }}
        onclickClose={{ onClick: () => resetActionPopup() }}
        slotButtons={buttons}
      />
    </TaskStatesProvider>
  );
};

const MoveCandidateQualified = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsStore(({ resetActionPopup }) => ({
    resetActionPopup,
  }));
  const { buttons, title, description } = useMeta(() => {
    handleMoveApplications({
      status: 'qualified',
      email: null,
    });
    resetActionPopup();
  });
  return (
    <CandidateSelectionPopup
      textHeader={title}
      textDescription={description}
      isCheckVisible={false}
      textCheck={null}
      isChecked={false}
      isWarningVisible={false}
      textWarning={null}
      slotMoveAssessment={<></>}
      onclickCheck={null}
      onclickClose={{ onClick: () => resetActionPopup() }}
      slotButtons={buttons}
    />
  );
};

const MoveCandidateDisqualified = () => {
  const { handleMoveApplications } = useApplications();
  const { resetActionPopup } = useApplicationsStore(({ resetActionPopup }) => ({
    resetActionPopup,
  }));
  const [check, setCheck] = useState(false);
  const { buttons, title, description, action } = useMeta(() => {
    handleMoveApplications({
      status: 'disqualified',
      email: check ? 'applicantReject_email_applicant' : null,
    });
    resetActionPopup();
  });
  return (
    <CandidateSelectionPopup
      textHeader={title}
      textDescription={description}
      isCheckVisible={true}
      textCheck={action}
      isChecked={check}
      isWarningVisible={false}
      textWarning={null}
      slotMoveAssessment={<></>}
      onclickCheck={{ onClick: () => setCheck((prev) => !prev) }}
      onclickClose={{ onClick: () => resetActionPopup() }}
      slotButtons={buttons}
    />
  );
};

function useMeta(onSubmit: () => void) {
  const { resetActionPopup, actionPopup, checklist } = useApplicationsStore(
    ({ resetActionPopup, actionPopup, checklist }) => ({
      resetActionPopup,
      actionPopup,
      checklist,
    }),
  );
  const buttons = (
    <Stack spacing={'10px'} mt={'10px'} direction={'row'} alignItems={'center'}>
      <ButtonGhost
        textButton='Cancel'
        color={'neutral'}
        size={2}
        onClickButton={{ onClick: () => resetActionPopup() }}
      />

      <ButtonSolid
        textButton={`Move to ${actionPopup}`}
        size={2}
        onClickButton={{
          onClick: () => onSubmit(),
        }}
      />
    </Stack>
  );
  const count = checklist.length;
  const title = `Move to ${actionPopup}`;
  const description = `Move ${count} candidate${count === 1 ? '' : 's'} to ${actionPopup}`;
  const action = `Send ${actionPopup} email${count === 1 ? '' : 's'} to ${count} candidate${count === 1 ? '' : 's'}`;
  return { title, description, buttons, action, count };
}
