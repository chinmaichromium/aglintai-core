/* eslint-disable security/detect-object-injection */
import { Autocomplete, InputAdornment, Stack } from '@mui/material';
import { capitalize } from 'lodash';
import Image from 'next/image';
import { FC, memo } from 'react';

import { JobDetailBlock } from '@/devlink3';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useJobDetails } from '@/src/context/JobDashboard';
import { palette } from '@/src/context/Theme/Theme';
import { JobCreate } from '@/src/queries/job/types';
import toast from '@/src/utils/toast';

import TipTapAIEditor from '../Common/TipTapAIEditor';
import UISelect from '../Common/Uiselect';
import UITextField from '../Common/UITextField';

export type Form = {
  [id in keyof Omit<JobCreate, 'jd_json' | 'description_hash'>]: {
    value: JobCreate[id];
    error: {
      value: boolean;
      helper: string;
    };
  };
};

export const JobForms: FC<JobMetaFormProps> = ({
  fields,
  handleChange,
  handleCreate = null,
}) => {
  const job_title = (
    <JobTitle
      name='job_title'
      value={fields.job_title}
      onChange={handleChange}
    />
  );

  const company = (
    <JobCompany name='company' value={fields.company} onChange={handleChange} />
  );
  const location = (
    <JobLocation
      name='location'
      value={fields.location}
      onChange={handleChange}
    />
  );
  const department = (
    <JobDepartment
      name='department'
      value={fields.department}
      onChange={handleChange}
    />
  );
  const job_type = (
    <JobType name='job_type' value={fields.job_type} onChange={handleChange} />
  );
  const workplace_type = (
    <JobWorkPlace
      name='workplace_type'
      value={fields.workplace_type}
      onChange={handleChange}
    />
  );
  const description = (
    <JobDescription
      name='description'
      value={fields.description}
      onChange={handleChange}
    />
  );
  const forms = (
    <>
      {job_title}
      {company}
      {workplace_type}
      {department}
      {location}
      {job_type}
    </>
  );
  return (
    <JobDetailBlock
      slotJobForm={forms}
      slotRichtext={description}
      textDescription={
        !handleCreate
          ? 'Update the job details here; changes will be saved automatically. Publish to make the updates live.'
          : 'Enter the basic job details below.'
      }
      isCreate={!!handleCreate}
      onClickCreate={{ onClick: () => !!handleCreate && handleCreate() }}
      styleBorder={{
        style: {
          borderColor: fields.description.error.value
            ? palette.red['500']
            : palette.grey['300'],
        },
      }}
      slotRichtextWarning={
        fields.description.error.value && (
          <Stack
            alignItems={'center'}
            direction={'row'}
            color={palette.red[500]}
          >
            <WarningSvg />
            {fields.description.error.helper}
          </Stack>
        )
      }
    />
  );
};

const JobTitle: FC<MetaForms> = memo(({ name, value, onChange }) => {
  return (
    <UITextField
      label={'Job Title'}
      name={name}
      placeholder={'Ex : Software developer'}
      value={value.value}
      error={value.error.value}
      helperText={value.error.helper}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
});
JobTitle.displayName = 'JobTitle';

const JobCompany: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const { recruiter } = useAuthDetails();
  return (
    <UITextField
      label={'Company'}
      name={name}
      placeholder={'Ex : Google'}
      value={value.value}
      error={value.error.value}
      helperText={value.error.helper}
      onChange={(e) => onChange(name, e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Image
              style={{
                borderRadius: '4px',
                objectFit: 'contain',
              }}
              alt='building'
              src={`${recruiter?.logo ?? '/images/svg/Building.svg'}`}
              width={26}
              height={26}
            />
          </InputAdornment>
        ),
      }}
    />
  );
});
JobCompany.displayName = 'JobCompany';

