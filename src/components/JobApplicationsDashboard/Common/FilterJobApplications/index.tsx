/* eslint-disable security/detect-object-injection */
import { Slider, Stack } from '@mui/material';
import { ValueOf } from 'next/dist/shared/lib/constants';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ButtonOutlinedRegular, Checkbox } from '@/devlink';
import { CandidateFilter, CandidateFilterBody } from '@/devlink2';
import AUIButton from '@/src/components/Common/AUIButton';
import RefreshBtn from '@/src/components/Common/RefreshButton';
import UITextField from '@/src/components/Common/UITextField';
import { useJobApplications } from '@/src/context/JobApplicationsContext';
import { JobApplicationSections } from '@/src/context/JobApplicationsContext/types';
import { CountJobs } from '@/src/context/JobsContext/types';

import {
  getBoundingSingleStatus,
  getBoundingStatus,
  useMouseClick,
} from '../../hooks';
import { capitalize, FilterParameter } from '../../utils';

const FilterJobApplications = ({
  setApplicationLimit,
}: {
  setApplicationLimit: Dispatch<SetStateAction<CountJobs>>;
}) => {
  const {
    searchParameters,
    // handleJobApplicationFilter,
    // applicationDisable,
    section,
  } = useJobApplications();
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filters, setFilters] = useState(searchParameters.filter);
  const filterCount = Object.entries(searchParameters.filter).reduce(
    (acc, [key, value]) => {
      if (
        !(
          key === 'interview_score' && section === JobApplicationSections.NEW
        ) &&
        (value as any).active
      )
        acc += 1;
      return acc;
    },
    0,
  );
  const handleClose = () => {
    if (filterVisibility) {
      setFilterVisibility(false);
      setFilters(searchParameters.filter);
    }
  };

  useEffect(() => {
    setFilters(searchParameters.filter);
  }, [section]);
  return (
    <Stack id={'FILTERPARENT'}>
      <CandidateFilter
        filterCount={filterCount}
        isCountVisible={filterCount > 0}
        filterHeaderProps={{
          onClick: () => {
            if (!filterVisibility) setFilterVisibility(true);
          },
        }}
        slotBody={
          <ApplicationFilterBody
            filters={filters}
            setFilters={setFilters}
            handleClose={handleClose}
            setApplicationLimit={setApplicationLimit}
          />
        }
        isFilterBodyVisible={filterVisibility}
      />
    </Stack>
  );
};

const ApplicationFilterBody = ({
  filters,
  setFilters,
  handleClose,
  setApplicationLimit,
}: {
  filters: FilterParameter;
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
  handleClose: () => void;
  setApplicationLimit: Dispatch<SetStateAction<CountJobs>>;
}) => {
  const {
    section,
    defaultFilters,
    searchParameters,
    handleJobApplicationFilter,
    applicationDisable,
    setApplicationDisable,
  } = useJobApplications();

  const handleResetSection = (section: keyof FilterParameter) => {
    setFilters((prev) => ({
      ...prev,
      [section]: { ...defaultFilters[section] },
    }));
  };

  const handleCancel = () => {
    setFilters(searchParameters.filter);
  };

  const handleSubmit = async (filters: FilterParameter) => {
    const { newFilters } = validateFilters(filters, defaultFilters);
    if (!applicationDisable) {
      setFilters({ ...newFilters });
      setApplicationDisable(true);
      const { confirmation, count } = await handleJobApplicationFilter({
        ...searchParameters,
        filter: { ...newFilters },
      });
      if (confirmation) {
        setApplicationLimit(count);
      }
      setApplicationDisable(false);
    }
  };
  const isDefault = captureChanges(filters, defaultFilters, section);
  const hasChanges = captureChanges(filters, searchParameters.filter, section);
  const filterButtons = (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={1}
      width={'100%'}
    >
      <Stack mr={'auto'}>
        <RefreshBtn
          isDisabled={!isDefault || applicationDisable}
          onClick={async () => {
            if (!(!isDefault || applicationDisable))
              await handleSubmit({ ...defaultFilters });
          }}
          text={'Reset'}
          animatedDisable={false}
        />
      </Stack>
      <ButtonOutlinedRegular
        onClickButton={{
          onClick: async () => {
            if (!(!hasChanges || applicationDisable)) await handleCancel();
          },
        }}
        isDisabled={!hasChanges || applicationDisable}
        textLabel={'Cancel'}
      />
      <AUIButton
        onClick={async () => {
          if (!(!hasChanges || applicationDisable))
            await handleSubmit({ ...filters });
        }}
        disabled={!hasChanges || applicationDisable}
      >
        Apply filters
      </AUIButton>
    </Stack>
  );
  const clickData = useMouseClick();
  useEffect(() => {
    if (clickData.click && clickData.x !== -1 && clickData.y !== -1) {
      if (getBoundingSingleStatus('FILTERPARENT', clickData.x, clickData.y))
        setTimeout(() => handleClose(), 400);
      else if (!getBoundingStatus('FILTERBODY', clickData.x, clickData.y))
        handleClose();
    }
  }, [clickData.click]);
  return (
    <Stack id={'FILTERBODY'}>
      <CandidateFilterBody
        slotFilters={
          <CandidateFilters
            filters={filters}
            setFilters={setFilters}
            handleResetSection={handleResetSection}
          />
        }
        slotButtons={filterButtons}
      />
    </Stack>
  );
};

