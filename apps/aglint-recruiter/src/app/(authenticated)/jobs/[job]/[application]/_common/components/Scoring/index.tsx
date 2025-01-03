import type { PropsWithChildren } from 'react';

import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';

import { Analysis } from './Analysis';
import { Education } from './Education';
import { Experience } from './Experience';
import { Insights } from './Insights';
import { Skills } from './Skills';

const Details = (props: PropsWithChildren) => {
  const { isScoringEnabled } = useRolesAndPermissions();
  if (!isScoringEnabled) return <></>;
  return (
    <div className='flex flex-col gap-4'>
      {props.children ?? (
        <div className='flex flex-col gap-3 p-4'>
          <Insights />
          <Analysis />
          <Experience />
          <Education />
          <Skills />
        </div>
      )}
    </div>
  );
};

export { Details };
