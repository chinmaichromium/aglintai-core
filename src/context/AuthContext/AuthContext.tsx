import { Stack } from '@mui/material';
import mixpanel from '@utils/mixpanelInstance';
import { pageRoutes } from '@utils/pageRouting';
import { supabase } from '@utils/supabaseClient';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { LoaderSvg } from '@/devlink';
import {
  AddressType,
  RecruiterType,
  SocialsType,
} from '@/src/types/data.types';
import toast from '@/src/utils/toast';

import { Session } from './types';

type UserMeta = {
  first_name: string;
  image_url: string;
  language: string;
  last_name: string;
  phone: string;
  role: string;
  timezone: string;
};

interface ContextValue {
  userDetails: Session | null;
  // eslint-disable-next-line no-unused-vars
  setUserDetails: (details: Session | null) => void;
  recruiter: RecruiterType | null;
  // eslint-disable-next-line no-unused-vars
  setRecruiter: Dispatch<SetStateAction<RecruiterType>>;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  handleUpdateProfile: (userMeta: UserMeta) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  handleUpdateEmail: (email: string) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  setLoading: (loading: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  handleLogout: (event: any) => Promise<void>;
}

const defaultProvider = {
  userDetails: null,
  setUserDetails: () => {},
  handleUpdateProfile: undefined,
  handleUpdateEmail: undefined,
  recruiter: null,
  setRecruiter: () => {},
  loading: true,
  setLoading: () => {},
  handleLogout: () => Promise.resolve(),
};

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    try {
      Cookie.remove('access_token');
      Cookie.set('access_token', session.access_token);
      mixpanel.identify(session.user.id);
      if (session?.user?.user_metadata?.role)
        mixpanel.people.set({
          $email: session.user.email,
          Role: 'Recruiter',
          'User ID': session?.user?.id,
        });
    } catch (error) {
      //
    }
  } else {
    Cookie.remove('access_token');
  }
});

export const useAuthDetails = () => useContext(AuthContext);
const AuthContext = createContext<ContextValue>(defaultProvider);
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<Session | null>(null);
  const [recruiter, setRecruiter] = useState<RecruiterType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  async function getSupabaseSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (!data?.session) {
        loading && setLoading(false);
        return;
      }

      if (data.session.user.new_email) {
        const { data: newData, error } = await supabase.auth.refreshSession();
        if (!error) {
          setUserDetails(newData.session);
        }
      }
      
      if (!error) {
        Cookie.remove('access_token');
        Cookie.set('access_token', data.session.access_token);
        setUserDetails(data.session);
        const { data: recruiter, error } = await supabase
          .from('recruiter')
          .select('*')
          .eq('user_id', data.session.user.id);
        if (!error) {
          setRecruiter({
            ...recruiter[0],
            address: recruiter[0]?.address as unknown as AddressType,
            socials: recruiter[0]?.socials as unknown as SocialsType,
          });
        }
      }
    } catch (err) {
      //
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      Cookie.remove('access_token');
      router.push('/signup');
    }
  };

  const handleUpdateProfile = async (userMeta: UserMeta): Promise<boolean> => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        ...userDetails.user.user_metadata,
        ...userMeta,
      },
    });
    if (data) {
      setUserDetails((prev) => {
        return {
          ...prev,
          user: data.user,
        };
      });
      return true;
    } else {
      toast.error(`Oops! Something went wrong. (${error.message})`);
      return false;
    }
  };

  const handleUpdateEmail = async (email: string): Promise<boolean> => {
    const { error } = await supabase.auth.updateUser(
      {
        email: email,
      },
      { emailRedirectTo: 'http://localhost:3000/loading' },
    );
    if (error) {
      toast.error(`Oops! Something went wrong. (${error.message})`);
      return false;
    } else {
      toast.success(`Confirmation email sent`);
      return true;
    }
  };
  useEffect(() => {
    getSupabaseSession();
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const redirect = window.location.href;
      if (isRoutePublic(router.route)) return;
      else if (!loading && !userDetails)
        router.push(`/signup?redirect=${encodeURIComponent(redirect)}`);
    }
  }, [router.isReady, loading]);

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
        recruiter,
        handleUpdateProfile,
        handleUpdateEmail,
        setRecruiter,
        loading,
        setLoading,
        handleLogout,
      }}
    >
      {loading ? <AuthLoader /> : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

const AuthLoader = () => {
  return (
    <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <LoaderSvg />
    </Stack>
  );
};

const isRoutePublic = (path = '') => {
  const whiteListedRoutes = [pageRoutes.LOGIN, pageRoutes.SIGNUP];
  for (const route of whiteListedRoutes) {
    if (path.startsWith(route)) return true;
  }
};
