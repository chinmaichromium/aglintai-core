import { Stack } from '@mui/material';
import { capitalize } from 'lodash';
import { ReactNode } from 'react';

import { AllInterviewCard, ScheduleInfoBlock } from '@/devlink2';
import MuiAvatar from '@/src/components/Common/MuiAvatar';
import { getFullName } from '@/src/utils/jsonResume';

import IconScheduleType from './Icon';
import { ApplicationList } from '../store';
import {
  getScheduleBgcolor,
  getScheduleTextcolor,
  getScheduleType
} from '../utils';

function ListCardInterviewSchedule({
  app,
  onClickCard,
  slotCheckbox = <></>,
  isJobDasboard = false,
  isSelected = false
}: {
  app: ApplicationList;
  // eslint-disable-next-line no-unused-vars
  onClickCard: (app: ApplicationList) => void;
  isJobDasboard?: boolean;
  slotCheckbox?: ReactNode;
  isSelected?: boolean;
}) {
  return (
    <>
      <Stack
        onClick={() => {
          onClickCard(app);
        }}
      >
        <AllInterviewCard
          isSelected={isSelected}
          propsGrid={{
            style: {
              gridTemplateColumns: isJobDasboard
                ? '25% 15% 15% 20%'
                : '25% 15% 20% 17% 23%'
            }
          }}
          isSchedulerTable={!isJobDasboard}
          isCheckBoxVisible={isJobDasboard}
          slotCheckbox={slotCheckbox}
          textName={`${capitalize(app.candidates.first_name)} ${capitalize(app.candidates.last_name)}`}
          slotCandidateImage={
            <>
              <MuiAvatar
                level={getFullName(
                  app.candidates.first_name,
                  app.candidates.last_name
                )}
                src={app.candidates.avatar}
                variant={'circular'}
                width={'100%'}
                height={'100%'}
                fontSize={'12px'}
              />
            </>
          }
          textStatus={
            <>{app.schedule ? app.schedule.status : 'Not Scheduled'}</>
          }
          colorPropsBg={{
            style: {
              backgroundColor: getScheduleBgcolor(app.schedule?.status)
            }
          }}
          colorPropsText={{
            style: {
              color: getScheduleTextcolor(app.schedule?.status)
            }
          }}
          textDuration={'--'}
          textInterviewPanel={
            app?.schedule?.interview_plan?.filter((f) => !f.isBreak)?.length ||
            '--'
          }
          slotScheduleInfo={
            app.schedule ? (
              <ScheduleInfoBlock
                textDateTimeOrSlots={''}
                slotScheduleTypeIcon={
                  <IconScheduleType type={app.schedule.schedule_type} />
                }
                textMeetingType={getScheduleType(app.schedule.schedule_type)}
              />
            ) : (
              '--'
            )
          }
          textRelatedJob={app.public_jobs?.job_title}
        />
      </Stack>
    </>
  );
}

export default ListCardInterviewSchedule;
