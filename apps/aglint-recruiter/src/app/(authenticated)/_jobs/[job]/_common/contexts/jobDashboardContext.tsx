import { createContext, memo, type PropsWithChildren } from 'react';

import { useJob } from '@/job/hooks/useJob';
import {
  useJobLocations,
  useJobSchedules,
  useJobSkills,
  useJobTenureAndExperience,
} from '@/queries/job-dashboard';

const useProviderJobDashboardContext = () => {
  const { job } = useJob();

  const skills = useJobSkills(job);
  const locations = useJobLocations(job);
  const tenureAndExperience = useJobTenureAndExperience(job);
  const schedules = useJobSchedules(job);

  const value = {
    schedules,
    tenureAndExperience,
    skills,
    locations,
  };

  return value;
};

export const JobDashboardContext =
  createContext<ReturnType<typeof useProviderJobDashboardContext>>(undefined);

export const JobDashboardProvider = memo(({ children }: PropsWithChildren) => {
  const value = useProviderJobDashboardContext();
  return (
    <JobDashboardContext.Provider value={value}>
      {children}
    </JobDashboardContext.Provider>
  );
});
JobDashboardProvider.displayName = 'JobDashboardProvider';
