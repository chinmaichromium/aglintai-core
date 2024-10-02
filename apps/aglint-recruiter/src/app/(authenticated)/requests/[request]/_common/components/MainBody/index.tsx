import { dayjsLocal, getFullName } from '@aglint/shared-utils';
import {
  Section,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import { TwoColumnPageLayout } from '@components/layouts/two-column-page-layout';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Badge } from '@components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import RequestProgress from '@requests/components/RequestProgress';
import {
  REQUEST_STATUS_LIST,
  REQUEST_TYPE_LIST,
  REQUEST_URGENT_LIST,
} from '@requests/constant';
import { useMeetingList } from '@requests/hooks';
import {
  Bot,
  BriefcaseBusiness,
  Calendar,
  ChevronDown,
  Coffee,
  Edit2,
  Eye,
  Home,
  MapPin,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import MemberCard from '@/components/Common/MemberCard';
import { ShowCode } from '@/components/Common/ShowCode';
import { UIDateRangePicker } from '@/components/Common/UIDateRangePicker';
// import { UIDivider } from '@/components/Common/UIDivider';
import UISelectDropDown from '@/components/Common/UISelectDropDown';
import UpdateMembers from '@/components/Common/UpdateMembers';
import { RequestProvider } from '@/context/RequestContext';
import { useRequests } from '@/context/RequestsContext';
import { useMemberList } from '@/hooks/useMemberList';
import SideDrawerEdit from '@/jobs/job/application/components/EditDrawer';
import CollapseContent from '@/jobs/job/application/components/InterviewStage/IndividualSession/Collapse';
import { useEditSession } from '@/jobs/job/application/components/InterviewTab/hooks/useEditSession';
import { type Request } from '@/queries/requests/types';
import { type fetchSessionDetails } from '@/server/api/routers/requests/utils/requestSessions';
import { getBreakLabel } from '@/utils/getBreakLabel';
import ROUTES from '@/utils/routing/routes';
import { breakDurations } from '@/utils/scheduling/const';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import { updateInterviewSessionsDurations } from '../../utils';
import CandidateAvailability from '../CandidateAvailability';
import ConfirmAvailability from '../ConfirmAvailability';
import { AvailabilityProvider } from '../ConfirmAvailability/_common/contexts/RequestAvailabilityContext';
import RecentRequests from '../RecentRequests';
import CandidateCancelRequest from '../RequestNextSteps/CandidateCancelRequest';
import RequestDecline from '../RequestNextSteps/RequestDecline';
import ScheduleOptions from '../RequestNextSteps/ScheduleOptions';
import RequestNotes from '../RequestNotes';
import SelfSchedulingDrawer from '../SelfSchedulingDrawer';
import UpdateDetails from '../UpdateDetails';

export default function ViewRequestDetails() {
  const params = useParams();
  const requestId = params?.request as string;

  const {
    requests: { data: requestList, isPlaceholderData },
    handleAsyncUpdateRequest,
  } = useRequests();
  const {
    data: sessions,
    status,
    refetch: refetchMeetings,
  } = useMeetingList({ request_id: requestId || '' });

  const { data: members } = useMemberList();

  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: new Date() });

  const selectedRequest = Object.values(requestList ?? [])
    .flat()
    .find((request) => request?.id === requestId);
  const candidateDetails = selectedRequest?.applications?.candidates;
  const jobDetails = selectedRequest?.applications?.public_jobs;
  const selectedMember =
    members &&
    members.find((member) => member.user_id === selectedRequest?.assignee_id);

  useEffect(() => {
    if (!isPlaceholderData && status === 'success' && selectedRequest) {
      setDateRange({
        from: new Date(selectedRequest?.schedule_start_date ?? ''),
        to: new Date(selectedRequest?.schedule_end_date ?? ''),
      });
    }
  }, [isPlaceholderData]);
  if (!isPlaceholderData && status === 'success' && !selectedRequest) {
    return (
      // we need to fix this empty state
      <Alert variant='error'>
        <AlertTitle>Request not found</AlertTitle>
      </Alert>
    );
  } else if ((isPlaceholderData && status === 'pending') || !selectedRequest) {
    return <ViewRequestDetailsSkeleton />;
  } else
    return (
      <div className='w-full'>
        {selectedRequest && (
          <CandidateAvailability selectedRequest={selectedRequest} />
        )}
        <AvailabilityProvider>
          <ConfirmAvailability />
        </AvailabilityProvider>
        <SideDrawerEdit refetch={refetchMeetings} />
        <SelfSchedulingDrawer />

        <TwoColumnPageLayout
          sidebarWidth={'35rem'}
          header={
            <div className='flex flex-col gap-6'>
              {/* <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/'>
                      <Home className='h-4 w-4' />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/requests'>Requests</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href='#'
                      className='font-medium text-gray-900'
                    >
                      Request Details
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb> */}
              <div className='flex flex-row items-start justify-between pb-2'>
                <div>
                  <h1 className='mb-2 text-2xl text-gray-900'>
                    {capitalizeFirstLetter(selectedRequest?.title ?? '')}
                  </h1>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
                    <div className='flex items-center space-x-1'>
                      <User className='h-4 w-4' />
                      <Link
                        href={
                          ROUTES['/jobs/[job]/[application]']({
                            job: jobDetails?.id ?? '',
                            application_id:
                              selectedRequest?.application_id ?? '',
                          }) + '?tab=scoring'
                        }
                      >
                        <span className='duration-300 hover:text-black hover:underline'>
                          {getFullName(
                            candidateDetails?.first_name ?? '',
                            candidateDetails?.last_name ?? '',
                          )}
                        </span>
                      </Link>
                    </div>
                    <span>•</span>
                    {/* <span>{candidateDetails?.current_job_title}</span>
                <span>•</span> */}
                    <div className='flex items-center space-x-1'>
                      <BriefcaseBusiness className='h-4 w-4' />
                      <Link
                        href={ROUTES['/jobs/[job]']({
                          job: jobDetails?.id ?? '',
                        })}
                      >
                        <span className='duration-300 hover:text-black hover:underline'>
                          {jobDetails?.job_title}
                        </span>
                      </Link>
                    </div>
                    {/* <span>•</span> */}
                    {/* <span>Finance and Accounting</span> */}
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
                <div className='flex flex-col items-end gap-4 space-x-2'>
                  <div className='flex flex-row items-center gap-2'>
                    {selectedRequest.status === 'completed' ? (
                      <>
                        <h3 className='text-sm font-medium text-muted-foreground'>
                          Completed at:
                        </h3>
                        <p>
                          {dayjsLocal(selectedRequest?.completed_at).fromNow()}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className='text-sm font-medium text-muted-foreground'>
                          Created at:
                        </h3>
                        <p>
                          {dayjsLocal(selectedRequest?.created_at).fromNow()}
                        </p>
                      </>
                    )}
                  </div>
                  <div className='flex-center flex items-center gap-2'>
                    <h3 className='text-sm font-medium text-muted-foreground'>
                      Assigned to:
                    </h3>
                    <Link
                      href={ROUTES['/user/[user]']({
                        user_id: selectedMember?.user_id ?? '',
                      })}
                      className='flex flex-row items-center gap-2'
                    >
                      <Avatar className='h-6 w-6'>
                        <AvatarImage
                          src={selectedMember?.profile_image}
                          alt='Avatar'
                        />
                        <AvatarFallback>
                          <span className='text-md'>
                            {selectedMember?.first_name.slice(0, 1)}
                          </span>
                        </AvatarFallback>
                      </Avatar>
                      <p className='font-medium'>
                        {getFullName(
                          selectedMember?.first_name ?? '',
                          selectedMember?.last_name ?? '',
                        )}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
          sidebar={
            <div className='flex w-full flex-col space-y-4'>
              <ShowCode.When isTrue={selectedRequest.status !== 'completed'}>
                <Alert>
                  <Bot className='h-4 w-4' />
                  <AlertTitle>Next Step</AlertTitle>
                  <AlertDescription>
                    Here is your next step on the request.
                  </AlertDescription>

                  <div className='mt-4 flex flex-row justify-end gap-2'>
                    <ShowCode.When
                      isTrue={
                        selectedRequest.type === 'schedule_request' ||
                        selectedRequest.type === 'reschedule_request'
                      }
                    >
                      <ScheduleOptions />
                    </ShowCode.When>
                    <ShowCode.When
                      isTrue={selectedRequest.type === 'decline_request'}
                    >
                      <RequestDecline />
                    </ShowCode.When>
                    <ShowCode.When
                      isTrue={
                        selectedRequest.type === 'cancel_schedule_request'
                      }
                    >
                      <CandidateCancelRequest />
                    </ShowCode.When>
                  </div>
                </Alert>
              </ShowCode.When>

              <Section>
                <SectionHeaderText>
                  <SectionTitle>Request Progress</SectionTitle>
                </SectionHeaderText>
                {selectedRequest ? (
                  <RequestProvider
                    request_id={selectedRequest?.id}
                    enabled={true}
                  >
                    <RequestProgress />
                  </RequestProvider>
                ) : null}
              </Section>
            </div>
          }
          sidebarPosition='right'
        >
          <div className='flex w-full flex-col space-y-4 px-4'>
            <div className='grid grid-cols-3 gap-6'>
              <div className='col-span-2 grid grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='group space-y-2'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium text-muted-foreground'>
                        Status
                      </span>
                      <div className='hidden group-hover:block'>
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
                          items={REQUEST_STATUS_LIST}
                          updateButton={
                            <Edit2 className='h-4 w-4 cursor-pointer text-gray-400' />
                          }
                        />
                      </div>
                    </div>
                    <Badge
                      variant={
                        selectedRequest?.status === 'to_do'
                          ? 'secondary'
                          : selectedRequest?.status === 'in_progress'
                            ? 'in_progress'
                            : selectedRequest?.status === 'completed'
                              ? 'completed'
                              : 'destructive'
                      }
                    >
                      {capitalizeFirstLetter(selectedRequest?.status)}
                    </Badge>
                  </div>
                  <div className='group space-y-2'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium text-muted-foreground'>
                        Priority
                      </span>
                      <div className='hidden group-hover:block'>
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
                          items={REQUEST_URGENT_LIST}
                          updateButton={
                            <Edit2 className='h-4 w-4 cursor-pointer text-gray-400' />
                          }
                        />
                      </div>
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
                  <div className='group space-y-2'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium text-muted-foreground'>
                        Interview Date
                      </span>
                      <div className='hidden group-hover:block'>
                        <UIDateRangePicker
                          value={dateRange}
                          onAccept={(dates) => {
                            setDateRange({
                              from: dates.from ?? new Date(),
                              to: dates.to ?? new Date(),
                            });
                            if (dates) {
                              handleAsyncUpdateRequest({
                                payload: {
                                  requestId: selectedRequest.id,
                                  requestPayload: {
                                    schedule_start_date: dayjsLocal(
                                      dates.from,
                                    ).toISOString(),
                                    schedule_end_date: dayjsLocal(
                                      dates.to,
                                    ).toISOString(),
                                  },
                                },
                              });
                            }
                          }}
                          disablePastDates={true}
                          customButton={
                            <Edit2 className='h-4 w-4 cursor-pointer text-gray-400' />
                          }
                        />
                      </div>
                    </div>
                    <span className='text-sm'>
                      {dayjsLocal(selectedRequest?.schedule_start_date).format(
                        'DD MMM, YYYY',
                      ) +
                        ' - ' +
                        dayjsLocal(selectedRequest?.schedule_end_date).format(
                          'DD MMM, YYYY',
                        )}
                    </span>
                  </div>
                  <div className='group relative space-y-2'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-sm font-medium text-muted-foreground'>
                        Assigned to
                      </h3>
                      <div className='hidden group-hover:block'>
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
                          updateButton={
                            <Edit2 className='h-4 w-4 cursor-pointer text-gray-400' />
                          }
                          members={members ?? []}
                        />
                      </div>
                    </div>
                    <MemberCard
                      selectedMember={{
                        first_name: selectedMember?.first_name ?? '',
                        last_name: selectedMember?.last_name ?? '',
                        profile_image: selectedMember?.profile_image ?? '',
                        role: selectedMember?.role ?? '',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='group relative space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium text-muted-foreground'>
                      Request Type
                    </span>
                    <div className='hidden group-hover:block'>
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
                        items={REQUEST_TYPE_LIST}
                        updateButton={
                          <Edit2 className='h-4 w-4 cursor-pointer text-gray-400' />
                        }
                      />
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Badge
                      variant={
                        selectedRequest?.type === 'decline_request'
                          ? 'destructive'
                          : 'secondary'
                      }
                      className='gap-1'
                    >
                      <Calendar className='h-4 w-4 text-muted-foreground' />
                      <p>{capitalizeFirstLetter(selectedRequest?.type)}</p>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <Section>
              <SectionHeaderText>
                <SectionTitle>Request Notes</SectionTitle>
              </SectionHeaderText>
              <RequestNotes />
            </Section>

            <SessionCards
              refetchMeetings={refetchMeetings}
              sessions={
                sessions as Awaited<ReturnType<typeof fetchSessionDetails>>
              }
            />
            <RecentRequests
              applicationId={selectedRequest?.application_id ?? ''}
            />
          </div>
        </TwoColumnPageLayout>
      </div>
    );
}

function SessionCards({
  sessions,
  refetchMeetings,
}: {
  sessions: Awaited<ReturnType<typeof fetchSessionDetails>>;
  refetchMeetings: () => void;
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { onClickEdit } = useEditSession();

  return (
    <div>
      {/* <SideDrawerEdit refetch={refetch} /> */}
      <Section>
        <SectionHeaderText>
          <SectionTitle>Sessions</SectionTitle>
        </SectionHeaderText>
        <div className='space-y-2'>
          {sessions &&
            sessions.map((session, index) => (
              <>
                <Card key={index} className='rounded-md shadow-none'>
                  <CardHeader
                    className='cursor-pointer px-4 py-2'
                    onClick={() => {
                      setExpandedCard(expandedCard === index ? null : index);
                    }}
                  >
                    <div className='flex items-center justify-between'>
                      <CardTitle className='flex-1 truncate text-sm font-medium'>
                        {capitalizeFirstLetter(
                          session?.interview_session?.name ?? '',
                        )}
                      </CardTitle>
                      <div className='flex items-center space-x-2'>
                        <Badge variant='outline' className='text-xs'>
                          {capitalizeFirstLetter(
                            session?.interview_meeting?.status ?? '',
                          )}
                        </Badge>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            onClickEdit(session);
                          }}
                          variant='outline'
                          size='sm'
                        >
                          <Edit2 className='mr-2 h-4 w-4' />
                          Edit
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              `/interviews/view?meeting_id=${session?.interview_meeting?.id}&tab=job_details`,
                              '_blank',
                            );
                          }}
                          variant='outline'
                          size='sm'
                        >
                          <Eye className='mr-2 h-4 w-4' />
                          View Details
                        </Button>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedCard === index ? 'rotate-180 transform' : ''
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
                <div className='px-0'>
                  {session?.interview_session?.break_duration ? (
                    <div>
                      <Card className='flex justify-between rounded-md border-2 border-dashed px-4 py-2 shadow-none'>
                        <div className='flex items-center space-x-2'>
                          <Coffee className='h-4 w-4' /> <p>Break</p>
                        </div>
                        <div className='pr-6'>
                          <UISelectDropDown
                            className='max-w-[150px]'
                            fullWidth
                            fieldSize='medium'
                            menuOptions={breakDurations.map((ele) => ({
                              name: getBreakLabel(ele),
                              value: ele.toString(),
                            }))}
                            value={session.interview_session.break_duration.toString()}
                            onValueChange={(value) => {
                              updateInterviewSessionsDurations(
                                session?.interview_session?.id ?? '',
                                parseInt(value),
                              ).then(() => refetchMeetings());
                            }}
                          />
                        </div>
                      </Card>
                      <div className='flex items-center justify-center space-x-2'></div>
                    </div>
                  ) : null}
                </div>
              </>
            ))}
        </div>
      </Section>
    </div>
  );
}

