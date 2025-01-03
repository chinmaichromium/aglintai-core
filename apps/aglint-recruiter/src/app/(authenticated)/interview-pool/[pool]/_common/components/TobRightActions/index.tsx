import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { Archive, ArchiveRestore, MoreHorizontal, Pen } from 'lucide-react';
import React from 'react';

import { UIButton } from '@/components/Common/UIButton';

import EditPoolDailog from '../../dialogs/EditPoolDailog';
import { useModuleAndUsers } from '../../hooks/useModuleAndUsers';
import { useUnArchivePool } from '../../hooks/useUnArchivePool';
import {
  setIsArchiveDialogOpen,
  setIsEditPoolDialogOpen,
} from '../../stores/store';

function ActionsInterviewPools() {
  const { data: editModule } = useModuleAndUsers();
  const { mutate } = useUnArchivePool();
  return (
    <>
      <EditPoolDailog />
      <Popover>
        <PopoverTrigger asChild>
          <UIButton
            variant='ghost'
            size='md'
            icon={<MoreHorizontal className='h-4 w-4' />}
          />
        </PopoverTrigger>
        <PopoverContent
          align='start'
          side='left'
          sideOffset={20}
          // alignOffset={-40}
          className='w-[150px] cursor-pointer rounded-md border border-border p-2'
        >
          <div
            className='flex items-center space-x-2 rounded-md border-none p-2 text-sm hover:bg-muted'
            onClick={() => {
              setIsEditPoolDialogOpen(true);
            }}
          >
            <>
              <Pen className='h-4 w-4' />
              <span>Edit</span>
            </>
          </div>
          <div
            className='flex items-center space-x-2 rounded-md border-none p-2 text-sm hover:bg-muted'
            onClick={() => {
              editModule.is_archived
                ? mutate({
                    id: editModule.id,
                    is_archived: false,
                  })
                : setIsArchiveDialogOpen(true);
            }}
          >
            {editModule?.is_archived ? (
              <>
                <Archive className='h-4 w-4' />
                <span>Unarchive</span>
              </>
            ) : (
              <>
                <ArchiveRestore className='h-4 w-4' />
                <span>Archive</span>
              </>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ActionsInterviewPools;
