import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from '@components/ui/dialog';
import React from 'react';

interface DialogProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange?: (open: boolean) => void;
}

function CustomDialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogPortal>
        <DialogContent className='border-none bg-transparent p-0'>
          <div className='rounded-md bg-white shadow-lg'>{children}</div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default CustomDialog;
