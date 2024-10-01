import FilterHeader from '@/components/Common/FilterHeader';
import { UIButton } from '@/components/Common/UIButton';
import UITextField from '@/components/Common/UITextField';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useAllDepartments } from '@/queries/departments';

import { setIsCreateDialogOpen } from '../../[pool]/_common/stores/store';
import { useHeaderProp } from '.';
import CreateModuleDialog from './CreateModuleDialog';

export const InterviewPoolHeader = () => {
  const {
    searchText,
    selectedDepartments,
    setDepartments,
    setSearchText,
    isFilterApplied,
  } = useHeaderProp();
  const { data: departments } = useAllDepartments();
  const { checkPermissions } = useRolesAndPermissions();

  const departmentList = departments?.length
    ? departments.map((dep) => ({ label: dep.name, id: dep.id.toString() }))
    : [];

  const resetAllFilter = () => {
    setDepartments([]);
    setSearchText('');
  };

  return (
    <>
      <CreateModuleDialog />
      <div className='mb-6 flex items-center justify-between'>
        <UITextField
          placeholder='Search pool name...'
          fieldSize='medium'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='w-[250px]'
        />
        <div className='flex items-center gap-2'>
          {isFilterApplied ? (
            <UIButton variant='ghost' size='sm' onClick={resetAllFilter}>
              Reset all
            </UIButton>
          ) : (
            <></>
          )}
          <FilterHeader
            filters={[
              {
                type: 'filter',
                name: 'Department',
                value: selectedDepartments,
                options: departmentList,
                multiSelect: true,
                setValue: (value) => {
                  setDepartments(value);
                },
              },
            ]}
          />
          {checkPermissions && checkPermissions(['interview_types']) && (
            <UIButton
              variant='default'
              onClick={() => {
                setIsCreateDialogOpen(true);
              }}
            >
              Create
            </UIButton>
          )}
        </div>
      </div>
    </>
  );
};
