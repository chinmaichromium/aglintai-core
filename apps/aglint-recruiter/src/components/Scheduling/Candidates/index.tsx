import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { AllInterview } from '@devlink2/AllInterview';
import { PageLayout } from '@devlink2/PageLayout';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import ROUTES from '@/utils/routing/routes';

import AllList from './AllList';
import AllFilters from './Filters';

function AllCandidatesScheduling() {
  const router = useRouter();

  return (
    <>
      <PageLayout
        slotTopbarLeft={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href='#'
                  onClick={() => router.push(ROUTES['/'])}
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Candidates</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        slotBody={
          <AllInterview
            isSchedulerTable={true}
            slotAddFilter={''}
            slotFilterButton={<AllFilters />}
            slotAllInterviewCard={
              <Stack overflow={'hidden'}>
                <AllList />
              </Stack>
            }
          />
        }
      />
    </>
  );
}

export default AllCandidatesScheduling;
