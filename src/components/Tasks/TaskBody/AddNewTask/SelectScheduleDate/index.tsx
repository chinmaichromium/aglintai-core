/* eslint-disable no-unused-vars */
import { Button, Popover, Stack } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';

import { TaskDate } from '@/devlink3';
import { ShowCode } from '@/src/components/Common/ShowCode';

import DateRange from '../../../Components/DateRange';

function SelectScheduleDate({
  scheduleDate,
  isOptionList = true,
  onChange,
}: {
  scheduleDate: { start_date: string; end_date: string };
  isOptionList?: boolean;
  onChange?: any;
}) {
  const [rangeActive, setRangeActive] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);

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
      <Stack onClick={handleClick}>
        <ShowCode>
          <ShowCode.When isTrue={!!scheduleDate.end_date}>
            {scheduleDate.start_date ? (
              <>{`${dayjs(scheduleDate.start_date).format('DD MMM YYYY')} - ${dayjs(scheduleDate.end_date).format('DD MMM YYYY')}`}</>
            ) : (
              <>Select Date</>
            )}
          </ShowCode.When>
          <ShowCode.Else>
            {scheduleDate.start_date ? (
              <>{`${dayjs(scheduleDate.start_date).format('DD MMM YYYY')}`}</>
            ) : (
              <>Select Date</>
            )}
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
          horizontal: 'right',
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
        <TaskDate
          onClickInDateRange={{
            onClick: () => {
              setRangeActive(true);
            },
          }}
          onClickSpecificDate={{
            onClick: () => {
              setRangeActive(false);
            },
          }}
          isInDateRangeActive={rangeActive}
          isSpecificDateActive={!rangeActive}
          slotDate={
            <>
              <ShowCode>
                <ShowCode.When isTrue={rangeActive}>
                  <DateRange
                    onChange={(e) => {
                      if (onChange) {
                        onChange(e);
                      }
                    }}
                    value={
                      scheduleDate.end_date
                        ? [scheduleDate.start_date, scheduleDate.end_date]
                        : []
                    }
                  />
                </ShowCode.When>
                <ShowCode.Else>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      disablePast
                      value={dayjs(scheduleDate.start_date)}
                      onChange={(e) => {
                        if (onChange) {
                          onChange(e);
                        }
                      }}
                    />
                  </LocalizationProvider>
                </ShowCode.Else>
              </ShowCode>
            </>
          }
        />
      </Popover>
    </>
  );
}

export default SelectScheduleDate;
