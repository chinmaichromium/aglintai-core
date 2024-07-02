/* eslint-disable no-unused-vars */
import { DatabaseEnums } from '@aglint/shared-types';
import { EmailAgentId, PhoneAgentId } from '@aglint/shared-utils';
import { ArrowDownward } from '@mui/icons-material';
import { Drawer, Popover, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useState } from 'react';

import { ButtonFilter } from '@/devlink2/ButtonFilter';
import { GlobalIcon } from '@/devlink2/GlobalIcon';
import { ViewTask } from '@/devlink3/ViewTask';
import Loader from '@/src/components/Common/Loader';
import { ShowCode } from '@/src/components/Common/ShowCode';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { useTasksContext } from '@/src/context/TasksContextProvider/TasksContextProvider';
import { useKeyPress } from '@/src/hooks/useKeyPress';
import ROUTES from '@/src/utils/routing/routes';
import toast from '@/src/utils/toast';

import { GetTaskStatusBadge } from '../../Components/TaskStatusTag';
import { getIndicator } from '../../Components/TaskStatusTag/utils';
import { useTaskStatesContext } from '../../TaskStatesContext';
import { createTaskProgress } from '../../utils';
import SubTaskProgress from './Progress';
import TaskActionButtons from './TaskActionButtons';
import TaskCard from './TaskCard';

