import { useEffect, useState } from 'react';

import { ButtonPrimaryRegular, EnableAssessment } from '@/devlink';
import {
  BrowseScreeningPop,
  ChooseScreeningCard,
  PhoneScreening,
  ScrCheckmarkIcon,
  ScrRadioIcon,
  ScrShortTextIcon,
} from '@/devlink2';
import { ScreeningLandingCard } from '@/devlink2/ScreeningLandingCard';
import MuiPopup from '@/src/components/Common/MuiPopup';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import { PhoneScreenQuestion, useJobForm } from '../../JobPostFormProvider';

const ScreeningComp = () => {
  const { jobForm, handleUpdateFormFields } = useJobForm();
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const { recruiter } = useAuthDetails();
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const filteredTemplates = templates.filter(
    (template) => template.id === jobForm.formFields.phoneScreeningTemplateId,
  );
  const filteredTitles = filteredTemplates.map((template) => template.title);
  const questionsCount = filteredTemplates.map((count) => {
    return count.questions.questions === undefined ? '0' : count.questions.questions.length;
  });
  const fetchTemplate = async () => {
    try {
      const { data, error } = await supabase
        .from('screening_questions')
        .select('id,title,questions')
        .eq('recruiter_id', recruiter.id);

      if (error) {
        toast.error(error);
      } else {
        setTemplates(data);
      }
    } catch {
      toast.error('Failed to Fetch Screening Templates');
    }
  };

  const submitTemplate = async () => {
    handleUpdateFormFields({
      path: 'phoneScreeningTemplateId',
      value: selectedTemplate,
    });
    setIsTemplateOpen(false);
  };
  useEffect(() => {
    if (recruiter.id !== null) {
      fetchTemplate();
    }
  }, [recruiter]);

  return (
    <>
      {!jobForm.formFields.isPhoneScreenEnabled && (
        <EnableAssessment
          onClickEnablePhoneScreening={{
            onClick: () => {
              handleUpdateFormFields({
                path: 'isPhoneScreenEnabled',
                value: true,
              });
            },
          }}
          isPhoneScreeningEnable
          isEnableAssessmentVisible={false}
        />
      )}
      {jobForm.formFields.isPhoneScreenEnabled && (
        <>
          <PhoneScreening
            isHeaderVisible={true}
            slotWelcomeText={
              jobForm.formFields.phoneScreeningTemplateId === '' ? (
                <ChooseScreeningCard
                  onClickCard={{
                    onClick: () => {
                      setIsTemplateOpen(true);
                    },
                  }}
                />
              ) : (
                <ScreeningLandingCard
                  isChange={true}
                  onClickCard={{
                    onClick: () => {
                      setIsTemplateOpen(true);
                    },
                  }}
                  key={selectedTemplate}
                  textTitle={filteredTitles}
                  textQuestionCount={questionsCount[0]}
                />
              )
            }
          />
          <MuiPopup
            props={{
              // sx: { width: '800px' },
              maxWidth: 'md',
              fullWidth: true,
              open: isTemplateOpen,
              onClose: () => {
                setIsTemplateOpen(false);
                setSelectedTemplate('');
              },
            }}
          >
            <BrowseScreeningPop
              isEmpty={!templates.length ? true : false}
              isNotEmpty={!templates.length ? false : true}
              onClickClose={{
                onClick: () => {
                  setIsTemplateOpen(false);
                  setSelectedTemplate('');
                },
              }}
              isAddScreeenButtonVisible={selectedTemplate !== ''}
              slotAddScreeningButton={
                <ButtonPrimaryRegular
                  textLabel={'Add Screening'}
                  onClickButton={{
                    onClick: () => {
                      submitTemplate();
                      setSelectedTemplate('');
                    },
                  }}
                />
              }
              slotBrowseScreeningCard={templates.map((data) => {
                const questionCount = data.questions.questions
                  ? Object.keys(data.questions.questions).length
                  : 0;
                return (
                  <ScreeningLandingCard
                    isChange={false}
                    isActive={selectedTemplate === data.id}
                    textTitle={data.title}
                    textQuestionCount={questionCount}
                    key={data.id}
                    onClickCard={{
                      onClick: () => {
                        setSelectedTemplate(data.id);
                      },
                    }}
                  />
                );
              })}
            />
          </MuiPopup>
        </>
      )}
    </>
  );
};

export default ScreeningComp;

export const qnTypeToIcon = (type: PhoneScreenQuestion['type']) => {
  if (type === 'singleSelect') {
    return <ScrRadioIcon />;
  }

  if (type === 'multiSelect') {
    return <ScrCheckmarkIcon />;
  }

  if (type === 'shortAnswer') {
    return <ScrShortTextIcon />;
  }
};
