import { Popover, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { AgentPopoverBlock } from '@/devlink3/AgentPopoverBlock';
import { ScheduleTypeButton } from '@/devlink3/ScheduleTypeButton';

import ScheduleIndividualCard from '../FullSchedule/ScheduleIndividual';
import {
  SchedulingApplication,
  setScheduleFlow,
  setSelectedSessionIds,
  setStepScheduling,
  useSchedulingApplicationStore,
} from '../store';

function RescheduleSlot() {
  const { initialSessions, selectedApplicationLog, selectedApplication } =
    useSchedulingApplicationStore((state) => ({
      initialSessions: state.initialSessions,
      selectedApplicationLog: state.selectedApplicationLog,
      selectedApplication: state.selectedApplication,
    }));

  const [selectedLocalSessionIds, setLocalselectedLocalSessionIds] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (selectedApplicationLog) {
      setLocalselectedLocalSessionIds(
        selectedApplicationLog.metadata.sessions.map((ses) => ses.id),
      );
    }
    return;
  }, [selectedApplicationLog]);

  let session_ids = [];
  let selectedSessions: SchedulingApplication['initialSessions'] = [];

  if (selectedApplicationLog) {
    session_ids = selectedApplicationLog?.metadata?.sessions?.map(
      (ses) => ses.id,
    );
    selectedSessions = initialSessions.filter((ses) =>
      session_ids?.includes(ses.id),
    );
  }

  const selectSession = ({
    session,
  }: {
    session: SchedulingApplication['initialSessions'][0];
  }) => {
    if (selectedLocalSessionIds.includes(session.id)) {
      setLocalselectedLocalSessionIds(
        selectedLocalSessionIds.filter((id) => id !== session.id),
      );
    } else {
      setLocalselectedLocalSessionIds([...selectedLocalSessionIds, session.id]);
    }
  };

  //popopver
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  //popopver

  return (
    <Stack position={'absolute'} width={'100%'} overflow={'hidden'}>
      <Stack
        position={'relative'}
        height={'calc(100vh - 60px)'}
        zIndex={10}
        width={'100%'}
      >
        <Stack
          spacing={2}
          p={2}
          height={'calc(100vh - 126px)'}
          width={'100%'}
          overflow={'scroll'}
        >
          {selectedSessions.map((ses) => {
            return (
              <ScheduleIndividualCard
                session={ses}
                key={ses.id}
                isCheckboxVisible={true}
                isThreeDotVisible={false}
                onClickCheckBox={selectSession}
                selectedSessionIds={selectedLocalSessionIds}
                isOnclickCard={false}
              />
            );
          })}
        </Stack>
        <Stack spacing={2} direction={'row'} justifyContent={'flex-end'} p={2}>
          <ScheduleTypeButton
            isSelfScheduleIcon={true}
            isAgentIcon={false}
            isDebriefIcon={false}
            isRequestAvailabilityIcon={false}
            onClickButton={{
              onClick: () => {
                setSelectedSessionIds(selectedLocalSessionIds);
                setScheduleFlow('self_scheduling');
                setStepScheduling('pick_date');
              },
            }}
            textButton={'Send Self Scheduling Link'}
          />
          <>
            <ScheduleTypeButton
              isSelfScheduleIcon={false}
              isAgentIcon={true}
              isDebriefIcon={false}
              isRequestAvailabilityIcon={false}
              onClickButton={{
                onClick: handleClick,
              }}
              textButton={'Schedule Via Agent'}
            />
          </>

          <Popover
            id='popover-agent'
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{ vertical: -6, horizontal: 0 }}
            slotProps={{
              paper: {
                style: {
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px 0px rgba(4, 68, 77, 0.15)',
                },
              },
            }}
            onClose={handleClose}
          >
            <AgentPopoverBlock
              isMailAgent={Boolean(selectedApplication.candidates.email)}
              isPhoneAgent={Boolean(selectedApplication.candidates.phone)}
              onClickMailAgent={{
                onClick: (e) => {
                  e.stopPropagation();
                  handleClose();
                  setSelectedSessionIds(selectedLocalSessionIds);
                  setScheduleFlow('email_agent');
                  setStepScheduling('pick_date');
                },
              }}
              onClickPhoneAgent={{
                onClick: (e) => {
                  e.stopPropagation();
                  handleClose();
                  setSelectedSessionIds(selectedLocalSessionIds);
                  setScheduleFlow('phone_agent');
                  setStepScheduling('pick_date');
                },
              }}
            />
          </Popover>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RescheduleSlot;
