/* eslint-disable no-undef */
import { Stack } from '@mui/material';
import React, { useRef, useState } from 'react';

import { AiTranscript } from '@/devlink/AiTranscript';
import { InterviewTranscriptCard } from '@/devlink/InterviewTranscriptCard';
import { UserTranscript } from '@/devlink/UserTranscript';
import PlayStop from '@/src/components/Common/Lotties/playStopLottie';
import MuiAvatar from '@/src/components/Common/MuiAvatar';

function ConversationCard({
  roleImage,
  roleName,
  textForSpeech,
  src,
  index,
  cardFor,
}) {
  const [pauseState, setPauseSound] = useState(false);

  const [getIndex, setIndex] = useState(null);
  const audioRef = useRef(null);
  const lottieRef = useRef();
  function playAudio() {
    setIndex(index);
    setPauseSound(true);
    audioRef.current.play();
  }
  function pauseAudio() {
    setIndex(null);

    setPauseSound(false);
    audioRef.current.pause();
  }
  const handleAudioEnded = () => {
    setIndex(null);

    setPauseSound(false);
  };
  return (
    <>
      <audio
        // controls
        onEnded={handleAudioEnded}
        preload='auto'
        ref={audioRef}
        src={src}
      >
        <track kind='captions' />
      </audio>
      <InterviewTranscriptCard
        slotAiTranscript={<></>}
        slotUserTranscript={
          <>
            {cardFor !== 'ai' ? (
              <UserTranscript
                slotUserImage={
                  <MuiAvatar
                    src={roleImage}
                    level={roleName}
                    variant={'rounded-small'}
                  />
                }
                textAnswer={textForSpeech}
                userTextName={roleName}
                slotUserPlayButton={
                  <Stack
                    onClick={() => {
                      if (!pauseState && index !== getIndex) {
                        playAudio();
                      }
                      if (pauseState && index === getIndex) {
                        pauseAudio();
                      }
                    }}
                  >
                    <PlayStop
                      lottieRef={lottieRef}
                      speaking={pauseState && index === getIndex}
                    />
                  </Stack>
                }
              />
            ) : (
              <AiTranscript
                slotAiImage={
                  <MuiAvatar
                    src={roleImage}
                    level={roleName}
                    variant={'rounded-small'}
                  />
                }
                textQuestion={textForSpeech}
                textAiName={roleName}
                slotPlayButton={
                  <Stack
                    onClick={() => {
                      if (!pauseState && index !== getIndex) {
                        playAudio();
                      }
                      if (pauseState && index === getIndex) {
                        pauseAudio();
                      }
                    }}
                  >
                    <PlayStop
                      lottieRef={lottieRef}
                      speaking={pauseState && index === getIndex}
                    />
                  </Stack>
                }
              />
            )}
          </>
        }
      />
    </>
  );
}

export default ConversationCard;
