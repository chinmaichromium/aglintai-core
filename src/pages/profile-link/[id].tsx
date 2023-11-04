import { Avatar, Dialog, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  CandidateEducationCard,
  CandidateExperienceCard,
  CandidateSkillPills,
  InterviewAiTranscriptCard,
  InterviewCandidateCard,
  ProfileInterviewScore,
  ProfileShare,
} from '@/devlink';
import Icon from '@/src/components/Common/Icons/Icon';
import Loader from '@/src/components/Common/Loader';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import ScoreWheel, {
  ScoreWheelParams,
} from '@/src/components/Common/ScoreWheel';
import SidePanelDrawer from '@/src/components/Common/SidePanelDrawer';
import { getGravatar } from '@/src/components/JobApplicationsDashboard/ApplicationCard';
import {
  DetailedInterviewFeedbackParams,
  giveColorForInterviewScore,
  giveRateInWordForInterview,
  InterviewFeedbackParams,
  NewResumeScoreDetails,
  Transcript,
} from '@/src/components/JobApplicationsDashboard/ApplicationCard/ApplicationDetails';
import ResumePreviewer from '@/src/components/JobApplicationsDashboard/ApplicationCard/ApplicationDetails/ResumePreviewer';
import CompanyLogo from '@/src/components/JobApplicationsDashboard/Common/CompanyLogo';
import { getInterviewScore } from '@/src/components/JobApplicationsDashboard/utils';
import { palette } from '@/src/context/Theme/Theme';
import { JobTypeDB, RecruiterDB } from '@/src/types/data.types';
import { pageRoutes } from '@/src/utils/pageRouting';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

