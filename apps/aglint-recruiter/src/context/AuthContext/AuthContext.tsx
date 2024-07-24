/* eslint-disable no-unused-vars */
import {
  DatabaseEnums,
  DatabaseTable,
  DatabaseTableInsert,
  DatabaseTableUpdate,
} from '@aglint/shared-types';
import {
  RecruiterRelationsType,
  RecruiterUserType,
  SocialsType,
} from '@aglint/shared-types';
import { Stack } from '@mui/material';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useFeatureFlagEnabled } from 'posthog-js/react';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { LoaderSvg } from '@/devlink/LoaderSvg';
import axios from '@/src/client/axios';
import { API_getMembersWithRole } from '@/src/pages/api/getMembersWithRole/type';
import { type GetUserDetailsAPI } from '@/src/pages/api/getUserDetails/type';
import { API_setMembersWithRole } from '@/src/pages/api/setMembersWithRole/type';
import { emailTemplateQueries } from '@/src/queries/email-templates';
import { featureFlag } from '@/src/utils/Constants';
import ROUTES from '@/src/utils/routing/routes';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { Session } from './types';
import { updateJoinedStatus } from './utils';

export interface ContextValue {
  userDetails: Session | null;
  userCountry: string | null;
  setUserDetails: (details: Session | null) => void;
  recruiter: GetUserDetailsAPI['response']['recruiter'];
  userPermissions: {
    role: string;
    permissions: Partial<{
      [key in DatabaseTable['permissions']['name']]: boolean;
    }>;
  };
  recruiter_id: string | null;
  setRecruiter: Dispatch<SetStateAction<this['recruiter']>>;
  allRecruiterRelation: RecruiterRelationsType[];
  setAllRecruiterRelation: Dispatch<SetStateAction<RecruiterRelationsType[]>>;
  loading: boolean;
  handleUpdateEmail: (email: string, showToast?: boolean) => Promise<boolean>;
  setLoading: (loading: boolean) => void;
  handleLogout: () => Promise<void>;
  recruiterUser: RecruiterUserType | null;
  setRecruiterUser: Dispatch<SetStateAction<RecruiterUserType>>;
  members: RecruiterUserType[];
  allMember: RecruiterUserType[];
  setMembers: Dispatch<SetStateAction<RecruiterUserType[]>>;
  handleMemberUpdate: (x: {
    user_id: string;
    data: DatabaseTableUpdate['recruiter_user'] & {
      role_id?: string;
      manager_id?: string;
    };
    updateDB?: boolean;
  }) => Promise<boolean>;
  handleOfficeLocationsUpdate: (
    x: Parameters<typeof manageOfficeLocation>[0],
  ) => Promise<boolean>;
  handleDepartmentsUpdate: (
    x: Parameters<typeof manageDepartments>[0],
  ) => Promise<boolean>;
  isAllowed: (
    //checkPermission
    roles: DatabaseEnums['user_roles'][],
    flags?: featureFlag[],
  ) => boolean;
  allowAction: <T extends Function | ReactNode>( //ifAllowed
    func: T,
    role: DatabaseEnums['user_roles'][],
  ) => T;
  isAssessmentEnabled: boolean;
  isScreeningEnabled: boolean;
  isSchedulingEnabled: boolean;
  emailTemplates: UseQueryResult<
    {
      created_at: string;
      id: string;
      recruiter_id: string;
      subject: string;
      body: string;
      type: DatabaseTable['company_email_template']['type'];
      from_name: string;
    }[],
    Error
  >;
}

const defaultProvider: ContextValue = {
  userDetails: null,
  userCountry: 'us',
  setUserDetails: () => {},
  handleUpdateEmail: undefined,
  recruiter: null,
  userPermissions: null,
  recruiter_id: null,
  setRecruiter: () => {},
  allRecruiterRelation: null,
  setAllRecruiterRelation: () => {},
  loading: true,
  setLoading: () => {},
  handleLogout: () => Promise.resolve(),
  recruiterUser: null,
  setRecruiterUser: () => {},
  members: [],
  allMember: [],
  setMembers: () => {},
  handleMemberUpdate: (x) => Promise.resolve(true),
  handleOfficeLocationsUpdate: (x) => Promise.resolve(true),
  handleDepartmentsUpdate: (x) => Promise.resolve(true),
  isAllowed: (role) => true,
  allowAction: (func, role) => func,
  isAssessmentEnabled: false,
  isScreeningEnabled: false,
  isSchedulingEnabled: false,
  emailTemplates: undefined,
};

