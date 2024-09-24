import { type DatabaseTable } from '@aglint/shared-types';
import {
  interviewCancelReasons,
  userDetails,
} from 'src/app/_common/utils/const';
import { z } from 'zod';

import { type PrivateProcedure, privateProcedure } from '@/server/api/trpc';
import { createPrivateClient } from '@/server/db';

const interviewStagesSchema = z.object({ application_id: z.string().uuid() });

const query = async (ctx: PrivateProcedure<typeof interviewStagesSchema>) => {
  return await fetchDetails(ctx);
};

export const interviewStages = privateProcedure
  .input(interviewStagesSchema)
  .query(query);

const fetchDetails = async (
  ctx: PrivateProcedure<typeof interviewStagesSchema>,
) => {
  const resStages = await fetchSessionDetails(ctx);

  const reducedStages = resStages.map((stage) => {
    const sessions = stage.sessions.map((session) => {
      return {
        ...session,
        users: session.users.map((user) => {
          return {
            ...user,
            user_details: {
              ...user.user_details,
            },
          };
        }),
      };
    });
    return {
      interview_plan: stage.interview_plan,
      sessions,
    };
  });

  return reducedStages;
};

const fetchSessionDetails = async (
  ctx: PrivateProcedure<typeof interviewStagesSchema>,
) => {
  const db = createPrivateClient();
  const {
    input: { application_id },
  } = ctx;
  const { data } = await db
    .from('interview_plan')
    .select(
      `*,interview_session(*,interview_meeting(*),${interviewCancelReasons},interview_module(*),interview_session_relation(*,interview_module_relation(*,${userDetails}),debrief_user:${userDetails}))`,
    )
    .eq('interview_session.interview_meeting.application_id', application_id)
    .not('interview_session', 'is', null)
    .not('interview_session.interview_meeting', 'is', null);

  if (!data) return [];

  const reducedPlan = data
    .sort((a, b) => a.plan_order - b.plan_order)
    .map((op) => {
      const plan: DatabaseTable['interview_plan'] = {
        created_at: op.created_at,
        id: op.id,
        job_id: op.job_id,
        name: op.name,
        plan_order: op.plan_order,
        application_id: op.application_id,
        recruiter_id: op.recruiter_id,
      };
      const sessions = op.interview_session
        .sort((a, b) => a.session_order - b.session_order)
        .map((ses) => {
          return {
            interview_session: ses,
            interview_meeting:
              ses.interview_meeting as DatabaseTable['interview_meeting'],
            cancel_reasons: ses.interview_session_cancel
              .filter((cancel) => !cancel.is_resolved && !cancel.is_ignored)
              .map((cancel) => {
                const interview_session_cancel: DatabaseTable['interview_session_cancel'] =
                  {
                    id: cancel.id,
                    reason: cancel.reason,
                    is_resolved: cancel.is_resolved,
                    is_ignored: cancel.is_ignored,
                    created_at: cancel.created_at,
                    cancel_user_id: cancel.cancel_user_id,
                    other_details: cancel.other_details,
                    application_id: cancel.application_id,
                    session_id: cancel.session_id,
                    session_relation_id: cancel.session_relation_id,
                    type: cancel.type,
                    request_id: null,
                  };
                return {
                  interview_session_cancel: interview_session_cancel,
                  recruiter_user: cancel.interview_session_relation
                    ? cancel?.interview_session_relation
                        ?.interview_module_relation?.recruiter_user
                    : cancel.admin,
                };
              }),
            interview_module: ses.interview_module,
            users: ses.interview_session_relation.map((sesitem) => ({
              interview_session_relation: sesitem,
              interview_module_relation: sesitem.interview_module_relation,
              user_details: sesitem.interview_module_relation_id
                ? sesitem?.interview_module_relation?.recruiter_user
                : sesitem.debrief_user,
            })),
          };
        });
      return {
        interview_plan: plan,
        sessions,
      };
    });

  return reducedPlan;
};
