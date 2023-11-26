import { CircularProgress, Stack } from '@mui/material';
import { isEmpty } from 'lodash';
import router from 'next/router';
import React, { useState } from 'react';

import { JobDescriptionModal } from '@/devlink';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { palette } from '@/src/context/Theme/Theme';
import { searchJdToJson } from '@/src/utils/prompts/candidateDb/jdToJson';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import AUIButton from '../Common/AUIButton';
import UITextField from '../Common/UITextField';
import {
  API_FAIL_MSG,
  supabaseWrap,
} from '../JobsDashboard/JobPostCreateUpdate/utils';

export const JDSearchModal = ({ setJdPopup }) => {
  const defaultValue = '';
  const { recruiter } = useAuthDetails();
  const [isJdSearching, setIsJdSearching] = useState(false);
  const [jobRole, setJobRole] = useState('');
  const [jdText, setJdText] = useState(defaultValue);

  const getMatchingCandsFromJd = async () => {
    try {
      if (isEmpty(jobRole) || isEmpty(jdText)) return;
      if (isJdSearching) return;
      setIsJdSearching(true);
      const fullJd = `
job role ${jobRole}

job description 

${jdText}
`;
      const p = await searchJdToJson(fullJd);
      const [history] = supabaseWrap(
        await supabase
          .from('candidate_search_history')
          .insert({
            recruiter_id: recruiter.id,
            is_search_jd: false,
            query_json: p,
          })
          .select(),
      );
      router.push(`/candidates/search?searchQryId=${history.id}`);
    } catch (err) {
      toast.error(API_FAIL_MSG);
      //
    } finally {
      setJdPopup(false);
      setIsJdSearching(false);
    }
  };

  const disabled = isEmpty(jobRole) || isEmpty(jdText);

  return (
    <JobDescriptionModal
      slotJobDescription={
        <>
          <Stack gap={2}>
            <UITextField
              onChange={(e) => {
                setJobRole(e.target.value);
              }}
              value={jobRole}
              placeholder='Enter job title'
            />
            <textarea
              style={{
                resize: 'vertical',
                borderRadius: '5px',
                width: '100%',
                height: '200px',
                padding: '5px',
                outline: 'none',
                borderColor: palette.grey[300],
              }}
              placeholder='Enter job description'
              value={jdText}
              onChange={(e) => {
                setJdText(e.target.value);
              }}
            />
          </Stack>
        </>
      }
      onClickClose={{
        onClick: () => {
          setJdPopup(false);
        },
      }}
      slotButtonPrimaryRegular={
        <AUIButton
          variant='primary'
          size='small'
          onClick={() => {
            getMatchingCandsFromJd();
          }}
          disabled={disabled}
          endIcon={
            isJdSearching && (
              <CircularProgress
                color='inherit'
                size={'15px'}
                sx={{ color: palette.grey[400] }}
              />
            )
          }
        >
          Search
        </AUIButton>
      }
    />
  );
};
