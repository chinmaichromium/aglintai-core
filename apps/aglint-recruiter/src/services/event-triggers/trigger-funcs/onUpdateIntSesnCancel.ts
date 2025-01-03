import { type DatabaseTable } from '@aglint/shared-types';
import { supabaseWrap } from '@aglint/shared-utils';

import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

export const onUpdateIntSesnCancel = async ({
  new_data,
  old_data,
}: {
  new_data: DatabaseTable['interview_session_cancel'];
  old_data: DatabaseTable['interview_session_cancel'];
}) => {
  if (new_data.is_resolved === true && old_data.is_resolved === false) {
    await declineRequestCompletion({
      new_data,
    });
  }
};

export const declineRequestCompletion = async ({
  new_data,
}: {
  new_data: DatabaseTable['interview_session_cancel'];
}) => {
  try {
    const supabaseAdmin = getSupabaseServer();
    if (!new_data.request_id) return;
    supabaseWrap(
      await supabaseAdmin
        .from('request')
        .update({ status: 'completed' })
        .eq('id', new_data.request_id),
    );
  } catch (err: any) {
    //
  }
};
