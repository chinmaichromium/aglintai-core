import axios from 'axios';
import { get, isEmpty } from 'lodash';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import {
  AvatarModal,
  CategoriesEmptyState,
  ScreeningQuestionCard,
} from '@/devlink';
import ScreeningVideoGenerating from '@/src/components/Common/Lotties/ScreeningVideoGenerating';
import MuiPopup from '@/src/components/Common/MuiPopup';
import UITextField from '@/src/components/Common/UITextField';
import UITypography from '@/src/components/Common/UITypography';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { avatar_list } from '@/src/utils/avatarlist';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import { Drag, Drop } from './dragDrop';
import {
  InterviewConfigType,
  QuestionType,
  useJobForm,
} from '../../JobPostFormProvider';
import { supabaseWrap } from '../../utils';

const Questions = ({
  questions,
  categIdx,
  categId,
}: {
  categIdx: number;
  questions: InterviewConfigType['questions'];
  categId: string;
}) => {
  const { handleUpdateFormFields } = useJobForm();
  const handleDeleteQn = (qnId) => {
    const updatedQns = questions.filter((q) => q.id !== qnId);
    handleUpdateFormFields({
      path: `interviewConfig[${categIdx}].questions`,
      value: updatedQns,
    });
  };

  return (
    <>
      <Drop id={categId} type='questions'>
        {questions.map((q, index) => {
          return (
            <>
              {
                <Drag key={q.id} id={q.id} index={index}>
                  <Question
                    question={q}
                    key={q.id}
                    path={`interviewConfig[${categIdx}].questions[${index}]`}
                    handleDeleteQn={handleDeleteQn}
                  />
                </Drag>
              }
            </>
          );
        })}
        {questions.length === 0 && <CategoriesEmptyState />}
      </Drop>
    </>
  );
};

