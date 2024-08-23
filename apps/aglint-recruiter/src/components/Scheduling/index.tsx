import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { PageLayout } from '@/devlink2/PageLayout';
import { GlobalSwitch } from '@/devlink3/GlobalSwitch';
import { GlobalSwitchPill } from '@/devlink3/GlobalSwitchPill';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useBreadcrumContext } from '@/src/context/BreadcrumContext/BreadcrumContext';
import { useRolesAndPermissions } from '@/src/context/RolesAndPermissions/RolesAndPermissionsContext';
import ROUTES from '@/src/utils/routing/routes';

import { ShowCode } from '../Common/ShowCode';
import SchedulingDashboard from './Dashboard';
import { fetchInterviewModules } from './InterviewTypes/queries/utils';
import MySchedule from './MySchedules';
import Schedules from './Schedules';
import SeoSettings from './SEO/SeoSettings';
import { SchedulingTab } from './types';

function SchedulingMainComp() {
  const router = useRouter();
  const { checkPermissions } = useRolesAndPermissions();
  useEffect(() => {
    if (router.isReady && !router.query.tab) {
      router.push(
        `${ROUTES['/scheduling']()}?tab=${'dashboard' as SchedulingTab}`,
        undefined,
        {
          shallow: true,
        },
      );
    }
  }, [router]);

  const tab = router.query.tab as SchedulingTab;

  const { breadcrum, setBreadcrum } = useBreadcrumContext();

  useEffect(() => {
    setBreadcrum([
      {
        name: tab,
        route: ROUTES['/scheduling']() + `?tab=dashboard`,
      },
    ]);
  }, [tab]);

  return (
    <>
      <SeoSettings tab={tab} />

      <PageLayout
        slotTopbarLeft={<>{breadcrum}</>}
        slotTopbarRight={
          <>
            {checkPermissions(['scheduling_actions']) && (
              <GlobalSwitch
                slotGlobalSwitchPill={
                  <>
                    <GlobalSwitchPill
                      isActive={tab === 'schedules'}
                      textPill={'All Schedules'}
                      onClickPill={{
                        onClick: () => {
                          router.push(
                            `${ROUTES['/scheduling']()}?tab=schedules`,
                          );
                        },
                      }}
                    />
                    <GlobalSwitchPill
                      isActive={tab === 'myschedules'}
                      textPill={'My Schedules'}
                      onClickPill={{
                        onClick: () => {
                          router.push(
                            `${ROUTES['/scheduling']()}?tab=myschedules`,
                          );
                        },
                      }}
                    />

                    <GlobalSwitchPill
                      isActive={tab === 'dashboard' || !tab}
                      textPill={'Dashboard'}
                      onClickPill={{
                        onClick: () => {
                          router.push(
                            `${ROUTES['/scheduling']()}?tab=dashboard`,
                          );
                        },
                      }}
                    />
                  </>
                }
              />
            )}
          </>
        }
        slotBody={<BodyComp />}
      />
    </>
  );
}

export default SchedulingMainComp;

const BodyComp = () => {
  const router = useRouter();
  const tab = router.query.tab as SchedulingTab;
  const { checkPermissions } = useRolesAndPermissions();

  return (
    <>
      <ShowCode>
        <ShowCode.When isTrue={tab === 'schedules'}>
          {checkPermissions(['scheduling_actions']) && <Schedules />}
        </ShowCode.When>
        <ShowCode.When isTrue={tab === 'myschedules'}>
          <MySchedule />
        </ShowCode.When>
        <ShowCode.Else>
          {checkPermissions(['scheduling_settings_and_reports']) && (
            <SchedulingDashboard />
          )}
        </ShowCode.Else>
      </ShowCode>
    </>
  );
};

export const useInterviewModules = ({
  recruiter_id,
  user_id,
}: {
  recruiter_id: string;
  user_id: string;
}) => {
  const { recruiter } = useAuthDetails();
  const query = useQuery({
    queryKey: ['my_interview_module'],
    queryFn: () =>
      fetchInterviewModules(recruiter_id).then((data) =>
        data.filter((item) =>
          Boolean(item.users.find((user) => user.user_id === user_id)),
        ),
      ),
    enabled: !!recruiter.id,
    refetchOnWindowFocus: false,
  });
  return query;
};
