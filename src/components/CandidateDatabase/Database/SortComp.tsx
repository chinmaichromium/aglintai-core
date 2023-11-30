import Popover from '@mui/material/Popover';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Sort, SortButton } from '@/devlink';

import UISelect from '../../Common/Uiselect';
const sortdisplay = [
  { name: 'Name', value: 'first_name' },
  { name: 'Location', value: 'location' },
  { name: 'Current job title', value: 'job_title' },
];
const SortComp = () => {
  const [anchorlEl, setAnchorEl] = useState(null);
  const [sortType, setSortType] = useState('first_name');
  const [sortActive, setSortActive] = useState(true);
  const isDisabled = sortType.length === 0;
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const isDesc = router.query.sort_type === 'desc';
    if (isDesc) {
      setSortActive(false);
    } else {
      setSortActive(true);
    }
  }, [router.isReady, router.query]);
  const applySort = () => {
    router.query.sort_type = sortActive ? 'asc' : 'desc';
    router.query.sort_by_param = sortType;
    router.push(router);
    setAnchorEl(null);
  };

  const sortName = sortdisplay.filter(
    (s) => s.value === router.query.sort_by_param,
  )[0].name;

  return (
    <>
      <SortButton
        textSort={`${sortName} ${
          router.query.sort_type === 'asc' ? ' Asc' : ' Desc'
        }`}
        onClickSortby={{
          onClick: (e) => {
            setAnchorEl(e.currentTarget);
          },
        }}
      />
      <Popover
        open={Boolean(anchorlEl)}
        anchorEl={anchorlEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        keepMounted={false}
        sx={{
          '& .MuiPaper-root': {
            overflow: 'hidden',
          },
          top: 35,
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
      >
        <Sort
          isAscendingActive={sortActive}
          isDescendingActive={!sortActive}
          slotSortDrop={
            <UISelect
              defaultValue={'first_name'}
              menuOptions={sortdisplay}
              value={sortType}
              onChange={(e) => {
                if (e.target.value === '') return;
                setSortType(e.target.value as any);
              }}
            />
          }
          onClickApplySort={{
            onClick: () => {
              applySort();
            },
          }}
          onClickAscending={{
            onClick: () => {
              setSortActive(true);
            },
          }}
          onClickDescending={{
            onClick: () => {
              setSortActive(false);
            },
          }}
          isApplySortDisable={isDisabled}
        />
      </Popover>
    </>
  );
};

export default SortComp;
