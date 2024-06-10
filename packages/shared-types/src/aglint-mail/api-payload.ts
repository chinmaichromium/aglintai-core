import v from 'valibot';
import { DatabaseEnums } from '..';
import {
  agentEmailCandidateSchema,
  applicantRejectEmailApplicantSchema,
  applicationRecievedEmailApplicantSchema,
  confInterviewEmailOrganizerSchema,
  confirmInterviewEmailApplicantSchema,
  debriefEmailInterviewerSchema,
  interReschedReqEmailRecruiterSchema,
  interviewCancelReqEmailRecruiterSchema,
  interviewReminderEmailApplicantSchema,
  interviewReminderEmailInterviewerSchema,
  interviewRescheduleEmailApplicantSchema,
  interviewStartEmailApplicantSchema,
  interviewStartEmailInterviewersSchema,
  phoneScreenEmailCandidateSchema,
  phoneScreenRemindEmailApplicantSchema,
} from './api_schema';

type MeetingDetailCardType = {
  date: string;
  time: string;
  sessionType: string;
  platform: string;
  duration: string;
  sessionTypeIcon: string;
  meetingIcon: string;
};
type Payloads = {
  debrief_email_interviewer: {
    api_payload: v.InferInput<typeof debriefEmailInterviewerSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  applicationRecieved_email_applicant: {
    api_payload: v.InferInput<typeof applicationRecievedEmailApplicantSchema>;
    comp_email_placeholders: {
      '{{ candidateFirstName }}': string;
      '{{ jobTitle }}': string;
      '{{ companyName }}': string;
      '{{ supportLink }}': string;
    };
    react_email_placeholders: {
      subject: string;
      emailBody: string;
      companyLogo: string;
    };
  };
  interviewCancel_email_applicant: {
    api_payload: v.InferInput<typeof applicationRecievedEmailApplicantSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  agent_email_candidate: {
    api_payload: v.InferInput<typeof agentEmailCandidateSchema>;
    comp_email_placeholders: {
      '{{ candidateFirstName }}': string;
      '{{ companyName }}': string;
      '{{ jobRole }}': string;
      '{{ startDate }}': string;
      '{{ endDate }}': string;
      '{{ companyTimeZone }}': string;
      '{{ selfScheduleLink }}': string;
    };
    react_email_placeholders: {
      subject: string;
      emailBody: string;
      companyLogo: string;
    };
  };
  confInterview_email_organizer: {
    api_payload: v.InferInput<typeof confInterviewEmailOrganizerSchema>;
    comp_email_placeholders: {
      '{{ recruiterFirstName }}': string;
      '{{ candidateFirstName }}': string;
    };
    react_email_placeholders: {
      companyLogo: string;
      emailBody: string;
      subject: string;
      meetingDetails: MeetingDetailCardType;
      candidateDetails: string;
    };
  };
  confirmInterview_email_applicant: {
    api_payload: v.InferInput<typeof confirmInterviewEmailApplicantSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  applicantReject_email_applicant: {
    api_payload: v.InferInput<typeof applicantRejectEmailApplicantSchema>;
    comp_email_placeholders: {
      '{{ candidateFirstName }}': string;
      '{{ jobTitle }}': string;
      '{{ companyName }}': string;
    };
    react_email_placeholders: {
      subject: string;
      emailBody: string;
      companyLogo: string;
    };
  };
  phoneScreen_email_candidate: {
    api_payload: v.InferInput<typeof phoneScreenEmailCandidateSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  interviewReminder_email_applicant: {
    api_payload: v.InferInput<typeof interviewReminderEmailApplicantSchema>;
    comp_email_placeholders: {
      '{{ candidateName }}': string;
      '{{ jobTitle }}': string;
      '{{ recruiterName }}': string;
      '{{ companyName }}': string;
      '{{ sessionName }}': string;
      '{{ date }}': string;
      '{{ time }}': string;
    };
    react_email_placeholders: {
      subject: string;
      emailBody: string;
      companyLogo: string;
    };
  };
  interviewReminder_email_interviewer: {
    api_payload: v.InferInput<typeof interviewReminderEmailInterviewerSchema>;
    comp_email_placeholders: {
      '{{ candidateName }}': string;
      '{{ jobTitle }}': string;
      '{{ jobRecruiter }}': string;
      '{{ companyName }}': string;
      '{{ sessionName }}': string;
      '{{ date }}': string;
      '{{ time }}': string;
      '{{ interviewerFirstName }}': string;
    };
    react_email_placeholders: {
      subject: string;
      emailBody: string;
      companyLogo: string;
    };
  };
  phoneScreenRemind_email_applicant: {
    api_payload: v.InferInput<typeof phoneScreenRemindEmailApplicantSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  InterviewCancelReq_email_recruiter: {
    api_payload: v.InferInput<typeof interviewCancelReqEmailRecruiterSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  interReschedReq_email_recruiter: {
    api_payload: v.InferInput<typeof interReschedReqEmailRecruiterSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  interviewReschedule_email_applicant: {
    api_payload: v.InferInput<typeof interviewRescheduleEmailApplicantSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  interviewStart_email_applicant: {
    api_payload: v.InferInput<typeof interviewStartEmailApplicantSchema>;
    comp_email_placeholders: {
      '{{ candidateName }}': string;
      '{{ companyName }}': string;
      '{{ jobTitle }}': string;
      '{{ date }}': string;
      '{{ time }}': string;
      '{{ candidateLink }}': string;
    };
    react_email_placeholders: {
      emailBody: string;
      subject: string;
      companyLogo: string;
    };
  };
  interviewStart_email_interviewers: {
    api_payload: v.InferInput<typeof interviewStartEmailInterviewersSchema>;
    comp_email_placeholders: {
      '{{ companyName }}': string;
      '{{ candidateName }}': string;
      '{{ jobTitle }}': string;
      '{{ recruiterName }}': string;
    };
    react_email_placeholders: {
      emailBody: string;
      subject: string;
      companyLogo: string;
      candidateLink: string;
      meetingDetails: {
        date: string;
        time: string;
        sessionType: string;
        platform: string;
        duration: string;
        sessionTypeIcon: string;
        meetingIcon: string;
      }[];
    };
  };
};

export type EmailTemplateAPi<T extends DatabaseEnums['email_types']> =
  T extends keyof Payloads ? Payloads[T] : never;
