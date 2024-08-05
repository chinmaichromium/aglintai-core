export type EventStatusType =
  | 'not_started'
  | 'in_progress'
  | 'failed'
  | 'completed';

export type EventNodeType =
  | 'FIND_CURR_AVAIL_SLOTS'
  | 'REQ_CAND_AVAIL_EMAIL_LINK'
  | 'CAND_AVAIL_REC'
  | 'FIND_SUITABLE_SLOTS'
  | 'SELF_SCHEDULE_LINK'
  | 'CAND_CONFIRM_SLOT'
  | 'REQ_AVAIL_FIRST_FOLLOWUP'
  | 'REQ_AVAIL_SECOND_FOLLOWUP'
  | 'CANCEL_AVAIL_REQ'
  | 'SELF_SCHEDULE_FIRST_FOLLOWUP'
  | 'SELF_SCHEDULE_SEC_FOLLOWUP'
  | 'SELF_SCHEDULE_CANCEL';