function ViewTaskDrawer() {
  const route = useRouter();
  const { openViewTask, setOpenViewTask } = useTaskStatesContext();
  const { tasks: taskList, handelUpdateTask } = useTasksContext();
  const { recruiterUser } = useAuthDetails();
  const tasks = taskList.filter(
    (ele) => ele.type !== 'empty' && ele.application_id,
  );
  let taskId = route.query.task_id ? (route.query.task_id as string) : null;
  let selectedTask = tasks.find((item) => item.id === taskId);
  const [inputValue, setInputValue] = useState(selectedTask?.name);

  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);

  useEffect(() => {
    if (taskId) {
      setOpenViewTask(true);
      if (tasks.findIndex((ele) => ele.id === taskId) === 0) {
        setDisablePrev(true);
      }
      if (tasks.findIndex((ele) => ele.id === taskId) === tasks.length - 1) {
        setDisableNext(true);
      }
    } else setOpenViewTask(false);
    setInputValue(selectedTask?.name);
  }, [route.query.task_id]);

  function updateTask({
    status,
    currentStatus,
  }: {
    status: DatabaseEnums['task_status'];
    currentStatus: DatabaseEnums['task_status'];
  }) {
    handelUpdateTask([
      {
        status: status,
        id: taskId,
      },
    ]);
    createTaskProgress({
      type: 'status_update',
      data: {
        task_id: route.query.task_id as string,
        created_by: {
          name: recruiterUser.first_name as string,
          id: recruiterUser.user_id as string,
        },
        progress_type: selectedTask.latest_progress.progress_type,
      },
      optionData: {
        currentStatus: currentStatus,
        status: status,
      },
    });
    toast.action('Task closed.', () => {
      handelUpdateTask([
        {
          status: currentStatus,
          id: taskId,
        },
      ]);
      createTaskProgress({
        type: 'status_update',
        data: {
          task_id: route.query.task_id as string,
          created_by: {
            name: recruiterUser.first_name as string,
            id: recruiterUser.user_id as string,
          },
          progress_type: selectedTask.latest_progress.progress_type,
        },
        optionData: {
          currentStatus: status,
          status: currentStatus,
        },
      });
    });
  }

  function nextTask() {
    const nextIndex = tasks.findIndex((ele) => ele.id === taskId) + 1;
    if (nextIndex < tasks.length) {
      {
        setDisableNext(false);
        setDisablePrev(false);

        const nextTask = tasks.find(
          (ele) => ele.id === tasks[Number(nextIndex)].id,
        );
        route.push(ROUTES['/tasks']() + '?task_id=' + nextTask.id);
      }
    } else {
      setDisableNext(true);
    }
  }

  function prevTask() {
    const prevIndex = tasks.findIndex((ele) => ele.id === taskId) - 1;
    if (prevIndex >= 0) {
      {
        setDisablePrev(false);
        setDisableNext(false);
        const nextTask = tasks.find(
          (ele) => ele.id === tasks[Number(prevIndex)].id,
        );
        route.push(ROUTES['/tasks']() + '?task_id=' + nextTask.id);
      }
    } else {
      setDisablePrev(true);
    }
  }
  const { pressed: up } = useKeyPress('ArrowUp');
  const { pressed: down } = useKeyPress('ArrowDown');

  useEffect(() => {
    if (up) {
      prevTask();
    }
    if (down) {
      nextTask();
    }
  }, [up, down]);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const id = open ? 'jobs-filter' : undefined;
  function handleClose() {
    setAnchorEl(null);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Drawer
      anchor={'right'}
      open={openViewTask}
      onClose={() => {
        route.push(ROUTES['/tasks']());
        setDisableNext(false);
        setDisablePrev(false);
      }}
      sx={{
        '& .MuiPaper-root': {
          overflowY: 'hidden',
        },
      }}
    >
      <ShowCode>
        <ShowCode.When isTrue={!selectedTask}>
          <Stack height={'100vh'} width={600}>
            <Loader />
          </Stack>
        </ShowCode.When>
        <ShowCode.Else>
          <ViewTask
            slotTaskHeader={
              selectedTask && (
                <GetTaskStatusBadge
                  indicator={getIndicator({
                    task: selectedTask,
                    created_at: selectedTask?.latest_progress?.created_at,
                    progress_type: selectedTask?.latest_progress?.progress_type,
                  })}
                />
              )
            }
            slotActionButton={
              <>
                <TaskActionButtons selectedTask={selectedTask} />
              </>
            }
            slotButtonFilter={
              <>
                <ButtonFilter
                  textLabel={'Action'}
                  slotRightIcon={
                    <GlobalIcon iconName={'keyboard_arrow_down'} />
                  }
                  slotLeftIcon={<></>}
                  onClickStatus={{
                    onClick: (e) => {
                      handleClick(e);
                    },
                  }}
                />

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{ vertical: -10, horizontal: 0 }}
                  sx={{
                    '& .MuiPopover-paper': {
                      borderRadius: 'var(--radius-2)',
                      borderColor: 'var(--neutral-6)',
                      minWidth: '176px',
                      backgroundColor: 'white',
                    },
                  }}
                >
                  <Stack
                    direction={'row'}
                    padding={'8px 12px'}
                    sx={{
                      alignItems: 'center',
                      borderRadius: '4px',
                      ':hover': {
                        bgcolor: 'var(--neutral-2)',
                      },
                    }}
                    spacing={1}
                    onClick={() => {
                      updateTask({
                        status: 'completed',
                        currentStatus: selectedTask.status,
                      });
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        cursor: 'pointer',
                      }}
                    >
                      Completed task
                    </Typography>
                  </Stack>
                  <Stack
                    direction={'row'}
                    padding={'8px 12px'}
                    sx={{
                      alignItems: 'center',
                      borderRadius: '4px',
                      ':hover': {
                        bgcolor: 'var(--neutral-2)',
                      },
                    }}
                    spacing={1}
                    onClick={() => {
                      updateTask({
                        status: 'closed',
                        currentStatus: selectedTask.status,
                      });
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        cursor: 'pointer',
                      }}
                    >
                      Close task
                    </Typography>
                  </Stack>
                </Popover>
              </>
            }
            onClickCancelTask={{
              onClick: () => {
                updateTask({
                  status: 'closed',
                  currentStatus: selectedTask.status,
                });
              },
            }}
            isDisableNext={disableNext}
            isDisablePrev={disablePrev}
            onClickNext={{
              onClick: nextTask,
            }}
            onClickPrev={{
              onClick: prevTask,
            }}
            textTaskDetail={
              <TextField
                placeholder='Untitled'
                onChange={({ currentTarget: { value: changeValue } }) => {
                  setInputValue(changeValue);
                }}
                onBlur={() => {
                  handelUpdateTask([
                    {
                      id: taskId,
                      name: inputValue,
                    },
                  ]);
                }}
                multiline
                minRows={1}
                maxRows={3}
                fullWidth
                value={inputValue}
                sx={{
                  '& .MuiInputBase-root': {
                    border: 'none',
                    fontSize: 'var(--font-size-3)',
                    lineHeight: 'var(--line-height-3)',
                    fontWeight: 500,
                    padding: 'var(--space-2)',
                    bgcolor: 'var(--neutral-2)',
                    borderRadius: 'var(--radius-4)',
                  },
                }}
              />
            }
            slotTaskCard={<TaskCard task={selectedTask} />}
            slotTaskProgress={<SubTaskProgress />}
            onClickClose={{
              onClick: () => {
                route.push(ROUTES['/tasks']());
              },
            }}
          />
        </ShowCode.Else>
      </ShowCode>
    </Drawer>
  );
}

export default ViewTaskDrawer;
