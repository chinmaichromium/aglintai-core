import { onInsertCandidateRequestAvailability } from './trigger-funcs/onInsertCandidateRequestAvailability';
import { onInsertInterviewFilterJson } from './trigger-funcs/onInsertInterviewFilterJson';
import { onUpdateCandidateRequestAvailability } from './trigger-funcs/onUpdateCandidateRequestAvailability';
import { onUpdateInterviewFilterJson } from './trigger-funcs/onUpdateInterviewFilterJson';
import { onUpdateMeetingInterview } from './trigger-funcs/onUpdateMeetingInterview';
import { onUpdateRequest } from './trigger-funcs/onUpdateRequest';

type DBEvents = 'UPDATE' | 'INSERT' | 'DELETE';
export const db_event_triggers: Record<`${DBEvents}_${string}`, any> = {
  UPDATE_interview_meeting: onUpdateMeetingInterview,
  UPDATE_request: onUpdateRequest,
  INSERT_interview_filter_json: onInsertInterviewFilterJson,
  UPDATE_interview_filter_json: onUpdateInterviewFilterJson,
  INSERT_candidate_request_availability: onInsertCandidateRequestAvailability,
  UPDATE_candidate_request_availability: onUpdateCandidateRequestAvailability,
};
