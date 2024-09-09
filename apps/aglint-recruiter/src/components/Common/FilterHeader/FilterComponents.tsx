import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import { AddFilter } from '@devlink2/AddFilter';
import { ButtonFilter } from '@devlink2/ButtonFilter';
import { FilterDropdown } from '@devlink2/FilterDropdown';

import { FilterItem } from '@devlink3/FilterItem';
import { MultiFilterLayout } from '@devlink3/MultiFilterLayout';
import { List, ListItemButton, Popover, Stack } from '@mui/material';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
import React, { type ReactNode, memo } from 'react';

import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import UITextField from '../UITextField';
import ToggleBtn from '../UIToggle';
import {
  type nestedType,
  nestedOptionMapper,
  setValueInNestedObject,
} from './utils';
import { Skeleton } from '@components/ui/skeleton';

/* eslint-disable no-unused-vars */

type dynamicOptionsTypes =
  | string[]
  | { id: string; label: string }[]
  | { header: string; options: { id: string; label: string }[] }[]
  | {
      header: string;
      path: string[];
      options: { id: string; label: string }[];
    }[];

type FilterMultiSectionFilterType = {
  name: string;
  icon?: ReactNode;
  options: { [section: string]: dynamicOptionsTypes };
  value: { [section: string]: string[] };
  setValue: (value: { [section: string]: string[] }) => void;
  isVisible?: boolean;
};
type FilterNestedType = {
  name: string;
  icon?: ReactNode;
  options: nestedType<string[] | { id: string; label: string }[]>;
  value: nestedType<string[]>;
  sectionHeaders: string[];
  setValue: (value: nestedType<string[]>) => void;
  isVisible?: boolean;
  showCount?: boolean;
};

export type FilterComponentType = {
  name: string;
  icon?: ReactNode;
  options: dynamicOptionsTypes;
  value: string[];
  filterSearch?: boolean;
  searchPlaceholder?: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: string[]) => void;
  isVisible?: boolean;
  multiSelect?: boolean;
  loading?: boolean;
};
/* eslint-enable no-unused-vars */
export type FilterTypes =
  | ({
      type: 'filter';
    } & FilterComponentType)
  | ({
      type: 'multi-section-filter';
    } & FilterMultiSectionFilterType)
  | ({
      type: 'nested-filter';
    } & FilterNestedType)
  | {
      type: 'button';
      name: string;
      onClick: () => void;
      isActive: boolean;
      isVisible?: boolean;
    };

type showFilterMapperType<T> = T extends { name: infer N } ? N : never;

export function FiltersComponent({
  filters: tempFilters,
  showFilters,
  setShowFilters = (names) => {
    names;
  },
}: {
  filters: FilterTypes[];
  showFilters?: showFilterMapperType<FilterTypes>[];
  // eslint-disable-next-line no-unused-vars
  setShowFilters?: (names: string[]) => void;
}) {
  const filters = !showFilters
    ? tempFilters?.map((filter) => {
        filter.isVisible = true;
        return filter;
      })
    : tempFilters?.map((filter) => {
        filter.isVisible = showFilters.includes(filter.name);
        return filter;
      });

  function handelSetVisible(index: number) {
    const tempSF = [...showFilters];
    tempSF.push(tempFilters[Number(index)].name);
    setShowFilters(tempSF);
  }

  return (
    <>
      {filters
        .filter((item) => {
          return item.isVisible;
        })
        .map((filter, index) => FilterSwitcher(filter, index))}

      {Boolean(showFilters) && (
        <AddFilterComp
          filterList={filters
            .map((item, index) => ({
              name: item.name,
              index,
              isVisible: item.isVisible,
            }))
            .filter((item) => !item.isVisible)}
          setVisible={handelSetVisible}
        />
      )}
    </>
  );
}

