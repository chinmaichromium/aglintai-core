/* eslint-disable security/detect-object-injection */
import { memo, useCallback, useEffect, useMemo } from 'react';

import { NewTabPill } from '@/devlink3/NewTabPill';
import { useApplication } from '@/src/context/ApplicationContext';
import {
  ApplicationStore,
  useApplicationStore,
} from '@/src/context/ApplicationContext/store';
import { ApplicationsStore } from '@/src/context/ApplicationsContext/store';
import { useKeyPress } from '@/src/hooks/useKeyPress';

const allTabs: {
  // eslint-disable-next-line no-unused-vars
  [id in ApplicationStore['tab']]: ApplicationsStore['section'] | null;
} = {
  Details: null,
  Screening: 'screening',
  Assessment: 'assessment',
  Interview: 'interview',
  Tasks: 'interview',
  Activity: null,
};

const Tabs = () => {
  const { showTabs, tabs, interview, meta } = useApplication();
  if (!showTabs) return <></>;
  if (
    tabs.status === 'pending' ||
    interview.status === 'pending' ||
    meta.status === 'pending'
  )
    return <></>;
  return <AllTabs />;
};

const AllTabs = memo(() => {
  const { tab, setTab, drawerOpen } = useApplicationStore(
    ({ tab, setTab, drawer }) => ({
      tab,
      setTab,
      drawerOpen: drawer.open,
    }),
  );

  const {
    tabs: { data },
    interview,
    meta,
  } = useApplication();

  const counts: {
    // eslint-disable-next-line no-unused-vars
    [id in ApplicationStore['tab']]: number | null;
  } = useMemo(
    () => ({
      Screening: null,
      Assessment: null,
      Details: null,
      Interview: interview?.data?.length ?? null,
      Activity: meta?.data?.activity_count ?? null,
      Tasks: meta?.data?.task_count ?? null,
    }),
    [interview, meta],
  );

  const tabs = Object.entries(allTabs).reduce(
    (acc, [key, value]) => {
      const safeKey = key as ApplicationStore['tab'];
      if (!value || (data ?? []).includes(value)) acc.push(safeKey);
      return acc;
    },
    [] as ApplicationStore['tab'][],
  );

  const count = useMemo(() => (tabs ?? []).length, [tabs]);

  const handleSelectNextSection = useCallback(() => {
    if (tabs) {
      const index = tabs.indexOf(tab);
      setTab(tabs[(index + 1) % count]);
    }
  }, [tabs, count, tab]);

  const handleSelectPrevSection = useCallback(() => {
    if (tabs) {
      const index = tabs.indexOf(tab);
      setTab(tabs[index - 1 < 0 ? count - 1 : index - 1]);
    }
  }, [tabs, count, tab]);

  const { pressed: right } = useKeyPress('ArrowRight');
  const { pressed: left } = useKeyPress('ArrowLeft');

  useEffect(() => {
    if (drawerOpen)
      if (left) handleSelectPrevSection();
      else if (right) handleSelectNextSection();
  }, [drawerOpen, left, right]);

  const pills = useMemo(
    () =>
      tabs.map((t) => (
        <NewTabPill
          key={t}
          onClickPill={{ onClick: () => setTab(t) }}
          textLabel={t}
          isPillActive={tab === t}
          isTabCountVisible={counts[t] !== null}
          tabCount={counts[t] ?? 0}
        />
      )),
    [tabs, tab],
  );
  return <>{pills}</>;
});
AllTabs.displayName = 'AllTabs';

export { Tabs };
