/* eslint-disable no-console */
import { createServerClient } from '@supabase/ssr';
import axios from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { InitAgentBodyParams } from '@/src/components/ScheduleAgent/types';
import {
  createTaskProgress,
  EmailAgentId,
  PhoneAgentId,
} from '@/src/components/Tasks/utils';
import { ConfirmApiBodyParams } from '@/src/pages/api/scheduling/v1/confirm_interview_slot';
import {
  InterviewMeetingTypeDb,
  InterviewSessionRelationTypeDB,
  InterviewSessionTypeDB,
  JobApplcationDB,
  RecruiterUserType,
} from '@/src/types/data.types';
import { Database } from '@/src/types/schema';
import { getFullName } from '@/src/utils/jsonResume';
import {
  geoCodeLocation,
  getTimeZoneOfGeo,
} from '@/src/utils/location-to-time-zone';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { addScheduleActivity } from '../queries/utils';
import { mailHandler } from '../utils';
import { fetchInterviewDataJob, fetchInterviewDataSchedule } from './hooks';
import { SchedulingApplication } from './store';

export const fetchInterviewMeetingProgresstask = async ({
  session_ids,
}: {
  session_ids: string[];
}) => {
  try {
    const { data: intSes, error: errSes } = await supabase
      .from('interview_session')
      .select('*,interview_meeting(*)')
      .in('id', session_ids);

    if (errSes) throw new Error(errSes.message);

    const { data: intSesRel, error: errSesRel } = await supabase
      .from('interview_session_relation')
      .select('*,interview_module_relation(*,recruiter_user(*))')
      .in('session_id', session_ids);

    if (errSesRel) throw new Error(errSesRel.message);

    const resMeetings = intSes.map((session) => ({
      interview_session: session,
      interview_meeting: session.interview_meeting,
      interview_session_relation: intSesRel.filter(
        (rel) => rel.session_id === session.id,
      ),
    }));

    return resMeetings;
  } catch (e) {
    //
  }
};

export const updateApplicationStatus = async ({
  status,
  application_id,
}: {
  status: JobApplcationDB['status'];
  application_id: string;
}) => {
  const { error } = await supabase
    .from('applications')
    .update({
      status: status,
    })
    .eq('id', application_id);

  if (error) {
    return false;
  } else {
    return true;
  }
};

