import { Stack } from '@mui/material';
import { pageRoutes } from '@utils/pageRouting';
import { supabase } from '@utils/supabaseClient';
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
  RecruiterDB,
  RecruiterType,
  RecruiterUserType,
  RoleType,
  SocialsType,
} from '@/src/types/data.types';
import toast from '@/src/utils/toast';

import { Session } from './types';

interface ContextValue {
  userDetails: Session | null;
  // eslint-disable-next-line no-unused-vars
  setUserDetails: (details: Session | null) => void;
  recruiter: RecruiterType | null;
  // eslint-disable-next-line no-unused-vars
  setRecruiter: Dispatch<SetStateAction<RecruiterType>>;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  handleUpdateProfile: (userMeta: RecruiterUserType) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  handleUpdateEmail: (email: string) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  handleUpdatePassword: (password: string) => Promise<boolean>;
  // eslint-disable-next-line no-unused-vars
  setLoading: (loading: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  handleLogout: (event: any) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  updateRecruiter: (updateData: Partial<RecruiterDB>) => Promise<boolean>;
  recruiterUser: RecruiterUserType | null;
  role: RoleType;
}

const defaultProvider = {
  userDetails: null,
  setUserDetails: () => {},
  handleUpdateProfile: undefined,
  handleUpdateEmail: undefined,
  handleUpdatePassword: undefined,
  recruiter: null,
  setRecruiter: () => {},
  loading: true,
  setLoading: () => {},
  handleLogout: () => Promise.resolve(),
  updateRecruiter: async (updateData: Partial<RecruiterDB>) => {
    updateData;
    return true;
  },
  recruiterUser: null,
  role: null,
};

supabase.auth.onAuthStateChange((event, session) => {
  // console.log('session event: ', {
  //   event,
  //   time: new Date().toLocaleString(),
  //   session: session.access_token,
  //   cookie: Cookie.get('access_token'),
  // });
  if (event === 'SIGNED_OUT') {
    // delete cookies on sign out
    const expires = new Date(0).toUTCString();
    document.cookie = `access_token=; path=/; expires=${expires}; SameSite=Lax; secure`;
  } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    const maxAge = 6 * 24 * 60 * 60; // 6 days, never expires
    document.cookie = `access_token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
  }
});

export const useAuthDetails = () => useContext(AuthContext);
const AuthContext = createContext<ContextValue>(defaultProvider);
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<Session | null>(null);
  const [recruiter, setRecruiter] = useState<RecruiterType | null>(null);
  const [recruiterUser, setRecruiterUser] = useState<RecruiterUserType | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [role, setRole] = useState<RoleType>(null);
  async function getSupabaseSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (!data?.session) {
        router.push(pageRoutes.LOGIN);
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
        setUserDetails(data.session);
        const { data: recruiterUser, error: errorUser } = await supabase
          .from('recruiter_user')
          .select('*')
          .eq('user_id', data.session.user.id);
        if (!errorUser && recruiterUser.length > 0) {
          if (recruiterUser[0].is_deactivated) {
            // route something don't login
          }
          // @ts-ignore
          (recruiterUser[0].join_status || '').toLocaleLowerCase() ===
            'invited' &&
            handleUpdateProfile(
              { join_status: 'joined' },
              data.session.user.id,
            );
          setRecruiterUser(recruiterUser[0]);
          const { data: recruiter, error } = await supabase
            .from('recruiter')
            .select('*')
            .eq('id', recruiterUser[0].recruiter_id);
          if (!error && recruiter.length > 0) {
            setRecruiter({
              ...recruiter[0],
              address: recruiter[0]?.address as unknown as AddressType,
              socials: recruiter[0]?.socials as unknown as SocialsType,
            });
            const temp = recruiter[0]?.roles[String(recruiterUser[0]?.role)];
            temp && setRole(temp as RoleType);
          }
        } else {
          router.push(pageRoutes.SIGNUP);
        }
      }
    } catch (err) {
      router.push(pageRoutes.LOGIN);
      //
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/signup');
    }
  };

  const handleUpdateProfile = async (
    details: Partial<RecruiterUserType>,
    id?: string,
  ): Promise<boolean> => {
    const { data, error } = await supabase
      .from('recruiter_user')
      .update(details)
      .eq('user_id', id || userDetails.user.id)
      .select();
    if (!error) {
      setRecruiterUser(data[0]);
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

  const handleUpdatePassword = async (password: string): Promise<boolean> => {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) {
      toast.error(`Oops! Something went wrong. (${error.message})`);
      return false;
    } else {
      toast.success(`Password reset successfully`);
      return true;
    }
  };

  const updateRecruiter = (updateData: Partial<RecruiterDB>) => {
    return updateRecruiterInDb(updateData, recruiter.id).then((data) => {
      if (data) {
        setRecruiter({ ...recruiter, ...data });
        return true;
      }
      return false;
    });
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
        handleUpdatePassword,
        setRecruiter,
        loading,
        setLoading,
        handleLogout,
        updateRecruiter,
        recruiterUser,
        role,
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

const updateRecruiterInDb = async (
  updateData: Partial<RecruiterDB>,
  id: string,
) => {
  const { data, error } = await supabase
    .from('recruiter')
    .update(updateData)
    .eq('id', id)
    .select();
  if (!error && data.length) {
    delete data[0].socials;
    delete data[0].address;
    return data[0] as Omit<RecruiterDB, 'address' | 'socials'>;
  }
  return null;
};
