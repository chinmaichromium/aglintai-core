import { memo } from 'react';

import { UIAlert } from '@/components/Common/UIAlert';

export const ActionEmptyState = memo(() => {
  return (
    <div className='w-[800px] flex items-center justify-center'>
      <UIAlert
        title='To see the interview plan for this candidate, move the candidate to the interview state.'
        color={'purple'}
        iconName='Lightbulb'
        type='inline'
      />
    </div>
  );
});
ActionEmptyState.displayName = 'ActionEmptyState';