export const createCloneSession = async ({
  is_get_more_option,
  application_id,
  allSessions,
  session_ids,
  scheduleName,
  coordinator_id,
  supabase,
  recruiter_id,
  rec_user_id,
}: {
  is_get_more_option: boolean;
  application_id: string;
  allSessions: SchedulingApplication['initialSessions'];
  session_ids: string[];
  scheduleName: string;
  coordinator_id: string;
  recruiter_id: string;
  supabase: ReturnType<typeof createServerClient<Database>>;
  rec_user_id: string;
}) => {
  let new_schedule_id = uuidv4();
  try {
    const { data, error } = await supabase
      .from('interview_schedule')
      .insert({
        is_get_more_option: is_get_more_option,
        application_id: application_id,
        schedule_name: scheduleName,
        coordinator_id: coordinator_id,
        id: new_schedule_id,
        recruiter_id: recruiter_id,
        created_by: rec_user_id,
      })
      .select();

    if (error) throw new Error(error.message);

    const refSessions = allSessions.map((session) => ({
      ...session,
      newId: uuidv4(),
      isSelected: session_ids.includes(session.id),
      new_meeting_id: uuidv4(),
      new_schedule_id: new_schedule_id,
    }));

    const { error: errorInsertedMeetings } = await supabase
      .from('interview_meeting')
      .insert(
        refSessions.map((ses) => {
          return {
            interview_schedule_id: ses.new_schedule_id,
            status: ses.isSelected ? 'waiting' : 'not_scheduled',
            instructions: refSessions.find((s) => s.id === ses.id)
              ?.interview_module?.instructions,
            id: ses.new_meeting_id,
          } as InterviewMeetingTypeDb;
        }),
      );

    if (errorInsertedMeetings) throw new Error(errorInsertedMeetings.message);

    const { error: errorInsertedSessions } = await supabase
      .from('interview_session')
      .insert(
        allSessions.map((session) => ({
          interview_plan_id: null,
          id: refSessions.find((ref) => ref.id === session.id).newId,
          break_duration: session.break_duration,
          interviewer_cnt: session.interviewer_cnt,
          location: session.location,
          module_id: session.module_id,
          name: session.name,
          schedule_type: session.schedule_type,
          session_duration: session.session_duration,
          session_order: session.session_order,
          session_type: session.session_type,
          meeting_id: refSessions.find((ref) => ref.id === session.id)
            .new_meeting_id,
        })) as InterviewSessionTypeDB[],
      );

    if (errorInsertedSessions) throw new Error(errorInsertedSessions.message);

    let insertableUserRelation = [];
    refSessions.map((session) => {
      session.users?.map((user) => {
        insertableUserRelation.push({
          interview_module_relation_id: user.interview_module_relation?.id,
          interviewer_type: user.interviewer_type,
          session_id: session.newId,
          training_type: user.training_type,
          user_id: user.user_id,
        } as InterviewSessionRelationTypeDB);
      });
    });

    const { error: errorInsertedUserRelation } = await supabase
      .from('interview_session_relation')
      .insert(insertableUserRelation);

    if (errorInsertedUserRelation)
      throw new Error(errorInsertedUserRelation.message);

    const newSessionIds = refSessions
      .filter((ses) => ses.isSelected)
      .map((session) => session.newId);

    return {
      schedule: data[0],
      session_ids: newSessionIds,
      refSessions,
    };
  } catch (e) {
    await supabase
      .from('interview_schedule')
      .delete()
      .eq('id', new_schedule_id);
    // eslint-disable-next-line no-console
    console.log(e.message);
  }
};