function FilterSwitcher(filter: FilterTypes, index: number) {
  switch (filter.type) {
    case 'filter':
      return (
        <FilterComponent
          key={index}
          name={capitalizeFirstLetter(filter.name || '')}
          searchPlaceholder={filter.searchPlaceholder}
          options={filter.options}
          filterSearch={filter.filterSearch}
          value={filter.value}
          setValue={(values) => {
            filter.setValue(values);
          }}
          icon={filter.icon}
          multiSelect={filter.multiSelect}
          loading={filter.loading}
        />
      );
    case 'multi-section-filter': {
      return (
        <MultiSectionFilterComponent
          key={index}
          title={capitalizeFirstLetter(filter.name || '')}
          itemListSections={filter.options}
          selectedItems={filter.value}
          setSelectedItems={(values) => {
            filter.setValue(values);
          }}
          icon={filter.icon}
        />
      );
    }
    case 'nested-filter': {
      return (
        <NestedFilterComponent
          key={index}
          title={capitalizeFirstLetter(filter.name || '')}
          nestedItems={filter.options}
          selectedItems={filter.value}
          sectionHeaders={filter.sectionHeaders}
          setSelectedItems={(values) => {
            filter.setValue(values);
          }}
          icon={filter.icon}
          showCount={filter.showCount}
        />
      );
    }
    case 'button':
      return (
        <ButtonFilter
          key={index}
          isActive={filter.isActive}
          isDotVisible={false}
          slotLeftIcon={
            <Stack style={{ pointerEvents: 'none' }}>
              <ToggleBtn isChecked={filter.isActive} />
            </Stack>
          }
          textLabel={capitalizeFirstLetter(filter.name || '')}
          onClickStatus={{ onClick: () => filter.onClick() }}
        />
      );
  }
}

export function FilterComponent({
  name: title,
  options: itemList,
  setValue: setSelectedItems,
  value: selectedItems,
  filterSearch = false,
  searchPlaceholder = '',
  multiSelect = true,
  icon,
  loading = false,
}: FilterComponentType) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const open = Boolean(anchorEl);
  const id = open ? 'jobs-filter' : undefined;
  function handleClose() {
    setAnchorEl(null);
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ButtonFilter
        isActive={Boolean(selectedItems.length)}
        isDotVisible={Boolean(selectedItems.length)}
        slotLeftIcon={<Stack>{icon}</Stack>}
        // isDotVisible={filter.job_ids.length > 0}
        onClickStatus={{
          onClick: handleClick,
        }}
        textLabel={title}
        slotRightIcon={
          <Stack>
            {anchorEl ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Stack>
        }
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ vertical: -10, horizontal: 0 }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: 'var(--radius-2)',
            borderColor: 'var(--neutral-6)',
            minWidth: '176px',
            backgroundColor: 'white',
          },
        }}
      >
        <FilterDropdown
          isRemoveVisible={false}
          isResetVisible={itemList.length !== 0}
          slotOption={
            loading ? (
              <Loader />
            ) : itemList.length ? (
              <FilterOptionsList
                optionList={itemList}
                selectedItems={selectedItems}
                searchFilter={filterSearch}
                searchPlaceholder={searchPlaceholder}
                multiSelect={multiSelect}
                title={title}
                setSelectedItems={(val) => {
                  if (multiSelect) {
                    let temp = [...selectedItems];
                    if (temp.includes(val)) {
                      temp = temp.filter((innerEle) => innerEle !== val);
                    } else {
                      temp.push(val);
                    }
                    setSelectedItems(temp);
                  } else {
                    setSelectedItems([val]);
                  }
                }}
                nested={false}
              />
            ) : (
              <div className='flex flex-col items-center justify-center p-4 text-center'>
                <div className='text-4xl mb-2'>🔍</div>
                <p className='text-sm text-gray-500'>No {title} found</p>
              </div>
            )
          }
          onClickReset={{
            onClick: () => {
              setSelectedItems([]);
            },
          }}
        />
      </Popover>
    </>
  );
}

