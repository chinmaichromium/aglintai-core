import { getFullName } from '@aglint/shared-utils';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import {
  Bot,
  Briefcase,
  Calendar,
  ChevronDown,
  Edit2,
  Eye,
  MapPin,
  Plus,
  User,
  WandSparkles,
} from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SideDrawerEdit from '@/components/ApplicationDetail/SlotBody/InterviewTabContent/StageSessions/EditDrawer';
import {
  setDebriefMembers,
  setEditSession,
  setIsEditOpen,
  setSelectedInterviewers,
  setTrainingInterviewers,
  setTrainingToggle,
} from '@/components/ApplicationDetail/SlotBody/InterviewTabContent/StageSessions/EditDrawer/store';
import CollapseContent from '@/components/ApplicationDetail/SlotBody/InterviewTabContent/StageSessions/StageIndividual/ScheduleIndividual/Collapse';
import { UIDateRangePicker } from '@/components/Common/UIDateRangePicker';
import { useRequest } from '@/context/RequestContext';
import { useRequests } from '@/context/RequestsContext';
import { type ApiInterviewSessionRequest } from '@/pages/api/scheduling/application/fetchInterviewSessionByRequest';
import { type Request } from '@/queries/requests/types';
import dayjs from '@/utils/dayjs';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import RequestProgress from '../_common/Components/RequestProgress';
import MemberCard from './Components/MemberCard';
import { useMemberList } from './Components/MemberList';
import ResendRequests from './Components/ResendRequests';
import UpdateDetails from './Components/UpdateDetails';
import UpdateMembers from './Components/UpdateMembers';
import { useMeetingList } from './hooks';
import { Switch } from '@components/ui/switch';

