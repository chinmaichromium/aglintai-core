/* eslint-disable no-unused-vars */
import { Button, Popover, Stack } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

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
  const [selectedDate, setSelectedDate] = useState([]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setSelectedDate([scheduleDate.start_date, scheduleDate.end_date]);
  }, [scheduleDate]);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Stack onClick={handleClick}>
        <ShowCode>
          <ShowCode.When isTrue={!!scheduleDate.end_date}>
            {scheduleDate.start_date ? (
              <>{`${dayjs(scheduleDate.start_date).format('MMM DD, YYYY')} ${dayjs(scheduleDate.end_date).toString() !== 'Invalid Date' ? ' - ' + dayjs(scheduleDate.end_date).format('MMM DD, YYYY') : ''}`}</>
            ) : (
              <>Select Date</>
            )}
          </ShowCode.When>
          <ShowCode.Else>
            {scheduleDate.start_date ? (
              <>{`${dayjs(scheduleDate.start_date).format('MMM DD, YYYY')}`}</>
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
                      setSelectedDate(e);
                    }}
                    value={
                      dayjs(scheduleDate.end_date).toString() == 'Invalid Date'
                        ? [
                            dayjs(scheduleDate.start_date),
                            dayjs(scheduleDate.start_date),
                          ]
                        : [
                            dayjs(scheduleDate.start_date),
                            dayjs(scheduleDate.end_date),
                          ]
                    }
                  />
                </ShowCode.When>
                <ShowCode.Else>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      disablePast
                      value={dayjs(selectedDate[0])}
                      onChange={(e) => {
                        setSelectedDate([e, null]);
                      }}
                    />
                  </LocalizationProvider>
                </ShowCode.Else>
              </ShowCode>
              <Stack justifyContent={'end'} direction={'row'} spacing={'10px'}>
                <Button
                  onClick={() => {
                    setAnchorEl(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    if (onChange) {
                      onChange(selectedDate);
                      setAnchorEl(null);
                    }
                  }}
                >
                  OK
                </Button>
              </Stack>
            </>
          }
        />
      </Popover>
    </>
  );
}

export default SelectScheduleDate;
