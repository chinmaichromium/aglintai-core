import { Collapse, Dialog, Stack } from '@mui/material';
import { useState } from 'react';

import {
  DetailedFeedback,
  DetailedFeedbackCard,
  InterviewResult,
  InterviewResultStatus,
  InterviewTranscriptCard,
  JobDetailsSideDrawer,
  ResumeResult,
} from '@/devlink';
import AUIButton from '@/src/components/Common/AUIButton';
import CustomProgress from '@/src/components/Common/CustomProgress';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import SidePanelDrawer from '@/src/components/Common/SidePanelDrawer';
import { JobApplicationSections } from '@/src/context/JobApplicationsContext/types';
import { pageRoutes } from '@/src/utils/pageRouting';
import toast from '@/src/utils/toast';

import ResumePreviewer from './ResumePreviewer';
import { getGravatar } from '..';
import InterviewScoreCard from '../../Common/InreviewScoreCard';

function ApplicationDetails({
  openSidePanel,
  setOpenSidePanel,
  applicationDetails,
}) {
  const [openDetailedFeedback, setOpenDetailedFeedback] = useState(false);
  const [openResume, setOpenResume] = useState(false);

  const overAllScore = applicationDetails?.feedback?.length
    ? Math.floor(
        applicationDetails.feedback.reduce(
          (sum, entry) =>
            sum +
            Number(
              String(entry.rating).includes('/')
                ? entry.rating.split('/')[0]
                : entry.rating,
            ),
          0,
        ) / applicationDetails.feedback.length,
      )
    : 0;
  return (
    <>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '0px !important',
          },
        }}
        fullWidth
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
        openSidePanelDrawer={openSidePanel}
        setOpenPanelDrawer={setOpenSidePanel}
        onClose={() => {
          setOpenDetailedFeedback(false);
        }}
      >
        <Stack direction={'row'}>
          <Stack width={'35vw'}>
            <JobDetailsSideDrawer
              onClickCopyProfile={{
                onClick: () => {
                  navigator.clipboard
                    .writeText(
                      `https://recruiter.aglinthq.com/${pageRoutes.InterviewFeedbackLink}/${applicationDetails.application_id}`,
                    )
                    .then(() => {
                      toast.success('Link Copied');
                    });
                },
              }}
              onClickClose={{
                onClick: () => {
                  setOpenSidePanel(false);
                },
              }}
              slotProfileImage={
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
                  width={'78px'}
                  height={'78px'}
                  fontSize={'28px'}
                />
              }
              isCloseButtonVisible={!openDetailedFeedback}
              isInterviewInfoVisible={
                (overAllScore <= 0 &&
                  applicationDetails.status ===
                    JobApplicationSections.INTERVIEWING) ||
                applicationDetails.status === JobApplicationSections.APPLIED
              }
              slotInterviewInfo={
                <>
                  {applicationDetails.status ===
                    JobApplicationSections.INTERVIEWING &&
                    applicationDetails?.feedback?.length === 0 && (
                      <InterviewResultStatus
                        bgColorInterviewTag={{
                          style: { background: '#FFF0F1', color: '#8C232C' },
                        }}
                        textStatus={'Incomplete Interview'}
                        textDescription={
                          'Candidate not completed interview. Click bellow to resend invite'
                        }
                        slotResendButton={
                          <AUIButton variant='outlined'>Resend Link</AUIButton>
                        }
                        onClickCopyInterviewLink={{
                          onClick: () => {
                            navigator.clipboard
                              .writeText(
                                `https://app.aglinthq.com/${pageRoutes.INTERVIEWLANDINGPAGE}?id=${applicationDetails.application_id}`,
                              )
                              .then(() => {
                                toast.success('Link Copied');
                              });
                          },
                        }}
                      />
                    )}
                  {applicationDetails.status ===
                    JobApplicationSections.INTERVIEWING &&
                    applicationDetails.feedback === null && (
                      <InterviewResultStatus
                        bgColorInterviewTag={{
                          style: { background: '#CEE2F2', color: '#0F3554' },
                        }}
                        textStatus={'Invited'}
                        textDescription={
                          'candidate is invited for the interview and received an email with a link to take interview.'
                        }
                        slotResendButton={
                          <AUIButton variant='outlined'>Resend Link</AUIButton>
                        }
                        onClickCopyInterviewLink={{
                          onClick: () => {
                            navigator.clipboard
                              .writeText(
                                `https://app.aglinthq.com/${pageRoutes.INTERVIEWLANDINGPAGE}?id=${applicationDetails.application_id}`,
                              )
                              .then(() => {
                                toast.success('Link Copied');
                              });
                          },
                        }}
                      />
                    )}
                  {applicationDetails.status ===
                    JobApplicationSections.APPLIED && (
                    <InterviewResultStatus
                      bgColorInterviewTag={{
                        style: { background: '#FFF7ED', color: '#703815' },
                      }}
                      textStatus={'Pending Invite'}
                      textDescription={
                        'Candidate not invited to take interview. Invite candidate to take interview.'
                      }
                      slotResendButton={
                        <AUIButton variant='outlined'>Send Link</AUIButton>
                      }
                      onClickCopyInterviewLink={{
                        onClick: () => {
                          navigator.clipboard
                            .writeText(
                              `https://app.aglinthq.com/${pageRoutes.INTERVIEWLANDINGPAGE}?id=${applicationDetails.application_id}`,
                            )
                            .then(() => {
                              toast.success('Link Copied');
                            });
                        },
                      }}
                    />
                  )}
                </>
              }
              slotInterviewResult={
                <InterviewResult
                  textScore={giveRateInWordForInterview(overAllScore)}
                  slotScore={<InterviewScoreCard overAllScore={overAllScore} />}
                  slotInterviewFeedback={
                    <>
                      {applicationDetails?.feedback &&
                        applicationDetails?.feedback.map((feedback, i) => {
                          let rating = Number(
                            String(feedback.rating).includes('/')
                              ? feedback.rating.split('/')[0]
                              : feedback.rating,
                          );
                          return (
                            <DetailedFeedbackCard
                              textScorePercentage={rating + '%'}
                              textHeader={feedback.topic}
                              textDescription={''}
                              key={i}
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
                            />
                          );
                        })}
                    </>
                  }
                  onClickShowTranscript={{
                    onClick: () => {
                      setOpenDetailedFeedback(true);
                    },
                  }}
                />
              }
              textName={
                applicationDetails?.first_name +
                ' ' +
                applicationDetails?.last_name
              }
              isInterviewVisible={overAllScore > 0}
              isKeySkillsVisible={false}
              slotResumeScore={
                <ResumeResult
                  onClickDownloadResume={{
                    onClick: () => {
                      handleDownload(applicationDetails?.resume);
                    },
                  }}
                  onClickViewResume={{
                    onClick: () => {
                      setOpenResume(true);
                    },
                  }}
                  slotResumeScore={
                    <CustomProgress
                      progress={applicationDetails?.score}
                      rotation={270}
                      fillColor={
                        applicationDetails?.score >= 90
                          ? '#228F67'
                          : applicationDetails?.score >= 70
                          ? '#f79a3e'
                          : applicationDetails?.score >= 50
                          ? '#de701d'
                          : '#d93f4c'
                      }
                      bgFill={
                        applicationDetails?.score >= 90
                          ? '#edf8f4'
                          : applicationDetails?.score >= 70
                          ? '#fff7ed'
                          : applicationDetails?.score >= 50
                          ? '#ffeedb'
                          : '#fff0f1'
                      }
                      size={35}
                      strokeWidth={3}
                      label={applicationDetails?.score}
                      fontSize={20}
                    />
                  }
                  textFeedback={giveRateInWordToResume(
                    applicationDetails?.score,
                  )}
                />
              }
              isResumeVisible={applicationDetails.score}
              // isResumeVisible={false}
              textPhone={
                applicationDetails.phone ? applicationDetails.phone : '--'
              }
              textMail={
                applicationDetails.email ? applicationDetails.email : '--'
              }
              textSites={applicationDetails.company}
            />
          </Stack>
          <Collapse orientation='horizontal' in={openDetailedFeedback}>
            <Stack width={'30vw'}>
              <DetailedFeedback
                slotTranscript={
                  <>
                    {applicationDetails.conversation?.map((ele, i) => {
                      return (
                        <InterviewTranscriptCard
                          slotUserImage={
                            <MuiAvatar
                              src={'/'}
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
                  </>
                }
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
                onClickBack={{
                  onClick: () => {
                    setOpenDetailedFeedback(false);
                  },
                }}
              />
            </Stack>
          </Collapse>
        </Stack>
      </SidePanelDrawer>
    </>
  );
}

export default ApplicationDetails;

export function giveRateInWordToResume(score: number) {
  if (score === 0) {
    return 'Abysmal';
  } else if (score <= 10) {
    return 'Terrible';
  } else if (score <= 20) {
    return 'Poor';
  } else if (score <= 30) {
    return 'Bad';
  } else if (score <= 40) {
    return 'Below Average';
  } else if (score <= 50) {
    return 'Average';
  } else if (score <= 60) {
    return 'Fair';
  } else if (score <= 70) {
    return 'Good';
  } else if (score <= 80) {
    return 'Very Good';
  } else if (score <= 90) {
    return 'Excellent';
  } else {
    return 'Outstanding';
  }
}

export function giveRateInWordForInterview(overAllScore: number) {
  return overAllScore > 90
    ? `Absolutely incredible! 🌟😍`
    : overAllScore > 70
    ? `Truly outstanding! 🤩`
    : overAllScore > 50
    ? `Excellent job! 👏`
    : `Not up to mark! 😑`;
}

export const handleDownload = async (pdfUrl) => {
  toast.message('Resume downloading...');

  try {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    toast.error('Error downloading PDF:');
  }
};
