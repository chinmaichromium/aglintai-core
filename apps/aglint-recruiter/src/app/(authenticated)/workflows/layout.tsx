'use client';

import { type PropsWithChildren } from 'react';

import { Actions } from '@/workflows/components/actions';
import { WorkflowsStoreProvider } from '@/workflows/contexts';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <WorkflowsStoreProvider>
      <div className='container-lg mx-auto w-full px-12'>
        <header className='mb-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-semibold'>Automations</h1>
              <p className='mb-4 text-gray-600'>
                You can create automations to streamline your workflow.
              </p>
            </div>
            <Actions />
          </div>
        </header>
        {children}
      </div>
    </WorkflowsStoreProvider>
  );
};

export default Layout;