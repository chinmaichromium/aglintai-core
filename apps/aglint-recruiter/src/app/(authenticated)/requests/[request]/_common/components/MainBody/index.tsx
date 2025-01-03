import { dayjsLocal, getBreakLabel, getFullName } from '@aglint/shared-utils';
import {
  Section,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import { TwoColumnPageLayout } from '@components/layouts/two-column-page-layout';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { Card, CardHeader, CardTitle } from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import { UIBadge } from '@components/ui-badge';
import {
  REQUEST_STATUS_LIST,
  REQUEST_TYPE_LIST,
  REQUEST_URGENT_LIST,
} from '@requests/constant';
import { useMeetingList, useRequests } from '@requests/hooks';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Coffee,
  Edit2,
  MapPin,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMemberList } from 'src/app/_common/hooks/useMemberList';

import { Loader } from '@/common/Loader';
import { useTenant } from '@/company/hooks';
import { UIDateRangePicker } from '@/components/Common/UIDateRangePicker';
// import { UIDivider } from '@/components/Common/UIDivider';
import UISelectDropDown from '@/components/Common/UISelectDropDown';
import UpdateMembers from '@/components/Common/UpdateMembers';
import SideDrawerEdit from '@/jobs/job/application/components/EditDrawer';
import CollapseContent from '@/jobs/job/application/components/InterviewStage/IndividualSession/Collapse';
import { useEditSession } from '@/jobs/job/application/components/InterviewTab/hooks/useEditSession';
import { type Request } from '@/queries/requests/types';
import { type fetchSessionDetails } from '@/server/api/routers/requests/utils/requestSessions';
import ROUTES from '@/utils/routing/routes';
import { breakDurations } from '@/utils/scheduling/const';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import { updateInterviewSessionsDurations } from '../../utils';
import CandidateAvailability from '../CandidateAvailability';
import ConfirmAvailability from '../ConfirmAvailability';
import { AvailabilityProvider } from '../ConfirmAvailability/_common/contexts/RequestAvailabilityContext';
import RecentRequests from '../RecentRequests';
import RequestNextSteps from '../RequestNextSteps';
import RequestNotes from '../RequestNotes';
import RequestProgress from '../RequestProgress';
import UpdateDetails from '../UpdateDetails';

