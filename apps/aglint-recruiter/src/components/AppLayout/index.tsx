import '@styles/globals.css';
import { useQueryClient } from '@tanstack/react-query';

import { NavBottom } from '@/devlink/NavBottom';
import { ResponsiveBanner } from '@/devlink2/ResponsiveBanner';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useResizeWindow } from '@/src/context/ResizeWindow/ResizeWindow';
import { useRolesAndPermissions } from '@/src/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useRouterPro } from '@/src/hooks/useRouterPro';
import NotFoundPage from '@/src/pages/404';
import { isEnvProd } from '@/src/utils/isEnvProd';
import PERMISSIONS from '@/src/utils/routing/permissions';
import ROUTES from '@/src/utils/routing/routes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { LogOut } from 'lucide-react';

import { useImrQuery } from '../Scheduling/Interviewers/InterviewerDetail/hooks';
import SideNavbar from './SideNavbar';

export default function AppLayout({ children, appRouter = false }) {
  const { checkPermissions } = useRolesAndPermissions();
  const { handleLogout } = useAuthDetails();
  const { recruiter, recruiterUser } = useAuthDetails();
  const queryClient = useQueryClient();
  const router = useRouterPro();
  const { windowSize } = useResizeWindow();
  const logo = recruiter?.logo;

  const { data: userDetails } = useImrQuery({ user_id: recruiterUser.user_id });

  const handleSignOut = () => {
    queryClient.removeQueries();
    handleLogout();
  };

  if (isEnvProd() && windowSize?.innerWidth < 1000) {
    return <ResponsiveBanner />;
  }
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col justify-between w-16 border-r bg-white">
        <div className="flex flex-col items-center py-3 flex-grow">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="#">
              <img
                src={logo}
                alt="Company Logo"
                className="rounded-full mb-5"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </Link>
          </Button>
          <SideNavbar />
        </div>
        <div className="flex flex-col items-center pb-5 space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href={ROUTES['/user/profile/[user_id]']({ user_id: recruiterUser?.user_id }) + '?profile=true'}>
                    <img
                      src={userDetails?.profile_image}
                      alt="User Profile"
                      className="rounded-full w-full h-full"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="sr-only">User profile</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent align='center' side='right'>
                <p>Your profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon" onClick={handleSignOut}>
                  <LogOut className="w-6 h-6" strokeWidth={1.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent align='center' side='right'>
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>

      <main className="flex-1 overflow-auto">
        {appRouter || checkPermissions(PERMISSIONS[String(router.pathName)]) ? (
          children
        ) : (
          <NotFoundPage />
        )}
      </main>
    </div>
  );
}