export default function ViewRequestDetails() {
  const { query } = useRouter();
  const { replace } = useRouter();
  const {
    requests: { data: requestList, isPlaceholderData },
    handleAsyncUpdateRequest,
  } = useRequests();
  const { data: sessions, status, refetch } = useMeetingList();

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
  const selectedMember =
    members &&
    members.find((member) => member.user_id === selectedRequest?.assignee_id);

  if (isPlaceholderData && status === 'pending') {
    return <ViewRequestDetailsSkeleton />;
  } else
    return (
      <div className='min-h-screen bg-gray-50 p-8'>
        <SideDrawerEdit refetch={refetch} />
        <div className='max-w-[calc(100%-12.5rem)] mx-auto space-y-8'>
          <div className='flex items-center space-x-2 text-sm text-gray-500'>
            <span>Home</span>
            <span>/</span>
            <span
              className='cursor-pointer'
              onClick={() => {
                replace('/requests');
              }}
            >
              Requests
            </span>
            <span>/</span>
            {/* <span>Schedule Requests</span> */}
            {/* <span>/</span> */}
            <span className='font-medium text-gray-900'>Request Details</span>
          </div>
          <div className='flex flex-row items-start justify-between pb-2'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900 mb-2'>
                Schedule Request Details
              </h1>
              <div className='flex items-center space-x-4 text-sm text-gray-500'>
                <div className='flex items-center space-x-1'>
                  <User className='h-4 w-4' />
                  <span>
                    {getFullName(
                      candidateDetails?.first_name,
                      candidateDetails?.last_name,
                    )}
                  </span>
                </div>
                <span>•</span>
                <span>{candidateDetails?.current_job_title}</span>
                <span>•</span>
                <div className='flex items-center space-x-1'>
                  <Briefcase className='h-4 w-4' />
                  <span>{jobDetails?.job_title}</span>
                </div>
                <span>•</span>
                <span>Finance and Accounting</span>
                {jobDetails?.office_locations && (
                  <>
                    <span>•</span>
                    <div className='flex items-center space-x-1'>
                      <MapPin className='h-4 w-4' />
                      <span>{`${jobDetails?.office_locations.city}, ${jobDetails?.office_locations.country}`}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-col gap-4 space-x-2'>
              <div className='flex flex-row gap-2'>
                <Badge variant='destructive'>
                  {capitalizeFirstLetter(selectedRequest?.type)}
                </Badge>
                <Badge variant='outline' className='bg-green-50 text-green-700'>
                  {capitalizeFirstLetter(selectedRequest?.status)}
                </Badge>
              </div>
              <div className='flex flex-center items-center gap-2 '>
                <h3 className='text-sm font-medium text-gray-500'>
                  Assigned to:
                </h3>
                <Avatar className='h-6 w-6'>
                  <AvatarImage
                    src={selectedMember?.profile_image}
                    alt='Avatar'
                  />
                  <AvatarFallback>
                    {selectedMember?.first_name.slice(0, 1)}
                    {selectedMember?.last_name.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <p className='font-medium'>
                  {getFullName(
                    selectedMember?.first_name,
                    selectedMember?.last_name,
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='w-8/12 pr-4 flex flex-col space-y-4'>
              <Card className='bg-white shadow-sm'>
                <CardHeader className='flex flex-row items-start justify-between pb-2'>
                  <div>
                    <CardTitle className='text-xl font-semibold mb-2'>
                      Request Details
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-3 gap-6'>
                    <div className='col-span-2 grid grid-cols-2 gap-6'>
                      <div className='space-y-4'>
                        <div className='space-y-2'>
                          <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium text-gray-500'>
                              Status
                            </span>
                            <UpdateDetails
                              handleChange={async ({ value }) => {
                                const status =
                                  value as unknown as Request['status'];
                                await handleAsyncUpdateRequest({
                                  payload: {
                                    requestId: selectedRequest.id,
                                    requestPayload: {
                                      status,
                                    },
                                  },
                                });
                              }}
                              items={[
                                {
                                  label: 'To do',
                                  value: 'to_do',
                                },
                                {
                                  label: 'In progress',
                                  value: 'in_progress',
                                },
                                {
                                  label: 'Completed',
                                  value: 'completed',
                                },
                                {
                                  label: 'Blocked',
                                  value: 'blocked',
                                },
                              ]}
                              updateButton={
                                <Edit2 className='h-4 w-4 text-gray-400 cursor-pointer' />
                              }
                            />
                          </div>
                          <Badge
                            variant='outline'
                            className='bg-green-50 text-green-700'
                          >
                            {capitalizeFirstLetter(selectedRequest?.status)}
                          </Badge>
                        </div>
                        <div className='space-y-2'>
                          <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium text-gray-500'>
                              Priority
                            </span>
                            <UpdateDetails
                              handleChange={async ({ value }) => {
                                const priority =
                                  value as unknown as Request['priority'];
                                await handleAsyncUpdateRequest({
                                  payload: {
                                    requestId: selectedRequest.id,
                                    requestPayload: {
                                      priority,
                                    },
                                  },
                                });
                              }}
                              items={[
                                {
                                  label: 'Urgent',
                                  value: 'urgent',
                                },
                                {
                                  label: 'Standard',
                                  value: 'standard',
                                },
                              ]}
                              updateButton={
                                <Edit2 className='h-4 w-4 text-gray-400 cursor-pointer' />
                              }
                            />
                          </div>
                          <Badge
                            variant='outline'
                            className='bg-gray-100 text-gray-800'
                          >
                            {capitalizeFirstLetter(selectedRequest?.priority)}
                          </Badge>
                        </div>
                      </div>
                      <div className='space-y-4'>
                        <div className='space-y-2'>
                          <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium text-gray-500'>
                              Interview Date
                            </span>
                            <UIDateRangePicker
                              value={{
                                from: new Date(
                                  selectedRequest?.schedule_start_date,
                                ),
                                to: new Date(
                                  selectedRequest?.schedule_end_date,
                                ),
                              }}
                              onAccept={async ({ from, to }) => {
                                await handleAsyncUpdateRequest({
                                  payload: {
                                    requestId: selectedRequest.id,
                                    requestPayload: {
                                      schedule_start_date:
                                        dayjs(from).toISOString(),
                                      schedule_end_date:
                                        dayjs(to).toISOString(),
                                    },
                                  },
                                });
                              }}
                              customButton={
                                <Edit2 className='h-4 w-4 text-gray-400 cursor-pointer' />
                              }
                            />
                          </div>
                          <span className='text-sm'>
                            {dayjs(selectedRequest?.schedule_start_date).format(
                              'DD MMM, YYYY',
                            ) +
                              ' - ' +
                              dayjs(selectedRequest?.schedule_end_date).format(
                                'DD MMM, YYYY',
                              )}
                          </span>
                        </div>
                        <div className='space-y-2'>
                          <div className='flex items-center justify-between'>
                            <h3 className='text-sm font-medium text-gray-500'>
                              Assigned to
                            </h3>
                            <UpdateMembers
                              handleChange={async ({ user_id }) => {
                                const assignee_id = user_id;
                                await handleAsyncUpdateRequest({
                                  payload: {
                                    requestId: selectedRequest.id,
                                    requestPayload: {
                                      assignee_id,
                                    },
                                  },
                                });
                              }}
                              members={members}
                              updateButton={
                                <Edit2 className='h-4 w-4 text-gray-400 cursor-pointer' />
                              }
                            />
                          </div>
                          <MemberCard selectedMember={selectedMember} />
                        </div>
                      </div>
                    </div>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm font-medium text-gray-500'>
                            Request Type
                          </span>
                          <UpdateDetails
                            handleChange={async ({ value }) => {
                              const type = value as unknown as Request['type'];
                              await handleAsyncUpdateRequest({
                                payload: {
                                  requestId: selectedRequest.id,
                                  requestPayload: {
                                    type,
                                  },
                                },
                              });
                            }}
                            items={[
                              {
                                label: 'schedule_request',
                                value: 'schedule_request',
                              },
                              {
                                label: 'reschedule_request',
                                value: 'reschedule_request',
                              },
                              {
                                label: 'decline_request',
                                value: 'decline_request',
                              },
                              {
                                label: 'cancel_schedule_request',
                                value: 'cancel_schedule_request',
                              },
                            ]}
                            updateButton={
                              <Edit2 className='h-4 w-4 text-gray-400 cursor-pointer' />
                            }
                          />
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Calendar className='h-4 w-4 text-gray-500' />
                          <span className='text-sm'>
                            {capitalizeFirstLetter(selectedRequest?.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SessionCards sessions={sessions} />
                </CardContent>
              </Card>
              <ResendRequests />
            </div>
            <div className='w-4/12 flex flex-col space-y-4'>
              <Alert>
                <Bot className='h-4 w-4' />
                <AlertTitle>Next Step</AlertTitle>
                <AlertDescription>
                  Here is your next step on the request.
                </AlertDescription>
                <div className='flex flex-row gap-2 justify-end mt-4'>
                  <Button variant='outline'>Get Availability</Button>
                  <Button>Send Self Scheduling</Button>
                </div>
              </Alert>

              <Card>
                <CardHeader className='flex justify-between items-center'>
                  <div className='flex  flex-row  w-full justify-between items-center'>
                    <CardTitle className='text-lg'>Request Progress</CardTitle>
                    <div className='flex items-center space-x-2'>
                      {/* {reqTriggerActionsMap && Object.keys(reqTriggerActionsMap).length > 0 && ( */}
                      {/* <Button size='sm'>
                        <WandSparkles className='h-4 w-4 mr-2' />
                        Proceed with Aglint AI
                      </Button> */}
                      {/* )} */}
                      <div className='flex items-center space-x-2'>
                        <span className='text-sm'>Automaton</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RequestProgress />
                </CardContent>
              </Card>

              <Card className='mb-4'>
                <CardHeader>
                  <CardTitle className='text-md'>Add Automations</CardTitle>
                  <CardDescription>
                    Streamline your workflow with these automations:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div>
                      <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm'>
                            Add Candidate Reminders
                          </span>
                          <Button size='sm' variant='outline'>
                            Add
                          </Button>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm'>RSVP Via Slack</span>
                          <Button size='sm' variant='outline'>
                            Add
                          </Button>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm'>Sync with Calendar</span>
                          <Button size='sm' variant='outline'>
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
}

function SessionCards({
  sessions,
}: {
  sessions: ApiInterviewSessionRequest['response']['sessions'];
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  return (
    <div>
      {/* <SideDrawerEdit refetch={refetch} /> */}

      <div className='flex items-center justify-between my-4'>
        <h3 className='text-lg font-semibold'>Sessions</h3>
        <Badge variant='outline'>{sessions?.length} sessions</Badge>
      </div>
      <div className='space-y-2 border rounded-lg'>
        {sessions &&
          sessions.map((session, index) => (
            <Card key={index} className='border-0 shado-none'>
              <CardHeader
                className='cursor-pointer px-4 py-2'
                onClick={() => {
                  setExpandedCard(expandedCard === index ? null : index);
                }}
              >
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-sm font-medium truncate flex-1'>
                    {capitalizeFirstLetter(session.interview_session.name)}
                  </CardTitle>
                  <div className='flex items-center space-x-2'>
                    <Badge variant='outline' className='text-xs'>
                      {capitalizeFirstLetter(session.interview_meeting.status)}
                    </Badge>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditSession(session);
                        if (
                          session.interview_session.session_type !== 'debrief'
                        ) {
                          setSelectedInterviewers(
                            session?.users
                              ?.filter(
                                (user) =>
                                  user.interview_session_relation
                                    .interviewer_type === 'qualified',
                              )
                              .map((user) => ({
                                email: user.user_details.email,
                                user_id:
                                  user.interview_module_relation?.user_id,
                                first_name: user.user_details.first_name,
                                last_name: user.user_details.last_name,
                                position: user.user_details.position,
                                profile_image: user.user_details.profile_image,
                                module_relation_id:
                                  user.interview_module_relation?.id,
                              })) || [],
                          );

                          const trainingInterviewers = session?.users?.filter(
                            (user) =>
                              user.interview_session_relation
                                .interviewer_type === 'training',
                          );

                          setTrainingInterviewers(
                            trainingInterviewers?.map((user) => ({
                              email: user.user_details.email,
                              user_id: user.interview_module_relation?.user_id,
                              first_name: user.user_details.first_name,
                              last_name: user.user_details.last_name,
                              position: user.user_details.position,
                              profile_image: user.user_details.profile_image,
                              module_relation_id:
                                user.interview_module_relation?.id,
                            })) || [],
                          );

                          if (trainingInterviewers?.length > 0) {
                            setTrainingToggle(true);
                          }
                        } else {
                          setDebriefMembers(
                            session?.users?.map((user) => ({
                              email: user.user_details.email,
                              user_id: user.interview_module_relation?.user_id,
                              first_name: user.user_details.first_name,
                              last_name: user.user_details.last_name,
                              position: user.user_details.position,
                              profile_image: user.user_details.profile_image,
                            })) || [],
                          );
                        }
                        setIsEditOpen(true);
                      }}
                      variant='outline'
                      size='sm'
                    >
                      <Edit2 className='h-4 w-4 mr-2' />
                      Edit
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `/scheduling/view?meeting_id=${session.interview_meeting.id}&tab=candidate_details`,
                          '_blank',
                        );
                      }}
                      variant='outline'
                      size='sm'
                    >
                      <Eye className='h-4 w-4 mr-2' />
                      View Details
                    </Button>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCard === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CollapseContent
                collapsed={expandedCard === index}
                currentSession={session}
                candidate={null}
              />
            </Card>
          ))}
      </div>
    </div>
  );
}

function ViewRequestDetailsSkeleton() {
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-[calc(100%-12.5rem)] mx-auto space-y-8'>
        {/* Breadcrumb */}
        <div className='flex items-center space-x-2 text-sm text-gray-500'>
          <span>Home</span>
          <span>/</span>
          <span>Requests</span>
          <span>/</span>
          {/* <span>Schedule Requests</span> */}
          {/* <span>/</span> */}
          <span className='font-medium text-gray-900'>Request Details</span>
        </div>

        {/* Header */}
        <div className='flex flex-row items-start justify-between pb-2'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              Schedule Request Details
            </h1>
            <Skeleton className='h-4 w-96' />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2'>
              <Skeleton className='h-6 w-20' />
              <Skeleton className='h-6 w-20' />
            </div>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-6 w-6 rounded-full' />
              <Skeleton className='h-4 w-24' />
            </div>
          </div>
        </div>

        {/* Progress Holder */}
        <Alert>
          <Bot className='h-4 w-4' />
          <AlertTitle>Next Step</AlertTitle>
          <AlertDescription>
            <Skeleton className='h-4 w-64' />
          </AlertDescription>
          <div className='flex flex-row gap-2 justify-end mt-4'>
            <Skeleton className='h-9 w-32' />
            <Skeleton className='h-9 w-40' />
          </div>
        </Alert>

        {/* Request Details Card */}
        <Card className='bg-white shadow-sm'>
          <CardHeader className='flex flex-row items-start justify-between pb-2'>
            <CardTitle className='text-xl font-semibold mb-2'>
              Request Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-3 gap-6'>
              {/* Left column */}
              <div className='col-span-2 grid grid-cols-2 gap-6'>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className='space-y-4'>
                    <Skeleton className='h-4 w-24' />
                    <Skeleton className='h-6 w-32' />
                  </div>
                ))}
              </div>
              {/* Right column */}
              <div className='space-y-4'>
                <Skeleton className='h-4 w-24' />
                <Skeleton className='h-6 w-32' />
              </div>
            </div>

            {/* Sessions */}
            <div className='mt-8'>
              <div className='flex items-center justify-between my-4'>
                <Skeleton className='h-6 w-24' />
                <Skeleton className='h-6 w-24' />
              </div>
              <div className='space-y-2 border rounded-lg p-4'>
                {[...Array(3)].map((_, index) => (
                  <Card key={index} className='border-0 shadow-none'>
                    <CardHeader className='px-4 py-2'>
                      <div className='flex items-center justify-between'>
                        <Skeleton className='h-4 w-64' />
                        <div className='flex items-center space-x-2'>
                          <Skeleton className='h-6 w-20' />
                          <Skeleton className='h-8 w-20' />
                          <Skeleton className='h-8 w-24' />
                          <Skeleton className='h-4 w-4' />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