export default function ViewRequestDetails() {
  const params = useParams();
  const requestId = params?.request as string;
  const {
    requests: { data: requestList, isPlaceholderData },
    handleAsyncUpdateRequest,
  } = useRequests();
  const { data: sessions, status, refetch: refetchMeetings } = useMeetingList();

  const { data: members } = useMemberList();
  const { recruiter_user } = useTenant();

  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: new Date() });

  const selectedRequest = Object.values(requestList ?? [])
    .flat()
    .find((request) => request?.id === requestId);
  const candidateDetails = selectedRequest?.applications?.candidates;
  const jobDetails = selectedRequest?.applications?.public_jobs;
  const assignee =
    members &&
    members.find((member) => member.user_id === selectedRequest?.assignee_id);
  const assigner =
    members &&
    members.find((member) => member.user_id === selectedRequest?.assigner_id);

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
    return <Loader />;
  } else
    return (
      <div className='w-full' data-testid='request-details-page'>
        {selectedRequest && (
          <CandidateAvailability selectedRequest={selectedRequest} />
        )}
        <AvailabilityProvider>
          <ConfirmAvailability />
        </AvailabilityProvider>
        <SideDrawerEdit />

        <TwoColumnPageLayout
          sidebarWidth={'400px'}
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
              <div className='relative flex flex-row items-start border-b border-muted p-4'>
                <div>
                  <h1 className='mb-2 text-2xl'>
                    {capitalizeFirstLetter(selectedRequest?.title ?? '')}
                  </h1>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
                    <div className='flex items-center space-x-1'>
                      <User className='h-4 w-4 text-muted-foreground' />
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
                        <span className='duration-300 hover:text-muted hover:underline'>
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
                <div className='absolute bottom-4 right-4 flex flex-col items-end gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    {selectedRequest.status === 'completed' ? (
                      <div className='flex items-center gap-1'>
                        <div className='text-sm text-muted-foreground'>
                          Completed at
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          {dayjsLocal(selectedRequest?.completed_at).fromNow()}
                        </p>
                      </div>
                    ) : (
                      <div className='flex items-center gap-1'>
                        <div className='text-sm text-muted-foreground'>
                          Updated at
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          {dayjsLocal(selectedRequest?.updated_at).fromNow()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          }
          sidebar={
            <div className='flex w-full flex-col space-y-4'>
              <RequestNextSteps />
              <Section>
                <SectionHeaderText>
                  <SectionTitle className='font-medium'>
                    Request Progress
                  </SectionTitle>
                </SectionHeaderText>
                {selectedRequest ? <RequestProgress /> : null}
              </Section>
            </div>
          }
          sidebarPosition='right'
        >
          <div className='flex w-full flex-col space-y-4 px-4'>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 rounded-md bg-muted/50 p-4'>
              <div className='group relative space-y-2'>
                <div className='flex items-center gap-2'>
                  <span className='text-sm font-medium text-muted-foreground'>
                    Status
                  </span>
                  <div className='hidden group-hover:block'>
                    <UpdateDetails
                      handleChange={async ({ value }) => {
                        const status = value as unknown as Request['status'];
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
                        selectedRequest.status === 'to_do' ? (
                          <Edit2 className='h-3 w-3 cursor-pointer text-muted-foreground' />
                        ) : null
                      }
                    />
                  </div>
                </div>
                <UIBadge
                  data-testid={
                    selectedRequest?.status === 'completed'
                      ? `request-details-status-completed`
                      : ''
                  }
                  variant={
                    selectedRequest?.status === 'to_do'
                      ? 'neutral'
                      : selectedRequest?.status === 'in_progress'
                        ? 'info'
                        : selectedRequest?.status === 'completed'
                          ? 'success'
                          : 'destructive'
                  }
                  className={`rounded-sm`}
                  textBadge={capitalizeFirstLetter(selectedRequest?.status)}
                />
              </div>
              <div className='group relative space-y-2'>
                <div className='flex items-center gap-2'>
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
                        <Edit2 className='h-3 w-3 cursor-pointer text-muted-foreground' />
                      }
                    />
                  </div>
                </div>
                <UIBadge
                  variant='neutral'
                  className='rounded-sm'
                  textBadge={capitalizeFirstLetter(selectedRequest?.priority)}
                />
              </div>
              <div className='group relative space-y-2'>
                <div className='flex items-center gap-2'>
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
                        <Edit2 className='h-3 w-3 cursor-pointer text-muted-foreground' />
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
                <div className='flex items-center gap-2'>
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
                        <Edit2 className='h-3 w-3 cursor-pointer text-gray-600' />
                      }
                      members={members ?? []}
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <Avatar className='ml-0 h-6 w-6 rounded-sm'>
                    <AvatarImage src={assignee?.profile_image} alt='Avatar' />
                    <AvatarFallback className='h-6 w-6 rounded-sm bg-gray-200'>
                      <span className='text-sm'>
                        {assignee?.first_name.slice(0, 1)}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <Link
                    href={ROUTES['/user/[user]']({
                      user_id: assignee?.user_id ?? '',
                    })}
                  >
                    <p>
                      {getFullName(
                        assignee?.first_name ?? '',
                        assignee?.last_name ?? '',
                      )}
                      {assignee?.user_id === recruiter_user.user_id
                        ? ' (You)'
                        : ''}
                    </p>
                  </Link>
                </div>
              </div>
              <div className='group relative space-y-2'>
                <div className='flex items-center gap-2'>
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
                        selectedRequest?.status === 'to_do' ? (
                          <Edit2 className='h-3 w-3 cursor-pointer text-muted-foreground' />
                        ) : null
                      }
                    />
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <UIBadge
                    data-testid='request-details-type'
                    variant={
                      selectedRequest?.type === 'decline_request'
                        ? 'destructive'
                        : 'neutral'
                    }
                    className='gap-1 rounded-sm'
                    textBadge={capitalizeFirstLetter(selectedRequest?.type)}
                  />
                </div>
              </div>
              <div className='group relative space-y-2'>
                <div className='text-sm font-medium text-muted-foreground'>
                  Candidate
                </div>
                <div className='flex gap-2 duration-300'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-sm bg-muted'>
                    <User className='h-4 w-4' />
                  </div>
                  {getFullName(
                    candidateDetails?.first_name ?? '',
                    candidateDetails?.last_name ?? '',
                  )}
                </div>
              </div>
              <div className='group relative space-y-2'>
                <div className='flex items-center gap-2'>
                  <h3 className='text-sm font-medium text-muted-foreground'>
                    Requested by
                  </h3>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <Avatar className='ml-0 h-6 w-6 rounded-sm'>
                    <AvatarImage src={assigner?.profile_image} alt='Avatar' />
                    <AvatarFallback className='h-6 w-6 rounded-sm bg-muted'>
                      <span className='text-sm'>
                        {assigner?.first_name.slice(0, 1)}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <Link
                    href={ROUTES['/user/[user]']({
                      user_id: assigner?.user_id ?? '',
                    })}
                  >
                    <p>
                      {getFullName(
                        assigner?.first_name ?? '',
                        assigner?.last_name ?? '',
                      )}
                      {assigner?.user_id === recruiter_user.user_id
                        ? ' (You)'
                        : ''}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className='mt-4 flex flex-col gap-8'>
              <Section>
                <SectionHeaderText>
                  <SectionTitle>Sessions</SectionTitle>
                </SectionHeaderText>
                {status === 'pending' ? (
                  <div className='space-y-2'>
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-full' />
                  </div>
                ) : null}

                {status === 'success' && sessions.length ? (
                  <SessionCards
                    editable={selectedRequest?.status === 'to_do'}
                    refetchMeetings={refetchMeetings}
                    sessions={
                      sessions as Awaited<
                        ReturnType<typeof fetchSessionDetails>
                      >
                    }
                  />
                ) : null}
                {status === 'success' && !sessions.length ? (
                  <Alert>
                    <AlertTitle>No sessions found</AlertTitle>
                    <AlertDescription>
                      No sessions found for this request
                    </AlertDescription>
                  </Alert>
                ) : null}
              </Section>
              <Section>
                <SectionHeaderText>
                  <SectionTitle>Request Notes</SectionTitle>
                </SectionHeaderText>
                <RequestNotes />
              </Section>

              <RecentRequests />
            </div>
          </div>
        </TwoColumnPageLayout>
      </div>
    );
}

