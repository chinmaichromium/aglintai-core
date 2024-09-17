import '@styles/globals.css';

import { Button } from '@components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import defaultCompanyLogo from '@public/images/default-company-logo.svg';
import defaultProfileImage from '@public/images/default-user-profile.svg';
import { useQueryClient } from '@tanstack/react-query';
import { LogOut, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useRouterPro } from '@/hooks/useRouterPro';
import NotFoundPage from '@/pages/404';
import PERMISSIONS from '@/utils/routing/permissions';
import ROUTES from '@/utils/routing/routes';

// import { ThemeSwitcher } from '../CandiatePortal/components/ThemeSwitcher';
import { useImrQuery } from '../Scheduling/Interviewers/InterviewerDetail/hooks';
import SideNavbar from './SideNavbar';

// Add this constant at the top of the file, outside the component

export default function AppLayout({ children, appRouter = false }) {
  const { checkPermissions } = useRolesAndPermissions();
  const { handleLogout } = useAuthDetails();
  const { recruiter, recruiterUser, isShowFeature } = useAuthDetails();
  const queryClient = useQueryClient();
  const router = useRouterPro();
  const logo = recruiter?.logo;
  const name = recruiter?.name;

  const { data: userDetails } = useImrQuery({ user_id: recruiterUser.user_id });

  const handleSignOut = () => {
    queryClient.removeQueries();
    handleLogout();
  };

  const isHorizontalNav = !isShowFeature('SCHEDULING');

  return (
    <div className='flex h-full flex-col'>
      {isHorizontalNav && (
        <nav className='sticky top-0 z-50 flex w-full items-center justify-between border-b bg-white p-2'>
          <div className='flex items-center space-x-4'>
            <Link href='/'>
              <Image
                src={logo || defaultCompanyLogo}
                alt={name}
                width={32}
                height={32}
                className='rounded-sm'
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <div className='flex space-x-2'>
              <Button variant='ghost' asChild>
                <Link href='/jobs'>Jobs</Link>
              </Button>
            </div>
          </div>
          <div className='flex items-center'>
            <Button variant='ghost' asChild>
              <Link href='/company?tab=company-info'>
                <Settings className='mr-2 h-5 w-5' strokeWidth={1.5} />
                Settings
              </Link>
            </Button>
            <Button variant='link' asChild>
              <Link
                href={
                  ROUTES['/user/profile/[user_id]']({
                    user_id: recruiterUser?.user_id,
                  }) + '?profile=true'
                }
              >
                <Image
                  src={userDetails?.profile_image || defaultProfileImage}
                  alt={recruiterUser?.first_name || 'User'}
                  width={32}
                  height={32}
                  className='rounded-full'
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </Button>
            <Button variant='link' onClick={handleSignOut} asChild>
              <Link href='#'>
                <LogOut className='mr-2 h-5 w-5' strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </nav>
      )}
      <div className='flex flex-1 bg-gray-50'>
        {!isHorizontalNav && (
          <nav className='flex h-[100vh] w-16 flex-col justify-between border-r bg-white'>
            <div className='flex flex-grow flex-col items-center py-3'>
              <Button variant='ghost' className='mt-4' asChild>
                <Link href='/'>
                  <Image
                    src={logo || defaultCompanyLogo}
                    alt={name}
                    width={40}
                    height={40}
                    className='mb-5 rounded-sm'
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </Button>
              <SideNavbar />
            </div>
            <div className='flex flex-col items-center space-y-3 pb-3'>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant='ghost' className='rounded-sm' asChild>
                    <Link
                      href={
                        ROUTES['/user/profile/[user_id]']({
                          user_id: recruiterUser?.user_id,
                        }) + '?profile=true'
                      }
                    >
                      <Image
                        src={userDetails?.profile_image || defaultProfileImage}
                        alt={name}
                        width={32}
                        height={32}
                        className='rounded-sm'
                        style={{ objectFit: 'cover' }}
                      />
                      <span className='sr-only'>Your profile</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent align='center' side='right'>
                  <p>Your profile</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant='outline' onClick={handleSignOut}>
                    <LogOut className='h-5 w-5' strokeWidth={1.5} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent align='center' side='right'>
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </nav>
        )}
        <main
          className={`flex-1 overflow-auto ${isHorizontalNav ? 'mt-8' : ''}`}
        >
          {appRouter ||
          checkPermissions(PERMISSIONS[String(router.pathName)]) ? (
            children
          ) : (
            <NotFoundPage />
          )}
        </main>
      </div>
    </div>
  );
}
