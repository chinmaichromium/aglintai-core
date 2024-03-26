/* eslint-disable security/detect-object-injection */
import {
  CircularProgress,
  Dialog,
  /*Slider,*/ Stack,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import React, {
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { FetchingAshbyLoader, ImportCandidates } from '@/devlink';
import {
  AllApplicantsTable,
  AllInterview,
  ApplicantsListEmpty,
  Breadcrum,
  CandidatesListPagination,
  JobDetails,
  JobDetailsFilterBlock,
  RcCheckbox,
  SelectActionBar,
  TopApplicantsTable,
} from '@/devlink2';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useJobApplications } from '@/src/context/JobApplicationsContext';
import {
  JobApplication,
  JobApplicationSections,
} from '@/src/context/JobApplicationsContext/types';
import { CountJobs } from '@/src/context/JobsContext/types';
import NotFoundPage from '@/src/pages/404';

import ApplicationCard, { CustomDragLayer } from './ApplicationCard';
import ApplicationDetails from './ApplicationCard/ApplicationDetails';
import DeleteCandidate from './CandidateActions/deleteCandidates';
import MailCandidate from './CandidateActions/mailCandidate';
import MoveCandidate from './CandidateActions/moveCandidate';
import FilterJobApplications from './Common/FilterJobApplications';
import SectionIcons from './Common/SectionIcons';
import SortJobApplications from './Common/SortJobApplications';
import ResumeUpload from './FileUpload';
import { getBoundingStatus, useKeyPress, useMouseClick } from './hooks';
import ImportCandidatesCSV from './ImportCandidatesCsv';
import ImportManualCandidates from './ImportManualCandidates';
import NoApplicants from './Lotties/NoApplicants';
import SearchField from './SearchField';
import { capitalize, handleOngoingWarning } from './utils';
import Loader from '../Common/Loader';
import RefreshButton from '../Common/RefreshButton';
import { POSTED_BY } from '../JobsDashboard/AddJobWithIntegrations/utils';

const JobApplicationsDashboard = () => {
  const { initialLoad, job } = useJobApplications();
  return initialLoad ? (
    job !== undefined ? (
      <JobApplicationComponent />
    ) : (
      <NotFoundPage />
    )
  ) : (
    <Stack width={'100%'} height={'100vh'} justifyContent={'center'}>
      <Loader />
    </Stack>
  );
};
const JobApplicationComponent = () => {
  const {
    applications,
    job,
    atsSync,
    allApplicationsDisabled,
    section,
    handleManualRefresh,
    handleSelectNextSection,
    handleSelectPrevSection,
  } = useJobApplications();

  const sectionApplications = applications[section];

  const [currentApplication, setCurrentApplication] = useState(-1);
  const [detailedView, setDetailedView] = useState(false);

  const [applicationLimit, setApplicationLimit] = useState(job.count);

  const [openImportCandidates, setOpenImportCandidates] = useState(false);

  const { pressed: shift } = useKeyPress('Shift');
  const { pressed: right } = useKeyPress('ArrowRight');
  const { pressed: left } = useKeyPress('ArrowLeft');
  const { pressed: up } = useKeyPress('ArrowUp');
  const { pressed: down } = useKeyPress('ArrowDown');
  const upShift = shift && up;
  const downShift = shift && down;
  const leftShift = shift && left;
  const rightShift = shift && right;

  const handleSelectCurrentApplication = (i: number) => {
    setCurrentApplication(i);
  };

  const handleSelectNextApplication = () => {
    if (currentApplication < sectionApplications.length)
      setCurrentApplication((prev) => (prev + 1) % sectionApplications.length);
  };

  const handleSelectPrevApplication = () => {
    if (currentApplication > 0) setCurrentApplication((prev) => prev - 1);
    else if (currentApplication === 0)
      setCurrentApplication(sectionApplications.length - 1);
  };

  useEffect(() => {
    setApplicationLimit(job.count);
  }, [...Object.values(job.count)]);

  useEffect(() => {
    if (sectionApplications.length !== 0) {
      if (upShift) {
        handleSelectPrevApplication();
        return;
      } else if (downShift) {
        handleSelectNextApplication();
        return;
      }
    }
    if (rightShift) {
      handleSelectNextSection();
      return;
    }
    if (leftShift) {
      handleSelectPrevSection();
    }
  }, [upShift, downShift, rightShift, leftShift]);
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <JobDetails
          isWarningVisible={
            job.status == 'published' && (!job.jd_json || !job.description)
              ? true
              : false
          }
          slotRefresh={
            job?.status === 'published' && (
              <RefreshButton
                isDisabled={allApplicationsDisabled}
                text={'Refresh'}
                onClick={async () => await handleManualRefresh()}
              />
            )
          }
          isImportCandidates={job?.status === 'published'}
          slotLoadingLottie={
            <CircularProgress
              style={{
                color: '#17494D',
                width: '12px',
                height: '12px',
              }}
            />
          }
          isFetchingPillVisible={atsSync}
          slotBreadcrumb={<BreadCrumbs />}
          onclickAddCandidates={{
            onClick: () => {
              setOpenImportCandidates(true);
              posthog.capture('Import Candidates Clicked');
            },
          }}
          slotSidebar={
            <ApplicationDetails
              open={currentApplication !== -1}
              onClose={() => handleSelectCurrentApplication(-1)}
              handleSelectNextApplication={() => handleSelectNextApplication()}
              handleSelectPrevApplication={() => handleSelectPrevApplication()}
              application={
                sectionApplications[
                  currentApplication === -1 ? 0 : currentApplication
                ]
              }
              hideNextPrev={false}
            />
          }
          slotTabs={<NewJobDetailsTabs />}
          slotFilters={
            <NewJobFilterBlock
              detailedView={detailedView}
              setDetailedView={setDetailedView}
              applicationLimit={applicationLimit}
              setApplicationLimit={setApplicationLimit}
            />
          }
          slotTable={
            <ApplicationTable
              detailedView={detailedView}
              sectionApplications={sectionApplications}
              handleSelectCurrentApplication={handleSelectCurrentApplication}
              currentApplication={currentApplication}
            />
          }
          slotPagination={
            <ApplicationPagination
              size={sectionApplications.length}
              limits={applicationLimit}
            />
          }
        />
        <CustomDragLayer
          {...useMousePosition()}
          applicationLimit={applicationLimit}
        />
      </DndProvider>
      <AddCandidates
        openImportCandidates={openImportCandidates}
        setOpenImportCandidates={setOpenImportCandidates}
      />
    </>
  );
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};

