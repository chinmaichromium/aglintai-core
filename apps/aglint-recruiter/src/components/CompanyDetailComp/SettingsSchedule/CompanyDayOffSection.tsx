import React, { useRef } from 'react';
import {
  Dialog,
  Stack,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import { capitalize } from 'lodash';
import { ButtonGhost } from '@/devlink/ButtonGhost';
import { ButtonSolid } from '@/devlink/ButtonSolid';
import { ButtonSoft } from '@/devlink/ButtonSoft';
import { CompanyDayOff } from '@/devlink2/CompanyDayOff';
import { DayoffList } from '@/devlink2/DayoffList';
import { TextWithBg } from '@/devlink2/TextWithBg';
import { DcPopup } from '@/devlink/DcPopup';
import { DayOffHelper } from '@/devlink3/DayOffHelper';
import UITextField from '../../Common/UITextField';
import DateSelect from './Components/DateSelector';
import { ShowCode } from '../../Common/ShowCode';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import toast from '@/src/utils/toast';

interface CompanyDayOffSectionProps {
  daysOff: any[];
  compareDates: (a: any, b: any) => number;
  removeDayOff: (date: string) => void;
  openCompany: () => void;
  openAddCompany: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  handleClose: () => void;
  specificLocationOn: string;
  setSpecificLocationOn: (value: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  setDaysOff: React.Dispatch<React.SetStateAction<any[]>>;
  openDialog: boolean;
  closeDialog: () => void;
}

const CompanyDayOffSection: React.FC<CompanyDayOffSectionProps> = ({
  daysOff,
  compareDates,
  removeDayOff,
  openCompany,
  openAddCompany,
  open,
  handleClose,
  specificLocationOn,
  setSpecificLocationOn,
  selectedDate,
  setSelectedDate,
  setDaysOff,
  openDialog,
  closeDialog,
}) => {
  const eventRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const { recruiter } = useAuthDetails();
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>([]);

  const getDate = (e: any) => {
    setSelectedDate(dayjs(e).format('DD MMM YYYY'));
  };

  return (
    <>
      <CompanyDayOff
        slotLearnButton={
          <ButtonGhost
            size={1}
            textButton='Learn How'
            onClickButton={{
              onClick: openCompany,
            }}
          />
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
            {daysOff.sort(compareDates).map((item, i) => (
              <DayoffList
                key={i}
                slotTextWithBg={
                  item?.locations ? (
                    item.locations.map((location, index) => (
                      <TextWithBg key={index} text={location} />
                    ))
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
            ))}
            <Dialog open={open} onClose={handleClose}>
              <DcPopup
                popupName={'Add Holiday'}
                onClickClosePopup={{ onClick: handleClose }}
                slotBody={
                  <Stack gap={1}>
                    <Stack direction={'row'}>
                      <Typography>Day off</Typography>
                      <Typography sx={{ color: 'var(--error-9)', pl: 0.5 }}>
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
                    <Stack direction={'row'}>
                      <Typography>Date</Typography>
                      <Typography sx={{ color: 'var(--error-9)', pl: 0.5 }}>
                        *
                      </Typography>
                    </Stack>
                    <DateSelect
                      selectedDates={daysOff}
                      dateRef={dateRef}
                      getDate={getDate}
                    />

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
                            (ele, i) => (
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
                                label={capitalize(ele.replaceAll('_', ' '))}
                              />
                            ),
                          )}
                        </RadioGroup>
                      </FormControl>
                    </Stack>

                    <ShowCode>
                      <ShowCode.When
                        isTrue={specificLocationOn === 'specific_locations'}
                      >
                        <Typography variant='body1'>Pick locations</Typography>

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
                          if (!eventRef.current?.value) {
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
                          setDaysOff((pre) => [
                            ...pre,
                            {
                              date: selectedDate,
                              event_name: eventRef.current?.value,
                              locations:
                                specificLocationOn === 'specific_locations'
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
                          ]);
                          handleClose();
                          toast.success(
                            `Holiday added on ${dayjs(selectedDate).format(
                              'DD-MMM-YYYY',
                            )} ${eventRef.current?.value ? 'for' : ''} ${
                              eventRef.current?.value
                            }`,
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
            onClick: closeDialog,
          }}
          slotButton={
            <ButtonSolid
              textButton='Got It'
              size={2}
              onClickButton={{
                onClick: closeDialog,
              }}
            />
          }
        />
      </Dialog>
    </>
  );
};

export default CompanyDayOffSection;