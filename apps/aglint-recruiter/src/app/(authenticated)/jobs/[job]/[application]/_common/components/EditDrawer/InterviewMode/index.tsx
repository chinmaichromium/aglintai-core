import Typography from '@components/typography';
import { UIAlert } from '@components/ui-alert';
import MembersAutoComplete from 'src/app/_common/components/MembersTextField';
import { useInterviewPools } from 'src/app/_common/hooks/useInterviewPools';
import { InterviewMode } from 'src/app/(authenticated)/jobs/[job]/(job-edit)/interview-plan/_common/components/_common/InterviewMode';

import { UIButton } from '@/components/Common/UIButton';
import { UISwitch } from '@/components/Common/UISwitch';
import { useRouterPro } from '@/hooks/useRouterPro';
import ROUTES from '@/utils/routing/routes';

import {
  type EditSessionDrawer,
  setErrorValidation,
  setSelectedInterviewers,
  setTrainingInterviewers,
  setTrainingToggle,
  useEditSessionDrawerStore,
} from '../../../stores/editSessionDrawer';
import CountDropDown from './CountDropDown';
import SelectSessionType from './SelectSessionType';

function InterviewModeComp() {
  const router = useRouterPro();
  const {
    editSession,
    selectedInterviewers,
    trainingInterviewers,
    trainingToggle,
    errorValidation,
  } = useEditSessionDrawerStore((state) => ({
    editSession: state.editSession,
    selectedInterviewers: state.selectedInterviewers,
    trainingInterviewers: state.trainingInterviewers,
    trainingToggle: state.trainingToggle,
    errorValidation: state.errorValidation,
  }));

  const interviewModules = useInterviewPools();

  let optionsInterviewers: EditSessionDrawer['selectedInterviewers'] = [];
  let optionTrainees: EditSessionDrawer['trainingInterviewers'] = [];

  const filterArchivedModules = (interviewModules?.data ?? []).filter(
    (module) =>
      editSession?.interview_session.module_id === module.id ||
      !module.is_archived,
  );

  const moduleCurrent = filterArchivedModules?.find(
    (module) => module.id === editSession?.interview_session.module_id,
  );

  if (moduleCurrent) {
    optionsInterviewers =
      moduleCurrent?.members
        .filter((user) => user.training_status == 'qualified')
        ?.map((member) => ({
          email: member?.email || '',
          user_id: member?.user_id || '',
          profile_image: member?.profile_image || '',
          position: member?.position || '',
          first_name: member?.first_name || '',
          last_name: member?.last_name || '',
          module_relation_id: member?.module_relation_id,
        })) || [];

    optionTrainees =
      moduleCurrent?.members
        .filter((user) => user.training_status == 'training')
        ?.map((member) => ({
          email: member?.email || '',
          user_id: member?.user_id || '',
          profile_image: member?.profile_image || '',
          position: member?.position || '',
          first_name: member?.first_name || '',
          last_name: member?.last_name || '',
          module_relation_id: member?.module_relation_id,
        })) || [];
  }

  const isTraineesDropVisible =
    (moduleCurrent?.members?.filter(
      (user) => user.training_status === 'training',
    )?.length ?? 0) > 0;

  return (
    <InterviewMode
      isIndividual={
        editSession!.interview_session.session_type === 'individual'
      }
      isPanel={editSession!.interview_session.session_type === 'panel'}
      isTraining={true}
      textToggleLabel={`Training ${trainingToggle ? 'On' : 'Off'}`}
      slotToggle={
        <UISwitch
          size='sm'
          checked={trainingToggle}
          onCheckedChange={(checked) => {
            setTrainingToggle(checked);
            setTrainingInterviewers([]);
          }}
        />
      }
      slotInterviewModePill={<SelectSessionType />}
      isInterviewerDropVisible={true}
      slotMemberCountDropdown={<CountDropDown />}
      slotInterviewersDropdown={
        moduleCurrent?.members.length === 0 ? (
          <UIAlert
            type='error'
            title='Interview type has no interviewers.'
            action={
              <UIButton
                variant='destructive'
                size='sm'
                onClick={() => {
                  router.push(
                    ROUTES['/interview-pool/[pool]']({
                      type_id: moduleCurrent.id,
                    }),
                  );
                }}
              >
                Go to interview type
              </UIButton>
            }
          >
            <Typography>
              Please add members to the selected interview type.
            </Typography>
          </UIAlert>
        ) : (
          <>
            <MembersAutoComplete
              placeholder='Select Interviewers'
              renderUsers={optionsInterviewers}
              selectedUsers={selectedInterviewers}
              setSelectedUsers={
                setSelectedInterviewers as Parameters<
                  typeof MembersAutoComplete
                >[0]['setSelectedUsers']
              }
              pillColor='bg-neutral-200'
              error={
                errorValidation.find(
                  (err) => err.field === 'qualified_interviewers',
                )?.error
              }
              helperText={
                errorValidation.find(
                  (err) => err.field === 'qualified_interviewers',
                )?.message
              }
              onUserSelect={() => {
                setErrorValidation(
                  errorValidation.map((err) =>
                    err.field === 'qualified_interviewers'
                      ? { ...err, error: false }
                      : err,
                  ),
                );
              }}
            />
          </>
        )
      }
      isTrainingVisible={optionTrainees.length > 0}
      slotInterviewersAvatarSelectionPill={<></>}
      slotTraineeAvatarSelectionPill={<></>}
      isTraineesDropVisible={
        isTraineesDropVisible && trainingToggle && optionTrainees?.length > 0
      }
      slotTraineesDropdown={
        <MembersAutoComplete
          maxWidth='466px'
          placeholder='Select Training Interviewers'
          renderUsers={optionTrainees}
          selectedUsers={trainingInterviewers}
          setSelectedUsers={
            setTrainingInterviewers as Parameters<
              typeof MembersAutoComplete
            >[0]['setSelectedUsers']
          }
          pillColor='bg-neutral-200'
          error={
            errorValidation.find((err) => err.field === 'training_interviewers')
              ?.error
          }
          helperText={
            errorValidation.find((err) => err.field === 'training_interviewers')
              ?.message
          }
          onUserSelect={() => {
            setErrorValidation(
              errorValidation.map((err) =>
                err.field === 'training_interviewers'
                  ? { ...err, error: false }
                  : err,
              ),
            );
          }}
        />
      }
    />
  );
}

export default InterviewModeComp;
