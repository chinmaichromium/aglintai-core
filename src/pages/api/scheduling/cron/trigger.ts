/* eslint-disable security/detect-object-injection */
/* eslint-disable no-console */
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { EmailAgentId, PhoneAgentId } from '@/src/components/Tasks/utils';
import { Database } from '@/src/types/schema';
import { getFullName } from '@/src/utils/jsonResume';

import { ApiBodyParamsScheduleAgent } from '../application/schedulewithagent';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_SERVICE_KEY || '';

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

const url = `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/application/schedulewithagent`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error } = await supabase
      .from('new_tasks')
      .select(
        '*,applications(id,candidates(first_name),public_jobs(id,recruiter(id,name))),recruiter_user(user_id,first_name,last_name,email,phone),interview_filter_json(*)',
      )
      .eq('task_triggered', false)
      .lt('start_date', new Date().toISOString())
      .eq('status', 'not_started')
      .order('created_by', {
        ascending: true,
      });
    if (error) {
      throw new Error(error.message);
    } else {
      const filterTaskAgent = data.filter(
        (task) =>
          task.assignee.includes(EmailAgentId) ||
          task.assignee.includes(PhoneAgentId),
      );
      if (filterTaskAgent?.length > 0) {
        await Promise.all(
          filterTaskAgent.map(async (task) => {
            try {
              axios.post(url, {
                application_id: task.application_id,
                dateRange: task.schedule_date_range,
                recruiter_id: task.applications.public_jobs.recruiter.id,
                recruiter_user_name: getFullName(
                  task.recruiter_user.first_name,
                  task.recruiter_user.last_name,
                ),
                session_ids: (task.session_ids as any).map((ses) => ses.id),
                task_id: task.id,
                type: task.assignee.includes(EmailAgentId)
                  ? 'email_agent'
                  : 'phone_agent',
                candidate_name: task.applications.candidates.first_name,
                company_name: task.applications.public_jobs.recruiter.name,
                rec_user_email: task.recruiter_user.email,
                rec_user_phone: task.recruiter_user.phone,
                rec_user_id: task.recruiter_user.user_id,
                user_tz: 'Asia/Calcutta',
              } as ApiBodyParamsScheduleAgent);

              console.log(`number of task triggered ${filterTaskAgent.length}`);

              return res.status(200).send('success');
            } catch (error) {
              console.error('Error for application:', error.message);
              return res.status(400).send(JSON.stringify(error.message));
              // You might want to handle errors here
            }
          }),
        );
      } else {
        console.log('no applications');
        return res.status(200).send('no applications');
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

export default handler;
