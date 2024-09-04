import {
  type holidayType,
  type schedulingSettingType,
} from '@aglint/shared-types';
import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { ButtonGhost } from '@devlink/ButtonGhost';
import { ButtonSoft } from '@devlink/ButtonSoft';
import { ButtonSolid } from '@devlink/ButtonSolid';
import { DcPopup } from '@devlink/DcPopup';
import { GlobalIcon } from '@devlink/GlobalIcon';
import { CompanyDayOff } from '@devlink2/CompanyDayOff';
import { DayoffList } from '@devlink2/DayoffList';
import { GlobalInfo } from '@devlink2/GlobalInfo';
import { InterviewLoad } from '@devlink2/InterviewLoad';
import { KeywordCard } from '@devlink2/KeywordCard';
import { Keywords } from '@devlink2/Keywords';
import { SublinkTab } from '@devlink2/SublinkTab';
import { TextWithBg } from '@devlink2/TextWithBg';
import { DayOffHelper } from '@devlink3/DayOffHelper';
import { DebreifHelperText } from '@devlink3/DebreifHelperText';
import { HelperDropdown } from '@devlink3/HelperDropdown';
import { InterviewLoadHelper } from '@devlink3/InterviewLoadHelper';
import { KeywordsHelper } from '@devlink3/KeywordsHelper';
import { cn } from '@lib/utils';
import {
  Alert,
  Autocomplete,
  Chip,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { capitalize, cloneDeep } from 'lodash';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import { type MouseEvent, useEffect, useRef, useState } from 'react';
import * as React from 'react';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { emailTemplateQueries } from '@/queries/email-templates';
import ROUTES from '@/utils/routing/routes';
import timeZones from '@/utils/timeZone';
import toast from '@/utils/toast';

import FilterInput from '../../CandidateDatabase/Search/FilterInput';
import { ShowCode } from '../../Common/ShowCode';
import UITextField from '../../Common/UITextField';
import MuiNumberfield from './Components/MuiNumberfield';
import DebriefDefaults from './DebriefDefaults';
import SchedulerEmailTemps from './SchedulingEmailTemplates';
import { emailTempKeys } from './SchedulingEmailTemplates/utils';
import SchedulingRegions from './SchedulingReason';
import { settingsItems, settingSubNavItem } from './utils';
import WorkingHour from './WorkingHour';

dayjs.extend(utc);
dayjs.extend(timezone);

let schedulingSettingObj = {};
let changeValue = null;
type specificLocationType = 'all_locations' | 'specific_locations';

export const LoadMax = {
  dailyHours: 8,
  dailyInterviews: 10,
  weeklyHours: 40,
  weeklyInterviews: 50,
};

type interviewLoadType = {
  type: 'Hours' | 'Interviews';
  value: number;
  max: number;
};

function SchedulingSettings({
  updateSettings,
  initialData,
  isOverflow = true,
  setSaving,
}) {
  const { recruiter } = useAuthDetails();
  const eventRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const [workingHours, setWorkingHours] = useState([]);
  const [debriefDefaults, setDebriefDefaults] = useState<
    schedulingSettingType['debrief_defaults']
  >({
    hiring_manager: false,
    recruiter: false,
    recruiting_coordinator: false,
    sourcer: false,
    previous_interviewers: false,
  });
  const [daysOff, setDaysOff] = useState<holidayType[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [freeKeyWords, setFreeKeywords] = useState([]);
  const [softConflictsKeyWords, setSoftConflictsKeyWords] = useState([]);
  const [outOfOffice, setOutOfOffice] = useState<string[]>([]);
  const [recruitingBlocks, setRecruitingBlocks] = useState<string[]>([]);

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [specificLocationOn, setSpecificLocationOn] =
    useState<specificLocationType>('all_locations');

  const [dailyLmit, setDailyLimit] = useState<interviewLoadType>({
    type: 'Hours',
    value: 20,
    max: LoadMax.dailyHours,
  });
  const [weeklyLmit, setWeeklyLimit] = useState<interviewLoadType>({
    type: 'Hours',
    value: 10,
    max: LoadMax.weeklyHours,
  });

  // const [interviewLoad, setInterviewLoad] = useState<InterviewLoadType>({
  //   daily: {
  //     type: 'Hours',
  //     value: 20,
  //     max: LoadMax.dailyHours,
  //   },
  //   weekly: {
  //     type: 'Hours',
  //     value: 10,
  //     max: LoadMax.weeklyHours,
  //   },
  // });
  // const [helperWidth, setHelperWidth] = useState(420);
  // const [helperKeywords, setHelperKeywords] = useState(420);
  // // const toggleHelperTextWidth = () => {
  //   // Toggle between 0px and 420px
  //   setHelperWidth(helperWidth === 10 ? 420 : 10);
  // };
  // const toggleHelperKeywords = () => {
  //   // Toggle between 0px and 420px
  //   setHelperKeywords(helperKeywords === 10 ? 420 : 10);
  // };

  const [isTipVisible, setIsTipVisible] = useState(true);
  const handleCloseInfo = () => {
    setIsTipVisible(false);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const openCompany = () => {
    setOpenDialog(true);
  };
  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleDailyValue = (value: number) => {
    setDailyLimit((pre) => ({
      ...pre,
      max: pre.type === 'Hours' ? LoadMax.dailyHours : LoadMax.dailyInterviews,
      value:
        pre.type === 'Hours'
          ? value > LoadMax.dailyHours
            ? LoadMax.dailyHours
            : value
          : value > LoadMax.dailyInterviews
            ? LoadMax.dailyInterviews
            : value,
    }));
  };

  const handleWeeklyValue = (value: number) => {
    setWeeklyLimit((pre) => ({
      ...pre,
      max:
        pre.type === 'Hours' ? LoadMax.weeklyHours : LoadMax.weeklyInterviews,
      value:
        pre.type === 'Hours'
          ? value > LoadMax.weeklyHours
            ? LoadMax.weeklyHours
            : value
          : value > LoadMax.weeklyInterviews
            ? LoadMax.weeklyInterviews
            : value,
    }));
  };
  const handleType = (type: 'Hours' | 'Interviews') => {
    setWeeklyLimit((pre) => ({ ...pre, type }));
    setDailyLimit((pre) => ({ ...pre, type }));
    handleWeeklyValue(weeklyLmit.value);
    handleDailyValue(dailyLmit.value);
  };

  ///////////// DayOff Popup //////////////
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openAddCompany = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedDate('');
  };
  const open = Boolean(anchorEl);

  function getDate(e: any) {
    setSelectedDate(dayjs(e).format('DD MMM YYYY'));
    // dateRef.current.value = String(new Date(e.$d));
  }

  function removeDayOff(value: string) {
    setDaysOff((pre) => {
      const filtered = pre.filter((item) => item.date !== value);
      return [...filtered];
    });
  }

  function initialLoad() {
    if (initialData) {
      const schedulingSettingData = cloneDeep(
        initialData,
      ) as schedulingSettingType;

      const workingHoursCopy = cloneDeep(schedulingSettingData.workingHours);

      setDailyLimit({
        type: schedulingSettingData.interviewLoad.dailyLimit.type,
        value: schedulingSettingData.interviewLoad.dailyLimit.value,
        max:
          schedulingSettingData.interviewLoad.dailyLimit.type === 'Hours'
            ? LoadMax.dailyHours
            : LoadMax.dailyInterviews,
      });

      setWeeklyLimit({
        type: schedulingSettingData.interviewLoad.weeklyLimit.type,
        value: schedulingSettingData.interviewLoad.weeklyLimit.value,
        max:
          schedulingSettingData.interviewLoad.dailyLimit.type === 'Hours'
            ? LoadMax.weeklyHours
            : LoadMax.weeklyInterviews,
      });

      setWorkingHours(workingHoursCopy);
      setDaysOff([...schedulingSettingData.totalDaysOff] as holidayType[]);
      setFreeKeywords(schedulingSettingData?.schedulingKeyWords?.free || []);
      setSoftConflictsKeyWords(
        schedulingSettingData?.schedulingKeyWords?.SoftConflicts || [],
      );
      setOutOfOffice(
        schedulingSettingData?.schedulingKeyWords?.outOfOffice || [],
      );
      setRecruitingBlocks(
        schedulingSettingData?.schedulingKeyWords?.recruitingBlocks || [],
      );

      setDebriefDefaults(
        schedulingSettingData?.debrief_defaults ?? {
          hiring_manager: false,
          recruiter: false,
          recruiting_coordinator: false,
          sourcer: false,
          previous_interviewers: false,
        },
      );
    }
  }

  useEffect(() => {
    if (daysOff.length && workingHours.length) {
      schedulingSettingObj = {
        ...initialData,
        interviewLoad: {
          dailyLimit: {
            type: dailyLmit.type,
            value: dailyLmit.value,
          },
          weeklyLimit: {
            type: weeklyLmit.type,
            value: weeklyLmit.value,
          },
        },
        workingHours: workingHours,
        totalDaysOff: daysOff,
        schedulingKeyWords: {
          free: freeKeyWords,
          SoftConflicts: softConflictsKeyWords,
          outOfOffice: outOfOffice,
          recruitingBlocks: recruitingBlocks,
        },
        debrief_defaults: debriefDefaults,
      } as schedulingSettingType;

      if (changeValue === 'updating') {
        updateSettings(schedulingSettingObj);
      }

      changeValue = 'updating';
    }
  }, [
    dailyLmit,
    weeklyLmit,
    daysOff,
    workingHours,
    freeKeyWords,
    softConflictsKeyWords,
    outOfOffice,
    recruitingBlocks,
    debriefDefaults,
  ]);

  useEffect(() => {
    initialLoad();

    return () => {
      changeValue = null;
    };
  }, []);

  const router = useRouter();

  const compareDates = (a: holidayType, b: holidayType) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return Number(dateA) - Number(dateB);
  };

  return (
    <Stack overflow={isOverflow ? 'auto' : 'visible'}>
      <>
        <ShowCode>
          <ShowCode.When
            isTrue={router.query.tab == settingSubNavItem.WORKINGHOURS}
          >
            <WorkingHour
              initialData={initialData}
              updateSettings={updateSettings}
            />
          </ShowCode.When>
          <ShowCode.When
            isTrue={router.query.tab == settingSubNavItem.HOLIDAYS}
          >
            <CompanyDayOff
              slotLearnButton={
                <>
                  <ButtonGhost
                    size={1}
                    textButton='Learn How'
                    onClickButton={{
                      onClick: () => {
                        openCompany();
                      },
                    }}
                  />
                </>
              }
              slotAddButton={
                <ButtonSolid
                  textButton='Add Day Off'
                  size={1}
                  iconName='add'
                  isLeftIcon
                  onClickButton={{
                    onClick: openAddCompany,
                  }}
                />
              }
              slotDayoffList={
                <>
                  {daysOff.sort(compareDates).map((item, i) => {
                    return (
                      <DayoffList
                        key={i}
                        slotTextWithBg={
                          item?.locations ? (
                            item.locations.map((location, index) => {
                              return <TextWithBg key={index} text={location} />;
                            })
                          ) : (
                            <Typography
                              px={'var(--space-2)'}
                              variant='caption'
                              fontSize={'14px'}
                            >
                              All locations
                            </Typography>
                          )
                        }
                        textDate={item.date}
                        textDayoff={item.event_name}
                        onClickDelete={{
                          onClick: () => removeDayOff(item.date),
                        }}
                      />
                    );
                  })}
                  <Dialog open={open} onClose={handleClose}>
                    <DcPopup
                      popupName={'Add Holiday'}
                      onClickClosePopup={{ onClick: handleClose }}
                      slotBody={
                        <Stack gap={1}>
                          {/* <Typography variant='body1'>Day off</Typography> */}
                          <Stack direction={'row'}>
                            <Typography>Day off</Typography>
                            <Typography
                              sx={{ color: 'var(--error-9)', pl: 0.5 }}
                            >
                              *
                            </Typography>
                          </Stack>
                          <Stack>
                            <UITextField
                              placeholder='Enter the name of the holiday'
                              fullWidth
                              ref={eventRef}
                            />
                          </Stack>
                          {/* <Typography variant='body1'>Date</Typography> */}
                          <Stack direction={'row'}>
                            <Typography>Date</Typography>
                            <Typography
                              sx={{ color: 'var(--error-9)', pl: 0.5 }}
                            >
                              *
                            </Typography>
                          </Stack>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-[280px] justify-start text-left font-normal',
                                  !dateRef.current?.value &&
                                    'text-muted-foreground',
                                )}
                              >
                                <CalendarIcon className='mr-2 h-4 w-4' />
                                {dateRef.current?.value ? (
                                  format(new Date(dateRef.current.value), 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-auto p-0'>
                              <Calendar
                                mode='single'
                                selected={
                                  dateRef.current?.value
                                    ? new Date(dateRef.current.value)
                                    : undefined
                                }
                                onSelect={(date) => {
                                  if (date) {
                                    getDate(date);
                                  }
                                }}
                                disabled={(date) =>
                                  daysOff.some(
                                    (day) =>
                                      new Date(day.date).toDateString() ===
                                      date.toDateString(),
                                  )
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>

                          <Typography variant='body1'>Location</Typography>
                          <Stack
                            fontSize={'12px'}
                            direction={'row'}
                            spacing={'var(--space-2)'}
                          >
                            <FormControl>
                              <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                              >
                                {['all_locations', 'specific_locations'].map(
                                  (ele, i) => {
                                    return (
                                      <FormControlLabel
                                        checked={specificLocationOn === ele}
                                        key={i}
                                        onChange={(e: any) => {
                                          setSpecificLocationOn(e.target.value);
                                        }}
                                        sx={{
                                          marginLeft: '0px',
                                          '& .MuiRadio-root': {
                                            marginRight: 'var(--space-1)',
                                          },
                                        }}
                                        value={ele}
                                        control={<Radio />}
                                        label={capitalize(
                                          ele.replaceAll('_', ' '),
                                        )}
                                      />
                                    );
                                  },
                                )}
                              </RadioGroup>
                            </FormControl>
                          </Stack>

                          <ShowCode>
                            <ShowCode.When
                              isTrue={
                                specificLocationOn === 'specific_locations'
                              }
                            >
                              <Typography variant='body1'>
                                Pick locations
                              </Typography>

                              <Autocomplete
                                multiple
                                fullWidth
                                onChange={(_, value) => {
                                  setSelectedLocations(value);
                                }}
                                options={recruiter?.office_locations.map(
                                  (
                                    item: ReturnType<
                                      typeof useAuthDetails
                                    >['recruiter']['office_locations'][number],
                                  ) => {
                                    return `${item.city}, ${item.region}, ${item.country}`;
                                  },
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    placeholder='Select Locations'
                                    {...params}
                                  />
                                )}
                              />
                            </ShowCode.When>
                          </ShowCode>
                        </Stack>
                      }
                      slotButtons={
                        <>
                          <ButtonSoft
                            textButton='Cancel'
                            size={2}
                            color={'neutral'}
                            onClickButton={{
                              onClick: handleClose,
                            }}
                          />
                          <ButtonSolid
                            size={2}
                            textButton={'Add'}
                            onClickButton={{
                              onClick: () => {
                                if (!eventRef.current.value) {
                                  toast.message('Please enter event name.');
                                  return;
                                }
                                if (!selectedDate) {
                                  toast.message('Please select a date.');
                                  return;
                                }
                                if (
                                  specificLocationOn === 'specific_locations' &&
                                  selectedLocations.length === 0
                                ) {
                                  toast.message('Please select a locations.');
                                  return;
                                }
                                setDaysOff(
                                  (pre) =>
                                    [
                                      ...pre,
                                      {
                                        date: selectedDate,
                                        event_name: eventRef.current.value,
                                        locations:
                                          specificLocationOn ===
                                          'specific_locations'
                                            ? selectedLocations
                                            : recruiter?.office_locations.map(
                                                (
                                                  item: ReturnType<
                                                    typeof useAuthDetails
                                                  >['recruiter']['office_locations'][number],
                                                ) =>
                                                  `${item.city}, ${item.region}, ${item.country}`,
                                              ),
                                      },
                                    ] as holidayType[],
                                );
                                handleClose();
                                toast.success(
                                  `Holiday added on ${dayjs(
                                    selectedDate,
                                  ).format('DD-MMM-YYYY')} ${
                                    eventRef.current.value ? 'for' : ''
                                  } ${eventRef.current.value}`,
                                );
                              },
                            }}
                          />
                        </>
                      }
                    />
                  </Dialog>
                </>
              }
            />
            <Dialog open={openDialog} onClose={closeDialog}>
              <DayOffHelper
                onClickClose={{
                  onClick: () => {
                    closeDialog();
                  },
                }}
                slotButton={
                  <ButtonSolid
                    textButton='Got It'
                    size={2}
                    onClickButton={{
                      onClick: () => {
                        closeDialog();
                      },
                    }}
                  />
                }
              />
            </Dialog>
          </ShowCode.When>
        </ShowCode>

        <ShowCode.When
          isTrue={router.query.tab == settingSubNavItem.EMAILTEMPLATE}
        >
          <SchedulerEmailTemps setSaving={setSaving} />
        </ShowCode.When>
        <ShowCode.When
          isTrue={router.query.tab == settingSubNavItem.SLACKTEMPLATE}
        >
          <SchedulerEmailTemps setSaving={setSaving} />
        </ShowCode.When>
        <ShowCode.When
          isTrue={router.query.tab == settingSubNavItem.AGENTTEMPLATE}
        >
          <SchedulerEmailTemps setSaving={setSaving} />
        </ShowCode.When>
        <ShowCode.When
          isTrue={router.query.tab == settingSubNavItem.CALENDERTEMPLATE}
        >
          <SchedulerEmailTemps setSaving={setSaving} />
        </ShowCode.When>
        <ShowCode.When isTrue={router.query.tab == settingSubNavItem.REASONS}>
          <SchedulingRegions />
        </ShowCode.When>

        <ShowCode.When
          isTrue={router.query.tab == settingSubNavItem.SCHEDULING}
        >
          <Stack
            display={'flex'}
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'start'}
            overflow={'hidden'}
          >
            <Stack
              width={'100%'}
              overflow={'auto'}
              height={'calc(100vh - 48px)'}
              padding={2}
              spacing={2}
              gap={'16px'}
            >
              <InterviewLoad
                borderStyle={'false'}
                slotDailyLimit={
                  <Stack spacing={3} gap={2} flexDirection={'row'}>
                    <MuiNumberfield
                      isMarginTop={false}
                      handleSelect={(value) => handleDailyValue(+value)}
                      value={dailyLmit.value}
                      max={dailyLmit.max}
                      width='70px'
                    />
                    <RadioGroup
                      sx={{ marginTop: '0px !important' }}
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                    >
                      {['Interviews', 'Hours'].map((ele, i) => {
                        return (
                          <FormControlLabel
                            checked={dailyLmit.type === ele}
                            key={i}
                            onChange={(e: any) => {
                              handleType(e.target.value);
                            }}
                            sx={{
                              marginLeft: '0px',
                              '& .MuiRadio-root': {
                                marginRight: 'var(--space-1)',
                              },
                            }}
                            value={ele}
                            control={<Radio />}
                            label={capitalize(ele.replaceAll('_', ' '))}
                          />
                        );
                      })}
                    </RadioGroup>
                  </Stack>
                }
                slotWeeklyLimit={
                  <Stack spacing={3} gap={2} flexDirection={'row'}>
                    <MuiNumberfield
                      handleSelect={(value) => handleWeeklyValue(+value)}
                      value={weeklyLmit.value}
                      max={weeklyLmit.max}
                      width='70px'
                      isMarginTop={false}
                    />
                    <RadioGroup
                      sx={{ marginTop: '0px !important' }}
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                    >
                      {['Interviews', 'Hours'].map((ele, i) => {
                        return (
                          <FormControlLabel
                            checked={weeklyLmit.type === ele}
                            key={i}
                            onChange={(e: any) => {
                              handleType(e.target.value);
                            }}
                            sx={{
                              marginLeft: '0px',
                              '& .MuiRadio-root': {
                                marginRight: 'var(--space-1)',
                              },
                            }}
                            value={ele}
                            control={<Radio />}
                            label={capitalize(ele.replaceAll('_', ' '))}
                          />
                        );
                      })}
                    </RadioGroup>
                  </Stack>
                }
              />
              <DebriefDefaults
                value={debriefDefaults}
                setValue={setDebriefDefaults}
              />
              <Keywords
                borderStyle={'false'}
                size={'large'}
                slotKeywordsCard={
                  <>
                    <KeywordCard
                      textTitle={'Free'}
                      textWarning={
                        'When these keywords appear in a calendar event title, overlapping interviews will not be considered scheduling conflicts.'
                      }
                      slotInput={
                        <FilterInput
                          handleAdd={(s) => {
                            const keyword = String(s).split(',');
                            keyword.map((item) => {
                              if (freeKeyWords.includes(item)) {
                                toast.warning(`"${item}" keyword exists.`);
                                return null;
                              } else {
                                setFreeKeywords((pre) => [item, ...pre]);
                              }
                            });
                          }}
                          path='freeKeywords'
                          type='string'
                        />
                      }
                      slotSuggestPill={
                        freeKeyWords.length === 0 ? (
                          <Alert severity='info' icon={false}>
                            <Typography>No free keywords added.</Typography>
                          </Alert>
                        ) : (
                          freeKeyWords.map((item) => {
                            return (
                              <>
                                <Chip
                                  clickable
                                  onDelete={() => {
                                    setFreeKeywords((pre) => {
                                      return pre.filter((ele) => ele !== item);
                                    });
                                  }}
                                  deleteIcon={
                                    <Stack>
                                      <GlobalIcon iconName='close' size='4' />
                                    </Stack>
                                  }
                                  label={item}
                                />
                              </>
                            );
                          })
                        )
                      }
                    />
                    <KeywordCard
                      textTitle={'Soft Conflicts'}
                      textWarning={
                        'When these keywords are found in a calendar event title, overlapping interviews will be marked as soft conflicts and will require your confirmation to schedule.'
                      }
                      slotInput={
                        <FilterInput
                          handleAdd={(s) => {
                            const keyword = String(s).split(',');
                            keyword.map((item) => {
                              if (freeKeyWords.includes(item)) {
                                toast.warning(`"${item}" keyword exists.`);
                                return null;
                              } else {
                                setSoftConflictsKeyWords((pre) => [
                                  item,
                                  ...pre,
                                ]);
                              }
                            });
                          }}
                          path='softConflictsKeywords'
                          type='string'
                        />
                      }
                      slotSuggestPill={
                        softConflictsKeyWords.length === 0 ? (
                          <Alert severity='info' icon={false}>
                            <Typography>
                              No soft conflict keyword added.
                            </Typography>
                          </Alert>
                        ) : (
                          softConflictsKeyWords.map((item) => {
                            return (
                              <>
                                <Chip
                                  clickable
                                  onDelete={() => {
                                    setSoftConflictsKeyWords((pre) => {
                                      return pre.filter((ele) => ele !== item);
                                    });
                                  }}
                                  deleteIcon={
                                    <Stack>
                                      <GlobalIcon iconName='close' size='4' />
                                    </Stack>
                                  }
                                  label={item}
                                />
                              </>
                            );
                          })
                        )
                      }
                    />
                    <KeywordCard
                      textTitle={'Out of Office'}
                      textWarning={
                        'When any of these specified keywords appear in a calendar event title, the day will be considered an Out of Office day, and interviews will not be scheduled.'
                      }
                      slotInput={
                        <FilterInput
                          handleAdd={(s) => {
                            const keyword = String(s).split(',');
                            keyword.map((itemX) => {
                              const item = itemX.trim();
                              if (item?.length) {
                                if (outOfOffice.includes(item)) {
                                  toast.warning(`"${item}" keyword exists.`);
                                  return null;
                                } else {
                                  setOutOfOffice((pre) => [item, ...pre]);
                                }
                              }
                            });
                          }}
                          path='outOfOfficeKeywords'
                          type='string'
                        />
                      }
                      slotSuggestPill={
                        outOfOffice.length === 0 ? (
                          <Alert severity='info' icon={false}>
                            <Typography>
                              No out of office keywords added.
                            </Typography>
                          </Alert>
                        ) : (
                          outOfOffice.map((item) => {
                            return (
                              <>
                                <Chip
                                  clickable
                                  onDelete={() => {
                                    setOutOfOffice((pre) => {
                                      return pre.filter((ele) => ele !== item);
                                    });
                                  }}
                                  deleteIcon={
                                    <Stack>
                                      <GlobalIcon iconName='close' size='4' />
                                    </Stack>
                                  }
                                  label={item}
                                />
                              </>
                            );
                          })
                        )
                      }
                    />
                    <KeywordCard
                      textTitle={'Recruiting Blocks'}
                      textWarning={
                        'If these keywords are found in a calendar event title, these blocks will be given first preference for scheduling interviews.'
                      }
                      slotInput={
                        <FilterInput
                          handleAdd={(s) => {
                            const keyword = String(s).split(',');
                            keyword.map((itemX) => {
                              const item = itemX.trim();
                              if (item?.length) {
                                if (recruitingBlocks.includes(item)) {
                                  toast.warning(`"${item}" keyword exists.`);
                                  return null;
                                } else {
                                  setRecruitingBlocks((pre) => [item, ...pre]);
                                }
                              }
                            });
                          }}
                          path='recruitingBlocksKeywords'
                          type='string'
                        />
                      }
                      slotSuggestPill={
                        recruitingBlocks.length === 0 ? (
                          <Alert
                            severity='info'
                            variant='outlined'
                            icon={false}
                          >
                            <Typography>No recruiting blocks added.</Typography>
                          </Alert>
                        ) : (
                          recruitingBlocks.map((item) => {
                            return (
                              <>
                                <Chip
                                  clickable
                                  onDelete={() => {
                                    setRecruitingBlocks((pre) => {
                                      return pre.filter((ele) => ele !== item);
                                    });
                                  }}
                                  deleteIcon={
                                    <Stack>
                                      <GlobalIcon iconName='close' size='4' />
                                    </Stack>
                                  }
                                  label={item}
                                />
                              </>
                            );
                          })
                        )
                      }
                    />
                  </>
                }
              />
            </Stack>
            <Stack
              bgcolor={'white'}
              width={'400px'}
              minWidth={'400px'}
              padding={'var(--space-4)'}
              borderLeft={'1px solid var(--neutral-6)'}
              height={'calc(100vh - 48px)'}
              flexDirection={'column'}
              gap={'var(--space-4)'}
              sx={{
                overflowY: 'auto',
              }}
            >
              <Stack flexDirection={'column'} gap={'var(--space-4)'}>
                {isTipVisible && (
                  <Stack>
                    <GlobalInfo
                      color={'purple'}
                      iconName='lightbulb'
                      textTitle={'Pro Tip'}
                      textDescription={
                        'Tailor the evaluation criteria to match the specific needs of the role you are hiring for by adjusting the weightages.'
                      }
                      showCloseButton
                      onClickClose={{
                        onClick: () => {
                          handleCloseInfo();
                        },
                      }}
                    />
                  </Stack>
                )}
                <HelperDropdown
                  textName='Interview Load Tips'
                  slotBody={<InterviewLoadHelper />}
                />
                <HelperDropdown
                  textName='Debrief Tips'
                  slotBody={<DebreifHelperText />}
                />
                <HelperDropdown
                  textName='Keyword Tips'
                  slotBody={<KeywordsHelper />}
                />
              </Stack>
            </Stack>
          </Stack>
        </ShowCode.When>
      </>
    </Stack>
  );
}

export default SchedulingSettings;

type TZ = (typeof timeZones)[number];

export type TimezoneObj = {
  [key in keyof TZ]: TZ[key];
};
type TimezoneSelectorProps = {
  value: TimezoneObj;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: TimezoneObj) => void;
  disabled: boolean;
};
export const TimezoneSelector = ({
  disabled,
  setValue,
  value,
}: TimezoneSelectorProps) => {
  return (
    <Stack spacing={'var(--space-2)'} width={420}>
      <Autocomplete
        disabled={disabled}
        disableClearable
        options={timeZones}
        value={value}
        onChange={(event, value) => {
          if (value) {
            setValue(value);
          }
        }}
        autoComplete={false}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          return (
            <li {...props}>
              <Typography variant='body1' color={'var(--neutral-12)'}>
                {option.label}
              </Typography>
            </li>
          );
        }}
        renderInput={(params) => {
          return (
            <UITextField
              {...params}
              labelSize='medium'
              // fullWidth
              label=''
              placeholder='Ex. America/Los_Angeles (GMT-08:00)'
            />
          );
        }}
      />
    </Stack>
  );
};

