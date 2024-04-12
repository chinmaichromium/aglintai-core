/* eslint-disable no-unused-vars */
'use client';
import { tasks } from 'googleapis/build/src/apis/tasks';
import { capitalize, cloneDeep } from 'lodash';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { EmailAgentId, PhoneAgentId } from '@/src/components/Tasks/utils';
import {
  DatabaseTable,
  DatabaseTableInsert,
  DatabaseTableUpdate,
} from '@/src/types/customSchema';
import { supabase } from '@/src/utils/supabase/client';

import { useAuthDetails } from '../AuthContext/AuthContext';

type TasksReducerType = {
  tasks: Awaited<ReturnType<typeof getAllTasks>>;
  progress_logs: DatabaseTable['sub_task_progress'][];
  search: string;
  filter: {
    status: { options: { id: string; label: string }[]; values: string[] };
    assignee: { options: { id: string; label: string }[]; values: string[] };
    jobTitle: { options: { id: string; label: string }[]; values: string[] };
  };
  // filterOptions: {
  //   status: DatabaseTable['tasks']['status'][];
  //   assignee: string[];
  // };
  sort: 'date' | 'status';
};

export type TasksAgentContextType = TasksReducerType & {
  // eslint-disable-next-line no-unused-vars
  handelAddTask: (
    x: DatabaseTableInsert['new_tasks'],
  ) => Promise<DatabaseTable['new_tasks']>;
  handelUpdateTask: (x: {
    id: string;
    data: DatabaseTableUpdate['new_tasks'];
  }) => Promise<DatabaseTable['new_tasks']>;
  handelDeleteTask: (id: string) => Promise<boolean>;
  //   handelSearch: (x: string) => void;
  //   handelFilter: (x: AtLeastOneRequired<TasksReducerType['filter']>) => void;
  //   handelSort: (x: TasksReducerType['sort']) => void;
};

const reducerInitialState: TasksReducerType = {
  tasks: [],
  progress_logs: [],
  search: '',
  filter: {
    status: {
      options: [
        { id: 'completed', label: 'Completed' },
        { id: 'in_progress', label: 'In Progress' },
        { id: 'pending', label: 'Pending' },
        { id: 'closed', label: 'Closed' },
      ],
      values: [],
    },
    assignee: { options: [], values: [] },
    jobTitle: { options: [], values: [] },
  },
  sort: 'date',
};

const contextInitialState: TasksAgentContextType = {
  ...reducerInitialState,
  // eslint-disable-next-line no-unused-vars
  handelAddTask: (x) => Promise.resolve(null),
  handelUpdateTask: (x) => Promise.resolve(null),
  handelDeleteTask: (x) => Promise.resolve(false),
//   handelSearch: (x) => {},
//   handelFilter: (x) => {},
//   handelSort: (x) => {},
};

const TaskContext = createContext<TasksAgentContextType>(contextInitialState);

enum TasksReducerAction {
  INIT,
  ADD_TASK,
  SEARCH,
  FILTER,
  SORT,
  SET_ASSIGNEE_OPTIONS,
  SET_TASK_PROGRESS_LOGS,
}

type TasksReducerActionType =
  | {
      type: TasksReducerAction.INIT;
      payload: TasksReducerType;
    }
  | {
      type: TasksReducerAction.ADD_TASK;
      payload: {
        tasks: TasksAgentContextType['tasks'];
        filterOption: TasksReducerType['filter'];
      };
    }
  | {
      type: TasksReducerAction.SET_TASK_PROGRESS_LOGS;
      payload: TasksAgentContextType['progress_logs'];
    }
  | {
      type: TasksReducerAction.SEARCH;
      payload: TasksAgentContextType['search'];
    }
  | {
      type: TasksReducerAction.FILTER;
      payload: TasksAgentContextType['filter'];
    }
  | {
      type: TasksReducerAction.SORT;
      payload: TasksAgentContextType['sort'];
    }
  | {
      type: TasksReducerAction.SET_ASSIGNEE_OPTIONS;
      payload: TasksAgentContextType['filter']['assignee']['options'];
    };