export const sendToCandidate = async ({
  is_mail,
  is_debrief = false,
  selected_comb_id,
  selectedApplication,
  initialSessions,
  selectedSessionIds,
  selCoordinator,
  recruiter_id,
  dateRange,
  schedulingOptions,
  recruiterUser,
  supabase,
  user_tz,
}: {
  is_mail: boolean;
  is_debrief?: boolean;
  selected_comb_id: string;
  selectedApplication: SchedulingApplication['selectedApplication'];
  initialSessions: SchedulingApplication['initialSessions'];
  selectedSessionIds: SchedulingApplication['selectedSessionIds'];
  selCoordinator: SchedulingApplication['selCoordinator'];
  recruiter_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  schedulingOptions: SchedulingApplication['schedulingOptions'];
  recruiterUser: RecruiterUserType;
  supabase: ReturnType<typeof createServerClient<Database>>;
  user_tz: string;
}) => {
  try {
    const scheduleName = `Interview for ${selectedApplication.public_jobs.job_title} - ${selectedApplication.candidates.first_name}`;
    const { data: checkSch, error: errorCheckSch } = await supabase
      .from('interview_schedule')
      .select('id')
      .eq('application_id', selectedApplication.id);

    if (errorCheckSch) throw new Error(errorCheckSch.message);

    if (checkSch.length === 0) {
      const createCloneRes = await createCloneSession({
        is_get_more_option: false,
        application_id: selectedApplication.id,
        allSessions: initialSessions,
        session_ids: selectedSessionIds,
        scheduleName: scheduleName,
        coordinator_id: selCoordinator,
        recruiter_id: recruiter_id,
        supabase: supabase,
        rec_user_id: recruiterUser.user_id,
      });

      const { data: filterJson, error: errorFilterJson } = await supabase
        .from('interview_filter_json')
        .insert({
          filter_json: {
            session_ids: createCloneRes.session_ids,
            recruiter_id: recruiter_id,
            start_date: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
            end_date: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
            user_tz: user_tz,
            organizer_name: recruiterUser.first_name,
          },
          session_ids: createCloneRes.session_ids,
          schedule_id: createCloneRes.schedule.id,
        })
        .select();

      if (errorFilterJson) throw new Error(errorFilterJson.message);

      addScheduleActivity({
        title: `Candidate invited for session ${createCloneRes.refSessions
          .filter((ses) => ses.isSelected)
          .map((ses) => ses.name)
          .join(' , ')}`,
        application_id: selectedApplication.id,
        logger: recruiterUser.user_id,
        type: 'schedule',
        supabase,
        created_by: recruiterUser.user_id,
      });

      if (!is_debrief && is_mail) {
        mailHandler({
          filter_id: filterJson[0].id,
          rec_id: recruiter_id,
          candidate_name: getFullName(
            selectedApplication.candidates.first_name,
            selectedApplication.candidates.last_name,
          ),
          mail: selectedApplication.candidates.email,
          position: selectedApplication.public_jobs.job_title,
          schedule_name: scheduleName,
          schedule_id: createCloneRes.schedule.id,
          supabase,
          rec_mail: recruiterUser.email,
        });
      }
      if (is_debrief && selected_comb_id) {
        const selectedSchedule = schedulingOptions.filter(
          (ses) => ses.plan_comb_id === selected_comb_id,
        );
        const bodyParams = {
          candidate_plan: [
            {
              sessions: selectedSchedule[0].sessions.map((ses) => {
                return {
                  session_id: createCloneRes.refSessions.find(
                    (sesRef) => sesRef.id === ses.session_id,
                  ).newId,
                  start_time: ses.start_time,
                  end_time: ses.end_time,
                };
              }),
            },
          ],
          recruiter_id: recruiter_id,
          user_tz: user_tz,
          candidate_email: selectedApplication.candidates.email,
          schedule_id: createCloneRes.schedule.id,
        } as ConfirmApiBodyParams;
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/confirm_interview_slot`,
          bodyParams,
        );

        if (res.status === 200) {
          console.log('Booked debrief session');
        }
      }
    } else {
      const { error: errorUpdatedMeetings } = await supabase
        .from('interview_meeting')
        .upsert(
          initialSessions
            .filter((ses) => selectedSessionIds.includes(ses.id))
            .map((ses) => ({
              status: 'waiting',
              id: ses.interview_meeting.id,
              interview_schedule_id:
                ses.interview_meeting.interview_schedule_id,
            })) as InterviewMeetingTypeDb[],
        );

      if (errorUpdatedMeetings) throw new Error(errorUpdatedMeetings.message);

      const { data: filterJson, error: errorFilterJson } = await supabase
        .from('interview_filter_json')
        .insert({
          filter_json: {
            session_ids: selectedSessionIds,
            recruiter_id: recruiter_id,
            start_date: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
            end_date: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
            user_tz: user_tz,
            organizer_name: recruiterUser.first_name,
          },
          session_ids: selectedSessionIds,
          schedule_id: checkSch[0].id,
        })
        .select();

      if (errorFilterJson) throw new Error(errorFilterJson.message);

      addScheduleActivity({
        title: is_debrief
          ? initialSessions
              .filter((ses) => selectedSessionIds.includes(ses.id))
              .map((ses) => ses.name)
              .join(' , ')
          : `Candidate invited for session ${initialSessions
              .filter((ses) => selectedSessionIds.includes(ses.id))
              .map((ses) => ses.name)
              .join(' , ')}`,
        logger: recruiterUser.user_id,
        application_id: selectedApplication.id,
        type: 'schedule',
        supabase,
        created_by: recruiterUser.user_id,
      });

      if (!is_debrief && is_mail) {
        mailHandler({
          filter_id: filterJson[0].id,
          rec_id: recruiter_id,
          candidate_name: getFullName(
            selectedApplication.candidates.first_name,
            selectedApplication.candidates.last_name,
          ),
          mail: selectedApplication.candidates.email,
          position: selectedApplication.public_jobs.job_title,
          schedule_name: scheduleName,
          schedule_id: checkSch[0].id,
          supabase,
          rec_mail: recruiterUser.email,
        });
      }

      if (is_debrief && selected_comb_id) {
        const selectedSchedule = schedulingOptions.filter(
          (ses) => ses.plan_comb_id === selected_comb_id,
        );
        const bodyParams = {
          candidate_plan: [
            {
              sessions: selectedSchedule[0].sessions.map((ses) => {
                return {
                  session_id: ses.session_id,
                  start_time: ses.start_time,
                  end_time: ses.end_time,
                };
              }),
            },
          ],
          recruiter_id: recruiter_id,
          user_tz: user_tz,
          candidate_email: selectedApplication.candidates.email,
          schedule_id: checkSch[0].id,
        } as ConfirmApiBodyParams;
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/v1/confirm_interview_slot`,
          bodyParams,
        );

        if (res.status === 200) {
          console.log('Booked debrief session');
        }
      }
    }
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
  }
};

