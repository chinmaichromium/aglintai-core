'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Badge } from '@components/ui/badge';
import { TableCell, TableRow } from '@components/ui/table';
import { CirclePlus } from 'lucide-react';

import { UIButton } from '@/common/UIButton';
import type { useTenantMembers } from '@/company/hooks';
import type { useRoleData } from '@/company/hooks/useRoleAndPermissionsHook';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

type getRoleAndPermissionsWithUserCountType = NonNullable<
  ReturnType<typeof useRoleData>['role']
>;

type Props = {
  role: getRoleAndPermissionsWithUserCountType;
  details: getRoleAndPermissionsWithUserCountType;
  count: number;
  members: ReturnType<typeof useTenantMembers>['members'];
  // eslint-disable-next-line no-unused-vars
  onClickAdd: (e: any) => void;
  onClickRow: () => void;
};
export const RoleList = ({
  role,
  onClickRow,
  count,
  members,
  details,
  onClickAdd,
}: Props) => {
  return (
    <TableRow
      key={role.id}
      className='cursor-pointer hover:bg-muted/50'
      onClick={onClickRow}
    >
      <TableCell className='font-medium'>
        {capitalizeFirstLetter(role.name)}
      </TableCell>
      <TableCell className='w-[42%] text-muted-foreground'>
        {role.description}
      </TableCell>
      <TableCell>
        <div className='flex items-center gap-1'>
          {count ? (
            <>
              {role.assignedTo.slice(0, 3).map((user_id) => {
                const user = members.find(
                  (member) =>
                    member.user_id === user_id &&
                    member.user_id !== member.created_by,
                );
                if (!user) return null;
                return (
                  <Avatar key={user_id} className='m-0 h-8 w-8 rounded-sm'>
                    <AvatarImage
                      src={user.profile_image || undefined}
                      alt={user.first_name}
                    />
                    <AvatarFallback className='m-0 h-8 w-8 rounded-sm bg-muted text-muted-foreground'>
                      {user.first_name[0]}
                    </AvatarFallback>
                  </Avatar>
                );
              })}
              {count > 3 && (
                <Badge variant='secondary' className='rounded-sm'>
                  +{count - 3} more
                </Badge>
              )}
            </>
          ) : (
            <p className='text-sm text-muted-foreground'>
              {`No users with ${details.name}`}
            </p>
          )}
        </div>
      </TableCell>
      <TableCell>
        {!count && (
          <UIButton
            variant='outline'
            size='sm'
            onClick={onClickAdd}
            className='flex items-center space-x-1'
          >
            <CirclePlus className='h-4 w-4' />
            <span>Add</span>
          </UIButton>
        )}
      </TableCell>
    </TableRow>
  );
};
