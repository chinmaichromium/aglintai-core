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
  interviewRescheduleEmailApplicantSchema,
  interviewStartEmailApplicantSchema,
  phoneScreenEmailCandidateSchema,
  phoneScreenRemindEmailApplicantSchema,
} from './api_schema';

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
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
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
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
    };
  };
  confInterview_email_organizer: {
    api_payload: v.InferInput<typeof confInterviewEmailOrganizerSchema>;
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
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
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
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
    comp_email_placeholders: {};
    react_email_placeholders: {
      subject: string;
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
      '[firstName]': string;
      '[jobTitle]': string;
      '[companyName]': string;
      '[supportLink]': string;
      '[interviewLink]': string;
    };
    react_email_placeholders: {
      emailBody: string;
      subject: string;
      companyLogo: string;
    };
  };
};

export type EmailTemplateAPi<T extends DatabaseEnums['email_types']> =
  T extends keyof Payloads ? Payloads[T] : never;
