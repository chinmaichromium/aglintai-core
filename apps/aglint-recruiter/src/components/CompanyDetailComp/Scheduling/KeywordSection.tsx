import { Button } from '@components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

import AddChip from '@/components/Common/AddChip';
import toast from '@/utils/toast';

interface KeywordSectionProps {
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

const KeywordSection: React.FC<KeywordSectionProps> = ({
  keywords,
  setKeywords,
}) => {
  const handleAdd = ({ name }) => {
    const newKeywords = String(name).split(',');
    newKeywords.forEach((item) => {
      const trimmedItem = item.trim();
      if (trimmedItem.length) {
        if (keywords.includes(trimmedItem)) {
          toast.warning(`"${trimmedItem}" keyword exists.`);
        } else {
          setKeywords((prev) => [trimmedItem, ...prev]);
        }
      }
    });
  };

  const handleDelete = (itemToDelete) => {
    setKeywords((prev) => prev.filter((item) => item !== itemToDelete));
  };

  return (
    <AddChip
      options={keywords.map((item) => ({ name: item, id: item }))}
      suggestionsList={[]}
      handleAddDepartment={handleAdd}
      placeholder='Enter new value...'
      btn={
        <Button variant='outline' size='sm' className='rounded-full'>
          <Plus className='h-4 w-4 mr-2' />
          Add keyword
        </Button>
      }
      handleRemoveKeyword={({ name }) => {
        handleDelete(name);
      }}
    />
  );
};

export default KeywordSection;
