'use client';
import {
  Page,
  PageDescription,
  PageHeader,
  PageHeaderText,
  PageTitle,
} from '@components/layouts/page-header';
import { useEffect } from 'react';

import {
  initiateJobAutomationState,
  updateJobAutomationState,
} from '../../contexts/workflowsStoreContext';
import { useGetJobWorkflow } from '../../hooks';
import { Summary } from './Summary';
import Main from './workflows';

export default function EnhancedAutomationPage() {
  const { data, status } = useGetJobWorkflow();
  useEffect(() => {
    // TODO: handle Error cases
    if (status === 'pending') {
      updateJobAutomationState(true);
    }
    if (status === 'error') {
      updateJobAutomationState(false);
    }
    if (status === 'success' && data) {
      initiateJobAutomationState(data);
      updateJobAutomationState(false);
    }
  }, [status, data]);

  return (
    <Page className='relative'>
      <PageHeader>
        <PageHeaderText>
          <PageTitle>AI Automation</PageTitle>
          <PageDescription>
            Configure automated actions for this job.
          </PageDescription>
        </PageHeaderText>
      </PageHeader>
      <div className='grid grid-cols-[1fr_max-content] gap-4 '>
        <Main />
        <div className='w-[320px] sticky top-0  '>
        <Summary />
        </div>
      </div>
    </Page>
  );
}