const BreadCrumbs = () => {
  const router = useRouter();
  const { job } = useJobApplications();
  return (
    <>
      <Breadcrum
        isLink
        textName={`${capitalize(job?.status ?? 'all')} jobs`}
        onClickLink={{
          onClick: () => {
            router.push(`/jobs?status=${job?.status ?? 'all'}`);
          },
          style: { cursor: 'pointer' },
        }}
      />
      <Breadcrum
        isLink
        textName={capitalize(job?.job_title ?? 'Job')}
        onClickLink={{
          onClick: () => {
            router.push(`/jobs/${job?.id}`);
          },
          style: { cursor: 'pointer' },
        }}
        showArrow
      />
      <Breadcrum textName={`Candidate list`} showArrow />
    </>
  );
};

const ApplicationTable = ({
  detailedView,
  sectionApplications,
  handleSelectCurrentApplication,
  currentApplication,
}: {
  detailedView: boolean;
  sectionApplications: JobApplication[];
  // eslint-disable-next-line no-unused-vars
  handleSelectCurrentApplication: (id: number) => void;
  currentApplication: number;
}) => {
  const { recruiter } = useAuthDetails();
  const {
    section,
    job,
    atsSync,
    views,
    cardStates: {
      checkList: { list, disabled },
    },
    setCardStates,
  } = useJobApplications();

  const handleSelectAllMin = () => {
    if (!disabled) {
      if (list.size === sectionApplications.length)
        setCardStates((prev) => ({
          ...prev,
          checkList: { ...prev.checkList, list: new Set() },
        }));
      else
        setCardStates((prev) => ({
          ...prev,
          checkList: {
            ...prev.checkList,
            list: new Set(
              sectionApplications.reduce((acc, curr) => {
                acc.push(curr.id);
                return acc;
              }, []),
            ),
          },
        }));
    } else {
      handleOngoingWarning();
    }
  };
  const applicantsList = (
    <ApplicantsList
      key={section}
      detailedView={detailedView}
      applications={sectionApplications}
      handleSelectCurrentApplication={handleSelectCurrentApplication}
      currentApplication={currentApplication}
    />
  );
  const isAllChecked = list.size === sectionApplications.length;
  let emptyList = useMemo(() => <EmptyList section={section} />, [section]);
  if (job.posted_by == POSTED_BY.ASHBY) {
    if (
      (sectionApplications.length === 0 && !recruiter.ashby_sync_token) ||
      atsSync
    ) {
      emptyList = (
        <FetchingAshbyLoader
          slotLottie={
            <Stack height={'100px'} width={'100px'}>
              <NoApplicants />
            </Stack>
          }
        />
      );
    }
  }

  return sectionApplications.length === 0 ? (
    emptyList
  ) : !detailedView ? (
    section === JobApplicationSections.INTERVIEW ? (
      <AllInterview
        propsGrid={{
          style: {
            gridTemplateColumns: '25% 15% 15% 20% 25%',
          },
        }}
        slotAllInterviewCard={applicantsList}
        isSchedulerTable={false}
        isCheckboxVisible={true}
        slotCheckbox={
          <RcCheckbox
            isChecked={isAllChecked}
            onclickCheck={{ onClick: () => handleSelectAllMin() }}
            text={<></>}
          />
        }
      />
    ) : (
      <AllApplicantsTable
        onclickSelectAll={{ onClick: () => handleSelectAllMin() }}
        isAllChecked={isAllChecked}
        isInterviewVisible={views.assessment}
        slotCandidatesList={applicantsList}
        isDisqualifiedVisible={views.disqualified}
        isScreeningVisible={views.screening}
      />
    )
  ) : (
    <TopApplicantsTable
      onclickSelectAll={{ onClick: () => handleSelectAllMin() }}
      isAllSelected={isAllChecked}
      slotList={applicantsList}
    />
  );
};

