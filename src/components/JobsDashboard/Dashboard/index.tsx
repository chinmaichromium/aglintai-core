/* eslint-disable security/detect-object-injection */
import { Dialog, Popover, Stack } from '@mui/material';
import { capitalize } from 'lodash';
import { useRouter } from 'next/router';
// import posthog from 'posthog-js';
import { useCallback, useState } from 'react';

import {
  // AssistantApplicantCount,
  // AssistantDashboard,
  AssistStatus,
  CloseDeleteJob,
  CloseJobButton,
  CloseJobModal
  // DashboardMenu,
} from '@/devlink';
import { Breadcrum, PageLayout } from '@/devlink2';
import {
  DarkPill,
  EnableDisable,
  GraphBlock,
  JobDashboard as JobDashboardDev,
  JobDashboardTopRight,
  ModuleCard,
  PipeLine
} from '@/devlink3';
import { useJobApplications } from '@/src/context/JobApplicationsContext';
import { JobApplicationSections } from '@/src/context/JobApplicationsContext/types';
import { useJobDetails } from '@/src/context/JobDashboard';
import { useJobs } from '@/src/context/JobsContext';
import NotFoundPage from '@/src/pages/404';
import { Job } from '@/src/queries/job/types';
import { pageRoutes } from '@/src/utils/pageRouting';
import toast from '@/src/utils/toast';

import DashboardBarChart from './BarChart';
import DashboardDoughnutChart from './Doughnut';
import DashboardLineChart from './LineChart';
import TenureAndExpSummary from './TenureAndExpSummary';
import Loader from '../../Common/Loader';
import AssessmentIcon from '../../Common/ModuleIcons/assessmentIcon';
import ProfileScoreIcon from '../../Common/ModuleIcons/profileScoreIcon';
// import EmailTemplateIcon from '../../Common/ModuleIcons/emailTemplateIcon';
import SchedulingIcon from '../../Common/ModuleIcons/schedulingIcon';
import ScreeningIcon from '../../Common/ModuleIcons/screeningIcon';
import UITextField from '../../Common/UITextField';
import { AddCandidates } from '../../JobApplicationsDashboard';
import PublishButton from '../../publishButton';

const JobDashboard = () => {
  const { initialLoad, job } = useJobDetails();

  return initialLoad ? (
    job !== undefined ? (
      <Dashboard />
    ) : (
      <NotFoundPage />
    )
  ) : (
    <Stack width={'100%'} height={'100vh'} justifyContent={'center'}>
      <Loader />
    </Stack>
  );
};

const getMatches = (
  counts: ReturnType<typeof useJobDetails>['matches']['data']
) => {
  return Object.entries(counts.matches).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        count: getPlural(value, 'candidate'),
        percentage: `${value ? Math.trunc((value / counts.total) * 100) : 0}%`
      };
      return acc;
    },
    {} as {
      // eslint-disable-next-line no-unused-vars
      [id in keyof typeof counts.matches]: {
        count: number;
        percentage: string;
      };
    }
  );
};

