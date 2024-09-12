import { getFullName } from '@aglint/shared-utils';
import { ButtonSolid } from '@devlink/ButtonSolid';

import { UIAlert } from '@/components/Common/UIAlert';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { type StageWithSessions } from '@/queries/application';

function CancelBanners({
  session,
}: {
  session: StageWithSessions[0]['sessions'][0];
}) {
  const { recruiterUser } = useAuthDetails();
  const adminCancel = session.cancel_reasons?.filter(
    (reason) => reason.interview_session_cancel.cancel_user_id,
  );

  return (
    <>
      {adminCancel.map((cancel) => {
        return (
          <UIAlert
            key={cancel.interview_session_cancel.id}
            color={'error'}
            title={`${cancel.recruiter_user.user_id === recruiterUser.user_id ? 'You have' : getFullName(cancel.recruiter_user.first_name, cancel.recruiter_user.last_name)} cancelled this schedule`}
            description={`Reason: ${cancel.interview_session_cancel.reason}`}
            notes={cancel.interview_session_cancel.other_details?.note}
            iconName={'CalendarClock'}
            actions={
              <>
                <ButtonSolid
                  size={'1'}
                  textButton={'Reschedule Now'}
                  onClickButton={{
                    onClick: (e) => {
                      e.stopPropagation();
                    },
                  }}
                />
              </>
            }
          />
        );
      })}
    </>
  );
}

export default CancelBanners;