const reducer = (
  state: TasksReducerType,
  action: TasksReducerActionType,
): TasksReducerType => {
  switch (action.type) {
    case TasksReducerAction.INIT: {
      return action.payload;
    }
    case TasksReducerAction.ADD_TASK: {
      const temp = cloneDeep(reducerInitialState);
      temp.tasks = action.payload.tasks;
      temp.filter = action.payload.filterOption;
      return temp;
    }
    case TasksReducerAction.SET_TASK_PROGRESS_LOGS: {
      const temp = cloneDeep(reducerInitialState);
      temp.progress_logs = action.payload;
      return temp;
    }
    case TasksReducerAction.SEARCH: {
      return { ...state, search: action.payload };
    }
    case TasksReducerAction.FILTER: {
      return { ...state, filter: action.payload };
    }
    case TasksReducerAction.SORT: {
      return { ...state, sort: action.payload };
    }
    case TasksReducerAction.SET_ASSIGNEE_OPTIONS: {
      const temp = cloneDeep(state);
      temp.filter.assignee.options = action.payload;
      return temp;
    }
    default: {
      return state;
    }
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasksReducer, dispatch] = useReducer(reducer, reducerInitialState);
  const { recruiter_id, members, recruiterUser } = useAuthDetails();
  const init = (data: TasksReducerType) => {
    // data.filter.assignee.options = [
    //   ...new Set(
    //     data.tasks
    //       .map((task) => task.sub_tasks.map((subTask) => subTask.assignee))
    //       .flat(2),
    //   ),
    // ]
    //   .map((item) => {
    //     const temp = members.find((mem) => mem.user_id === item);
    //     return temp;
    //   })
    //   .filter((item) => Boolean(item))
    //   .map((temp) => {
    //     return {
    //       id: temp.user_id,
    //       label: `${temp.first_name} ${temp.last_name}`.trim(),
    //     };
    //   });

    // data.filter.jobTitle.options = [
    //   ...new Set(
    //     data.tasks
    //       .filter((task) => Boolean(task.application_id))
    //       .map((task) => ({
    //         id: task.applications.public_jobs.id,
    //         label: task.applications.public_jobs.job_title,
    //       }))
    //       .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i),
    //   ),
    // ];
    dispatch({ type: TasksReducerAction.INIT, payload: data });
  };
  const handelTaskChanges = (tasks: TasksAgentContextType['tasks']) => {
    const filterOption = cloneDeep(tasksReducer.filter);
    // filterOption.assignee.options = [
    //   ...new Set(
    //     tasks
    //       .map((task) => task.sub_tasks.map((subTask) => subTask.assignee))
    //       .flat(2),
    //   ),
    // ]
    //   .map((item) => {
    //     const temp = members.find((mem) => mem.user_id === item);
    //     return temp;
    //   })
    //   .filter((item) => Boolean(item))
    //   .map((temp) => {
    //     return {
    //       id: temp.user_id,
    //       label: `${temp.first_name} ${temp.last_name}`.trim(),
    //     };
    //   });
    // filterOption.jobTitle.options = tasks
    //   .filter((task) => Boolean(task.application_id))
    //   .map((task) => ({
    //     id: task.applications.public_jobs.id,
    //     label: task.applications.public_jobs.job_title,
    //   }))
    //   .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
    dispatch({
      type: TasksReducerAction.ADD_TASK,
      payload: { tasks, filterOption },
    });
  };

  const handelAddTask: TasksAgentContextType['handelAddTask'] = async (
    task,
  ) => {
    return updateTask({ type: 'new', task }).then((taskData) => {
      const tempTask = [
        { ...taskData, sub_tasks: [] },
        ...cloneDeep(tasksReducer.tasks),
      ];
      handelTaskChanges(tempTask);
      return taskData;
    });
  };

  const handelUpdateTask: TasksAgentContextType['handelUpdateTask'] = async ({
    id,
    data,
  }) => {
    return updateTask({
      type: 'update',
      task: { ...data, id },
    }).then((taskData) => {
      const tempTask = cloneDeep(tasksReducer.tasks).map((item) =>
        item.id === taskData.id ? { ...item, ...taskData } : item,
      );
      handelTaskChanges(tempTask);
      return taskData;
    });
  };

  const handelDeleteTask: TasksAgentContextType['handelDeleteTask'] = async (
    id,
  ) => {
    return deleteTask(id).then(() => {
      const tempTask = tasksReducer.tasks.filter((item) => item.id !== id);
      handelTaskChanges(tempTask);
      return true;
    });
  };

  //   const handelSearch: TasksAgentContextType['handelSearch'] = (str) => {
  //     dispatch({
  //       type: TasksReducerAction.SEARCH,
  //       payload: str,
  //     });
  //   };

  //   const handelFilter: TasksAgentContextType['handelFilter'] = (filter) => {
  //     dispatch({
  //       type: TasksReducerAction.FILTER,
  //       payload: { ...tasksReducer.filter, ...filter },
  //     });
  //   };

  //   const handelSort: TasksAgentContextType['handelSort'] = (sort) => {
  //     dispatch({
  //       type: TasksReducerAction.SORT,
  //       payload: sort,
  //     });
  //   };

  //   const sortedTask: TasksAgentContextType['tasks'] = useMemo(() => {
  //     return tasksReducer.tasks;
  //   }, [tasksReducer.sort, tasksReducer.tasks]);

  //   const filterTask: TasksAgentContextType['tasks'] = useMemo(() => {
  //     const status = tasksReducer.filter.status;
  //     const assignee = tasksReducer.filter.assignee;
  //     const jobTitle = tasksReducer.filter.jobTitle;
  //     let temp = [...sortedTask];

  //     if (status.values.length) {
  //       temp = temp.reduce((prev, curr) => {
  //         const tempTask = cloneDeep(curr);
  //         tempTask.sub_tasks = tempTask.sub_tasks.filter((sub) => {
  //           return status.values.includes(sub.status.toLowerCase());
  //         });
  //         tempTask.sub_tasks.length && prev.push(tempTask);
  //         return prev;
  //       }, []);
  //     }

  //     if (assignee.values.length) {
  //       temp = temp.reduce((prev, curr) => {
  //         const tempTask = cloneDeep(curr);
  //         tempTask.sub_tasks = tempTask.sub_tasks.filter((sub) => {
  //           return assignee.values.some((curr) => {
  //             return sub.assignee.includes(curr);
  //           });
  //         });
  //         tempTask.sub_tasks.length && prev.push(tempTask);
  //         return prev;
  //       }, []);
  //     }

  //     if (jobTitle.values.length) {
  //       temp = temp.filter((task) =>
  //         jobTitle.values.includes(task?.applications?.public_jobs?.id),
  //       );
  //     }
  //     return temp;
  //   }, [tasksReducer.filter, sortedTask]);

  //   const searchedTask: TasksAgentContextType['tasks'] = useMemo(() => {
  //     const search = tasksReducer.search;
  //     return search?.length
  //       ? filterTask.filter(
  //           (task) =>
  //             task.name.toLowerCase().includes(search.toLowerCase()) ||
  //             `${task.applications.candidates.first_name} ${task.applications.candidates.last_name}`
  //               .trim()
  //               .toLowerCase()
  //               .includes(search.toLowerCase()),
  //         )
  //       : filterTask;
  //   }, [tasksReducer.search, filterTask]);

  useEffect(() => {
    if (recruiter_id) {
      getAllTasks(recruiter_id).then((data) => {
        const temp = cloneDeep(reducerInitialState);
        init({ ...temp, tasks: data });
      });
    }
  }, [recruiter_id]);

  return (
    <>
      <TaskContext.Provider
        value={{
          //   tasks: searchedTask,
          tasks: tasksReducer.tasks,
          progress_logs: tasksReducer.progress_logs,
          search: tasksReducer.search,
          filter: tasksReducer.filter,
          sort: tasksReducer.sort,
          handelAddTask,
          handelUpdateTask,
          handelDeleteTask,
          //   handelSearch,
          //   handelFilter,
          //   handelSort,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};

export const useTasksAgentContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasksAgentContext must be used within a Task page');
  }
  return context;
};

const getAllTasks = (id: string) => {
  return supabase
    .from('new_tasks')
    .select(
      '*, applications(* , candidates( * ), public_jobs( * )), recruiter_user(*)',
    )
    .eq('recruiter_id', id)
    .order('created_at', {
      ascending: false,
    })
    .then(({ data, error }) => {
      const temp = data as unknown as (Omit<
        (typeof data)[number],
        'applications, recruiter_user'
      > & {
        applications: (typeof data)[number]['applications'];
        recruiter_user: (typeof data)[number]['recruiter_user'];
      })[];
      if (error) throw new Error(error.message);
      return temp;
    });
};

const updateTask = ({
  type,
  task,
}:
  | { type: 'new'; task: DatabaseTableInsert['new_tasks'] }
  | {
      type: 'update';
      task: Omit<DatabaseTableUpdate['new_tasks'], 'id'> & { id: string };
    }) => {
  return (
    type === 'update'
      ? supabase.from('new_tasks').update(task).eq('id', task.id)
      : supabase.from('new_tasks').insert(task)
  )
    .select(
      '*, applications(* , candidates( * ), public_jobs( * )), recruiter_user(*)',
    )
    .single()
    .then(({ data, error }) => {
      const temp = data as unknown as Omit<
        typeof data,
        'applications, recruiter_user'
      > & {
        applications: (typeof data)['applications'];
        recruiter_user: (typeof data)['recruiter_user'];
      };
      if (error) throw new Error(error.message);
      return temp;
    });
};
const deleteTask = (id: string) => {
  return supabase
    .from('new_tasks')
    .delete()
    .eq('id', id)
    .then(({ error }) => {
      if (error) throw new Error(error.message);
      return true;
    });
};

type AtLeastOneRequired<T> = {
  [K in keyof T]-?: {
    [P in keyof T]: P extends K ? T[P] : never;
  }[keyof T];
};
