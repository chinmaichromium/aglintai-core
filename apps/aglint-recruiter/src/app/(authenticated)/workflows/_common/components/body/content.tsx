/* eslint-disable jsx-a11y/anchor-is-valid */
import OptimisticWrapper from '@components/loadingWapper';
import { UIBadge } from '@components/ui-badge';
import {
  Bell,
  Building,
  CalendarCheck,
  CalendarClock,
  CalendarX,
  CheckCircle,
  GraduationCap,
  type LucideIcon,
  Mail,
  Slack,
} from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

import { type Workflow } from '@/types/workflow.types';
import ROUTES from '@/utils/routing/routes';
import { capitalizeSentence } from '@/utils/text/textUtils';
import { type TAG_OPTIONS } from '@/workflows/constants';
import { useWorkflows, useWorkflowsFilters } from '@/workflows/hooks';
import { getTriggerOption } from '@/workflows/utils';

import { getFilteredWorkflows } from './filters';

const Content = memo(() => {
  const { workflows } = useWorkflows();
  return (
    <div className='flex flex-col'>
      <Cards data={workflows} />
    </div>
  );
});
Content.displayName = 'Content';

export default Content;

const Cards = (props: {
  data: ReturnType<typeof useWorkflows>['workflows'];
}) => {
  const filters = useWorkflowsFilters();
  const { workflowMutations: mutations } = useWorkflows();
  const cards = getFilteredWorkflows(filters, props.data as Workflow[]).map(
    ({ id, title, trigger, phase, jobs, tags }) => {
      const loading = !!mutations.find((mutationId) => mutationId === id);
      const jobCount = (jobs ?? []).length;
      return (
        <OptimisticWrapper key={id} loading={loading}>
          <Link
            href={ROUTES['/workflows/[workflow]']({ workflow: id! })}
            legacyBehavior
            passHref
          >
            <a className='block space-y-2 border-b border-border py-4 pl-4 hover:bg-muted hover:no-underline'>
              <div className='flex items-center justify-between'>
                {capitalizeSentence(title ?? '---')}
              </div>
              <div className='flex flex-row gap-2'>
                <WorkflowTags tags={tags} />
                <p className='text-sm text-muted-foreground'>
                  {getTriggerOption(trigger, phase)}
                </p>
                <p className='text-sm text-muted-foreground/40'>{`Used in ${jobCount} job${
                  jobCount === 1 ? '' : 's'
                }`}</p>
              </div>
            </a>
          </Link>
        </OptimisticWrapper>
      );
    },
  );

  return <>{cards}</>;
};

type CustomWorkflowTags = keyof typeof TAG_OPTIONS;

interface TagOption {
  name: string;
  icon: React.ElementType;
  variant:
    | 'default'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'destructive'
    | 'purple'
    | 'neutral';
}

const UPDATED_TAG_OPTIONS: Record<CustomWorkflowTags, TagOption> = {
  email: { name: 'Email', icon: Mail as LucideIcon, variant: 'info' },
  slack: { name: 'Slack', icon: Slack as LucideIcon, variant: 'info' },
  selfScheduleReminder: {
    name: 'Self Schedule Reminder',
    icon: Bell as LucideIcon,
    variant: 'warning',
  },
  interviewStart: {
    name: 'Interview Start',
    icon: CalendarClock as LucideIcon,
    variant: 'success',
  },
  sendAvailReqReminder: {
    name: 'Send Availability Request Reminder',
    icon: Bell as LucideIcon,
    variant: 'warning',
  },
  interviewerConfirmation: {
    name: 'Interviewer Confirmation',
    icon: CalendarCheck as LucideIcon,
    variant: 'success',
  },
  interviewEnd: {
    name: 'Interview End',
    icon: CalendarClock as LucideIcon,
    variant: 'success',
  },
  meetingDeclined: {
    name: 'Meeting Declined',
    icon: CalendarX as LucideIcon,
    variant: 'destructive',
  },
  meetingAccepted: {
    name: 'Meeting Accepted',
    icon: CheckCircle as LucideIcon,
    variant: 'success',
  },
  candidateBook: {
    name: 'Candidate Booked',
    icon: CalendarCheck as LucideIcon,
    variant: 'success',
  },
  onQualified: {
    name: 'On Qualified',
    icon: GraduationCap as LucideIcon,
    variant: 'success',
  },
  onTrainingComplete: {
    name: 'On Training Complete',
    icon: GraduationCap as LucideIcon,
    variant: 'success',
  },
  onReceivingAvailReq: {
    name: 'On Receiving Availability Request',
    icon: CalendarCheck as LucideIcon,
    variant: 'info',
  },
  onRequestSchedule: {
    name: 'On Request Schedule',
    icon: CalendarCheck as LucideIcon,
    variant: 'info',
  },
  onRequestCancel: {
    name: 'On Request Cancel',
    icon: CalendarX as LucideIcon,
    variant: 'destructive',
  },
  onRequestReschedule: {
    name: 'On Request Reschedule',
    icon: CalendarCheck as LucideIcon,
    variant: 'info',
  },
  onRequestInterviewerDecline: {
    name: 'On Request Interviewer Decline',
    icon: CalendarX as LucideIcon,
    variant: 'destructive',
  },
  company: {
    name: 'Company',
    icon: Building as LucideIcon,
    variant: 'info',
  },
};

export const WorkflowTags = ({ tags }: Pick<Workflow, 'tags'>) => {
  return (
    <div className='flex flex-row gap-2'>
      {(tags ?? []).map((tag) => {
        const option = UPDATED_TAG_OPTIONS[tag as CustomWorkflowTags];
        if (!option) return null; // Handle case where tag is not in UPDATED_TAG_OPTIONS
        return (
          <UIBadge
            key={tag}
            textBadge={option.name}
            size='sm'
            icon={option.icon as LucideIcon}
            variant={option.variant}
          />
        );
      })}
    </div>
  );
};
