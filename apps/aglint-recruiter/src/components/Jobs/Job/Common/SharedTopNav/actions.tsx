import { CircularProgress, Dialog, Popover } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import React, {
  PropsWithChildren,
  PropsWithoutRef,
  useCallback,
  useState,
} from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { CloseJobModal } from '@/devlink/CloseJobModal';
import { FilterOption } from '@/devlink/FilterOption';
import { GlobalIcon } from '@/devlink/GlobalIcon';
import { IconButtonGhost } from '@/devlink/IconButtonGhost';
import { FilterDropdown } from '@/devlink2/FilterDropdown';
import { ScoreSetting } from '@/devlink3/ScoreSetting';
import AssessmentIcon from '@/src/components/Common/ModuleIcons/assessmentIcon';
import EmailTemplateIcon from '@/src/components/Common/ModuleIcons/emailTemplateIcon';
import HiringTeamIcon from '@/src/components/Common/ModuleIcons/hiringTeamIcon';
import JobDetailsIcon from '@/src/components/Common/ModuleIcons/jobDetailsIcon';
import ProfileScoreIcon from '@/src/components/Common/ModuleIcons/profileScoreIcon';
import SchedulingIcon from '@/src/components/Common/ModuleIcons/schedulingIcon';
import ScreeningIcon from '@/src/components/Common/ModuleIcons/screeningIcon';
import WorkflowIcon from '@/src/components/Common/ModuleIcons/workflowIcon';
import PublishButton from '@/src/components/Common/PublishButton';
import UITextField from '@/src/components/Common/UITextField';
import { useApplicationsStore } from '@/src/context/ApplicationsContext/store';
import { useJob } from '@/src/context/JobContext';
import { useJobs } from '@/src/context/JobsContext';
import { useRolesAndPermissions } from '@/src/context/RolesAndPermissions/RolesAndPermissionsContext';
import ROUTES from '@/src/utils/routing/routes';

import { UploadApplications } from '../UploadApplications';

export const SharedActions = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={2}>
      <Score />
      <Add />
      <Publish />
      <Settings />
    </Stack>
  );
};

const Score = () => {
  const { applicationScoringPollEnabled, job, total } = useJob();
  if (!applicationScoringPollEnabled) return <></>;
  return (
    <ScoreSetting
      textScoreCount={`${
        job?.processing_count.processed +
        job?.processing_count.unavailable +
        job?.processing_count.unparsable
      }/${total ?? '---'}`}
      slotScoringLoader={
        <Stack sx={{ width: '12px', aspectRatio: 1 }}>
          <CircularProgress
            color='inherit'
            size={'100%'}
            sx={{ color: 'var(--white)' }}
          />
        </Stack>
      }
    />
  );
};

const Add = () => {
  const { job, manageJob } = useJob();
  const { setImportPopup } = useApplicationsStore(({ setImportPopup }) => ({
    setImportPopup,
  }));
  if (job?.status === 'closed' || !manageJob) return <></>;
  return (
    <>
      <ButtonSoft
        size={2}
        color='neutral'
        textButton='Add candidates'
        onClickButton={{ onClick: () => setImportPopup(true) }}
        isLeftIcon
        iconName='person_add'
      />
      <UploadApplications />
    </>
  );
};

const Publish = () => {
  const { handlePublish, canPublish, manageJob, job } = useJob();
  if (job?.status === 'closed' || !manageJob) return <></>;
  return (
    <PublishButton
      onClick={async () => await handlePublish()}
      disabled={!canPublish}
    />
  );
};

const Settings = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  return (
    <>
      <IconButtonGhost
        color={'neutral'}
        iconSize={6}
        iconName='more_vert'
        onClickButton={{
          onClick: (e) => setAnchorEl(e.currentTarget),
        }}
      />
      <Dropdown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

const Dropdown = ({
  anchorEl,
  setAnchorEl,
}: PropsWithoutRef<{
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement>>;
}>) => {
  const { job } = useJob();
  const [modal, setModal] = useState(false);
  const isDelete = job?.status !== 'published';
  return (
    <>
      <Pop anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
        <Modules />
        <FilterOption
          onClickCancelInvite={{
            onClick: () => {
              setModal(true);
              setAnchorEl(null);
            },
          }}
          text={`${isDelete ? 'Delete' : 'Close'} Job`}
          slotIcon={
            <GlobalIcon size={4} iconName={isDelete ? 'delete' : 'close'} />
          }
          color={'black'}
        />
      </Pop>
      {modal && <Close open={modal} handleClose={() => setModal(false)} />}
    </>
  );
};

const Pop = ({
  anchorEl,
  setAnchorEl,
  children,
}: PropsWithChildren<{
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement>>;
}>) => {
  return (
    <>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPaper-root': {
            border: 'none !important',
            background: 'transparent',
            overflow: 'visible !important',
            boxShadow: 'none',
          },
        }}
      >
        <Stack border={'1px solid var(--neutral-6)'} borderRadius={'8px'}>
          <FilterDropdown
            isRemoveVisible={false}
            isResetVisible={false}
            slotOption={<>{children}</>}
          />
        </Stack>
      </Popover>
    </>
  );
};

