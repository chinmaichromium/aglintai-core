import { Dialog, Stack } from '@mui/material';

import { ResumeWrap } from '@/devlink3/ResumeWrap';
import Loader from '@/src/components/Common/Loader';

const ResumePreviewer = ({
  open,
  onClose,
  id,
  url,
  name,
  handleUp = null,
  handleDown = null,
}: {
  open: boolean;
  onClose: () => void;
  id: string;
  name: string;
  url: string;
  handleUp?: () => void;
  handleDown?: () => void;
}) => {
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '0px !important',
          border: 'none !important',
          backgroundColor: '#343639',
        },
        '.MuiDialog-container': {
          height: 'auto',
        },
      }}
      fullWidth
      maxWidth={'lg'}
      open={open}
      onClose={() => onClose()}
    >
      <ResumeWrap
        key={id}
        textName={name}
        onClickDown={{
          style: { display: handleDown ? 'flex' : 'none' },
          onClick: () => handleDown(),
        }}
        slotBookmark={<></>}
        onClickUp={{
          style: { display: handleUp ? 'flex' : 'none' },
          onClick: () => handleUp(),
        }}
        onClickClose={{ onClick: () => onClose() }}
        slotResume={
          <Stack
            direction={'row'}
            justifyContent={'center'}
            height={'85vh'}
            position={'relative'}
          >
            <Stack
              width={'100%'}
              height={'100%'}
              position={'absolute'}
              zIndex={1}
            >
              <Embed url={url} />
            </Stack>
            <Stack
              position={'absolute'}
              width={'100%'}
              height={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              zIndex={0}
            >
              <Loader />
            </Stack>
          </Stack>
        }
      />
    </Dialog>
  );
};

export { ResumePreviewer };

function Embed({ url }: { url: string }) {
  const isDocOrDocx = /\.(doc|docx)$/i.test(url);
  return (
    <embed
      src={
        isDocOrDocx
          ? `https://view.officeapps.live.com/op/embed.aspx?src=${url}`
          : url
      }
      title='resume'
      width='100%'
      height='100%'
    />
  );
}