const Dashboard = () => {
  const {
    job,
    matches: { data: counts },
    draftValidity
  } = useJobDetails();
  const { push } = useRouter();
  const { handleJobUpdate, handleJobDelete, handleJobPublish } = useJobs();

  const score_matches = getMatches(counts);

  const [openImportCandidates, setOpenImportCandidates] = useState(false);
  const [popover, setPopover] = useState(false);

  const handleCloseJob = useCallback(async () => {
    return await handleJobUpdate(job.id, { status: 'closed' });
  }, [job.id]);
  const handleDeleteJob = useCallback(() => {
    push(`${pageRoutes.JOBS}?status=${job?.status ?? 'all'}`);
    handleJobDelete(job.id);
  }, [job.id]);

  const handleSubmit = useCallback(async () => {
    switch (job.status) {
      case 'draft':
        handleDeleteJob();
        break;
      case 'published':
        {
          const { data } = await handleCloseJob();
          if (data) toast.success('Job closed successfully');
        }
        break;
      case 'closed':
        handleDeleteJob();
        break;
    }
  }, [job.status]);

  const handlePublish = async () => {
    if (draftValidity) {
      return await handleJobPublish(job);
    }
    toast.error('Unable to publish. Please check job details.');
  };

  return (
    <>
      <AddCandidates
        openImportCandidates={openImportCandidates}
        setOpenImportCandidates={setOpenImportCandidates}
      />
      <PageLayout
        slotBody={
          <JobDashboardDev
            textTopMatchPercentage={score_matches.topMatch.percentage}
            textTopMatchCount={score_matches.topMatch.count}
            textGoodMatchPercentage={score_matches.goodMatch.percentage}
            textGoodMatchCount={score_matches.goodMatch.count}
            textAverageMatchPercentage={score_matches.averageMatch.percentage}
            textAveageMatchCount={score_matches.averageMatch.count}
            textBelowAveragePercentage={score_matches.poorMatch.percentage}
            textBelowAverageCount={score_matches.poorMatch.count}
            textNotAMatchPercentage={score_matches.noMatch.percentage}
            textNotAMatchCount={score_matches.noMatch.count}
            slotLocationGraphBlock={<Doughnut />}
            slotExperienceGraph={<LineGraph />}
            slotSkillGraphBlock={<Bars />}
            slotPipeline={<Pipeline />}
            slotModuleCard={<Modules />}
            slotCardWithNumber={<TenureAndExpSummary />}
            textCandidateCount={counts.total}
            onClickAssistant={{
              onClick: () => push(`/jobs/${job.id}/agent`)
            }}
          />
        }
        slotTopbarLeft={<BreadCrumbs />}
        slotTopbarRight={
          <JobDashboardTopRight
            slotJobStatus={
              <AssistStatus
                isCloseVisible={job?.status === 'closed'}
                isDraftVisible={job?.status === 'draft'}
                isPublishedVisible={job?.status === 'published'}
              />
            }
            slotPublishButton={
              <PublishButton onClick={async () => await handlePublish()} />
            }
            isPublish={job.status !== 'closed'}
            isEditError={!draftValidity}
            onClickEdit={{ onClick: () => push(`/jobs/${job.id}/edit`) }}
            slotCloseJobButton={
              <>
                <CloseJobButton
                  onClickClose={{
                    onClick: () => {
                      setPopover(true);
                    }
                  }}
                />
                <JobClose
                  popover={popover}
                  onClose={() => setPopover(false)}
                  onSubmit={() => handleSubmit()}
                />
              </>
            }
          />
        }
      />
    </>
  );
};

export default JobDashboard;

const BreadCrumbs = () => {
  const router = useRouter();
  const { job } = useJobDetails();
  return (
    <>
      <Breadcrum
        isLink
        textName={`${capitalize(job?.status ?? 'all')} jobs`}
        onClickLink={{
          onClick: () => {
            router.push(`/jobs?status=${job?.status ?? 'all'}`);
          },
          style: { cursor: 'pointer' }
        }}
      />
      <Breadcrum textName={capitalize(job?.job_title ?? 'Job')} showArrow />
    </>
  );
};

