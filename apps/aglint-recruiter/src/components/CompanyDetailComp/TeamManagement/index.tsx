import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import converter from 'number-to-words';
import { useEffect, useState, useTransition } from 'react';

import { ButtonGhost } from '@/devlink/ButtonGhost';
import { ButtonSoft } from '@/devlink/ButtonSoft';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { TeamUsersList } from '@/devlink/TeamUsersList';
import { GlobalBannerInline } from '@/devlink2/GlobalBannerInline';
import { TeamEmpty } from '@/devlink3/TeamEmpty';
import {
  useAuthDetails
} from '@/src/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/src/context/RolesAndPermissions/RolesAndPermissionsContext';
import { API_get_last_login } from '@/src/pages/api/get_last_login/types';
import { useAllMembers } from '@/src/queries/members';
import toast from '@/src/utils/toast';

import SearchField from '../../Common/SearchField/SearchField';
import { ShowCode } from '../../Common/ShowCode';
import DynamicLoader from '../../Scheduling/Interviewers/DynamicLoader';
import AddMember from './AddMemberDialog';
import FilterDropDown from './FilterDropDown';
import DepartmentIcon from './Icons/DepartmentIcon';
import LocationIcon from './Icons/LocationIcon';
import StatusIcon from './Icons/StatusIcon';
import UserRoleIcon from './Icons/UserRoleIcon';
import Member from './MemberList';

type ItemType = string;