function ViewRequestDetailsSkeleton() {
  return (
    <div className='container-lg mx-auto w-full px-16'>
      <div className='space-y-8'>
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>
                <Home className='h-4 w-4' />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/requests'>Requests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='#' className='font-medium text-gray-900'>
                Request Details
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Header */}
        <div className='flex flex-row items-start justify-between pb-2'>
          <div>
            <h1 className='mb-2 text-2xl font-bold text-gray-900'>
              <Skeleton className='h-10 w-96' />
            </h1>
            <Skeleton className='h-4 w-96' />
          </div>
          <div className='flex flex-col items-end gap-4'>
            <div className='item-center flex flex-row gap-2'>
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
        {/* Request Details Card */}
        <div className='flex'>
          <div className='flex w-8/12 flex-col space-y-4 pb-6 pr-4'>
            <Card className='bg-white shadow-sm'>
              <CardHeader className='flex flex-row items-start justify-between pb-2'>
                <Skeleton className='h-8 w-1/4' />
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-3 gap-6'>
                  <div className='col-span-2 grid grid-cols-2 gap-6'>
                    <div className='space-y-4'>
                      <Skeleton className='h-4 w-full' />
                      <Skeleton className='h-4 w-full' />
                    </div>
                    <div className='space-y-4'>
                      <Skeleton className='h-4 w-full' />
                      <Skeleton className='h-4 w-full' />
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <Skeleton className='h-4 w-full' />
                  </div>
                </div>
                <Skeleton className='h-20 w-full' />
                <Skeleton className='h-20 w-full' />
              </CardContent>
            </Card>
            <Card className='bg-white shadow-sm'>
              <CardHeader className='flex flex-row items-start justify-between pb-2'>
                <Skeleton className='h-8 w-1/4' />
              </CardHeader>
              <CardContent>
                <Skeleton className='h-20 w-full' />
              </CardContent>
            </Card>
          </div>
          <div className='flex w-4/12 flex-col space-y-4'>
            <Card className='bg-white shadow-sm'>
              <CardHeader className='flex flex-row items-start justify-between pb-2'>
                <Skeleton className='h-8 w-1/4' />
              </CardHeader>
              <CardContent className='space-y-4'>
                <Skeleton className='h-10 w-full' />
              </CardContent>
            </Card>
            <Card className='bg-white shadow-sm'>
              <CardHeader className='flex flex-row items-start justify-between pb-2'>
                <Skeleton className='h-8 w-1/4' />
              </CardHeader>
              <CardContent className='space-y-4'>
                <Skeleton className='h-10 w-full' />
                <Skeleton className='h-10 w-full' />
                <Skeleton className='h-10 w-full' />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