const JobLocation: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const { recruiter } = useAuthDetails();
  const defaultAddress = ((recruiter?.office_locations ?? []) as any[]).map(
    (s) => ({
      label: [s.city, s.region, s.country].filter(Boolean).join(', '),
      value: [s.city, s.region, s.country].filter(Boolean).join(', '),
    }),
  );
  return (
    <Autocomplete
      options={defaultAddress}
      onChange={(event: any, newValue) => {
        if (!newValue || typeof newValue === 'string') return;
        onChange(name, newValue.value);
      }}
      renderInput={(params) => (
        <UITextField
          name={name}
          rest={{ ...params }}
          label='Job Location'
          placeholder='Ex : San Fransisco, United States'
          error={value.error.value}
          helperText={value.error.helper}
          onChange={(e) => onChange(name, e.target.value)}
        />
      )}
      defaultValue={{
        label: value.value,
        value: value.value,
      }}
      freeSolo
      disablePortal
    />
  );
});
JobLocation.displayName = 'JobLocation';

type Defaults = {
  [id in keyof Pick<
    Form,
    'workplace_type' | 'department' | 'job_type'
  >]: Form[id]['value'][];
};

const defaults: Defaults = {
  department: [
    'accounting',
    'administrative',
    'arts and design',
    'business development',
    'consulting',
    'data science',
    'education',
    'engineering',
    'engineering',
    'entrepreneurship',
    'finance',
    'human resources',
    'information technology',
    'legal',
    'marketing',
    'media and communication',
    'operations',
    'product management',
    'sales',
    'support',
  ],
  job_type: [
    'contract',
    'full time',
    'internship',
    'part time',
    'temporary',
    'volunteer',
  ],
  workplace_type: ['hybrid', 'off site', 'on site'],
};
const getOptions = (type: keyof Defaults) => {
  return defaults[type].reduce(
    (acc, curr) => {
      acc.push({ name: capitalize(curr), value: curr });
      return acc;
    },
    [] as { name: string; value: string | number }[],
  );
};

const JobType: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const options = getOptions('job_type');
  return (
    <UISelect
      label={'Job type'}
      menuOptions={options}
      value={value.value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
});
JobType.displayName = 'JobType';

const JobDepartment: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const options = getOptions('department');
  return (
    <UISelect
      label={'Department'}
      menuOptions={options}
      value={value.value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
});
JobDepartment.displayName = 'JobDepartment';

const JobWorkPlace: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const options = getOptions('workplace_type');
  return (
    <UISelect
      label={'Workplace type'}
      menuOptions={options}
      value={value.value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
});
JobWorkPlace.displayName = 'JobWorkPlace';

const JobDescription: FC<MetaForms> = memo(({ name, value, onChange }) => {
  const { job } = useJobDetails();
  const disable = job?.scoring_criteria_loading;
  const handleToast = () => {
    if (disable)
      toast.warning(
        'This job description is currently being used for another task. Please wait.',
      );
  };
  return (
    <Stack onClick={() => handleToast()}>
      <Stack
        style={{
          opacity: job?.scoring_criteria_loading ? 0.4 : 1,
          pointerEvents: job?.scoring_criteria_loading ? 'none' : 'auto',
        }}
      >
        <TipTapAIEditor
          initialValue={value.value}
          handleChange={(e) => onChange(name, e)}
          placeholder='Enter job description'
          disabled={disable}
        />
      </Stack>
    </Stack>
  );
});
JobDescription.displayName = 'JobDescription';

type MetaForms = {
  name: keyof Form;
  value: Form[keyof Form];
  // eslint-disable-next-line no-unused-vars
  onChange: (name: keyof Form, value: string | number) => void;
};

type JobMetaFormProps = {
  fields: Form;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: keyof Form, value: string | number) => void;
  handleCreate?: () => void;
};

export const WarningSvg = () => {
  return (
    <svg
      width='22'
      height='13px'
      viewBox='0 0 17 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 4C7.72386 4 7.5 4.22386 7.5 4.5V9C7.5 9.27614 7.72386 9.5 8 9.5C8.27614 9.5 8.5 9.27614 8.5 9V4.5C8.5 4.22386 8.27614 4 8 4ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13ZM8 16C3.85786 16 0.5 12.6421 0.5 8.5C0.5 4.35786 3.85786 1 8 1C12.1421 1 15.5 4.35786 15.5 8.5C15.5 12.6421 12.1421 16 8 16ZM8 15C11.5899 15 14.5 12.0899 14.5 8.5C14.5 4.91015 11.5899 2 8 2C4.41015 2 1.5 4.91015 1.5 8.5C1.5 12.0899 4.41015 15 8 15Z'
        fill='#e35b66'
        fill-rule='evenodd'
      ></path>
    </svg>
  );
};
