import { useApplication } from '@/src/context/ApplicationContext';

import ResumeScore from '../../../resumeScore';

const Badge = () => {
  const {
    meta: { data, status },
  } = useApplication();
  if (status === 'pending') return <>Loading score...</>;
  if (data?.processing_status !== 'success') return <></>;
  return (
    <ResumeScore
      resume_processing_state='processed'
      resume_score={data.resume_score}
    />
  );
};

export { Badge };