const Loader = memo(() => {
  return (
    <div className='space-y-2 p-2 min-w-[176px]'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='w-[200px] h-[20px]'>
          <Skeleton />
        </div>
      ))}
    </div>
  );
});
Loader.displayName = 'Loader';

export type MultiSectionFilterComponentType = {
  title: string;
  itemListSections: FilterMultiSectionFilterType['options'];
  selectedItems: FilterMultiSectionFilterType['value'];
  // eslint-disable-next-line no-unused-vars
  setSelectedItems: FilterMultiSectionFilterType['setValue'];
  icon: ReactNode;
};

type isSectionsActive = {
  // eslint-disable-next-line no-unused-vars
  [K: string]: number;
};
function MultiSectionFilterComponent({
  title,
  itemListSections,
  setSelectedItems,
  selectedItems,
  icon,
}: MultiSectionFilterComponentType) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const open = Boolean(anchorEl);
  const id = open ? 'jobs-filter' : undefined;
  function handleClose() {
    setAnchorEl(null);
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const sectionsArray = Object.entries(itemListSections);
  const sectionsSelectedArray = Object.entries(selectedItems || {});

  const isSectionsActive = sectionsSelectedArray.reduce((acc, curr) => {
    const [key, val] = curr;
    acc[String(key)] = val.length;
    return acc;
  }, {} as isSectionsActive);

  const isAnyActive =
    (Object.values(isSectionsActive) as number[]).reduce((a, b) => a + b, 0) >
    0;
  const [search, setSearch] = React.useState<number[]>([]);
  return (
    <>
      <ButtonFilter
        isActive={isAnyActive}
        isDotVisible={isAnyActive}
        slotLeftIcon={<Stack>{icon}</Stack>}
        // isDotVisible={filter.job_ids.length > 0}
        onClickStatus={{
          onClick: handleClick,
        }}
        textLabel={title}
        slotRightIcon={
          <Stack>
            {anchorEl ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Stack>
        }
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ vertical: -10, horizontal: 0 }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: 'var(--radius-2)',
            borderColor: 'var(--neutral-6)',
            minWidth: '176px',
          },
        }}
      >
        <MultiFilterLayout
          slotFilterItem={sectionsArray?.map(([section, optionList], i) => {
            const searchEnabled = search.includes(i);
            return (
              <FilterItem
                key={section}
                textFilterHeading={capitalizeFirstLetter(section)}
                textCount={isSectionsActive[String(section)]}
                isCountVisible={Boolean(isSectionsActive[String(section)])}
                onClickSearch={{
                  onClick: () => {
                    if (searchEnabled) {
                      setSearch(search.filter((item) => item !== i));
                    } else setSearch([...search, i]);
                  },
                }}
                onClickRefresh={{
                  onClick: () => {
                    setSelectedItems({
                      ...selectedItems,
                      [section]: [],
                    });
                  },
                }}
                slotItems={
                  <Stack p={2} gap={2}>
                    <FilterOptionsList
                      optionList={optionList}
                      selectedItems={selectedItems?.[String(section)] || []}
                      searchFilter={searchEnabled}
                      setSelectedItems={(val) => {
                        let temp = [...selectedItems[String(section)]];
                        if (temp.includes(val)) {
                          temp = temp.filter((innerEle) => innerEle !== val);
                        } else {
                          temp.push(val);
                        }
                        setSelectedItems({
                          ...selectedItems,
                          [section]: temp,
                        });
                      }}
                      nested={false}
                    />
                  </Stack>
                }
              />
            );
          })}
          onClickReset={{
            onClick: () => {
              setSelectedItems(
                sectionsArray.reduce(
                  (acc, curr) => {
                    acc[curr[0]] = [];
                    return acc;
                  },
                  {} as typeof selectedItems,
                ),
              );
            },
          }}
        />
      </Popover>
    </>
  );
}

