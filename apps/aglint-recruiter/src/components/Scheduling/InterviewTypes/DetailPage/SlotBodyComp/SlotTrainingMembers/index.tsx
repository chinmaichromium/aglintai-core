import { EmptyGeneral } from '@devlink2/EmptyGeneral';
import { User } from 'lucide-react';

import { UIButton } from '@/components/Common/UIButton';
import { useProgressModuleUsers } from '../../../queries/hooks';
import {
  setIsAddMemberDialogOpen,
  setTrainingStatus,
  useModulesStore,
} from '../../../store';
import { type MemberType, type ModuleType } from '../../../types';
import MoveToQualifiedDialog from '../../MoveToQualified';
import IndividualCard from './IndividualCard';

export type ProgressUser = {
  user: MemberType;
  progress: ReturnType<typeof useProgressModuleUsers>['data'];
};

function SlotTrainingMembers({
  editModule,
  refetch,
}: {
  editModule: ModuleType;
  refetch: () => void;
}) {
  const allUsers = editModule.relations.filter(
    (user) => user.training_status === 'training',
  );

  const filtererdUsers = allUsers.filter((rel) => !rel.is_archived);

  const trainer_ids = filtererdUsers
    .filter((user) => user.training_status === 'training')
    .map((user) => {
      return user.id;
    });

  const { data: progress, refetch: refetchTrainingProgress } =
    useProgressModuleUsers({ trainer_ids });
  const selUser = useModulesStore((state) => state.selUser);

  return (
    <>
      {selUser?.user_id && <MoveToQualifiedDialog refetch={refetch} />}

      {filtererdUsers.length === 0 && (
        <EmptyGeneral
          textEmpt={'No interviewers added yet.'}
          slotButton={
            <UIButton
              variant='outline'
              leftIcon={<User />}
              onClick={() => {
                setIsAddMemberDialogOpen(true);
                setTrainingStatus('training');
              }}
            >
              Add Trainee
            </UIButton>
          }
        />
      )}
      {filtererdUsers.map((user) => {
        const progressDataUser = Array.isArray(progress)
          ? progress.filter(
              (prog) => prog.interview_module_relation.id === user.id,
            )
          : [];

        return (
          <IndividualCard
            key={user.id}
            editModule={editModule}
            progressDataUser={progressDataUser}
            user={user}
            refetchTrainingProgress={refetchTrainingProgress}
            refetch={refetch}
          />
        );
      })}
      {filtererdUsers.length !== 0 && (
        <div>
          <UIButton
            variant='outline'
            leftIcon={<User />}
            onClick={() => {
              setIsAddMemberDialogOpen(true);
              setTrainingStatus('training');
            }}
          >
            Add Trainee
          </UIButton>
        </div>
      )}
    </>
  );
}

export default SlotTrainingMembers;
