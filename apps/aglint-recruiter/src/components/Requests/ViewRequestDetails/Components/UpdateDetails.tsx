/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { capitalizeFirstLetter } from '@/utils/text/textUtils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { Label } from '@components/ui/label';
interface StatusListProps {
  updateButton: React.ReactNode;
  handleChange: ({ label, value }: { label: string; value: string }) => void;
  items: { label: string; value: string }[];
}
function UpdateDetails({ updateButton, handleChange, items }: StatusListProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{updateButton}</PopoverTrigger>
      <PopoverContent className='w-40 p-2' align='start' side='left'>
        <div className='flex flex-col space-y-2'>
          {items.map((item) => (
            <Label
              key={item.value}
              onClick={() => {
                handleChange(item);
                setOpen(false);
              }}
              className='cursor-pointer hover:bg-slate-200 p-2 rounded-md'
            >
              <span>{capitalizeFirstLetter(item.label)}</span>
            </Label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UpdateDetails;