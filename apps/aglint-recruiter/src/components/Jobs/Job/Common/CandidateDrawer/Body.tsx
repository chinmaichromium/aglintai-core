import { Stack } from '@mui/material';
import { type ReactNode, useCallback, useState } from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { CandidateSideDrawer } from '@/devlink/CandidateSideDrawer';
import { GeneralError } from '@/devlink/GeneralError';
import { IconButtonSoft } from '@/devlink/IconButtonSoft';
import { ResumeErrorBlock } from '@/devlink2/ResumeErrorBlock';
import { ButtonSolid } from '@/devlink3/ButtonSolid';
import { GlobalCta } from '@/devlink3/GlobalCta';
import ResumeWait from '@/public/lottie/ResumeWait';
import Loader from '@/src/components/Common/Loader';
import OptimisticWrapper from '@/src/components/NewAssessment/Common/wrapper/loadingWapper';
import { useApplication } from '@/src/context/ApplicationContext';
import { useApplicationStore } from '@/src/context/ApplicationContext/store';

import { ResumeUploadComp } from '../UploadApplications/importManual';
import { Activity } from './Activity';
import { Details } from './Details';
import { Interview } from './Interview';
import { Meta } from './Meta';
import { Tabs } from './Tabs';
import { Tasks } from './Tasks';
import { TopBar } from './TopBar';

type Props = {
  topBar: ReactNode;
  meta: ReactNode;
  details: ReactNode;
  interview: ReactNode;
  tabs: ReactNode;
  tasks: ReactNode;
  activity: ReactNode;
};

const Body = (props: Partial<Props> & { showTabs?: boolean }) => {
  const blocker = useBlocker();
  if (blocker)
    return (
      <CandidateSideDrawer
        slotTopBar={props.topBar ?? <TopBar />}
        slotBasicInfo={blocker}
        isTabs={false}
        slotNewTabPill={<></>}
        slotTabContent={<></>}
      />
    );
  return (
    <CandidateSideDrawer
      slotTopBar={props.topBar ?? <TopBar />}
      slotBasicInfo={props.meta ?? <Meta />}
      slotNewTabPill={props.tabs ?? <Tabs />}
      slotTabContent={
        <TabContent interview={props.interview} details={props.details} />
      }
    />
  );
};

Body.TopBar = TopBar;
Body.Meta = Meta;
Body.Tabs = Tabs;
Body.Details = Details;
Body.Interview = Interview;
Body.Tasks = Tasks;
Body.Activity = Activity;

export { Body };

const TabContent = (
  props: Partial<Pick<Props, 'details' | 'interview' | 'tasks' | 'activity'>>,
) => {
  const tab = useApplicationStore(({ tab }) => tab);
  switch (tab) {
    case 'Details':
      return props.details ?? <Details />;
    case 'Screening':
    case 'Assessment':
    case 'Interview':
      return props.interview ?? <Interview />;
    case 'Tasks':
      return props.tasks ?? <Tasks />;
    case 'Activity':
      return props.activity ?? <Activity />;
  }
};

const useBlocker = () => {
  const { details, meta } = useApplication();
  if (details.status === 'error' || meta.status === 'error')
    return (
      <Stack width={'700px'}>
        <GeneralError
          onClickRetry={{
            onClick: () => {
              details.refetch();
              meta.refetch();
            },
          }}
        />
      </Stack>
    );
  switch (meta?.data?.resume_processing_state) {
    case 'fetching':
      return <ResumeErrorBlock slotLottie={<ResumeWait />} />;
    case 'processing':
      return <ResumeErrorBlock slotLottie={<ResumeWait />} />;
    case 'unavailable':
      return (
        <GlobalCta
          color={'error'}
          iconName={'warning'}
          textTitle={'Resume not found'}
          textDescription={
            "Unable to find the candidate resume.Please upload the resume manually to generate a score and analyse the candidate's profile."
          }
          slotButton={
            <ButtonSoft
              size={2}
              color={'neutral'}
              textButton={'Upload resume'}
            />
          }
        />
      );
    case 'unparsable':
      return <Unparsable />;
  }
  return undefined;
};

const Unparsable = () => {
  const { handleResumeReUpload, handleDeleteApplication } = useApplication();
  const setPreview = useApplicationStore(({ setPreview }) => setPreview);

  const [file, setFile] = useState<File>(undefined);
  const [loading, setLoading] = useState(false);

  const handleUpload = useCallback(async () => {
    if (!loading) {
      setLoading(true);
      await handleResumeReUpload([file]);
      setLoading(false);
    }
  }, [file, loading]);

  const handleDelete = useCallback(async () => {
    if (!loading) {
      setLoading(true);
      await handleDeleteApplication();
      setLoading(false);
    }
  }, [loading]);

  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <OptimisticWrapper loading={loading}>
        {file ? (
          <GlobalCta
            color={'neutral'}
            slotCustomIcon={<></>}
            textTitle={'Upload resume'}
            textDescription={'Upload the resume to score the candidate'}
            slotButton={
              <Stack gap={2} alignItems={'center'}>
                <ResumeUploadComp
                  value={file}
                  handleChange={(e) => setFile(e)}
                  label={false}
                />
                <Stack direction={'row'} gap={1}>
                  <ButtonSolid
                    size={2}
                    color={'accent'}
                    textButton={'Upload resume'}
                    onClickButton={{
                      onClick: () => handleUpload(),
                    }}
                  />
                </Stack>
              </Stack>
            }
          />
        ) : (
          <GlobalCta
            color={'warning'}
            iconName={'error'}
            textTitle={'Resume not parsable'}
            textDescription={
              "The system is unable to parse the candidate's resume. Please review it manually and proceed accordingly."
            }
            slotButton={
              <Stack gap={2} alignItems={'center'}>
                <ResumeUploadComp
                  value={file}
                  handleChange={(e) => setFile(e)}
                  label={false}
                />
                <Stack direction={'row'} gap={1}>
                  <IconButtonSoft
                    color={'neutral'}
                    size={2}
                    iconName={'description'}
                    onClickButton={{ onClick: () => setPreview(true) }}
                  />
                  <ButtonSoft
                    size={2}
                    color={'error'}
                    textButton={'Delete application'}
                    onClickButton={{ onClick: () => handleDelete() }}
                  />
                </Stack>
              </Stack>
            }
          />
        )}
      </OptimisticWrapper>
      {loading && (
        <Stack style={{ position: 'absolute' }}>
          <Loader />
        </Stack>
      )}
    </Stack>
  );
};
