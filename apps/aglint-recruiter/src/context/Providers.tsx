// eslint-disable-next-line simple-import-sort/imports
import { PostHogProvider } from 'posthog-js/react';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import Theme from '../context/Theme/Theme';
import { RolesAndPermissionsProvider } from '../context/RolesAndPermissions/RolesAndPermissionsContext';
import AppLayout from '../components/AppLayout';
import { BreadcrumProvider } from './BreadcrumContext/BreadcrumContext';
import { type PropsWithChildren, Suspense } from 'react';
import { ThemeProvider } from '@components/theme-provider';
import { TRPCReactProvider } from '../trpc/client';
import { TooltipProvider } from '@components/ui/tooltip';
import { JobsProvider } from '@/jobs/contexts';
import { WorkflowsProvider } from '@/workflows/contexts';

export const PrivateProviders = ({
  children,
  appRouter = false,
}: PropsWithChildren<{ appRouter?: boolean }>) => {
  return (
    <PublicProviders>
      <PostHogProvider>
        <AuthProvider>
          <RolesAndPermissionsProvider>
            <BreadcrumProvider>
              <JobsProvider>
                <WorkflowsProvider>
                  <TooltipProvider>
                    <AppLayout appRouter={appRouter}>{children}</AppLayout>
                  </TooltipProvider>
                </WorkflowsProvider>
              </JobsProvider>
            </BreadcrumProvider>
          </RolesAndPermissionsProvider>
        </AuthProvider>
      </PostHogProvider>
    </PublicProviders>
  );
};

export const PublicProviders = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
      <Theme>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </Theme>
    </Suspense>
  );
};
