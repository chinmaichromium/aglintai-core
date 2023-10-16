import {
  Autocomplete,
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AssigneeSmall } from '@/devlink/AssigneeSmall';
import { PrioritySmall } from '@/devlink/PrioritySmall';
import { StatusPillSmall } from '@/devlink/StatusPillSmall';
import { TicketChatBubble } from '@/devlink/TicketChatBubble';
import { TicketMessageSuggestion } from '@/devlink/TicketMessageSuggestion';
import { TicketSideDrawer } from '@/devlink/TicketSideDrawer';
import { TicketStatusDivider } from '@/devlink/TicketStatusDivider';
import { TicketTimeDivider } from '@/devlink/TicketTimeDivider';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import {
  getPriorityIcon,
  useSupportContext,
} from '@/src/context/SupportContext/SupportContext';
import { palette } from '@/src/context/Theme/Theme';
import {
  EmailTemplateType,
  JobApplcationDB,
  Public_jobsType,
  Support_ticketType,
  SupportEmailAPIType,
} from '@/src/types/data.types';
import { supabase } from '@/src/utils/supabaseClient';
import {
  allPriority,
  allStatus,
  fillEmailTemplate,
  mapPriorityColor,
  mapStatusColor,
} from '@/src/utils/support/supportUtils';
import toast from '@/src/utils/toast';

import TipTapEditor from '../Common/richTextEditor/RichTextBlock';
import { capitalize } from '../JobApplicationsDashboard/utils';

dayjs.extend(relativeTime);