function SessionCards({
  sessions,
  refetchMeetings,
  editable = false,
}: {
  sessions: Awaited<ReturnType<typeof fetchSessionDetails>>;
  refetchMeetings: () => void;
  editable?: boolean;
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { onClickEdit } = useEditSession();

  const getVariant = (
    status: Awaited<
      ReturnType<typeof fetchSessionDetails>
    >[number]['interview_meeting']['status'],
  ) => {
    // "default" | "secondary" | "accent" | "info" | "success" | "warning" | "destructive" | "purple" | "neutral" | null | undefined
    return status === 'cancelled'
      ? 'destructive'
      : status === 'completed'
        ? 'success'
        : status === 'confirmed'
          ? 'info'
          : status === 'not_scheduled'
            ? 'neutral'
            : status === 'reschedule'
              ? 'warning'
              : status === 'waiting'
                ? 'warning'
                : 'default';
  };
  return (
    <div className='mt-2 flex flex-col gap-1'>
      {sessions.map((session, index) => (
        <div key={index}>
          <Card className='group rounded-md border-none bg-muted/50 shadow-none'>
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
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickEdit(session);
                    }}
                    variant='outline'
                    size='sm'
                    className='hidden group-hover:flex'
                    disabled={!editable}
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
                    className='hidden group-hover:flex'
                  >
                    <ArrowUpRight className='mr-2 h-4 w-4' />
                    View Details
                  </Button>

                  <UIBadge
                    className={`h-[28px] rounded-md border-none font-normal`}
                    textBadge={capitalizeFirstLetter(
                      session?.interview_meeting?.status ?? '',
                    )}
                    variant={getVariant(session?.interview_meeting?.status)}
                  />
                  <div className='flex h-[26px] w-[26px] items-center justify-center rounded-md border bg-muted'>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCard === index ? 'rotate-180 transform' : ''
                      }`}
                    />
                  </div>
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
            {sessions.length > 1 &&
            index < sessions.length - 1 &&
            session?.interview_session?.break_duration ? (
              <div>
                <Card className='flex justify-between rounded-md border-2 border-dashed border-border bg-muted/30 px-[15px] py-2 shadow-none'>
                  <div className='flex items-center'>
                    <p className='text-sm font-medium'>Break</p>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <UISelectDropDown
                      className='h-[26px] w-[150px]'
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
                      disabled={!editable}
                    />
                    <div className='flex h-[26px] w-[26px] items-center justify-center rounded-md border border-border bg-muted'>
                      <Coffee className='h-3 w-3' />
                    </div>
                  </div>
                </Card>
                <div className='flex items-center justify-center space-x-2'></div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
