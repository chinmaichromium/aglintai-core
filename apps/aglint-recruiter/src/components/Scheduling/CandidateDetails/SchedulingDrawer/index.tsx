import { Drawer, Stack } from '@mui/material';

import { SideDrawerLarge } from '@/devlink3/SideDrawerLarge';

import BodyDrawer from './BodyDrawer';
import ButtonMain from './ButtonGroup';
import Calendar from './Calendar';
import HeaderIcon from './HeaderIcon';
import { useSchedulingDrawer } from './hooks';
import { useSchedulingFlowStore } from './store';
import TextDrawerTitle from './TextDrawerTitle';

function SelfSchedulingDrawer({ refetch }: { refetch: () => void }) {
  const { isScheduleNowOpen, stepScheduling, fetchingPlan, availabilities } =
    useSchedulingFlowStore((state) => ({
      isScheduleNowOpen: state.isScheduleNowOpen,
      stepScheduling: state.stepScheduling,
      fetchingPlan: state.fetchingPlan,
      availabilities: state.availabilities,
    }));

  const { resetStateSelfScheduling } = useSchedulingDrawer({
    refetch,
  });

  

  return (
    <>
      <Drawer
        anchor={'right'}
        open={isScheduleNowOpen}
        onClose={() => {
          resetStateSelfScheduling();
        }}
      >
        <Stack direction={'row'}>
          {availabilities && <Calendar />}

          <SideDrawerLarge
            onClickCancel={{
              onClick: () => {
                resetStateSelfScheduling();
              },
            }}
            slotHeaderIcon={<HeaderIcon />}
            textDrawertitle={<TextDrawerTitle />}
            slotButtons={<ButtonMain refetch={refetch} />}
            slotSideDrawerbody={<BodyDrawer />}
            isBottomBar={
              !fetchingPlan &&
              stepScheduling !== 'request_availibility' &&
              stepScheduling !== 'success_screen' &&
              stepScheduling !== 'agents_final_screen_cta'
            }
          />
        </Stack>
      </Drawer>
    </>
  );
}

export default SelfSchedulingDrawer;
