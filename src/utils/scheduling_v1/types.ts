import { PauseJson } from '@/src/components/Scheduling/Modules/types';
import {
  InterviewerSessionRelation,
  InterviewModuleType,
  InterviewSession,
  RecruiterUserType,
} from '@/src/types/data.types';

export type SessionInterviewerType = Pick<
  RecruiterUserType,
  | 'first_name'
  | 'last_name'
  | 'email'
  | 'profile_image'
  | 'schedule_auth'
  | 'scheduling_settings'
  | 'user_id'
> &
  Pick<
    InterviewerSessionRelation,
    'training_type' | 'session_id' | 'interviewer_type'
  > & {
    pause_json: PauseJson;
  };

export type InterviewSessionApiType = {
  session_id: InterviewSession['id'];
  module_id: InterviewSession['module_id'];
  session_name: InterviewSession['name'];
  duration: InterviewSession['session_duration'];
  schedule_type: InterviewSession['schedule_type'];
  session_type: InterviewSession['session_type'];
  selectedIntervs: SessionInterviewerType[];
  shadowIntervs: SessionInterviewerType[];
  revShadowIntervs: SessionInterviewerType[];
  break_duration: InterviewSession['break_duration'];
  session_order: InterviewSession['session_order'];
  interviewer_cnt: InterviewSession['interviewer_cnt'];
  module_name: InterviewModuleType['name'];
};

export type PlanCombinationType = {
  plan_comb_id: string;
  sessions: SessionCombinationType[];
};

export type SessionCombinationType = InterviewSessionApiType & {
  start_time: string;
  end_time: string;
};

// planCombination reponse types

export type PlanCombinationRespType = {
  plan_comb_id: string;
  sessions: SessionCombinationRespType[];
};

export type SessionCombinationRespType = InterviewSessionApiRespType & {
  start_time: string;
  end_time: string;
};

export type SessionInterviewerApiRespType = Pick<
  RecruiterUserType,
  'first_name' | 'last_name' | 'email' | 'profile_image'
> &
  Pick<InterviewerSessionRelation, 'training_type' | 'interviewer_type'>;

export type InterviewSessionApiRespType = {
  session_id: InterviewSession['id'];
  session_name: InterviewSession['name'];
  duration: InterviewSession['session_duration'];
  schedule_type: InterviewSession['schedule_type'];
  session_type: InterviewSession['session_type'];
  selectedIntervs: SessionInterviewerApiRespType[];
  shadowIntervs: SessionInterviewerApiRespType[];
  revShadowIntervs: SessionInterviewerApiRespType[];
  break_duration: InterviewSession['break_duration'];
  session_order: InterviewSession['session_order'];
  interviewer_cnt: InterviewSession['interviewer_cnt'];
  module_name: InterviewModuleType['name'];
};
