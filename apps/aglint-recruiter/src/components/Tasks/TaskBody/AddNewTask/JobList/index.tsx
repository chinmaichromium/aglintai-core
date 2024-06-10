/* eslint-disable no-unused-vars */
import { Popover, Stack, Typography } from '@mui/material';
import { capitalize } from 'lodash';
import React from 'react';

import { EmptyState } from '@/devlink2/EmptyState';
import { ListCard } from '@/devlink3/ListCard';
import { ListPop } from '@/devlink3/ListPop';
import { ShowCode } from '@/src/components/Common/ShowCode';
import { useJobs } from '@/src/context/JobsContext';
import {
  capitalizeAll,
  capitalizeFirstLetter,
} from '@/src/utils/text/textUtils';

function JobList({
  selectedJob,
  setSelectedJob,
  isOptionList = true,
}: {
  selectedJob: { name: string; id: string };
  setSelectedJob: (x: { name: string; id: string }) => void;
  isOptionList: boolean;
}) {
  const {
    jobs: { data: jobs },
  } = useJobs();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Stack
        sx={{
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={handleClick}
      >
        <ShowCode>
          <ShowCode.When isTrue={!!selectedJob?.id}>
            <ListCard textList={capitalizeFirstLetter(selectedJob?.name)} />
          </ShowCode.When>
          <ShowCode.Else>
            <Typography variant='caption' fontSize={'14px'}>
              Select Job
            </Typography>
          </ShowCode.Else>
        </ShowCode>
      </Stack>
      <Popover
        id={id}
        open={open && isOptionList}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            border: 'none',
          },
        }}
      >
        <ListPop
          slotListCard={
            <ShowCode>
              <ShowCode.When isTrue={!!jobs.length}>
                {jobs.map((ele, i) => {
                  return (
                    <Stack
                      key={i}
                      p={'var(--space-1)'}
                      width={'100%'}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: 'var(--neutral-2)'
                        },
                      }}
                      onClick={() => {
                        setSelectedJob({ name: ele.job_title, id: ele.id });
                        handleClose();
                      }}
                    >
                      <ListCard
                        textList={capitalizeFirstLetter(ele.job_title)}
                      />
                    </Stack>
                  );
                })}
              </ShowCode.When>
              <ShowCode.Else>
                <EmptyState textDescription='No jobs found.' />
              </ShowCode.Else>
            </ShowCode>
          }
        />
      </Popover>
    </>
  );
}

export default JobList;
