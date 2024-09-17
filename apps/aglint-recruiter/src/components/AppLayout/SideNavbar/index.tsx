import { useToast } from '@components/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import {
  BriefcaseBusiness,
  Calendar,
  GitGraph,
  LayoutGrid,
  LayoutList,
  LibraryBig,
  ListTodo,
  Search,
  Settings,
  Users,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useRouterPro } from '@/hooks/useRouterPro';

import { type LinkProps } from './type';
import { navList } from './utils';

function SideNavbar() {
  const router = useRouterPro();
  const pathName = router.pathName;
  const { checkPermissions } = useRolesAndPermissions();
  const { toast } = useToast();
  const { isShowFeature } = useAuthDetails();
  useEffect(() => {
    const tempR = navList.find((item) => {
      return pathName?.includes(item.route.split('?')[0]);
    })?.permission;
    if (tempR && !checkPermissions(tempR)) {
      toast({
        variant: 'destructive',
        title: 'Access Denied',
        description:
          'This section of the application is not accessible to you.',
      });
      router.back();
    }
  }, [pathName, checkPermissions, router, toast]);

  return (
    <div className='flex w-16 flex-col items-center space-y-3 p-4'>
      {navList
        .filter((item) =>
          item.permission ? checkPermissions(item.permission) : true,
        )
        .map((item) => {
          const isVisible =
            item.text === 'Analytics'
              ? isShowFeature('ANALYTICS') && item.isVisible
              : item.text === 'Workflows'
                ? isShowFeature('WORKFLOW') && item.isVisible
                : item.isVisible;

          return isVisible ? (
            <LinkComp
              module={item.text}
              key={item.text}
              path={item.route}
              active={item.active}
            />
          ) : null;
        })}
    </div>
  );
}

export default SideNavbar;

const LinkIcon = ({
  module,
  active,
}: {
  module: LinkProps['module'];
  active: boolean;
}) => {
  const baseClasses =
    'flex flex-col items-center space-y-2 p-2 rounded-md transition-colors duration-200';
  const activeClasses = active ? 'bg-gray-200 text-black' : 'text-gray-500';
  const hoverClasses = 'hover:bg-gray-200';

  const iconMap = {
    Requests: <LayoutList className='h-6 w-6' strokeWidth={1.5} />,
    Jobs: <BriefcaseBusiness className='h-6 w-6' strokeWidth={1.5} />,
    Interviews: <Calendar className='h-6 w-6' strokeWidth={1.5} />,
    'Interview Pools': <LibraryBig className='h-6 w-6' strokeWidth={1.5} />,
    Candidates: <Users className='h-6 w-6' strokeWidth={1.5} />,
    Interviewers: <Users className='h-6 w-6' strokeWidth={1.5} />,
    'Sourcing Hub': <Search className='h-6 w-6' strokeWidth={1.5} />,
    Integrations: <LayoutGrid className='h-6 w-6' strokeWidth={1.5} />,
    'Company Settings': <Settings className='h-6 w-6' strokeWidth={1.5} />,
    Workflows: <Workflow className='h-6 w-6' strokeWidth={1.5} />,
    Tasks: <ListTodo className='h-6 w-6' strokeWidth={1.5} />,
    Analytics: <GitGraph className='h-6 w-6' strokeWidth={1.5} />,
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className={`${baseClasses} ${activeClasses} ${hoverClasses}`}>
          {iconMap[module]}
        </div>
      </TooltipTrigger>
      <TooltipContent align='center' side='right'>
        <p>{module}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const LinkComp = ({
  module,
  path,
  active = [],
}: {
  module: LinkProps['module'];
  path: LinkProps['path'] | string;
  active: string[];
}) => {
  const router = useRouterPro();
  return (
    <Link href={path} passHref>
      <LinkIcon module={module} active={active.includes(router.pathName)} />
    </Link>
  );
};
