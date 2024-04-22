/* eslint-disable no-unused-vars */
import { Drawer, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ViewTask } from '@/devlink3';
import Loader from '@/src/components/Common/Loader';
import { ShowCode } from '@/src/components/Common/ShowCode';
import { useTasksContext } from '@/src/context/TasksContextProvider/TasksContextProvider';
import { pageRoutes } from '@/src/utils/pageRouting';

import { useTaskStatesContext } from '../../TaskStatesContext';
import { taskUpdateDebounce, UpdateFunction } from '../../utils';
import SubTaskProgress from './Progress';
import TaskCard from './TaskCard';

function ViewTaskDrawer() {
  const route = useRouter();
  const { openViewTask, setOpenViewTask } = useTaskStatesContext();
  const { tasks: taskList, handelUpdateTask } = useTasksContext();
  const tasks = taskList.filter(
    (ele) => ele.type !== 'empty' && ele.application_id,
  );
  let taskId = route.query.task_id ? (route.query.task_id as string) : null;

  let selectedTask = tasks.find((item) => item.id === taskId);

  const [editMode, setEditMode] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);

  const debouncedUpdateTask: UpdateFunction = taskUpdateDebounce(
    (taskId: string, changeValue: string) => {
      handelUpdateTask({
        id: taskId,
        data: {
          name: changeValue,
        },
      });
    },
    1000,
  );

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

    return () => {
      setDisableNext(false);
      setDisablePrev(false);
    };
  }, [route.query.task_id]);

  return (
    <Drawer
      anchor={'right'}
      open={openViewTask}
      onClose={() => {
        route.push(pageRoutes.TASKS);
      }}
    >
      <Stack>
        <ShowCode>
          <ShowCode.When isTrue={!selectedTask}>
            <Stack height={'100vh'} width={600}>
              <Loader />
            </Stack>
          </ShowCode.When>
          <ShowCode.Else>
            <ViewTask
              isDisableNext={disableNext}
              isDisablePrev={disablePrev}
              onClickNext={{
                onClick: () => {
                  const nextIndex =
                    tasks.findIndex((ele) => ele.id === taskId) + 1;
                  if (nextIndex < tasks.length) {
                    {
                      setDisableNext(false);
                      setDisablePrev(false);

                      const nextTask = tasks.find(
                        (ele) => ele.id === tasks[Number(nextIndex)].id,
                      );
                      route.push(pageRoutes.TASKS + '?task_id=' + nextTask.id);
                    }
                  } else {
                    setDisableNext(true);
                  }
                },
              }}
              onClickPrev={{
                onClick: () => {
                  const prevIndex =
                    tasks.findIndex((ele) => ele.id === taskId) - 1;
                  if (prevIndex >= 0) {
                    {
                      setDisablePrev(false);
                      setDisableNext(false);
                      const nextTask = tasks.find(
                        (ele) => ele.id === tasks[Number(prevIndex)].id,
                      );
                      route.push(pageRoutes.TASKS + '?task_id=' + nextTask.id);
                    }
                  } else {
                    setDisablePrev(true);
                  }
                },
              }}
              textTaskDetail={
                <ShowCode>
                  <ShowCode.When isTrue={!editMode}>
                    <Typography
                      onClick={() => {
                        setEditMode(true);
                      }}
                      bgcolor={'#F7F9FB'}
                      padding={'10px'}
                      borderRadius={'10px'}
                      fontSize={'18px'}
                      lineHeight={'24px'}
                      fontWeight={600}
                    >
                      {selectedTask?.name || 'Untitled'}
                    </Typography>
                  </ShowCode.When>
                  <ShowCode.Else>
                    <TextField
                      placeholder='Untitled'
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus={true}
                      onChange={({ currentTarget: { value: changeValue } }) => {
                        debouncedUpdateTask(taskId, changeValue);
                      }}
                      multiline
                      minRows={1}
                      maxRows={3}
                      fullWidth
                      defaultValue={selectedTask?.name}
                      sx={{
                        '& .MuiInputBase-root': {
                          border: 'none',
                          fontSize: '18px',
                          lineHeight: '24px',
                          fontWeight: 600,
                          padding: '10px',
                        },
                      }}
                      onBlur={() => {
                        setEditMode(false);
                      }}
                    />
                  </ShowCode.Else>
                </ShowCode>
              }
              slotTaskCard={<TaskCard task={selectedTask} />}
              slotTaskProgress={<SubTaskProgress />}
              onClickClose={{
                onClick: () => {
                  route.push(pageRoutes.TASKS);
                },
              }}
            />
          </ShowCode.Else>
        </ShowCode>
      </Stack>
    </Drawer>
  );
}

export default ViewTaskDrawer;