function SupportTicketDetails({
  ticketProp,
  onClose,
}: {
  ticketProp: Support_ticketType & { jobsDetails: Public_jobsType };
  onClose: () => void;
}) {
  const {
    tickets,
    updateTicket,
    allAssignee,
    openTicketIndex,
    setOpenTicketIndex,
  } = useSupportContext();
  const router = useRouter();
  const { userDetails, recruiter } = useAuthDetails();
  const [ticket, setTicket] = useState<
    Support_ticketType & { jobsDetails: Public_jobsType }
  >(null);
  const [application, setApplication] = useState<JobApplcationDB>(null);
  const [emailTemplates, setEmailTemplates] = useState<EmailTemplateType>(null);

  const sendMessage = (message: string) => {
    if (
      message &&
      message.replaceAll('</p>', '').replaceAll('<p>', '').trim() !== ''
    )
      return callUpdateTicket({
        // @ts-ignore
        content: [
          ...(ticket?.content ? ticket.content : []),
          {
            type: 'message',
            from: 'it_support',
            id: userDetails.user.id,
            name: recruiter?.name,
            text: message,
            timeStamp: new Date().toISOString(),
          },
        ],
      });
  };
  const callUpdateTicket = (data: Partial<Support_ticketType[]>) => {
    // @ts-ignore
    return updateTicket(data, ticket.id);
  };

  useEffect(() => {
    // getTicket(ticket_id).then((data) => {
    //   data?.job_id &&
    //     getJobDetails(data.job_id).then((jobDetails) => {
    //       // @ts-ignore
    //       setTicket({ ...data, jobDetails } as Support_ticketType & {
    //         jobsDetails: Public_jobsType;
    //       });
    //     });
    //   // console.log({ data, ticket_id });
    // });
    if (ticketProp) {
      setTicket(ticketProp);
      setEmailTemplates(
        // @ts-ignore
        ticketProp.jobsDetails.screening_setting?.screeningEmail
          ?.emailTemplates,
      );
      ticketProp?.application_id &&
        getJobApplicationDetails(ticketProp.application_id).then(
          (data) => data && setApplication(data),
        );
    }
  }, [ticketProp]);
  const assignedTo =
    ticketProp &&
    allAssignee.find((item) => {
      return ticketProp.assign_to === item.id;
    });
  return (
    <Stack width={{ sm: '100%', md: '930px' }}>
      {ticket && (
        <TicketSideDrawer
          textAppliedJobCompany={ticket.jobsDetails?.company}
          textAppliedJobPostedDate={
            application &&
            new Date(application?.created_at).toLocaleDateString()
          }
          slotAssignee={
            <AssignmentComponent
              assign_to={assignedTo?.title}
              imageUrl={assignedTo?.image}
              recruiterId={ticket.jobsDetails.recruiter_id}
              setAssignedTo={(assign_to) => {
                // @ts-ignore
                callUpdateTicket({ assign_to });
              }}
            />
          }
          slotPriority={
            <PriorityComponent
              priority={capitalize(ticket?.priority || '')}
              // @ts-ignore
              setPriority={(priority) => callUpdateTicket({ priority })}
            />
          }
          slotStatus={
            <StatusComponent
              status={capitalize(ticket?.state || '')}
              // @ts-ignore
              setStatus={(state) => callUpdateTicket({ state })}
            />
          }
          textAppliedJobRole={ticket.jobsDetails?.job_title}
          textCreatedDate={dayjs(ticket.created_at).fromNow()}
          textCandidateMail={application?.email || '-'}
          textCandidateName={ticket.user_name}
          // textCandidateSite={ticket.}
          textCandidateStatus={application && capitalize(application.status)}
          colorPropsCandidateStatus={{
            style: {
              color: mapPriorityColor(ticket.priority),
              backgroundColor: palette.grey[200],
            },
          }}
          textTicketId={ticket.id}
          textIssuesTitle={ticket.title}
          slotCandidateImage={
            <Avatar
              src={''}
              variant='rounded'
              alt={ticket.user_name}
              sx={{ height: '100%', width: '100%' }}
            />
          }
          textCandiatePhone={application?.phone || '-'}
          textCandidateSite={application?.linkedin || '-'}
          slotChatBox={
            <>
              {chatBox(
                ticket.content as {
                  id: string;
                  from: string;
                  name: string;
                  text: string;
                  type: string;
                  timeStamp: string;
                }[],
              )}
            </>
          }
          slotMessageSuggestion={[
            {
              type: 'Invitation mail',
              function: () =>
                sendEmail({
                  application_id: ticket.application_id,
                  email: application.email,
                  email_type: 'qualified',
                  details: {
                    fromEmail: recruiter.email,
                    fromName: recruiter.name,
                    temples: {
                      subject: fillEmailTemplate(
                        emailTemplates.interview.subject,
                        {
                          first_name: application.first_name,
                          last_name: application.last_name,
                          job_title: application.job_title,
                          company_name: application.company,
                        },
                      ),
                      body: fillEmailTemplate(emailTemplates.interview.body, {
                        first_name: application.first_name,
                        last_name: application.last_name,
                        job_title: application.job_title,
                        company_name: application.company,
                      }).replace(
                        '[interviewLink]',
                        getInterviewUrl(ticket.application_id),
                      ),
                    },
                  },
                }),
            },
            {
              type: 'Disqualified mail',
              function: () =>
                sendEmail({
                  application_id: ticket.application_id,
                  email: application.email,
                  email_type: 'qualified',
                  details: {
                    fromEmail: recruiter.email,
                    fromName: recruiter.name,
                    temples: {
                      subject: fillEmailTemplate(
                        emailTemplates.rejection.subject,
                        {
                          first_name: application.first_name,
                          last_name: application.last_name,
                          job_title: application.job_title,
                          company_name: application.company,
                        },
                      ),
                      body: fillEmailTemplate(emailTemplates.rejection.body, {
                        first_name: application.first_name,
                        last_name: application.last_name,
                        job_title: application.job_title,
                        company_name: application.company,
                      }),
                    },
                  },
                }),
            },
          ].map((item, index) => (
            <TicketMessageSuggestion
              textMessageSuggestion={item.type}
              key={index}
              onClickSuggestion={{
                onClick: () => {
                  item.function().then(({ emailSend }) => {
                    if (emailSend) {
                      callUpdateTicket({
                        // @ts-ignore
                        content: [
                          ...(ticket?.content ? ticket.content : []),
                          {
                            type: 'update',
                            from: 'it_support',
                            id: userDetails.user.id,
                            name: recruiter?.name,
                            text: `${item.type} Email Sent`,
                            timeStamp: new Date().toISOString(),
                          },
                        ],
                      });
                      toast.success('Email sent');
                    } else toast.error('Email not sent');
                  });
                },
              }}
            />
          ))}
          slotTypeMessage={<AddNewMessage sendMessage={sendMessage} />}
          onClickInterviewLink={{
            onClick: () => {
              navigator.clipboard
                .writeText(getInterviewUrl(ticket.application_id))
                .then(() => {
                  toast.message('Copied to clipboard');
                });
            },
          }}
          onClickAppliedViewJob={{
            onClick: () => {
              router.push(
                ` https://dev.aglinthq.com/job-post/${ticket.job_id}`,
              );
            },
          }}
          onClickClose={{
            onClick: onClose,
          }}
          onClickNext={{
            onClick: () => {
              setOpenTicketIndex((openTicketIndex + 1) % tickets.length);
            },
          }}
          onClickPrev={{
            onClick: () => {
              openTicketIndex - 1 < 0
                ? setOpenTicketIndex(tickets.length - 1)
                : setOpenTicketIndex(openTicketIndex - 1);
            },
          }}
        />
      )}
    </Stack>
  );
}

