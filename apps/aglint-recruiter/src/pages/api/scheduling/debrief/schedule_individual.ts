/* eslint-disable no-console */
/* eslint-disable security/detect-object-injection */
import {
  type APIScheduleDebreif,
  type PlanCombinationRespType,
} from '@aglint/shared-types';
import { type schema_find_availability_payload } from '@aglint/shared-utils';
import axios from 'axios';
import dayjs from 'dayjs';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { type z } from 'zod';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import type { ApiResponseFindAvailability } from '../v1/find_availability';

export type ApiBodyParamScheduleIndividual = {
  session_id: string;
  application_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  recruiter_id: string;
  task_id: string;
  recruiter_user_name: string;
  rec_user_id: string;
  user_tz: string;
  request_id: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      application_id,
      dateRange,
      rec_user_id,
      recruiter_id,
      session_id,
      recruiter_user_name,
      task_id,
      user_tz,
      request_id,
    } = req.body as ApiBodyParamScheduleIndividual;

    console.log(application_id, 'application_id');

    if (
      !application_id ||
      !rec_user_id ||
      !recruiter_id ||
      !session_id ||
      !task_id ||
      !user_tz ||
      !request_id
    ) {
      return res.status(400).send('Missing required parameters');
    }

    const availabilities = await findAvailibilityNoConflictOnly({
      recruiter_id: recruiter_id,
      session_id,
      dateRange,
    });

    const firstSlot = availabilities?.slots
      ?.flatMap((item) => item?.interview_rounds)
      ?.flatMap((item) => item?.plans);

    if (
      firstSlot &&
      availabilities &&
      availabilities?.slots?.length > 0 &&
      firstSlot?.length > 0
    ) {
      await confirmSlot({
        task_id,
        user_tz,
        selectedDebrief: firstSlot[0],
        request_id,
      });
      return res.status(200).send('success');
    } else {
      console.log('no availibity found');
      await updateFailedTask({
        dateRange,
        rec_user_id,
        recruiter_user_name,
        task_id,
      });
      return res.status(200).send('no availibity found');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).send(error.message);
    }
  }
};

export default handler;

const confirmSlot = async ({
  user_tz,
  selectedDebrief,
  request_id,
}: {
  task_id: string;
  user_tz: string;
  selectedDebrief: PlanCombinationRespType;
  request_id: string;
}) => {
  const bodyParams: APIScheduleDebreif = {
    session_id: selectedDebrief.sessions[0].session_id,
    user_tz,
    selectedOption: selectedDebrief,
    request_id,
  };

  await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/booking/schedule-debreif`,
    bodyParams,
  );

  return true;
};

const findAvailibilityNoConflictOnly = async ({
  session_id,
  recruiter_id,
  dateRange,
}: {
  session_id: string;
  recruiter_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
}) => {
  const bodyParams: z.input<typeof schema_find_availability_payload> = {
    session_ids: [session_id],
    recruiter_id: recruiter_id,
    start_date_str: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
    end_date_str: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
    candidate_tz: 'America/Los_Angeles',
  };

  const resAllOptions = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/find_availability`,
    bodyParams,
  );

  if (resAllOptions.data.length === 0) {
    console.log('No availability found.');
    return;
  } else return resAllOptions.data as ApiResponseFindAvailability;
};

const updateFailedTask = async ({
  task_id,
  rec_user_id,
  recruiter_user_name,
  dateRange,
}: {
  task_id: string;
  rec_user_id: string;
  recruiter_user_name: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
}) => {
  const supabaseAdmin = getSupabaseServer();

  const { error: errorTasks } = await supabaseAdmin
    .from('new_tasks')
    .update({
      status: 'failed',
    })
    .eq('id', task_id);

  if (errorTasks) throw new Error(errorTasks.message);
  else return { rec_user_id, recruiter_user_name, dateRange };
};
