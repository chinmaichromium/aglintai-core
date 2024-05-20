import { Database } from '@aglint/shared-types';
import { capitalize } from 'lodash';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { SubLinkSubMenu } from '@/devlink2/SubLinkSubMenu';
import { SublinkTab } from '@/devlink2/SublinkTab';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { featureFlag } from '@/src/utils/Constants';
import { pageRoutes } from '@/src/utils/pageRouting';
// import toast from '@/src/utils/toast';

const tabs: {
  text: string;
  roles?: Database['public']['Enums']['user_roles'][];
  flag?: featureFlag[];
}[] = [
  {
    text: 'dashboard',
    roles: ['admin', 'recruiter'],
    flag: [
      // featureFlag.isSchedulingDashboardEnabled
    ],
  },
  { text: 'my schedules' },
  {
    text: 'candidates',
    roles: ['admin', 'recruiter', 'recruiting_coordinator'],
  },
  {
    text: 'interview types',
    roles: ['admin', 'recruiter', 'recruiting_coordinator', 'interviewer'],
  },
  {
    text: 'interviewers',
    roles: ['admin', 'recruiter', 'recruiting_coordinator'],
  },
  {
    text: 'settings',
  },
];
function SubNav() {
  const tab = useSearchParams().get('tab');
  const router = useRouter();
  const { isAllowed } = useAuthDetails();

  useEffect(() => {
    const tempR = tabs.find((item) => {
      return tab === item.text.replace(' ', '');
    })?.roles;
    if (tempR && !isAllowed(tempR)) {
      // toast.error("You don't have access to this module.");
      router.replace(`scheduling?tab=myschedules`);
    }
  }, [tab]);

  return (
    <>
      {tabs
        .filter((item) => {
          return item.roles || item.flag
            ? isAllowed(item.roles, item.flag || [])
            : true;
        })
        .map(({ text: item }) => (
          <SublinkTab
            key={item}
            isActtive={router.query.tab === item.replace(' ', '')}
            text={capitalize(item)}
            onClickTab={{
              onClick: () => {
                if (item === 'settings') {
                  if (!router.query.subtab) {
                    router.push(
                      `${pageRoutes.SCHEDULING}?tab=${item.replace(' ', '')}` +
                        (isAllowed(['interviewer'])
                          ? ''
                          : `&subtab=${settingsItems[0].value}`),
                    );
                  }
                } else {
                  router.push(
                    `${pageRoutes.SCHEDULING}?tab=${item.replace(' ', '')}`,
                  );
                }
              },
            }}
            isSubMenuVisible={
              !isAllowed(['interviewer']) &&
              item === 'settings' &&
              router.query.tab === item
            }
            slotSubLinkSubMenu={<SettingsSubNabItem tab={item} />}
          />
        ))}
    </>
  );
}
export default SubNav;

const settingsItems = [
  { label: 'Interview Load', value: 'interviewLoad' },
  { label: 'Working Hours', value: 'workingHours' },
  { label: 'Company Day Off', value: 'dayOff' },
  { label: 'Keywords', value: 'keywords' },
  { label: 'Email Template', value: 'emailTemplate' },
];

function SettingsSubNabItem({ tab }: { tab: string }) {
  const router = useRouter();
  return (
    <>
      {settingsItems.map((item, i) => {
        return (
          <SubLinkSubMenu
            key={i}
            textSubMenu={item.label}
            isActive={router.query.subtab === item.value}
            onClickSubMenu={{
              onClick: (e: any) => {
                e.stopPropagation();
                router.push(
                  `${pageRoutes.SCHEDULING}?tab=${tab.replace(
                    ' ',
                    '',
                  )}&subtab=${item.value}`,
                );
              },
            }}
          />
        );
      })}
    </>
  );
}
