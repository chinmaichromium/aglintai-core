import { createTRPCRouter } from '../../trpc';
import { applicationActivity } from './activity';
import { applicationDetails } from './details';
import { editDebriefSession } from './edit_debrief_session';
import { editSession } from './edit_session';
import { interviewStages } from './interview_stages';
import { applicationMeta } from './meta';
import { applicationRequest } from './requests';
import { updateBreak } from './update_break';

export const application = createTRPCRouter({
  interview_stages: interviewStages,
  application_meta: applicationMeta,
  application_details: applicationDetails,
  application_request: applicationRequest,
  application_activity: applicationActivity,
  update_break: updateBreak,
  edit_session: editSession,
  edit_debrief_session: editDebriefSession,
});