const ApplicationPagination = ({
  size,
  limits,
}: {
  size: number;
  limits: CountJobs;
}) => {
  const {
    paginationLimit,
    pageNumber,
    handleJobApplicationPaginate,
    section,
    allApplicationsDisabled,
    cardStates: {
      checkList: { disabled },
    },
  } = useJobApplications();

  const disable = allApplicationsDisabled || disabled;

  const totalCandidatesCount = limits[section];
  const totalPageCount = Math.ceil(totalCandidatesCount / paginationLimit);
  const handleNext = async () => {
    if (!disabled && totalPageCount > 1) {
      const newPageNum = (pageNumber[section] + 1) % totalPageCount;
      await handleJobApplicationPaginate(
        newPageNum === 0 ? totalPageCount : newPageNum,
        section,
      );
    }
  };
  const handlePrevious = async () => {
    if (!disabled && totalPageCount > 1) {
      const newPageNum = pageNumber[section] - 1;
      await handleJobApplicationPaginate(
        newPageNum === 0 ? totalPageCount : newPageNum,
        section,
      );
    }
  };
  return totalCandidatesCount !== 0 ? (
    <Stack style={{ backgroundColor: 'white' }}>
      <Stack
        style={{
          opacity: disable ? 0.5 : 1,
          pointerEvents: disable ? 'none' : 'auto',
        }}
      >
        <CandidatesListPagination
          onclickNext={{ onClick: async () => await handleNext() }}
          onclickPrevious={{ onClick: async () => await handlePrevious() }}
          totalPageCount={totalPageCount}
          currentCandidatesCount={size}
          totalCandidatesCount={totalCandidatesCount}
          slotPageNumber={<PageCountSlot totalPageCount={totalPageCount} />}
        />
      </Stack>
    </Stack>
  ) : (
    <></>
  );
};

export const PageCountSlot = ({
  totalPageCount,
}: {
  totalPageCount: number;
}) => {
  const { section, handleJobApplicationPaginate, pageNumber } =
    useJobApplications();
  const [value, setValue] = useState(pageNumber[section]);
  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
    } else {
      if (value && value !== pageNumber[section]) {
        const timer = setTimeout(async () => {
          document.getElementById('PAGEFORM').blur();
          await handleJobApplicationPaginate(value, section);
        }, 400);
        return () => clearTimeout(timer);
      }
    }
  }, [value]);

  useEffect(() => {
    setValue(pageNumber[section]);
  }, [pageNumber[section]]);

  const clickData = useMouseClick();
  useEffect(() => {
    if (clickData.click && clickData.x !== -1 && clickData.y !== -1) {
      if (!getBoundingStatus('PAGEBODY', clickData.x, clickData.y))
        setValue(pageNumber[section]);
    }
  }, [clickData.click]);

  const handleChange = (val: any) => {
    if (val === null || val === '') {
      setValue(null);
    } else if (val < 1) {
      setValue(1);
    } else if (val > totalPageCount) {
      setValue(totalPageCount);
    } else {
      setValue(val);
    }
  };
  return (
    <Stack id={'PAGEBODY'}>
      <TextField
        id='PAGEFORM'
        variant='outlined'
        type='number'
        value={value}
        sx={{
          height: '100%',
          display: 'flex',
          '& .MuiOutlinedInput-root': {
            padding: 0,
            height: '100%',
            border: 'none',
            '& > fieldset': {
              border: 'none',
            },
          },
          '& .MuiInputBase-input': {
            width: '38px',
            textAlign: 'center',
            height: '12px !important',
            overflow: 'visible',
            fontSize: '14px',
            transform: 'translateY(-2px)',
          },
        }}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Stack>
  );
};

