import * as React from 'react';
import { Session } from '../components/template/Sessions';
import { companyLogoDummy } from '../utils/assets/common';
import { ButtonSolid } from '../components/template/Button';
import { EmailContainer } from '../components/template/Container';
import {
  scheduleTypeIcon,
  sessionTypeIcon,
} from '../utils/email/common/functions';
import type { ReactTempPayload } from '../types/app.types';

type EmailType = ReactTempPayload<'confInterview_email_organizer'>;

export const dummy: EmailType = {
  emailBody:
    '<p>Dear {{ recruiterFirstName }},</p><p></p><p>Please find the details for the interview below:</p><p>Candidate name: {{ candidateFirstName }}<br></p><p>Thank you</p><p>Aglint Team</p><p></p><p></p>',
  companyLogo: companyLogoDummy,
  meetingDetails: {
    date: 'Fri, May 12, 2024',
    time: '09:00 AM - 09:30 PM PST',
    sessionType: 'Personality and cultural fit',
    platform: 'Google meet',
    duration: '45 minutes',
    sessionTypeIcon: sessionTypeIcon('debrief'),
    meetingIcon: scheduleTypeIcon('google_meet'),
  },
  subject: '',
  candidateDetails: `${process.env.NEXT_PUBLIC_CLIENT_APP_URL}/scheduling/application/e8218fdc-524c-4f05-8786-23399370777b`,
};

// export get subject
export const getSubject = (companyName: any) => `${companyName}`;

export const ConfirmMailToOrganizer = ({
  emailBody = dummy.emailBody,
  meetingDetails = dummy.meetingDetails,
  companyLogo = dummy.companyLogo,
  candidateDetails = '',
}: EmailType) => {
  return (
    <EmailContainer companyLogo={companyLogo} emailBody={emailBody}>
      <Session meetingDetail={meetingDetails} />
      <ButtonSolid buttonText="Candidate Details" href={candidateDetails} />
    </EmailContainer>
  );
};

export default ConfirmMailToOrganizer;
