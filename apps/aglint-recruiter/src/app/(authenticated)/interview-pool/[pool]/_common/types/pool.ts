import { type DB, type PauseJson } from '@aglint/shared-types';
import { type MemberTypeAutoComplete } from 'src/app/_common/components/MembersTextField';

import { type useModuleAndUsers } from '../hooks/useModuleAndUsers';
import { type fetchInterviewModules } from '../utils/utils';

export type SchedulingSlice = {
  isCreateDialogOpen: boolean;
  isSettingDialogOpen: boolean;
  isDeleteMemberDialogOpen: boolean;
  isDeleteModuleDialogOpen: boolean;
  isPauseDialogOpen: boolean;
  isAddMemberDialogOpen: boolean;
  isResumeDialogOpen: boolean;
  isModuleSettingsDialogOpen: boolean;
  isArchiveDialogOpen: boolean;
  isProgressDialaogOpen: boolean;
  selectedUsers: MemberTypeAutoComplete[];
  selUser: ReturnType<typeof useModuleAndUsers>['data']['relations'][0] | null;
  pause_json: PauseJson | null;
  trainingStatus: StatusTraining;
  isMovedToQualifiedDialogOpen: boolean;
  initalOpen: StatusTraining | null;
  localModule: ReturnType<typeof useModuleAndUsers>['data'];
};

export interface TimeSlotsData {
  activeDuration: number;
  availabletimeSlots: number[];
}

export type StatusTraining = DB['public']['Enums']['status_training'];

export type ModuleDashboard = Awaited<ReturnType<typeof fetchInterviewModules>>;