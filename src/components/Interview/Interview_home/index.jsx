/* eslint-disable no-console */
import { Stack } from '@mui/material';
import { useState } from 'react';

import { DisconnectInterviewModal, NewInterviewScreen } from '@/devlink';
import { useInterviewContext } from '@/src/context/InterviewContext';
import { useInterviewDetailsContext } from '@/src/context/InterviewDetails';

import CandidatePanel from './CandidatePanel';
import VideoCandidatePanel from './CandidatePanel/VideoCandidatePanel';
import InterviewerPanel from './InterviewerPanel';
import VideoInterviewerPanel from './InterviewerPanel/VideoInterviewerPanel';
import Transcript from './Transcript';
import CompleteLoaderLottie from '../Components/CompleteLoaderLottie';
import MuiAvatar from '../../Common/MuiAvatar';
import MuiPopup from '../../Common/MuiPopup';
import SidePanelDrawer from '../../Common/SidePanelDrawer';

function Interview_home() {
  const [openSidePanelDrawer, setOpenPanelDrawer] = useState(false);

  const {
    conversations,
    getFeedback,
    totalNumberOfQuestions,
    questionIndex,
    openThanksPage,
    setOpenThanksPage,
    openEndInterview,
    setOpenEndInterview,
    disconnecting,
    videoAssessment,
  } = useInterviewContext();
  const { candidateDetails, jobDetails } = useInterviewDetailsContext();

  return (
    <Stack>
      <SidePanelDrawer
        openSidePanelDrawer={openSidePanelDrawer}
        setOpenPanelDrawer={setOpenPanelDrawer}
      >
        <Stack width={'400px'}>
          <Transcript
            conversations={conversations}
            setOpenPanelDrawer={setOpenPanelDrawer}
            interviewerImage={candidateDetails.profile_image}
            candidateImage={candidateDetails.profile_image}
          />
        </Stack>
      </SidePanelDrawer>
      <MuiPopup
        props={{
          open: openEndInterview,
          onClose: () => {
            !openThanksPage && setOpenEndInterview(false);
          },
        }}
      >
        <Stack width={'507px'}>
          <DisconnectInterviewModal
            slotLoaderLottie={<CompleteLoaderLottie />}
            isLoadingVisible={openThanksPage}
            isDisconnectVisible={!openThanksPage}
            onClickDisconnect={{
              onClick: () => {
                disconnecting();
                setOpenThanksPage(true);
              },
            }}
            onClickClose={{
              onClick: () => {
                setOpenEndInterview(false);
              },
            }}
            onClickCancel={{
              onClick: () => {
                setOpenEndInterview(false);
              },
            }}
          />
        </Stack>
      </MuiPopup>
      <NewInterviewScreen
        slotInterviewLogo={
          <MuiAvatar
            height={'40px'}
            width={'40px'}
            src={jobDetails?.logo}
            fontSize={'20px'}
            variant={'rounded'}
          />
        }
        onClickEndInterview={{
          onClick: () => {
            if (totalNumberOfQuestions.length === questionIndex + 1) {
              setOpenEndInterview(true);
              setOpenThanksPage(true);
              getFeedback();
            } else {
              setOpenEndInterview(true);
            }
          },
        }}
        onClickSupport={{
          onClick: () => {
            window.open(
              `${process.env.NEXT_PUBLIC_HOST_NAME}/support/create?id=${candidateDetails.application_id}`,
            );
          },
        }}
        onClickTransscript={{
          onClick: () => {
            console.log('Transcript');
            setOpenPanelDrawer(true);
          },
        }}
        slotInterviewRight={
          videoAssessment ? <VideoInterviewerPanel /> : <InterviewerPanel />
        }
        slotInterviewLeft={
          videoAssessment ? <VideoCandidatePanel /> : <CandidatePanel />
        }
      />
    </Stack>
  );
}

export default Interview_home;