const Pipeline = () => {
  const { job } = useJobDetails();
  const { setSection } = useJobApplications();
  const { push } = useRouter();

  const newSections = Object.entries(job.count).reduce(
    (acc, [key, value]) => {
      acc[key] = { count: value, label: getPlural(value, 'candidate') };
      return acc;
    },
    // eslint-disable-next-line no-unused-vars
    {} as { [id in keyof Job['count']]: { count: number; label: string } }
  );
  const handlClick = (section: JobApplicationSections) => {
    setSection(section);
    push(`/jobs/${job.id}/candidate-list`);
  };
  return (
    <>
      <PipeLine
        isLeft={false}
        textCandidateCount={newSections.new.label}
        textName={capitalize(JobApplicationSections.NEW)}
        onClickPipeline={{
          onClick: () => handlClick(JobApplicationSections.NEW)
        }}
      />
      {job.phone_screen_enabled && (
        <PipeLine
          textCandidateCount={newSections.screening.label}
          textName={capitalize(JobApplicationSections.SCREENING)}
          onClickPipeline={{
            onClick: () => handlClick(JobApplicationSections.SCREENING)
          }}
        />
      )}
      {job.assessment && (
        <PipeLine
          textCandidateCount={newSections.assessment.label}
          textName={capitalize(JobApplicationSections.ASSESSMENT)}
          onClickPipeline={{
            onClick: () => handlClick(JobApplicationSections.ASSESSMENT)
          }}
        />
      )}
      <PipeLine
        textCandidateCount={newSections.interview.label}
        textName={capitalize(JobApplicationSections.INTERVIEW)}
        onClickPipeline={{
          onClick: () => handlClick(JobApplicationSections.INTERVIEW)
        }}
      />
      <PipeLine
        textCandidateCount={newSections.qualified.label}
        textName={capitalize(JobApplicationSections.QUALIFIED)}
        onClickPipeline={{
          onClick: () => handlClick(JobApplicationSections.QUALIFIED)
        }}
      />
      <PipeLine
        isRight={false}
        textCandidateCount={newSections.disqualified.label}
        textName={capitalize(JobApplicationSections.DISQUALIFIED)}
        onClickPipeline={{
          onClick: () => handlClick(JobApplicationSections.DISQUALIFIED)
        }}
      />
    </>
  );
};

const JobClose = ({
  popover,
  onClose,
  onSubmit
}: {
  popover: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  const {
    job: { job_title, location, status }
  } = useJobDetails();
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState('');
  const handleClose = () => {
    setModal(false);
    setTimeout(() => setValue(''), 400);
  };
  const openModal = () => {
    onClose();
    setModal(true);
  };
  const handleSubmit = () => {
    handleClose();
    onSubmit();
  };
  const isDelete = status !== 'published';
  return (
    <>
      <Popover
        open={popover}
        onClose={() => onClose()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          '& .MuiPaper-root': {
            border: 'none !important',
            overflow: 'visible !important',
            top: '62px !important'
          }
        }}
      >
        <CloseDeleteJob
          onClickClose={{ onClick: () => openModal() }}
          isCloseJobVisible={!isDelete}
          isDeleteJobVisible={isDelete}
        />
      </Popover>
      <Dialog open={modal} onClose={() => handleClose()}>
        <CloseJobModal
          textPopupTitle={`${isDelete ? 'Delete' : 'Close'} Job Confirmation`}
          textWarning={
            isDelete
              ? 'By deleting this job, it will no longer be accessible, and the data related to this job will be permanently deleted.'
              : 'Closing this job will unpublish it, preventing candidates from applying or being imported. Additionally, the screening and assessment processes for this job will be stopped.'
          }
          textButton={isDelete ? 'Delete Job' : 'Close Job'}
          textJobTitle={job_title.trim()}
          onClickCancel={{ onClick: () => handleClose() }}
          onClickCloseJob={{ onClick: () => handleSubmit() }}
          textLocation={location}
          isDisabled={job_title.trim() !== value.trim()}
          slotInput={
            <UITextField
              placeholder={job_title.trim()}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          }
        />
      </Dialog>
    </>
  );
};

const Modules = () => {
  return (
    <>
      <InterviewModule />
      <AssessmentModule />
      {/* <ProfileScoreModule /> */}
      <ScreeningModule />
    </>
  );
};

