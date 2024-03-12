import { Drawer } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { CandidateDetails, CandidateSideDrawer } from '@/devlink';
import { SummaryBlock } from '@/devlink2';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import {
  AnalysisBlockSection,
  NewEducationDetails,
  NewExperienceDetails,
  NewSkillDetails
} from '@/src/components/JobApplicationsDashboard/ApplicationCard/ApplicationDetails';
import EmailIcon from '@/src/components/JobApplicationsDashboard/Common/Icons/emailIcon';
import LinkedInIcon from '@/src/components/JobApplicationsDashboard/Common/Icons/linkedinIcon';
import PhoneIcon from '@/src/components/JobApplicationsDashboard/Common/Icons/phoneIcon';
import CopyWrapper from '@/src/components/JobApplicationsDashboard/Common/Wrappers/copyWrapper';
import { JobApplication } from '@/src/context/JobApplicationsContext/types';
import { CandidateType, JobApplcationDB } from '@/src/types/data.types';

import { setIsViewProfileOpen } from '../store';

function CandidateDetailsJobDrawer({
  isViewProfileOpen,
  applications,
  candidate,
  file
}: {
  isViewProfileOpen: boolean;
  applications: JobApplcationDB;
  candidate: CandidateType;
  file: {
    id: string;
    created_at: string;
    file_url: string;
    candidate_id: string;
    resume_json: JSON;
    type: string;
  };
}) {
  const application: JobApplication = useMemo(
    () =>
      ({
        ...applications,
        candidate: candidate,
        candidate_files: file
      }) as unknown as JobApplication,
    [applications, candidate, file]
  );

  const resumeJson: any = useMemo(() => file?.resume_json, [file?.resume_json]);

  return (
    <>
      <Drawer
        anchor={'right'}
        open={isViewProfileOpen}
        onClose={() => {
          setIsViewProfileOpen(false);
        }}
      >
        <CandidateSideDrawer
          textAppliedOn={dayjs(applications.created_at).format('DD MMM YYYY')}
          isNavigationButtonVisible={false}
          slotSocialLink={
            <>
              {candidate.linkedin && (
                <CopyWrapper content={candidate.linkedin}>
                  <LinkedInIcon />
                </CopyWrapper>
              )}
              {candidate.phone && (
                <CopyWrapper content={candidate.phone}>
                  <PhoneIcon />
                </CopyWrapper>
              )}
              {candidate.email && (
                <CopyWrapper content={candidate.email}>
                  <EmailIcon />
                </CopyWrapper>
              )}
            </>
          }
          slotCandidateImage={
            <MuiAvatar
              src={candidate.avatar}
              level={candidate.first_name}
              variant='circular'
              height='24px'
              width='24px'
              fontSize='8px'
            />
          }
          isLocationVisible={Boolean(candidate.country)}
          isResumeVisible={Boolean(file.file_url)}
          isRoleVisible={Boolean(resumeJson.currentJobTitle)}
          onClickResume={{
            onClick: () => {
              window.open(file.file_url, '_blank');
            }
          }}
          textRole={resumeJson.currentJobTitle || ''}
          textName={`${candidate.first_name || ''} ${candidate.last_name || ''}`}
          textLocation={[candidate.city, candidate.state, candidate.country]
            .filter(Boolean)
            .join(', ')}
          isOverviewVisible={resumeJson.overview}
          slotOverview={
            <>
              <SummaryBlock
                arrowProps={{
                  style: {
                    display: 'none'
                  }
                }}
                title={'Overview'}
                description={resumeJson.overview}
              />
            </>
          }
          slotCandidateDetails={
            <CandidateDetails
              slotInterviewScore={
                <>
                  <AnalysisBlockSection application={application} />
                  <NewExperienceDetails
                    positions={resumeJson.positions}
                    relevance={
                      (applications.score_json as any)?.relevance?.positions
                    }
                  />
                  <NewEducationDetails
                    schools={resumeJson.schools}
                    relevance={
                      (applications.score_json as any)?.relevance?.schools
                    }
                  />
                  <NewSkillDetails
                    skills={resumeJson.skills}
                    relevance={(applications.score_json as any)?.skills}
                  />
                </>
              }
            />
          }
        />
      </Drawer>
    </>
  );
}

export default CandidateDetailsJobDrawer;
