/* eslint-disable no-inner-declarations */
//@ts-nocheck
import { Avatar, Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { InterviewWelcome } from '@/devlink';
import { useInterviewContext } from '@/src/context/InterviewContext';
import { useInterviewDetailsContext } from '@/src/context/InterviewDetails';
import { supabase } from '@/src/utils/supabaseClient';

import Loader from '../../Common/Loader';
function InterviewInstructions() {
  const { initialLoading, jobDetails, candidateDetails } =
    useInterviewDetailsContext();
  const { startInterview, video_Urls, startVideoInterview, videoAssessment } =
    useInterviewContext();

  useEffect(() => {
    setTimeout(() => {
      getTour();
    }, 2000);
  }, []);

  function getTour() {
    const nextTourButtons = document.querySelectorAll('[data-next-button]');
    nextTourButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const nextStep = this.getAttribute('data-next-button');
        tourAnimation(nextStep);
      });
    });

    const tourBoxes = document.querySelectorAll('[tour-box]');
    const tourPositions = document.querySelectorAll('[data-tour-step]');
    function tourAnimation(nextStep: string) {
      if (nextStep == 'finish') {
        document
          .querySelector(`[data-tour-completed]`)
          .setAttribute('data-tour-completed', 'true');
      } else if (nextStep == 'reset') {
        setTimeout(() => {
          document
            .querySelector(`[data-tour-completed]`)
            .setAttribute('data-tour-completed', 'false');
          document.querySelector(`[data-next-button="1"]`).click();
        }, 200);
      } else {
        tourBoxes.forEach((tourBox) => {
          const tourBoxValue = tourBox.getAttribute('tour-box');

          if (tourBoxValue === nextStep) {
            tourBox.setAttribute('tour-box-active', 'true');
            tourPositions.forEach((position) => {
              if (position.getAttribute('data-tour-step') === nextStep) {
                position.setAttribute('data-active-step', 'true');
              } else {
                position.setAttribute('data-active-step', 'false');
              }
            });
          } else {
            tourBox.setAttribute('tour-box-active', 'false');
          }
        });
      }
    }
  }
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  function onVideoPlay() {
    if (!playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying((pre) => !pre);
  }

  useEffect(() => {
    if (jobDetails?.intro_videos?.videoId)
      getIntroVideo(jobDetails?.intro_videos?.videoId);
  }, [jobDetails]);

  async function getIntroVideo(id: any) {
    const { data, error } = await supabase
      .from('ai_videos')
      .select()
      .eq('video_id', id);

    if (!error) {
      setVideoUrl(data[0].file_url);
      return data[0];
    }
  }

  function handleVideoEnded() {
    setPlaying(false);
  }

  return (
    <div>
      {initialLoading ? (
        <Stack width={'100%'} height={'100vh'}>
          <Loader />
        </Stack>
      ) : (
        <>
          {video_Urls?.length > 0 &&
            video_Urls.map((ele: any, i: number) => {
              if (ele)
                return (
                  <div
                    key={i}
                    style={{
                      display: 'none',
                    }}
                  >
                    <video
                      preload='auto'
                      key={i}
                      src={ele?.split('.mp4')[0] + '.mp4'}
                    >
                      <track
                        kind='captions'
                        srclang='en'
                        label='English'
                        default
                      />
                    </video>
                  </div>
                );
            })}
          <InterviewWelcome
            slotWelcomeVideo={
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={videoUrl}
                ref={videoRef}
                onEnded={handleVideoEnded}
              />
            }
            onClickPause={{
              onClick: onVideoPlay,
            }}
            onClickPlay={{
              onClick: onVideoPlay,
            }}
            isPauseButtonVisible={playing}
            isPlayButtonVisible={!playing}
            isWelcomeVideoVisible={videoUrl}
            isPlayPuaseVisible={true}
            onClickSupport={{
              onClick: () => {
                window.open(
                  `${process.env.NEXT_PUBLIC_HOST_NAME}/support/create?id=${candidateDetails.application_id}`,
                );
              },
            }}
            onClickAboutCompany={{
              onClick: () => {
                window.open(
                  `${process.env.NEXT_PUBLIC_WEBSITE}/job-post/${jobDetails?.id}`,
                );
              },
            }}
            slotLogo={
              <Avatar
                variant='circular'
                src={jobDetails?.logo}
                sx={{
                  width: '50px',
                  height: '50px',
                }}
              />
            }
            textCompany={jobDetails?.company}
            textRole={jobDetails?.job_title}
            isAboutVisible={jobDetails?.company_details}
            textCompanyDescription={jobDetails?.company_details}
            onClickStart={{
              onClick: () => {
                if (videoAssessment) startVideoInterview();
                else startInterview();
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default InterviewInstructions;
