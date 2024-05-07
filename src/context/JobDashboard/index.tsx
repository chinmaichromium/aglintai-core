import { createContext, ReactNode, useContext, useEffect } from 'react';

import useProviderJobDashboardActions from './hooks';
import { useJobDashboardStore } from './store';
import { type JobDashboardContextType } from './types';

const JobDashboardContext = createContext(undefined);

const JobDashboardProvider = ({ children }: { children: ReactNode }) => {
  const resetAll = useJobDashboardStore(({ resetAll }) => resetAll);
  const value = useProviderJobDashboardActions();
  useEffect(() => {
    return () => resetAll();
  }, []);
  return (
    <JobDashboardContext.Provider value={value}>
      {children}
    </JobDashboardContext.Provider>
  );
};

export default JobDashboardProvider;

export const useJobDetails = (): JobDashboardContextType => {
  const value = useContext(JobDashboardContext);
  return { ...value };
};