const NewJobFilterBlock = ({
  detailedView,
  setDetailedView,
  applicationLimit,
  setApplicationLimit,
}: {
  detailedView: boolean;
  setDetailedView: Dispatch<SetStateAction<boolean>>;
  applicationLimit: CountJobs;
  setApplicationLimit: Dispatch<SetStateAction<CountJobs>>;
}) => {
  const {
    job,
    searchParameters,
    handleJobApplicationFilter,
    section,
    cardStates: {
      checkList: { disabled, list },
    },
  } = useJobApplications();

  const handleSearch = async (val: string, signal?: AbortSignal) => {
    try {
      const value = val ? val.trim().toLowerCase() : null;
      const { confirmation, filteredCount } = await handleJobApplicationFilter(
        {
          ...searchParameters,
          search: value,
        },
        signal,
      );
      if (confirmation) setApplicationLimit(filteredCount);
    } catch (e) {
      //do nothing
    }
  };
  return (
    <Stack style={{ display: job.count[section] === 0 ? 'none' : 'flex' }}>
      <>
        {list.size > 0 ? (
          <Stack style={{ backgroundColor: 'white' }}>
            <Stack
              style={{
                opacity: disabled ? 0.5 : 1,
                pointerEvents: disabled ? 'none' : 'auto',
              }}
            >
              {list.size > 0 && (
                <ActionBar applicationLimit={applicationLimit} />
              )}
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
      </>
      <>
        {list.size === 0 ? (
          <JobDetailsFilterBlock
            onclickAllApplicants={{ onClick: () => setDetailedView(true) }}
            onclickTopApplicants={{
              onClick: () => {
                setDetailedView(false);
                posthog.capture('Expanded Analysis clicked');
              },
            }}
            isAllApplicants={detailedView}
            isTopApplicants={!detailedView}
            slotFilter={
              <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                {detailedView === false ? (
                  <SortJobApplications
                    setApplicationLimit={setApplicationLimit}
                  />
                ) : null}
                <FilterJobApplications
                  setApplicationLimit={setApplicationLimit}
                />
                <SearchField
                  val={searchParameters.search}
                  handleSearch={handleSearch}
                />
              </Stack>
            }
          />
        ) : (
          <></>
        )}
      </>
    </Stack>
  );
};

export const AddCandidates = ({
  openImportCandidates,
  setOpenImportCandidates,
}: {
  openImportCandidates: boolean;
  setOpenImportCandidates: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog
      open={openImportCandidates}
      onClose={() => setOpenImportCandidates(false)}
      maxWidth='md'
    >
      <ImportCandidates
        isImportDescVisible={false}
        isListingCountVisible={true}
        slotAddManually={
          <ImportManualCandidates
            setOpenImportCandidates={setOpenImportCandidates}
          />
        }
        slotImportCsv={
          <ImportCandidatesCSV
            setOpenImportCandidates={setOpenImportCandidates}
          />
        }
        onClickClose={{
          onClick: () => {
            setOpenImportCandidates(false);
          },
        }}
        slotImportResume={
          <ResumeUpload setOpenImportCandidates={setOpenImportCandidates} />
        }
      />
    </Dialog>
  );
};

const NewJobDetailsTabs = () => {
  const { activeSections } = useJobApplications();
  return (
    <Stack
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '70px',
        alignItems: 'stretch',
        padding: '8px',
        gap: '8px',
        borderBottom:
          '1px solid hsla(210.00000000000023, 10.00%, 92.16%, 1.00)',
      }}
    >
      {activeSections.map((section) => (
        <JobTab key={section} section={section} />
      ))}
    </Stack>
  );
};