const TeamManagement = () => {
  const { checkPermissions } = useRolesAndPermissions();
  const { recruiterUser } = useAuthDetails();
  const { data: members, activeMembers, isFetching } = useTeamMembers();

  const [openDrawer, setOpenDrawer] = useState<{
    open: boolean;
    window: 'addMember' | 'pendingMember';
  }>({
    open: false,
    window: 'addMember',
  });

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
      curr.department?.name && acc.add(curr.department.name);
      return acc;
    }, new Set<string>()),
  ];

  const uniqueLocations = [
    ...members.reduce((acc, curr) => {
      curr.office_location?.city && acc.add(curr.office_location.city);
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

  const pendingList = members.filter(
    (member) => member.status?.toLocaleLowerCase() === 'invited',
  );
  const inviteUser = pendingList.length;

  const [, startTransition] = useTransition();

  function handleTextChange(e) {
    const value = e.target.value;
    setSearchText(value);
    startTransition(() => {
      if (value) {
        const filtered = members.filter(
          (member) =>
            member.first_name.toLowerCase().includes(value.toLowerCase()) ||
            member.position.toLowerCase().includes(value.toLowerCase()) ||
            member.email.toLowerCase().includes(value.toLowerCase()),
        );
        setFilteredMembers(filtered);
      } else {
        setFilteredMembers(members);
      }
    });
  }
  function handleTextClear() {
    setSearchText('');
    setFilteredMembers(members);
  }

  function resetAllFilter() {
    setSelectedStatus([]);
    setSelectedRoles([]);
    setSelectedDepartments([]);
    setSelectedLocations([]);
  }

  const isResetAllVisible =
    Boolean(selectedStatus.length) ||
    Boolean(selectedDepartments.length) ||
    Boolean(selectedRoles.length) ||
    Boolean(selectedLocations.length);

  const canManage = checkPermissions(['manage_users']);
  const [isInitalLoading, setIsInitalLoading] = useState(
    filteredMembers.length ? false : true,
  );
  useEffect(() => {
    if (filteredMembers.length) setIsInitalLoading(false);
  }, [filteredMembers.length]);
  return (
    <Stack bgcolor={'white'}>
      <TeamUsersList
        slotBanner={
          <GlobalBannerInline
            iconName='history'
            textContent='You currently have four pending invites awaiting your response.'
            color={'warning'}
            slotButton={
              <ButtonSoft
                onClickButton={{
                  onClick: () => {
                    setSelectedStatus(['invited']);
                    // setOpenDrawer({ open: true, window: 'pendingMember' });
                  },
                }}
                textButton='View pending invites'
                color={'accent'}
                size={2}
              />
            }
          />
        }
        slotSearchAndFilter={
          <>
            <Stack marginRight={5}>
              <SearchField
                value={searchText}
                onChange={handleTextChange}
                onClear={handleTextClear}
                placeholder='Search users'
              />
            </Stack>
            <Stack
              display={'flex'}
              flexDirection={'row'}
              gap={'var(--space-2)'}
            >
              {isResetAllVisible && (
                <ButtonGhost
                  textButton='Reset All'
                  color={'neutral'}
                  size={2}
                  iconName='refresh'
                  isLeftIcon
                  onClickButton={{
                    onClick: resetAllFilter,
                  }}
                />
              )}
              <FilterDropDown
                icon={<StatusIcon />}
                title={'Status'}
                itemList={uniqueStatus}
                selectedItems={selectedStatus}
                setSelectedItems={setSelectedStatus}
              />
              <FilterDropDown
                icon={<UserRoleIcon />}
                title={'Role'}
                itemList={uniqueRoles}
                selectedItems={selectedRoles}
                setSelectedItems={setSelectedRoles}
              />
              <FilterDropDown
                title={'Department'}
                itemList={uniqueDepartments}
                selectedItems={selectedDepartments}
                setSelectedItems={setSelectedDepartments}
                icon={<DepartmentIcon />}
              />
              <FilterDropDown
                icon={<LocationIcon />}
                title={'Location'}
                itemList={uniqueLocations}
                selectedItems={selectedLocations}
                setSelectedItems={setSelectedLocations}
              />
            </Stack>
          </>
        }
        slotTeamList={
          <>
            <ShowCode>
              <ShowCode.When
                isTrue={
                  (!filteredMembers.length && isFetching) || isInitalLoading
                }
              >
                <Stack
                  width={'100%'}
                  height={'100%'}
                  minHeight={'300px'}
                  position={'relative'}
                >
                  <DynamicLoader />
                </Stack>
              </ShowCode.When>
              <ShowCode.When isTrue={filteredMembers.length === 0}>
                <TeamEmpty />
              </ShowCode.When>
            </ShowCode>
            <ShowCode.When isTrue={filteredMembers.length > 0}>
              {filteredMembers?.map((member) => (
                <Member
                  key={member.user_id}
                  member={member}
                  removeMember={async () => {
                    if (recruiterUser?.user_id === member.user_id) {
                      toast.error(
                        "Can't remove admin account; it's the primary one.",
                      );
                    } else {
                      try {
                        await axios.post('/api/supabase/deleteuser', {
                          user_id: member.user_id,
                        });
                      } catch (error) {
                        toast.error(
                          "This member is tied to an active schedule, so removal is unavailable until it's finished.",
                        );
                        return null;
                      }
                    }
                  }}
                  canSuspend={member.role !== 'admin'}
                />
              ))}
            </ShowCode.When>
          </>
        }
        slotInviteBtn={
          <>
            {canManage && (
              <ButtonSolid
                isRightIcon={false}
                isLeftIcon={true}
                size={'2'}
                textButton={'Invite'}
                iconName={'send'}
                onClickButton={{
                  onClick: () => {
                    setOpenDrawer({ open: true, window: 'addMember' });
                  },
                }}
              />
            )}
          </>
        }
        pendInvitesVisibility={Boolean(inviteUser)}
        textPending={`You currently have ${converter.toWords(
          pendingList?.length,
        )} pending invites awaiting your response.`}
      />

      <AddMember
        open={openDrawer.open}
        menu={openDrawer.window}
        memberList={activeMembers.map((mem) => ({
          id: mem.user_id,
          name: getFullName(mem.first_name, mem.last_name),
        }))}
        pendingList={pendingList}
        onClose={() => {
          setOpenDrawer({ open: false, window: null });
        }}
      />
      {/* )} */}
    </Stack>
  );
};

export default TeamManagement;

export const useTeamMembers = () => {
  const { recruiter } = useAuthDetails();

  const { allMembers, members } = useAllMembers();

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

  useEffect(() => {
    if (query.data && allMembers.length) {
      query.refetch();
    }
  }, [allMembers.length, query.refetch]);
  return { activeMembers, ...query };
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
