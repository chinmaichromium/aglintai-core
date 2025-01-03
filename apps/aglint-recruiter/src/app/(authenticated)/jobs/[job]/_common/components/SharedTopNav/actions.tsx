/* eslint-disable security/detect-object-injection */
import { dayjsLocal } from '@aglint/shared-utils';
import OptimisticWrapper from '@components/loadingWapper';
import { Button } from '@components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Input } from '@components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import {
  BarChart,
  Calendar,
  Clock,
  FileText,
  MoreHorizontal,
  RefreshCw,
  UserPlus,
  Workflow,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';
import { createContext, memo, useCallback, useContext, useState } from 'react';

import { useFlags } from '@/company/hooks/useFlags';
import { UIButton } from '@/components/Common/UIButton';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useRouterPro } from '@/hooks/useRouterPro';
import { useJob } from '@/job/hooks';
import { useApplicationsRescore } from '@/job/hooks/useApplicationsRescore';
import { Banners } from '@/jobs/components/Banners';
import { useJobsContext } from '@/jobs/hooks';
import ROUTES from '@/utils/routing/routes';

import { UploadApplications } from '../UploadApplications';

export const SharedActions = () => {
  const value = useSettingsActions();
  const { job } = useJob();
  return (
    <SettingsContext.Provider value={value}>
      <div className='flex flex-row items-center gap-2'>
        <JobBanners />
        {/* <Score /> */}
        <Sync />
        <Rescore />
        <Add />
        <Switcher />
        {job && job.status !== 'closed' && (
          <Link href={`/jobs/${value?.job?.id}/job-details`}>
            <UIButton variant='outline'>Edit</UIButton>
          </Link>
        )}
      </div>
    </SettingsContext.Provider>
  );
};

const JobBanners = () => {
  const { job } = useJob();
  return (
    <div className='mr-4 flex flex-row gap-2'>
      <Banners job={job} />
    </div>
  );
};

const Rescore = () => {
  const { scoring } = useFlags();
  const { isPolling } = useJob();
  const { mutate, isPending } = useApplicationsRescore();
  if (!scoring) return <></>;
  return (
    <div className='flex flex-row gap-1'>
      <OptimisticWrapper loading={isPolling || isPending}>
        <Button variant='outline' onClick={() => mutate()} className='w-auto'>
          <RefreshCw className='mr-2 h-4 w-4' />
          Rescore
        </Button>
      </OptimisticWrapper>
    </div>
  );
};

const Sync = () => {
  const { job, handleJobSync } = useJob();
  const [load, setLoad] = useState(false);
  if (!job?.syncable) return <></>;
  const handleSync = async () => {
    if (load) return;
    setLoad(true);
    await handleJobSync();
    setLoad(false);
  };
  const date = dayjsLocal(job?.remote_sync_time ?? new Date()).fromNow();
  return (
    <div className='flex flex-row gap-1'>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='flex flex-shrink-0 items-center'>
            <Clock className='mr-1 h-4 w-4 text-muted-foreground' />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-sm'>{`Last synced ${date}`}</p>
        </TooltipContent>
      </Tooltip>

      <OptimisticWrapper loading={load}>
        <Button variant='outline' onClick={handleSync} className='w-auto'>
          <RefreshCw className='mr-2 h-4 w-4' />
          Sync
        </Button>
      </OptimisticWrapper>
    </div>
  );
};

const Add = () => {
  const { manageJob } = useJobsContext();
  const { job } = useJob();
  if (job?.status === 'closed' || !manageJob) return null;
  return <UploadApplications></UploadApplications>;
};