export const useAuthDetails = () => useContext(AuthContext);
const AuthContext = createContext<ContextValue>(defaultProvider);
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<Session | null>(null);
  const [recruiter, setRecruiter] = useState<ContextValue['recruiter']>(null);
  const [recruiterUser, setRecruiterUser] = useState<RecruiterUserType | null>(
    null,
  );
  const recruiter_id = recruiter?.id ?? null;
  const [allRecruiterRelation, setAllRecruiterRelation] =
    useState<RecruiterRelationsType[]>(null);
  const [userCountry, setUserCountry] = useState('us');
  const [loading, setLoading] = useState<boolean>(true);
  const [members, setMembers] = useState<RecruiterUserType[]>([]);
  const [userPermissions, setUserPermissions] =
    useState<ContextValue['userPermissions']>(null);

  const getMembersFromDB = async () => {
    setMembers(
      await getMembers().catch(() => {
        toast.error('failed load Members');
        return [];
      }),
    );
  };

  async function getSupabaseSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (!data?.session || error) {
        toast.error('Session not found');
        handleLogout();
        return;
      }
      if (data?.session?.user?.new_email) {
        const { data: newData, error } = await supabase.auth.refreshSession();
        if (!error) {
          setUserDetails(newData.session);
        }
      } else {
        setUserDetails(data.session);
      }

      if (router.route !== ROUTES['/loading']() && data?.session?.user?.id) {
        await getRecruiterDetails(data.session);
      }
    } catch (err) {
      router.push(ROUTES['/login']());
      handleLogout();
    }
  }

  const getRecruiterDetails = async (userDetails: Session) => {
    const recruiterRel = await getUserDetails();
    // get user permissions
    const rolePermissions: ContextValue['userPermissions'] = {
      role: recruiterRel?.roles?.name || null,
      permissions:
        recruiterRel?.roles?.role_permissions.reduce(
          (prev, curr) => {
            prev[curr.permissions.name] = true;
            return prev;
          },
          {} as ContextValue['userPermissions']['permissions'],
        ) || {},
    };

    setUserPermissions(rolePermissions);

    if (recruiterRel?.recruiter_user) {
      posthog.identify(userDetails.user.email, {
        Email: userDetails.user.email,
        CompanyId: recruiterRel.recruiter.id,
      });
      const recruiterUser = recruiterRel.recruiter_user;

      if (recruiterUser.status !== 'active') {
        updateJoinedStatus(recruiterUser.user_id);
      }

      setRecruiterUser({
        ...recruiterUser,
        primary: recruiterRel.primary,
        role: recruiterRel.roles.name,
        role_id: recruiterRel.role_id,
        manager_id: recruiterRel.manager_id,
        manager_details: recruiterRel.manager_details
          ? {
              name: `${recruiterRel.manager_details.first_name} ${recruiterRel.manager_details.last_name}`.trim(),
              position: recruiterRel.manager_details.position,
            }
          : null,
        created_by: recruiterRel.created_by,
        recruiter_relation_id: recruiterRel.id,
      });
      setRecruiter({
        ...recruiterRel.recruiter,
        socials: recruiterRel.recruiter?.socials as unknown as SocialsType,
      });
      setLoading(false);

      const role = recruiterRel.roles.name;

      if (rolePermissions.permissions['view_users']) {
        await getMembersFromDB();
      }
    } else {
      toast.error('Something went wrong! Please try logging in again.');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({
      scope: 'local',
    });
    posthog.reset();
    if (!error) {
      router.push(ROUTES['/login']());
    }
  };

  const fetchUserLocation = async () => {
    try {
      const res = await fetch('https://ipinfo.io/json', {
        headers: {
          Authorization: `Bearer e82b96e5cb0802`,
        },
      });
      const data = await res.json();

      const country = data.country; // Extract the country code from the response
      setUserCountry(country?.toLowerCase() ?? 'us'); // Set the default country based on the user's location
    } catch (error) {
      setUserCountry('us');
    }
  };

  const handleUpdateEmail = async (
    email: string,
    showToast: boolean = false,
  ): Promise<boolean> => {
    const { error } = await supabase.auth.updateUser(
      {
        email: email,
      },
      { emailRedirectTo: `${process.env.NEXT_PUBLIC_HOST_NAME}/login` },
    );
    if (error) {
      toast.error(`Oops! Something went wrong. (${error.message})`);
      return false;
    } else {
      showToast && toast.success(`Confirmation email sent.`);
      return true;
    }
  };

  const handleMemberUpdate: ContextValue['handleMemberUpdate'] = async ({
    user_id,
    data,
    updateDB = true,
  }) => {
    if (!user_id && data && recruiter.id) return Promise.resolve(false);
    if (updateDB) {
      data = await updateMember({
        data: { ...data, user_id },
      });
    }
    if (data) {
      setMembers((prev) =>
        prev.map((item) => {
          return data.user_id === item.user_id
            ? ({ ...item, ...data } as RecruiterUserType)
            : item;
        }),
      );
      return true;
    }
    return false;
  };
  const handleOfficeLocationsUpdate: ContextValue['handleOfficeLocationsUpdate'] =
    async (data) => {
      let res = await manageOfficeLocation(data, recruiter.office_locations);
      if (res) {
        setRecruiter((pre) => {
          const temp = structuredClone(pre);
          temp.office_locations = res;
          return temp;
        });
        return true;
      }
      return false;
    };
  const handleDepartmentsUpdate: ContextValue['handleDepartmentsUpdate'] =
    async (data) => {
      let res = await manageDepartments(data, recruiter.departments);
      if (res) {
        setRecruiter((pre) => {
          const temp = structuredClone(pre);
          temp.departments = res;
          return temp;
        });
        return true;
      }
      return false;
    };

  const isAssessmentEnabled = false; //useFeatureFlagEnabled('isNewAssessmentEnabled');
  const isScreeningEnabled = false; //useFeatureFlagEnabled('isPhoneScreeningEnabled');
  const isSchedulingEnabled = useFeatureFlagEnabled('isSchedulingEnabled');

  // role based access
  const isAllowed: ContextValue['isAllowed'] = (roles, flags) => {
    if (recruiterUser) {
      if (flags?.length)
        for (let item of flags) {
          if (!posthog.isFeatureEnabled(item)) return false;
        }
      return false;
    }
    return false;
  };

  const allowAction: ContextValue['allowAction'] = <
    T extends Function | ReactNode,
  >(
    func: T,
    role,
  ) => {
    if (recruiterUser && role.includes(recruiterUser.role)) {
      return func;
    }

    // Return an empty function if func is a function
    if (typeof func === 'function') {
      return (() => {}) as unknown as T;
    }
    // Return an empty fragment if func is a React node
    return (<></>) as T;
  };

  useEffect(() => {
    Promise.all([getSupabaseSession(), fetchUserLocation()]);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const redirect = window.location.href;
      if (isRoutePublic(router.route)) return;
      else if (!loading && !userDetails?.user)
        router.push(`/login?redirect=${encodeURIComponent(redirect)}`);
    }
  }, [router.isReady, loading]);

  useEffect(() => {
    if (router.isReady && userDetails?.user) {
      const feature = pageFeatureMapper[`/${router.pathname.split('/')[1]}`];
      if (feature && !posthog.isFeatureEnabled(feature)) {
        // eslint-disable-next-line no-console
        console.log('Feature not enabled');
        router.push(ROUTES['/jobs']());
      }
    }
  }, [router.pathname, userDetails]);

  const emailTemplates = useQuery(
    emailTemplateQueries.emailTemplates(recruiter_id),
  );

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        userCountry,
        setUserDetails,
        recruiter,
        userPermissions,
        recruiter_id,
        handleUpdateEmail,
        setRecruiter,
        loading,
        setLoading,
        handleLogout,
        recruiterUser,
        allRecruiterRelation: allRecruiterRelation,
        setAllRecruiterRelation,
        setRecruiterUser,
        members: (members || []).filter((item) => item.status == 'active'),
        allMember: members,
        setMembers,
        handleMemberUpdate,
        handleOfficeLocationsUpdate,
        handleDepartmentsUpdate,
        isAllowed,
        allowAction,
        isAssessmentEnabled,
        isScreeningEnabled,
        isSchedulingEnabled,
        emailTemplates,
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
  const whiteListedRoutes = [
    ROUTES['/login'](),
    ROUTES['/signup'](),
    ROUTES['/assessment-new'](),
    ROUTES['/candidate-phone-screening'](),
  ];
  for (const route of whiteListedRoutes) {
    if (path.startsWith(route)) {
      return true;
    }
  }
};

