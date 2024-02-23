import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { WidgetGrid3X3, WidgetJobCard } from '@/devlink3';
import Loader from '@/src/components/Common/Loader';
import Seo from '@/src/components/Common/Seo';
import { JobAssistantProvider } from '@/src/context/JobAssistant';
import { useJobs } from '@/src/context/JobsContext';

function AgentPage() {
  const router = useRouter();
  const { handleJobRead } = useJobs();
  const [jobs, setJObs] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getjobs() {
    const jobList = await handleJobRead();
    setLoading(false);
    setJObs(jobList);
  }

  useEffect(() => {
    getjobs();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Seo
        title='Aglint | Agents'
        description='AI Powered Talent Development Platform.'
      />
      <JobAssistantProvider>
        <Stack
          p={'20px'}
          mt={10}
          height={'100%'}
          width={'100%'}
          alignItems={'center'}
          gap={2}
        >
          <Stack width={'100%'} maxWidth={844} justifyContent={'start'}>
            <Typography>Select a job</Typography>
          </Stack>
          <WidgetGrid3X3
            slotWidget={jobs.map((item, i) => {
              return (
                <WidgetJobCard
                  onClickJob={{
                    onClick: () => {
                      router.push(`/agent/jobs/${item.id}`);
                    },
                  }}
                  key={i}
                  textJob={item.company}
                  textSecondary={item.job_title}
                />
              );
            })}
          />
        </Stack>
      </JobAssistantProvider>
    </>
  );
}

export default AgentPage;
