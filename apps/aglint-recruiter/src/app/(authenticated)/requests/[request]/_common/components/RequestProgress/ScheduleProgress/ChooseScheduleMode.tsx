import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import { Lightbulb, WandSparkles } from 'lucide-react';

import { useRequestProgressProvider } from '../progressCtx';

const ChooseScheduleMode = () => {
  const { setTriggerDetails, setShowEditDialog } = useRequestProgressProvider();
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Alert className='border border-purple-300 bg-purple-100'>
          <Lightbulb className='h-4 w-4' />
          <AlertTitle>Add Automations</AlertTitle>
          <AlertDescription>
            Streamline your workflow with Aglint AI automations.
            <div className='mt-4 flex justify-end'>
              <div className='flex justify-start'>
                <Button
                  variant='outline'
                  onClick={() => {
                    setTriggerDetails({
                      trigger: 'onRequestSchedule',
                      interval: 0,
                    });
                    setShowEditDialog(true);
                  }}
                >
                  <WandSparkles className='mr-2 h-4 w-4' />
                  Add Automation
                </Button>
              </div>

              {/* <Button
                className='mr-2'
                variant='outline'
                onClick={async () => {
                  if (fetchingPlan) return;
                  await findAvailibility({
                    filters: initialFilters,
                    dateRange: {
                      start_date: dayjsLocal().toISOString(),
                      end_date: dayjsLocal().add(7, 'day').toISOString(),
                    },
                  });
                  setIsSelfScheduleDrawerOpen(true);
                }}
                disabled={fetchingPlan}
              >
                {fetchingPlan ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : null}
                Send SelfScheduling
              </Button>
              <Button
                variant='default'
                onClick={() => {
                  setCandidateAvailabilityDrawerOpen(true);
                }}
              >
                Get Availability
              </Button> */}
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default ChooseScheduleMode;