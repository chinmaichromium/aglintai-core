import { type DatabaseTable } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';
import { triggerToCategoryMap } from 'src/app/(authenticated)/jobs/[job]/(job-edit)/workflows/_common/lib/constants';
import { z } from 'zod';

import {
  type PrivateProcedure,
  privateProcedure,
  type ProcedureDefinition,
} from '@/server/api/trpc';

const schema = z.object({
  job_id: z.string().uuid(),
  company_id: z.string().uuid(),
});
type QryReponse = {
  job_workflows: DatabaseTable['workflow'][];
  job_workflow_actions: DatabaseTable['workflow_action'][];
  company_email_templates: DatabaseTable['company_email_template'][];
};
const query = async ({ input, ctx }: PrivateProcedure<typeof schema>) => {
  const db = ctx.db;
  const fetched_workflows = supabaseWrap(
    await db
      .from('workflow_job_relation')
      .select('*, workflow!inner(*)')
      .eq('job_id', input.job_id),
    // filter and map only job workflows
  );
  const filtered_workflows = fetched_workflows.filter(
    (w) => w.workflow.workflow_type === 'job',
  );
  const workflow_actions = supabaseWrap(
    await db
      .from('workflow_action')
      .select('*')
      .in(
        'workflow_id',
        (filtered_workflows ?? [])
          .filter((j) => {
            return j.workflow.trigger in triggerToCategoryMap;
          })
          .map((workflow) => workflow.workflow_id),
      ),
  );
  const company_email_templates = supabaseWrap(
    await db
      .from('company_email_template')
      .select()
      .eq('recruiter_id', input.company_id),
  );
  const responseQryReponse: QryReponse = {
    job_workflows: (filtered_workflows ?? []).map(
      (workflow) => workflow.workflow,
    ),
    job_workflow_actions: workflow_actions ?? [],
    company_email_templates: company_email_templates ?? [],
  };
  return responseQryReponse;
};

export const getJobWorkflows = privateProcedure.input(schema).query(query);

export type GetJobWorkflows = ProcedureDefinition<typeof getJobWorkflows>;