export function SettingsSubNabItem() {
  const router = useRouter();
  const { recruiter } = useAuthDetails();
  const emailTemplates = useQuery(
    emailTemplateQueries.emailTemplates(recruiter.id),
  );
  const [firstTemplate, setFirstTemplate] = useState(null);
  const { ifAllowed } = useRolesAndPermissions();
  //for select the first email template type

  useEffect(() => {
    if (emailTemplates.isFetched) {
      if (router.query.email) {
        setFirstTemplate(router.query.email);
      } else {
        setFirstTemplate(
          [...emailTemplates.data]
            ?.filter((emailPath) => emailTempKeys.includes(emailPath.type))
            .filter((v, i, a) => a.findIndex((v2) => v2.type === v.type) === i)
            .sort((a, b) => a.type.localeCompare(b.type))[0].type,
        );
      }
    }
  }, [router]);
  return (
    <>
      {settingsItems.map((item, i) => {
        return item?.permission ? (
          ifAllowed(
            <SublinkTab
              text={item.label}
              isActtive={router.query.tab === item.value}
              onClickTab={{
                onClick: (e: any) => {
                  e.stopPropagation();
                  if (item.value === settingSubNavItem['EMAILTEMPLATE']) {
                    router.push(
                      `${ROUTES['/company']()}?tab=${item.value}&email=${firstTemplate}`,
                    );
                  } else {
                    router.push(`${ROUTES['/company']()}?tab=${item.value}`);
                  }
                },
              }}
            />,
            [item?.permission],
          )
        ) : (
          <SublinkTab
            key={i}
            text={item.label}
            isActtive={router.query.tab === item.value}
            onClickTab={{
              onClick: (e: any) => {
                e.stopPropagation();
                if (item.value === settingSubNavItem['EMAILTEMPLATE']) {
                  router.push(
                    `${ROUTES['/company']()}?tab=${item.value}&email=${firstTemplate}`,
                  );
                } else {
                  router.push(`${ROUTES['/company']()}?tab=${item.value}`);
                }
              },
            }}
          />
        );
      })}
    </>
  );
}