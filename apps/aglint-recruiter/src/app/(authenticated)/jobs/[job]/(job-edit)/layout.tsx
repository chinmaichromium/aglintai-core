'use client';
import { OneColumnPageLayout } from '@components/layouts/one-column-page-layout';
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { type PropsWithChildren } from 'react';

import { useRouterPro } from '@/hooks/useRouterPro';
import JobsSideNavV2 from '@/job/components/JobsSideNavV2';
import { JobProvider } from '@/job/contexts';
import { useJob } from '@/job/hooks';
import ROUTES from '@/utils/routing/routes';
import { capitalizeSentence } from '@/utils/text/textUtils';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <JobProvider>
      <OneColumnPageLayout
        sidebar={
          <div className='flex h-full flex-col'>
            <BreadCrumbs />
            <Section>
              <SectionHeader>
                <SectionHeaderText>
                  <SectionTitle>Job Settings</SectionTitle>
                  <SectionDescription>
                    Manage your job details, interview process automation and
                    preferences.
                  </SectionDescription>
                </SectionHeaderText>
              </SectionHeader>
              <JobsSideNavV2 />
            </Section>
          </div>
        }
        sidebarPosition='left'
      >
        <div className='px-4'>{children}</div>
      </OneColumnPageLayout>
    </JobProvider>
  );
};

export default Layout;

const BreadCrumbs = () => {
  const { push, pathName } = useRouterPro();
  const { job } = useJob();
  const currentPage = getPath();

  function getPath() {
    const words = pathName
      .split('/')
      .filter((path) => path)[2]
      .replace(/[-_]/g, ' ')
      .split(' ');
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className='mb-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' onClick={() => push(ROUTES['/jobs']())}>
              Jobs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href='#'
              onClick={() =>
                push(ROUTES['/jobs/[job]']({ job: (job?.id ?? null)! }))
              }
            >
              {capitalizeSentence(job?.job_title ?? 'Job')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
