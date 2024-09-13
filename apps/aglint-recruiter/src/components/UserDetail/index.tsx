import { getFullName } from '@aglint/shared-utils';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { capitalizeAll } from '@/utils/text/textUtils';

import Loader from '../Common/Loader';
import {
  BreadCrumb,
  Feedback,
  Header,
  KeyMatrics,
  Qualifications,
  RecentInterviews,
  SideBar,
  Top,
  UpcomingInterview,
} from './Components';
import { EditUserDialog } from './Dialogs/EditUser';
import { useInterviewer } from './hook';

export default function InterviewerDetailsPage() {
  //scrolling-------------------
  const [activeSection, setActiveSection] = useState('overview');
  const [isTopBarVisible, setIsTopBarVisible] = useState(false);
  const sectionRefs = {
    overview: useRef(null),
    qualifications: useRef(null),
    performance: useRef(null),
    availability: useRef(null),
    pendingActions: useRef(null),
    recentActivity: useRef(null),
    upcomingInterviews: useRef(null),
    recentInterviews: useRef(null),
    interviewFeedback: useRef(null),
  };
  const userCardRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const userCardBottom = userCardRef.current?.getBoundingClientRect().bottom;

    setIsTopBarVisible(userCardBottom && scrollPosition > userCardBottom);

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current && ref.current.getBoundingClientRect().top < 100) {
        setActiveSection(key);
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionKey) => {
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior: 'smooth' });
  };

  //-----------------------
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(router.query.edit_enable || false);

  const user_id = router.query.user_id as string;
  const { data: interviewerDetails, isLoading } = useInterviewer({ user_id });

  if (isLoading)
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <Loader />
      </div>
    );

  return (
    <div className='min-h-screen bg-gray-50'>
      <EditUserDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <Top interviewer={interviewer} isTopBarVisible={isTopBarVisible} />

      <div className='max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
        <div className='sticky top-8'>
          <BreadCrumb name={interviewerDetails?.first_name} />
          <Header
            avatar={interviewerDetails.avatar}
            setIsOpen={setIsOpen}
            name={getFullName(
              interviewerDetails.first_name,
              interviewerDetails.last_name,
            )}
            role={capitalizeAll(interviewerDetails.role)}
            department={interviewerDetails.department}
            location={interviewerDetails.location}
            timeZone={interviewerDetails.timeZone}
            email={interviewerDetails.email}
            phone={interviewerDetails.phone}
            userCardRef={userCardRef}
          />
        </div>

        <div className='flex gap-8'>
          <SideBar
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <main className='flex-1 space-y-6'>
            <section ref={sectionRefs.overview}>
              <KeyMatrics
                declineCount={interviewerDetails.meeting_count.cancelled}
                completedCount={interviewerDetails.meeting_count.completed}
                upcomingCount={interviewerDetails.meeting_count.upcoming}
                totalHour={interviewerDetails.meeting_count.completed_hour}
              />
            </section>

            <section ref={sectionRefs.qualifications}>
              <Qualifications
                interview_types={interviewerDetails.interview_type}
              />
            </section>

            <section ref={sectionRefs.upcomingInterviews}>
              <UpcomingInterview
                interviews={interviewerDetails.all_meetings.filter(
                  (meeting) => meeting.status === 'confirmed',
                )}
              />
            </section>

            <section ref={sectionRefs.recentInterviews}>
              <RecentInterviews
                interviews={interviewerDetails.all_meetings.filter(
                  (meeting) => meeting.status === 'completed',
                )}
              />
            </section>
            <section ref={sectionRefs.interviewFeedback}>
              <Feedback feedbacks={interviewerDetails.feedbacks} />
            </section>

            {/* 
            <section ref={sectionRefs.performance}>
              <Performance interviewer={interviewer} />
            </section> */}

            {/* <section ref={sectionRefs.availability}>
              <Availability interviewer={interviewer} />
            </section> */}

            {/* <section ref={sectionRefs.pendingActions}>
              <PendingActions interviewer={interviewer} />
            </section> */}

            {/* <section ref={sectionRefs.recentActivity}>
              <RecentActivity interviewer={interviewer} />
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
}