const validateFilters = (
  filters: FilterParameter,
  defaultFilters: FilterParameter,
) => {
  const newFilters = Object.entries(filters).reduce(
    (acc, [key, val]) => {
      switch (key) {
        case 'location': {
          if (
            (val as FilterParameter['location']).active &&
            (val as FilterParameter['location']).name ===
              defaultFilters[key].name
          ) {
            return { ...acc, [key]: { ...defaultFilters[key] } };
          }
          return acc;
        }
        case 'resume_score':
        case 'interview_score': {
          return acc;
        }
      }
    },
    { ...filters },
  );
  return { newFilters };
};

const captureChanges = (
  filters: FilterParameter,
  mainFilters: FilterParameter,
  section: JobApplicationSections,
) => {
  return Object.entries(mainFilters).reduce((acc, [key, value]) => {
    if (
      acc ||
      (key === 'interview_score' && section === JobApplicationSections.NEW)
    )
      return acc;
    else {
      return Object.entries(value).reduce((acc2, [key2, value2]) => {
        if (acc2) return acc2;
        else {
          return filters[key][key2] !== value2;
        }
      }, false);
    }
  }, false);
};

const CandidateFilters = ({
  filters,
  setFilters,
  handleResetSection,
}: {
  filters: FilterParameter;
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
  // eslint-disable-next-line no-unused-vars
  handleResetSection: (section: keyof FilterParameter) => void;
}) => {
  const { section } = useJobApplications();
  return (
    <Stack gap={'40px'}>
      {Object.entries(filters).map(([key, val], i) =>
        section === JobApplicationSections.NEW && key === 'interview_score' ? (
          <></>
        ) : (
          <CandidateFilterCheckbox
            key={i}
            keyString={key as keyof FilterParameter}
            valObj={val as ValueOf<FilterParameter>}
            setFilters={setFilters}
            handleResetSection={handleResetSection}
          >
            <Stack
              width={'400px'}
              style={{ transform: 'translateX(30px)' }}
              mt={'10px'}
            >
              <CandidateFilterOptionBody
                keyString={key as keyof FilterParameter}
                valObj={val as ValueOf<FilterParameter>}
                setFilters={setFilters}
              />
            </Stack>
          </CandidateFilterCheckbox>
        ),
      )}
    </Stack>
  );
};

const CandidateFilterCheckbox = ({
  keyString,
  valObj,
  setFilters,
  children,
  handleResetSection,
}: {
  keyString: keyof FilterParameter;
  valObj: ValueOf<FilterParameter>;
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
  // eslint-disable-next-line no-unused-vars
  handleResetSection: (section: keyof FilterParameter) => void;
  children: React.JSX.Element;
}) => {
  const handleCheck = () => {
    valObj.active
      ? handleResetSection(keyString)
      : setFilters((prev) => ({
          ...prev,
          [keyString]: { ...prev[keyString], active: !prev[keyString].active },
        }));
  };
  return (
    <Stack>
      <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
        <Checkbox
          onClickCheck={{ onClick: () => handleCheck() }}
          isChecked={valObj.active}
        />
        <Stack
          style={{
            fontWeight: '600',
            transform: 'translateY(-1px)',
            opacity: valObj.active ? 1 : 0.4,
          }}
        >
          {`${capitalize(keyString)} ${getUnit(keyString)}`}
        </Stack>
      </Stack>
      <Stack style={{ opacity: valObj.active ? 1 : 0.4 }}>{children}</Stack>
    </Stack>
  );
};

