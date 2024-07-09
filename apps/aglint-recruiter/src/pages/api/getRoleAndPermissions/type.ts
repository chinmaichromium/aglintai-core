import { DatabaseEnums } from '@aglint/shared-types';

export type getRoleAndPermissionsAPI = {
  request: {};
  response: {
    rolesAndPermissions: {
      [roles: string]: {
        id: string;
        name: string;
        assignedTo: string[];
        description: string;
        permissions: {
          relation_id: string;
          id: number;
          name: DatabaseEnums['permissions_type'];
          title: string;
          description: string;
          isActive: boolean;
        }[];
      };
    };
    all_permission: {
      [permission: number]: {
        id: number;
        name: DatabaseEnums['permissions_type'];
        title: string;
        description: string;
        isActive: boolean;
      };
    };
  };
};