export type NestedFilterComponentType = {
  title: string;
  nestedItems: FilterNestedType['options'];
  selectedItems: FilterNestedType['value'];
  // eslint-disable-next-line no-unused-vars
  setSelectedItems: FilterNestedType['setValue'];
  sectionHeaders: string[];
  icon: ReactNode;
  showCount?: boolean;
};

function NestedFilterComponent({
  title,
  nestedItems,
  setSelectedItems,
  selectedItems,
  sectionHeaders,
  icon,
  showCount = false,
}: NestedFilterComponentType) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);

  const id = open ? 'jobs-filter' : undefined;
  function handleClose() {
    setAnchorEl(null);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const sectionsArray = nestedOptionMapper(
    sectionHeaders,
    nestedItems,
    selectedItems,
    showCount,
  );

  // const sectionsSelectedArray = Object.entries(selectedItems || {});

  const isSectionsActive = sectionsArray.reduce((acc, curr) => {
    const [key, , count] = curr;
    acc[String(key)] = count;
    return acc;
  }, {} as isSectionsActive);

  const isAnyActive =
    (Object.values(isSectionsActive) as number[]).reduce((a, b) => a + b, 0) >
    0;
  const [search, setSearch] = React.useState<number[]>([]);
  return (
    <>
      <ButtonFilter
        isActive={isAnyActive}
        isDotVisible={isAnyActive}
        slotLeftIcon={<Stack>{icon}</Stack>}
        // isDotVisible={filter.job_ids.length > 0}
        onClickStatus={{
          onClick: handleClick,
        }}
        textLabel={title}
        slotRightIcon={
          <Stack>
            {anchorEl ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Stack>
        }
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ vertical: -10, horizontal: 0 }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: 'var(--radius-2)',
            borderColor: 'var(--neutral-6)',
            minWidth: '176px',
          },
        }}
      >
        <MultiFilterLayout
          slotFilterItem={sectionsArray?.map(([section, optionList], i) => {
            const searchEnabled = search.includes(i);
            return (
              <FilterItem
                key={section}
                borderRight={i < sectionsArray.length - 1 ? '' : 'none'}
                textFilterHeading={capitalizeFirstLetter(section)}
                textCount={isSectionsActive[String(section)]}
                isCountVisible={Boolean(isSectionsActive[String(section)])}
                onClickSearch={{
                  onClick: () => {
                    if (searchEnabled) {
                      setSearch(search.filter((item) => item !== i));
                    } else setSearch([...search, i]);
                  },
                }}
                onClickRefresh={{
                  onClick: () => {
                    setSelectedItems({
                      ...selectedItems,
                      [section]: [],
                    });
                  },
                }}
                slotItems={
                  <Stack p={1} maxHeight={'300px'} overflow={'hidden'}>
                    <FilterOptionsList
                      optionList={optionList}
                      title={title}
                      // selectedItems={selectedItems?.[String(section)] || []}
                      selectedItems={[]}
                      searchFilter={searchEnabled}
                      setSelectedItems={(val, path) => {
                        const temp = setValueInNestedObject(
                          structuredClone(selectedItems),
                          path,
                          val,
                          nestedItems,
                        );
                        setSelectedItems(temp);
                      }}
                      nested={true}
                    />
                  </Stack>
                }
              />
            );
          })}
          onClickReset={{
            onClick: () => {
              setSelectedItems([]);
            },
          }}
        />
      </Popover>
    </>
  );
}

