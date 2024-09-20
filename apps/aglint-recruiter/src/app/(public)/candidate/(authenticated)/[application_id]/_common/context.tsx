'use client';
import { useParams } from 'next/navigation';
import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

<<<<<<< HEAD
import { useRouterPro } from '@/hooks/useRouterPro';
=======
import { Loader } from '@/components/Common/Loader';
>>>>>>> 77f7810b642e48bbb306a89eabe7308539729d90
import { api } from '@/trpc/client';
import { supabase } from '@/utils/supabase/client';

const useCandidatePortalContext = () => {
  const params = useParams();
  const application_id = params?.application as string;
  void api.candidatePortal.get_profile.usePrefetchQuery({ application_id });
  return { application_id };
};

export const CandidatePortalContext =
  createContext<ReturnType<typeof useCandidatePortalContext>>(undefined);

export const CandidatePortalProvider = async ({
  children,
}: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const value = useCandidatePortalContext();
  const router = useRouterPro();

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push(
            `${process.env.NEXT_PUBLIC_HOST_NAME}/candidate/${value.application_id}/login`,
          );
        }
      } catch {
        //
      } finally {
        setIsLoading(false);
      }
    };

    getSession();
  }, []);

  if (isLoading) return <Loader />;

  const finalValue = { ...value };
  return (
    <CandidatePortalContext.Provider value={finalValue}>
      {children}
    </CandidatePortalContext.Provider>
  );
};
