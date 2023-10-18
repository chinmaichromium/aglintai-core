/* eslint-disable no-console */
import { Stack } from '@mui/material';
import { useState } from 'react';

import { DisconnectInterviewModal, NewInterviewScreen } from '@/devlink';
import { useInterviewContext } from '@/src/context/InterviewContext';
import { useInterviewDetailsContext } from '@/src/context/InterviewDetails';

import CandidatePanel from './CandidatePanel';
import InterviewerPanel from './InterviewerPanel';
import Transcript from './Transcript';
import CompleteLoaderLottie from '../Components/CompleteLoaderLottie';
import MuiAvatar from '../../Common/MuiAvatar';
import MuiPopup from '../../Common/MuiPopup';
import SidePanelDrawer from '../../Common/SidePanelDrawer';
import { getGravatar } from '../../JobApplicationsDashboard/ApplicationCard';

function Interview_home() {
  const [openSidePanelDrawer, setOpenPanelDrawer] = useState(false);
  const [openEndInterview, setOpenEndInterview] = useState(false);
  const [openThanksPage, setOpenThanksPage] = useState(false);

  const { conversations, getFeedback } = useInterviewContext();
  const { candidateDetails, jobDetails } = useInterviewDetailsContext();
  return (
    <Stack>
      <SidePanelDrawer
        openSidePanelDrawer={openSidePanelDrawer}
        setOpenPanelDrawer={setOpenPanelDrawer}
      >
        <Stack width={'500px'}>
          <Transcript
            conversations={conversations}
            setOpenPanelDrawer={setOpenPanelDrawer}
            interviewerImage={getGravatar(
              candidateDetails?.email,
              candidateDetails?.first_name,
            )}
            candidateImage={getGravatar(
              candidateDetails?.email,
              candidateDetails?.first_name,
            )}
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
                getFeedback();
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
            console.log('End Interview');
            setOpenEndInterview(true);
          },
        }}
        onClickSupport={{
          onClick: () => {
            window.open(
              `https://recruiter.aglinthq.com/support?id=${candidateDetails.application_id}`,
            );
          },
        }}
        onClickTransscript={{
          onClick: () => {
            console.log('Transcript');
            setOpenPanelDrawer(true);
          },
        }}
        slotInterviewRight={<InterviewerPanel />}
        slotInterviewLeft={<CandidatePanel />}
      />
    </Stack>
  );
}

export default Interview_home;
