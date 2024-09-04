import { type schedulingSettingType } from '@aglint/shared-types';
import { CompanySetting } from '@devlink/CompanySetting';
import { SavedChanges } from '@devlink/SavedChanges';
import { CircularProgress, Stack } from '@mui/material';
import LoaderGrey from '@public/lottie/LoaderGrey';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { supabase } from '@/utils/supabase/client';

import CompanyInfoComp from './CompanyInfoComp';
import SchedulingSettings, { SettingsSubNabItem } from './SettingsSchedule';
import {
  generateDepartments,
  generateRoles,
  generateSpecialities,
} from './utils';

const CompanyDetailComp = () => {
  const router = useRouter();
  const { recruiter, setRecruiter } = useAuthDetails();
  const [isSaving, setIsSaving] = useState<'saving' | 'saved'>('saved');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (recruiter?.id) {
      if (!localStorage?.getItem('departments')) {
        generateDepartments(recruiter.industry);
      }
      if (!localStorage?.getItem('specialities')) {
        generateSpecialities(recruiter.industry);
      }
      if (!localStorage?.getItem('roles')) {
        generateRoles(recruiter.industry);
      }
    }
  }, [recruiter]);

  useEffect(() => {
    if (router.isReady && !router.query?.tab) {
      router.replace('/company?tab=company-info');
    }
  }, [router]);

  useEffect(() => {
    if (!isSaved && isSaving) setIsSaved(true);
  }, [isSaving]);

  async function updateSettings(schedulingSettingObj: schedulingSettingType) {
    setIsSaving('saving');
    const { data: updatedRecruiter, error } = await supabase
      .from('recruiter')
      .update({ scheduling_settings: schedulingSettingObj })
      .eq('id', recruiter.id)
      .select(
        '*,office_locations(*), departments(id,name), recruiter_preferences(*)',
      )
      .single();
    if (!error) {
      setRecruiter(
        {
          ...updatedRecruiter,
          socials: updatedRecruiter?.socials,
        }!,
      );
    }
    setIsSaving('saved');
  }

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isSaving === 'saving') {
      setShow(true);
    } else if (isSaving === 'saved') {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [isSaving]);

  return (
    <Stack overflow={'hidden'}>
      <CompanySetting
        slotNavSublink={<SettingsSubNabItem />}
        slotSavedChanges={
          show && (
            <SavedChanges
              slotLoaderIcon={
                <>
                  <CircularProgress
                    color='inherit'
                    size={'16px'}
                    sx={{ color: 'var(--neutral-6)' }}
                  />
                </>
              }
              isSaved={isSaving === 'saved'}
              isSaving={isSaving === 'saving'}
            />
          )
        }
        slotSavingLottie={<LoaderGrey />}
        isSaved={isSaved}
        slotCompany={
          <>
            <CompanyInfoComp setIsSaving={setIsSaving} />
            <SchedulingSettings
              setSaving={setIsSaving}
              initialData={recruiter?.scheduling_settings}
              updateSettings={updateSettings}
            />
          </>
        }
      />
    </Stack>
  );
};

export default CompanyDetailComp;
