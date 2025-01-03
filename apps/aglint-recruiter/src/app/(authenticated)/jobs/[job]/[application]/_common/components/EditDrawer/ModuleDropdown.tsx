import { useInterviewPools } from 'src/app/_common/hooks/useInterviewPools';

import UISelectDropDown from '@/components/Common/UISelectDropDown';

import {
  setEditSession,
  setSelectedInterviewers,
  setTrainingInterviewers,
  setTrainingToggle,
  useEditSessionDrawerStore,
} from '../../stores/editSessionDrawer';

function ModuleDropdown() {
  const interviewModules = useInterviewPools();

  const { editSession } = useEditSessionDrawerStore((state) => ({
    editSession: state.editSession,
  }));

  const filterArchivedModules =
    interviewModules?.data?.filter(
      (module) =>
        editSession?.interview_session.module_id === module.id ||
        !module.is_archived,
    ) || [];
  return (
    <>
      <UISelectDropDown
        label='Interview Pool'
        fullWidth
        value={editSession?.interview_session.module_id ?? null!}
        menuOptions={filterArchivedModules.map((module) => ({
          value: module.id,
          name: module.name,
        }))}
        onValueChange={(value) => {
          setEditSession({
            interview_session: {
              ...editSession!.interview_session,
              module_id: value,
            },
          });
          setSelectedInterviewers([]);
          setTrainingInterviewers([]);
          setTrainingToggle(false);
        }}
      />
    </>
  );
}

export default ModuleDropdown;
