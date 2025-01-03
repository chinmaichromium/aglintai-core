import {
  PageActions,
  PageDescription,
  PageHeader,
  PageHeaderText,
  PageTitle,
} from '@components/layouts/page-header';
import { Skeleton } from '@components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { RefreshCw, Send, Users } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { Indicator } from '@/common/Indicator';
import { UIButton } from '@/common/UIButton';
import type { useTenantMembers } from '@/company/hooks';
import { useTeamMembersLastLogin } from '@/company/hooks/useTeamMembers';

import Member from '../MemberList';

export const TeamManagementUI = ({
  canManage,
  isRemoteSync,
  remote_sync,
  last_sync,
  setOpen,
  filter,
  filteredMembers,
  isTableLoading,
}: {
  canManage: boolean;
  isRemoteSync: boolean;
  remote_sync: () => Promise<void>;
  last_sync: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  filter: ReactNode;
  filteredMembers: ReturnType<typeof useTenantMembers>['data'];
  isTableLoading: boolean;
}) => {
  const { data: lastLoginData, isPending } = useTeamMembersLastLogin();
  const queryParams = useSearchParams();
  const isIndicatorActive =
    queryParams?.get('indicator') == 'true' ? true : false;

  return (
    <div className='space-y-4'>
      <PageHeader>
        <PageHeaderText>
          <PageTitle>Manage User</PageTitle>
          <PageDescription>
            Invite your hiring team, assign roles like interviewer or recruiter,
            and manage profiles in one place for a streamlined team structure
            and user permissions.
          </PageDescription>
        </PageHeaderText>
        <PageActions>
          {canManage &&
            (isRemoteSync ? (
              <div className='flex flex-col space-y-2'>
                <UIButton
                  variant='outline'
                  size='sm'
                  onClick={remote_sync}
                  className='flex items-center'
                >
                  <RefreshCw className='mr-2 h-4 w-4' />
                  Sync Team ({last_sync})
                </UIButton>
              </div>
            ) : (
              <Indicator isActive={isIndicatorActive}>
                <UIButton
                  leftIcon={<Send />}
                  variant='default'
                  size='sm'
                  onClick={() => {
                    setOpen(true);
                  }}
                  className='flex items-center'
                >
                  Invite Member
                </UIButton>
              </Indicator>
            ))}
        </PageActions>
      </PageHeader>

      {filter}

      <div className='rounded-lg border border-border'>
        <Table>
          <TableHeader className='bg-muted'>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>last Active</TableHead>
              <TableHead className='sr-only'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isTableLoading ? (
              <TableRow>
                <TableCell colSpan={1}>
                  <div className='space-y-2'>
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className='flex items-center space-x-4'>
                        <Skeleton className='h-12 w-12 rounded-full' />
                        <div className='space-y-2'>
                          <Skeleton className='h-4 w-[250px]' />
                          <Skeleton className='h-4 w-[200px]' />
                        </div>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell colSpan={5}>
                  <div className='space-y-2'>
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className='flex items-center space-x-4'>
                        <div className='space-y-2'>
                          <Skeleton className='h-4 w-[250px]' />
                          <Skeleton className='h-4 w-[200px]' />
                        </div>
                      </div>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ) : !filteredMembers || filteredMembers.length === 0 ? (
              <TableCell colSpan={6}>
                <div className='flex flex-col items-center justify-center p-8 text-center'>
                  <Users className='mb-2 h-12 w-12 text-muted-foreground' />
                  <h3 className='mb-1 text-lg font-medium text-foreground'>
                    No team members
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Get started by adding a new team member.
                  </p>
                </div>
              </TableCell>
            ) : (
              filteredMembers.map((member) => (
                <Member
                  key={member.user_id}
                  member={member}
                  lastLogin={{ isPending, time: lastLoginData[member.user_id] }}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
