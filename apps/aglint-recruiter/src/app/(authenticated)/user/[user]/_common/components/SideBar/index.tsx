import {
  Briefcase,
  Calendar,
  CalendarIcon,
  CheckCircle2,
  Coffee,
  MessageSquare,
  Projector,
  UserCircle,
} from 'lucide-react';

import { UIButton } from '@/components/Common/UIButton';

export const SideBar = ({
  scrollToSection,
  activeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  scrollToSection: (sectionKey: any) => void;
  activeSection: string;
}) => {
  return (
    <nav className='space-y-1'>
      <SideNavItem
        icon={UserCircle}
        label='Overview'
        active={activeSection === 'overview'}
        onClick={() => scrollToSection('overview')}
      />
      <SideNavItem
        icon={CheckCircle2}
        label='Qualifications'
        active={activeSection === 'qualifications'}
        onClick={() => scrollToSection('qualifications')}
      />

      <SideNavItem
        icon={CalendarIcon}
        label='Upcoming Interviews'
        active={activeSection === 'upcomingInterviews'}
        onClick={() => scrollToSection('upcomingInterviews')}
      />
      <SideNavItem
        icon={Briefcase}
        label='Recent Interviews'
        active={activeSection === 'recentInterviews'}
        onClick={() => scrollToSection('recentInterviews')}
      />
      <SideNavItem
        icon={MessageSquare}
        label='Interview Feedback'
        active={activeSection === 'interviewFeedback'}
        onClick={() => scrollToSection('interviewFeedback')}
      />
      <SideNavItem
        icon={Coffee}
        label='Schedule Availability'
        active={activeSection === 'scheduleAvailabilityRef'}
        onClick={() => scrollToSection('scheduleAvailabilityRef')}
      />
      <SideNavItem
        icon={Projector}
        label='Meeting Overview'
        active={activeSection === 'meetingOverview'}
        onClick={() => scrollToSection('meetingOverview')}
      />
      <SideNavItem
        icon={Calendar}
        label='Calendar'
        active={activeSection === 'calendar'}
        onClick={() => scrollToSection('calendar')}
      />
    </nav>
  );
};

const SideNavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <UIButton
    variant={active ? 'secondary' : 'ghost'}
    className='w-full justify-start'
    onClick={onClick}
  >
    <Icon className='mr-2 h-5 w-5' />
    {label}
  </UIButton>
);
