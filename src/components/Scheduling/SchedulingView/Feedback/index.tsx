import { Dialog, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';

import {
  AvatarWithName,
  FeedbackTableRow,
  FeedbackViewPopup,
  GroupFeedback,
  MyFeedbackPopup,
  RoundedNumber,
  ScheduleTabFeedback,
} from '@/devlink3';
import Avatar from '@/src/components/Common/MuiAvatar';
import { ShowCode } from '@/src/components/Common/ShowCode';
import TipTapAIEditor from '@/src/components/Common/TipTapAIEditor';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { palette } from '@/src/context/Theme/Theme';
import { DatabaseTable } from '@/src/types/customSchema';
import { getFullName } from '@/src/utils/jsonResume';
import toast from '@/src/utils/toast';

import DynamicLoader from '../../Interviewers/DynamicLoader';
import { useAllInterviewersDetails } from '../hooks';
import {
  re_mapper,
  saveInterviewerFeedback,
  useInterviewerRelations,
} from './util.function';

type FeedbackWindowInterviewersType = {
  [key: string]: {
    feedback: {
      recommendation: number;
      objective: string;
    };
    user_id: string;
    session: {
      id: string;
      title: string;
      created_at: string;
      time: {
        start: string;
        end: string;
      };
      status:
        | 'waiting'
        | 'confirmed'
        | 'completed'
        | 'cancelled'
        | 'reschedule'
        | 'not_scheduled';
    };
    relation_id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_image: string;
    position: string;
  }[];
};

const FeedbackWindow = ({
  interview_sessions,
  multiSession,
}: {
  interview_sessions: FeedbackWindowInterviewersType[string][number]['session'][];
  multiSession: boolean;
}) => {
  const {
    data: relationsData,
    isLoading,
    refetch,
  } = useInterviewerRelations({
    session_ids: interview_sessions.map((item) => item.id),
  });
  const { isAllowed, userDetails } = useAuthDetails();
  const user_id = userDetails?.user.id;
  const { data: members, isFetching } = useAllInterviewersDetails();

  const tempRelations = useMemo(() => {
    const tempData = (
      (relationsData || []) as unknown as {
        session_id: string;
        feedback: (typeof relationsData)[number]['feedback'];
        interview_module_relation: (typeof relationsData)[number]['interview_module_relation'];
      }[]
    ).filter((item) => Boolean(item.interview_module_relation?.id));

    const tempRelation: {
      [key: string]: {
        feedback: (typeof relationsData)[number]['feedback'];
        relation_id: string;
        user_id: string;
      }[];
    } = {};

    //   console.log(tempData.length);
    for (let item of tempData) {
      const temp = tempRelation[item.session_id] || [];
      temp.push({
        feedback: item.feedback,
        relation_id: item.interview_module_relation.id,
        user_id: item.interview_module_relation.user_id,
      });
      tempRelation[item.session_id] = temp;
      // console.log({ item, tempRelation });
    }
    return tempRelation;
  }, [relationsData]);

  const interviewers = useMemo(() => {
    const interviewers: FeedbackWindowInterviewersType = {};

    if (tempRelations && members.length) {
      interview_sessions.forEach((session) => {
        const temp = tempRelations[String(session.id)] || [];
        temp.forEach((memRelation) => {
          const tempMem = members.find(
            (item) => item.user_id === memRelation.user_id,
          );
          if (!tempMem) return;
          interviewers[String(session.id)] = [
            ...(interviewers[String(session.id)] || []),
            {
              user_id: tempMem.user_id,
              session,
              relation_id: memRelation.relation_id,
              first_name: tempMem.first_name,
              last_name: tempMem.last_name,
              email: tempMem.email,
              profile_image: tempMem.profile_image,
              position: tempMem.position,
              feedback: memRelation.feedback,
            },
          ];
        });
      });
    } else {
      interview_sessions.forEach((session_id) => {
        interviewers[String(session_id)] = [];
      });
    }
    return interviewers;
  }, [tempRelations, members]);

  const handelSubmit = async ({
    session_id,
    relation_id,
    feedback,
  }: {
    session_id: string;
    relation_id: string;
    feedback: DatabaseTable['interview_session_relation']['feedback'];
  }) => {
    return (
      relation_id &&
      (await saveInterviewerFeedback({
        // feedback: JSON.stringify(feedback),
        feedback,
        session_id,
        relation_id,
      }).then(() => {
        refetch();
        return true;
      }))
    );
  };

  return (
    <>
      <ShowCode>
        <ShowCode.When isTrue={isLoading || isFetching}>
          <Stack position={'relative'} height={'calc(100vh - 172px)'}>
            <DynamicLoader />
          </Stack>
        </ShowCode.When>
        <ShowCode.When isTrue={isAllowed(['admin'])}>
          <></>
          <AdminFeedback
            {...{
              user_id,
              multiSession,
              interviewers: Object.keys(interviewers)
                .map((key) => interviewers[String(key)])
                .flat(),
              handelSubmit,
            }}
          />
        </ShowCode.When>
        <ShowCode.Else>
          <></>
          <InterviewerFeedback
            multiSession={multiSession}
            interviewers={Object.keys(interviewers)
              .map((key) => interviewers[String(key)])
              .flat()
              .filter((item) => item.user_id === user_id)}
            handelSubmit={handelSubmit}
          />
        </ShowCode.Else>
      </ShowCode>
    </>
  );
};

export default FeedbackWindow;

const AdminFeedback = ({
  user_id,
  interviewers,
  handelSubmit,
  multiSession,
}: {
  user_id: string;
  interviewers: FeedbackWindowInterviewersType[string];
  handelSubmit: ({
    // eslint-disable-next-line no-unused-vars
    session_id,
    // eslint-disable-next-line no-unused-vars
    relation_id,
    // eslint-disable-next-line no-unused-vars
    feedback,
  }: {
    session_id: string;
    relation_id: string;
    feedback: DatabaseTable['interview_session_relation']['feedback'];
  }) => Promise<Boolean>;
  multiSession: boolean;
}) => {
  const [selectedInterviewer, setSelectedInterviewer] = useState<{
    index: number;
    interviewer: (typeof interviewers)[number];
  }>({ index: null, interviewer: null });

  const [edit, setEdit] = useState(false);

  const handelFeedbackRequest = ({
    e,
    session_id,
    relation_id,
  }: {
    e: MouseEvent;
    session_id: string;
    relation_id: string;
  }) => {
    e.stopPropagation();
    return handelSubmit({
      session_id: session_id,
      relation_id: relation_id,
      feedback: { recommendation: null, objective: null },
    }).then(() => {
      toast.success('Mail Request for Feedback Sent.');
      return true;
    });
  };
  const sessions: { [key: string]: typeof interviewers } = {};
  interviewers.forEach((item) => {
    sessions[item.session.id] = [...(sessions[item.session.id] || []), item];
  });

  return (
    <>
      <ScheduleTabFeedback
        styleMinWidth={{
          style: { minWidth: multiSession ? '1164px' : '900px' },
        }}
        isSessionVisible={multiSession}
        slotFeedbackTableRow={
          <>
            {Object.keys(sessions)
              .map((key) => {
                const session = sessions[key] || [];
                if (!session.length) return null;
                return (
                  <GroupFeedback
                    key={key}
                    textInterviewType={session[0].session.title}
                    textDate={
                      <>
                        {multiSession
                          ? dayjs(session[0].session.created_at).format(
                              'DD MMMM YYYY',
                            )
                          : ''}
                      </>
                    }
                    textTime={
                      <>
                        {`${
                          multiSession
                            ? dayjs(session[0].session.time?.start).format(
                                'hh:mm A',
                              )
                            : ''
                        } to ${
                          multiSession
                            ? dayjs(session[0].session.time?.end).format(
                                'hh:mm A',
                              )
                            : ''
                        }`}
                      </>
                    }
                    slotFeedbackTableRow={
                      <>
                        {session.map((int, index) => {
                          const isFeedBackEnabled =
                            int.session.status === 'completed';
                          return (
                            <FeedbackTableRow
                              key={int.user_id}
                              isSessionVisible={multiSession}
                              isNoFeedback={isFeedBackEnabled && !int.feedback}
                              isFeedbackReqSubmitted={Boolean(
                                isFeedBackEnabled &&
                                  int.feedback &&
                                  !int.feedback.objective &&
                                  int.user_id !== user_id,
                              )}
                              onClickRequestFeedback={{
                                onClick: (e) =>
                                  handelFeedbackRequest({
                                    e,
                                    session_id: int.session.id,
                                    relation_id: int.relation_id,
                                  }),
                              }}
                              onClickResendRequest={{
                                onClick: (e) =>
                                  handelFeedbackRequest({
                                    e,
                                    session_id: int.session.id,
                                    relation_id: int.relation_id,
                                  }),
                              }}
                              textSessionTitle={
                                multiSession ? int.session.title : ''
                              }
                              textSessionTime={
                                <>
                                  {multiSession
                                    ? dayjs(int.session.created_at).format(
                                        'DD MMMM YYYY',
                                      )
                                    : ''}
                                </>
                              }
                              isAddFeedback={
                                isFeedBackEnabled &&
                                !int.feedback &&
                                int.user_id === user_id
                              }
                              onClickFeedback={{
                                onClick: () => {
                                  if (isFeedBackEnabled) {
                                    setSelectedInterviewer({
                                      index,
                                      interviewer: int,
                                    });
                                    !interviewers[Number(index)].feedback &&
                                      int.user_id === user_id &&
                                      setEdit(true);
                                  }
                                },
                              }}
                              slotAvatar={
                                <Avatar
                                  variant='circular'
                                  src={int.profile_image}
                                  level={getFullName(
                                    int.first_name,
                                    int.last_name,
                                  )}
                                />
                              }
                              textInterviewerName={`${int?.first_name} ${int?.last_name}`.trim()}
                              // @ts-ignore
                              textFeedback={
                                <Typography
                                  dangerouslySetInnerHTML={{
                                    __html: int.feedback?.objective,
                                  }}
                                />
                              }
                              // @ts-ignore
                              textRecommendation={
                                <Typography
                                  dangerouslySetInnerHTML={{
                                    __html: !isFeedBackEnabled
                                      ? 'Interview session is not completed.'
                                      : re_mapper[int.feedback?.recommendation],
                                    // || 'Feedback not Submitted.',
                                  }}
                                  {...(!isFeedBackEnabled ||
                                  !int.feedback?.objective
                                    ? { color: palette.grey[400] }
                                    : {})}
                                />
                              }
                              textjobTitle={int.position}
                            />
                          );
                        })}
                      </>
                    }
                  />
                );
              })
              .filter((item) => Boolean(item))}
            {/* {interviewers.map((int, index) => {
              const isFeedBackEnabled = int.session.status === 'completed';
              return (
                <FeedbackTableRow
                  key={int.user_id}
                  isSessionVisible={multiSession}
                  isNoFeedback={isFeedBackEnabled && !int.feedback}
                  isFeedbackReqSubmitted={Boolean(
                    isFeedBackEnabled &&
                      int.feedback &&
                      !int.feedback.objective &&
                      int.user_id !== user_id,
                  )}
                  onClickRequestFeedback={{
                    onClick: (e) =>
                      handelFeedbackRequest({
                        e,
                        session_id: int.session.id,
                        relation_id: int.relation_id,
                      }),
                  }}
                  onClickResendRequest={{
                    onClick: (e) =>
                      handelFeedbackRequest({
                        e,
                        session_id: int.session.id,
                        relation_id: int.relation_id,
                      }),
                  }}
                  textSessionTime={
                    <>
                      {multiSession
                        ? dayjs(int.session.created_at).format('DD MMMM YYYY')
                        : ''}
                    </>
                  }
                  textSessionTitle={multiSession ? int.session.title : ''}
                  isAddFeedback={
                    isFeedBackEnabled &&
                    !int.feedback &&
                    int.user_id === user_id
                  }
                  onClickFeedback={{
                    onClick: () => {
                      if (isFeedBackEnabled) {
                        setSelectedInterviewer({
                          index,
                          interviewer: int,
                        });
                        !interviewers[Number(index)].feedback &&
                          int.user_id === user_id &&
                          setEdit(true);
                      }
                    },
                  }}
                  slotAvatar={
                    <Avatar
                      variant='circular'
                      src={int.profile_image}
                      level={getFullName(int.first_name, int.last_name)}
                    />
                  }
                  textInterviewerName={`${int?.first_name} ${int?.last_name}`.trim()}
                  // @ts-ignore
                  textFeedback={
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: int.feedback?.objective,
                      }}
                    />
                  }
                  // @ts-ignore
                  textRecommendation={
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: !isFeedBackEnabled
                          ? 'Interview session is not completed.'
                          : re_mapper[int.feedback?.recommendation],
                        // || 'Feedback not Submitted.',
                      }}
                      {...(!isFeedBackEnabled || !int.feedback?.objective
                        ? { color: palette.grey[400] }
                        : {})}
                    />
                  }
                  textjobTitle={int.position}
                />
              );
            })} */}
          </>
        }
      />
      {selectedInterviewer?.interviewer &&
        [1].map(() => {
          return (
            <Dialog
              key={1}
              // fullWidth
              open={selectedInterviewer.interviewer !== null}
              maxWidth={'lg'}
              // sx={{ '& .MuiPaper-root': { maxWidth: '650px' } }}
            >
              <ShowCode>
                <ShowCode.When isTrue={edit}>
                  <FeedbackForm
                    interviewerData={selectedInterviewer.interviewer}
                    onSubmit={(feedback) =>
                      handelSubmit(feedback).then(() => {
                        toast.success('Feedback Saved.');
                        setEdit(false);
                        setSelectedInterviewer({
                          index: null,
                          interviewer: null,
                        });
                      })
                    }
                    onClose={() => {
                      setEdit(false);
                      setSelectedInterviewer({
                        index: null,
                        interviewer: null,
                      });
                    }}
                  />
                </ShowCode.When>
                <ShowCode.Else>
                  <FeedbackViewPopup
                    isEditFeedbackVisible={
                      selectedInterviewer.interviewer.user_id === user_id
                    }
                    isFeedbackReqVisible={
                      !selectedInterviewer.interviewer.feedback?.objective
                    }
                    isNotSubmittedVisible={
                      !selectedInterviewer.interviewer.feedback
                    }
                    isEmpty={Boolean(
                      selectedInterviewer.interviewer.feedback?.objective,
                    )}
                    onClickRequestFeedback={{
                      onClick: (e) =>
                        handelFeedbackRequest({
                          e,
                          session_id:
                            selectedInterviewer.interviewer.session.id,
                          relation_id:
                            selectedInterviewer.interviewer.relation_id,
                        }).then(() => {
                          const temp = selectedInterviewer;
                          temp.interviewer.feedback = {
                            recommendation: null,
                            objective: null,
                          };
                          setSelectedInterviewer(temp);
                        }),
                    }}
                    onClickResendRequest={{
                      onClick: (e) =>
                        handelFeedbackRequest({
                          e,
                          session_id:
                            selectedInterviewer.interviewer.session.id,
                          relation_id:
                            selectedInterviewer.interviewer.relation_id,
                        }).then(() => {
                          const temp = selectedInterviewer;
                          temp.interviewer.feedback = {
                            recommendation: null,
                            objective: null,
                          };
                          setSelectedInterviewer(temp);
                        }),
                    }}
                    onClickEditFeedback={{
                      onClick: () => {
                        setEdit(true);
                      },
                    }}
                    onClickClose={{
                      onClick: () => {
                        setSelectedInterviewer(null);
                        setEdit(false);
                      },
                    }}
                    onClickNext={{
                      onClick: () => {
                        const index =
                          (selectedInterviewer.index + 1) % interviewers.length;
                        setSelectedInterviewer({
                          index,
                          interviewer: interviewers[Number(index)],
                        });
                      },
                    }}
                    onClickPrev={{
                      onClick: () => {
                        const index =
                          selectedInterviewer.index - 1 > -1
                            ? selectedInterviewer.index - 1
                            : interviewers.length - 1;
                        setSelectedInterviewer({
                          index,
                          interviewer: interviewers[Number(index)],
                        });
                      },
                    }}
                    slotAvatarWithName={
                      <AvatarWithName
                        textName={`${selectedInterviewer.interviewer.first_name} ${selectedInterviewer.interviewer.last_name}`}
                        slotAvatar={
                          <Avatar
                            variant='circular'
                            src={selectedInterviewer.interviewer?.profile_image}
                            level={getFullName(
                              selectedInterviewer.interviewer?.first_name,
                              selectedInterviewer.interviewer?.last_name,
                            )}
                            dynamicSizing
                          />
                        }
                      />
                    }
                    textObjective={
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html:
                            selectedInterviewer.interviewer.feedback
                              ?.objective || 'Feedback not Submitted',
                        }}
                        {...(!selectedInterviewer.interviewer.feedback
                          ? { color: palette.grey[400] }
                          : {})}
                      />
                    }
                    textRecomendation={
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: selectedInterviewer.interviewer.feedback
                            ? re_mapper[
                                Number(
                                  selectedInterviewer.interviewer.feedback
                                    .recommendation,
                                )
                              ]
                            : 'Recommendation not submitted.',
                        }}
                        {...(!selectedInterviewer.interviewer.feedback
                          ?.recommendation
                          ? { color: palette.grey[400] }
                          : {})}
                      />
                    }
                  />
                </ShowCode.Else>
              </ShowCode>
            </Dialog>
          );
        })}
    </>
  );
};

