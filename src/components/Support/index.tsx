import {
  Avatar,
  Drawer,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { useState } from 'react';

import { AllTickets } from '@/devlink/AllTickets';
import { Assignee } from '@/devlink/Assignee';
import { InboxTickets } from '@/devlink/InboxTickets';
import { Priority } from '@/devlink/Priority';
import { StatusPill } from '@/devlink/StatusPill';
import {
  getPriorityIcon,
  useSupportContext,
} from '@/src/context/SupportContext/SupportContext';
import { palette } from '@/src/context/Theme/Theme';
import { Public_jobsType, Support_ticketType } from '@/src/types/data.types';
// import { Public_jobsType, Support_ticketType } from '@/src/types/data.types';
import {
  // allPriority,
  // allStatus,
  mapPriorityColor,
  mapStatusColor,
} from '@/src/utils/support/supportUtils';

import SupportTicketDetails from './SupportTicket';
import { capitalize } from '../JobApplicationsDashboard/utils';
dayjs.extend(relativeTime);

function Support() {
  const {
    tickets,
    openTicket,
    // setOpenTicket,
    setOpenTicketIndex,
    allChecked,
    setAllChecked,
    sort,
    setSort,
    sortOrder,
    setSortOrder,
    search,
    setSearch,
  } = useSupportContext();
  return (
    <>
      <Drawer
        open={Boolean(openTicket)}
        onClose={() => {
          setOpenTicketIndex(-1);
        }}
        anchor={'right'}
      >
        <SupportTicketDetails
          ticketProp={openTicket}
          onClose={() => {
            setOpenTicketIndex(-1);
          }}
        />
      </Drawer>
      <AllTickets
        slotTicketList={tickets.map((ticket, index) => (
          <Ticket key={ticket.id} ticket={ticket} index={index} />
        ))}
        onClickAllTicketCheck={{
          onClick: () => {
            setAllChecked(!allChecked);
          },
        }}
        isAllTicketChecked={allChecked}
        onClickPriority={{
          onClick: () => {
            if (sort === 'priority') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('priority');
              setSortOrder(1);
            }
          },
        }}
        isSortPriorityArrowVisible={sort === 'priority'}
        onClickSortCandidateName={{
          onClick: () => {
            if (sort === 'name') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('name');
              setSortOrder(1);
            }
          },
        }}
        isSortCandidateArrowVisible={sort === 'name'}
        onClickSortAssignee={{
          onClick: () => {
            if (sort === 'assignee') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('assignee');
              setSortOrder(1);
            }
          },
        }}
        isSortAssigneeArrowVisible={sort === 'assignee'}
        onClickSortStatus={{
          onClick: () => {
            if (sort === 'status') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('status');
              setSortOrder(1);
            }
          },
        }}
        isSortStatusVisible={sort === 'status'}
        onClickSortLastUpdate={{
          onClick: () => {
            if (sort === 'lastUpdate') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('lastUpdate');
              setSortOrder(1);
            }
          },
        }}
        isSortUpdateArrowVisible={sort === 'lastUpdate'}
        onClickSortJobInfo={{
          onClick: () => {
            if (sort === 'jobInfo') {
              // @ts-ignore
              setSortOrder(-1 * sortOrder);
            } else {
              setSort('jobInfo');
              setSortOrder(1);
            }
          },
        }}
        isSortJobArrowVisible={sort === 'jobInfo'}
        slotSearch={
          <CustomTextField
            placeholder='Search'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        }
      />
    </>
  );
}
export default Support;

