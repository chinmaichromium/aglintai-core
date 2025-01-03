import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import type { PropsWithChildren, ReactNode } from 'react';

export const HolidayTable = (
  props: PropsWithChildren<{ children?: ReactNode }>,
) => {
  const { children } = props;
  return (
    <div className='mt-2 overflow-hidden rounded-lg border border-border '>
      <Table className='flex flex-col'>
        <TableHeader className='w-full bg-muted '>
          <TableRow className='grid grid-cols-[250px_200px_1fr_100px] items-center'>
            <TableHead className='flex items-center'>Day Off</TableHead>
            <TableHead className='flex items-center'>Date</TableHead>
            <TableHead className='flex items-center'>Locations</TableHead>
            <TableHead className='sr-only flex items-center'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
    </div>
  );
};
