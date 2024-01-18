import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';

import { SavedChanges } from '@/devlink';
import { palette } from '@/src/context/Theme/Theme';

import { JobFormState } from '../JobPostFormProvider';

const SyncStatus = ({ status }: { status: JobFormState['syncStatus'] }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (status === 'saving') {
      setShow(true);
    } else if (status === 'saved') {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [status]);

  if (show && status === 'saving') {
    return (
      <Stack direction={'row'} gap={0.5} alignItems={'center'}>
        <SavedChanges
          slotLoaderIcon={
            <>
              <CircularProgress
                color='inherit'
                size={'15px'}
                sx={{ color: palette.grey[400] }}
              />
            </>
          }
          isSaved={status !== 'saving'}
          isSaving={status === 'saving'}
        />
      </Stack>
    );
  }

  if (show && status === 'saved') {
    return (
      <SavedChanges
        slotLoaderIcon={<></>}
        isSaved={status === 'saved'}
        isSaving={status !== 'saved'}
      />
      // <Stack direction={'row'} gap={0.5} alignItems={'center'}>
      //   <UITypography color={palette.green[600]} type='small' fontBold='normal'>
      //     Saved to draft
      //   </UITypography>
      //   <Image
      //     alt='save'
      //     width={'14'}
      //     height={'14'}
      //     src={'/images/svg/greenCheck.svg'}
      //   />
      // </Stack>
    );
  }

  return <></>;
};

export default SyncStatus;
