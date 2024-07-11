import * as React from 'react';
import type { EmailTemplateAPi } from '@aglint/shared-types';
import { Session } from '../components/template/Sessions';
import { companyLogoDummy } from '../utils/assets/common';
import { EmailContainer } from '../components/template/Container';

// export dummy
export const dummy: EmailTemplateAPi<'interviewStart_email_applicant'>['react_email_placeholders'] =
  {
    subject: '',
    emailBody: `<p>Dear {{ candidateName }},</p><p style="text-align: start">This is a friendly reminder of your upcoming interview for the {{ jobTitle }} position at {{ companyName }} scheduled for <strong>{{ date }} at {{ time }}</strong>.</p><p style="text-align: start">We look forward to a successful interview!</p><p style="text-align: start">Warm regards,</p><p style="text-align: start">The {{ companyName }} Team</p>`,
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

export const getSubject = (companyName: any) => `${companyName}`;

export const InterviewResentRemainder = ({
  emailBody = dummy.emailBody,
  companyLogo = dummy.companyLogo,
  meetingDetail = dummy.meetingDetail,
}: EmailTemplateAPi<'interviewStart_email_applicant'>['react_email_placeholders']) => {
  return (
    <EmailContainer companyLogo={companyLogo} emailBody={emailBody}>
      <Session meetingDetail={meetingDetail} />
    </EmailContainer>
  );
};
export default InterviewResentRemainder;
