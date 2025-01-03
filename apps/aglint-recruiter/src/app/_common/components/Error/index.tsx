'use client';

import { TriangleAlert } from 'lucide-react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const Error = (props: Props) => {
  return (
    <div className='flex h-[40vh] w-full flex-col items-center justify-center gap-3'>
      <TriangleAlert className='h-10 w-10 text-red-600' strokeWidth={1} />
      <div className='flex flex-col items-center justify-center gap-1'>
        <div className='text-lg font-medium'> Something went wrong. </div>
        <div className='text-sm text-gray-500'>{props.error.message}</div>
      </div>
    </div>
  );
};
