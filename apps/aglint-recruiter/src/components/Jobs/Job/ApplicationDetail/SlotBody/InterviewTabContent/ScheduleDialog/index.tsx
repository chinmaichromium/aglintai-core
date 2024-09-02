import { type DatabaseTable } from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import { Dialog, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { DcPopup } from '@/devlink/DcPopup';
import { GlobalIcon } from '@/devlink/GlobalIcon';
import { GlobalBannerShort } from '@/devlink2/GlobalBannerShort';
import { ScheduleInterviewPop } from '@/devlink2/ScheduleInterviewPop';
import IconSessionType from '@/src/components/Common/Icons/IconSessionType';
import { DateIcon } from '@/src/components/CompanyDetailComp/SettingsSchedule/Components/DateSelector';
import MemberList from '@/src/components/Requests/ViewRequestDetails/Components/MemberList';
import { useApplication } from '@/src/context/ApplicationContext';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useAllMembers } from '@/src/queries/members';
import dayjs from '@/src/utils/dayjs';

import {
  setIsScheduleOpen,
  setSelectedSessionIds,
  useApplicationDetailStore,
} from '../../../store';
import { type Interviewer } from '../StageSessions/EditDrawer/types';

function DialogSchedule() {
  const { isScheduleOpen, selectedSessionIds } = useApplicationDetailStore();
  const router = useRouter();
  const selectedStageId = router.query.stage as string;
  const { recruiterUser } = useAuthDetails();

  const [selectedInterviewer, setSelectedInterviewer] = React.useState('');
  const [note, setNote] = useState('');
  const [requestType, setRequestType] =
    React.useState<DatabaseTable['request']['priority']>('standard');
  const [dateRange, setDateRange] = React.useState({
    start: dayjs().toISOString(),
    end: dayjs().add(7, 'day').toISOString(),
  });
  const [isSaving, setIsSaving] = React.useState(false);

  const { members } = useAllMembers();

  const {
    meta,
    interview,
    handleCreateRequest,
    requests,
    job_id,
    application_id,
  } = useApplication();

  const candidate = meta.data;
  const selectedStage = interview.data.find(
    (stage) => stage.interview_plan.id === selectedStageId,
  );
  const requestSessionIds = requests.data
    .filter(
      (request) =>
        request.type === 'schedule_request' &&
        (request.status === 'to_do' || request.status === 'in_progress'),
    )
    .flatMap((request) => request.request_relation)
    .flatMap((relation) => relation.session_id);

  const sessions = interview.data
    .flatMap((stage) => stage.sessions)
    .filter((session) =>
      selectedSessionIds.includes(session.interview_session.id),
    );

  const sessionHasRequest = sessions.filter((session) =>
    requestSessionIds.includes(session.interview_session.id),
  );

  let optionsInterviewers: Interviewer[] = members?.map((member) => {
    return {
      name: getFullName(member.first_name, member.last_name),
      value: member.user_id,
      start_icon_url: member.profile_image,
    };
  });

  useEffect(() => {
    if (optionsInterviewers?.length > 0) {
      setSelectedInterviewer(String(optionsInterviewers[0].value));
    }
  }, [optionsInterviewers?.length]);

  const onClickSubmit = async () => {
    setIsSaving(true);
    await handleCreateRequest({
      sel_user_id: selectedInterviewer,
      assigned_user_id: recruiterUser.user_id,
      requestType,
      dateRange,
      selectedSessionIds,
      sessionNames: sessions.map((session) => session.interview_session.name),
      note,
    });

    setIsSaving(false);
    setSelectedSessionIds([]);
    setIsScheduleOpen(false);
  };

  const onClose = () => {
    if (isSaving) return;
    setIsScheduleOpen(false);
  };

  return (
    <Dialog
      open={isScheduleOpen}
      onClose={() => {
        onClose();
      }}
    >
      <DcPopup
        popupName={'Schedule Interviews'}
        onClickClosePopup={{
          onClick: () => {
            onClose();
          },
        }}
        slotBody={
          <>
            {sessionHasRequest.length > 0 && (
              <GlobalBannerShort
                color={'warning'}
                slotButtons={
                  <>
                    <ButtonSoft
                      size={1}
                      textButton='View Request'
                      onClickButton={{
                        onClick: () => {
                          router.push({
                            query: { tab: 'requests' },
                            pathname: `/jobs/${job_id}/application/${application_id}`,
                          });
                          onClose();
                        },
                      }}
                    />
                  </>
                }
                textTitle={`${sessionHasRequest
                  .map((session) => session.interview_session.name)
                  .join(', ')} already has a schedule request.`}
                textDescription={`Please wait for the request to be accepted or rejected before creating a new request.`}
              />
            )}

            <ScheduleInterviewPop
              textName={candidate.name}
              slotStagePill={
                <>
                  {sessions.map((session) => {
                    return (
                      <ButtonSoft
                        key={session.interview_session.id}
                        size={2}
                        textButton={session.interview_session.name}
                        color={'neutral'}
                        isLeftIcon={true}
                        slotIcon={
                          <IconSessionType
                            type={session.interview_session.session_type}
                          />
                        }
                      />
                    );
                  })}
                </>
              }
              slotNotes={
                <TextField
                  value={note || ''}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  placeholder='Add note'
                  multiline // Enables textarea behavior
                  minRows={2} // Minimum number of rows
                  maxRows={4} // Maximum number of rows
                  variant='outlined' // Uses the outlined variant
                  fullWidth // Takes full width of the container
                />
              }
              slotAssignedInput={
                <>
                  <MemberList
                    onChange={(user_id) => {
                      setSelectedInterviewer(user_id);
                    }}
                    selectedMemberId={selectedInterviewer}
                    members={members}
                    width='430px'
                  />
                </>
              }
              slotRequestOption={
                <RequestOption
                  requestType={requestType}
                  setRequestType={setRequestType}
                />
              }
              isRequestTypeVisible={true}
              textSelectedSchedule={`Selected Schedules from stage ${selectedStage?.interview_plan.name} `}
              slotPickDateInput={
                <RangePicker
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                />
              }
            />
          </>
        }
        slotButtons={
          <>
            <ButtonSoft
              size={2}
              textButton='Cancel'
              color={'neutral'}
              onClickButton={{
                onClick: () => {
                  setIsScheduleOpen(false);
                },
              }}
            />
            <ButtonSolid
              size={2}
              isLoading={isSaving}
              textButton={'Proceed'}
              onClickButton={{
                onClick: async () => {
                  if (isSaving) return;
                  onClickSubmit();
                },
              }}
            />
          </>
        }
      />
    </Dialog>
  );
}

