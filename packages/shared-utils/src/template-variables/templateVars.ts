import {
  additionalRescheduleNotes,
  availabilityReqLink,
  cancelReason,
  candidateProfileLink,
  candidateScheduleLink,
  candidates,
  company,
  date_range,
  dates,
  interviewFeedbackLink,
  interviewInstructionLink,
  interviewer,
  jobDetails,
  meetingDetailsLink,
  organizer,
  rescheduleReason,
  selfSchedulingLink,
  time,
} from './variables';

export const emailVariablePayloads = {
  debrief_email_interviewer: [...interviewer, ...candidates, ...jobDetails],
  applicationRecieved_email_applicant: [
    ...organizer,
    ...candidates,
    ...jobDetails,
  ],
  interviewCancel_email_applicant: [...organizer, ...candidates, ...jobDetails],
  agent_email_candidate: [
    ...organizer,
    ...candidates,
    ...jobDetails,
    date_range,
    selfSchedulingLink,
  ],
  confInterview_email_organizer: [...organizer, ...candidates, ...jobDetails],
  confirmInterview_email_applicant: [
    ...organizer,
    ...candidates,
    ...jobDetails,
  ],
  applicantReject_email_applicant: [...candidates, ...jobDetails, ...organizer],
  availabilityReqResend_email_candidate: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    availabilityReqLink,
  ],
  InterviewCancelReq_email_recruiter: [
    ...organizer,
    ...candidates,
    cancelReason,
    additionalRescheduleNotes,
    candidateScheduleLink,
    ...jobDetails,
  ],
  interReschedReq_email_recruiter: [
    ...organizer,
    ...candidates,
    rescheduleReason,
    additionalRescheduleNotes,
    candidateScheduleLink,
    ...jobDetails,
    ...dates,
  ],
  interviewReschedule_email_applicant: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    selfSchedulingLink,
  ],
  interviewStart_email_applicant: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    ...dates,
    time,
  ],
  interviewStart_email_interviewers: [
    ...jobDetails,
    ...candidates,
    ...interviewer,
    ...organizer,
    ...dates,
    time,
  ],
  sendSelfScheduleRequest_email_applicant: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    selfSchedulingLink,
  ],
  sendAvailReqReminder_email_applicant: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    availabilityReqLink,
  ],
  selfScheduleReminder_email_applicant: [
    ...candidates,
    ...jobDetails,
    ...organizer,
    selfSchedulingLink,
  ],
  sendAvailabilityRequest_email_applicant: [
    ...candidates,
    ...jobDetails,
    availabilityReqLink,

    ...organizer,
  ],
  rescheduleSelfSchedule_email_applicant: [
    ...candidates,
    ...jobDetails,
    selfSchedulingLink,
    ...organizer,
  ],
  interviewDetails_calender_interviewer: [
    ...candidates,
    ...jobDetails,
    ...interviewer,
    candidateProfileLink,
    interviewInstructionLink,
    interviewFeedbackLink,
    candidateScheduleLink,
    selfSchedulingLink,
    ...organizer,
  ],
  interviewStart_email_organizer: [...candidates, ...jobDetails, ...organizer],
  meetingAccepted_email_organizer: [
    ...candidates,
    ...interviewer,
    meetingDetailsLink,
    ...organizer,
    ...jobDetails,
  ],
  meetingDeclined_email_organizer: [
    ...candidates,
    ...interviewer,
    meetingDetailsLink,
    candidateScheduleLink,
    ...organizer,
    ...jobDetails,
  ],
};
