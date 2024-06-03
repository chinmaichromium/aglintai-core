import { InputAdornment, Popover, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { MouseEvent, useEffect, useState } from 'react';

import { AddFilter } from '@/devlink2/AddFilter';
import { FilterList } from '@/devlink2/FilterList';
import { FilterPill } from '@/devlink2/FilterPill';
import Icon from '@/src/components/Common/Icons/Icon';
import { ShowCode } from '@/src/components/Common/ShowCode';
import UITextField from '@/src/components/Common/UITextField';
import { capitalizeAll } from '@/src/utils/text/textUtils';

import { useScheduleStatesContext } from '../ScheduleStatesContext';
import { FilterOptionsType } from '../types';
import { filterOptions, getListItems } from '../utils';
import FilterChip from './FilterChip';

function Filters() {
  const {
    allSchedules,
    setFilterSchedule,
    filterSchedules,
    setLoadingSchedules,
  } = useScheduleStatesContext();

  const [selectedFilters, setSelectedFilters] = useState<FilterOptionsType[]>(
    [],
  );

  useEffect(() => {
    if (typeof window != 'undefined') {
      const localSetFilterNames = JSON.parse(
        localStorage.getItem('schedulesFilter'),
      ) as string[];
      if (localSetFilterNames) {
        const defaultFilters = filterOptions.filter((ele) =>
          localSetFilterNames.includes(ele.name),
        );
        setSelectedFilters([...defaultFilters]);
      }
    }
  }, []);
  const scheduleFilterIds =
    JSON.parse(localStorage.getItem('scheduleFilterIds')) || {};
  const [selectedStatus, setSelectedStatus] = useState<string[]>(
    scheduleFilterIds?.status || [],
  );
  const [selectedMembers, setSelectedMembers] = useState<string[]>(
    scheduleFilterIds?.member || [],
  );
  const [selectedJob, setSelectedJob] = useState<string[]>(
    scheduleFilterIds?.job || [],
  );
  const [selectedScheduleType, setSelectedScheduleType] = useState<string[]>(
    scheduleFilterIds?.schedule_type || [],
  );
  const [selectedDateRange, setSelectedDateRange] = useState<string[]>(
    scheduleFilterIds?.date_range || [],
  );

  // popOver
  const [openFilterOptions, setOpenFilterOptions] =
    useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenFilterOptions(event.currentTarget);
  };
  const handleClose = () => {
    setOpenFilterOptions(null);
  };
  const open = Boolean(openFilterOptions);
  const id = open ? 'simple-popover' : undefined;

  // popOver end

  const handleOnSelectItem = (
    ids: string[],
    filterTypeName: FilterOptionsType['name'],
  ) => {
    if (filterTypeName === 'status') {
      setSelectedStatus(ids);
      scheduleFilterIds.status = ids;
    }
    if (filterTypeName === 'member') {
      setSelectedMembers(ids);
      scheduleFilterIds.member = ids;
    }
    if (filterTypeName === 'job') {
      setSelectedJob(ids);
      scheduleFilterIds.job = ids;
    }
    if (filterTypeName === 'schedule_type') {
      setSelectedScheduleType(ids);
      scheduleFilterIds.schedule_type = ids;
    }
    if (filterTypeName === 'date_range') {
      setSelectedDateRange(ids);
      scheduleFilterIds.date_range = ids;
    }
    localStorage.setItem(
      'scheduleFilterIds',
      JSON.stringify(scheduleFilterIds),
    );
  };

  function getMeetingIdsForMembers() {
    const filteredMeetingIds = allSchedules
      .filter((schedule) =>
        schedule.users?.some((user) => selectedMembers.includes(user.id)),
      )
      .map((schedule) => schedule.interview_meeting.meeting_id);
    return filteredMeetingIds;
  }
  function getDateRangeSelected(e) {
    const filteredByDateRange = allSchedules
      .filter(
        (schedule) =>
          dayjs(schedule.interview_meeting.start_time).isAfter(
            dayjs(e[0]).add(-1, 'day'),
            'day',
          ) &&
          dayjs(schedule.interview_meeting.start_time).isBefore(
            dayjs(e[1]).add(1, 'day'),
            'day',
          ),
      )
      .map((schedule) => schedule.interview_meeting.meeting_id);
    return filteredByDateRange;
  }

  useEffect(() => {
    if (Array.isArray(allSchedules)) {
      const filteredSchedule = allSchedules.filter((schedule) => {
        const statusMatch =
          !selectedStatus.length ||
          selectedStatus.includes(String(schedule.interview_meeting.status));
        const memberMatch =
          !getMeetingIdsForMembers().length ||
          getMeetingIdsForMembers().includes(
            String(schedule.interview_meeting.meeting_id),
          );
        const jobMatch =
          !selectedJob.length ||
          selectedJob.includes(String(schedule.interview_meeting.job_id));
        const scheduleTypeMatch =
          !selectedScheduleType.length ||
          selectedScheduleType.includes(
            String(schedule.interview_meeting.schedule_type),
          );

        const dateRangeMatch =
          !selectedDateRange.length ||
          getDateRangeSelected(selectedDateRange).includes(
            String(schedule.interview_meeting.meeting_id),
          );
        return (
          statusMatch &&
          memberMatch &&
          jobMatch &&
          scheduleTypeMatch &&
          dateRangeMatch
        );
      });
      setFilterSchedule(filteredSchedule);
      setLoadingSchedules(false);
    }
  }, [
    selectedMembers,
    selectedStatus,
    selectedJob,
    selectedScheduleType,
    selectedDateRange,
    allSchedules,
  ]);

  return (
    <Stack direction={'row'} spacing={'10px'}>
      <UITextField
        width='400px'
        // value={'changeText'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Icon variant='JobSearch' height='14' />
            </InputAdornment>
          ),
        }}
        placeholder={'Search by session name'}
        onChange={(e) => {
          if (e.target.value) {
            const filteredSchedules = filterSchedules.filter((ele) => {
              if (
                ele.interview_meeting.session_name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              ) {
                return ele;
              }
            });
            setFilterSchedule(filteredSchedules);
          }
          if (!e.target.value) {
            setFilterSchedule(allSchedules);
          }
        }}
        height={42}
      />
      {selectedFilters.map((filterType, i) => {
        let itemList: { label: string; id: string }[] =
          allSchedules &&
          allSchedules.length &&
          getListItems({
            allSchedules,
            filterType,
          });
        return (
          <FilterChip
            handleChange={(ids: string[]) => {
              handleOnSelectItem(ids, filterType.name);
            }}
            resetSelectedItem={(ids) => {
              handleOnSelectItem(ids, filterType.name);
            }}
            removeFilter={() => {
              const tempList = selectedFilters.filter(
                (ele) => ele.name !== filterType.name,
              );
              setSelectedFilters([...tempList]);
              localStorage.setItem(
                'schedulesFilter',
                JSON.stringify([...tempList].map((ele) => ele.name)),
              );
            }}
            itemList={itemList || []}
            key={i}
            filterType={filterType}
            defaultSelectedIds={
              scheduleFilterIds && scheduleFilterIds[String(filterType.name)]
            }
          />
        );
      })}

      <ShowCode.When isTrue={selectedFilters.length !== filterOptions.length}>
        <AddFilter
          onClickAddFilter={{
            onClick: handleClick,
          }}
        />
      </ShowCode.When>
      <Popover
        id={id}
        open={open}
        anchorEl={openFilterOptions}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            border: 'none',
          },
        }}
      >
        <FilterList
          slotFilterPill={filterOptions.map((filterOption, i) => {
            if (
              !selectedFilters
                .map((ele) => ele.name)
                .includes(filterOption.name)
            )
              return (
                <Stack
                  direction={'row'}
                  spacing={'10px'}
                  alignItems={'center'}
                  key={i}
                >
                  {filterOption.Icon}
                  <FilterPill
                    key={i}
                    onClickFilter={{
                      onClick: () => {
                        if (
                          selectedFilters
                            .map((ele) => ele.name)
                            .includes(filterOption.name)
                        ) {
                          const tempList = selectedFilters.filter(
                            (ele) => ele.name !== filterOption.name,
                          );
                          setSelectedFilters([...tempList]);
                          localStorage.setItem(
                            'schedulesFilter',
                            JSON.stringify(
                              [...tempList].map((ele) => ele.name),
                            ),
                          );
                        } else {
                          setOpenFilterOptions(null);
                          localStorage.setItem(
                            'schedulesFilter',
                            JSON.stringify(
                              [...selectedFilters, filterOption].map(
                                (ele) => ele.name,
                              ),
                            ),
                          );
                          setSelectedFilters((pre) => [...pre, filterOption]);
                        }
                      },
                    }}
                    textFilterName={capitalizeAll(
                      filterOption.name.replaceAll('-', ' '),
                    )}
                  />
                </Stack>
              );
          })}
        />
      </Popover>
    </Stack>
  );
}

export default Filters;
