import { Dialog, MenuItem, Stack } from '@mui/material';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';

import {
  AssessmentPopup as AssessmentPopupDev,
  SelectionPill,
} from '@/devlink2';
import AUIButton from '@/src/components/Common/AUIButton';
import UITextField from '@/src/components/Common/UITextField';
import { useCreateAssessment } from '@/src/queries/assessment';

import SelectionComp from '../components/selection';
import LevelTag from '../tags/levels';
import TypeTags from '../tags/types';
import useAssessmentStore from '../../Stores';

export type CreateEditPayload = Parameters<
  ReturnType<typeof useCreateAssessment>['mutation']['mutate']
>[0];

const CreateEditPopup: React.FC<{
  type: 'create' | 'edit';
  initialFields: CreateEditPayload;
  disable: boolean;
  mutateFn: (
    // eslint-disable-next-line no-unused-vars
    fields: CreateEditPayload,
  ) => void;
  success?: boolean;
}> = ({ type, initialFields, mutateFn, disable, success = false }) => {
  const popupTitle = `${capitalize(type)} Assessment`;

  const { openModal, setOpenModal } = useAssessmentStore((state) => ({
    openModal: state.openModal,
    setOpenModal: state.setOpenModal,
  }));
  const [fields, setFields] = useState<CreateEditPayload>(initialFields);
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLevelSelect = (level: CreateEditPayload['level']) => {
    setFields((prev) => ({ ...prev, level }));
  };

  const handleTypeSelect = (type: CreateEditPayload['type']) => {
    setFields((prev) => ({ ...prev, type }));
  };

  const handleClose = () => {
    setOpenModal(false);
    setTimeout(() => setFields(initialFields), 400);
  };

  const handleSubmit = async () => {
    handleClose();
    mutateFn(fields);
  };

  useEffect(() => {
    if (success) setFields(initialFields);
  }, [success]);

  const title = (
    <UITextField
      name='title'
      placeholder='Enter assessment name'
      value={fields.title}
      onChange={handleChange}
    />
  );

  const description = (
    <UITextField
      name='description'
      placeholder='Briefly describe about the assessment'
      value={fields.description}
      onChange={handleChange}
      multiline={true}
      minRows={5}
    />
  );

  const levels = (
    <LevelSelector
      selectedLevel={fields.level}
      handleSelect={handleLevelSelect}
    />
  );

  const types = (
    <TypeSelector selectedType={fields.type} handleSelect={handleTypeSelect} />
  );

  const disabled =
    fields.title.trim() === '' || fields.description.trim() === '' || disable;
  const submit = (
    <Stack width={'100%'}>
      <AUIButton onClick={handleSubmit} disabled={disabled}>
        {type === 'edit' ? 'Save changes' : popupTitle}
      </AUIButton>
    </Stack>
  );

  return (
    <Dialog open={openModal} onClose={handleClose}>
      <AssessmentPopupDev
        textPopupTitle={popupTitle}
        slotInputName={title}
        slotDescriptionTextarea={description}
        slotSelectionDropdown={types}
        slotButton={submit}
        slotAssesmentLevel={levels}
        onClickClose={{ onClick: handleClose }}
      />
    </Dialog>
  );
};

const LevelSelector: React.FC<{
  selectedLevel: CreateEditPayload['level'];
  // eslint-disable-next-line no-unused-vars
  handleSelect: (level: CreateEditPayload['level']) => void;
}> = ({ selectedLevel, handleSelect }) => {
  const levels: CreateEditPayload['level'][] = [
    'basic',
    'intermediate',
    'advanced',
  ];
  const cards = levels.map((level, i) => (
    <SelectionPill
      key={i}
      isSelected={selectedLevel === level}
      slotOption={<LevelTag level={level} />}
      onClickSelected={{ onClick: () => handleSelect(level) }}
    />
  ));
  return <>{cards}</>;
};

const TypeSelector: React.FC<{
  selectedType: CreateEditPayload['type'];
  // eslint-disable-next-line no-unused-vars
  handleSelect: (level: CreateEditPayload['type']) => void;
}> = ({ selectedType, handleSelect }) => {
  const types: CreateEditPayload['type'][] = [
    'programming',
    'cognitive',
    'culture',
    'language',
    'role',
    'situational',
    'software',
    'typing',
  ];
  const cards = types.map((type, i) => (
    <MenuItem key={i} value={type}>
      <TypeTags type={type} />
    </MenuItem>
  ));
  return (
    <SelectionComp
      onChange={(e) => handleSelect(e.target.value)}
      value={selectedType}
    >
      {cards}
    </SelectionComp>
  );
};

export default CreateEditPopup;
