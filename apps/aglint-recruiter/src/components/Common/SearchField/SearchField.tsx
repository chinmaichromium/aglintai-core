import { Button } from '@components/ui/button';
import { Search, X } from 'lucide-react';
import React, { type ChangeEvent } from 'react';

import UITextField from '../UITextField';

interface SearchFieldProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  height?: string;
  placeholder?: string;
  isFullWidth?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  onClear,
  onFocus,
  onBlur,
  height,
  placeholder = '',
  isFullWidth = false,
}) => {
  return (
    <div className={`relative ${isFullWidth ? 'w-full' : 'w-[250px]'}`}>
      <UITextField
        fieldSize={'medium'}
        type='text'
        className={`pr-10 ${height || ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
        {value ? (
          <Button
            variant='ghost'
            onClick={onClear}
            className='h-8 w-8 hover:bg-neutral-200'
          >
            <X className='h-4 w-4' />
          </Button>
        ) : (
          <Search className='h-4 w-4 text-muted-foreground' />
        )}
      </div>
    </div>
  );
};

export default SearchField;
