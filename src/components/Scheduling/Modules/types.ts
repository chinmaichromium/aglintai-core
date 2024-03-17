import { ScoreJson } from '@/src/context/JobApplicationsContext/types';
import {
  CandidateType,
  InterviewMeetingTypeDb,
  InterviewModuleRelationType,
  InterviewModuleType,
  InterviewScheduleTypeDB,
  JobApplcationDB,
  RecruiterUserType,
} from '@/src/types/data.types';
import { Database } from '@/src/types/schema';

import { SchedulingOptionType } from '../AllSchedules/SchedulingApplication/store';



export type SchedulingSlice = {
  isCreateDialogOpen: boolean;
  isDeleteMemberDialogOpen: boolean;
  isDeleteModuleDialogOpen: boolean;
  isPauseDialogOpen: boolean;
  isAddMemberDialogOpen: boolean;
  isResumeDialogOpen: boolean;
  isModuleSettingsDialogOpen: boolean;
  isProgressDialaogOpen: boolean;
  selectedUsers: RecruiterUserType[];
  selUser: InterviewModuleRelationType | null;
  pause_json: PauseJson | null;
  searchText: string;
  trainingStatus: StatusTraining;
};


export type ModuleType = Omit<InterviewModuleType, 'settings'> & {
  relations: InterviewModuleRelationType[];
  settings: {
    require_training: boolean;
    noShadow: number;
    noReverseShadow: number;
    reqruire_approval: boolean;
    approve_users: string[];
  };
};

export type PauseJson = {
  start_date: string;
  end_date: string;
  isManual: boolean;
};

export interface TimeSlotsData {
  activeDuration: number;
  availabletimeSlots: number[];
}

export type StatusTraining = Database['public']['Enums']['status_training'];

export type ScheduleType = {
  applications: JobApplcationDB & {
    score_json: ScoreJson;
  };
  file: {
    id: string;
    created_at: string;
    file_url: string;
    candidate_id: string;
    resume_json: JSON;
    type: string;
  };
  candidates: CandidateType;
  schedule: InterviewScheduleTypeDB & {
    confirmed_option: SchedulingOptionType[0] | null;
  };
  job: {
    id: string;
    created_at: string;
    job_title: string;
    description: string;
    parameter_weights: {
      education: number;
      experience: number;
      skills: number;
    };
    recruiter_id: string;
    jd_json: JSON;
    location: string;
  };
};
export type ModuleDashboard = {
  interview_modules: InterviewModuleType;
  users: MemberType[];
  upcoming_meeting_count: number;
  completed_meeting_count: number;
};

export type MemberType = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
  position: string;
};

export type TransformSchedule = ScheduleType & {
  interview_meeting: InterviewMeetingTypeDb & {
    meeting_json: {
      hangoutLink: string;
    };
  };
  users: {
    id: string;
    created_at: string;
    interviewer_id: string;
    interviewer_type: Database['public']['Enums']['interviewer_type'];
    first_name: string;
    last_name: string;
    email: string;
    profile_image: string;
  }[];
};
