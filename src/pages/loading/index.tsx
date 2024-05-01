import { Box } from '@mui/material';
import { pageRoutes } from '@utils/pageRouting';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LoaderSvg } from '@/devlink';
import Seo from '@/src/components/Common/Seo';
import {
  handleEmail,
  stepObj,
} from '@/src/components/SignUpComp/SlideSignup/utils';
import {
  AuthProvider,
  useAuthDetails,
} from '@/src/context/AuthContext/AuthContext';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

export default function Loading() {
  const { userDetails, handleLogout } = useAuthDetails();
  const router = useRouter();

  useEffect(() => {
    handleUser();
  }, [userDetails]);

  const handleUser = async () => {
    try {
      if (userDetails?.user?.id) {
        if (
          handleEmail(userDetails.user.email).error &&
          (await checkRelation())
        ) {
          await axios.post('/api/supabase/deleteuser', {
            user_id: userDetails?.user?.id,
          });
          toast.error('Please signup with company email.');
          await handleLogout();
          return;
        } else {
          await createUser();
        }
      } else {
        toast.error('Unable to login. Please try again.');
        router.push(pageRoutes.LOGIN);
        await handleLogout();
      }
    } catch (error) {
      toast.error('Unable to login. Please try again.');
      router.push(pageRoutes.LOGIN);
      await handleLogout();
    }
  };

  const checkRelation = async () => {
    const { data, error } = await supabase
      .from('recruiter_relation')
      .select('*')
      .eq('user_id', userDetails?.user?.id);
    if (error) {
      throw new Error(error.message);
    } else {
      if (data.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const createUser = async () => {
    if (!userDetails?.user?.id) return;
    try {
      const relationData = await getRelationsDetails({
        user_id: userDetails.user.id,
      });
      if (relationData?.recruiter_user) {
        if (!userDetails?.user.user_metadata?.role) {
          router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
          return;
        }
        if (userDetails?.user.user_metadata?.is_invite === 'true') {
          await supabase.auth.updateUser({
            data: { is_invite: 'false' }, // for invite user flow this is needed
          });
        }
        try {
          const recruiterRel = relationData;
          if (userDetails.user.email !== recruiterRel.recruiter_user.email) {
            await supabase
              .from('recruiter_user')
              .update({
                email: userDetails.user.email,
              })
              .eq('user_id', userDetails?.user?.id);
          }
          // // last login time stamp Update
          // const temp_time = new Date().toISOString();
          // supabase
          //   .from('recruiter_user')
          //   .update({ last_login: temp_time })
          //   .eq('user_id', userDetails.user.id)
          //   .then(() => {});
          // //last login END

          if (recruiterRel.role === 'interviewer') {
            router.push(
              localStorage.getItem('redirectURL') ||
                `${pageRoutes.SCHEDULING}?tab=mySchedules`,
            );
            localStorage.removeItem('redirectURL');
          } else if (recruiterRel.role === 'recruiter') {
            router.push(localStorage.getItem('redirectURL') || pageRoutes.JOBS);
            localStorage.removeItem('redirectURL');
          } else if (recruiterRel.role === 'recruiting_coordinator') {
            router.push(
              localStorage.getItem('redirectURL') || pageRoutes.SCHEDULING,
            );
            localStorage.removeItem('redirectURL');
          } else {
            router.push(localStorage.getItem('redirectURL') || pageRoutes.JOBS);
            localStorage.removeItem('redirectURL');
          }
        } catch {
          router.push(`${pageRoutes.SIGNUP}?step=${stepObj.detailsOne}`);
        }
      } else {
        const { error: erroruser } = await supabase
          .from('recruiter_user')
          .insert({
            user_id: userDetails.user.id,
            email: userDetails.user.user_metadata.email,
            first_name: splitFullName(userDetails.user.user_metadata.full_name)
              .firstName,
            last_name: !userDetails.user.user_metadata.first_name
              ? splitFullName(userDetails.user.user_metadata.full_name).lastName
              : userDetails.user.user_metadata.last_name,
            role: 'admin',
            profile_image: !userDetails.user.user_metadata.image_url
              ? null
              : userDetails.user.user_metadata.image_url,
            phone: !userDetails.user.user_metadata.phone
              ? ''
              : userDetails.user.user_metadata.phone,
          })
          .select();

        if (!erroruser) {
          const rec_id = uuidv4();

          await supabase.from('recruiter').insert({
            email: userDetails.user.email,
            name:
              userDetails?.user.user_metadata?.custom_claims?.hd?.replace(
                '.com',
                '',
              ) || '',
            id: rec_id,
          });

          const { error } = await supabase.rpc('createrecuriterrelation', {
            in_recruiter_id: rec_id,
            in_user_id: userDetails.user.id,
            in_is_active: true,
          });

          if (error) {
            throw new Error(error.message);
          }

          // await supabase
          //   .from('recruiter_user')
          //   .update({ recruiter_id: rec_id })
          //   .eq('user_id', userDetails.user.id);

          router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
        }
      }
    } catch {
      router.push(pageRoutes.LOGIN);
    }

    // supabase
    //   .from('recruiter_relation')
    //   .select('*')
    //   .eq('user_id', userDetails?.user?.id)
    //   .eq('is_active', true)
    //   .then(async ({ data, error }) => {
    //     if (!error) {
    //       if (data.length === 0) {
    //         const { error: erroruser } = await supabase
    //           .from('recruiter_user')
    //           .insert({
    //             user_id: userDetails.user.id,
    //             email: userDetails.user.user_metadata.email,
    //             first_name: splitFullName(
    //               userDetails.user.user_metadata.full_name,
    //             ).firstName,
    //             last_name: !userDetails.user.user_metadata.first_name
    //               ? splitFullName(userDetails.user.user_metadata.full_name)
    //                   .lastName
    //               : userDetails.user.user_metadata.last_name,
    //             role: 'admin',
    //             profile_image: !userDetails.user.user_metadata.image_url
    //               ? null
    //               : userDetails.user.user_metadata.image_url,
    //             phone: !userDetails.user.user_metadata.phone
    //               ? ''
    //               : userDetails.user.user_metadata.phone,
    //           })
    //           .select();

    //         if (!erroruser) {
    //           const rec_id = uuidv4();

    //           await supabase.from('recruiter').insert({
    //             email: userDetails.user.email,
    //             name:
    //               userDetails?.user.user_metadata?.custom_claims?.hd?.replace(
    //                 '.com',
    //                 '',
    //               ) || '',
    //             id: rec_id,
    //           });

    //           const { error } = await supabase.rpc('createrecuriterrelation', {
    //             in_recruiter_id: rec_id,
    //             in_user_id: userDetails.user.id,
    //             in_is_active: true,
    //           });

    //           if (error) {
    //             throw new Error(error.message);
    //           }

    //           // await supabase
    //           //   .from('recruiter_user')
    //           //   .update({ recruiter_id: rec_id })
    //           //   .eq('user_id', userDetails.user.id);

    //           router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
    //         }
    //       } else {
    //         if (!userDetails?.user.user_metadata?.role) {
    //           router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
    //           return;
    //         }
    //         if (userDetails?.user.user_metadata?.is_invite === 'true') {
    //           await supabase.auth.updateUser({
    //             data: { is_invite: 'false' }, // for invite user flow this is needed
    //           });
    //         }
    //         try {
    //           const recruiterRel = await getRelationsDetails(data[0].user_id);
    //           if (
    //             userDetails.user.email !== recruiterRel.recruiter_user.email
    //           ) {
    //             await supabase
    //               .from('recruiter_user')
    //               .update({
    //                 email: userDetails.user.email,
    //               })
    //               .eq('user_id', userDetails?.user?.id);
    //           }
    //           // // last login time stamp Update
    //           // const temp_time = new Date().toISOString();
    //           // supabase
    //           //   .from('recruiter_user')
    //           //   .update({ last_login: temp_time })
    //           //   .eq('user_id', userDetails.user.id)
    //           //   .then(() => {});
    //           // //last login END

    //           if (recruiterRel.role === 'interviewer') {
    //             router.push(
    //               localStorage.getItem('redirectURL') ||
    //                 `${pageRoutes.SCHEDULING}?tab=mySchedules`,
    //             );
    //             localStorage.removeItem('redirectURL');
    //           } else if (recruiterRel.role === 'recruiter') {
    //             router.push(
    //               localStorage.getItem('redirectURL') || pageRoutes.JOBS,
    //             );
    //             localStorage.removeItem('redirectURL');
    //           } else if (recruiterRel.role === 'recruiting_coordinator') {
    //             router.push(
    //               localStorage.getItem('redirectURL') || pageRoutes.SCHEDULING,
    //             );
    //             localStorage.removeItem('redirectURL');
    //           } else {
    //             router.push(
    //               localStorage.getItem('redirectURL') || pageRoutes.JOBS,
    //             );
    //             localStorage.removeItem('redirectURL');
    //           }
    //         } catch {
    //           router.push(`${pageRoutes.SIGNUP}?step=${stepObj.detailsOne}`);
    //         }
    //       }
    //     } else {
    //       router.push(pageRoutes.LOGIN);
    //     }
    //   });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Seo title='Loading' description='AI for People Products' />
      <LoaderSvg />
    </Box>
  );
}

Loading.privateProvider = function privateProvider(page) {
  return <AuthProvider>{page}</AuthProvider>;
};

Loading.publicProvider = (page) => {
  return <>{page}</>;
};

export const splitFullName = (name: string) => {
  const nameParts = name.trim().split(' ');

  if (nameParts.length === 1) {
    // If there is only one word, consider it as the first name and no last name
    return {
      firstName: nameParts[0],
      lastName: '',
    };
  } else {
    // If there are multiple words, the last word is the last name, and the rest are the first name
    const lastName = nameParts.pop();
    const firstName = nameParts.join(' ');
    return {
      firstName,
      lastName,
    };
  }
};

const getRelationsDetails = ({ user_id }: { user_id: string }) => {
  return supabase
    .from('recruiter_relation')
    .select(
      '*,recruiter_user!public_recruiter_relation_user_id_fkey(*),recruiter(industry)',
    )
    .eq('user_id', user_id)
    .eq('is_active', true)
    .single()
    .then(({ data, error }) => {
      if (error) throw new Error(error.message);
      return data;
    });
};
