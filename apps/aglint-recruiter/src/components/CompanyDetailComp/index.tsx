import { schedulingSettingType } from '@aglint/shared-types';
import { CircularProgress, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CompanySetting } from '@/devlink/CompanySetting';
import { NavSublink } from '@/devlink/NavSublink';
import { SavedChanges } from '@/devlink/SavedChanges';
import LoaderGrey from '@/public/lottie/LoaderGrey';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useRolesAndPermissions } from '@/src/context/RolesAndPermissions/RolesAndPermissionsContext';
import { supabase } from '@/src/utils/supabase/client';

import CompanyInfoComp from './CompanyInfoComp';
import SchedulingSettings, { SettingsSubNabItem } from './SettingsSchedule';
import {
  generateDepartments,
  generateRoles,
  generateSpecialities,
  tabs,
} from './utils';

const CompanyDetailComp = () => {
  const router = useRouter();
  const { recruiter, setRecruiter } = useAuthDetails();
  const { ifAllowed } = useRolesAndPermissions();
  const [isSaving, setIsSaving] = useState(false);
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
      router.replace('/company?tab=basic-info');
    }
  }, [router]);

  useEffect(() => {
    if (!isSaved && isSaving) setIsSaved(true);
  }, [isSaving]);

  async function updateSettings(schedulingSettingObj: schedulingSettingType) {
    setIsSaving(true);
    const { data: updatedRecruiter, error } = await supabase
      .from('recruiter')
      .update({ scheduling_settings: schedulingSettingObj })
      .eq('id', recruiter.id)
      .select('*,office_locations(*), departments(id,name)')
      .single();
    if (!error) {
      setRecruiter(
        {
          ...updatedRecruiter,
          socials: updatedRecruiter?.socials,
        }!,
      );
    }
    setIsSaving(false);
  }

  return (
    <Stack overflow={'hidden'}>
      <CompanySetting
        slotNavSublink={
          <>
            <NavSublink
              textLink={'Company Info'}
              isActive={router.query?.tab === 'additional-info'}
              onClickNav={{
                onClick: () => {
                  router.replace(`/company?tab=${tabs.companyInfo}`);
                },
              }}
            />
            {ifAllowed(
              <NavSublink
                textLink={'Users'}
                isActive={router.query?.tab === 'team'}
                onClickNav={{
                  onClick: () => {
                    router.replace('/company?tab=team');
                  },
                }}
              />,
              ['view_users'],
            )}
            {ifAllowed(
              <NavSublink
                textLink={'Roles'}
                isActive={router.query?.tab === 'roles'}
                onClickNav={{
                  onClick: () => {
                    router.replace('/company?tab=roles');
                  },
                }}
              />,
              ['view_roles'],
            )}
            <SettingsSubNabItem />
          </>
        }
        slotSavedChanges={
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
            isSaved={!isSaving}
            isSaving={isSaving}
          />
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
