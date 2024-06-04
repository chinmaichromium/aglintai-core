/* eslint-disable no-unused-vars */
import { Dialog, Typography } from '@mui/material';
import React from 'react';

import { DeletePopup } from '@/devlink3/DeletePopup';
import { ResumePop } from '@/devlink3/ResumePop';
import { ShowCode } from '@/src/components/Common/ShowCode';

function DeleteMemberDialog({
  name,
  openForDelete,
  openForCancel,
  action,
  warning,
  close,
}: {
  name: string;
  openForDelete: boolean;
  openForCancel: boolean;
  action: (x: null) => void;
  warning?: string;
  close: () => void;
}) {
  return (
    <Dialog
      open={openForDelete || openForCancel}
      onClose={() => {
        // resetState();
        close();
      }}
    >
      <ShowCode>
        <ShowCode.When isTrue={openForDelete}>
          <DeletePopup
            textTitle={
              <Typography variant='body1bold'>
                Delete the member:{' '}
                <span style={{ color: 'var(--error-11)' }}>{name}</span>
              </Typography>
            }
            textDescription={
              <>
                <Typography variant='body1'>
                  By clicking delete the member will be permanently deleted.
                </Typography>
                {warning && (
                  <>
                    <br />
                    <Typography variant='body1' color={'var(--error-11)'}>
                      Warning: {warning}
                    </Typography>
                  </>
                )}
              </>
            }
            isIcon={false}
            isWidget={true}
            onClickCancel={{ onClick: close }}
            onClickDelete={{
              onClick: action,
            }}
            buttonText={'Delete'}
          />
        </ShowCode.When>
        <ShowCode.When isTrue={openForCancel}>
          <DeletePopup
            textTitle={
              <Typography variant='body1bold'>
                Cancel invitation to:{' '}
                <span style={{ color: 'var(--warning-11)' }}>{name}</span>
              </Typography>
            }
            textDescription={
              <Typography variant='body1'>
                By clicking cancel invitation will be cancelled and removed from
                the members list.
              </Typography>
            }
            isIcon={false}
            isWidget={true}
            onClickCancel={{ onClick: close }}
            onClickDelete={{
              onClick: action,
            }}
            buttonText={'Cancel Invite'}
          />
        </ShowCode.When>
      </ShowCode>
    </Dialog>
  );
}

export default DeleteMemberDialog;