const getUnit = (keyString: keyof FilterParameter) => {
  switch (keyString) {
    case 'location':
      return '(km)';
    case 'resume_score':
    case 'interview_score':
      return '';
  }
};

const CandidateFilterOptionBody = ({
  keyString,
  valObj,
  setFilters,
}: {
  keyString: keyof FilterParameter;
  valObj: ValueOf<FilterParameter>;
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
}) => {
  switch (keyString) {
    case 'resume_score':
    case 'interview_score':
      return (
        <CandidateFilterDualSlider
          keyString={keyString}
          range={valObj as any}
          setFilters={setFilters}
        />
      );
    case 'location':
      return (
        <CandidateLocationFilter
          keyString={keyString}
          value={valObj as any}
          setFilters={setFilters}
        />
      );
  }
};

const CandidateFilterDualSlider = ({
  keyString,
  range,
  setFilters,
}: {
  keyString: keyof FilterParameter;
  range: FilterParameter['resume_score'];
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
}) => {
  const minRange = 10;
  const handleRangeChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < minRange) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minRange);
        setFilters((prev) => ({
          ...prev,
          [keyString]: {
            min: clamped,
            max: clamped + minRange,
            active: true,
          },
        }));
      } else {
        const clamped = Math.max(newValue[1], minRange);
        setFilters((prev) => ({
          ...prev,
          [keyString]: {
            min: clamped - minRange,
            max: clamped,
            active: true,
          },
        }));
      }
    } else {
      setFilters((prev) => ({
        ...prev,
        [keyString]: {
          min: newValue[0],
          max: newValue[1],
          active: true,
        },
      }));
    }
  };
  return (
    <Slider
      className='reverse-slider-job-applications'
      value={[range.min, range.max]}
      onChange={handleRangeChange}
      valueLabelDisplay='on'
      disableSwap
      sx={{
        color: '#1F73B7',
        '& .MuiSlider-valueLabelOpen': {
          backgroundColor: 'transparent !important',
        },
        '& .MuiSlider-valueLabelLabel': {
          color: 'black !important',
        },
      }}
    />
  );
};

const CandidateLocationFilter = ({
  keyString,
  value,
  setFilters,
}: {
  keyString: keyof FilterParameter;
  value: FilterParameter['location'];
  setFilters: Dispatch<SetStateAction<FilterParameter>>;
}) => {
  const handleOnFocus = () => {
    setFilters((prev) => ({
      ...prev,
      [keyString]: { ...prev[keyString], active: true },
    }));
  };
  const handleChange = (e: any) => {
    setFilters((prev) => ({
      ...prev,
      [keyString]: {
        ...prev[keyString],
        name: e?.target?.value || null,
        active: true,
      },
    }));
  };
  const handleSliderChange = (event: Event) => {
    setFilters((prev) => ({
      ...prev,
      [keyString]: {
        ...prev[keyString],
        value: (event.target as any).value,
        active: true,
      },
    }));
  };
  return (
    <Stack gap={'15px'}>
      <UITextField
        value={value.name || ''}
        placeholder='Location'
        onFocus={() => handleOnFocus()}
        onChange={(e) => handleChange(e)}
      />
      <Stack style={{ fontWeight: 400, fontSize: '14px' }}>
        {`Consider also candidates within the mentioned radius (in km)`}
      </Stack>
      <Slider
        className='reverse-slider-job-applications'
        value={value.value}
        onChange={handleSliderChange}
        valueLabelDisplay='on'
        max={1000}
        min={50}
        step={50}
        sx={{
          color: '#1F73B7',
          '& .MuiSlider-valueLabelOpen': {
            backgroundColor: 'transparent !important',
          },
          '& .MuiSlider-valueLabelLabel': {
            color: 'black !important',
          },
        }}
      />
    </Stack>
  );
};

export default FilterJobApplications;
