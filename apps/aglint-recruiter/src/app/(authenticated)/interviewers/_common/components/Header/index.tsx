import { type Dispatch, type SetStateAction } from 'react';

import { useAllInterviewModules } from '@/authenticated/hooks';
import { useTenantOfficeLocations } from '@/company/hooks';
import FilterHeader from '@/components/Common/FilterHeader';
import { UIButton } from '@/components/Common/UIButton';
import UITextField from '@/components/Common/UITextField';
import { useAllDepartments } from '@/queries/departments';

export const Header = ({
  isFilterApplied,
  searchText,
  selectedDepartments,
  selectedLocations,
  selectedInterviewTypes,
  setSearchText,
  setDepartments,
  setLocations,
  setInterviewTypes,
}: HeaderProps) => {
  const { data: departments } = useAllDepartments();
  const { data: locations } = useTenantOfficeLocations();
  const { data: InterivewTypes } = useAllInterviewModules();

  // options for filter ------------------------
  const locationList = locations?.length
    ? locations.map((loc) => ({
        label: [loc.city, loc.region, loc.country]
          .filter((loc) => loc)
          .join(', '),
        id: loc.id.toString(),
      }))
    : [];

  const departmentList = departments?.length
    ? departments.map((dep) => ({ label: dep.name, id: dep.id.toString() }))
    : [];

  const InterviewTypeOptions = InterivewTypes?.length
    ? InterivewTypes.map((type) => ({
        label: type.name,
        id: type.id.toString(),
      }))
    : [];

  const resetAllFilter = () => {
    setDepartments([]);
    setLocations([]);
    setSearchText('');
    setInterviewTypes([]);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <UITextField
          placeholder='Search interviewers...'
          fieldSize='medium'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='mr-4 w-[250px]'
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
              {
                type: 'filter',
                name: 'Location',
                value: selectedLocations,
                options: locationList,
                multiSelect: true,
                setValue: (value) => {
                  setLocations(value);
                },
              },
              {
                type: 'filter',
                name: 'Interview Type',
                value: selectedInterviewTypes,
                options: InterviewTypeOptions,
                multiSelect: true,
                setValue: (value) => {
                  setInterviewTypes(value);
                },
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

type HeaderProps = {
  isFilterApplied: boolean;
  searchText: string;
  selectedDepartments: string[];
  selectedLocations: string[];
  selectedInterviewTypes: string[];
  setSearchText: Dispatch<SetStateAction<string>>;
  setDepartments: Dispatch<SetStateAction<string[]>>;
  setLocations: Dispatch<SetStateAction<string[]>>;
  setInterviewTypes: Dispatch<SetStateAction<string[]>>;
};
