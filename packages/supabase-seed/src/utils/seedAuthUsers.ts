import {supabaseWrap} from '@aglint/shared-utils';
import {supabaseAdmin} from 'src/supabase/SupabaseAdmin';
import {DatabaseTable} from '@aglint/shared-types';
import {getJsonRecords} from 'src/data';

export const seedAuthUsers = async () => {
  let all_auth_users: (
    | DatabaseTable['recruiter']
    | DatabaseTable['recruiter_user']
  )[] = [];
  const recruiter_seed_data = (await getJsonRecords(
    'recruiter'
  )) as DatabaseTable['recruiter'][];
  const recruiter_user_seed_data = (await getJsonRecords(
    'recruiter_user'
  )) as DatabaseTable['recruiter_user'][];
  all_auth_users = [...recruiter_seed_data, ...recruiter_user_seed_data];

  const uniq_auth_users = new Set<string>();
  all_auth_users = all_auth_users.filter(u => {
    if (!uniq_auth_users.has(u.email)) {
      uniq_auth_users.add(u.email);
      return true;
    }
    return false;
  });
  const promises = all_auth_users.map(async rec => {
    supabaseWrap(
      await supabaseAdmin.rpc('reset_auth_users_identities', {
        user_email: rec.email,
      })
    );

    const user = supabaseWrap(
      await supabaseAdmin.auth.signUp({
        email: rec.email,
        password: 'Welcome@123',
      })
    );

    return user.user;
  });

  return await Promise.all(promises);
};