const JobTab = ({ section }: { section: JobApplicationSections }) => {
  const { setActionProps, actionVisibilities } = useJobApplications();
  const handleOpen = useCallback(() => {
    setActionProps({
      open: true,
      destination: section,
    });
  }, []);
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: 'application-card',
    drop: () => handleOpen(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return actionVisibilities[section] ? (
    <SectionCard
      ref={dropRef}
      section={section}
      isOver={isOver}
      canDrop={canDrop}
    />
  ) : (
    <SectionCard ref={null} section={section} isOver={false} canDrop={false} />
  );
};

const SectionCard = forwardRef(
  (
    {
      section,
      isOver,
      canDrop,
    }: { section: JobApplicationSections; isOver: boolean; canDrop: boolean },
    dropRef: React.Ref<HTMLDivElement>,
  ) => {
    const {
      job,
      handleSelectSection,
      section: currentSection,
    } = useJobApplications();
    const [normalize, setNormalize] = useState(false);
    useEffect(() => {
      if (canDrop) {
        const interval = setInterval(() => setNormalize((prev) => !prev), 500);
        return () => clearInterval(interval);
      }
    }, [canDrop]);
    return (
      <Stack
        ref={dropRef}
        onClick={() => handleSelectSection(section)}
        style={{
          cursor: 'pointer',
          padding: '16px',
          fontWeight: 600,
          minWidth: '160px',
          flexGrow: 1,
          backgroundColor:
            currentSection === section
              ? 'hsla(205.71428571428586, 17.07%, 91.96%, 1.00)'
              : normalize && !isOver
                ? 'hsla(210, 33.33%, 97.65%, 1.00)'
                : canDrop
                  ? '#edf7ff'
                  : 'hsla(210, 33.33%, 97.65%, 1.00)',
          border:
            currentSection === section
              ? '1px solid hsla(208.23529411764707, 21.52%, 84.51%, 1.00)'
              : isOver
                ? '1px solid #1f73b7'
                : '1px solid transparent',
          flexDirection: 'row',
          gap: 8,
          alignItems: 'center',
          borderRadius: '10px',
          transition: '0.5s',
        }}
      >
        <SectionIcons section={section} />
        {capitalize(section)}
        <Stack
          style={{
            backgroundColor: 'hsla(205.71428571428586, 17.07%, 91.96%, 1.00)',
            borderRadius: '100px',
            width: '24px',
            height: '24px',
            fontWeight: 400,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {job.count[section]}
        </Stack>
      </Stack>
    );
  },
);
SectionCard.displayName = 'SectionCard';

const ApplicantsList = ({
  detailedView,
  applications,
  handleSelectCurrentApplication,
  currentApplication,
}: {
  detailedView: boolean;
  applications: JobApplication[];
  // eslint-disable-next-line no-unused-vars
  handleSelectCurrentApplication: (id: number) => void;
  currentApplication: number;
}) => {
  const {
    allApplicationsDisabled,
    cardStates: {
      checkList: { list, disabled },
      disabledList,
    },
    setCardStates,
  } = useJobApplications();
  const { pressed } = useKeyPress('Shift');
  const [lastPressed, setLastPressed] = useState(null);

  useEffect(() => {
    if (list.size === 0 || list.size === applications.length)
      setLastPressed(null);
  }, [list.size]);

  const handleSingleSelect = (index: number) => {
    const newSet = new Set(list);
    const id = applications[index].id;
    if (newSet.has(id)) {
      newSet.delete(id);
      setLastPressed(null);
    } else {
      newSet.add(id);
      setLastPressed(id);
    }
    setCardStates((prev) => ({
      ...prev,
      checkList: {
        ...prev.checkList,
        list: newSet,
      },
    }));
  };

  const handleSelect = (index: number) => {
    if (!disabled) {
      if (!pressed) {
        handleSingleSelect(index);
      } else {
        if (lastPressed && !list.has(applications[index].id)) {
          const start = applications.findIndex(
            (application) => application.id === lastPressed,
          );
          const newSet = applications.reduce((acc, curr, i) => {
            if ((i - start) * (i - index) <= 0) acc.push(curr.id);
            return acc;
          }, []);
          setCardStates((prev) => ({
            ...prev,
            checkList: {
              ...prev.checkList,
              list: new Set(newSet),
            },
          }));
          setLastPressed(null);
        } else {
          handleSingleSelect(index);
        }
      }
    } else {
      handleOngoingWarning();
    }
  };

  const scrollToRef = useRef(undefined);
  useEffect(() => {
    if (currentApplication > -1 && scrollToRef.current)
      scrollToRef.current.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'nearest',
      });
  }, [currentApplication]);

  return (
    <Stack>
      {applications.map((application, i) => {
        const styles =
          allApplicationsDisabled ||
          disabledList.has(application.id) ||
          (disabled && list.has(application.id))
            ? { opacity: 0.5, pointerEvent: 'none', transition: '0.5s' }
            : { opacity: 1, pointerEvent: 'auto', transition: '0.5s' };
        return (
          <Stack
            key={application.id}
            style={styles}
            id={`job-application-stack-${i}`}
            ref={currentApplication === i ? scrollToRef : null}
          >
            <ApplicationCard
              detailedView={detailedView}
              application={application}
              index={i}
              handleSelect={handleSelect}
              handleOpenDetails={() => handleSelectCurrentApplication(i)}
              isSelected={currentApplication === i}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

const EmptyList = ({ section }: { section: JobApplicationSections }) => {
  return (
    <Stack height={'50vh'} justifyContent={'center'}>
      <Stack>
        <ApplicantsListEmpty
          textEmpty={
            section === JobApplicationSections.ASSESSMENT
              ? 'assessment'
              : section
          }
          slotLottie={<NoApplicants />}
        />
      </Stack>
    </Stack>
  );
};

const ActionBar = ({ applicationLimit }: { applicationLimit: CountJobs }) => {
  const {
    section,
    applications,
    paginationLimit,
    cardStates: {
      checkList: { list, disabled },
    },
    setCardStates,
    showDisqualificationEmailComponent,
    showAssessmentEmailComponent,
    showScreeningEmailComponent,
    selectAll,
    setSelectAll,
  } = useJobApplications();

  const handleSelectAll = () => {
    if (!disabled) {
      setCardStates((prev) => ({
        ...prev,
        checkList: {
          ...prev.checkList,
          list: new Set(applications[section].map((a) => a.id)),
        },
      }));
      setSelectAll(true);
    } else {
      handleOngoingWarning();
    }
  };

  const showDisqualify = showDisqualificationEmailComponent || selectAll;
  const showAssessment = showAssessmentEmailComponent || selectAll;
  const showScreening = showScreeningEmailComponent || selectAll;

  const [openMail, setOpenMail] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    if (list.size !== applications[section].length) setSelectAll(false);
  }, [list.size]);

  useEffect(() => {
    return () => setSelectAll(false);
  }, []);

  return (
    <>
      {openMail && (
        <MailCandidate
          open={openMail}
          setOpen={setOpenMail}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
        />
      )}
      <SelectActionBar
        isSendScreeningVisible={
          section === JobApplicationSections.SCREENING && showScreening
        }
        onclickSendScreening={{
          onClick: () => setOpenMail(true),
        }}
        onClickDelete={{
          onClick: () => setOpenDelete(true),
        }}
        isAssessmentVisible={
          section === JobApplicationSections.ASSESSMENT && showAssessment
        }
        onclickAssessment={{
          onClick: () => setOpenMail(true),
        }}
        isDisqualifyVisible={
          section === JobApplicationSections.DISQUALIFIED && showDisqualify
        }
        onclickDisqualify={{
          onClick: () => setOpenMail(true),
        }}
        onClickClear={{
          onClick: () =>
            setCardStates((prev) => ({
              ...prev,
              checkList: {
                ...prev.checkList,
                list: new Set<string>(),
              },
            })),
        }}
        textSelected={`${
          selectAll ? applicationLimit[section] : list.size
        } candidate${list.size !== 1 ? 's' : ''} selected`}
        selectAllText={`Select all ${applicationLimit[section]} candidates`}
        isSelectAllVisible={
          !selectAll && applicationLimit[section] > paginationLimit
        }
        onclickSelectAll={{ onClick: () => handleSelectAll() }}
        slotDropdown={
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <MoveCandidate
              applicationLimit={applicationLimit}
              selectAll={selectAll}
              setSelectAll={setSelectAll}
            />
            <DeleteCandidate
              open={openDelete}
              setOpen={setOpenDelete}
              applicationLimit={applicationLimit}
              selectAll={selectAll}
              setSelectAll={setSelectAll}
            />
          </Stack>
        }
      />
    </>
  );
};

export default JobApplicationsDashboard;