const Close = ({
  open,
  handleClose,
}: PropsWithoutRef<{ open: boolean; handleClose: () => void }>) => {
  const { push } = useRouter();
  const { handleJobDelete } = useJobs();
  const { job, handleJobAsyncUpdate } = useJob();
  const [value, setValue] = useState('');
  const handleDeleteJob = useCallback(() => {
    push(`${ROUTES['/jobs']()}?status=${job?.status ?? 'all'}`);
    handleJobDelete(job.id);
  }, [job.id]);
  const handleSubmit = useCallback(async () => {
    handleClose();
    switch (job.status) {
      case 'draft':
        handleDeleteJob();
        break;
      case 'published':
        await handleJobAsyncUpdate({ status: 'closed' });
        break;
      case 'closed':
        handleDeleteJob();
        break;
    }
  }, [job.status, handleClose]);
  const isDelete = job?.status !== 'published';
  const job_title = job?.job_title ?? '';
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <CloseJobModal
        textPopupTitle={`${isDelete ? 'Delete' : 'Close'}  This Job`}
        textWarning={
          isDelete
            ? 'Deleting this job will permanently remove all related data and make the job inaccessible. Candidate data will remain unaffected.'
            : 'Closing this job will permanently stop all activities, including tasks and scheduled interviews. It will also remove the job from the company page and prevent any new applications or candidate imports.'
        }
        textButton={isDelete ? 'Delete Job' : 'Close Job'}
        textJobTitle={job_title.trim()}
        onClickCloseJob={{ onClick: () => handleClose() }}
        textLocation={''}
        slotInput={
          <UITextField
            placeholder={job_title.trim()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        }
        slotButton={
          <>
            <ButtonSoft
              color={'neutral'}
              textButton='Cancel'
              size={2}
              onClickButton={{ onClick: () => handleClose() }}
            />
            <ButtonSolid
              textButton={isDelete ? 'Delete Job' : 'Close Job'}
              color={isDelete ? 'error' : 'accent'}
              size={2}
              onClickButton={{ onClick: handleSubmit }}
              isDisabled={job_title.trim() !== value.trim()}
            />
          </>
        }
      />
    </Dialog>
  );
};

const Modules = () => {
  const { manageJob } = useJob();
  const {
    isAssessmentEnabled,
    isScreeningEnabled,
    isSchedulingEnabled,
    isScoringEnabled,
  } = useRolesAndPermissions();
  return (
    <>
      {manageJob && <JobDetailsModule />}
      {manageJob && isScoringEnabled && <ProfileScoreModule />}
      {isSchedulingEnabled && <InterviewModule />}
      {isAssessmentEnabled && manageJob && <AssessmentModule />}
      {isScreeningEnabled && manageJob && <ScreeningModule />}
      {manageJob && <HiringTeamModule />}
      {manageJob && <EmailTemplatesModule />}
      <WorkflowModule />
    </>
  );
};

const WorkflowModule = () => {
  const { job } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(ROUTES['/jobs/[id]/workflows']({ id: job?.id }));
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Workflows'}
      slotIcon={<WorkflowIcon />}
      color={'black'}
    />
  );
};

const HiringTeamModule = () => {
  const {
    job,
    // publishStatus: {
    //   hiringTeamValidity: { validity },
    // },
  } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(ROUTES['/jobs/[id]/hiring-team']({ id: job?.id }));
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Hiring Team'}
      slotIcon={<HiringTeamIcon />}
      color={'black'}
    />
  );
};

const ProfileScoreModule = () => {
  const { job } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/profile-score`);
  };
  // const isAlert = status.jd_json_error && !status.description_error;
  // const isWarning =
  //   !isAlert &&
  //   ((status.description_changed && !status.scoring_criteria_changed) ||
  //     status.description_error);
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Profile Score'}
      slotIcon={<ProfileScoreIcon />}
      color={'black'}
    />
  );
};

const JobDetailsModule = () => {
  const { job } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(ROUTES['/jobs/[id]/job-details']({ id: job?.id }));
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Job Details'}
      slotIcon={<JobDetailsIcon />}
      color={'black'}
    />
  );
};

const AssessmentModule = () => {
  const { job } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/assessment`);
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Assessment'}
      slotIcon={<AssessmentIcon />}
      color={'black'}
    />
  );
};

const EmailTemplatesModule = () => {
  const { job /* emailTemplateValidity */ } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/email-templates`);
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Email Templates'}
      slotIcon={<EmailTemplateIcon />}
      color={'black'}
    />
  );
};

const ScreeningModule = () => {
  const { job } = useJob();
  const { push } = useRouter();

  const handleClick = () => {
    push(`/jobs/${job.id}/screening`);
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Screening'}
      slotIcon={<ScreeningIcon />}
      color={'black'}
    />
  );
};

const InterviewModule = () => {
  const { job } = useJob();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/interview-plan`);
  };
  return (
    <FilterOption
      onClickCancelInvite={{ onClick: () => handleClick() }}
      text={'Interview Plan'}
      slotIcon={<SchedulingIcon />}
      color={'black'}
    />
  );
};
