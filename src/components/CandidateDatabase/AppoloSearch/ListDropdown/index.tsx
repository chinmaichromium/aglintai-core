import { Popover } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { SavedList, SavedListMenu } from '@/devlink';
import { useBoundStore } from '@/src/store';

function ListDropdown({ anchorEl, handleClose, setAnchorEl }) {
  const router = useRouter();
  const lists = useBoundStore((state) => state.lists);
  const setSelectedCandidate = useBoundStore(
    (state) => state.setSelectedCandidate,
  );
  const setSelectedCandidates = useBoundStore(
    (state) => state.setSelectedCandidates,
  );
  const setIsSelectAll = useBoundStore((state) => state.setIsSelectAll);

  const open = Boolean(anchorEl);
  const id = open ? 'drop' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{ vertical: -14, horizontal: 220 }}
      slotProps={{
        paper: {
          style: {
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px 0px rgba(4, 68, 77, 0.15)',
          },
        },
      }}
    >
      <SavedListMenu
        isBottomWrapVisible={false}
        isCreateListVisible={false}
        isInputVisible={false}
        slotSavedList={
          <>
            {lists.map((list) => (
              <SavedList
                key={list.id}
                textRole={list.name}
                textCountCandidate={`(${list.candidates.length} candidates)`}
                onClickList={{
                  onClick: () => {
                    setAnchorEl(null);
                    router.push(`/candidates/aglintdb?list=${list.id}`);
                    setSelectedCandidates([]);
                    setIsSelectAll(false);
                    setSelectedCandidate(null);
                  },
                }}
              />
            ))}
            {lists.length === 0 && "You don't have any saved list"}
          </>
        }
      />
    </Popover>
  );
}

export default ListDropdown;
