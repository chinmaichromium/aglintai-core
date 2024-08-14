import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { isEqual } from 'lodash';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

import { handleJobApi } from '@/src/apiUtils/job/utils';
import { jobQueries, useInvalidateJobQueries } from '@/src/queries/job';
import {
  useUploadApplication,
  useUploadCsv,
  useUploadResume,
} from '@/src/queries/job-applications';
import { useJobUpdate } from '@/src/queries/jobs';
import { Job } from '@/src/queries/jobs/types';
import toast from '@/src/utils/toast';

import { useAuthDetails } from '../AuthContext/AuthContext';
import { useJobs } from '../JobsContext';
import {
  getDetailsValidity,
  getHiringTeamValidity,
  validateDescription,
  validateJd,
} from './utils';

const useJobContext = () => {
  const params = useParams();
  const queryClient = useQueryClient();
  if (!params.id)
    throw Error(
      'Invalid pathname, context must be wrapped to a page with [id]',
    );

  const { recruiter_id, recruiter } = useAuthDetails();

  const { jobs, initialLoad: jobsLoad, manageJob, devlinkProps } = useJobs();

  const jobLoad = useMemo(
    () => !!(recruiter_id && jobsLoad),
    [recruiter_id, jobsLoad],
  );

  const job_id = useMemo(() => params.id as string, [params.id]);

  const job = useMemo(
    () =>
      jobLoad
        ? ((jobs.data ?? []).find((job) => job.id === job_id) ?? null)
        : undefined,
    [jobs.data, job_id, jobs.status, jobLoad],
  );

  const total = useMemo(
    () =>
      Object.values(job?.section_count ?? {}).reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0),
    [job?.section_count],
  );

  const scoreParameterPollEnabled = !!job && job.scoring_criteria_loading;

  const applicationScoringPollEnabled =
    !!job &&
    job.status === 'published' &&
    (job.processing_count.fetching !== 0 ||
      job.processing_count.processing !== 0);

  const jobPolling =
    !!job && (scoreParameterPollEnabled || applicationScoringPollEnabled);

  const jdValidity = !validateJd(job?.draft?.jd_json);

  const status = job &&
    jobLoad && {
      loading: job?.scoring_criteria_loading,
      description_error:
        !job?.scoring_criteria_loading &&
        validateDescription(job?.draft?.description ?? ''),
      description_changed:
        !job.scoring_criteria_loading &&
        !isEqual(
          {
            department_id: job.draft.department_id,
            description: job.draft.description,
            job_title: job.draft.job_title,
            job_type: job.draft.job_type,
            workplace_type: job.draft.workplace_type,
          } as Omit<Job['draft'], 'jd_json'>,
          {
            department_id: job.department_id,
            description: job.description,
            job_title: job.job_title,
            job_type: job.job_type,
            workplace_type: job.workplace_type,
          } as Omit<Job['draft'], 'jd_json'>,
        ),
      jd_json_error: !job.scoring_criteria_loading && !jdValidity,
      scoring_criteria_changed:
        !job.scoring_criteria_loading &&
        !isEqual(job.draft.jd_json, job.jd_json),
    };

  const interviewPlans = useQuery(jobQueries.interview_plans({ id: job_id }));

  const { mutateAsync: jobAsyncUpdate, mutate: jobUpdate } = useJobUpdate();

  const handleJobUpdate = async (
    job: Omit<Parameters<typeof jobUpdate>[0], 'recruiter_id'>,
  ) => {
    if (recruiter) {
      jobUpdate({ ...job, id: job_id, recruiter_id: recruiter.id });
    }
  };

  const handleJobAsyncUpdate = async (
    job: Omit<Parameters<typeof jobUpdate>[0], 'recruiter_id'>,
  ) => {
    if (recruiter) {
      try {
        return await jobAsyncUpdate({
          ...job,
          id: job_id,
          recruiter_id: recruiter.id,
        });
      } catch {
        //
      }
    }
  };

  const detailsValidity = getDetailsValidity(job);
  const hiringTeamValidity = getHiringTeamValidity(job);

  const publishStatus = {
    detailsValidity,
    hiringTeamValidity,
    jdValidity,
    loading: job?.scoring_criteria_loading,
    publishable:
      detailsValidity.validity &&
      hiringTeamValidity.validity &&
      jdValidity &&
      !job?.scoring_criteria_loading,
  };

  const canPublish =
    job?.status === 'draft' ||
    status?.description_changed ||
    status?.scoring_criteria_changed;

  const handlePublish = async () => {
    if (publishStatus.publishable) {
      const {
        // eslint-disable-next-line no-unused-vars
        processing_count,
        // eslint-disable-next-line no-unused-vars
        section_count,
        // eslint-disable-next-line no-unused-vars
        flags,
        // eslint-disable-next-line no-unused-vars
        application_match,
        // eslint-disable-next-line no-unused-vars
        department,
        ...safeJob
      } = job;
      await handleJobAsyncUpdate({
        ...safeJob,
        ...safeJob.draft,
        status: 'published',
      });
      return true;
    } else {
      if (publishStatus.loading)
        toast.warning(
          'Generating profile score criteria. Please wait before publishing.',
        );
      else {
        if (!detailsValidity.validity || !hiringTeamValidity.validity) {
          if (!detailsValidity.validity) toast.error(detailsValidity.message);
          if (!hiringTeamValidity.validity)
            toast.error(hiringTeamValidity.message);
        } else {
          toast.error('Unable to publish. Please verify the job details.');
        }
      }
    }
  };

  const handleRegenerateJd = async (job: Job) => {
    await handleJobAsyncUpdate({
      scoring_criteria_loading: true,
    });
    await handleGenerateJd(job.id, true);
  };

  const { mutate: handleUploadApplication } = useUploadApplication({
    job_id,
  });
  const { mutate: handleUploadResume } = useUploadResume({
    job_id,
  });
  const { mutate: handleUploadCsv } = useUploadCsv({
    job_id,
  });

  const { revalidateJobQueries } = useInvalidateJobQueries();

  useQueries({
    queries: [
      jobQueries.job({
        id: job_id,
        enabled: !!job,
        initialData: job,
        queryClient,
      }),
      jobQueries.polling({
        id: job_id,
        enabled: jobPolling,
        queryClient,
      }),
    ],
  });

  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      return;
    }
    if (!jobPolling) {
      revalidateJobQueries(job_id);
    }
  }, [jobPolling]);

  return {
    job,
    total,
    job_id,
    jobLoad,
    scoreParameterPollEnabled,
    applicationScoringPollEnabled,
    jobPolling,
    interviewPlans,
    revalidateJobQueries: () => revalidateJobQueries(job_id),
    handleJobAsyncUpdate,
    handleJobUpdate,
    handleRegenerateJd,
    handleUploadApplication,
    handleUploadResume,
    handleUploadCsv,
    canPublish,
    handlePublish,
    publishStatus,
    status,
    jdValidity,
    manageJob,
    devlinkProps,
  };
};

export { useJobContext };

export const handleGenerateJd = async (
  job_id: string,
  regenerate: boolean = false,
) => {
  return await handleJobApi('profileScore', { job_id, regenerate });
};
