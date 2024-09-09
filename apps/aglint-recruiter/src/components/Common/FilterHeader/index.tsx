import { Button } from '@components/ui/button';
import { useEffect, useState } from 'react';

import SearchField from '../SearchField/SearchField';
import { ShowCode } from '../ShowCode';
import DateRangeSelector from './DateRangeSelector';
import { type FilterTypes, FiltersComponent } from './FilterComponents';
import SortComponent, { type sortComponentType } from './SortComponent';
import { RefreshCw, RotateCcw } from 'lucide-react';

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
        <div className='flex justify-end items-center w-full'>
          <div className='flex justify-end flex-row space-x-1'>
            {Boolean(sort) && <SortComponent {...sort} />}
            <div className='flex flex-row gap-2 items-center'>
              <div className='flex flex-row gap-1'>
                {isResetAll && isFiltersActive && (
                  <Button
                    variant='ghost'
                    disabled={!isFiltersActive}
                    size='sm'
                    onClick={handelResetAll}
                  >
                    <RefreshCw className='mr-2 h-4 w-4' />
                    Reset All
                  </Button>
                )}
                <FiltersComponent
                  filters={filters}
                  showFilters={showFiltersByDefault}
                  setShowFilters={setShowFilters}
                />
                {Boolean(dateRangeSelector) && (
                  <DateRangeSelector {...dateRangeSelector} />
                )}
              </div>
            </div>
            {Boolean(search) && (
              <SearchField
                value={debouncedSearch}
                onChange={(e) => setDebouncedSearch(e.target.value)}
                onClear={() => setDebouncedSearch('')}
                placeholder={search.placeholder}
              />
            )}
          </div>
        </div>
      </ShowCode.When>
      <ShowCode.When isTrue={layoutMode === 'right-align'}>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row space-x-2'>
            {Boolean(search) && (
              <SearchField
                value={debouncedSearch}
                onChange={(e) => setDebouncedSearch(e.target.value)}
                onClear={() => setDebouncedSearch('')}
                placeholder={search.placeholder}
              />
            )}
            <div className='flex flex-row justify-between flex-grow'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='flex flex-row gap-2'>
                  <FiltersComponent
                    filters={filters}
                    showFilters={showFiltersByDefault}
                    setShowFilters={setShowFilters}
                  />
                  {Boolean(dateRangeSelector) && (
                    <DateRangeSelector {...dateRangeSelector} />
                  )}
                  {isResetAll && isFiltersActive && (
                    <Button
                      variant='ghost'
                      disabled={!isFiltersActive}
                      size='sm'
                      onClick={handelResetAll}
                    >
                      <RotateCcw className='mr-2 h-4 w-4' />
                      Reset All
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {Boolean(sort) && <SortComponent {...sort} />}
        </div>
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
