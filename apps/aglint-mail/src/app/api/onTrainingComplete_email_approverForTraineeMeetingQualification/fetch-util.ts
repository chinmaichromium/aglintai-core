import type { DatabaseEnums, EmailTemplateAPi } from '@aglint/shared-types';
import { fillCompEmailTemplate, getFullName } from '@aglint/shared-utils';
import { supabaseAdmin, supabaseWrap } from '../../../supabase/supabaseAdmin';
import { fetchCompEmailTemp } from '../../../utils/apiUtils/fetchCompEmailTemp';

export async function fetchUtil(
  req_body: EmailTemplateAPi<'onTrainingComplete_email_approverForTraineeMeetingQualification'>['api_payload'],
) {
  const api_target: DatabaseEnums['email_slack_types'] =
    'onTrainingComplete_email_approverForTraineeMeetingQualification';

  const [sessn_reln] = supabaseWrap(
    await supabaseAdmin
      .from('interview_session_relation')
      .select(
        '*, interview_module_relation(*,interview_module(*,recruiter(*)),recruiter_user(*))',
      )
      .eq('id', req_body.session_relation_id),
  );

  const module_reln = sessn_reln.interview_module_relation;

  const [approver_reln] = supabaseWrap(
    await supabaseAdmin
      .from('interview_module_approve_users')
      .select('*, recruiter_user(*)')
      .eq('module_id', module_reln.interview_module.id),
  );
  const approver = approver_reln.recruiter_user;

  const [shadowCount] = supabaseWrap(
    await supabaseAdmin
      .from('module_relations_view')
      .select()
      .eq('user_id', module_reln.user_id),
  );

  const { interview_module, recruiter_user: trainee } = module_reln;
  const company = module_reln.interview_module.recruiter;

  const comp_email_temp = await fetchCompEmailTemp(
    interview_module.recruiter_id,
    'onTrainingComplete_email_approverForTraineeMeetingQualification',
  );

  const comp_email_placeholder: EmailTemplateAPi<'onTrainingComplete_email_approverForTraineeMeetingQualification'>['comp_email_placeholders'] =
    {
      approverFirstName: approver.first_name,
      approverLastName: approver.last_name,
      approverName: getFullName(approver.first_name, approver.last_name),
      interviewType: interview_module.name,
      traineeFirstName: trainee.first_name,
      traineeLastName: trainee.last_name,
      traineeName: getFullName(trainee.first_name, trainee.last_name),
      companyName: company.name,
      reverseShadowCount: String(shadowCount.reverse_shadow_confirmed_count),
      shadowCount: String(shadowCount.shadow_confirmed_count),
      qualifiedApproverConfirmLink: `<a href="#" target="_blank">here</a>`,
    };

  const filled_comp_template = fillCompEmailTemplate(
    comp_email_placeholder,
    comp_email_temp,
  );
  const react_email_placeholders: EmailTemplateAPi<'onTrainingComplete_email_approverForTraineeMeetingQualification'>['react_email_placeholders'] =
    {
      companyLogo: company.logo,
      emailBody: filled_comp_template.body,
      subject: filled_comp_template.subject,
    };

  return {
    filled_comp_template,
    react_email_placeholders,
    recipient_email: approver.email,
  };
}
