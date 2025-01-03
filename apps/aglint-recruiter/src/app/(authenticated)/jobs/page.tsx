'use client';

import { OneColumnPageLayout } from '@components/layouts/one-column-page-layout';

import { NotFound } from '@/components/Common/404';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { useRouterPro } from '@/hooks/useRouterPro';
import { Body, Filter, Header } from '@/jobs/components';
import PERMISSIONS from '@/utils/routing/permissions';

import { useJobFilterAndSort } from './_common/components/Filters';
import { IntegrationStoreProvider } from './_common/contexts';
import { useJobsContext } from './_common/hooks';

const Page = () => {
  const { checkPermissions } = useRolesAndPermissions();
  const { jobs } = useJobsContext();
  const router = useRouterPro();
  const payload = useJobFilterAndSort(jobs ?? []);
  return (
    <IntegrationStoreProvider>
      {checkPermissions(
        PERMISSIONS[String(router.pathName) as keyof typeof PERMISSIONS],
      ) ? (
        <>
          <OneColumnPageLayout
            header={jobs?.length !== 0 && <Header />}
            filter={jobs?.length !== 0 && <Filter {...payload} />}
          >
            <Body jobs={payload.jobs} />
          </OneColumnPageLayout>
        </>
      ) : (
        <NotFound />
      )}
    </IntegrationStoreProvider>
  );
};

export default Page;
