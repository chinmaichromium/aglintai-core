import { type NextRequest } from 'next/server';

import { routeHandlerFactory } from '@/utils/apiUtils/responseFactoryPro';
import { getSupabaseServer } from '@/utils/supabase/supabaseAdmin';

import { getDecryptKey, getSyncDetails } from '../util';
import { runFullSync } from './process';
import { type GreenHouseFullSyncAPI } from './type';

export function POST(request: NextRequest) {
  const method = routeHandlerFactory<GreenHouseFullSyncAPI>('POST', request);
  return method(
    async ({ body }) => {
      const { recruiter_id, key } = body;
      const supabaseAdmin = getSupabaseServer();
      const syncData = await getSyncDetails(supabaseAdmin, recruiter_id);
      const decryptKey = await getDecryptKey(key);
      await runFullSync({ supabaseAdmin, recruiter_id, syncData, decryptKey });
      return { success: true };
    },
    ['recruiter_id', 'key'],
  );
}
