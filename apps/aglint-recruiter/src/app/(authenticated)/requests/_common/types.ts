import { type DateRangePlansType } from '@aglint/shared-types';

import { type fetchSessionDetails } from '@/pages/api/scheduling/application/mailthankyou';
import type { RequestResponse } from '@/queries/requests/types';
import type { Request as RequestType } from '@/queries/requests/types';
import { type CandidatesSchedulingV2 } from '@/services/CandidateScheduleV2/CandidatesSchedulingV2';

export type barChartDataType = {
  name: string;
  count: number;
  color: string;
};
export type requestCardDataType = {
  title: string;
  count: number;
  iconName: string;
};
export type progressDataType = {
  completed_request: number;
  open_request: number;
  completed_percentage: number;
  all_request: number;
};

export interface RequestProps extends RequestType {
  isExpanded?: boolean;
  mode?: 'expanded' | 'compact' | 'column-view' | 'compact-list';
}
export type responseCreatedCompletedType = {
  value: {
    data: {
      date: string;
      created: number;
      completed: number;
      on_going: number;
    }[];
  };
};

export type SectionRequests = {
  // eslint-disable-next-line no-unused-vars
  [_id in keyof RequestResponse | 'standard_request']: number;
};

export type ApiInterviewSessionRequest = {
  request: {
    request_id: string;
  };
  response: {
    success: boolean;
    sessions: Awaited<ReturnType<typeof fetchSessionDetails>>;
  };
};

export type ApiResponseFindAvailability = {
  slots: DateRangePlansType[];
  availabilities: CandidatesSchedulingV2['calendar_events'];
};
