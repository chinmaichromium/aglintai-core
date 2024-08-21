import { DatabaseTableUpdate } from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import { Stack } from '@mui/material';
import axios from 'axios';
import { PropsWithChildren } from 'react';

import { Text } from '@/devlink/Text';
import { ButtonSoft } from '@/devlink2/ButtonSoft';
import { RequestCardDetail } from '@/devlink2/RequestCardDetail';
import { useRequests } from '@/src/context/RequestsContext';
import type { Request as RequestType } from '@/src/queries/requests/types';
import { supabase } from '@/src/utils/supabase/client';

import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import CandidateDetails from './CandidateDetails';
import RequestProgress from './RequestProgress';
import SessionsCardAndActions from './SessionsCardAndActions';

function RequestDetails({
  request,
}: {
  request: PropsWithChildren<RequestType>;
  index: number;
}) {
  const { handleAsyncUpdateRequest } = useRequests();
  const { recruiterUser } = useAuthDetails();

  return (
    <RequestCardDetail
      slotTextWithIconDetail={
        <Stack direction={'column'} gap={1}>
          <SessionsCardAndActions
            request={request}
            sessions={request.request_relation.map((relation) => {
              return {
                id: relation.interview_session.id,
                name: relation.interview_session.name,
              };
            })}
            application_id={request.applications.id}
          />
          <CandidateDetails
            candidateDetails={{
              name: getFullName(
                request.applications.candidates.first_name,
                request.applications.candidates.last_name,
              ),
              application_id: request.application_id,
            }}
            jobDetails={{
              id: request.applications.public_jobs.id,
              job_title: request.applications.public_jobs.job_title,
            }}
            dateRange={{
              start_date: request.schedule_start_date,
              end_date: request.schedule_end_date,
            }}
          />
          {/* <ReasonDetails />// reason */}
        </Stack>
      }
      slotRightText={
        <>
          <Stack
            justifyContent={'end'}
            direction={'row'}
            spacing={1}
            alignItems={'center'}
          >
            <Text size={1} color={'neutral'} content={'Created by:'} />
            <Text
              content={
                getFullName(
                  request.assigner.first_name,
                  request.assigner.last_name,
                ) +
                `${
                  request.assigner_id === recruiterUser.user_id ? ' (You)' : ''
                }`
              }
            />
          </Stack>
          <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
            justifyContent={'end'}
          >
            <Text
              size={1}
              color={'neutral'}
              content={dayjsLocal(request.created_at).fromNow()}
            />
            {/* <Text content={'Aglint'} /> */}
          </Stack>
        </>
      }
      isBodyVisible={true}
      slotBody={
        <>
          {request.applications.public_jobs.workflow_job_relation.length > 0 ? (
            <RequestProgress request_type={request.type} />
          ) : null}

          {Boolean(
            request.status === 'to_do' &&
              request.applications.public_jobs.workflow_job_relation.length > 0,
          ) && (
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text
                color={'accent'}
                content={
                  'When you click “Proceed,” Aglint AI will perform above tasks for you'
                }
                highContrast={false}
              />
              <ButtonSoft
                onClickButton={{
                  onClick: async () => {
                    await axios.post('/api/request/workflow-clone', {
                      request_id: request.id,
                    });
                    await handleAsyncUpdateRequest({
                      payload: {
                        requestId: request.id,
                        requestPayload: { status: 'in_progress' },
                      },
                    });
                  },
                }}
                size={1}
                textButton={'Proceed'}
              />
            </Stack>
          )}
        </>
      }
    />
  );
}

export default RequestDetails;

export const updateRequestSessionRelations = async ({
  id,
  ...rest
}: DatabaseTableUpdate['request']) =>
  (
    await supabase
      .from('request')
      .update({ ...rest })
      .eq('id', id)
      .select('*')
      .throwOnError()
  ).data;
