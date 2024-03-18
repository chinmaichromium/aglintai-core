import { Drag, DragAndDrop, Drop } from '@components/Common/dragDrop';
import { Stack } from '@mui/material';
import { capitalize } from 'lodash';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LoaderSvg } from '@/devlink';
import { Breadcrum, InterviewCordinator, PageLayout } from '@/devlink2';
import { InterviewPlan } from '@/devlink3';

import EditModule from './EditModule';
import InterviewModuleC from './InterviewModuleC';
import { handleUpdateDb, useInterviewPlan } from './store';
import { InterviewSession } from './types';
import { filterAddedModules } from './utils';
import AvatarSelectDropDown from '../Common/AvatarSelect/AvatarSelectDropDown';
import SyncStatus from '../JobsDashboard/JobPostCreateUpdate/JobPostFormSlides/SyncStatus';
import { reorder } from '../JobsDashboard/JobPostCreateUpdate/JobPostFormSlides/utils/reorder';

const JobInterviewPlan = () => {
  const {
    allModules,
    isloading,
    modules,
    jobStatus,
    jobTitle,
    jobId,
    syncStatus,
  } = useInterviewPlan((state) => state);
  const [editModuleId, setEditModuleId] = useState('');
  const [newModule, setNewModule] = useState<InterviewSession | null>(null);
  const router = useRouter();
  const handleDragEnd = (result) => {
    const { source, type, destination } = result;
    if (!destination) return;
    let sourceIdx = Number(source.index);
    let destIdx = Number(destination.index);
    if (modules[Number(sourceIdx)].isBreak) {
      if (destIdx === 0) return;
      if (destIdx === modules.length - 1) return;
    }
    if (type === 'droppable-category') {
      const updatedOrder = reorder(
        modules,
        sourceIdx,
        destIdx,
      ) as InterviewSession[];
      if (
        updatedOrder[0].isBreak ||
        updatedOrder[updatedOrder.length - 1].isBreak
      ) {
        return;
      }
      for (let i = 1; i < updatedOrder.length; ++i) {
        if (updatedOrder[i - 1].isBreak && updatedOrder[Number(i)].isBreak) {
          return;
        }
      }
      handleUpdateDb({ path: 'modules', value: updatedOrder });
    }
  };

  const handleAddBreak = () => {
    let intBreak: InterviewSession = {
      isBreak: true,
      allIntervs: [],
      duration: 30,
      meetingIntervCnt: 0,
      module_id: uuidv4(),
      module_name: '',
      session_name: '',
      selectedIntervs: [],
      revShadowIntervs: [],
      shadowIntervs: [],
      training_ints: [],
    };
    for (let i = 1; i < modules.length; ++i) {
      if (!modules[Number(i)].isBreak && !modules[Number(i - 1)].isBreak) {
        const newModules = [
          ...modules.slice(0, i),
          intBreak,
          ...modules.slice(i),
        ];
        handleUpdateDb({ path: 'modules', value: newModules });

        break;
      }
    }
  };

  return (
    <>
      <PageLayout
        slotTopbarLeft={
          <>
            <Breadcrum
              isLink
              onClickLink={{
                onClick: () => {
                  router.push(`/jobs?status=${jobStatus}`);
                },
              }}
              textName={`${capitalize(jobStatus)} Jobs`}
            />
            {!isloading && (
              <>
                <Breadcrum
                  isLink
                  onClickLink={{
                    onClick: () => {
                      router.push(`/jobs/${jobId}`);
                    },
                  }}
                  showArrow
                  textName={`${jobTitle}`}
                />
                <Breadcrum
                  onClickLink={{ onClick: () => {} }}
                  showArrow
                  textName={`Interview Plan`}
                />
              </>
            )}
          </>
        }
        slotSaving={
          <>
            <SyncStatus status={syncStatus} />
          </>
        }
        slotBody={
          <>
            {isloading ? (
              <Stack
                height={'100vh'}
                width={'100vw'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <LoaderSvg />
              </Stack>
            ) : (
              <InterviewPlan
                slotInterviewPlan={
                  <>
                    <CoordinatorDropDown />
                    <DragAndDrop onDragEnd={handleDragEnd}>
                      <Drop id={'droppable'} type={'droppable-category'}>
                        {modules.map((module, idx) => {
                          return (
                            <Drag
                              className='draggable-category'
                              key={module.module_id}
                              id={module.module_id}
                              index={idx}
                            >
                              <InterviewModuleC
                                module={module}
                                key={module.module_id}
                                editModuleId={editModuleId}
                                setEditModuleId={setEditModuleId}
                              />
                            </Drag>
                          );
                        })}
                      </Drop>
                    </DragAndDrop>

                    {newModule && (
                      <EditModule
                        onClose={() => setNewModule(null)}
                        initModule={newModule}
                        isBreak={false}
                        isEdit={false}
                        editModuleId={editModuleId}
                      />
                    )}
                  </>
                }
                onClickAddModule={{
                  onClick: () => {
                    const filteredModules = filterAddedModules(
                      allModules,
                      modules,
                    );
                    if (filteredModules.length > 0) {
                      let nModule: InterviewSession = {
                        ...filteredModules[0],
                        selectedIntervs: [...filteredModules[0].allIntervs],
                        meetingIntervCnt: 1,
                        duration: 30,
                        isBreak: false,
                        session_name: `Session ${modules.length + 1}`,
                      };
                      setNewModule(nModule);
                    }
                  },
                }}
                onClickAddBreak={{
                  onClick: handleAddBreak,
                }}
                onClickScheduler={{
                  onClick: () => {
                    router.push('/scheduling?tab=interviewModules');
                  },
                }}
              />
            )}
          </>
        }
      />
    </>
  );
};

export default JobInterviewPlan;

const CoordinatorDropDown = () => {
  const allTeamMembers = useInterviewPlan((state) => state.allTeamMembers);
  const interviewCordinator = useInterviewPlan(
    (state) => state.interviewCordinator,
  );

  return (
    <>
      <InterviewCordinator
        slotInput={
          <>
            <AvatarSelectDropDown
              onChange={(e) => {
                const cord = allTeamMembers.find(
                  (t) => t.interv_id === e.target.value,
                );
                handleUpdateDb({
                  path: 'interviewCordinator',
                  value: cord,
                });
              }}
              menuOptions={allTeamMembers.map((m) => ({
                name: m.name,
                value: m.interv_id,
                start_icon_url: m.profile_image,
              }))}
              showMenuIcons
              value={interviewCordinator?.interv_id ?? ''}
              defaultValue={allTeamMembers[0]?.interv_id}
              // onChange={(e) => {
              //   const cord = allTeamMembers.find(
              //     (t) => t.interv_id === e.target.value,
              //   );
              //   handleUpdateDb({
              //     path: 'interviewCordinator',
              //     value: cord,
              //   });
              // }}
              // value={
              //   interviewCordinator?.interv_id ?? allTeamMembers[0].interv_id
              // }
              // defaultValue={
              //   interviewCordinator?.interv_id ?? allTeamMembers[0].interv_id
              // }
              // fullWidth
            />
          </>
        }
      />
    </>
  );
};
