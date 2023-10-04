import { Database } from './schema';

export type AddressType = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
};

export type SocialsType = {
  [key: string]: string;
};

export type RecruiterType = Omit<
  Database['public']['Tables']['recruiter']['Row'],
  'address' | 'socials'
> & { address: AddressType | null; socials: SocialsType | null };
export type JobTypeDB = Database['public']['Tables']['public_jobs']['Row'];

export type JobApplcationDB =
  Database['public']['Tables']['job_applications']['Row'];
export type RecruiterDB = Database['public']['Tables']['recruiter']['Row'];

export type JobType = Omit<JobTypeDB, 'active_status'> & {
  active_status: StatusJobs | null;
};

export type StatusJobs = {
  sourcing: {
    isActive: boolean;
    timeStamp: string;
  };
  interviewing: {
    isActive: boolean;
    timeStamp: string;
  };
  closed: {
    isActive: boolean;
    timeStamp: string;
  };
};

export type Support_ticketType =
  Database['public']['Tables']['support_ticket']['Row'];

export type Public_jobsType =
  Database['public']['Tables']['public_jobs']['Row'];

export type SupportGroupType =
  Database['public']['Tables']['support_groups']['Row'];