const Question = ({
  question,
  path,
  handleDeleteQn,
}: {
  question: QuestionType;
  path: string;
  // eslint-disable-next-line no-unused-vars
  handleDeleteQn: (qnId: any) => void;
}) => {
  const { jobForm, handleUpdateFormFields } = useJobForm();
  const [showEdit, setShowEdit] = useState(false);
  const [editQn, setEditQn] = useState(question.question);
  const [playing, setPlaying] = useState(false);
  const { recruiter } = useAuthDetails();
  const [isQnHovered, setQnHovered] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const [d] = supabaseWrap(
          await supabase
            .from('ai_videos')
            .select()
            .eq('video_id', question.videoId),
        );
        if (d) {
          handleUpdateFormFields({
            path: `${path}.videoUrl`,
            value: d.file_url,
          });
        }
      } catch (err) {
        toast.error('Something went wrong. Please try again');
      }
    })();
  }, []);

  const handleSave = () => {
    if (!editQn) return;
    handleUpdateFormFields({
      path: `${path}.question`,
      value: editQn,
    });
    setShowEdit(false);
  };

  const avatar = (recruiter.ai_avatar as any) || avatar_list[0];
  const handleGenerateVideo = async () => {
    try {
      let videoInfo;
      if (process.env.NODE_ENV === 'development') {
        videoInfo = { video_id: 'def5da2177c44b089ccf6fa597cc3c4d' };
      } else {
        let {
          data: { data },
        } = await axios.post('/api/generateVideo', {
          text: question.question,
          avatar_id: get(recruiter, 'ai_avatar.avatar_id', avatar.avatar_id),
          voice_id: get(recruiter, 'ai_avatar.voice_id', avatar.voice_id),
          test: recruiter.email == 'ravi+test@aglinthq.com' ? false : true,
        });
        videoInfo = data;
      }

      const updatedQn: QuestionType = {
        ...question,
        videoId: videoInfo.video_id,
        videoQn: question.question,
        videoUrl: '',
      };

      handleUpdateFormFields({
        path: `${path}`,
        value: {
          ...updatedQn,
        },
      });
    } catch (err) {
      setIsApiError(true);
      toast.error('Something went wrong please try again');
    }
  };

  const handleRegenerate = async () => {
    const updateQn: QuestionType = {
      ...question,
      videoId: '',
      videoUrl: '',
    };
    handleUpdateFormFields({
      path: path,
      value: { ...updateQn },
    });
    handleGenerateVideo();
  };

  const handleVideoPlay = () => {
    if (!playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying((pre) => !pre);
  };

  const videoUrl = question.videoUrl;
  const isVideoGenerating =
    isEmpty(question.videoUrl) && !isEmpty(question.videoId);
  const isVideoError =
    (!isEmpty(question.question) &&
      !isEmpty(question.videoQn) &&
      question.question !== question.videoQn) ||
    isApiError;
  const isGenerateVisible = !isVideoError && !question.videoId;
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <>
      <MuiPopup
        props={{
          open: openPopUp,
          // onClose: handleVideoEnd,
          maxWidth: 'md',
        }}
      >
        <AvatarModal
          textName={avatar.name}
          isPauseIconVisible={playing}
          isPlayIconVisible={!playing}
          onClickPlayPause={{
            onClick: (event: { stopPropagation: () => void }) => {
              event.stopPropagation();
              handleVideoPlay();
            },
          }}
          onClickClose={{
            onClick: (event: { stopPropagation: () => void }) => {
              event.stopPropagation();
              setPlaying(false);
              setOpenPopUp(false);
            },
          }}
          // textName={l.name}
          slotVideo={
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              src={videoUrl}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              ref={videoRef}
              onEnded={() => {
                setPlaying(false);
              }}
              autoPlay
            />
          }
        />
      </MuiPopup>
      <div
        onMouseEnter={() => {
          setQnHovered(true);
        }}
        onMouseLeave={() => {
          setQnHovered(false);
        }}
      >
        <ScreeningQuestionCard
          slotInput={
            <>
              {showEdit ? (
                <UITextField
                  multiline
                  fullWidth
                  defaultValue={question.question}
                  value={editQn}
                  onChange={(e) => {
                    setEditQn(e.target.value);
                  }}
                />
              ) : (
                <UITypography type='small'>{question.question}</UITypography>
              )}
            </>
          }
          isEditButtonVisible={!showEdit}
          isGenerateButtonVisible={false}
          isSaveButtonVisible={showEdit}
          onClickEdit={{
            onClick: () => {
              setShowEdit(true);
            },
          }}
          onClickDelete={{
            onClick: () => {
              handleDeleteQn(question.id);
            },
          }}
          onClickCancel={{
            onClick: () => {
              setShowEdit(false);
            },
          }}
          onClickSave={{
            onClick: handleSave,
          }}
          // slotEmptyVideo={}
          onClickGenerateVideo={{
            onClick: () => {
              handleGenerateVideo();
            },
          }}
          onClickPlay={{
            onClick: () => {
              setOpenPopUp(true);
              setPlaying(true);
            },
          }}
          onClickPause={{
            onClick: handleVideoPlay,
          }}
          slotGeneratingLottie={<ScreeningVideoGenerating />}
          slotVideo={
            videoUrl ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                src={videoUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                ref={videoRef}
                onEnded={() => {
                  setPlaying(false);
                }}
              />
            ) : (
              <Image
                src={'/images/EmptyVideo.svg'}
                width={256}
                height={150}
                alt=''
                style={{
                  objectFit: 'cover',
                  transform: 'translate(0px, -5px)',
                }}
              />
            )
          }
          isVideoVisible={jobForm.formFields.videoAssessment}
          isPlayButtonVisible={!playing}
          isPauseButtonVisible={playing}
          isPlayPauseButtonVisible={!isVideoError && videoUrl.length !== 0}
          isGenerateVisible={isGenerateVisible}
          isGeneratingLoaderVisible={isVideoGenerating && !isVideoError}
          isErrorVisible={isVideoError}
          onClickRetry={{
            onClick: () => {
              handleRegenerate();
            },
          }}
          textButtonError={'Regenerate'}
          textError={`Changed question click 'Regenrate'`}
          isActive={isQnHovered}
        />
      </div>
    </>
  );
};

export default Questions;
