import { ActiveCircleIndicator } from '@/devlink2/ActiveCircleIndicator';
import { ButtonGhost } from '@/devlink2/ButtonGhost';
import { ButtonSolid } from '@/devlink2/ButtonSolid';
import { GlobalIcon } from '@/devlink2/GlobalIcon';
import { RequestProgress } from '@/devlink2/RequestProgress';
import { ScheduleProgress } from '@/devlink2/ScheduleProgress';
import { Stack, TextField } from '@mui/material';

function CandidateCancelled() {
  const requestProgressData = [
    {
      id: 'schedule_request',
      textRequestProgress: 'Scheduling request received',
      indicator: 'success',
      circleIndicator: 'success',
      slotIndicator: null,
      eventProgress: [
        {
          slotInput: '', // ai instructions
          slotRequestIcon: null, // left icon
          slotHoverIcon: '', //right icon
          status: 'completed', // status
          textProgress: 'Found 25 available slots',
          slotButton: null,
        },
        {
          slotInput: '', // ai instructions
          slotRequestIcon: null, // left icon
          slotHoverIcon: '', //right icon
          status: 'completed', // status
          textProgress: 'Send request availability link to the candidate',
          slotButton: null,
        },
      ],
      addActionButton: null,
    },
    {
      id: 'availability_request',
      textRequestProgress: 'Availability Received from the candidate',
      indicator: 'info',
      circleIndicator: '',
      slotIndicator: <ActiveCircleIndicator />,
      eventProgress: [
        {
          slotInput: <InputBox />, // ai instructions
          slotRequestIcon: null, // left icon
          slotHoverIcon: '', //right icon
          status: '', // status
          textProgress: 'Aglint AI will perform based on these instructions',
          slotButton: (
            <>
              <ButtonSolid color={'accent'} size={1} textButton='Processed' />
              <ButtonSolid
                color={'neutral'}
                size={1}
                textButton='Edit instructions'
              />
            </>
          ),
        },
      ],
      addActionButton: null,
    },
    {
      id: 'booking_request',
      indicator: '',
      circleIndicator: '',
      slotIndicator: null,

      textRequestProgress: 'Booking confirmed',
      eventProgress: [
        {
          slotInput: '', // ai instructions
          slotRequestIcon: <GlobalIcon iconName={'schedule'} />, // left icon
          slotHoverIcon: '', //right icon
          status: '', // status
          textProgress: 'RSVP sent to interviewers.',
          slotButton: null,
        },
        {
          slotInput: '', // ai instructions
          slotRequestIcon: <GlobalIcon iconName={'schedule'} />, // left icon
          slotHoverIcon: '', //right icon
          status: '', // status
          textProgress: 'Confirmation email sent to candidate.',
          slotButton: null,
        },
      ],
      addActionButton: (
        <Stack direction={'row'} alignItems={'start'}>
          <ButtonGhost
            iconName={'add_circle'}
            isLeftIcon={true}
            color={'accent'}
            size={1}
            textButton={'Add Action'}
          />
        </Stack>
      ),
    },
  ];

  return (
    <>
      {requestProgressData.map(
        (
          {
            circleIndicator,
            indicator,
            slotIndicator,
            textRequestProgress,
            eventProgress,
            addActionButton,
          },
          index,
        ) => (
          <RequestProgress
            key={index}
            indicator={indicator}
            circleIndicator={circleIndicator}
            slotIndicator={slotIndicator}
            textRequestProgress={textRequestProgress}
            slotProgress={
              <>
                {eventProgress.map(
                  (
                    {
                      slotHoverIcon,
                      slotInput,
                      slotRequestIcon,
                      status,
                      textProgress,
                      slotButton,
                    },
                    i,
                  ) => {
                    return (
                      <ScheduleProgress
                        key={i}
                        slotInput={slotInput}
                        slotRequestIcon={slotRequestIcon} // left icon
                        slotHoverIcon={slotHoverIcon} // right icon
                        status={status}
                        textProgress={textProgress}
                        slotButton={slotButton}
                      />
                    );
                  },
                )}
                {addActionButton}
              </>
            }
          />
        ),
      )}
    </>
  );
}

export default CandidateCancelled;

function InputBox() {
  return (
    <TextField
      // value={note || ''}
      // onChange={async (e) => {
      //   setNote(e.target.value);
      //   setSaving(true);
      //   debouncedUpsertRequestNotes(e.target.value, requestNotes?.[0]?.id);
      // }}
      placeholder='Instructions'
      multiline // Enables textarea behavior
      minRows={1} // Minimum number of rows
      maxRows={2} // Maximum number of rows
      variant='outlined' // Uses the outlined variant
      fullWidth // Takes full width of the container
      sx={{
        '& .MuiOutlinedInput-root': {
          padding: 0, // Remove padding
          borderRadius: '0.2rem', // Custom border-radius
          backgroundColor: 'transparent', // Transparent background
          '& fieldset': {
            border: 'none', // Remove the default border
          },
          '&:hover fieldset': {
            borderColor: 'transparent', // Ensure no border color change on hover
          },
          '&.Mui-focused': {
            boxShadow: 'none', // Remove the box shadow on focus
            '& fieldset': {
              borderColor: 'transparent', // Ensure no border color change on focus
            },
          },
        },
        '& .MuiInputBase-input': {
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          resize: 'none', // Disable resizing
          outline: 'none', // Disable outline
          padding: 0, // Remove padding
        },
      }}
    />
  );
}
