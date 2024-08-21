import { getFullName } from '@aglint/shared-utils';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { Avatar, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Page404 } from '@/devlink/Page404';
import { UserInfoTeam } from '@/devlink/UserInfoTeam';
import { AiTaskBanner } from '@/devlink2/AiTaskBanner';
import { Breadcrum } from '@/devlink2/Breadcrum';
import { ButtonSoft } from '@/devlink2/ButtonSoft';
import { ButtonSolid } from '@/devlink2/ButtonSolid';
import { GlobalBadge } from '@/devlink2/GlobalBadge';
import { PageLayout } from '@/devlink2/PageLayout';
import { RequestDetail } from '@/devlink2/RequestDetail';
import { RequestDetailRight } from '@/devlink2/RequestDetailRight';
import { SkeletonScheduleCard } from '@/devlink2/SkeletonScheduleCard';
import { Text } from '@/devlink2/Text';
import { TextWithIcon } from '@/devlink2/TextWithIcon';
import { WorkflowConnectedCard } from '@/devlink3/WorkflowConnectedCard';
import { useRequest } from '@/src/context/RequestContext';
import { useRequests } from '@/src/context/RequestsContext';
import { useRouterPro } from '@/src/hooks/useRouterPro';
import ROUTES from '@/src/utils/routing/routes';
import { capitalizeFirstLetter } from '@/src/utils/text/textUtils';

import Loader from '../../Common/Loader';
import SideDrawerEdit from '../../Jobs/Job/ApplicationDetail/SlotBody/InterviewTabContent/StageSessions/EditDrawer';
import ScheduleIndividualCard from '../../Jobs/Job/ApplicationDetail/SlotBody/InterviewTabContent/StageSessions/StageIndividual/ScheduleIndividual';
import { formatSessions } from '../../Jobs/Job/Candidate-List/utils';
import RequestProgress, {
  RequestProgressSkeleton,
} from '../RequestSections/Section/Request/RequestDetails/RequestProgress';
import MemberList, { useMemberList } from './Components/MemberList';
import { useMeetingList } from './hooks';