const pageFeatureMapper = {
  [ROUTES['/assistant']()]: 'isAssistantEnabled',
  [ROUTES['/assessment-new']()]: 'isNewAssessmentEnabled',
  [ROUTES['/agent']()]: 'isAgentEnabled',
  [ROUTES['/screening']()]: 'isPhoneScreeningEnabled',
  [ROUTES['/support']()]: 'isSupportEnabled',
  [ROUTES['/candidates/history']()]: 'isSourcingEnabled',
};

async function getUserDetails() {
  return axios.call<GetUserDetailsAPI>('GET', '/api/getUserDetails', {});
}

const updateMember = ({
  data,
}: {
  data: Omit<DatabaseTableUpdate['recruiter_user'], 'user_id'> & {
    user_id: string;
    role_id?: string;
    manager_id?: string;
  };
}) => {
  return axios
    .call<API_setMembersWithRole>('POST', '/api/setMembersWithRole', {
      data,
    })
    .then((res) => res.data);
};

const getMembers = () => {
  return axios.call<API_getMembersWithRole>(
    'GET',
    '/api/getMembersWithRole',
    null,
  );
};

const manageOfficeLocation = async (
  payload:
    | { type: 'insert'; data: DatabaseTableInsert['office_locations'] }
    | { type: 'delete'; data: number }
    | { type: 'update'; data: DatabaseTableUpdate['office_locations'] },
  office_locations: DatabaseTable['office_locations'][],
) => {
  let temp = structuredClone(office_locations);
  const query = supabase.from('office_locations');
  switch (payload.type) {
    case 'insert': {
      const res = (
        await query.insert(payload.data).select().single().throwOnError()
      ).data;
      temp.push(res);
      break;
    }
    case 'update': {
      const res = (
        await query.update(payload.data).select().single().throwOnError()
      ).data;
      temp = temp.map((item) => (item.id === res.id ? res : item));
      break;
    }
    case 'delete': {
      await query.delete().eq('id', payload.data).throwOnError();
      temp = temp.filter((item) => payload.data !== item.id);
      break;
    }
  }
  return temp;
};

const manageDepartments = async (
  payload:
    | { type: 'insert'; data: DatabaseTableInsert['departments'][] }
    | { type: 'delete'; data: number[] }
    | { type: 'update'; data: DatabaseTable['departments'][] },
  departments: Pick<DatabaseTable['departments'], 'id' | 'name'>[],
) => {
  let temp = structuredClone(departments);
  const query = supabase.from('departments');
  switch (payload.type) {
    case 'insert': {
      const res = (await query.insert(payload.data).select().throwOnError())
        .data;
      temp = [...temp, ...res];
      break;
    }
    case 'update': {
      const res = (
        await query
          .upsert(payload.data, { onConflict: 'id' })
          .select()
          .throwOnError()
      ).data;
      temp = temp.map((item) => {
        const sRes = res.find((r) => r.id === item.id);
        return sRes ? sRes : item;
      });
      break;
    }
    case 'delete': {
      await query.delete().in('id', payload.data).throwOnError();
      temp = temp.filter((item) => !payload.data.includes(item.id));
      break;
    }
  }
  return temp;
};
