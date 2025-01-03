import { type DatabaseTable } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export const onUpdateInterviewFilterJson = async ({
  new_data,
  old_data,
}: {
  new_data: DatabaseTable['interview_filter_json'];
  old_data: DatabaseTable['interview_filter_json'];
}) => {
  // when candidate schedule interview filter json
  if (
    old_data.confirmed_on === null &&
    new_data.confirmed_on &&
    new_data.confirmed_on.length > 0
  ) {
    await stopSelfScheduleReminder(new_data);
  }
};

const stopSelfScheduleReminder = async (
  new_data: DatabaseTable['interview_filter_json'],
) => {
  const supabaseAdmin = getSupabaseServer();
  try {
    supabaseWrap(
      await supabaseAdmin
        .from('workflow_action_logs')
        .update({ status: 'stopped' })
        .eq('related_table', 'interview_filter_json')
        .eq('related_table_pkey', new_data.id)
        .eq('meta->>target_api', 'selfScheduleReminder_email_applicant'),
    );
  } catch (err: any) {
    console.error('Failed to stop self schedule reminder', err.message);
  }
};
