import { Command } from '@components/ui/command';

import { List } from './list';
import { Search } from './search';
import { useCreateRequestSchedulesPrefetch } from '@components/createRequestWidget/hooks';

export const Candidates = () => {
  void useCreateRequestSchedulesPrefetch();
  return (
    <Command>
      <Search />
      <List />
    </Command>
  );
};
