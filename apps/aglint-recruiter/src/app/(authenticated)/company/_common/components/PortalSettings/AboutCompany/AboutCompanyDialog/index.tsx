import { DialogDescription } from '@components/ui/dialog';
import { useState } from 'react';

import { useFlags } from '@/company/hooks/useFlags';
import { usePortalSettings } from '@/company/hooks/usePortalSettings';
import TipTapAIEditor from '@/components/Common/TipTapAIEditor';
import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';

export const AboutCompanyDialog = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsDialogOpen: (x: boolean) => void;
}) => {
  const { updateAbout, loading } = usePortalSettings();
  const { about } = useFlags();
  const [text, setText] = useState(about || '');
  const handleTextChange = (value: string) => {
    setText(value);
  };
  return (
    <UIDialog
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      title='Edit Company About'
      slotButtons={
        <>
          <UIButton
            variant='secondary'
            className='w-full'
            onClick={() => {
              setText(about || '');
              setIsDialogOpen(false); // Updated to close the dialog
            }}
          >
            Cancel
          </UIButton>
          <UIButton
            type='submit'
            className='w-full'
            isLoading={loading.isAboutUpdating}
            disabled={loading.isAboutUpdating}
            onClick={async () => {
              await updateAbout(text);
              setIsDialogOpen(false);
            }}
          >
            Save changes
          </UIButton>
        </>
      }
    >
      <DialogDescription>
        Edit the about section of your company.
      </DialogDescription>

      <div className='mt-4 rounded-md border border-muted-foreground bg-background'>
        <TipTapAIEditor
          enablAI={false}
          placeholder={''}
          minHeight='360px'
          height='330px'
          padding={'10px'}
          editor_type='email'
          isSize
          handleChange={handleTextChange}
          initialValue={about || undefined}
        />
      </div>
    </UIDialog>
  );
};
