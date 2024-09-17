import { Collapsible, CollapsibleContent } from '@components/ui/collapsible';
import { useRouter } from 'next/router';
import React from 'react';

import dayjs from '@/utils/dayjs';
import ROUTES from '@/utils/routing/routes';

import { MemberListCardShadcn } from '../../../../Common/Member/MemberListCard';
import { type useModuleRelations } from '../hooks';
import ThreeDot from './ThreeDot';

function QualifiedInterviewTypeCard({
  relation,
}: {
  relation: ReturnType<typeof useModuleRelations>['data'][0];
}) {
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      <MemberListCardShadcn
        isThreeDotVisible={true}
        isDropdownIconVisible={true}
        onClickDropdownIcon={{
          onClick: () => {
            setCollapseOpen((pre) => !pre);
          },
        }}
        slotThreeDot={<ThreeDot relation={relation} />}
        isTrainingProgessVisible={true}
        isTrainingProgressDetailVisible={true}
        slotTrainingProgressDetail={
          <Collapsible open={collapseOpen} onOpenChange={setCollapseOpen}>
            <CollapsibleContent>
              <div className='pb-5 pl-3'>
                <p className='text-sm'>{relation.module_description}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        }
        key={relation.module_id}
        textName={relation.module_name}
        isTextObjectiveVisible={false}
        isPauseResumeVisible={relation.pause_json ? true : false}
        isScheduleCountVisible={true}
        isProfileVisible={false}
        isInterviewsVisible={false}
        textConfirmed={relation.confirmed_meeting_count}
        textCancel={relation.cancelled_meeting_count}
        countCompletedSchedule={relation.completed_meeting_count}
        textPause={
          'Paused from assigning to new interviews with this interview type'
        }
        textPauseResumeDate={
          relation.pause_json
            ? relation.pause_json.isManual
              ? 'Indefinitely'
              : relation.pause_json.end_date
                ? `Until ${dayjs(relation.pause_json.end_date).format('DD MMMM YYYY')}`
                : '--'
            : ''
        }
        onClickCard={{
          onClick: () => {
            router.push(
              ROUTES['/interview-pool/[type_id]']({
                type_id: relation.module_id,
              }),
            );
          },
        }}
      />
    </>
  );
}

export default QualifiedInterviewTypeCard;
