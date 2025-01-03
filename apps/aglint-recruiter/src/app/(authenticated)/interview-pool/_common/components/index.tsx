'use client';
import { EmptyState } from '@components/empty-state';
import { ScrollArea } from '@components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { LibraryBig } from 'lucide-react';

import { useAllInterviewModules } from '@/authenticated/hooks';
import { useDepartments } from '@/authenticated/hooks/useDepartments';
import UIError from '@/common/UIError';
import { Loader } from '@/components/Common/Loader';

import { useHeaderProp } from '../context/headerContext';
import { InterviewPoolList } from './InterviewPoolList';

export default function InterviewTypesPage() {
  const { searchText, selectedDepartments, isFilterApplied, activeTab } =
    useHeaderProp();

  const {
    data: allModules,
    isLoading: modulesLoading,
    isError,
  } = useAllInterviewModules();
  const { isLoading: departmentLoading } = useDepartments();

  if (modulesLoading || departmentLoading)
    return (
      <div className='fixed inset-0 flex items-center justify-center'>
        <Loader />
      </div>
    );

  if (isError) {
    return <UIError />;
  }

  //filtering

  const archiveFiltered = allModules.filter((module) => {
    return activeTab === 'active' ? !module.is_archived : module.is_archived;
  });

  const filteredInterviewModules = isFilterApplied
    ? archiveFiltered.filter((interviewType) => {
        const isSearch =
          searchText.length !== 0
            ? interviewType?.name
                ?.toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            : true;

        const isDepartment = selectedDepartments?.length
          ? selectedDepartments.includes(
              interviewType?.department_id?.toString() ?? '',
            )
          : true;

        return isSearch && isDepartment;
      })
    : archiveFiltered;

  return (
    <>
      <ScrollArea className='h-[calc(100vh-180px)]'>
        <Table>
          <TableHeader className='bg-muted/50'>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Monthly Schedules</TableHead>
              <TableHead>Avg. Duration</TableHead>
              <TableHead>Open Positions</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterviewModules?.length > 0 ? (
              [...filteredInterviewModules].map((type, i) => (
                <InterviewPoolList interviewType={type} key={i} />
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
        {filteredInterviewModules?.length === 0 ? (
          <div className='flex h-[70vh] w-full items-center justify-center'>
            <EmptyState
              icon={LibraryBig}
              header={'No Interview pools found'}
              description='Create a new interview pool to get started.'
            />
          </div>
        ) : (
          <></>
        )}
      </ScrollArea>
    </>
  );
}
