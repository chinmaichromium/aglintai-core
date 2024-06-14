/* eslint-disable security/detect-object-injection */
import { Autocomplete, Dialog, Stack } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { AddLocationPop } from '@/devlink/AddLocationPop';
import UITextField from '@/src/components/Common/UITextField';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import timeZone from '@/src/utils/timeZone';
import toast from '@/src/utils/toast';

import { debouncedSave } from '../../utils';
import { debounce, geoCodeLocation, handleValidate } from './until';

type initialValueType = {
  line1: string;
  line2: string;
  city: string;
  region: string;
  country: string;
  zipcode: string;
  is_headquarter: boolean;
  timezone: string;
  full_address?: string;
  location_header?: string;
};
interface LocationProps {
  handleClose: () => void;
  open: boolean;
  edit: number;
}

interface Address {
  region: string;
  country: string;
}

interface Geolocation {
  add: Address;
  timeZoneId: string;
}

const AddLocationDialog: React.FC<LocationProps> = ({
  handleClose,
  open,
  edit,
}) => {
  const { recruiter, setRecruiter } = useAuthDetails();
  const address1Ref = useRef<HTMLInputElement>(null);
  const address2Ref = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const timezoneRef = useRef<HTMLInputElement>(null);

  const [timeValue, setTimeZoneValue] = useState(null);
  const [isRequired, setIsRequired] = useState(false);

  const initialValue = (
    edit > -1 ? recruiter.office_locations[edit] : (undefined as any)
  ) as initialValueType;

  const hasHeadquarter = (
    recruiter.office_locations as initialValueType[]
  ).some((location) => location.is_headquarter === true);

  const [isHeadQ, setHeadQ] = useState(
    initialValue?.is_headquarter ? true : false,
  );
  const [loading, setLoading] = useState(false);

  const handleAddLocation = () => {
    setLoading(true);

    const { error } = handleValidate();
    if (!error) {
      setRecruiter((recruiter) => {
        const textLocationHeader = `${cityRef.current.value},${regionRef.current.value},${countryRef.current.value}`;
        const addressParts = [
          address1Ref.current.value,
          address2Ref.current.value,
          zipRef.current.value,
        ];
        const fullAddress = addressParts.filter((part) => part).join(', ');

        const newLocation = {
          full_address: fullAddress,
          location_header: textLocationHeader,
          city: cityRef.current.value,
          country: countryRef.current.value,
          is_headquarter: isHeadQ,
          line1: address1Ref.current.value,
          line2: address2Ref.current.value,
          region: regionRef.current.value,
          timezone: timeValue,
          zipcode: zipRef.current.value,
        } as initialValueType;
        const newRecruiter = {
          ...recruiter,
          office_locations:
            edit > -1
              ? (recruiter.office_locations.reduce((acc: any, curr, i) => {
                  if (i === edit) acc.push(newLocation);
                  else acc.push(curr);
                  return acc;
                }, []) as any)
              : ([...recruiter.office_locations, newLocation] as any),
        };
        debouncedSave(newRecruiter, newRecruiter.id);
        handleClose();
        return newRecruiter;
      });
    }
    setLoading(false);
  };

  const handleChange = (value: string, key: string) => {
    if (key === 'city') {
      if (value.length > 3) {
        geoCodeLocation(value).then((data) => {
          if (data) {
            const responseData = data as any as Geolocation;
            regionRef.current.value = responseData.add?.region;
            countryRef.current.value = responseData.add?.country;
            if (responseData?.timeZoneId) {
              setTimeZoneValue(
                timeZone.find((ele) => ele.tzCode === responseData?.timeZoneId)
                  .label,
              );
            }
            if (
              cityRef.current.value &&
              regionRef.current.value &&
              countryRef.current.value
            ) {
              setIsRequired(true);
            } else {
              setIsRequired(false);
            }
          }
        });
      }
    }
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string,
  ) => {
    if (key === 'city') {
      debouncedSearch(e.target.value);
    }
    if (
      cityRef.current.value &&
      regionRef.current.value &&
      countryRef.current.value
    ) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((text: string) => {
      handleChange(text, 'city');
    }, 500),
    [],
  );

  useEffect(() => {
    if (recruiter) {
      setHeadQ(initialValue?.is_headquarter);
      setTimeZoneValue(initialValue?.timezone);
    }
  }, [recruiter]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack style={{ pointerEvents: loading ? 'none' : 'auto' }}>
        <AddLocationPop
          isLocationDescVisible={false}
          isAddDisable={edit === -1 ? !isRequired : false}
          headerText={edit === -1 ? 'Add Location' : 'Edit location'}
          textButtonLabel={edit === -1 ? 'Add' : 'Save'}
          slotForm={
            <Stack spacing={2}>
              <UITextField
                ref={address1Ref}
                placeholder='123 Example St'
                label='Street Address'
                defaultValue={initialValue?.line1}
              />
              <UITextField
                ref={address2Ref}
                placeholder='Suite 456 (Optional)'
                label='Address Line 2'
                defaultValue={initialValue?.line2}
              />
              <Stack direction={'row'} spacing={'var(--space-2)'}>
                <UITextField
                  width='225px'
                  ref={cityRef}
                  name='city'
                  placeholder='San Francisco'
                  label='City'
                  required
                  onChange={(e) => handleSearch(e, 'city')}
                  defaultValue={initialValue?.city}
                />
                <UITextField
                  width='225px'
                  ref={regionRef}
                  name='region'
                  placeholder='CA'
                  label='State/Province/Region'
                  required
                  onChange={(e) => handleSearch(e, 'region')}
                  defaultValue={initialValue?.region}
                />
              </Stack>
              <Stack direction={'row'} spacing={'var(--space-2)'}>
                <UITextField
                  width='225px'
                  ref={countryRef}
                  required={true}
                  name='country'
                  onChange={(e) => handleSearch(e, 'country')}
                  // defaultValue={address1Ref.current?.value || ''}
                  placeholder='Please enter country name'
                  label='Country'
                  defaultValue={initialValue?.country}
                />
                <UITextField
                  width='225px'
                  ref={zipRef}
                  placeholder='Please enter the zip code or postal code'
                  label='Zip Code'
                  defaultValue={initialValue?.zipcode}
                />
              </Stack>
              <Autocomplete
                fullWidth
                value={timeValue}
                options={timeZone.map((item) => {
                  //put type heres
                  return `${item.label}`;
                })}
                onChange={(_, value) => {
                  setTimeZoneValue(value);
                }}
                renderInput={(params) => (
                  <UITextField
                    {...params}
                    ref={timezoneRef}
                    name='timezone'
                    placeholder='e.g., America/New_York'
                    label='Timezone'
                  />
                )}
              />
            </Stack>
          }
          onClickCancel={{
            onClick: () => {
              handleClose();
            },
          }}
          onClickAdd={{
            onClick: () => {
              if (edit === -1) {
                handleAddLocation();
              } else {
                cityRef.current.value &&
                regionRef.current.value &&
                countryRef.current.value
                  ? handleAddLocation()
                  : toast.message('Please Enter the required fields');
              }
            },
          }}
          isCheckboxVisible={
            hasHeadquarter && initialValue?.is_headquarter
              ? true
              : !hasHeadquarter
          }
          isChecked={isHeadQ}
          onClickCheck={{
            onClick: () => {
              setHeadQ(!isHeadQ);
            },
          }}
        />
      </Stack>
    </Dialog>
  );
};

export default AddLocationDialog;

// const CustomTextField = (props: TextFieldProps) => {
//   const label = props.label;
//   return (
//     <Stack>
//       {Boolean(label) && (
//         <Typography fontSize={'14px'} marginBottom={'3px'}>
//           {label}
//         </Typography>
//       )}
//       <TextField {...{ ...props, label: undefined }} />
//     </Stack>
//   );
// };