function ViewRequestDetails() {
  const { replace } = useRouterPro();
  const { query } = useRouter();

  const {
    requests: { data: requestList, isPlaceholderData },
    handleAsyncUpdateRequest,
  } = useRequests();

  const { setCollapse } = useRequest();
  const { data: members } = useMemberList();

  useEffect(() => {
    setCollapse(true);
  }, [query?.id]);

  const selectedRequest = Object.values(requestList)
    .flat()
    .find((request) => request?.id === query?.id);

  const candidateDetails = selectedRequest?.applications?.candidates;
  const jobDetails = selectedRequest?.applications?.public_jobs;

  const { data: sessionsCards, status, refetch } = useMeetingList();

  if (isPlaceholderData) {
    return (
      <Stack
        width={'100%'}
        height={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Loader />
      </Stack>
    );
  }

  if (!isPlaceholderData && !selectedRequest) {
    return (
      <Page404
        slot404={
          <ButtonSoft
            size={2}
            onClickButton={{
              onClick: () => {
                replace('/requests?tab=requests');
              },
            }}
            textButton='Back to requests'
          />
        }
      />
    );
  }

  async function handleProceed(id) {
    await handleAsyncUpdateRequest({
      payload: {
        requestId: id,
        requestPayload: { status: 'in_progress' },
      },
    });
  }

  return (
    <>
      <SideDrawerEdit refetch={refetch} />
      <PageLayout
        slotTopbarLeft={
          <>
            <ButtonSoft />
            <Breadcrum
              onClickLink={{
                onClick: () => {
                  replace('/requests?tab=requests');
                },
              }}
              isLink={true}
              textName={'Requests'}
            />
            <Breadcrum
              showArrow={true}
              textName={
                <Stack
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  spacing={0.5}
                >
                  <Text
                    size={2}
                    content={`Schedule ${formatSessions(selectedRequest.request_relation.map(({ interview_session }) => interview_session.name))} interview with `}
                  />
                  <Text
                    color={'accent'}
                    highContrast={true}
                    size={2}
                    content={getFullName(
                      candidateDetails.first_name,
                      candidateDetails.last_name,
                    )}
                    styleProps={{
                      onClick: () => {
                        window.open(
                          ROUTES['/jobs/[id]/application/[application_id]']({
                            id: jobDetails.id,
                            application_id: selectedRequest.application_id,
                          }) + '?tab=interview',
                          '_blank',
                        );
                      },
                      style: { cursor: 'pointer' },
                    }}
                  />
                </Stack>
              }
            />
          </>
        }
        slotBody={
          <>
            <RequestDetail
              slotInterview={
                status === 'pending' ? (
                  <Stack position={'relative'}>
                    <SkeletonScheduleCard />
                  </Stack>
                ) : (
                  sessionsCards.map((session) => {
                    return (
                      <>
                        <ScheduleIndividualCard
                          session={session}
                          key={session.interview_session.id}
                          selectedSessionIds={[]}
                          onClickCheckBox={() => {}}
                          isCheckboxVisible={false}
                          candidate={null}
                          isEditIconVisible={true}
                          isViewDetailVisible={true}
                          isStatusVisible={
                            session.interview_meeting?.status ===
                            'not_scheduled'
                          }
                        />
                      </>
                    );
                  })
                )
              }
              slotNewTask={
                <>
                  {Boolean(selectedRequest?.status === 'to_do') && (
                    <Stack width={'60%'}>
                      <AiTaskBanner
                        slotButton={
                          <ButtonSolid
                            onClickButton={{
                              onClick: () => {
                                handleProceed(selectedRequest.id);
                              },
                            }}
                            size={1}
                            textButton='Proceed'
                          />
                        }
                      />
                    </Stack>
                  )}
                  {selectedRequest?.type ? (
                    <RequestProgress request_type={selectedRequest?.type} />
                  ) : (
                    <RequestProgressSkeleton />
                  )}
                </>
              }
              slotRequestDetailRight={
                <RequestDetailRight
                  slotStatus={
                    <GlobalBadge
                      size={1}
                      textBadge={capitalizeFirstLetter(selectedRequest?.status)}
                      color={
                        selectedRequest?.status === 'to_do'
                          ? 'purple'
                          : selectedRequest?.status === 'in_progress'
                            ? 'info'
                            : selectedRequest?.status === 'blocked'
                              ? 'error'
                              : selectedRequest?.status === 'completed'
                                ? 'success'
                                : 'neutral'
                      }
                    />
                  }
                  slotPriority={
                    <GlobalBadge
                      showIcon={true}
                      iconSize={4}
                      iconName={
                        selectedRequest?.priority === 'urgent' ? 'flag_2' : ''
                      }
                      color={
                        selectedRequest?.priority === 'urgent'
                          ? 'warning'
                          : 'neutral'
                      }
                      textBadge={capitalizeFirstLetter(
                        selectedRequest?.priority,
                      )}
                    />
                  }
                  slotRequestType={
                    <GlobalBadge
                      showIcon={true}
                      iconSize={4}
                      iconName={'calendar_add_on'}
                      color={'neutral'}
                      textBadge={capitalizeFirstLetter(selectedRequest?.type)}
                    />
                  }
                  textDueDate={dayjsLocal(
                    selectedRequest?.schedule_start_date,
                  ).format('DD MMMM, YYYY')}
                  slotAssignedTo={
                    <MemberList
                      selectedMemberId={selectedRequest?.assignee.user_id}
                      members={members}
                    />
                  }
                  slotCandidate={
                    <UserInfoTeam
                      isLinkedInVisible={!!candidateDetails?.linkedin}
                      onClickLinkedIn={() => {
                        window.open(candidateDetails?.linkedin, '_blank');
                      }}
                      slotImage={
                        <Avatar
                          variant='rounded'
                          src={candidateDetails?.avatar}
                        />
                      }
                      textName={getFullName(
                        candidateDetails?.first_name,
                        candidateDetails?.last_name,
                      )}
                      textDesgination={capitalizeFirstLetter(
                        candidateDetails?.current_job_title,
                      )}
                      slotDetails={
                        <>
                          <TextWithIcon
                            textContent={
                              !candidateDetails?.city &&
                              !candidateDetails?.state &&
                              !candidateDetails?.country
                                ? '--'
                                : `${candidateDetails?.city} ${candidateDetails?.state}, ${candidateDetails?.country}`
                            }
                            iconName='location_on'
                            iconSize={4}
                            iconWeight={'medium'}
                          />

                        <TextWithIcon
                          textContent={candidateDetails?.email || '--'}
                          iconName='mail'
                          iconSize={4}
                          iconWeight={'medium'}
                        />
                        <TextWithIcon
                          textContent={candidateDetails?.phone || '--'}
                          iconName='smartphone'
                          iconSize={4}
                          iconWeight={'medium'}
                        />
                        <Stack width={'110px'}></Stack>
                      </>
                    }
                    isButtonVisible={true}
                    slotButton={
                      <>
                        <ButtonSoft
                          onClickButton={{
                            onClick: () => {
                              window.open(
                                ROUTES[
                                  '/jobs/[id]/application/[application_id]'
                                ]({
                                  id: jobDetails.id,
                                  application_id:
                                    selectedRequest.application_id,
                                }) + '?tab=interview',
                                '_blank',
                              );
                            },
                          }}
                          size={1}
                          color={'neutral'}
                          textButton={'View Profile'}
                          isRightIcon={true}
                          iconName='call_made'
                        />
                      </>
                    }
                  />
                }
                slotRelatedJob={
                  <Stack bgcolor={'white'}>
                    <WorkflowConnectedCard
                      isLinkOffVisible={false}
                      textRoleCategory={
                        capitalizeFirstLetter(jobDetails.departments?.name) ||
                        '--'
                      }
                      role={jobDetails.job_title || '--'}
                      textLocation={
                        !jobDetails.office_locations?.city ||
                        !jobDetails.office_locations?.country
                          ? '--'
                          : `${jobDetails.office_locations?.city}, ${jobDetails.office_locations?.country}`
                      }
                      onClickJob={{
                        onClick: () => {
                          window.open(
                            `/jobs/${jobDetails.id}/candidate-list?section=interview`,
                            '_blank',
                          );
                        },
                      }}
                    />
                  </Stack>
                }
              />
            }
          />
        }
      />
    </>
  );
}

export default ViewRequestDetails;
