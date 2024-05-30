import { supabaseAdmin, supabaseWrap } from '../../supabase/supabaseAdmin';

export interface EmailTemplateFields {
  body: string;
  subject: string;
}

export interface DbFetchedTypes {
  body: string;
  default: boolean;
  subject: string;
  fromName: string;
}
const fetchTemplate = async (
  recruiter_id: string,
  mail_type: string,
  fields: any,
) => {
  const [templates] = supabaseWrap(
    await supabaseAdmin
      .from('company_email_template')
      .select()
      .eq('recruiter_id', recruiter_id)
      .eq('type', mail_type),
  );
  let data = null;
  data = fillEmail(fields, templates);

  return data;
};

export default fetchTemplate;

export const fillEmail = <T extends EmailTempPath>(
  dynamic_fields: EmailDynamicParams<T>,
  email_template: EmailTemplateFields,
): EmailTemplateFields => {
  let updated_template = null;
  if (email_template) {
    updated_template = { ...email_template };
  }
  for (const key of Object.keys(dynamic_fields)) {
    updated_template.subject = updated_template.subject.replaceAll(
      key,
      dynamic_fields[String(key)],
    );
    // updated_template.fromName = updated_template.fromName.replaceAll(
    //   key,
    //   dynamic_fields[String(key)],
    // );
    updated_template.body = updated_template.body.replaceAll(
      key,
      dynamic_fields[String(key)],
    );
  }

  return updated_template;
};
export type EmailTempPath =
  | 'application_received'
  | 'cancel_interview_session'
  | 'candidate_availability_request'
  | 'candidate_cancel_request'
  | 'candidate_invite_confirmation'
  | 'candidate_reschedule_request'
  | 'confirmation_mail_to_organizer'
  | 'debrief_calendar_invite'
  | 'init_email_agent'
  | 'interview'
  | 'interview_resend'
  | 'phone_screening'
  | 'phone_screening_resend'
  | 'recruiter_rescheduling_email'
  | 'rejection'
  | 'request_candidate_slot';

export type EmailDynamicParams<T extends EmailTempPath> = {
  application_received: {
    '[companyName]': string;
    '[firstName]': string;
    '[jobTitle]': string;
    '[supportLink]': string;
  };
  cancel_interview_session: {
    '[companyName]': string;
    '[firstName]': string;
    '[sessionName]': string;
    '[jobTitle]': string;
  };
  candidate_availability_request: {
    '[companyName]': string;
    '[firstName]': string;
    '[scheduleName]': string;
  };
  candidate_cancel_request: {
    '[recruiterName]': string;
    '[firstName]': string;
    '[rescheduleReason]': string;
    '[additionalRescheduleNotes]': string;
  };

  candidate_invite_confirmation: {
    '[firstName]': string;
    '[viewDetailsLink]': string;
    '[companyName]': string;
    '[jobTitle]': string;
  };

  candidate_reschedule_request: {
    '[recruiterName]': string;
    '[firstName]': string;
    '[dateRange]': string;
    '[rescheduleReason]': string;
    '[additionalRescheduleNotes]': string;
  };
  confirmation_mail_to_organizer: {
    '[recruiterName]': string;
    '[candidateFirstName]': string;
    '[meetingLink]': string;
  };
  debrief_calendar_invite: {
    '[teamMemberName]': string;
    '[firstName]': string;
    '[jobTitle]': string;
    '[companyName]': string;
  };

  init_email_agent: {
    '[companyName]': string;
    '[candidateFirstName]': string;
    '[jobRole]': string;
    '[companyTimeZone]': string;
    '[startDate]': string;
    '[endDate]': string;
    '[selfScheduleLink]': string;
  };
  interview: {
    '[companyName]': string;
    '[firstName]': string;
    '[jobTitle]': string;
    '[interviewLink]': string;
    '[supportLink]': string;
  };
  interview_resend: {
    '[jobTitle]': string;
    '[companyName]': string;
    '[firstName]': string;
    '[interviewLink]': string;
    '[supportLink]': string;
  };

  phone_screening: {
    '[firstName]': string;
    '[jobTitle]': string;
    '[companyName]': string;
    '[phoneScreeningLink]': string;
  };
  phone_screening_resend: {
    '[firstName]': string;
    '[jobTitle]': string;
    '[companyName]': string;
    '[phoneScreeningLink]': string;
  };
  recruiter_rescheduling_email: {
    '[jobTitle]': string;
    '[firstName]': string;
    '[recruiterRescheduleReason]': string;
    '[scheduleName]': string;
    '[pickYourSlotLink]': string;
    '[companyName]': string;
  };
  rejection: {
    '[companyName]': string;
    '[firstName]': string;
    '[jobTitle]': string;
  };
  request_candidate_slot: {
    '[jobTitle]': string;
    '[firstName]': string;
    '[availabilityLink]': string;
    '[companyName]': string;
  };
}[T];

export interface EmailPayloads {
  application_received: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[firstName]': string;
      '[jobTitle]': string;
      '[supportLink]': string;
    };
  };
  cancel_interview_session: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[firstName]': string;
      '[sessionName]': string;
      '[jobTitle]': string;
    };
  };
  candidate_availability_request: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[firstName]': string;
      '[scheduleName]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  candidate_cancel_request: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[recruiterName]': string;
      '[firstName]': string;
      '[rescheduleReason]': string;
      '[additionalRescheduleNotes]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  candidate_invite_confirmation: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[firstName]': string;
      '[viewDetailsLink]': string;
      '[companyName]': string;
      '[jobTitle]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  candidate_reschedule_request: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[recruiterName]': string;
      '[firstName]': string;
      '[dateRange]': string;
      '[rescheduleReason]': string;
      '[additionalRescheduleNotes]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  confirmation_mail_to_organizer: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[recruiterName]': string;
      '[meetingLink]': string;
      '[candidateFirstName]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };

  debrief_calendar_invite: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[teamMemberName]': string;
      '[firstName]': string;
      '[jobTitle]': string;
      '[companyName]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };

  init_email_agent: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[candidateFirstName]': string;
      '[jobRole]': string;
      '[companyTimeZone]': string;
      '[startDate]': string;
      '[endDate]': string;
      '[selfScheduleLink]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  interview: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[firstName]': string;
      '[jobTitle]': string;
      '[interviewLink]': string;
      '[supportLink]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  interview_resend: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[jobTitle]': string;
      '[companyName]': string;
      '[firstName]': string;
      '[interviewLink]': string;
      '[supportLink]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };

  phone_screening: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[firstName]': string;
      '[jobTitle]': string;
      '[companyName]': string;
      '[phoneScreeningLink]': string;
    };
  };
  phone_screening_resend: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[firstName]': string;
      '[jobTitle]': string;
      '[companyName]': string;
      '[phoneScreeningLink]': string;
    };
  };
  recruiter_rescheduling_email: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[jobTitle]': string;
      '[firstName]': string;
      '[recruiterRescheduleReason]': string;
      '[scheduleName]': string;
      '[pickYourSlotLink]': string;
      '[companyName]': string;
      'meetingDetails': {
        dateTime: string;
        type: string;
        platform: string;
        duration: string;
        link: string;
      };
    };
  };
  rejection: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[companyName]': string;
      '[firstName]': string;
      '[jobTitle]': string;
    };
  };
  request_candidate_slot: {
    recipient_email: string;
    mail_type: string;
    recruiter_id: string;
    payload: {
      '[jobTitle]': string;
      '[firstName]': string;
      '[availabilityLink]': string;
      '[companyName]': string;
    };
  };
}
