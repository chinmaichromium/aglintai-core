import { Skeleton } from '@components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { useQuery } from '@tanstack/react-query';
import {
  Building,
  CircleDot,
  Locate,
  RefreshCw,
  Send,
  User,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { type GreenHouseUserSyncAPI } from '@/api/sync/greenhouse/user/type';
import axios from '@/client/axios';
import FilterHeader from '@/components/Common/FilterHeader';
import { UIButton } from '@/components/Common/UIButton';
import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { type API_get_last_login } from '@/pages/api/get_last_login/types';
import { useGreenhouseDetails } from '@/queries/greenhouse';
import { useAllMembers } from '@/queries/members';
import dayjs from '@/utils/dayjs';

import AddMember from './AddMemberDialog';
import Member from './MemberList';

type ItemType = string;

const TeamManagement = () => {
  const { checkPermissions } = useRolesAndPermissions();
  const { data: members, isPending, remote_sync } = useTeamMembers();

  const timeStamp = remote_sync?.lastSync;
  const last_sync = timeStamp ? dayjs(timeStamp).fromNow() : 'Never';

  // filter members
  const [searchText, setSearchText] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);

  const [selectedDepartments, setSelectedDepartments] = useState<ItemType[]>(
    [],
  );

  const [selectedLocations, setSelectedLocations] = useState<ItemType[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<ItemType[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<ItemType[]>([]);

  const uniqueDepartments = [
    ...members.reduce((acc, curr) => {
      if (curr.department?.name) acc.add(curr.department.name);
      return acc;
    }, new Set<string>()),
  ];

  const uniqueLocations = [
    ...members.reduce((acc, curr) => {
      if (curr.office_location?.city) {
        acc.add(curr.office_location.city);
      }
      return acc;
    }, new Set<string>()),
  ];

  const uniqueRoles = [
    ...new Set(
      members
        .filter((ele) => Boolean(ele.role?.length))
        .map((item) => item.role && String(item.role)),
    ),
  ];

  const uniqueStatus = [
    ...new Set(
      members
        .filter((ele) => Boolean(ele.status?.length))
        .map((item) => item.status && String(item.status).toLowerCase()),
    ),
  ].map((item) => (item === 'joined' ? 'active' : item));

  useEffect(() => {
    const filtered = members.filter((member) => {
      const departmentMatch =
        !selectedDepartments.length ||
        selectedDepartments.includes(member.department?.name);
      const locationMatch =
        !selectedLocations.length ||
        selectedLocations.includes(member.office_location?.city);
      const statusMatch =
        !selectedStatus.length ||
        selectedStatus.includes(String(member.status).toLowerCase());
      const roleMatch =
        !selectedRoles.length || selectedRoles.includes(String(member.role));

      return departmentMatch && locationMatch && statusMatch && roleMatch;
    });

    setFilteredMembers(filtered);
  }, [
    selectedDepartments,
    selectedLocations,
    selectedStatus,
    selectedRoles,
    members,
  ]);
  const canManage = checkPermissions(['manage_users']);
  const [isInitialLoading, setIsInitialLoading] = useState(
    filteredMembers.length ? false : true,
  );

  useEffect(() => {
    if (filteredMembers.length) setIsInitialLoading(false);
  }, [filteredMembers.length]);

  const [open, setOpen] = useState(false);

  const memberList = members
    .filter((mem) => mem.status === 'active')
    .map((mem) => ({
      id: mem.user_id,
      name: getFullName(mem.first_name, mem.last_name),
    }));

  return (
    <>
      <AddMember
        memberList={memberList || []}
        menu='addMember'
        onClose={() => setOpen(false)}
        open={open}
        defaultRole={{
          role: 'Hiring Manager',
          role_id: '5aac490c-cfcb-4e41-8756-5aca8532edf8',
        }}
        pendingList={[]}
      />
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='max-w-[700px]'>
            <h2 className='mb-1 text-xl font-semibold'>Manage User</h2>
            <p className='mb-6 text-gray-600'>
              Invite your hiring team members and manage their roles and profile
              details in one place. Assign roles such as interviewer, hiring
              manager, or recruiter to ensure an organized team structure and
              compliance with user permissions in the organization.
            </p>
          </div>

          <div className='row flex justify-end pb-4'>
            {canManage &&
              (remote_sync.isEnabled ? (
                <div className='flex flex-col space-y-2'>
                  <UIButton
                    variant='outline'
                    size='sm'
                    onClick={remote_sync.sync}
                    className='flex items-center'
                  >
                    <RefreshCw className='mr-2 h-4 w-4' />
                    Sync Team ({last_sync})
                  </UIButton>
                </div>
              ) : (
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
              ))}
          </div>
        </div>

        <FilterHeader
          search={{
            setValue: setSearchText,
            value: searchText,
            placeholder: 'Search users',
          }}
          isResetAll={true}
          filters={[
            {
              name: 'Status',
              type: 'filter',
              icon: <CircleDot size={12} />,
              options: uniqueStatus,
              setValue: setSelectedStatus,
              value: selectedStatus,
            },
            {
              name: 'Role',
              type: 'filter',
              icon: <User size={12} />,
              options: uniqueRoles,
              setValue: setSelectedRoles,
              value: selectedRoles,
            },
            {
              name: 'Department',
              type: 'filter',
              icon: <Building size={12} />,
              options: uniqueDepartments,
              setValue: setSelectedDepartments,
              value: selectedDepartments,
            },
            {
              name: 'Location',
              type: 'filter',
              icon: <Locate size={12} />,
              options: uniqueLocations,
              setValue: setSelectedLocations,
              value: selectedLocations,
            },
          ]}
        />

        <div className='mt-6 overflow-x-auto rounded-lg border bg-white'>
          <Table>
            <TableHeader className='bg-gray-100'>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(!filteredMembers.length && isPending) || isInitialLoading ? (
                <TableRow>
                  <TableCell colSpan={1}>
                    <div className='space-y-2'>
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className='flex items-center space-x-4'
                        >
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
                        <div
                          key={index}
                          className='flex items-center space-x-4'
                        >
                          <div className='space-y-2'>
                            <Skeleton className='h-4 w-[250px]' />
                            <Skeleton className='h-4 w-[200px]' />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredMembers.length === 0 ? (
                <TableCell colSpan={6}>
                  <div className='flex flex-col items-center justify-center p-8 text-center'>
                    <Users className='mb-2 h-12 w-12 text-gray-400' />
                    <h3 className='mb-1 text-lg font-medium text-gray-900'>
                      No team members
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Get started by adding a new team member.
                    </p>
                  </div>
                </TableCell>
              ) : (
                filteredMembers?.map((member) => (
                  <Member key={member.user_id} member={member} />
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TeamManagement;

export const useTeamMembers = () => {
  const { recruiter } = useAuthDetails();

  const { allMembers, members, refetchMembers } = useAllMembers();
  const {
    data: syncData,
    isPending,
    refetch: refetchLastSync,
  } = useGreenhouseDetails();

  const activeMembers = members;

  const query = useQuery({
    queryKey: ['TeamMembers'],
    queryFn: () => {
      return getLastLogins(
        allMembers.map((item) => item.user_id),
        recruiter.id,
      ).then((data) => {
        return allMembers.map((member) => {
          return { ...member, last_login: data[member.user_id] };
        });
      });
    },
    placeholderData: [],
    enabled: Boolean(allMembers?.length),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  async function sync_users() {
    syncUsers(recruiter.id, syncData?.key, syncData?.last_sync['users']).then(
      () => {
        refetchMembers();
        refetchLastSync();
      },
    );
  }

  useEffect(() => {
    if (query.data && allMembers.length) {
      query.refetch();
    }
  }, [allMembers.length, query.refetch]);
  return {
    activeMembers,
    ...query,
    isPending: query.isPending || isPending,
    remote_sync: {
      lastSync: syncData?.last_sync['users'],
      isEnabled: Boolean(syncData?.key),
      sync: sync_users,
    },
    refetchMembers, // Add this line
  };
};

const getLastLogins = (ids: string[], recruiter_id: string) => {
  const body: API_get_last_login['request'] = { ids, recruiter_id };
  return axios
    .post<API_get_last_login['response']>('/api/get_last_login', body)
    .then(({ data: { data, error } }) => {
      if (error) throw new Error(error);
      const tempData: { [key: string]: string } = {};
      data.forEach((item) => {
        tempData[item.id] = item.last_login;
      });
      return tempData;
    });
};

export const getFullName = (firstName: string, lastName: string) => {
  return [firstName, lastName]
    .filter(Boolean)
    .map((s) => s.trim())
    .filter(Boolean)
    .join(' ');
};

async function syncUsers(
  recruiter_id: string,
  key: string,
  last_sync?: string,
) {
  return await axios.call<GreenHouseUserSyncAPI>(
    'POST',
    `/api/sync/greenhouse/user`,
    {
      recruiter_id,
      key,
      last_sync,
    },
  );
}