const Ticket = ({
  ticket,
  index,
}: {
  ticket: Support_ticketType & { jobsDetails: Public_jobsType };
  index: number;
}) => {
  const { updateTicket, allAssignee } = useSupportContext();
  const { setOpenTicketIndex, allChecked } = useSupportContext();
  const [checked, setChecked] = useState(false);
  const assignedTo =
    ticket &&
    allAssignee.find((item) => {
      return ticket.assign_to === item.id;
    });
  return (
    <InboxTickets
      key={ticket.id}
      textTicketsId={ticket.id}
      // textAssigneeName={ticket.assign_to || 'Not Assigned'}
      slotIssue={
        <LineText
          line='two'
          color={palette.grey[600]}
          text={
            ticket.content?.length
              ? // @ts-ignore
                ticket.content[ticket.content.length - 1].text
              : ''
          }
        />
      }
      slotAssignee={
        <AssignmentComponent
          assign_to={capitalize(assignedTo?.title || '')}
          imageUrl={assignedTo?.image}
          // @ts-ignore
          setAssignedTo={(assign_to) => updateTicket({ assign_to }, ticket.id)}
        />
      }
      textCandidateName={ticket.user_name}
      textJobRole={
        <LineText line='two' text={ticket.jobsDetails?.job_title || ''} />
      }
      isChecked={allChecked || checked}
      // textStatus={ticket.state}
      slotStatus={
        <StatusComponent
          status={capitalize(ticket?.state || '')}
          setStatus={(state) => {
            // @ts-ignore
            updateTicket({ state }, ticket.id);
          }}
        />
      }
      // textPriority={ticket.priority}
      slotPriority={
        <PriorityComponent
          priority={capitalize(ticket.priority)}
          setPriority={(priority) => {
            // @ts-ignore
            updateTicket({ priority }, ticket.id);
          }}
        />
      }
      textDate={dayjs(ticket.updated_at).fromNow()}
      textCompanyLocations={''}
      textIssues={<LineText text={ticket.title || ''} />}
      // colorTextPriority={{
      //   style: {
      //     color: mapPriorityColor(ticket.priority),
      //   },
      // }}
      // colorBgPropsStatus={{
      //   style: {
      //     backgroundColor: mapPriorityColor(ticket.priority),
      //   },
      // }}
      // slotPriorityIcon={<>{getPriorityIcon(ticket.priority || '')}</>}
      // slotAssigneeImage={
      //   <Avatar
      //     src=''
      //     alt={ticket.assign_to || 'Not Assigned'}
      //     sx={{ height: '100%', width: '100%' }}
      //   />
      // }
      slotCandidateImage={
        <Avatar
          src=''
          alt={ticket.assign_to || 'Not Assigned'}
          sx={{ height: '100%', width: '100%' }}
        />
      }
      onClickCheck={{
        onClick: (e) => {
          e.stopPropagation();
          setChecked(!checked);
        },
      }}
      onClickCard={{
        onClick: () => {
          // router.push(`/support/${ticket.id}`);
          setOpenTicketIndex(index);
        },
      }}
    />
  );
};

const AssignmentComponent = ({
  assign_to,
  imageUrl, // setAssignedTo,
}: {
  assign_to: string;
  imageUrl?: string;
  // eslint-disable-next-line no-unused-vars
  setAssignedTo: (value: string) => void;
}) => {
  // const { allAssignee } = useSupportContext();
  // const [open, setOpen] = useState(false);

  return (
    // <Stack
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     open || setOpen(true);
    //   }}
    //   sx={{
    //     cursor: 'pointer',
    //   }}
    // >
    //   {open ? (
    //     <CustomAutoComplete
    //       setOpen={setOpen}
    //       value={assign_to}
    //       options={allAssignee.map((assignee) => ({
    //         id: assignee.id,
    //         title: assignee.title,
    //       }))}
    //       onChange={setAssignedTo}
    //     />
    //   ) : (
    <Assignee
      textAssigneeName={assign_to || 'Not Assigned'}
      slotAssigneeImage={
        <Avatar
          src={imageUrl || ''}
          alt={'user_name'}
          sx={{ height: '100%', width: '100%' }}
        />
      }
    />
    //   )}
    // </Stack>
  );
};

