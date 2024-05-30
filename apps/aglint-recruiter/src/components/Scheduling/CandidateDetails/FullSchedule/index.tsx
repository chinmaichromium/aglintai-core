import { Stack } from '@mui/material';

import { EditOptionModule } from '@/devlink3/EditOptionModule';
import { InterviewBreakCard } from '@/devlink3/InterviewBreakCard';
import { NewInterviewPlan } from '@/devlink3/NewInterviewPlan';
import { getBreakLabel } from '@/src/components/JobNewInterviewPlan/utils';
import toast from '@/src/utils/toast';

import CancelScheduleDialog from '../Common/CancelScheduleDialog';
import RescheduleDialog from '../Common/RescheduleDialog';
import SelfSchedulingDrawer from '../SelfSchedulingDrawer';
import {
  SchedulingApplication,
  setEditSession,
  setIsEditBreakOpen,
  setSelectedSessionIds,
  useSchedulingApplicationStore,
} from '../store';
import BreakDrawerEdit from './BreakDrawer';
import SideDrawerEdit from './EditDrawer';
import ScheduleIndividualCard from './ScheduleIndividual';

function FullSchedule({ refetch }: { refetch: () => void }) {
  const { initialSessions, selectedSessionIds } = useSchedulingApplicationStore(
    (state) => ({
      initialSessions: state.initialSessions,
      selectedSessionIds: state.selectedSessionIds,
      selectedApplication: state.selectedApplication,
    }),
  );

  const isDebrief = initialSessions
    .filter((ses) => selectedSessionIds.includes(ses.id))
    .some((ses) => ses.session_type === 'debrief');

  const isNormalSession = initialSessions
    .filter((ses) => selectedSessionIds.includes(ses.id))
    .some((ses) => ses.session_type !== 'debrief');

  const selectSession = ({
    session,
  }: {
    session: SchedulingApplication['initialSessions'][number];
  }) => {
    if (session?.users?.length > 0) {
      if (selectedSessionIds.includes(session.id)) {
        setSelectedSessionIds(
          selectedSessionIds.filter((id) => id !== session.id),
        );
      } else {
        setSelectedSessionIds([...selectedSessionIds, session.id]);
      }
    } else {
      toast.warning(
        'There are no available interviewers. Please add some before scheduling.',
      );
    }
  };

  return (
    <>
      <SideDrawerEdit />
      <BreakDrawerEdit />
      <CancelScheduleDialog refetch={refetch} />
      <RescheduleDialog refetch={refetch} />
      <SelfSchedulingDrawer refetch={refetch} />
      <NewInterviewPlan
        slotNewInterviewPlanCard={initialSessions?.map((session, ind) => {
          return (
            <Stack
              key={ind}
              style={{
                opacity:
                  isNormalSession && session.session_type === 'debrief'
                    ? 0.5
                    : isDebrief &&
                        (session.session_type !== 'debrief' ||
                          !selectedSessionIds.includes(session.id))
                      ? 0.5
                      : 1,
                pointerEvents:
                  isNormalSession && session.session_type === 'debrief'
                    ? 'none'
                    : isDebrief &&
                        (session.session_type !== 'debrief' ||
                          !selectedSessionIds.includes(session.id))
                      ? 'none'
                      : 'auto',
              }}
            >
              <Stack
                sx={{
                  cursor:
                    session.interview_meeting?.status === 'completed' ||
                    session.interview_meeting?.status === 'confirmed'
                      ? 'pointer'
                      : 'auto',
                }}
              >
                <ScheduleIndividualCard
                  session={session}
                  onClickCheckBox={selectSession}
                  selectedSessionIds={selectedSessionIds}
                />
              </Stack>
              {session.break_duration > 0 && (
                <Stack pt={'10px'}>
                  <InterviewBreakCard
                    textDuration={getBreakLabel(session.break_duration)}
                    isThreeDotVisible={true}
                    isEditDeleteVisible={false}
                    slotEditOptionModule={
                      <EditOptionModule
                        isResendInviteVisible={false}
                        isEditVisible={true}
                        isViewScheduleVisible={false}
                        isCancelScheduleVisible={false}
                        isRescheduleVisible={false}
                        onClickEdit={{
                          onClick: () => {
                            setEditSession(session);
                            setIsEditBreakOpen(true);
                          },
                        }}
                      />
                    }
                  />
                </Stack>
              )}
            </Stack>
          );
        })}
      />
    </>
  );
}

export default FullSchedule;
