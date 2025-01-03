import { Alert, AlertDescription } from '@components/ui/alert';
import { Zap } from 'lucide-react';

import UISelect from '@/components/Common/UISelectDropDown';
import { WorkflowItem } from '@/components/Workflow/_common/WorkflowItem';
import { type Workflow } from '@/types/workflow.types';
import { useWorkflow } from '@/workflow/hooks';
import { DURATION_OPTIONS, TRIGGER_PAYLOAD } from '@/workflows/constants';
import { getTriggerOption } from '@/workflows/utils';

const Trigger = () => {
  return (
    <WorkflowItem
      textWorkflowType={'Trigger'}
      textTypeDescription={'When something happens'}
      slotWorkflowIcon={<Zap size={16} />}
      slotInputFields={<Forms />}
      isDeleteVisible={false}
    />
  );
};

export default Trigger;

const Forms = () => {
  const {
    workflow: { phase },
  } = useWorkflow();
  return (
    <>
      <TriggerForm />
      {phase !== 'now' && <DurationForm />}
      <TriggerInfo />
    </>
  );
};

const TriggerForm = () => {
  const {
    workflow: { trigger, phase, interval },
    manageWorkflow,
    handleUpdateWorkflow,
  } = useWorkflow();
  const payload = { trigger, phase };
  return (
    <div>
      <UISelect
        label='When will the event trigger?'
        disabled={!manageWorkflow}
        value={JSON.stringify(payload)}
        menuOptions={TRIGGER_OPTIONS}
        onValueChange={(value) => {
          const { phase, trigger } = JSON.parse(value) as typeof payload;
          handleUpdateWorkflow({
            phase: phase!,
            trigger: trigger!,
            interval: (phase === 'now' ? 0 : interval === 0 ? 30 : interval)!,
          });
        }}
      />
    </div>
  );
};

const DurationForm = () => {
  const {
    workflow: { interval },
    manageWorkflow,
    handleUpdateWorkflow,
  } = useWorkflow();
  return (
    <div className='mt-4'>
      <UISelect
        label='Interval between the trigger and action'
        disabled={!manageWorkflow}
        value={String(interval)}
        menuOptions={DURATION_OPTIONS.map(({ name, value }) => ({
          name,
          value: value + '', // value should be in string type
        }))}
        onValueChange={(value) =>
          handleUpdateWorkflow({ interval: Number(value) })
        }
      />
    </div>
  );
};

const TriggerInfo = () => {
  const {
    workflow: { interval, trigger, phase },
  } = useWorkflow();
  const option = DURATION_OPTIONS.find(({ value }) => value === interval)!;
  return (
    <Alert variant='default' className='mt-2'>
      <AlertDescription>
        Any subsequent actions will be triggered{' '}
        {phase
          ? option.value === 0
            ? 'with no delay'
            : (option.name ?? '' + ' ')
          : ''}{' '}
        {getTriggerOption(trigger, phase).toLowerCase()}.
      </AlertDescription>
    </Alert>
  );
};

const TRIGGER_OPTIONS = TRIGGER_PAYLOAD.reduce(
  (acc, { trigger, phase: phases }) => {
    acc.push(
      ...phases.map((phase) => ({
        name: getTriggerOption(trigger, phase),
        value: JSON.stringify({
          trigger,
          phase,
        }) as unknown as (typeof acc)[number]['value'],
      })),
    );
    return acc;
  },
  [] as {
    name: string;
    value: {
      trigger: Workflow['trigger'];
      phase: Workflow['phase'];
    };
  }[],
);
