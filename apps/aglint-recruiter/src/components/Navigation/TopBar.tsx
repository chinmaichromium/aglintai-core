'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useQueryClient } from '@tanstack/react-query';
import { ChevronDownIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { useLogout } from '@/authenticated/hooks/useLogout';
import { ThemeToggle } from '@/common/themes/components/ThemeToggle';
import { useTheme } from '@/common/themes/hooks/useTheme';
import { useTenant } from '@/company/hooks';

const DefaultCompanyLogo = () => (
  <Image
    src={'/images/default/company.svg'}
    alt={'Brand'}
    width={20}
    height={20}
  />
);

const TopBar = () => {
  const { recruiter, recruiter_user } = useTenant();
  const queryClient = useQueryClient();
  const { logout } = useLogout();
  const logo = recruiter?.logo;
  const recruiterName = recruiter?.name;
  const profileImage = recruiter_user?.profile_image;
  const userName = recruiter_user?.first_name;
  const userId = recruiter_user?.user_id;

  const { setMode } = useTheme();

  // sortcut for toggle a theme
  const toggleState = () => {
    setMode(localStorage.getItem('theme') == 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      if (!isMac && event.ctrlKey && event.key === 'm') {
        event.preventDefault();
        toggleState();
      }
      if (isMac && event.metaKey && event.key === 'm') {
        event.preventDefault();
        toggleState();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='flex w-full flex-row items-center justify-between'>
      <Button variant='link' className='ml-2 mt-2 p-2' asChild>
        <Link href='/jobs' className='hover:no-underline'>
          <Avatar>
            <AvatarImage src={logo || ''} alt={recruiterName} />
            <AvatarFallback>
              <DefaultCompanyLogo />
            </AvatarFallback>
          </Avatar>
          <span className='ml-2 text-foreground'>{recruiterName}</span>
        </Link>
      </Button>
      <div className='mr-2 mt-2 flex flex-row items-center'>
        <div className='sr-only mr-4 flex-row items-center gap-2 md:flex'>
          <p>👋 </p>
          <p className='text-sm text-muted-foreground'>Hey {userName}</p>
          <p className='text-sm text-muted-foreground'>
            Welcome to {recruiterName}!
          </p>
        </div>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='ghost'>
              <Avatar className='h-7 w-7 cursor-pointer rounded-sm'>
                <AvatarImage src={profileImage || ''} alt={userName} />
                <AvatarFallback className='rounded-sm bg-gray-500'>
                  <User className='h-4 w-4' />
                </AvatarFallback>
              </Avatar>
              <ChevronDownIcon className='ml-1 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side='bottom'
            align='end'
            alignOffset={20}
            className='border border-border'
          >
            <DropdownMenuItem className='cursor-pointer'>
              <Link
                href={`/user/${userId}?profile=true`}
                className='hover:no-underline'
              >
                <span>Your Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              <div onClick={() => logout(queryClient)}>
                <span className='cursor-pointer'>Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
