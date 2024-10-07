import { getBreakLabel } from '@aglint/shared-utils';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@components/ui/alert-dialog';
import { Coffee } from 'lucide-react';

import { SessionIcon } from '@/common/ScheduleProgressPillComp';
import IconScheduleType from '@/components/Common/Icons/IconScheduleType';
import { getScheduleType } from '@/utils/scheduling/colors_and_enums';

import { useInviteMeta } from '../hooks/useInviteMeta';
import { setDetailPopup, useCandidateInviteStore } from '../store';
import { type ScheduleCardProps } from '../types/types';
import { getDurationText } from '../utils/utils';
import { CandidateScheduleCard } from './ui/CandidateScheduleCard';
import { SessionInfo } from './ui/SessionInfo';

export const DetailsPopup = () => {
  const { detailPopup } = useCandidateInviteStore();
  const {
    data: { meetings },
  } = useInviteMeta();

  const duration = meetings.reduce((acc, curr) => {
    acc += curr.interview_session.session_duration;
    return acc;
  }, 0);

  // const schedule_name = '';

  return (
    <AlertDialog
      open={detailPopup}
      onOpenChange={(open) => setDetailPopup(open)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Schedule Details</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <CandidateScheduleCard
            isSelected={false}
            slotButton={null}
            textDuration={getDurationText(duration)}
            slotSessionInfo={<Sessions sessions={meetings} showBreak={true} />}
            isTitle={false}
          />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type SessionsProps = Pick<ScheduleCardProps['round'], 'sessions'> & {
  showBreak: boolean;
};

const Sessions = (props: SessionsProps) => {
  const sessions = props.sessions.reduce((acc, curr) => {
    acc.push(
      <>
        <SessionCard
          key={curr.interview_session.id + curr.interview_session.id}
          session={curr}
        />
      </>,
    );
    if (curr.interview_session.break_duration !== 0 && props.showBreak)
      acc.push(
        <BreakCard break_duration={curr.interview_session.break_duration} />,
      );
    return acc;
  }, [] as React.JSX.Element[]);
  return <>{sessions}</>;
};

type SessionCardProps = {
  session: SessionsProps['sessions'][number];
};

const SessionCard = ({ session: { interview_session } }: SessionCardProps) => {
  const duration = getBreakLabel(interview_session.session_duration);
  const scheduleType = getScheduleType(interview_session.schedule_type);
  return (
    <SessionInfo
      textSessionName={interview_session.name}
      textSessionDuration={duration}
      textMeetingType={scheduleType}
      slotMeetingTypeIcon={
        <IconScheduleType size={16} type={interview_session.schedule_type} />
      }
      slotInterviewtypeIcon={
        <SessionIcon session_type={interview_session.session_type} />
      }
      iconName={
        interview_session.schedule_type === 'google_meet' ||
        interview_session.schedule_type === 'zoom'
          ? 'videocam'
          : interview_session.schedule_type === 'phone_call'
            ? 'call'
            : 'person'
      }
    />
  );
};

const BreakCard = ({ break_duration }: { break_duration: number }) => {
  const duration = getBreakLabel(break_duration);
  return (
    <SessionInfo
      textSessionName={'Break'}
      textSessionDuration={duration}
      textMeetingType={''}
      slotMeetingTypeIcon={<></>}
      slotInterviewtypeIcon={
        <Coffee size={16} className='text-muted-foreground' />
      }
      iconName={null}
    />
  );
};