const AssessmentModule = () => {
  const { job } = useJobDetails();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/assessment`);
  };
  return (
    <ModuleCard
      onClickCard={{ onClick: () => handleClick() }}
      textName={'Assessment'}
      slotIcon={<AssessmentIcon />}
      slotEnableDisable={<EnableDisable isEnabled={job.assessment} />}
    />
  );
};

export type DashboardGraphOptions<
  T extends keyof Pick<
    ReturnType<typeof useJobDetails>,
    'assessments' | 'locations' | 'matches' | 'skills' | 'tenureAndExperience'
  >
> = {
  // eslint-disable-next-line no-unused-vars
  [id in keyof ReturnType<typeof useJobDetails>[T]['data']]: string;
};

const Doughnut = () => {
  const options: DashboardGraphOptions<'locations'> = {
    city: 'City',
    state: 'State',
    country: 'Country'
  };
  const [selection, setSelection] = useState<keyof typeof options>('city');
  const pills = Object.entries(options).map(([key, value]) => (
    <DarkPill
      key={key}
      isActive={selection === key}
      textPill={value}
      onClickPill={{
        onClick: () => setSelection(key as keyof typeof options)
      }}
    />
  ));
  return (
    <GraphBlock
      slotLocationGraph={<DashboardDoughnutChart option={selection} />}
      slotDarkPillLocation={pills}
    />
  );
};

const LineGraph = () => {
  const options: {
    // eslint-disable-next-line no-unused-vars
    [id in keyof Pick<
      DashboardGraphOptions<'tenureAndExperience'>,
      'experience' | 'tenure'
    >]: string;
  } = {
    experience: 'Experience',
    tenure: 'Tenure'
  };
  const [selection, setSelection] =
    useState<keyof typeof options>('experience');
  const pills = Object.entries(options).map(([key, value]) => (
    <DarkPill
      key={key}
      isActive={selection === key}
      textPill={value}
      onClickPill={{
        onClick: () => setSelection(key as keyof typeof options)
      }}
    />
  ));
  return (
    <GraphBlock
      slotLocationGraph={<DashboardLineChart option={selection} />}
      slotDarkPillLocation={pills}
    />
  );
};

const Bars = () => {
  const options: DashboardGraphOptions<'skills'> = {
    top_skills: 'Top skills',
    required_skills: 'Skills mentioned in JD'
  };
  const [selection, setSelection] =
    useState<keyof typeof options>('top_skills');
  const pills = Object.entries(options).map(([key, value]) => (
    <DarkPill
      key={key}
      isActive={selection === key}
      textPill={value}
      onClickPill={{
        onClick: () => setSelection(key as keyof typeof options)
      }}
    />
  ));
  return (
    <GraphBlock
      slotLocationGraph={<DashboardBarChart option={selection} />}
      slotDarkPillLocation={pills}
    />
  );
};

const getPlural = (count: number, label: string) => {
  return `${count} ${capitalize(label)}${count === 1 ? '' : 's'}`;
};

const ScreeningModule = () => {
  const { job } = useJobDetails();
  const { push } = useRouter();

  const handleClick = () => {
    push(`/jobs/${job.id}/screening`);
  };
  return (
    <ModuleCard
      onClickCard={{ onClick: () => handleClick() }}
      textName={'Screening'}
      slotIcon={<ScreeningIcon />}
      slotEnableDisable={<EnableDisable isEnabled={job.phone_screen_enabled} />}
    />
  );
};

const InterviewModule = () => {
  const { job } = useJobDetails();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/interview-plan`);
  };
  return (
    <ModuleCard
      onClickCard={{ onClick: () => handleClick() }}
      textName={'Interview Plan (Scheduler)'}
      slotIcon={<SchedulingIcon />}
      slotEnableDisable={<></>}
    />
  );
};

// eslint-disable-next-line no-unused-vars
const ProfileScoreModule = () => {
  const { job } = useJobDetails();
  const { push } = useRouter();
  const handleClick = () => {
    push(`/jobs/${job.id}/profile-score`);
  };
  return (
    <ModuleCard
      onClickCard={{ onClick: () => handleClick() }}
      isError={true}
      textName={'Profile Score'}
      slotIcon={<ProfileScoreIcon />}
      slotEnableDisable={<></>}
    />
  );
};
