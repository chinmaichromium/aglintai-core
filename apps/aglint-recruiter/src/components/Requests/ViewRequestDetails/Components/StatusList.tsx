import { GlobalBadge } from '@devlink2/GlobalBadge';
import { IconButtonSoft } from '@devlink3/IconButtonSoft';
import { Popover, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useRequests } from '@/context/RequestsContext';
import { type Request } from '@/queries/requests/types';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';
import toast from '@/utils/toast';
import { getStatusColor } from '../../_common/utils/getStatusColor';

function StatusList({ selectedFilter }: { selectedFilter: string }) {
  const { handleAsyncUpdateRequest } = useRequests();
  const { query } = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <IconButtonSoft
        onClickButton={{
          onClick: handleClick,
        }}
        iconName={'edit_square'}
        color={'neutral'}
        size={1}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack
          width={'130px'}
          padding={1}
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'self-start',
          }}
        >
          {['blocked', 'completed', 'in_progress', 'to_do']
            .filter((status) => status !== selectedFilter)
            .map((status: Request['status']) => (
              <Stack
                sx={{
                  cursor: 'pointer',
                }}
                key={status}
                onClick={async () => {
                  setAnchorEl(null);

                  await handleAsyncUpdateRequest({
                    payload: {
                      requestId: String(query?.id),
                      requestPayload: {
                        status: status,
                      },
                    },
                    loading: false,
                    toast: false,
                  });
                  toast.success('Request status updated successfully');
                }}
              >
                <GlobalBadge
                  size={1}
                  textBadge={capitalizeFirstLetter(status)}
                  color={getStatusColor({ status })}
                />
              </Stack>
            ))}
        </Stack>
      </Popover>
    </>
  );
}

export default StatusList;
