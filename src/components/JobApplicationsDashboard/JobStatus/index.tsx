/* eslint-disable security/detect-object-injection */
import CloseIcon from '@mui/icons-material/Close';
import { Collapse, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useState } from 'react';

import {
  DeleteJobPopup,
  DelJobBtn,
  JobStatus,
  JobStatusSelectBlock,
  RecPrimaryBtn,
  ToggleSelectDropdown,
} from '@/devlink2';
import { useJobApplications } from '@/src/context/JobApplicationsContext';
import { useJobs } from '@/src/context/JobsContext';
import { StatusJobs } from '@/src/types/data.types';
import toast from '@/src/utils/toast';

import { capitalize } from '../utils';
import MuiPopup from '../../Common/MuiPopup';
import SidePanelDrawer from '../../Common/SidePanelDrawer';
import SpecializedDatePicker from '../../Common/SpecializedDatePicker';
// import SpecializedTimePicker from '../../Common/SpecializedTimePicker';
import UITextField from '../../Common/UITextField';

const JobApplicationStatus = () => {
  const { job } = useJobApplications();
  const { jobsData } = useJobs();
  const status = jobsData.jobs.find((j) => j.id === job.id).active_status;
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const sourcingStatusInfo = getStatusInfo(status.sourcing, 'sourcing');
  const interviewingStatusInfo = getStatusInfo(
    status.interviewing,
    'interviewing',
  );
  return status.closed.isActive ? (
    <></>
  ) : (
    <>
      <SidePanelDrawer
        openSidePanelDrawer={openSidePanel}
        setOpenPanelDrawer={setOpenSidePanel}
        onClose={() => setOpenSidePanel(false)}
      >
        <Stack p={'26px'} gap={'15px'}>
          <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack fontFamily={'14px'} fontWeight={600}>
              Sourcing and Interviewing
            </Stack>
            <IconButton onClick={() => setOpenSidePanel(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <SideDrawerContent status={status} statusInfo={sourcingStatusInfo} />
          <SideDrawerContent
            status={status}
            statusInfo={interviewingStatusInfo}
          />
          <CloseJob status={status} />
        </Stack>
      </SidePanelDrawer>
      <JobStatus
        title={capitalize('sourcing')}
        onClickStatus={{ onClick: () => setOpenSidePanel(true) }}
        isActive={sourcingStatusInfo.active}
        isScheduled={sourcingStatusInfo.scheduled}
        isInactive={sourcingStatusInfo.inactive}
        textDate={sourcingStatusInfo.primaryStatus}
      />
      <JobStatus
        title={capitalize('interviewing')}
        onClickStatus={{ onClick: () => setOpenSidePanel(true) }}
        isActive={interviewingStatusInfo.active}
        isScheduled={interviewingStatusInfo.scheduled}
        isInactive={interviewingStatusInfo.inactive}
        textDate={interviewingStatusInfo.primaryStatus}
      />
    </>
  );
};

type Flow = 'sourcing' | 'interviewing';
type Status = StatusJobs;
type StatusInfo = {
  flow: Flow;
  active: boolean;
  scheduled: boolean;
  inactive: boolean;
  style: {
    color: string;
  };
  primaryStatus: string;
  secondaryStatus: string;
};

const CloseJob = ({ status }: { status: Status }) => {
  const { job } = useJobApplications();
  const { handleJobUpdate } = useJobs();
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const handleJobClose = async () => {
    setLoading(true);
    const confirmation = await handleJobUpdate(job.id, {
      active_status: {
        sourcing: {
          ...status.sourcing,
          isActive: false,
        },
        interviewing: {
          ...status.interviewing,
          isActive: false,
        },
        closed: {
          isActive: true,
          timeStamp: new Date().toISOString(),
        },
      },
    });
    if (confirmation) {
      toast.success('Job closed successfully');
    }
    setLoading(false);
    setClose(false);
  };
  const form = (
    <UITextField
      placeholder={job.job_title}
      onChange={(e) => {
        setText(e.currentTarget.value);
      }}
    ></UITextField>
  );
  return (
    <>
      <MuiPopup props={{ open: close }}>
        <Stack
          style={
            loading
              ? {
                  pointerEvents: 'none',
                }
              : {
                  pointerEvents: 'auto',
                }
          }
        >
          <DeleteJobPopup
            jobTitle={job.job_title.trim()}
            jobInfo={job.location.trim()}
            slotForm={form}
            closeProps={{ onClick: () => setClose(false) }}
            isDeleteDisabled={text.trim() !== job.job_title.trim()}
            onClickDelete={{ onClick: async () => await handleJobClose() }}
          />
        </Stack>
      </MuiPopup>
      <DelJobBtn onClick={{ onClick: () => setClose(true) }} />
    </>
  );
};

const SideDrawerContent = ({
  status,
  statusInfo,
}: {
  status: Status;
  statusInfo: StatusInfo;
}) => {
  const [expand, setExpand] = useState(false);
  const { handleJobUpdate } = useJobs();
  const { job } = useJobApplications();
  const jobId = job.id;
  const [loading, setLoading] = useState(false);

  const handleJobStatusInactive = async () => {
    setLoading(true);
    await handleJobUpdate(jobId, {
      active_status: {
        ...status,
        [statusInfo.flow]: {
          isActive: false,
          timeStamp: null,
        },
      },
    });
    setLoading(false);
    setExpand(false);
  };
  const checked = statusInfo.active || statusInfo.scheduled || expand;
  return (
    <Stack
      style={
        loading
          ? { opacity: 0.4, pointerEvents: 'none', transition: '0.5s' }
          : { opacity: 1, pointerEvents: 'auto', transition: '0.5s' }
      }
    >
      <ToggleSelectDropdown
        dropdownTitle={capitalize(statusInfo.flow)}
        slotToggleBtn={
          <Switch
            checked={checked}
            onClick={async () => {
              if (statusInfo.active || statusInfo.scheduled)
                await handleJobStatusInactive();
              else setExpand((prev) => !prev);
            }}
            sx={{
              '.MuiSwitch-thumb': {
                color: `${checked ? '#337fbd' : '#ffffff'} !important`,
                boxShadow: '1px 2px 2px 1px #ddd',
              },
              '.MuiSwitch-track': {
                backgroundColor: `${
                  checked ? '#98bedd' : '#c5c5c7'
                } !important`,
              },
            }}
          />
        }
        statusProps={{ style: statusInfo.style }}
        isSchedule={statusInfo.scheduled}
        isNotSchedule={!statusInfo.scheduled}
        slotSelection={
          <>
            <Collapse in={expand}>
              <JobSchedules
                jobId={jobId}
                status={status}
                flow={statusInfo.flow}
                setLoading={setLoading}
                setExpand={setExpand}
                isSchedule={statusInfo.scheduled}
              />
            </Collapse>
            <Collapse in={!expand}>
              <JobStatusDescription
                statusInfo={statusInfo}
                onClick={() => setExpand(true)}
              />
            </Collapse>
          </>
        }
        statusText={statusInfo.secondaryStatus}
      />
    </Stack>
  );
};

export const getStatusInfo = (
  status: { isActive: boolean; timeStamp: string },
  flow: Flow,
) => {
  const active = status.isActive;
  const scheduled = status.timeStamp !== null && !status.isActive;
  const inactive = status.timeStamp === null && !status.isActive;
  const style = {
    color:
      status.timeStamp !== null
        ? status.isActive
          ? 'green'
          : 'goldenrod'
        : 'grey',
  };
  const secondaryStatus =
    status.timeStamp !== null
      ? status.isActive
        ? `${capitalize(flow)} is active`
        : `${capitalize(flow)} starts on ${dayjs(status.timeStamp).format(
            'DD MMM, YYYY',
            // 'DD MMM, YYYY, hh:mm a',
          )}`
      : `${capitalize(flow)} is off`;
  const primaryStatus =
    status.timeStamp !== null
      ? status.isActive
        ? 'Active'
        : `${dayjs(status.timeStamp).format(
            'DD MMM, YYYY' /*'DD MMM, YYYY, hh:mm a'*/,
          )}`
      : 'Off';
  return {
    active,
    scheduled,
    inactive,
    style,
    primaryStatus,
    secondaryStatus,
    flow,
  };
};

const JobSchedules = ({
  jobId,
  flow,
  status,
  setExpand,
  setLoading,
  isSchedule,
}: {
  jobId: string;
  flow: Flow;
  status: Status;
  setExpand: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isSchedule: boolean;
}) => {
  const [start, setStart] = useState(status[flow].timeStamp ? false : true);
  const timeStamp = status[flow].timeStamp
    ? dayjs(status[flow].timeStamp).format(`YYYY-MM-DDTHH:mm`)
    : dayjs(new Date()).format(`YYYY-MM-DDTHH:mm`);
  const [date, setDate] = useState(timeStamp.split('T')[0]);
  // const [time, setTime] = useState(timeStamp);
  const disabled = !(date /*&& time*/);
  const { handleJobUpdate } = useJobs();
  const handleJobStatusUpdate = async () => {
    setLoading(true);
    await handleJobUpdate(jobId, {
      active_status: {
        ...status,
        [flow]: {
          isActive: start,
          timeStamp: start
            ? new Date().toISOString()
            : disabled
            ? null
            : new Date(date).toISOString(),
          // : new Date(
          //     `${date.split('T')[0]}T${time.split('T')[1]}`,
          //   ).toISOString(),
        },
      },
    });
    setLoading(false);
    setExpand(false);
  };
  return (
    <JobStatusSelectBlock
      onClickStart={{
        onClick: () => setStart(true),
        style: { cursor: 'pointer' },
      }}
      isStartActive={start}
      onClickSchedule={{
        onClick: () => setStart(false),
        style: { cursor: 'pointer' },
      }}
      isScheduleActive={!start}
      slotBody={
        <JobScheduleBody
          isStart={start}
          date={date}
          setDate={setDate}
          flow={flow}
          // time={time}
          // setTime={setTime}
        />
      }
      slotButtons={
        <RecPrimaryBtn
          isDisabled={start ? false : disabled}
          buttonText={getButtonText(isSchedule, start)}
          onClickButton={{ onClick: async () => await handleJobStatusUpdate() }}
        />
      }
    />
  );
};

const getButtonText = (isSchedule: boolean, isStart: boolean) => {
  return isStart ? 'Start' : isSchedule ? 'Reschedule' : 'Schedule';
};

const JobStatusDescription = ({
  statusInfo,
  onClick,
}: {
  statusInfo: StatusInfo;
  onClick: () => void;
}) => {
  return (
    <Stack
      style={{
        color: statusInfo.scheduled ? '#337fbd' : 'grey',
        textDecoration: statusInfo.scheduled ? 'underline' : 'none',
        cursor: statusInfo.scheduled ? 'pointer' : 'default',
      }}
      onClick={() => {
        if (statusInfo.scheduled) onClick();
      }}
    >
      {statusInfo.scheduled
        ? 'Change Schedule'
        : statusInfo.active
        ? statusInfo.flow === 'sourcing'
          ? 'Candidates can submit their applications now. Turn off the toggle to stop receiving submissions.'
          : 'Candidates can take their interviews now. Turn off the toggle to stop conducting interviews.'
        : `Turn on the toggle to start ${statusInfo.flow}.`}
    </Stack>
  );
};

const JobScheduleBody = ({
  isStart,
  flow,
  date,
  setDate, // time,
} // setTime,
: {
  isStart: boolean;
  flow: Flow;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  // time: string;
  // setTime: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <Collapse in={isStart}>
        <Stack style={{ color: 'grey' }}>
          {`Proceeding will allow candidates to ${
            flow === 'sourcing' ? 'apply' : 'take interviews'
          }
          for this job role`}
        </Stack>
      </Collapse>
      <Collapse in={!isStart}>
        <Stack gap={2}>
          <Stack style={{ color: 'grey' }}>
            {` Pick date and time and aglint will start ${flow} automatically on
            that time`}
          </Stack>
          <SpecializedDatePicker
            value={dayjs(date).isValid() ? dayjs(date) : null}
            label='Scheduled date'
            onChange={(e) => {
              setDate(e ? e.format('YYYY-MM-DD') : null);
            }}
          />
          {/* <SpecializedTimePicker
            label={'Scheduled time'}
            value={dayjs(time).isValid() ? dayjs(time) : null}
            onChange={(e) => {
              setTime(
                e
                  ? `2000-01-01T${e.format('YYYY-MM-DDTHH:mm').split('T')[1]}`
                  : null,
              );
            }}
          /> */}
        </Stack>
      </Collapse>
    </>
  );
};

export default JobApplicationStatus;
