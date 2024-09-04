import { ButtonGhost } from '@devlink/ButtonGhost';
import { Text } from '@devlink/Text';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import SearchField from '../SearchField/SearchField';
import { ShowCode } from '../ShowCode';
import DateRangeSelector from './DateRangeSelector';
import { type FilterTypes, FiltersComponent } from './FilterComponents';
import SortComponent, { type sortComponentType } from './SortComponent';

export default function FilterHeader({
  search,
  handelResetAll,
  filters,
  isResetAll,
  sort,
  dateRangeSelector,
  showFiltersByDefault,
  setShowFilters = (x) => {
    x;
  },
  layoutMode = 'right-align',
}: FilterHeaderType) {
  handelResetAll =
    handelResetAll ||
    (() => {
      filters.forEach((filter) => {
        switch (filter.type) {
          case 'filter':
          case 'nested-filter': {
            filter.setValue([]);
            break;
          }
          case 'multi-section-filter': {
            filter.setValue({});
            break;
          }
        }
      });
    });
  const isFiltersActive = filters.some((filter) => {
    switch (filter.type) {
      case 'filter': {
        return filter.value.length > 0;
      }
      case 'nested-filter': {
        return Object.keys(filter.value).length > 0;
      }
      case 'multi-section-filter': {
        return Object.values(filter.value).some((value) => value.length > 0);
      }
    }
  });

  const [debouncedSearch, setDebouncedSearch] = useState(search?.value ?? '');
  useEffect(() => {
    if (search?.setValue) {
      const timeout = setTimeout(() => search.setValue(debouncedSearch), 400);
      return () => clearTimeout(timeout);
    }
  }, [debouncedSearch]);

  return (
    <ShowCode>
      <ShowCode.When isTrue={layoutMode === 'left-align'}>
        <Stack
          direction={'row'}
          justifyContent={'end'}
          alignItems={'center'}
          width={'100%'}
        >
          <Stack justifyContent={'end'} direction={'row'} spacing={1}>
            {Boolean(sort) && <SortComponent {...sort} />}
            <Stack direction={'row'} gap={2} alignItems={'center'}>
              <Stack direction={'row'} gap={1}>
                {isResetAll && isFiltersActive && (
                  <ButtonGhost
                    isDisabled={!isFiltersActive}
                    textButton='Reset All'
                    size={2}
                    iconName='refresh'
                    color={'neutral'}
                    isLeftIcon
                    onClickButton={{ onClick: handelResetAll }}
                  />
                )}
                <FiltersComponent
                  filters={filters}
                  showFilters={showFiltersByDefault}
                  setShowFilters={setShowFilters}
                />
                {Boolean(dateRangeSelector) && (
                  <DateRangeSelector {...dateRangeSelector} />
                )}
              </Stack>
            </Stack>
            {Boolean(search) && (
              <SearchField
                value={debouncedSearch}
                onChange={(e) => setDebouncedSearch(e.target.value)}
                onClear={() => setDebouncedSearch('')}
                placeholder={search.placeholder}
              />
            )}
          </Stack>
        </Stack>
      </ShowCode.When>
      <ShowCode.When isTrue={layoutMode === 'right-align'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Stack direction={'row'} spacing={2}>
            {Boolean(search) && (
              <SearchField
                value={debouncedSearch}
                onChange={(e) => setDebouncedSearch(e.target.value)}
                onClear={() => setDebouncedSearch('')}
                placeholder={search.placeholder}
              />
            )}
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              flexGrow={1}
            >
              <Stack direction={'row'} gap={2} alignItems={'center'}>
                <Text size={2} color={'neutral'} content={'Filters'} />
                <Stack direction={'row'} gap={2}>
                  <FiltersComponent
                    filters={filters}
                    showFilters={showFiltersByDefault}
                    setShowFilters={setShowFilters}
                  />
                  {Boolean(dateRangeSelector) && (
                    <DateRangeSelector {...dateRangeSelector} />
                  )}
                  {isResetAll && isFiltersActive && (
                    <ButtonGhost
                      isDisabled={!isFiltersActive}
                      textButton='Reset All'
                      size={1}
                      iconName='refresh'
                      color={'neutral'}
                      isLeftIcon
                      onClickButton={{ onClick: handelResetAll }}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {Boolean(sort) && <SortComponent {...sort} />}
        </Stack>
      </ShowCode.When>
    </ShowCode>
  );
}

export type FilterHeaderType = {
  handelResetAll?: () => void;
  search?: {
    value: string;
    // eslint-disable-next-line no-unused-vars
    setValue: (x: string) => void;
    placeholder?: string;
  };
  filters?: FilterTypes[];
  showFiltersByDefault?: string[];
  // eslint-disable-next-line no-unused-vars
  setShowFilters?: (x: string[]) => void;
  sort?: sortComponentType;
  isResetAll?: boolean;
  dateRangeSelector?: {
    name: string;
    values: string[];
    // eslint-disable-next-line no-unused-vars
    setValue: (x: any) => void;
    disablePast?: boolean;
  };
  layoutMode?: 'left-align' | 'right-align';
};
