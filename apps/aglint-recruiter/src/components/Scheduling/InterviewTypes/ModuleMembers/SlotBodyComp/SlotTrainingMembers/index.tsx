import { Stack } from '@mui/material';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSurface } from '@/devlink/ButtonSurface';
import { GlobalIcon } from '@/devlink/GlobalIcon';
import { EmptyGeneral } from '@/devlink2/EmptyGeneral';
import IconPlusFilter from '@/src/components/Scheduling/Schedules/Filters/FilterChip/IconPlusFilter';

import { useProgressModuleUsers } from '../../../queries/hooks';
import {
  setIsAddMemberDialogOpen,
  setTrainingStatus,
  useModulesStore,
} from '../../../store';
import { MemberType, ModuleType } from '../../../types';
import MoveToQualifiedDialog from '../../MoveToQualified';
import IndividualCard from '../IndividualCard';

export type ProgressUser = {
  user: MemberType;
  progress: ReturnType<typeof useProgressModuleUsers>['data'];
};

function SlotTrainingMembers({ editModule }: { editModule: ModuleType }) {
  const allUsers = editModule.relations.filter(
    (user) => user.training_status === 'training',
  );

  const trainer_ids = allUsers
    .filter((user) => user.training_status === 'training')
    .map((user) => {
      return user.id;
    });

  const { data: progress } = useProgressModuleUsers({ trainer_ids });
  const selUser = useModulesStore((state) => state.selUser);

  return (
    <>
      {selUser?.user_id && <MoveToQualifiedDialog editModule={editModule} />}

      {allUsers.length === 0 && (
        <EmptyGeneral
          textEmpt={'No members yet'}
          slotButton={
            <ButtonSurface
              size={1}
              isRightIcon={false}
              slotIcon={<IconPlusFilter />}
              textButton={'Add'}
              onClickButton={{
                onClick: () => {
                  setIsAddMemberDialogOpen(true);
                  setTrainingStatus('training');
                },
              }}
            />
          }
        />
      )}
      {allUsers.map((user) => {
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
          />
        );
      })}

      {allUsers.length !== 0 && (
        <Stack direction={'row'} pt={'var(--space-2)'}>
          <ButtonSoft
            size={2}
            isRightIcon={false}
            isLeftIcon={true}
            slotIcon={<GlobalIcon iconName='person_add' size={5} />}
            textButton={'Add Training Member'}
            onClickButton={{
              onClick: () => {
                setIsAddMemberDialogOpen(true);
                setTrainingStatus('training');
              },
            }}
          />
        </Stack>
      )}
    </>
  );
}

export default SlotTrainingMembers;
