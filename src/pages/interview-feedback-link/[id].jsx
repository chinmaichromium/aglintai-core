import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import {
  DetailedFeedback,
  DetailedFeedbackCard,
  InterviewScreenFeedback,
  InterviewTranscriptCard,
} from '@/devlink';
import CustomProgress from '@/src/components/Common/CustomProgress';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import SidePanelDrawer from '@/src/components/Common/SidePanelDrawer';
import { supabase } from '@/src/utils/supabaseClient';
function InterviewFeedbackPage() {
  const router = useRouter();

  const [applicationDetails, setApplicationDetails] = useState({});
  const [job, setJob] = useState({});
  const [openTranscript, setOpenTranscript] = useState(false);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getApplicationDetails(id);
    }
  }, [router]);

  async function getApplicationDetails(id) {
    const { data, error } = await supabase
      .from('job_applications')
      .select()
      .eq('application_id', id);
    if (!error) {
      setApplicationDetails(data[0]);
      getJobDetails(data[0]?.job_id);
    }
  }

  async function getJobDetails(job_id) {
    const { data, error } = await supabase
      .from('public_jobs')
      .select()
      .eq('id', job_id);
    if (!error) {
      setJob(data[0]);
    }
  }

  return (
    <div>
      <SidePanelDrawer
        openSidePanelDrawer={openTranscript}
        setOpenPanelDrawer={setOpenTranscript}
      >
        <Stack width={500}>
          <DetailedFeedback
            onClickBack={{
              onClick: () => {
                setOpenTranscript(false);
              },
            }}
            slotTranscript={applicationDetails.conversation?.map((ele, i) => {
              return (
                <InterviewTranscriptCard
                  slotUserImage={
                    <MuiAvatar
                      level={applicationDetails?.first_name}
                      height={'24px'}
                      width={'24px'}
                      fontSize={'15px'}
                      variant={'circular'}
                    />
                  }
                  slotAiImage={
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 36 36'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M27.4875 16.8075C24.255 15.9975 22.635 15.6 21.5175 14.4825C20.4 13.3575 20.0025 11.745 19.1925 8.5125L18 3.75L16.8075 8.5125C15.9975 11.745 15.6 13.365 14.4825 14.4825C13.3575 15.6 11.745 15.9975 8.5125 16.8075L3.75 18L8.5125 19.1925C11.745 20.0025 13.365 20.4 14.4825 21.5175C15.6 22.6425 15.9975 24.255 16.8075 27.4875L18 32.25L19.1925 27.4875C20.0025 24.255 20.4 22.635 21.5175 21.5175C22.6425 20.4 24.255 20.0025 27.4875 19.1925L32.25 18L27.4875 16.8075Z'
                        fill='#FF6224'
                      ></path>
                    </svg>
                  }
                  textQuestion={ele?.content}
                  textAnswer={ele.userContent}
                  textAiName={'Aglint Ai'}
                  userTextName={applicationDetails?.first_name}
                  key={i}
                />
              );
            })}
            slotDetailedFeedback={<></>}
          />
        </Stack>
      </SidePanelDrawer>
      <InterviewScreenFeedback
        slotProfileImage={
          <MuiAvatar
            width={'84px'}
            height={'84px'}
            variant={'rounded'}
            level={applicationDetails?.first_name}
            fontSize={'40px'}
          />
        }
        textName={
          applicationDetails?.first_name + ' ' + applicationDetails?.last_name
        }
        textRole={applicationDetails?.job_title}
        textMail={applicationDetails?.email}
        textDate={
          applicationDetails.interviewing_date &&
          `${new Date(
            applicationDetails.interviewing_date,
          ).getDate()} ${new Intl.DateTimeFormat('en-US', {
            timeZone: 'UTC',
            month: 'long',
          }).format(new Date(applicationDetails.interviewing_date))} ${new Date(
            applicationDetails.interviewing_date,
          ).getFullYear()}`
        }
        textDuration={
          applicationDetails?.interview_duration &&
          `  ${applicationDetails?.interview_duration.split(':')[0]} Minutes ${
            applicationDetails?.interview_duration.split(':')[1]
          } seconds`
        }
        textTime={
          applicationDetails.interviewing_date &&
          `
        ${new Date(applicationDetails.interviewing_date).toLocaleTimeString(
          'en-US',
          { timeZone: 'UTC', hour: 'numeric', minute: '2-digit', hour12: true },
        )}
        `
        }
        textNumberQuestion={
          applicationDetails?.conversation &&
          applicationDetails?.conversation.length
        }
        slotCompanyLogo={
          <Stack direction={'row'} alignItems={'center'} spacing={'20px'}>
            <MuiAvatar
              width={'44px'}
              height={'44px'}
              variant={'rounded'}
              level={job?.company}
              src={job?.logo}
              fontSize={'40px'}
            />
            <Typography>{job?.company}</Typography>
          </Stack>
        }
        slotScore={
          <CustomProgress
            rotation={270}
            size={20}
            fontSize={20}
            label={90}
            progress={90}
          />
        }
        onClickShowTranscript={{
          onClick: () => {
            setOpenTranscript(true);
          },
        }}
        slotDetailedFeedback={
          <>
            {applicationDetails?.feedback?.map((ele, i) => {
              let rating = Number(
                String(ele.rating).includes('/')
                  ? ele.rating.split('/')[0]
                  : ele.rating,
              );
              return (
                <DetailedFeedbackCard
                  textColorScore={{
                    style: {
                      color:
                        rating >= 90
                          ? '#228F67'
                          : rating >= 70
                          ? '#f79a3e'
                          : rating >= 50
                          ? '#de701d'
                          : '#d93f4c',
                    },
                  }}
                  textHeader={ele?.topic}
                  textDescription={ele.feedback}
                  textScorePercentage={rating + '%'}
                  slotScore={
                    <CustomProgress
                      rotation={270}
                      fillColor={
                        rating >= 90
                          ? '#228F67'
                          : rating >= 70
                          ? '#f79a3e'
                          : rating >= 50
                          ? '#de701d'
                          : '#d93f4c'
                      }
                      bgFill={
                        rating >= 90
                          ? '#edf8f4'
                          : rating >= 70
                          ? '#fff7ed'
                          : rating >= 50
                          ? '#ffeedb'
                          : '#fff0f1'
                      }
                      size={5}
                      progress={rating}
                    />
                  }
                  key={i}
                />
              );
            })}
          </>
        }
      />
    </div>
  );
}

export default InterviewFeedbackPage;

InterviewFeedbackPage.getLayout = (page) => {
  return <>{page}</>;
};
