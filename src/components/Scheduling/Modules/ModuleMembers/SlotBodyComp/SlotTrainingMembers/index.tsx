import dayjs from 'dayjs';

import { EmptyGeneral } from '@/devlink2';
import { useSchedulingContext } from '@/src/context/SchedulingMain/SchedulingMainProvider';

import {
  useGetMeetingsByModuleId,
  useProgressModuleUsers,
} from '../../../queries/hooks';
import { getHours } from '../../../queries/utils';
import { useModulesStore } from '../../../store';
import { MemberType, ModuleType } from '../../../types';
import MoveToQualifiedDialog from '../../MoveToQualified';
import IndividualCard from '../IndividualCard';

export type ProgressUser = {
  user: MemberType;
  progress: ReturnType<typeof useProgressModuleUsers>['data'];
};

function SlotTrainingMembers({
  editModule,
  meetingData,
}: {
  editModule: ModuleType;
  meetingData: ReturnType<typeof useGetMeetingsByModuleId>['data'];
}) {
  const { members } = useSchedulingContext();

  const allUsers = editModule.relations;
  const currentDay = dayjs();

  const allTrainees = allUsers
    .filter((user) => user.training_status === 'training')
    .map((user) => {
      const userSettings = user?.recruiter_user?.scheduling_settings;

      let weekly = 0;
      let daily = 0;
      if (userSettings) {
        weekly =
          userSettings.interviewLoad.dailyLimit.type == 'Hours'
            ? getHours({ user, type: 'weekly', meetingData })
            : meetingData.filter(
                (meet) => meet?.interview_module_relation_id === user.id,
              ).length;
        daily =
          userSettings.interviewLoad.dailyLimit.type == 'Hours'
            ? getHours({ user, type: 'daily', meetingData })
            : meetingData.filter(
                (meet) =>
                  meet?.interview_module_relation_id === user.id &&
                  dayjs(meet?.interview_meeting?.end_time).isSame(
                    currentDay,
                    'day',
                  ),
              ).length;
      }
      return { ...user, weekly, daily };
    });

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

      {allTrainees.length === 0 && (
        <EmptyGeneral textEmpt={'No Members Added Yet'} />
      )}
      {allTrainees.map((user) => {
        const member = members.find(
          (member) => member.user_id === user.user_id,
        );

        if (!member) return null; //this line added temporarily becasue of data inconsistency

        const progressDataUser = progress.filter(
          (prog) => prog.interview_module_relation_id === user.id,
        );

        return (
          <IndividualCard
            key={user.id}
            editModule={editModule}
            member={member}
            progressDataUser={progressDataUser}
            user={user}
          />
        );
      })}
    </>
  );
}

export default SlotTrainingMembers;