const InterviewerFeedback = ({
  interviewers,
  handelSubmit,
  multiSession,
}: {
  interviewers: FeedbackWindowInterviewersType[string];
  handelSubmit: ({
    // eslint-disable-next-line no-unused-vars
    session_id,
    // eslint-disable-next-line no-unused-vars
    relation_id,
    // eslint-disable-next-line no-unused-vars
    feedback,
  }: {
    session_id: string;
    relation_id: string;
    feedback: DatabaseTable['interview_session_relation']['feedback'];
  }) => Promise<Boolean>;
  multiSession: boolean;
}) => {
  const [selectedInterviewer, setSelectedInterviewer] = useState<{
    index: number;
    interviewer: (typeof interviewers)[number];
  }>({ index: null, interviewer: null });

  const [edit, setEdit] = useState(false);
  const sessions: { [key: string]: typeof interviewers } = {};
  interviewers.forEach((item) => {
    sessions[item.session.id] = [...(sessions[item.session.id] || []), item];
  });

  return (
    <>
      <ScheduleTabFeedback
        styleMinWidth={{
          style: { minWidth: multiSession ? '1164px' : '900px' },
        }}
        isSessionVisible={multiSession}
        slotFeedbackTableRow={
          <>
            {Object.keys(sessions)
              .map((key) => {
                const session = sessions[key] || [];
                if (!session.length) return null;
                return (
                  <GroupFeedback
                    key={key}
                    textInterviewType={session[0].session.title}
                    textDate={
                      <>
                        {dayjs(session[0].session.created_at).format(
                          'DD MMMM YYYY',
                        )}
                      </>
                    }
                    textTime={
                      <>
                        {`${dayjs(session[0].session.time?.start).format(
                          'hh:mm A',
                        )} to ${dayjs(session[0].session.time?.end).format(
                          'hh:mm A',
                        )}`}
                      </>
                    }
                    slotFeedbackTableRow={
                      <>
                        {session.map((int, index) => {
                          const isFeedBackEnabled =
                            int.session.status === 'completed';
                          return (
                            <FeedbackTableRow
                              key={int.user_id}
                              isSessionVisible={multiSession}
                              textSessionTime={
                                multiSession
                                  ? //  new Date(int.session.created_at).toLocaleDateString()
                                    dayjs(int.session.time.start).format(
                                      'DD MMMM YYYY',
                                    )
                                  : ''
                              }
                              textSessionTitle={
                                multiSession ? int.session.title : ''
                              }
                              isAddFeedback={
                                !(
                                  int.feedback?.objective ||
                                  int.feedback?.recommendation
                                )
                              }
                              isNoFeedback={false}
                              onClickFeedback={{
                                onClick: () => {
                                  if (isFeedBackEnabled) {
                                    setSelectedInterviewer({
                                      index,
                                      interviewer: interviewers[Number(index)],
                                    });
                                    !interviewers[Number(index)].feedback &&
                                      setEdit(true);
                                  }
                                },
                              }}
                              slotAvatar={
                                <Avatar
                                  variant='circular'
                                  src={int.profile_image}
                                  level={getFullName(
                                    int.first_name,
                                    int.last_name,
                                  )}
                                />
                              }
                              textInterviewerName={`${int?.first_name} ${int?.last_name}`.trim()}
                              // @ts-ignore
                              textFeedback={
                                <Typography
                                  dangerouslySetInnerHTML={{
                                    __html: int.feedback?.objective,
                                  }}
                                />
                              }
                              // @ts-ignore
                              textRecommendation={
                                <Typography
                                  dangerouslySetInnerHTML={{
                                    __html: !isFeedBackEnabled
                                      ? 'Interview session is not completed.'
                                      : re_mapper[
                                          int.feedback?.recommendation
                                        ] || 'Feedback not Submitted.',
                                  }}
                                  {...(!isFeedBackEnabled ||
                                  !int.feedback?.objective
                                    ? { color: palette.grey[400] }
                                    : {})}
                                />
                              }
                              textjobTitle={int.position}
                            />
                          );
                        })}
                      </>
                    }
                  />
                );
              })
              .filter((item) => Boolean(item))}
            {/* {interviewers.map((int, index) => {
              const isFeedBackEnabled = int.session.status === 'completed';
              return (
                <FeedbackTableRow
                  key={int.user_id}
                  isSessionVisible={multiSession}
                  textSessionTime={
                    multiSession
                      ? //  new Date(int.session.created_at).toLocaleDateString()
                        dayjs(int.session.created_at).format('DD MMMM YYYY')
                      : ''
                  }
                  textSessionTitle={multiSession ? int.session.title : ''}
                  isAddFeedback={
                    !(int.feedback?.objective || int.feedback?.recommendation)
                  }
                  isNoFeedback={false}
                  onClickFeedback={{
                    onClick: () => {
                      if (isFeedBackEnabled) {
                        setSelectedInterviewer({
                          index,
                          interviewer: interviewers[Number(index)],
                        });
                        !interviewers[Number(index)].feedback && setEdit(true);
                      }
                    },
                  }}
                  slotAvatar={
                    <Avatar
                      variant='circular'
                      src={int.profile_image}
                      level={getFullName(int.first_name, int.last_name)}
                    />
                  }
                  textInterviewerName={`${int?.first_name} ${int?.last_name}`.trim()}
                  // @ts-ignore
                  textFeedback={
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: int.feedback?.objective,
                      }}
                    />
                  }
                  // @ts-ignore
                  textRecommendation={
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: !isFeedBackEnabled
                          ? 'Interview session is not completed.'
                          : re_mapper[int.feedback?.recommendation] ||
                            'Feedback not Submitted.',
                      }}
                      {...(!isFeedBackEnabled || !int.feedback?.objective
                        ? { color: palette.grey[400] }
                        : {})}
                    />
                  }
                  textjobTitle={int.position}
                />
              );
            })} */}
          </>
        }
      />
      {selectedInterviewer?.interviewer &&
        [1].map(() => {
          return (
            <Dialog
              key={1}
              // fullWidth
              open={selectedInterviewer.interviewer !== null}
              maxWidth={'lg'}
              // sx={{ '& .MuiPaper-root': { maxWidth: '650px' } }}
            >
              <ShowCode>
                <ShowCode.When isTrue={edit}>
                  <FeedbackForm
                    interviewerData={selectedInterviewer.interviewer}
                    onSubmit={(feedback) =>
                      handelSubmit(feedback).then(() => {
                        toast.success('Feedback Saved.');
                        setEdit(false);
                        setSelectedInterviewer({
                          index: null,
                          interviewer: null,
                        });
                      })
                    }
                    onClose={() => {
                      setEdit(false);
                      setSelectedInterviewer({
                        index: null,
                        interviewer: null,
                      });
                    }}
                  />
                </ShowCode.When>
                <ShowCode.Else>
                  <FeedbackViewPopup
                    isEditFeedbackVisible={true}
                    isNextPrevVisible={Boolean(interviewers.length)}
                    onClickEditFeedback={{
                      onClick: () => {
                        setEdit(true);
                      },
                    }}
                    onClickClose={{
                      onClick: () => {
                        setSelectedInterviewer(null);
                        setEdit(false);
                      },
                    }}
                    onClickNext={{
                      onClick: () => {
                        const index =
                          (selectedInterviewer.index + 1) % interviewers.length;
                        setSelectedInterviewer({
                          index,
                          interviewer: interviewers[Number(index)],
                        });
                      },
                    }}
                    onClickPrev={{
                      onClick: () => {
                        const index =
                          selectedInterviewer.index - 1 > -1
                            ? selectedInterviewer.index - 1
                            : interviewers.length - 1;
                        setSelectedInterviewer({
                          index,
                          interviewer: interviewers[Number(index)],
                        });
                      },
                    }}
                    slotAvatarWithName={
                      <AvatarWithName
                        textName={`${selectedInterviewer.interviewer.first_name} ${selectedInterviewer.interviewer.last_name}`}
                        slotAvatar={
                          <Avatar
                            variant='circular'
                            src={selectedInterviewer.interviewer?.profile_image}
                            level={getFullName(
                              selectedInterviewer.interviewer?.first_name,
                              selectedInterviewer.interviewer?.last_name,
                            )}
                            dynamicSizing
                          />
                        }
                      />
                    }
                    textObjective={
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html:
                            selectedInterviewer.interviewer.feedback
                              ?.objective || 'Feedback not Submitted',
                        }}
                        {...(!selectedInterviewer.interviewer.feedback
                          ? { color: palette.grey[400] }
                          : {})}
                      />
                    }
                    textRecomendation={
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: selectedInterviewer.interviewer.feedback
                            ? re_mapper[
                                Number(
                                  selectedInterviewer.interviewer.feedback
                                    .recommendation,
                                )
                              ]
                            : 'Recommendation not submitted.',
                        }}
                        {...(!selectedInterviewer.interviewer.feedback
                          ?.recommendation
                          ? { color: palette.grey[400] }
                          : {})}
                      />
                    }
                  />
                </ShowCode.Else>
              </ShowCode>
            </Dialog>
          );
        })}
    </>
  );
};

