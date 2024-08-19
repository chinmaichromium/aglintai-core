import { Collapse, Stack } from '@mui/material';

import { ButtonSolid } from '@/devlink/ButtonSolid';
import { ApplicantDetailStage } from '@/devlink2/ApplicantDetailStage';
import { StageWithSessions } from '@/src/queries/application';

import {
  setIsScheduleOpen,
  setSelectedSessionIds,
  setSelectedStageId,
  useApplicationDetailStore,
} from '../../../../store';
import SideDrawerEdit from '../EditDrawer';
import ScheduleIndividualCard from './ScheduleIndividual';

function StageIndividual({
  stage,
  index,
}: {
  stage: StageWithSessions[0];
  index: number;
}) {
  const { selectedStageId, selectedSessionIds } = useApplicationDetailStore(
    (state) => ({
      selectedStageId: state.selectedStageId,
      selectedSessionIds: state.selectedSessionIds,
    }),
  );

  const sessions = stage.sessions;
  const isStageSelected = selectedStageId === stage.interview_plan.id;
  const isCurrentSessionSelected = sessions.some((session) =>
    selectedSessionIds.includes(session.interview_session.id),
  );
  return (
    <>
      <SideDrawerEdit />
      <ApplicantDetailStage
        textName={`Stage ${index + 1} ${stage.interview_plan.name}`}
        textInterviewCount={`${sessions.length} interviews`}
        slotInterviewStageDetail={
          <Collapse in={isStageSelected}>
            <Stack spacing={'var(--space-2)'}>
              {sessions.map((session) => {
                return (
                  <ScheduleIndividualCard
                    session={session}
                    key={session.interview_session.id}
                  />
                );
              })}
            </Stack>
          </Collapse>
        }
        onClickDrop={{
          onClick: () => {
            setSelectedSessionIds([]);
            if (isStageSelected) {
              setSelectedStageId(null);
              return;
            } else {
              setSelectedStageId(stage.interview_plan.id);
            }
          },
        }}
        isCountVisible={!isCurrentSessionSelected}
        isScheduleButtonVisible={
          isStageSelected && selectedSessionIds.length > 0
        }
        slotScheduleButton={
          <ButtonSolid
            textButton={'Schedule'}
            size={2}
            onClickButton={{
              onClick: () => {
                setIsScheduleOpen(true);
              },
            }}
          />
        }
      />
    </>
  );
}

export default StageIndividual;
