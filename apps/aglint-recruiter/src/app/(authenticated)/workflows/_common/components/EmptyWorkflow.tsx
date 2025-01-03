import { EmptyState } from '@components/empty-state';
import { Workflow } from 'lucide-react';

import { Actions } from './actions';

export const EmptyWorkflow = () => {
  return (
    <EmptyState
      header='No automations setup yet.'
      description="You haven't created any AI automations yet. Start creating one."
      icon={Workflow}
      primarySlot={<Actions />}
    />
  );
};
