import { Label } from '@components/ui/label';
import React from 'react';

import { Loader } from '@/common/Loader';

import ScheduleProgressTracker from '../../ScheduleProgressTracker';
import { type GroupReqProgress } from '../../types';
import { workflowCopy } from '../../utils/copy';
import { progressActionMap } from '../../utils/ProgressActionMap';
import { progressStatusToTense } from '../../utils/progressStatusToTense';

const EventNode = ({ groupProgress }: { groupProgress: GroupReqProgress }) => {
  const eventType = groupProgress.heading_progress.event_type;
  const tense = progressStatusToTense(groupProgress.heading_progress.status);

  return (
    <div className='relative mb-1' data-testid='request-progress'>
      <ScheduleProgressTracker
        status={tense}
        textProgress={workflowCopy[eventType][tense]}
        slotLoader={
          tense === 'present' ? (
            <Loader className='h-4 w-4 animate-spin text-muted-foreground' />
          ) : undefined
        }
        slotAiText={
          <>
            {groupProgress.detail_progress.map((prg) => {
              if (
                !prg.log &&
                progressActionMap[`${prg.event_type}_${prg.status}`]
              ) {
                const key =
                  `${prg.event_type}_${prg.status}` as keyof typeof progressActionMap;
                const Comp = progressActionMap[key];
                return (
                  <div key={prg.id} className='mt-2'>
                    <Comp key={prg.id} {...prg} />
                  </div>
                );
              }
              return (
                <Label
                  key={prg.id}
                  className='flex items-center text-sm font-normal'
                >
                  {prg.log}
                </Label>
              );
            })}
          </>
        }
      />
    </div>
  );
};

export default EventNode;
