import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

import { InviteUserAPIType } from '@/src/components/CompanyDetailComp/TeamManagement/utils';
import { CustomDatabase } from '@/src/types/customSchema';
import { companyType } from '@/src/utils/userRoles';

import { server_getUserRoleAndId } from '../reset_password';

export const supabase = createClient<CustomDatabase>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

const redirectTo = `${process.env.NEXT_PUBLIC_HOST_NAME}/reset-password`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { users, recruiter_id } =
      req.body as unknown as InviteUserAPIType['in'];
    if (!users || !recruiter_id) {
      return res
        .status(400)
        .send({ message: 'Invalid request. Required props missing.' });
    }

    // const { role, recruiter_id: companyId } = await getRecruiterUser(id);

    const { role, user_id: id } = await server_getUserRoleAndId({
      getVal: (name) => req.cookies[String(name)],
    });

    if (role === 'admin') {
      let user_id: string = null;
      try {
        for (let user of users) {
          const { data, error } = await supabase.auth.admin.createUser({
            email: user.email,
            password: 'Welcome@123',
            user_metadata: {
              name: `${user.first_name} ${user.last_name || ''}`.trim(),
              role: companyType.COMPANY,
              roles: companyType.COMPANY,
              is_invite: 'true',
              // invite_user: recruiter_user,
            },
            email_confirm: true,
          });

          if (error) throw new Error(error.message);
          user_id = data.user.id;
          const email = data.user.email;
          const userId = data.user.id;
          const { data: recUser, error: errorRecUser } = await supabase
            .from('recruiter_user')
            .insert({
              user_id: userId,
              first_name: user.first_name,
              last_name: user.last_name,
              position: user.designation,
              employment: user.employment,
              department: user.department,
              email: email,
              join_status: 'invited',
              scheduling_settings: user.scheduling_settings,
              interview_location: user.interview_location,
            })
            .select();

          if (errorRecUser) throw new Error(error.message);

          const { error: relationError } = await supabase
            .from('recruiter_relation')
            .insert({
              recruiter_id,
              user_id: userId,
              role: user.role,
              is_active: true,
              created_by: id,
            })
            .select('*');
          if (relationError) {
            throw new Error(
              'user relation creation failed!\n message' +
                relationError.message,
            );
          }

          const { error: resetEmail } =
            await supabase.auth.resetPasswordForEmail(email, {
              redirectTo,
            });
          if (resetEmail) {
            throw new Error('Sending reset password failed!');
          }

          return res.status(200).send({
            created: true,
            error: null,
            user: recUser[0],
          });
        }
      } catch (error: any) {
        user_id && supabase.auth.admin.deleteUser(user_id);
        return res.status(200).send({ created: null, error: error.message });
      }
    }
    return res.status(200).send({ created: null, error: 'Permission denied!' });
  }
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed!');
}

// export const checkPermissionsId = async ({
//   getVal,
//   // recruiter_id,
// }: {
//   // eslint-disable-next-line no-unused-vars
//   getVal: (name: string) => string;
//   // roles: DatabaseEnums['user_roles'][];
//   // recruiter_id: string;
// }) => {
//   try {
//     const supabase = createServerClient<CustomDatabase>(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//       {
//         cookies: {
//           get(name: string) {
//             return getVal(name);
//           },
//         },
//       },
//     );

//     return await supabase.auth.getUser().then(({ data, error }) => {
//       if (error) throw new Error(error.message);
//       if (data.user.id) {
//         return (
//           supabase
//             .from('recruiter_relation')
//             .select('role')
//             .eq('user_id', data.user.id)
//             // .eq('recruiter_id', recruiter_id)
//             .single()
//             .then(({ data: dataR, error }) => {
//               if (error) throw new Error(error.message);
//               return { role: dataR.role, id: data.user.id };
//             })
//         );
//       }
//       throw new Error('Failed to load auth user.');
//     });
//   } catch (error) {
//     throw new Error(error);
//   }
// };
