import { Modal, Stack } from '@mui/material';

import { useRequestAvailabilityContext } from '../../RequestAvailabilityContext';
import AvailableSlots from '../AvailableSlots';

function DateSlotsPoPup() {
  const { openDaySlotPopup, setOpenDaySlotPopup } =
    useRequestAvailabilityContext();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpenDaySlotPopup(null);
  return (
    <div>
      <Modal open={openDaySlotPopup !== null} onClose={handleClose}>
        <Stack sx={{ ...style, width: 900 }}>
          <AvailableSlots singleDay={false} />
        </Stack>
      </Modal>
    </div>
  );
}

export default DateSlotsPoPup;
