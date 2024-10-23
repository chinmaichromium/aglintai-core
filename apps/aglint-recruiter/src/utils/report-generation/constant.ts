export const report_gen_Params = {
  candidate_reschedule_request_percentage: 0.15,
  candidate_cancel_request_percentage: 0.2,
  interviewer_decline_request_percentage: 0.2,
} as const;

export const report_seed_candidate_tz = 'Asia/Kolkata';

export const seed_candidate_interview_cancel_reason: string[] = [
  'Conflicting Schedule',
  'Health Reasons',
  'Unexpected Emergency',
  'Job Offer Accepted',
  'Personal Emergency',
  'Other',
];

export const seed_candidate_interview_reschedule_reason: string[] = [
  'Request for a Different Time',
  'Request for a Different Date',
  'Additional Preparation Needed',
  'Change of Interview Mode',
];

export const seed_interivewer_decline_reason: string[] = [
  'Conflict with Another Meeting',
  'Unexpected Urgency',
  'Travel Delays or Issues',
  'Technical Difficulties',
];

export const getRandomNumInRange = (min: number, max: number) => {
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};