
import { GlobalBannerShort } from '@devlink2/GlobalBannerShort';
import { Checkbox, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Calendar } from 'lucide-react';
import React, { useEffect } from 'react';

import { UIButton } from '@/components/Common/UIButton';
import UIDialog from '@/components/Common/UIDialog';
import dayjs from '@/utils/dayjs';
import { supabase } from '@/utils/supabase/client';

import { useModuleRelations } from '../hooks';
import { setIsPauseDialogOpen, useInterviewerDetailStore } from '../store';

function PauseDialog() {
  const [selectedType, setSelectedType] = React.useState<
    'isManual' | 'twoWeek' | 'oneMonth' | 'threeMonth' | 'custom'
  >('isManual');
  const [pause_json, setPauseJson] = React.useState({
    isManual: true,
    start_date: '',
    end_date: '',
  });
  const [connectedJobs, setConnectedJobs] = React.useState<
    {
      id: string;
      job_title: string;
    }[]
  >([]);
  const [isSaving, setIsSaving] = React.useState(false);

  const currentDate = dayjs();
  const twoWeeks = currentDate.add(2, 'week');
  const oneMonth = currentDate.add(1, 'month');
  const threeMonth = currentDate.add(3, 'month');

  const { isPauseDialogOpen, selRelation } = useInterviewerDetailStore(
    (state) => ({
      isPauseDialogOpen: state.isPauseDialogOpen,
      selRelation: state.selRelation,
    }),
  );
  const { refetch } = useModuleRelations({
    user_id: selRelation?.user_id,
  });

  const pause = async () => {
    try {
      setIsSaving(true);
      await supabase
        .from('interview_module_relation')
        .update({ pause_json: pause_json })
        .eq('id', selRelation.id)
        .throwOnError();
      await refetch();
      close();
    } catch (e) {
      //
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (selRelation?.id && isPauseDialogOpen) {
      fetchSessionDetails();
    }
  }, [selRelation?.id]);

  const fetchSessionDetails = async () => {
    try {
      const { data: meetInt } = await supabase
        .from('meeting_interviewers')
        .select('*')
        .eq('interview_module_relation_id', selRelation.id)
        .is('meeting_id', null)
        .throwOnError();

      const { data: jobs } = await supabase
        .from('public_jobs')
        .select('id,job_title')
        .in(
          'id',
          meetInt.flatMap((meet) => meet.job_id),
        )
        .throwOnError();

      setConnectedJobs(jobs);
    } catch (e) {
      //
    }
  };

  const close = () => {
    if (isSaving) return;
    setIsPauseDialogOpen(false);
    setConnectedJobs([]);
  };

  return (
    <>
      <UIDialog
        open={isPauseDialogOpen}
        onClose={close}
        title='Pause Scheduling for this Module'
        slotButtons={
          <>
            <UIButton size='sm' variant='secondary' onClick={close}>
              Cancel
            </UIButton>
            <UIButton
              size='sm'
              isLoading={isSaving}
              onClick={() => {
                if (isSaving) return;
                pause();
              }}
            >
              Pause
            </UIButton>
          </>
        }
      >
        <Stack spacing={'var(--space-2)'} width={'100%'}>
          <GlobalBannerShort
            color={'warning'}
            iconName={'warning'}
            textTitle={'Pausing the interviewer'}
            textDescription={
              'By pausing the interviewer, the member won’t be considered for any new interviews scheduled with this module until the pause is lifted. Existing interviews will not be affected.'
            }
            slotButtons={<></>}
          />
          {connectedJobs.length > 0 && (
            <GlobalBannerShort
              color={'warning'}
              iconName={'warning'}
              textTitle={`Here is a list of job's interview plan that will be impacted:`}
              textDescription=''
              slotButtons={
                <Stack display={'flex'} flexDirection={'column'}>
                  <p className="text-sm text-muted-foreground">
                    {connectedJobs
                      .flatMap((job) => job.job_title)
                      .join(', ')}
                  </p>
                </Stack>
              }
            />
          )}
          <Stack>
            <Typography mb={2}>
              This member will be excluded from all new interview scheduling
              within module until the pause period ends.
            </Typography>
            <Stack spacing={2}>
              <Typography variant='body1' color={'#2F3941'}>
                Pause For
              </Typography>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                onClick={() => {
                  setSelectedType('isManual');
                  setPauseJson({
                    isManual: true,
                    start_date: '',
                    end_date: '',
                  });
                }}
                sx={{ cursor: 'pointer' }}
              >
                <Checkbox checked={selectedType === 'isManual'} />
                <Typography variant='body1' color={'var(--neutral-12)'}>
                  Indefinitely
                </Typography>
                <Typography variant='body1'>
                  Until you manually resume
                </Typography>
              </Stack>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedType('twoWeek');
                  setPauseJson({
                    isManual: false,
                    start_date: new Date().toISOString(),
                    end_date: twoWeeks.toDate().toISOString(),
                  });
                }}
              >
                <Checkbox checked={selectedType === 'twoWeek'} />
                <Typography variant='body1' color={'var(--neutral-12)'}>
                  2 Weeks
                </Typography>
                <Typography variant='body1'>
                  Resumes on {twoWeeks.format('MMMM DD, YYYY')}
                </Typography>
              </Stack>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedType('oneMonth');
                  setPauseJson({
                    isManual: false,
                    start_date: new Date().toISOString(),
                    end_date: oneMonth.toDate().toISOString(),
                  });
                }}
              >
                <Checkbox checked={selectedType === 'oneMonth'} />
                <Typography variant='body1' color={'var(--neutral-12)'}>
                  1 Month
                </Typography>
                <Typography variant='body1'>
                  Resumes on {oneMonth.format('MMMM DD, YYYY')}
                </Typography>
              </Stack>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedType('threeMonth');
                  setPauseJson({
                    isManual: false,
                    start_date: new Date().toISOString(),
                    end_date: threeMonth.toDate().toISOString(),
                  });
                }}
              >
                <Checkbox checked={selectedType === 'threeMonth'} />
                <Typography variant='body1' color={'var(--neutral-12)'}>
                  3 Months
                </Typography>
                <Typography variant='body1'>
                  Resumes on {threeMonth.format('MMMM DD, YYYY')}
                </Typography>
              </Stack>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedType('custom');
                  setPauseJson({
                    isManual: false,
                    start_date: new Date().toISOString(),
                    end_date: '',
                  });
                }}
              >
                <Checkbox checked={selectedType === 'custom'} />
                <Typography variant='body1' color={'var(--neutral-12)'}>
                  Custom date
                </Typography>
              </Stack>
              {selectedType === 'custom' && (
                <Stack direction={'row'} width={'100%'} spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dayjs(pause_json?.start_date)}
                      onChange={(newValue) => {
                        if (
                          dayjs(newValue).toISOString() < pause_json?.end_date
                        ) {
                          setPauseJson({
                            ...pause_json,
                            start_date: dayjs(newValue).toISOString(),
                          });
                        } else {
                          setPauseJson({
                            ...pause_json,
                            start_date: dayjs(newValue).toISOString(),
                            end_date: null,
                          });
                        }
                      }}
                      minDate={currentDate}
                      slots={{
                        openPickerIcon: () => <Calendar size={20} />,
                      }}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dayjs(pause_json?.end_date)}
                      minDate={dayjs(pause_json?.start_date)}
                      onChange={(newValue) => {
                        setPauseJson({
                          ...pause_json,
                          end_date: newValue.toISOString(),
                        });
                      }}
                      slots={{
                        openPickerIcon: () => <Calendar size={20} />,
                      }}
                    />
                  </LocalizationProvider>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </UIDialog>
    </>
  );
}

export default PauseDialog;
