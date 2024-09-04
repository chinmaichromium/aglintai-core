import { AnalysisSkeleton } from '@devlink/AnalysisSkeleton';
import { Skeleton } from '@devlink2/Skeleton';

import { useApplication } from '@/context/ApplicationContext';

import { Loader } from '../../Common/Loader';
import { AnalysisItem } from './Common/AnalysisItem';

export const Skills = () => {
  const {
    details: { status },
  } = useApplication();
  if (status === 'pending')
    if (status === 'pending')
      return (
        <Loader count={1}>
          <AnalysisSkeleton slotSkeleton={<Skeleton />} />
        </Loader>
      );
  return <AnalysisItem type='skills' />;
};