function InterviewFeedbackPage() {
  const router = useRouter();
  const [applicationDetails, setApplicationDetails] = useState<any>();
  const [job, setJob] = useState<JobTypeDB>();
  const [recruiter, setRecruiter] = useState<RecruiterDB>();
  const [openTranscript, setOpenTranscript] = useState(false);
  const [loader, setLoader] = useState(true);
  const [openResume, setOpenResume] = useState(false);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getApplicationDetails(id);
    }
  }, [router]);

  async function getApplicationDetails(id) {
    const { data: jobApp, error: errorJob } = await supabase
      .from('job_applications')
      .select()
      .eq('application_id', id);

    if (!errorJob) {
      const { data, error } = await supabase
        .from('candidates')
        .select()
        .eq('id', jobApp[0]?.candidate_id);
      if (!error) {
        setApplicationDetails({ ...jobApp[0], candidates: data[0] });
        getJobDetails(jobApp[0]?.job_id);
      }
    }
  }

  async function getJobDetails(job_id) {
    const { data, error } = await supabase
      .from('public_jobs')
      .select()
      .eq('id', job_id);
    if (!error) {
      const { data: recruiter, error: errorRecruiter } = await supabase
        .from('recruiter')
        .select()
        .eq('id', data[0].recruiter_id);
      if (!errorRecruiter) {
        setRecruiter(recruiter[0]);
      }
      setJob(data[0]);
      setLoader(false);
    }
  }

  let resumeScoreWheel = <></>;
  let interviewScore = 0;

  if (applicationDetails && job) {
    interviewScore = getInterviewScore(applicationDetails.feedback);

    resumeScoreWheel = (
      <ScoreWheel
        id={`ScoreWheelApplicationCard${Math.random()}`}
        jd_score={applicationDetails.jd_score}
        parameter_weights={job.parameter_weights as ScoreWheelParams}
        fontSize={7}
      />
    );
  }

  if (loader) {
    return (
      <Stack width={'100%'} height={'100vh'}>
        <Loader />
      </Stack>
    );
  } else
    return (
      <>
        <Dialog
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: '0px !important',
              border: 'none !important',
            },
            '.MuiDialog-container': {
              height: 'auto',
            },
          }}
          fullWidth
          maxWidth={'lg'}
          open={openResume}
          onClose={() => setOpenResume(false)}
        >
          <Stack>
            <Stack direction={'row'} justifyContent={'center'}>
              <ResumePreviewer url={applicationDetails?.resume} />
            </Stack>
          </Stack>
        </Dialog>
        <SidePanelDrawer
          openSidePanelDrawer={openTranscript}
          setOpenPanelDrawer={setOpenTranscript}
        >
          <Stack width={500}>
            <Transcript
              applicationDetails={applicationDetails}
              setOpenDetailedFeedback={setOpenTranscript}
              hideFeedback={true}
            />
          </Stack>
        </SidePanelDrawer>

        <ProfileShare
          isOverviewVisible={
            !!applicationDetails?.candidates?.json_resume?.overview
          }
          textInterviewScore={interviewScore ? `${interviewScore} / 100` : '--'}
          slotResumeScore={resumeScoreWheel}
          slotInterview={
            applicationDetails.feedback && (
              <>
                <ProfileInterviewScore
                  textInterviewScore={
                    interviewScore ? `${interviewScore} / 100` : '--'
                  }
                  propsTextColor={{
                    style: {
                      color: giveColorForInterviewScore(interviewScore),
                    },
                  }}
                  propsTextColorInterviewScore={{
                    style: {
                      color: giveColorForInterviewScore(interviewScore),
                    },
                  }}
                  textInterviewScoreState={giveRateInWordForInterview(
                    interviewScore,
                  )}
                  slotFeedbackScore={
                    <InterviewFeedbackParams
                      feedbackParamsObj={applicationDetails.feedback}
                    />
                  }
                  slotDetailedFeedback={
                    <DetailedInterviewFeedbackParams
                      feedbackParamsObj={applicationDetails.feedback}
                    />
                  }
                />
              </>
            )
          }
          isInterviewVisible={applicationDetails.feedback !== null}
          slotInterviewTranscript={applicationDetails.conversation.map(
            (con, i) => {
              return (
                <>
                  <InterviewAiTranscriptCard
                    key={i}
                    textAiScript={con.content}
                    slotAiImage={
                      <Image
                        src={'/images/logo/aglint.svg'}
                        width={20}
                        height={20}
                        alt=''
                      />
                    }
                    textAiName={'Interviewer'}
                  />
                  <InterviewCandidateCard
                    key={i}
                    textCandidateScript={con.userContent}
                    slotCandidateImage={
                      <MuiAvatar
                        level={applicationDetails.first_name}
                        src={
                          applicationDetails?.email &&
                          !applicationDetails?.profile_image
                            ? getGravatar(
                                applicationDetails?.email,
                                applicationDetails?.first_name,
                              )
                            : applicationDetails?.profile_image
                        }
                        variant={'rounded'}
                        width={'auto'}
                        height={'auto'}
                        fontSize={'28px'}
                      />
                    }
                  />
                </>
              );
            },
          )}
          isEducationVisible={
            applicationDetails?.json_resume?.education.length > 0
          }
          slotCandidateEducationCard={applicationDetails?.json_resume?.education.map(
            (e, i) => (
              <CandidateEducationCard
                key={i}
                textUniversityName={e.institution}
                textDate={`${e.startDate} ${
                  e.endDate && `${e.startDate && '-'} ${e.endDate}`
                }`}
              />
            ),
          )}
          isExperienceVisible={applicationDetails?.json_resume?.work.length > 0}
          slotCandidateExperienceCard={applicationDetails?.json_resume?.work.map(
            (w, i) => (
              <CandidateExperienceCard
                key={i}
                slotLogo={
                  <CompanyLogo
                    companyName={w.name ? w.name.trim().toLowerCase() : null}
                  />
                }
                textRole={w.position}
                textCompany={w.name}
                textDate={`${w.startDate} - ${w.endDate}`}
              />
            ),
          )}
          isSkillVisible={applicationDetails?.json_resume?.skills.length > 0}
          slotSkill={applicationDetails?.json_resume?.skills.map((s, i) => (
            <CandidateSkillPills key={i} textSkill={s.name} />
          ))}
          onClickCopyProfile={{
            onClick: () => {
              navigator.clipboard
                .writeText(
                  `${process.env.NEXT_PUBLIC_HOST_NAME}${pageRoutes.ProfileLink}/${applicationDetails.application_id}`,
                )
                .then(() => {
                  toast.success('Link Copied');
                });
            },
          }}
          propsTextColor={{
            style: { color: giveColorForInterviewScore(interviewScore) },
          }}
          slotCompanyLogo={
            <Avatar
              variant='rounded'
              src={recruiter.logo}
              sx={{
                color: 'common.black',
                '& .MuiAvatar-img ': {
                  objectFit: 'contain',
                },
                height: '40px',
                width: '40px',
                background: palette.grey[100],
              }}
            >
              <Icon variant='CompanyOutlinedBig' />
            </Avatar>
          }
          slotResume={
            <Stack maxWidth={'400px'}>
              <NewResumeScoreDetails
                applicationDetails={applicationDetails}
                job={job as any}
                feedback={true}
              />
            </Stack>
          }
          textMail={applicationDetails?.candidates?.email}
          textPhone={applicationDetails?.candidates?.phone || ''}
          textName={
            applicationDetails?.candidates?.first_name +
              ' ' +
              applicationDetails?.candidates?.last_name || ''
          }
          isActivityVisible={false}
          slotProfileImage={
            <MuiAvatar
              level={applicationDetails?.candidates?.first_name}
              src={
                applicationDetails?.candidates?.email &&
                !applicationDetails?.candidates?.profile_image
                  ? getGravatar(
                      applicationDetails?.candidates?.email,
                      applicationDetails?.candidates?.first_name,
                    )
                  : applicationDetails?.candidates?.profile_image
              }
              variant={'rounded'}
              width={'auto'}
              height={'auto'}
              fontSize={'28px'}
            />
          }
          companyName={job?.company}
          textOverview={applicationDetails?.candidates?.json_resume?.overview}
          location={job?.location}
        />
      </>
    );
}

export default InterviewFeedbackPage;

InterviewFeedbackPage.getLayout = (page) => {
  return <>{page}</>;
};
