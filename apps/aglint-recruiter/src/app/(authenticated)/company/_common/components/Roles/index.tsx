import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';

import { useTenantMembers } from '@/company/hooks';
import {
  useRoleData,
  useRoleDataSetter,
} from '@/company/hooks/useRoleAndPermissionsHook';
import { rolesOrder } from '@/constant/role_and_permissions';

import RoleDetails from './RoleDetails';
import { RoleList } from './ui/RoleList';
import { TableLoading } from './ui/TableLoading';

function RolesAndPermissionsComponent() {
  const {
    data,
    isPending: loading,
    role,
    setSelectRole,
    roleDetails,
  } = useRoleData();
  const { handelUpdateRole } = useRoleDataSetter();
  return (
    <>
      {role ? ( // roleDetailsComponent
        <RoleDetails
          role={role}
          roleDetails={roleDetails}
          back={() => setSelectRole(null)}
          AllRoles={Object.entries(data.rolesAndPermissions).map(
            // eslint-disable-next-line no-unused-vars
            ([key, details]) => ({
              role: details.name,
              id: details.id,
              count: {
                users: details?.assignedTo.length || 0,
                permissions:
                  details?.permissions.filter((item) => item.isActive).length ||
                  0,
              },
              switchRole: () => setSelectRole(key),
            }),
          )}
          updateRoles={handelUpdateRole}
        />
      ) : (
        <div>
          <h1 className='text-lg font-semibold'>Roles & Permissions</h1>
          <p className='mb-6 max-w-4xl text-sm text-muted-foreground'>
            Customize permissions for each role and control access by enabling
            or disabling the toggle next to each permission.
          </p>
          <div className='mt-6 overflow-x-auto rounded-lg border bg-white'>
            <RoleTable
              roles={data?.rolesAndPermissions || {}}
              loading={loading}
              setRole={setSelectRole}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default RolesAndPermissionsComponent;

const RoleTable = ({
  loading,
  roles,
  setRole,
}: {
  loading: boolean;
  roles: ReturnType<typeof useRoleData>['data']['rolesAndPermissions'];
  setRole: (_role_id: string, _addMode?: boolean) => void;
}) => {
  const { members } = useTenantMembers();

  if (loading) {
    return <TableLoading />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-gray-100'>
          <TableHead>Role</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Users</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(roles || {})
          .sort((a, b) => rolesOrder[a[1].name] - rolesOrder[b[1].name])
          .map(([key, details], i) => {
            const role = details;
            const count = role.assignedTo.length;
            return (
              <RoleList
                key={i}
                count={count}
                details={details}
                members={members}
                onClickAdd={(e) => {
                  e.stopPropagation();
                  setRole(key, true);
                }}
                onClickRow={() => setRole(key)}
                role={role}
              />
            );
          })}
      </TableBody>
    </Table>
  );
};
