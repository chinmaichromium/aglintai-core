import { type DatabaseTable } from '@aglint/shared-types';

import type ROUTES from '@/utils/routing/routes';

export type Path<T extends keyof typeof ROUTES> = keyof Pick<typeof ROUTES, T>;

export type LinkProps =
  | {
      module: 'Aglint AI';
      path: Path<'/requests'>;
    }
  | {
      module: 'Agent';
      path: Path<'/agent'>;
    }
  | {
      module: 'Jobs';
      path: Path<'/jobs'>;
    }
  | {
      module: 'Interviews';
      path: Path<'/scheduling'>;
    }
  | {
      module: 'Sourcing Hub';
      path: Path<'/candidates/history'>;
    }
  | {
      module: 'Phone Screening';
      path: Path<'/screening'>;
    }
  | {
      module: 'Assessment';
      path: Path<'/assessment-new'>;
    }
  | {
      module: 'Integrations';
      path: Path<'/integrations'>;
    }
  | {
      module: 'Workflows';
      path: Path<'/workflows'>;
    }
  | {
      module: 'Company Settings';
      path: Path<'/company'>;
    }
  | {
      module: 'Support';
      path: Path<'/support'>;
    }
  | {
      module: 'Tasks';
      path: Path<'/tasks'>;
    }
  | {
      module: 'Interview Pools';
      path: Path<'/interview-pool'>;
    }
  | {
      module: 'Candidates';
      path: Path<'/scheduling/application'>;
    }
  | {
      module: 'Interviewers';
      path: Path<'/scheduling/interviewer'>;
    }
  | {
      module: 'Requests';
      path: Path<'/requests'>;
    };

export type SubTabs = {
  name: string;
  icon: string;
  url: string;
  tab: string;
  permission: DatabaseTable['permissions']['name'];
};
