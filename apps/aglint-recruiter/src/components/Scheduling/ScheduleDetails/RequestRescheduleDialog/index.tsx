import { InterviewSessionRelationTypeDB } from '@aglint/shared-types';
import { Dialog, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React, { Dispatch, useEffect, useState } from 'react';

import { Checkbox } from '@/devlink/Checkbox';
import { ConfirmationPopup } from '@/devlink3/ConfirmationPopup';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { DateIcon } from '../../Settings/Components/DateSelector';

function RequestRescheduleDialog({
  isRequestRescheduleOpen,
  setIsRequestRescheduleOpen,
  sessionRelation,
  meeting_id,
  session_id,
}: {
  isRequestRescheduleOpen: boolean;
  setIsRequestRescheduleOpen: Dispatch<React.SetStateAction<boolean>>;
  sessionRelation: InterviewSessionRelationTypeDB;
  meeting_id: string;
  session_id: string;
}) {
  const { recruiter } = useAuthDetails();
  const queryClient = useQueryClient();
  const currentDate = dayjs();
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [dateRange, setDateRange] = useState<{
    start_date: string;
    end_date: string;
  }>();

  const reasons = recruiter.scheduling_reason?.internal?.rescheduling || [
    'Too Many Interviews',
    'Out of the office',
    'Scheduling conflicts',
    'Illness or emergency',
  ];

  useEffect(() => {
    setDateRange({
      start_date: currentDate.toISOString(),
      end_date: currentDate.add(15, 'day').toISOString(),
    });
    setReason('Too Many Interviews');
  }, []);

  const onClickConfirm = async () => {
    try {
      if (sessionRelation?.id) {
        await supabase
          .from('interview_session_relation')
          .update({ accepted_status: 'request_reschedule' })
          .eq('id', sessionRelation.id);
        const { error } = await supabase
          .from('interview_session_cancel')
          .insert({
            reason,
            session_relation_id: sessionRelation.id,
            session_id,
            type: 'reschedule',
            other_details: {
              dateRange: {
                start: dateRange.start_date,
                end: dateRange.end_date,
              },
              note: notes,
            },
          });
        if (error) throw new Error();
        queryClient.invalidateQueries({
          queryKey: ['schedule_details', meeting_id],
        });
      }
    } catch {
      toast.error('Unable to save cancel reason');
    } finally {
      setIsRequestRescheduleOpen(false);
    }
  };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          background: 'transparent',
          border: 'none',
          borderRadius: '10px',
        },
      }}
      open={isRequestRescheduleOpen}
      onClose={() => {
        setIsRequestRescheduleOpen(false);
      }}
    >
      <ConfirmationPopup
        textPopupTitle={'Request Reschedule'}
        isIcon={false}
        onClickCancel={{
          onClick: () => {
            setIsRequestRescheduleOpen(false);
          },
        }}
        onClickAction={{
          onClick: onClickConfirm,
        }}
        isDescriptionVisible={false}
        isWidget={true}
        slotWidget={
          <Stack spacing={2}>
            <Typography variant='body2'>
              Choose a date range that you want to reschedule with
            </Typography>
            <Stack spacing={2} direction={'row'}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs(dateRange?.start_date)}
                  onChange={(newValue) => {
                    if (dayjs(newValue) < dayjs(dateRange?.end_date)) {
                      setDateRange({
                        start_date: dayjs(newValue)?.toISOString(),
                        end_date: dateRange?.end_date,
                      });
                    } else {
                      setDateRange({
                        start_date: dayjs(newValue).isValid()
                          ? dayjs(newValue)?.toISOString()
                          : null,
                        end_date: null,
                      });
                    }
                  }}
                  minDate={currentDate}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                      margin: 'none',
                      placeholder: 'Start Date',
                    },
                  }}
                  slots={{
                    openPickerIcon: DateIcon,
                  }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs(dateRange?.end_date)}
                  minDate={dayjs(dateRange?.start_date)}
                  maxDate={dayjs(dateRange?.start_date).add(1, 'month')}
                  onChange={(newValue) => {
                    setDateRange({
                      start_date: dateRange?.start_date,
                      end_date: dayjs(newValue)?.toISOString(),
                    });
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                      margin: 'none',
                      placeholder: 'End Date',
                    },
                  }}
                  slots={{
                    openPickerIcon: DateIcon,
                  }}
                />
              </LocalizationProvider>
            </Stack>

            <Typography variant='body2'>
              Please provide a reason for reschedule.
            </Typography>
            <Stack spacing={1}>
              {reasons.map((rea) => {
                return (
                  <Stack
                    direction={'row'}
                    key={rea}
                    onClick={() => {
                      setReason(rea);
                    }}
                    alignItems={'center'}
                    spacing={1}
                  >
                    <Checkbox isChecked={rea === reason} />
                    <Typography variant='body2' color={'#000'}>
                      {rea}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>

            <Typography variant='body2'>Additional Notes</Typography>
            <TextField
              multiline
              value={notes}
              minRows={3}
              placeholder='Add additional notes.'
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
          </Stack>
        }
        textPopupButton={'Confirm'}
      />
    </Dialog>
  );
}

export default RequestRescheduleDialog;
