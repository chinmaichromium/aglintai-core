import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { GeneralBanner } from '@/devlink/GeneralBanner';
import Icon from '@/src/components/Common/Icons/Icon';
import { ShowCode } from '@/src/components/Common/ShowCode';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import toast from '@/src/utils/toast';

import { sendEmailToCandidate } from '../../RequestAvailability/RequestAvailabilityContext';
import {
  setRequestSessionIds,
  useSchedulingApplicationStore,
} from '../../store';
import { useAvailabilityContext } from './RequestAvailabilityContext';
import RequestAvailabilityDrawer from './RequestAvailabilityDrawer';

function RequestAvailabilityPopUps() {
  const router = useRouter();
  const { recruiter } = useAuthDetails();
  const { availabilities, selectedApplication } =
    useSchedulingApplicationStore();

  const { setSelectedRequestAvailability } = useAvailabilityContext();

  function openDrawer(id: string) {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    const updatedQuery = {
      ...currentQuery,
      request_availability_id: id,
    };
    router.replace({
      pathname: currentPath,
      query: updatedQuery,
    });
  }

  function handleRequestAgain(request_id: string) {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    const updatedQuery = {
      ...currentQuery,
      candidate_request_availability: request_id,
    };
    router.replace({
      pathname: currentPath,
      query: updatedQuery,
    });
  }

  useEffect(() => {
    const selectedRequest = availabilities?.find((item) => {
      return item.id == router.query?.candidate_request_availability;
    });
    if (selectedRequest)
      setRequestSessionIds(selectedRequest.session_ids.map((ele) => ele.id));
  }, [router.query?.candidate_request_availability]);
  return (
    <div>
      <RequestAvailabilityDrawer />
      <Stack direction={'column'} gap={1}>
        {availabilities &&
          availabilities.map((item) => {
            const dates =
              item.slots &&
              item.slots
                .map((ele) => ele.dates)
                .flat()
                .map((ele) => `<b>${dayjs(ele.curr_day).format('DD MMM')}</b>`);
            return (
              <>
                <ShowCode>
                  <ShowCode.When isTrue={!item.slots}>
                    <GeneralBanner
                      titleColorProps={{
                        style: {
                          color: 'var(--warning-11)',
                        },
                      }}
                      textHeading={
                        'Waiting for candidates availability submission'
                      }
                      textDesc={
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `Candidate received a link to choose multiple options for ${item.session_ids.map((ele) => `<b>${ele.name}</b>`)} Interviews.`,
                          }}
                        ></div>
                      }
                      slotHeadingIcon={
                        <Icon height='15' width='' variant='Clock' />
                      }
                      slotButton={
                        <>
                          <ButtonSolid
                            textButton={'Resend invite'}
                            isLoading={false}
                            isLeftIcon={false}
                            isRightIcon={false}
                            size={1}
                            onClickButton={{
                              onClick: () => {
                                sendEmailToCandidate({
                                  email: selectedApplication.candidates.email,
                                  emailBody:
                                    recruiter.email_template[
                                      'request_candidate_slot'
                                    ].body,
                                  emailSubject:
                                    recruiter.email_template[
                                      'request_candidate_slot'
                                    ].subject,
                                  first_name:
                                    selectedApplication.candidates.first_name,
                                  last_name:
                                    selectedApplication.candidates.last_name,
                                  job_title:
                                    selectedApplication.public_jobs.job_title,
                                  recruiter,
                                  sessionNames: item.session_ids.map(
                                    (ele) => ele.name,
                                  ),
                                  request_id: item.id,
                                });
                                toast.message(
                                  'Resend invited link sent successfully!',
                                );
                              },
                            }}
                          />
                          <ButtonSoft
                            textButton={'Copy invite'}
                            isLoading={false}
                            isLeftIcon={false}
                            isRightIcon={false}
                            size={1}
                            onClickButton={{
                              onClick: () => {
                                navigator.clipboard.writeText(
                                  `${process.env.NEXT_PUBLIC_HOST_NAME}/scheduling/request-availability/${item.id}`,
                                );
                                toast.message('Invited link copied!');
                              },
                            }}
                          />
                        </>
                      }
                    />
                  </ShowCode.When>
                  <ShowCode.Else>
                    <GeneralBanner
                      titleColorProps={{
                        style: {
                          color: 'var(--info-11)',
                        },
                      }}
                      textHeading={'Candidate submitted availability'}
                      textDesc={
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `Candidate submitted availability on ${dates} for ${item.session_ids.map((ele) => `<b>${ele.name}</b>`)} Interviews.`,
                          }}
                        ></div>
                      }
                      slotHeadingIcon={
                        <Icon height={'16'} width={'20'} variant='Check' />
                      }
                      slotButton={
                        <>
                          <ButtonSolid
                            textButton={'Schedule'}
                            isLoading={false}
                            isLeftIcon={false}
                            isRightIcon={false}
                            size={1}
                            onClickButton={{
                              onClick: () => {
                                openDrawer(item.id);
                                setSelectedRequestAvailability(item);
                              },
                            }}
                          />
                          <ButtonSoft
                            textButton={'Request again'}
                            isLoading={false}
                            isLeftIcon={false}
                            isRightIcon={false}
                            size={1}
                            onClickButton={{
                              onClick: () => handleRequestAgain(item.id),
                            }}
                          />
                        </>
                      }
                    />
                  </ShowCode.Else>
                </ShowCode>
              </>
            );
          })}
      </Stack>
    </div>
  );
}

export default RequestAvailabilityPopUps;
