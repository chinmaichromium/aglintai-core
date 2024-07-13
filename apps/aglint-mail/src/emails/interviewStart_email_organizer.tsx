import * as React from 'react';
import type { EmailTemplateAPi } from '@aglint/shared-types';
import { Session } from '../components/template/Sessions';
import { companyLogoDummy } from '../utils/assets/common';
import { ButtonSolid } from '../components/template/Button';
import { EmailContainer } from '../components/template/Container';

// export dummy
export const dummy: EmailTemplateAPi<'interviewStart_email_organizer'>['react_email_placeholders'] =
  {
    emailBody: `<p>Dear <span class="temp-variable" data-type="temp-variable" data-id="organizerFirstName">{{organizerFirstName}}</span>,</p><p></p><p>This is a friendly reminder about the upcoming interview for the <span class="temp-variable" data-type="temp-variable" data-id="jobRole">{{jobRole}}</span> with <span class="temp-variable" data-type="temp-variable" data-id="candidateFirstName">{{candidateFirstName}}</span>.</p><p></p><p>Please ensure everything is set for a smooth interview process.</p><p>Please find the details of your interview below:</p><p></p><p>Best regards,</p><p>{{companyName}} Team </p>`,
    candidateLink: '',
    subject:
      '<p>Reminder: Upcoming Interview for <span class="temp-variable" data-type="temp-variable" data-id="jobRole">{{jobRole}}</span> with <span class="temp-variable" data-type="temp-variable" data-id="candidateFirstName">{{candidateFirstName}}</span> </p>',

    companyLogo: companyLogoDummy,
    meetingDetail: {
      date: 'Fri, May 12, 2024',
      time: '09:00 AM - 09:30 PM PST',
      sessionType: 'Personality and cultural fit',
      platform: 'Google meet',
      duration: '45 minutes',
      sessionTypeIcon:
        'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/email_template_assets/debrief.png',
      meetingIcon:
        'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/email_template_assets/google_meet.png',
    },
  };

// export get subject
export const getSubject = (companyName: any) => `${companyName}`;

export const interviewStartEmailOrganizer = ({
  emailBody = dummy.emailBody,
  meetingDetail = dummy.meetingDetail,
  candidateLink = '',
  companyLogo = dummy.companyLogo,
}: EmailTemplateAPi<'interviewStart_email_organizer'>['react_email_placeholders']) => {
  return (
    <EmailContainer companyLogo={companyLogo} emailBody={emailBody}>
      <Session meetingDetail={meetingDetail} />
      <ButtonSolid href={candidateLink} buttonText="Candidate details" />
    </EmailContainer>
  );
};

export default interviewStartEmailOrganizer;
