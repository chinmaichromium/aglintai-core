import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog';
import React from 'react';

import { UIButton } from '../UIButton';

function UIDialog({
  slotButtons,
  title = 'Title',
  onClose = () => {},
  onClickPrimary = () => {},
  onClickSecondary = () => {},
  children,
  open,
  size = 'md',
}: {
  slotButtons?: React.ReactNode;
  title?: string;
  onClose?: () => void;
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  children?: React.ReactNode;
  open: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-3xl',
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={`${sizeClasses[size]} w-full`}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          {slotButtons ?? (
            <>
              <UIButton
                variant='secondary'
                size='sm'
                onClick={onClickSecondary}
              >
                Cancel
              </UIButton>
              <UIButton variant='default' size='sm' onClick={onClickPrimary}>
                Confirm
              </UIButton>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UIDialog;