const FeedbackForm = ({
  interviewerData,
  onSubmit,
  onClose,
}: {
  interviewerData: FeedbackWindowInterviewersType[string][number];
  onSubmit: ({
    // eslint-disable-next-line no-unused-vars
    session_id,
    // eslint-disable-next-line no-unused-vars
    relation_id,
    // eslint-disable-next-line no-unused-vars
    feedback,
  }: {
    session_id: string;
    relation_id: string;
    feedback: DatabaseTable['interview_session_relation']['feedback'];
  }) => void;
  onClose: () => void;
}) => {
  const [interviewer, setInterviewer] = useState(interviewerData);
  return (
    <MyFeedbackPopup
      onClickClose={{
        onClick: onClose,
      }}
      onClickSubmitFeedback={{
        onClick: () => {
          if (!interviewer.feedback) {
            return toast.warning('Please give Feedback');
          }
          onSubmit({
            relation_id: interviewer.relation_id,
            session_id: interviewer.session.id,
            feedback: interviewer.feedback,
          });
        },
      }}
      slotRoundedNumber={
        <>
          {Array(10)
            .fill(1)
            .map((_, i) => {
              return (
                <RoundedNumber
                  key={i}
                  textNumber={i + 1}
                  isActive={(interviewer.feedback?.recommendation || 0) > i}
                  onClickRound={{
                    onClick: () => {
                      const temp = { ...interviewer };
                      temp.feedback = {
                        ...temp.feedback,
                        recommendation: i + 1,
                      };
                      setInterviewer(temp);
                    },
                  }}
                />
              );
            })}
        </>
      }
      textRecommendation={re_mapper[interviewer.feedback?.recommendation || 0]}
      slotObjective={
        <TipTapAIEditor
          placeholder='Give Your Feedback.'
          initialValue={interviewer.feedback?.objective || ''}
          border
          handleChange={(html) => {
            const temp = { ...interviewer };
            temp.feedback = {
              ...temp.feedback,
              objective: html,
            };
            setInterviewer(temp);
          }}
        />
      }
    />
  );
};