const Switcher = () => {
  const { handlePush, currentPath } = useSettings();
  return (
    <Tabs
      defaultValue={currentPath === '/jobs/[job]' ? 'applications' : 'metrics'}
    >
      <TabsList>
        <TabsTrigger
          value='applications'
          onClick={() => handlePush('/jobs/[job]')}
        >
          Applications
        </TabsTrigger>
        <TabsTrigger
          value='metrics'
          onClick={() => handlePush('/jobs/[job]/metrics')}
        >
          Metrics
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

const useSettingsActions = () => {
  const { push, pathName: pathname } = useRouterPro();
  const { handleJobDelete } = useJobsContext();
  const { job, handleJobAsyncUpdate } = useJob();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [modal, setModal] = useState(false);

  const isDelete = job?.status !== 'published';

  const handleDeleteJob = useCallback(() => {
    push(`${ROUTES['/jobs']()}?status=${job?.status ?? 'all'}`);
    handleJobDelete(job?.id ?? null!);
  }, [job?.id]);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleModalSubmit = useCallback(async () => {
    handleCloseModal();
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
  }, [job?.status, handleCloseModal]);

  const handlePush = <
    T extends Extract<keyof R, `/jobs/${string}`>,
    R extends typeof ROUTES = typeof ROUTES,
  >(
    type: T,
  ) => {
    setAnchorEl(null);
    //@ts-expect-error
    push(ROUTES[type]({ job: job?.id }));
  };

  return {
    job,
    anchorEl,
    setAnchorEl,
    modal,
    setModal,
    isDelete,
    handleCloseModal,
    handleModalSubmit,
    handlePush,
    currentPath: pathname as Extract<keyof typeof ROUTES, `/jobs/${string}`>,
  };
};

const SettingsContext = createContext<
  ReturnType<typeof useSettingsActions> | undefined
>(undefined);

const useSettings = () => {
  const value = useContext(SettingsContext);
  if (!value) throw new Error('SettingsContext not found as a provider');
  return value;
};

export const Settings = memo(() => {
  const value = useSettingsActions();
  return (
    <SettingsContext.Provider value={value}>
      <Dropdown />
    </SettingsContext.Provider>
  );
});
Settings.displayName = 'Settings';

const Dropdown = () => {
  const { modal } = useSettings();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='sm'>
            <MoreHorizontal className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
          <Modules />
          <CloseJob />
        </DropdownMenuContent>
      </DropdownMenu>
      {modal && <Close />}
    </>
  );
};

const Close = () => {
  const { job, modal, handleModalSubmit, handleCloseModal, isDelete } =
    useSettings();
  const [value, setValue] = useState('');
  const job_title = job?.job_title ?? '';
  return (
    <Dialog open={modal} onOpenChange={handleCloseModal}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{isDelete ? 'Delete' : 'Close'} This Job</DialogTitle>
          <DialogDescription>
            {isDelete
              ? 'Deleting this job will permanently remove all related data and make the job inaccessible. Candidate data will remain unaffected.'
              : 'Closing this job will permanently stop all activities, including tasks and scheduled interviews. It will also remove the job from the company page and prevent any new applications or candidate imports.'}
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <p className='text-sm text-muted-foreground'>
            Confirm by typing the job title{' '}
            <span className='font-semibold text-destructive'>
              {job_title.trim()}
            </span>{' '}
            below.
          </p>
          <Input
            placeholder={job_title.trim()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='mb-4'
          />
        </div>
        <DialogFooter>
          <Button variant='outline' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            onClick={handleModalSubmit}
            disabled={job_title.trim() !== value.trim()}
          >
            {isDelete ? 'Delete Job' : 'Close Job'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Modules = () => {
  const { manageJob } = useJobsContext();
  const { currentPath } = useSettings();
  const { isScoringEnabled } = useRolesAndPermissions();
  if (!manageJob)
    return (
      <>
        <WorkflowModule />
      </>
    );
  return (
    <>
      {currentPath !== '/jobs/[job]/job-details' && <JobDetailsModule />}
      {currentPath !== '/jobs/[job]/profile-score' && isScoringEnabled && (
        <ProfileScoreModule />
      )}
      {currentPath !== '/jobs/[job]/hiring-team' && <HiringTeamModule />}
      {currentPath !== '/jobs/[job]/interview-plan' && <InterviewModule />}

      {currentPath !== '/jobs/[job]/workflows' && <WorkflowModule />}
    </>
  );
};

const WorkflowModule = () => {
  const { handlePush } = useSettings();
  return (
    <DropdownMenuItem onSelect={() => handlePush('/jobs/[job]/workflows')}>
      <Workflow className='mr-2 h-4 w-4' />
      <span>Workflows</span>
    </DropdownMenuItem>
  );
};

const HiringTeamModule = () => {
  const { handlePush } = useSettings();
  return (
    <DropdownMenuItem onSelect={() => handlePush('/jobs/[job]/hiring-team')}>
      <UserPlus className='mr-2 h-4 w-4 text-muted-foreground' />
      <span>Hiring Team</span>
    </DropdownMenuItem>
  );
};

const ProfileScoreModule = () => {
  const { handlePush } = useSettings();
  return (
    <DropdownMenuItem onSelect={() => handlePush('/jobs/[job]/profile-score')}>
      <BarChart className='mr-2 h-4 w-4 text-muted-foreground' />
      <span>Profile Score</span>
    </DropdownMenuItem>
  );
};

const JobDetailsModule = () => {
  const { handlePush } = useSettings();
  return (
    <DropdownMenuItem onSelect={() => handlePush('/jobs/[job]/job-details')}>
      <FileText className='mr-2 h-4 w-4 text-muted-foreground' />
      <span>Job Details</span>
    </DropdownMenuItem>
  );
};

const InterviewModule = () => {
  const { handlePush } = useSettings();
  return (
    <DropdownMenuItem onSelect={() => handlePush('/jobs/[job]/interview-plan')}>
      <Calendar className='mr-2 h-4 w-4' />
      <span>Interview Plan</span>
    </DropdownMenuItem>
  );
};

const CloseJob = () => {
  const { setAnchorEl, setModal } = useSettings();
  const { job } = useJob();
  const isDelete = job?.status !== 'published';
  return (
    <DropdownMenuItem
      onSelect={() => {
        setModal(true);
        setAnchorEl(null);
      }}
    >
      <XCircle className='mr-2 h-4 w-4 text-muted-foreground' />
      <span>{isDelete ? 'Delete' : 'Close'} Job</span>
    </DropdownMenuItem>
  );
};
