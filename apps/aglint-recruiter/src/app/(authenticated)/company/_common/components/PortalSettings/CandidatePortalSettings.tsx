'use client';

import { usePortalSettings } from '@/company/hooks/usePortalSettings';

import AboutCompany from './AboutCompany';
import CandidateGreeting from './CandidateGreeting';
import { CoverImage } from './CoverImage';
import { SliderImages } from './SliderImages';
import CandidatePoratlSettingsSkeleton from './ui/skeleton/CandidatePoratlSettingsSkeleton';

function CandidatePortalSettings() {
  const { isPending } = usePortalSettings();
  if (isPending) return <CandidatePoratlSettingsSkeleton />;
  return (
    <div className='flex flex-col gap-8 p-4 pb-32 pl-6'>
      <CoverImage />
      <CandidateGreeting />
      <AboutCompany />
      <SliderImages />
    </div>
  );
}

export default CandidatePortalSettings;