const PriorityComponent = ({
  priority, // setPriority,
}: {
  priority: string;
  // eslint-disable-next-line no-unused-vars
  setPriority: (value: string) => void;
}) => {
  // const [open, setOpen] = useState(false);

  return (
    // <Stack
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     open || setOpen(true);
    //   }}
    //   sx={{
    //     cursor: 'pointer',
    //   }}
    // >
    //   {open ? (
    //     <CustomAutoComplete
    //       setOpen={setOpen}
    //       value={priority}
    //       options={allPriority}
    //       onChange={setPriority}
    //     />
    //   ) : (
    <Priority
      textPriority={priority}
      slotPriorityIcon={getPriorityIcon(priority)}
      colorTextPriority={{
        style: {
          color: mapPriorityColor(priority),
        },
      }}
    />
    //   )}
    // </Stack>
  );
};

const StatusComponent = ({
  status, // setStatus,
}: {
  status: string;
  // eslint-disable-next-line no-unused-vars
  setStatus: (value: string) => void;
}) => {
  // const [open, setOpen] = useState(false);

  return (
    // <Stack
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     open || setOpen(true);
    //   }}
    //   sx={{
    //     cursor: 'pointer',
    //   }}
    // >
    //   {open ? (
    //     <CustomAutoComplete
    //       setOpen={setOpen}
    //       value={status}
    //       options={allStatus}
    //       onChange={setStatus}
    //     />
    //   ) : (
    <StatusPill
      textStatus={status}
      colorBgPropsStatus={{
        style: {
          backgroundColor: mapStatusColor(status),
        },
      }}
    />
    //   )}
    // </Stack>
  );
};

// const CustomAutoComplete = ({
//   value,
//   options,
//   setOpen,
//   onChange,
// }: {
//   // eslint-disable-next-line no-unused-vars
//   setOpen: (x: boolean) => void;
//   options: string[] | { id: string; title: string }[];
//   value: string;
//   // eslint-disable-next-line no-unused-vars
//   onChange: (value: string) => void;
// }) => {
//   return (
//     <Autocomplete
//       open={true}
//       value={value}
//       options={[...options]}
//       getOptionLabel={(option) => {
//         // @ts-ignore
//         return capitalize(option.title || option);
//       }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           inputProps={{
//             ...params.inputProps,
//           }}
//           InputProps={{
//             ...params.InputProps,
//             disableUnderline: true,
//           }}
//           variant='filled'
//           // eslint-disable-next-line jsx-a11y/no-autofocus
//           autoFocus={true}
//           onBlur={() => {
//             setOpen(false);
//           }}
//           sx={{
//             minWidth: '150px',
//             '& .MuiAutocomplete-root': { height: '30px' },
//             '& .MuiFormControl-root ': { margin: 0 },

//             '& input': { padding: '0px!important', fontSize: '14px' },
//             '& .MuiInputBase-root': {
//               padding: '4px 26px 4px 4px !important',
//             },
//             '& .MuiAutocomplete-endAdornment': {
//               right: '4px!important',
//             },
//           }}
//         />
//       )}
//       onChange={(_, newValue) => {
//         if (newValue) {
//           // @ts-ignore
//           onChange(newValue.id || newValue);
//           setOpen(false);
//         }
//       }}
//     />
//   );
// };

const LineText = ({
  text,
  color,
  line = 'one',
}: {
  text: string;
  color?: string;
  line?: 'one' | 'two';
}) => {
  return (
    <Stack
      className={line === 'one' ? 'one-line-clamp' : 'two-line-clamp'}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
      sx={{
        color: color,
      }}
    ></Stack>
  );
};

const CustomTextField = (rest: TextFieldProps) => {
  const { label, required, sx, error, ...props } = rest;
  return (
    <Stack gap={1}>
      <Typography fontFamily={'inherit'}>
        {label}
        {required && '*'}
        {/* {rest?.label && ':'} */}
      </Typography>
      {/* @ts-ignore */}
      <TextField
        {...props}
        sx={{
          ...sx,
          padding: '0px',
          '& .MuiInputBase-root': { padding: '4px' },
          '& input': { padding: '0px' },
          '& .MuiFilledInput-root': error
            ? {
                borderColor: palette.red[600],
                outlineColor: palette.red[200],
              }
            : {},
        }}
      />
    </Stack>
  );
};
