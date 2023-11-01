import WarningIcon from '@mui/icons-material/Warning';
import { Stack, Tooltip } from '@mui/material';
import md5 from 'blueimp-md5';

import { CandidateListItem } from '@/devlink2';
import { JobApplication } from '@/src/context/JobApplicationsContext/types';
import { useJobApplications } from '@/src/context/JobApplicationsContext';
import { getOverallResumeScore } from '@/src/utils/support/supportUtils';

import {
  ApiLogState,
  capitalize,
  formatTimeStamp,
  getInterviewScore,
  intactConditionFilter,
} from '../utils';
import Calculating from '../../Common/Calculating';
import MuiAvatar from '../../Common/MuiAvatar';
import { SmallCircularScore } from '../../Common/SmallCircularScore';

const ApplicationCard = ({
  application,
  index,
  checkList,
  handleSelect,
  isInterview,
  handleOpenDetails,
  isSelected = false,
}: {
  application: JobApplication;
  index: number;
  checkList: Set<string>;
  // eslint-disable-next-line no-unused-vars
  handleSelect: (index: number) => void;
  isInterview: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOpenDetails: () => void;
  isSelected: boolean;
}) => {
  const { job } = useJobApplications();

  const interviewScore = application?.feedback
    ? getInterviewScore(application.feedback)
    : 0;

  const creationDate = formatTimeStamp(application.created_at);

  const handleCheck = () => {
    handleSelect(index);
  };

  const resumeScore = application.jd_score
    ? getOverallResumeScore(application.jd_score, job.parameter_weights)
    : 0;

  return (
    <CandidateListItem
      onclickSelect={{ onClick: handleCheck }}
      isChecked={checkList.has(application.application_id)}
      slotProfileImage={
        <MuiAvatar
          level={application.first_name}
          src={
            !application.profile_image
              ? getGravatar(application.email)
              : application.profile_image
          }
          variant='rounded'
          width='100%'
          height='100%'
        />
      }
      name={
        application.first_name
          ? capitalize(
              application.first_name + ' ' + application?.last_name || '',
            )
          : '---'
      }
      jobTitle={
        application.job_title ? capitalize(application.job_title) : '---'
      }
      slotResumeScore={
        intactConditionFilter(application) !== ApiLogState.PROCESSING ? (
          application.json_resume && application.jd_score ? (
            <SmallCircularScore
              finalScore={resumeScore}
              scale={0.5}
              showScore={true}
            />
          ) : (
            <Tooltip title='Resume not parsable' placement='right' arrow>
              <WarningIcon fontSize='small' style={{ color: 'goldenrod' }} />
            </Tooltip>
          )
        ) : (
          <Tooltip title='Ongoing scoring' placement='right' arrow>
            <Stack style={{ scale: '0.3' }}>
              <Calculating />
            </Stack>
          </Tooltip>
        )
      }
      email={application.email || '---'}
      phone={application.phone || '---'}
      isInterviewVisible={isInterview}
      slotInterviewScore={
        application?.feedback ? (
          <SmallCircularScore
            finalScore={interviewScore}
            scale={0.5}
            showScore={true}
          />
        ) : (
          <Tooltip title='Yet to be interviewed' placement='right' arrow>
            <WarningIcon fontSize='small' style={{ color: 'goldenrod' }} />
          </Tooltip>
        )
      }
      appliedDate={creationDate}
      onclickCandidate={{
        onClick: () => {
          handleOpenDetails();
        },
      }}
      isHighlighted={isSelected}
    />
  );
};

export default ApplicationCard;

// eslint-disable-next-line no-unused-vars
export function getGravatar(email, first_name = '') {
  let imgUrl = `https://www.gravatar.com/avatar/${md5(
    email ? email.trim().toLowerCase() : '',
  )}?d=blank&s=240&r=g`;

  return imgUrl;
}
