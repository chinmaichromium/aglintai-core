'use client';

import { useToast } from '@components/hooks/use-toast';
import axios from 'axios';
import { type ReactNode, useEffect } from 'react';

import { Loader } from '@/common/Loader';
import { useTenant } from '@/company/hooks';
import { useRouterPro } from '@/hooks/useRouterPro';
import { api } from '@/trpc/client';

const AuthHoc = () => {
  return (
    <>
      <Google />
    </>
  );
};

const Google = () => {
  const router = useRouterPro();
  const { toast } = useToast();
  const { recruiter_user } = useTenant();
  const { code } = router.queryParams;
  const { mutateAsync } = api.user.update_current_user.useMutation();
  const { mutateAsync: getAuthEmail } = api.user.get_oauth_user.useMutation();

  useEffect(() => {
    if (recruiter_user) {
      if (!code) return;

      (async () => {
        try {
          const tokens = await getTokens(code as string);
          const email = await getAuthEmail({
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
          });
          if (!email) {
            toast({
              variant: 'destructive',
              title: 'Error',
              description:
                'Unable to get email from Google. Please contact support.',
            });
          }

          await mutateAsync({
            is_calendar_connected: true,
            schedule_auth: {
              access_token: tokens.access_token,
              refresh_token: tokens.refresh_token,
              expiry_date: tokens.expiry_date,
              email: email,
            },
          });
        } catch (error) {
          if (error instanceof Error) {
            toast({
              variant: 'destructive',
              title: 'Error',
              description: 'Something went wrong. Please try again.',
            });
          }
        } finally {
          const path = localStorage.getItem('gmail-redirect-path');
          if (path) {
            router.replace(path);
          } else {
            router.replace('/jobs');
          }
        }
      })();
    }
  }, [recruiter_user]);

  return (
    <>
      <Loader />
    </>
  );
};

AuthHoc.publicProvider = (page: ReactNode) => {
  return <>{page}</>;
};

export default AuthHoc;

const getTokens = async (code: string) => {
  const { data } = await axios.post('/api/scheduling/get-accesstoken', {
    code,
  });

  return data as {
    access_token: string;
    refresh_token: string;
    expiry_date: number;
  };
};
