/* eslint-disable security/detect-object-injection */
import { DatabaseEnums, DatabaseTableInsert } from '@aglint/shared-types';
import { Box, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ButtonSolid } from '@/devlink/ButtonSolid';
import { EditEmail } from '@/devlink/EditEmail';
import { EmailTemplateCards } from '@/devlink/EmailTemplateCards';
import { EmailTemplatesStart } from '@/devlink/EmailTemplatesStart';
import { LoaderSvg } from '@/devlink/LoaderSvg';
import EmailPreview from '@/src/components/Common/EmailTemplateEditor/EmailPreview';
import EmailTemplateEditForm from '@/src/components/Common/EmailTemplateEditor/EmailTemplateEditForm';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { emailTemplateCopy } from '@/src/types/companyEmailTypes';
import { YTransform } from '@/src/utils/framer-motions/Animation';
import toast from '@/src/utils/toast';

import { upateEmailTemplate } from './utils';

function SchedulerEmailTemps() {
  const { emailTemplates } = useAuthDetails();
  const [emailTemplate, setEmailTemplate] =
    useState<DatabaseTableInsert['company_email_template'][]>(null);
  const [tiptapLoader, setTipTapLoder] = useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<DatabaseTableInsert['company_email_template']>(null);
  const [isEditorLoad, setIsEditorLoad] = useState(true);
  const [saving, setSaving] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const [isHtml, setHtml] = useState(null);
  const [popOverLoading, setPopOverLoading] = useState(false);

  useEffect(() => {
    if (emailTemplates.data) {
      setEmailTemplate([...emailTemplates.data]);
      setSelectedTemplate(emailTemplates.data[11]);
    }

    setTimeout(() => {
      setIsEditorLoad(false);
    }, 500);
  }, [emailTemplates]);

  async function updateEmail({
    id,
    data,
  }: {
    id: string;
    data: DatabaseTableInsert['company_email_template'];
  }) {
    await upateEmailTemplate({
      id,
      data: {
        ...data,
      },
    });
    setSaving(false);
    await emailTemplates.refetch();
    toast.message('Saved Successfully!');
  }
  const preview = async () => {
    setPopOverLoading(true);
    try {
      const { data } = await axios.post(`/api/emails/preview`, {
        mail_type: selectedTemplate.type,
        body: selectedTemplate.body,
      });
      setHtml(data);
      setPopOverLoading(false);
      return data;
    } catch (error) {
      setPopOverLoading(false);
      toast.error(`Error fetching preview: ${error}`);
      throw error;
    }
  };

  const senderNameChange = (e) => {
    setSelectedTemplate((pre) => {
      pre.from_name = e.target.value;
      return { ...pre };
    });
  };

  const emailSubjectChange = (html) => {
    const text = html;
    setSelectedTemplate((pre) => {
      pre.subject = text;
      return { ...pre };
    });
  };

  const emailBodyChange = (html) => {
    const text = html;
    setSelectedTemplate((pre) => {
      pre.body = text;
      return { ...pre };
    });
  };

  return (
    <Stack>
      <Box>
        {emailTemplate && (
          <EmailTemplatesStart
            slotEmailTemplateCards={emailTemplate
              ?.filter((emailPath) => emailTempKeys.includes(emailPath.type))
              .filter(
                (v, i, a) => a.findIndex((v2) => v2.type === v.type) === i,
              )
              .sort((a, b) => a.type.localeCompare(b.type))
              .map((emailPath) => (
                <EmailTemplateCards
                  key={emailPath.id}
                  isActive={selectedTemplate.type === emailPath.type}
                  textDescription={emailTemplateCopy[emailPath.type]?.trigger}
                  textTitle={emailTemplateCopy[emailPath.type]?.listing}
                  onClickApplicationRecieved={{
                    onClick: () => {
                      setTipTapLoder(true);
                      setSelectedTemplate(emailPath);
                      setTimeout(() => {
                        setTipTapLoder(false);
                      }, 500);
                    },
                  }}
                />
              ))}
            slotEmailDetails={
              <>
                {isEditorLoad && (
                  <>
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='center'
                      bgcolor='var(--neutral-2)'
                      sx={{ width: '100%', height: 'calc(100vh - 96px)' }}
                    >
                      <LoaderSvg />
                    </Stack>
                  </>
                )}
                {!isEditorLoad && (
                  <YTransform uniqueKey={selectedTemplate}>
                    <EditEmail
                      slotSaveButton={
                        <ButtonSolid
                          size={2}
                          isLoading={saving}
                          textButton={'Save'}
                          onClickButton={{
                            onClick: () => {
                              setSaving(true);
                              updateEmail({
                                id: selectedTemplate.id,
                                data: selectedTemplate,
                              });
                            },
                          }}
                        />
                      }
                      onClickPreview={{
                        onClick: (e) => {
                          preview();
                          setAnchorEl(e.currentTarget);
                        },
                      }}
                      isPreviewVisible={
                        selectedTemplate.type == emailTempKeys[0] ? false : true
                      }
                      textTipsMessage={
                        emailTemplateCopy[selectedTemplate?.type]
                          ?.dynamicContent
                      }
                      editEmailDescription={
                        emailTemplateCopy[selectedTemplate?.type]?.description
                      }
                      isSaveChangesButtonVisible={false}
                      textEmailName={
                        emailTemplateCopy[selectedTemplate?.type]?.heading
                      }
                      slotForm={
                        tiptapLoader ? (
                          <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{
                              height: 'calc(100vh - 220px)',
                              width: '100%',
                            }}
                          >
                            <LoaderSvg />
                          </Stack>
                        ) : (
                          <EmailTemplateEditForm
                            senderNameChange={senderNameChange}
                            emailBodyChange={emailBodyChange}
                            emailSubjectChange={emailSubjectChange}
                            selectedTemplate={selectedTemplate}
                          />
                        )
                      }
                    />
                    <EmailPreview
                      anchorEl={anchorEl}
                      setAnchorEl={setAnchorEl}
                      setHtml={setHtml}
                      isHtml={isHtml}
                      Loading={popOverLoading}
                    />
                  </YTransform>
                )}
              </>
            }
          />
        )}
      </Box>
    </Stack>
  );
}

export default SchedulerEmailTemps;

export const emailTempKeys: DatabaseEnums['email_slack_types'][] = [
  'agent_email_candidate',
  'confInterview_email_organizer',
  'confirmInterview_email_applicant',
  'debrief_email_interviewer',
  'interReschedReq_email_recruiter',
  'interviewCancel_email_applicant',
  'InterviewCancelReq_email_recruiter',
  'interviewReschedule_email_applicant',
  'interviewStart_email_applicant',
  'interviewStart_email_interviewers',
  'selfScheduleReminder_email_applicant',
  'sendAvailabilityRequest_email_applicant',
  'sendAvailReqReminder_email_applicant',
  'sendSelfScheduleRequest_email_applicant',
  'availabilityReqResend_email_candidate',
];