export default SupportTicketDetails;

// const getTicket = async (id: string) => {
//   const { data, error } = await supabase
//     .from('support_ticket')
//     .select('*')
//     .eq('id', id);
//   if (!error && data.length) {
//     return data[0];
//   }
//   return null;
// };

// const getJobDetails = async (job_id: string) => {
//   const { data, error } = await supabase
//     .from('public_jobs')
//     .select('*')
//     .eq('id', job_id);
//   if (!error && data.length) {
//     return data;
//   }
//   return [];
// };

const getJobApplicationDetails = async (application_id: string) => {
  const { data, error } = await supabase
    .from('job_applications')
    .select('*')
    .eq('application_id', application_id);
  if (!error && data.length) {
    return data[0];
  }
  return null;
};

const chatBox = (
  content: {
    id: string;
    from: string;
    name: string;
    text: string;
    type: string;
    timeStamp: string;
  }[],
) => {
  const temp = [];
  let tempDate = content[0].timeStamp;
  temp.push(<TicketTimeDivider textDate={dayjs(tempDate).fromNow()} />);
  content.forEach((item, index) => {
    if (
      new Date(item.timeStamp).toDateString() !==
      new Date(tempDate).toDateString()
    ) {
      tempDate = item.timeStamp;
      temp.push(<TicketTimeDivider textDate={dayjs(tempDate).fromNow()} />);
    }
    if (item.type === 'message') {
      temp.push(
        <TicketChatBubble
          key={index}
          slotChatImage={
            // @ts-ignore
            <Avatar
              variant='rounded'
              src={''}
              alt={item.name}
              sx={{ height: '100%', width: '100%' }}
            />
          }
          textMessages={
            <Typography
              dangerouslySetInnerHTML={{ __html: item.text }}
              fontSize={'14px'}
            />
          }
          textTime={dayjs(item.timeStamp).fromNow()}
          textName={item.name}
        />,
      );
    } else {
      temp.push(
        <TicketStatusDivider
          key={index}
          statusText={item.text.replaceAll('<b>', '').replaceAll('</b>', '')}
        />,
      );
    }
  });

  return (
    <Stack gap={2} flexGrow={1}>
      {temp}
    </Stack>
  );
};

const AddNewMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState<String>();
  return (
    <Stack gap={1}>
      {/* <TextField
        multiline
        minRows={2}
        maxRows={4}
        label='Reply'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      /> */}
      <TipTapEditor
        options={false}
        placeholder='Type Message'
        value={message}
        minRows={1}
        maxRows={4}
        onChange={(e) => {
          setMessage(e.html);
        }}
        onKeyDown={(e) => {
          if (!e.shiftKey && e.key === 'Enter') {
            sendMessage(message)?.then(() => setMessage(''));
          }
        }}
        toolboxPosition='bottom'
        customSend={
          <Stack direction={'row'} justifyContent={'end'} width={'100%'}>
            <IconButton
              disabled={false}
              onClick={() => {
                // handelAddTicket();
                sendMessage(message)?.then(() => setMessage(''));
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z'
                  fill='#2F3941'
                />
              </svg>
            </IconButton>
          </Stack>
        }
      />
    </Stack>
  );
};

const getInterviewUrl = (application_id: string) => {
  return `https://dev.aglinthq.com/landing-page?id=${application_id}`;
};

const sendEmail = ({
  application_id,
  email,
  email_type,
  details,
}: SupportEmailAPIType) => {
  return axios
    .post('/api/support/email', {
      application_id,
      email,
      email_type,
      details,
    })
    .then(({ data }) => {
      return data as { emailSend: boolean; error: string };
    });
};

const AssignmentComponent = ({
  assign_to,
  imageUrl,
  recruiterId,
  setAssignedTo,
}: {
  assign_to: string;
  imageUrl?: string;
  recruiterId: string;
  // eslint-disable-next-line no-unused-vars
  setAssignedTo: (value: string) => void;
}) => {
  const { allAssignee } = useSupportContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <CustomAutoComplete
          setOpen={setOpen}
          value={assign_to}
          options={allAssignee
            .filter(
              (item) => item.id === recruiterId || item.title === 'Aglint Inc',
            )
            .map((assignee) => ({
              id: assignee.id,
              title: assignee.title,
            }))}
          onChange={setAssignedTo}
        />
      ) : (
        <Stack
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            cursor: 'pointer',
          }}
        >
          <AssigneeSmall
            textAssignedtoName={
              <Stack
                className='one-line-clamp'
                dangerouslySetInnerHTML={{
                  __html: assign_to || 'Not Assigned',
                }}
              ></Stack>
            }
            slotAssignedToImage={
              <Avatar
                src={imageUrl || ''}
                variant='rounded'
                alt={'user_name'}
                sx={{ height: '100%', width: '100%' }}
              />
            }
          />
        </Stack>
      )}
    </>
  );
};

const PriorityComponent = ({
  priority,
  setPriority,
}: {
  priority: string;
  // eslint-disable-next-line no-unused-vars
  setPriority: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <CustomAutoComplete
          setOpen={setOpen}
          value={priority}
          options={allPriority}
          onChange={setPriority}
        />
      ) : (
        <Stack onClick={() => setOpen(true)}>
          <PrioritySmall
            textPriorityLevel={priority}
            slotPriorityIcon={getPriorityIcon(priority)}
            colorPropsPriorityText={{
              style: {
                color: mapPriorityColor(priority),
              },
            }}
          />
        </Stack>
      )}
    </>
  );
};

const StatusComponent = ({
  status,
  setStatus,
}: {
  status: string;
  // eslint-disable-next-line no-unused-vars
  setStatus: (value: string) => {};
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <CustomAutoComplete
          setOpen={setOpen}
          value={status}
          options={allStatus}
          onChange={setStatus}
        />
      ) : (
        <Stack onClick={() => setOpen(true)}>
          <StatusPillSmall
            textStatus={status}
            bgColorPropsStatus={{
              style: {
                backgroundColor: mapStatusColor(status),
              },
            }}
          />
        </Stack>
      )}
    </>
  );
};

const CustomAutoComplete = ({
  value,
  options,
  setOpen,
  onChange,
}: {
  // eslint-disable-next-line no-unused-vars
  setOpen: (x: boolean) => void;
  options: string[] | { id: string; title: string }[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}) => {
  return (
    <Autocomplete
      open={true}
      value={value}
      options={[...options]}
      getOptionLabel={(option) => {
        // @ts-ignore
        return capitalize(option.title || option);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
          }}
          variant='filled'
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={true}
          onBlur={() => {
            setOpen(false);
          }}
          sx={{
            minWidth: '150px',
            '& .MuiAutocomplete-root': { height: '30px' },
            '& .MuiFormControl-root ': { margin: 0 },

            '& input': { padding: '0px!important', fontSize: '14px' },
            '& .MuiInputBase-root': {
              padding: '4px 26px 4px 4px !important',
            },
            '& .MuiAutocomplete-endAdornment': {
              right: '4px!important',
            },
          }}
        />
      )}
      onChange={(_, newValue) => {
        if (newValue) {
          // @ts-ignore
          onChange(newValue.id || newValue);
          setOpen(false);
        }
      }}
    />
  );
};
