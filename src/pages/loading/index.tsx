import { Box } from '@mui/material';
import { pageRoutes } from '@utils/pageRouting';
import { supabase } from '@utils/supabaseClient';
import axios from 'axios';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import React, { useEffect } from 'react';
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
        if (handleEmail(userDetails.user.email).error) {
          await axios.post('/api/supabase/deleteuser', {
            user_id: userDetails?.user?.id,
          });
          toast.error('Please signup/login with company email');
          await handleLogout();
          return;
        }
        await createUser();
      } else {
        toast.error('Unable to login. Please try again later');
        router.push(pageRoutes.LOGIN);
      }
    } catch (error) {
      toast.error('Unable to login. Please try again later');
      router.push(pageRoutes.LOGIN);
    }
  };

  const createUser = async () => {
    supabase
      .from('recruiter_relation')
      .select('*')
      .eq('user_id', userDetails?.user?.id)
      .then(async ({ data, error }) => {
        if (!error) {
          //post hog logging
          posthog.identify(userDetails.user.email, {
            Email: userDetails.user.email,
          });
          if (data.length == 0) {
            (async () => {
              await refershAccessToken();

              const { error: erroruser } = await supabase
                .from('recruiter_user')
                .insert({
                  user_id: userDetails.user.id,
                  email: userDetails.user.user_metadata.email,
                  first_name: splitFullName(
                    userDetails.user.user_metadata.full_name,
                  ).firstName,
                  last_name: !userDetails.user.user_metadata.first_name
                    ? splitFullName(userDetails.user.user_metadata.full_name)
                        .lastName
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

                const { error } = await supabase.rpc(
                  'createrecuriterrelation',
                  {
                    in_recruiter_id: rec_id,
                    in_user_id: userDetails.user.id,
                    in_is_active: true,
                  },
                );

                if (error) {
                  throw new Error(error.message);
                }

                await supabase
                  .from('recruiter_user')
                  .update({ recruiter_id: rec_id })
                  .eq('user_id', userDetails.user.id);

                router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
              }
            })();
          } else {
            if (!userDetails?.user.user_metadata?.role) {
              router.push(`${pageRoutes.SIGNUP}?step=${stepObj.type}`);
              return;
            }
            const { data: recruiter, error: recruiter_error } = await supabase
              .from('recruiter')
              .select()
              .eq('id', data[0].recruiter_id);
            if (!recruiter_error && recruiter[0].industry) {
              router.push(
                localStorage.getItem('redirectURL') || pageRoutes.JOBS,
              );
              localStorage.removeItem('redirectURL');
            } else {
              router.push(`${pageRoutes.SIGNUP}?step=${stepObj.detailsOne}`);
            }
          }
        } else {
          router.push(pageRoutes.LOGIN);
        }
      });
  };

  const refershAccessToken = async () => {
    await supabase.auth.refreshSession({
      refresh_token: userDetails?.refresh_token,
    });
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
      <Seo
        title='Aglint | Loading'
        description='AI Powered Talent Development Platform.'
      />
      <LoaderSvg />
    </Box>
  );
}

Loading.getProvider = function getProvider(page) {
  return <AuthProvider>{page}</AuthProvider>;
};

Loading.getLayout = (page) => {
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