function FilterOptionsList({
  selectedItems,
  optionList,
  searchFilter,
  searchPlaceholder,
  title,
  setSelectedItems,
  nested = false,
  multiSelect = true,
}: {
  selectedItems: string[];
  searchFilter: boolean;
  title?: string;
  searchPlaceholder?: string;
  multiSelect?: boolean;
} & (
  | {
      // eslint-disable-next-line no-unused-vars
      setSelectedItems: (options: string) => void;
      nested: false;
      optionList: dynamicOptionsTypes;
    }
  | {
      // eslint-disable-next-line no-unused-vars
      setSelectedItems: (options: string, path: string[]) => void;
      nested: true;
      optionList: {
        header: string;
        path: string[];
        options: {
          id: string;
          status: 'active' | 'partial' | 'inactive';
          label: string;
        }[];
      }[];
    }
)) {
  const [search, setSearch] = React.useState('');

  const filteredOptions = optionList?.[0]
    ? (
        (typeof optionList[0] === 'object'
          ? 'header' in optionList[0]
            ? optionList
            : [{ header: null, options: optionList }]
          : [
              {
                header: null,
                options: optionList.map((item) => ({
                  id: item,
                  label: item,
                })),
              },
            ]) as {
          header: string | null;
          options: { id: string; label: string }[];
        }[]
      )
        // @ts-ignore
        .map(({ header, path, options }) => {
          return {
            header,
            path: path || [],
            options: options.map((item) => {
              return {
                ...item,
                label: capitalizeFirstLetter(item.label || ''),
              };
            }),
          };
        })
    : [];

  const filtered =
    filteredOptions[0].options.length > 0
      ? filteredOptions
          ?.map((optionList) => {
            let filteredOp = optionList.options;
            if (searchFilter) {
              filteredOp = optionList.options.filter((item) =>
                item.label.toLowerCase().includes(search.toLowerCase()),
              );
            }
            return { ...optionList, options: filteredOp };
          })
          .filter((item) => item.options?.length)
      : [];

  return (
    <div className='max-h-[280px] flex flex-col'>
      {Boolean(searchFilter) && (
        <UITextField
          height={26}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
        />
      )}

      <div className='max-h-[300px] overflow-auto'>
        {filtered.length > 0 ? (
          filtered.map((optionList) => {
            const filteredOp = optionList.options;
            return (
              <>
                {optionList.header && (
                  <p className='text-sm font-medium pl-1'>
                    {optionList.header}
                  </p>
                )}
                {filteredOp.map((option) => {
                  return (
                    <button
                      key={option.id}
                      className='flex flex-row items-center p-3 rounded hover:bg-neutral-100 space-x-2 w-full text-left'
                      onClick={() => {
                        setSelectedItems(option.id, optionList.path || []);
                      }}
                    >
                      {multiSelect ? (
                        <Checkbox
                          checked={
                            nested
                              ? (option as { status?: string }).status ===
                                'active'
                                ? true
                                : (option as { status?: string }).status ===
                                    'partial'
                                  ? 'indeterminate'
                                  : false
                              : selectedItems.includes(option.id)
                          }
                        />
                      ) : (
                        <RadioGroup>
                          <RadioGroupItem
                            value={option.id}
                            checked={selectedItems.includes(option.id)}
                          />
                        </RadioGroup>
                      )}
                      <Label className='text-sm'>{option.label}</Label>
                    </button>
                  );
                })}
              </>
            );
          })
        ) : (
          <div className='flex flex-col items-center justify-center h-[150px]'>
            <User className='w-24 h-24 text-red-500 mb-4' />
            <p className='text-sm text-gray-500'>No {title} found</p>
          </div>
        )}
      </div>
    </div>
  );
}

function AddFilterComp({
  filterList,
  setVisible,
}: {
  filterList: { name: string; index }[];
  // eslint-disable-next-line no-unused-vars
  setVisible: (index: number) => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'add-filter' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AddFilter
        onClickAddFilter={{
          style: {
            'align-items': 'center',
          },
          onClick: (e) => {
            handleClick(e);
          },
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ vertical: -10, horizontal: 0 }}
        sx={{
          '& .MuiPopover-paper': {
            border: 'none',
          },
        }}
      >
        <Stack direction={'column'}>
          {filterList.map((item, i) => {
            return (
              <List key={i}>
                <ListItemButton onClick={() => setVisible(item.index)}>
                  {capitalizeFirstLetter(item.name)}
                </ListItemButton>
              </List>
            );
          })}
        </Stack>
      </Popover>
    </>
  );
}
