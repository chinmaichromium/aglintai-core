'use client';

import { Button } from '@components/ui/button';
import { Plus } from 'lucide-react';
import * as React from 'react';

import { manageDepartments } from '@/context/AuthContext/utils';
import { useAllDepartments } from '@/queries/departments';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useToast } from '@components/hooks/use-toast';
import DeleteDepartmentsDialog from './ManageDepartmentsDialog/deleteDepartmentDialog';
import AddChip from '@/components/Common/AddChip';

export default function Departments() {
  const { data: departments, refetch: refetchDepartments } =
    useAllDepartments();

  const { recruiter } = useAuthDetails();
  const { toast } = useToast();
  const handleRemoveKeyword = async (id) => {
    setDeleteDialog({
      ...deleteDialog,
      open: true,
      id: id,
    });
  };

  const [deleteDialog, setDeleteDialog] = React.useState<{
    type: 'departments';
    open: boolean;
    id: string | number | null;
  }>({
    type: 'departments',
    open: false,
    id: null,
  });

  const handleAddDepartment = async ({ name: department }) => {
    if (department.trim() !== '') {
      await manageDepartments({
        type: 'insert',
        data: [{ recruiter_id: recruiter.id, name: department }],
      }).catch((err) => {
        toast({
          title: String(err).includes('unique_deps')
            ? `Department is already exists.`
            : String(err),
          description: '',
        });
      });
      refetchDepartments();
    }
  };
  let initialDepartments = [];

  if (localStorage?.getItem('departments')) {
    if (Array.isArray(JSON.parse(localStorage?.getItem('departments')))) {
      initialDepartments = JSON.parse(localStorage?.getItem('departments'));
    }
  }
  return (
    <>
      {deleteDialog.open && deleteDialog.type === 'departments' && (
        <DeleteDepartmentsDialog
          handleDelete={() =>
            deleteDialog.id &&
            manageDepartments({
              type: 'delete',
              data: [deleteDialog.id as number],
            }).then(() => {
              setDeleteDialog({ ...deleteDialog, open: false });
              refetchDepartments();
            })
          }
          handleClose={() => setDeleteDialog({ ...deleteDialog, open: false })}
          open={deleteDialog.open}
          id={deleteDialog.id as number}
        />
      )}
      <div className='mx-auto'>
        <h1 className='text-lg font-semibold mb-1'>Departments</h1>
        <p className='text-md text-gray-600 mb-6'>
          Catalog your departments to sort and filter data efficiently, aiding
          in job posting and scheduling.
        </p>
        <div className='flex flex-wrap gap-2 mb-6 items-center'>
          <AddChip
            options={departments.map((item) => ({
              name: item.name,
              id: String(item.id),
            }))}
            suggestionsList={initialDepartments.map((item) => ({
              name: item,
              id: String(item),
            }))}
            handleAddDepartment={handleAddDepartment}
            placeholder='Enter new value...'
            btn={
              <Button variant='outline' size='sm' className='rounded-full'>
                <Plus className='h-4 w-4 mr-2' />
                Add keyword
              </Button>
            }
            handleRemoveKeyword={({ id }) => {
              handleRemoveKeyword(id);
            }}
          />
        </div>
      </div>
    </>
  );
}