export default DialogSchedule;

export const RangePicker = ({
  dateRange,
  setDateRange,
}: {
  dateRange: { start: string; end: string };
  // eslint-disable-next-line no-unused-vars
  setDateRange: (x: { start: string; end: string }) => void;
}) => {
  return (
    <Stack spacing={2} direction={'row'} width={'100%'}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(dateRange.start)}
          onChange={(newValue) => {
            setDateRange({
              start: dayjs(newValue).toISOString(),
              end: dateRange.end,
            });
          }}
          minDate={dayjs()}
          slots={{
            openPickerIcon: DateIcon,
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(dateRange.end)}
          minDate={dayjs(dateRange.start)}
          maxDate={dayjs(dateRange.start).add(1, 'month')}
          onChange={(newValue) => {
            setDateRange({
              start: dateRange.start,
              end: dayjs(newValue).toISOString(),
            });
          }}
          slots={{
            openPickerIcon: DateIcon,
          }}
          slotProps={{
            textField: { fullWidth: true },
          }}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export const RequestOption = ({
  requestType,
  setRequestType,
}: {
  requestType: DatabaseTable['request']['priority'];
  setRequestType: React.Dispatch<
    React.SetStateAction<DatabaseTable['request']['priority']>
  >;
}) => {
  return (
    <Stack direction={'row'} width={'100%'} spacing={'var(--space-2)'}>
      <ButtonSoft
        size={2}
        textButton={'Urgent Request'}
        color={requestType === 'urgent' ? 'accent' : 'neutral'}
        isLeftIcon={true}
        slotIcon={<GlobalIcon iconName={'flag_2'} />}
        onClickButton={{
          onClick: () => {
            setRequestType('urgent');
          },
        }}
      />
      <ButtonSoft
        size={2}
        color={requestType === 'standard' ? 'accent' : 'neutral'}
        textButton={'Standard Request'}
        onClickButton={{
          onClick: () => {
            setRequestType('standard');
          },
        }}
      />
    </Stack>
  );
};
