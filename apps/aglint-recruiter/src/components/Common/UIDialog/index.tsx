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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClickPrimary = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClickSecondary = () => {},
  children,
  open,
  size = 'md',
  isPrimaryActionLoading = false,
}: {
  slotButtons?: React.ReactNode;
  title?: string | React.ReactNode;
  onClose?: () => void;
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  children?: React.ReactNode;
  open: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isPrimaryActionLoading?: boolean;
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
        className={`${sizeClasses[size]} w-full border border-border p-4`}
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
                data-testid='dialog-secondary-button'
              >
                Cancel
              </UIButton>
              <UIButton
                variant='default'
                size='sm'
                onClick={onClickPrimary}
                isLoading={isPrimaryActionLoading}
                data-testid='dialog-primary-button'
              >
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