export const scheduleWithAgent = async ({
  type,
  session_ids,
  application_id,
  dateRange,
  recruiter_id,
  task_id,
  recruiter_user_name,
  candidate_name = 'chinmai',
  company_name = 'aglint',
  rec_user_email,
  rec_user_phone,
  rec_user_id,
  supabase,
}: {
  type: 'phone_agent' | 'email_agent';
  session_ids: string[];
  application_id: string;
  dateRange: {
    start_date: string | null;
    end_date: string | null;
  };
  recruiter_id: string;
  task_id: string;
  recruiter_user_name: string;
  candidate_name?: string;
  company_name?: string;
  rec_user_email: string;
  rec_user_phone: string;
  rec_user_id: string;
  supabase: ReturnType<typeof createServerClient<Database>>;
}) => {
  try {
    console.log(application_id, 'application_id');
    console.log(task_id, 'task_id');

    if (type) {
      const { data: checkSch, error: errorCheckSch } = await supabase
        .from('interview_schedule')
        .select('id')
        .eq('application_id', application_id);

      console.log(checkSch[0]);

      if (errorCheckSch) throw new Error(errorCheckSch.message);

      if (checkSch.length === 0) {
        console.log('fetchInterviewDataJob');

        const sessionsWithPlan = await fetchInterviewDataJob({
          application_id,
          supabase,
        });

        const scheduleName = `Interview for ${sessionsWithPlan.application.public_jobs.job_title} - ${sessionsWithPlan.application.candidates.first_name}`;

        const createCloneRes = await createCloneSession({
          is_get_more_option: false,
          application_id,
          allSessions: sessionsWithPlan.sessions,
          session_ids,
          scheduleName,
          coordinator_id: sessionsWithPlan.interviewPlan.coordinator_id,
          supabase,
          recruiter_id: recruiter_id,
          rec_user_id,
        });

        console.log(
          createCloneRes.refSessions
            .filter((ses) => ses.isSelected)
            .map((ses) => `old session_id ${ses.id} to ${ses.newId}`),
        );

        const filterJson = await createFilterJson({
          dateRange,
          organizer_name: recruiter_user_name,
          sessions_ids: createCloneRes.session_ids,
          schedule_id: createCloneRes.schedule.id,
          recruiter_id,
          supabase,
          rec_user_id,
        });

        console.log(filterJson.id, 'filter_id');

        const { data: task, error: eroorSubTasks } = await supabase
          .from('new_tasks')
          .update({
            filter_id: filterJson.id,
            session_ids: createCloneRes.refSessions
              .filter((ses) => ses.isSelected)
              .map((ses) => {
                return {
                  ...ses,
                  id: ses.newId,
                };
              }),
          })
          .eq('id', task_id)
          .select();
        if (eroorSubTasks) throw new Error(eroorSubTasks.message);

        console.log(`task status updated to ${task[0].status}`);

        addScheduleActivity({
          title: `Candidate invited for ${createCloneRes.refSessions
            .filter((ses) => ses.isSelected)
            .map((ses) => ses.name)
            .join(
              ' , ',
            )} via ${type === 'email_agent' ? 'email agent' : 'phone agent'}`,
          logger: rec_user_id,
          type: 'schedule',
          application_id,
          task_id,
          supabase,
          created_by: rec_user_id,
        });

        await agentTrigger({
          type,
          sessionsWithPlan,
          filterJsonId: filterJson.id,
          task_id,
          recruiter_user_name,
          candidate_name,
          company_name,
          jobRole: sessionsWithPlan.application.public_jobs.job_title,
          rec_user_email,
          rec_user_phone,
        });
      } else {
        console.log('fetchInterviewDataSchedule');

        const sessionsWithPlan = await fetchInterviewDataSchedule(
          checkSch[0].id,
          application_id,
          supabase,
        );

        const selectedSessions = sessionsWithPlan.sessions.filter((ses) =>
          session_ids.includes(ses.id),
        );

        const { error: errorUpdatedMeetings } = await supabase
          .from('interview_meeting')
          .upsert(
            selectedSessions.map((ses) => ({
              status: 'waiting',
              id: ses.interview_meeting.id,
              interview_schedule_id:
                ses.interview_meeting.interview_schedule_id,
            })) as InterviewMeetingTypeDb[],
          );

        if (errorUpdatedMeetings) throw new Error(errorUpdatedMeetings.message);

        const filterJson = await createFilterJson({
          dateRange,
          organizer_name: recruiter_user_name,
          sessions_ids: session_ids,
          schedule_id: checkSch[0].id,
          recruiter_id,
          supabase,
          rec_user_id,
        });

        const { error: eroorSubTasks } = await supabase
          .from('new_tasks')
          .update({
            filter_id: filterJson.id,
            session_ids: selectedSessions,
          })
          .eq('id', task_id);
        if (eroorSubTasks) throw new Error(eroorSubTasks.message);

        addScheduleActivity({
          title: `Candidate invited for ${selectedSessions
            .map((ses) => ses.name)
            .join(
              ' , ',
            )} via ${type === 'email_agent' ? 'email agent' : 'phone agent'}`,
          logger: rec_user_id,
          type: 'schedule',
          application_id,
          task_id,
          supabase,
          created_by: rec_user_id,
        });

        await agentTrigger({
          type,
          sessionsWithPlan,
          filterJsonId: filterJson.id,
          task_id,
          recruiter_user_name,
          candidate_name,
          company_name,
          jobRole: sessionsWithPlan.application.public_jobs.job_title,
          rec_user_email,
          rec_user_phone,
        });
      }
      return true;
    }
  } catch (err) {
    console.log(err?.message || err);
  }
};

