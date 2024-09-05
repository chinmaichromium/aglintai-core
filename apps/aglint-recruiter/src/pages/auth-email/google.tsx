import { supabaseWrap } from '@aglint/shared-utils';
import { useToast } from '@components/hooks/use-toast';
import { LoaderSvg } from '@devlink/LoaderSvg';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import {
  AuthProvider,
  useAuthDetails,
} from '@/context/AuthContext/AuthContext';
import { supabase } from '@/utils/supabase/client';

const AuthHoc = () => {
  return (
    <>
      <AuthProvider>
        <Google />
      </AuthProvider>
    </>
  );
};

const Google = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { recruiterUser, setRecruiterUser } = useAuthDetails();
  useEffect(() => {
    if (router.isReady && recruiterUser) {
      const { code } = router.query;
      if (!code) return;

      (async () => {
        try {
          const { access_token, refresh_token, expiry_date } = await getTokens(
            code as string,
          );
          if (!access_token || !refresh_token)
            throw new Error('no tokens found');
          const email = await getUserEmail({ access_token, refresh_token });
          const authEmailDetails = {
            access_token,
            refresh_token,
            email,
            provider: 'google',
            exp: '',
            expiry_date,
          };

          setRecruiterUser((prev) => ({
            ...prev,
            email_auth: authEmailDetails,
          }));

          supabaseWrap(
            await supabase
              .from('recruiter_user')
              .update({
                email_auth: authEmailDetails,
              })
              .eq('user_id', recruiterUser.user_id),
          );

          const path = localStorage.getItem('gmail-redirect-path');
          if (path) {
            return router.replace(path);
          } else {
            return router.replace('/jobs');
          }
        } catch (err) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Something went wrong. Please try again.',
          });
        }
      })();
    }
  }, [router.isReady]);

  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'center'}
        width={'100vw'}
        justifyContent={'center'}
        height={'100vh'}
      >
        <LoaderSvg />
      </Stack>
    </>
  );
};

AuthHoc.publicProvider = (page) => {
  return <>{page}</>;
};

export default AuthHoc;

const getTokens = async (code: string) => {
  const { data } = await axios.post('/api/email-outreach/get-accesstoken', {
    code,
  });
  return data as {
    access_token: string;
    refresh_token: string;
    expiry_date: number;
  };
};

const getUserEmail = async ({ access_token, refresh_token }) => {
  const { data } = await axios.post('/api/email-outreach/get-user-email', {
    access_token,
    refresh_token,
  });
  return data;
};
