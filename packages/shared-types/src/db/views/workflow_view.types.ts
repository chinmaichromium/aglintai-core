import type { CustomActionType, DatabaseEnums } from '../..';
import type { CustomLocation } from '../common.types';
import type { Database } from '../schema.types';
import type { ViewType } from './index.types';

export type CustomWorkflowView = ViewType<
  'workflow_view',
  {
    jobs: (Pick<
      Database['public']['Views']['job_view']['Row'],
      'id' | 'job_title' | 'department' | 'status'
    > & { location?: CustomLocation })[];
    tags: CustomWorkflowTags[];
  }
>;

type CustomWorkflowTags =
  | Extract<CustomActionType, 'email' | 'slack'>
  | 'company'
  | DatabaseEnums['workflow_trigger'];