export const scheduleWithAgentWithoutTaskId = async ({
  type,
  session_ids,
  application_id,
  dateRange,
  recruiter_id,
  recruiter_user_name,
  candidate_name,
  company_name,
  rec_user_email,
  rec_user_phone,
  rec_user_id,
  supabase,
}: {
  type: 'phone_agent' | 'email_agent';
  session_ids: string[];
  application_id: string;
  dateRange: {
    start_date: string | null;
    end_date: string | null;
  };
  recruiter_id: string;
  recruiter_user_name: string;
  candidate_name?: string;
  company_name?: string;
  rec_user_email: string;
  rec_user_phone: string;
  rec_user_id: string;
  supabase: ReturnType<typeof createServerClient<Database>>;
  user_tz: string;
}) => {
  try {
    console.log(application_id, 'application_id');

    if (type) {
      const { data: checkSch, error: errorCheckSch } = await supabase
        .from('interview_schedule')
        .select('id')
        .eq('application_id', application_id);

      console.log(checkSch[0]);

      if (errorCheckSch) throw new Error(errorCheckSch.message);

      if (checkSch.length === 0) {
        console.log('fetchInterviewDataJob');

        const sessionsWithPlan = await fetchInterviewDataJob({
          application_id,
          supabase,
        });

        const scheduleName = `Interview for ${sessionsWithPlan.application.public_jobs.job_title} - ${sessionsWithPlan.application.candidates.first_name}`;

        const createCloneRes = await createCloneSession({
          is_get_more_option: false,
          application_id,
          allSessions: sessionsWithPlan.sessions,
          session_ids,
          scheduleName,
          coordinator_id: sessionsWithPlan.interviewPlan.coordinator_id,
          supabase,
          recruiter_id: recruiter_id,
          rec_user_id,
        });

        console.log(
          createCloneRes.refSessions
            .filter((ses) => ses.isSelected)
            .map((ses) => `old session_id ${ses.id} to ${ses.newId}`),
        );

        const filterJson = await createFilterJson({
          dateRange,
          organizer_name: recruiter_user_name,
          sessions_ids: createCloneRes.session_ids,
          schedule_id: createCloneRes.schedule.id,
          recruiter_id,
          supabase,
          rec_user_id,
        });

        console.log(filterJson.id, 'filter_id');

        const selSes = createCloneRes.refSessions.filter(
          (ses) => ses.isSelected,
        );

        const task = await createTask({
          application_id,
          dateRange,
          filter_id: filterJson.id,
          rec_user_id,
          recruiter_id,
          selectedSessions: selSes,
          type,
          recruiter_user_name,
          supabase,
          candidate_name,
        });

        addScheduleActivity({
          title: `Candidate invited for session ${selSes
            .map((ses) => ses.name)
            .join(
              ' , ',
            )} via ${type === 'email_agent' ? 'Email Agent' : 'Phone Agent'}`,
          logger: rec_user_id,
          type: 'schedule',
          application_id,
          task_id: task.id,
          supabase,
          created_by: rec_user_id,
        });

        await agentTrigger({
          type,
          sessionsWithPlan,
          filterJsonId: filterJson.id,
          task_id: task.id,
          recruiter_user_name,
          candidate_name,
          company_name,
          jobRole: sessionsWithPlan.application.public_jobs.job_title,
          rec_user_email,
          rec_user_phone,
        });
      } else {
        console.log('fetchInterviewDataSchedule');

        const sessionsWithPlan = await fetchInterviewDataSchedule(
          checkSch[0].id,
          application_id,
          supabase,
        );

        const selectedSessions = sessionsWithPlan.sessions.filter((ses) =>
          session_ids.includes(ses.id),
        );

        const { error: errorUpdatedMeetings } = await supabase
          .from('interview_meeting')
          .upsert(
            selectedSessions.map((ses) => ({
              status: 'waiting',
              id: ses.interview_meeting.id,
              interview_schedule_id:
                ses.interview_meeting.interview_schedule_id,
            })) as InterviewMeetingTypeDb[],
          );

        if (errorUpdatedMeetings) throw new Error(errorUpdatedMeetings.message);

        const filterJson = await createFilterJson({
          dateRange,
          organizer_name: recruiter_user_name,
          sessions_ids: session_ids,
          schedule_id: checkSch[0].id,
          recruiter_id,
          supabase,
          rec_user_id,
        });

        const task = await createTask({
          application_id,
          dateRange,
          filter_id: filterJson.id,
          rec_user_id,
          recruiter_id,
          selectedSessions,
          type,
          recruiter_user_name,
          supabase,
          candidate_name,
        });

        addScheduleActivity({
          title: `Candidate invited for session ${selectedSessions
            .map((ses) => ses.name)
            .join(
              ' , ',
            )} via ${type === 'email_agent' ? 'Email Agent' : 'Phone Agent'}`,
          logger: rec_user_id,
          type: 'schedule',
          application_id,
          task_id: task.id,
          supabase,
          created_by: rec_user_id,
        });

        await agentTrigger({
          type,
          sessionsWithPlan,
          filterJsonId: filterJson.id,
          task_id: task.id,
          recruiter_user_name,
          candidate_name,
          company_name,
          jobRole: sessionsWithPlan.application.public_jobs.job_title,
          rec_user_email,
          rec_user_phone,
        });
      }
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};

export const createFilterJson = async ({
  sessions_ids,
  schedule_id,
  organizer_name,
  recruiter_id,
  dateRange,
  supabase,
  rec_user_id,
}: {
  sessions_ids: string[];
  schedule_id: string;
  organizer_name: string;
  recruiter_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  supabase: ReturnType<typeof createServerClient<Database>>;
  rec_user_id: string;
}) => {
  const { data: filterJson, error: errorFilterJson } = await supabase
    .from('interview_filter_json')
    .insert({
      filter_json: {
        session_ids: sessions_ids,
        recruiter_id: recruiter_id,
        start_date: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
        end_date: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
        organizer_name: organizer_name,
      },
      session_ids: sessions_ids,
      schedule_id: schedule_id,
      created_by: rec_user_id,
    })
    .select();

  if (errorFilterJson) throw new Error(errorFilterJson.message);

  return filterJson[0];
};

export const fetchInterviewSessionTask = async ({
  job_id,
  application_id,
}: {
  job_id: string;
  application_id: string;
}) => {
  try {
    const { data: schedule, error } = await supabase
      .from('interview_schedule')
      .select('*')
      .eq('application_id', application_id);

    if (error) throw new Error(error.message);

    if (schedule.length == 0) {
      const { data: interviewSession, error: interviewSessionError } =
        await supabase
          .from('interview_session')
          .select(
            '*,interview_module(*),interview_plan!inner(*),interview_session_relation(id)',
          )
          .eq('interview_plan.job_id', job_id)
          .neq('session_type', 'debrief');

      if (interviewSessionError) throw new Error(interviewSessionError.message);
      const sessions = interviewSession
        .filter((ses) => ses.interview_session_relation.length > 0)
        .map(
          (meet) =>
            ({
              break_duration: meet.break_duration,
              created_at: meet.created_at,
              id: meet.id,
              interview_plan_id: meet.interview_plan_id,
              interviewer_cnt: meet.interviewer_cnt,
              location: meet.location,
              module_id: meet.module_id,
              name: meet.name,
              schedule_type: meet.schedule_type,
              session_duration: meet.session_duration,
              session_order: meet.session_order,
              session_type: meet.session_type,
            }) as InterviewSessionTypeDB,
        );

      return sessions.sort(
        (itemA, itemB) => itemA['session_order'] - itemB['session_order'],
      ) as InterviewSessionTypeDB[];
    } else {
      const { data: interviewSessions, error: interviewSessionError } =
        await supabase
          .from('interview_session')
          .select(
            '*,interview_meeting!inner(*,interview_schedule(*)),interview_session_relation(id)',
          )
          .eq('interview_meeting.interview_schedule_id', schedule[0].id)
          .neq('session_type', 'debrief')
          .eq('interview_meeting.status', 'not_scheduled');

      if (interviewSessionError) throw new Error(interviewSessionError.message);

      return interviewSessions
        .filter((ses) => ses.interview_session_relation.length > 0)
        .sort(
          (itemA, itemB) => itemA['session_order'] - itemB['session_order'],
        ) as InterviewSessionTypeDB[];
    }
  } catch (e) {
    toast.error(e.message);
  }
};

export const agentTrigger = async ({
  type,
  sessionsWithPlan,
  filterJsonId,
  task_id,
  recruiter_user_name,
  candidate_name,
  company_name,
  jobRole,
  rec_user_email,
  rec_user_phone = '',
}: {
  type: 'email_agent' | 'phone_agent';
  sessionsWithPlan: Awaited<ReturnType<typeof fetchInterviewDataSchedule>>;
  filterJsonId: string;
  task_id: string;
  recruiter_user_name: string;
  candidate_name: string;
  company_name: string;
  jobRole: string;
  rec_user_email: string;
  rec_user_phone: string;
}) => {
  console.log({
    type,
    candidate_name,
    rec_user_email,
    rec_user_phone,
  });

  const candidate = sessionsWithPlan.application.candidates;

  if (!candidate.timezone && (candidate.city || candidate.state)) {
    await getCandidateTimezone(
      `${sessionsWithPlan.application.candidates.city} ${sessionsWithPlan.application.candidates.state}`,
      candidate.id,
    );
  }

  if (type === 'email_agent') {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST_NAME}/api/scheduling/mail-agent/init-agent`,
      {
        cand_email: rec_user_email,
        filter_json_id: filterJsonId,
        interviewer_name: recruiter_user_name,
        task_id: task_id,
      } as InitAgentBodyParams,
    );

    if (res?.status === 200) {
      console.log('mail agent triggered successfully');
    } else {
      console.log('error in mail agent');
    }

    return res.status;
  } else if (type === 'phone_agent') {
    const res = await axios.post(
      // 'https://rested-logically-lynx.ngrok-free.app/api/schedule-agent/create-phone-call',
      `${process.env.NEXT_PUBLIC_AGENT_API}/api/schedule-agent/create-phone-call`,
      {
        begin_sentence_template: `Hi ${candidate_name}, this is ${recruiter_user_name} calling from ${company_name}. We wanted to schedule an interview for the position of ${jobRole}, Is this the right time to talk?`,
        interviewer_name: recruiter_user_name,
        // to_phone_no: '+919482306657',
        from_phone_no: '+12512066348',
        to_phone_no: rec_user_phone
          .replace(' ', '')
          .replace('-', '')
          .replace('(', '')
          .replace(')', ''),
        // retell_agent_id: 'dcc1869a822931ef646f28e185e7402e',
        retell_agent_id: process.env.RETELL_AGENT_ID,
        filter_json_id: filterJsonId,
        cand_email: rec_user_email,
        // cand_email: sessionsWithPlan.application.candidates.email,
        task_id: task_id,
      },
    );

    if (res?.status === 200) {
      console.log('phone agent triggered successfully');
    } else {
      console.log('error in phone agent');
    }
    return res.status;
  }
};

export const createTask = async ({
  selectedSessions,
  application_id,
  rec_user_id,
  recruiter_id,
  dateRange,
  filter_id,
  type,
  recruiter_user_name,
  supabase,
  candidate_name,
}: {
  selectedSessions: Awaited<
    ReturnType<typeof fetchInterviewDataJob>
  >['sessions'];
  application_id: string;
  rec_user_id: string;
  recruiter_id: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  filter_id: string;
  type: 'phone_agent' | 'email_agent';
  recruiter_user_name: string;
  candidate_name: string;
  supabase: ReturnType<typeof createServerClient<Database>>;
}) => {
  const assignee = type == 'email_agent' ? EmailAgentId : PhoneAgentId;
  const { data: task, error: errorTasks } = await supabase
    .from('new_tasks')
    .insert({
      name: `Schedule interview for ${selectedSessions.map((ses) => ses.name).join(' , ')} via ${type == 'email_agent' ? 'email' : 'phone'}`,
      application_id,
      created_by: rec_user_id,
      type: 'schedule',
      status: 'in_progress',
      recruiter_id,
      due_date: dateRange.end_date,
      schedule_date_range: dateRange,
      start_date: new Date(),
      assignee: [assignee],
      filter_id: filter_id,
      session_ids: selectedSessions,
      trigger_count: 1,
    } as any)
    .select()
    .single();

  if (errorTasks) throw new Error(errorTasks.message);
  console.log(task);

  await createTaskProgress({
    type: 'create_task',
    data: {
      progress_type: 'standard',
      created_by: { id: rec_user_id, name: recruiter_user_name },
      task_id: task.id,
    },
    optionData: {
      candidateName: candidate_name,
      sessions: selectedSessions,
    },
    supabaseCaller: supabase,
  });

  console.log(`Create task ${task.id}`);

  return task;
};

const getCandidateTimezone = async (location, candidate_id) => {
  const resGeoCode = await geoCodeLocation(location);
  if (resGeoCode) {
    const resTimezone = await getTimeZoneOfGeo(resGeoCode);
    if (resTimezone) {
      const { data } = await supabase
        .from('candidates')
        .update({
          timezone: resTimezone,
        })
        .eq('id', candidate_id)
        .select();
      console.log(data);
    }
  }
};

export const getTimeZoneBrowser = () => {
  const localTime = new Date().toTimeString();
  const timeZonea = localTime.substring(
    localTime.lastIndexOf('(') + 1,
    localTime.lastIndexOf(')'),
  );
  const timezone = timeZonea
    .split(' ')
    .map((ele) => ele[0])
    .join('');

  return timezone;
};
