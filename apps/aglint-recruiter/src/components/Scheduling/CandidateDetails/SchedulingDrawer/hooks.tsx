import { APIFindAvailability } from '@aglint/shared-types';
import { getFullName } from '@aglint/shared-utils';
import axios from 'axios';
import dayjs from 'dayjs';

import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { ApiBodyParamsScheduleAgent } from '@/src/pages/api/scheduling/application/schedulewithagent';
import { ApiBodyParamsScheduleAgentWithoutTaskId } from '@/src/pages/api/scheduling/application/schedulewithagentwithouttaskid';
import {
  ApiBodyParamsSendToCandidate,
  ApiResponseSendToCandidate,
} from '@/src/pages/api/scheduling/application/sendtocandidate';
import toast from '@/src/utils/toast';

import { useGetScheduleApplication } from '../hooks';
import { useRequestAvailabilityContext } from '../RequestAvailability/RequestAvailabilityContext';
import {
  setIsSendingToCandidate,
  setRequestSessionIds,
  setRescheduleSessionIds,
  setSelectedApplicationLog,
  setSelectedSessionIds,
  useSchedulingApplicationStore,
} from '../store';
import { ApiResponseFindAvailability } from '../types';
import { filterSchedulingOptionsArray } from './StepScheduleFilter/utils';
import {
  setFetchingPlan,
  setFilteredSchedulingOptions,
  setIsScheduleNowOpen,
  setNoOptions,
  setResSendToCandidate,
  setSchedulingOptions,
  setSelectedTaskId,
  setStepScheduling,
  useSchedulingFlowStore,
} from './store';

export const useSelfSchedulingDrawer = ({
  refetch,
}: {
  refetch: () => void;
}) => {
  const { recruiter, recruiterUser } = useAuthDetails();
  const {
    selectedApplication,
    initialSessions,
    selectedSessionIds,
    selectedApplicationLog,
    isSendingToCandidate,
  } = useSchedulingApplicationStore((state) => ({
    selectedApplication: state.selectedApplication,
    initialSessions: state.initialSessions,
    selectedSessionIds: state.selectedSessionIds,
    selectedApplicationLog: state.selectedApplicationLog,
    isSendingToCandidate: state.isSendingToCandidate,
  }));

  const isDebrief = initialSessions
    .filter((ses) => selectedSessionIds.includes(ses.interview_session.id))
    .some((ses) => ses.interview_session.session_type === 'debrief');

  const {
    dateRange,
    filteredSchedulingOptions,
    stepScheduling,
    selectedCombIds,
    filters,
    schedulingOptions,
    fetchingPlan,
    scheduleFlow,
    selectedTaskId,
  } = useSchedulingFlowStore((state) => ({
    dateRange: state.dateRange,
    filteredSchedulingOptions: state.filteredSchedulingOptions,
    stepScheduling: state.stepScheduling,
    filters: state.filters,
    selectedCombIds: state.selectedCombIds,
    schedulingOptions: state.schedulingOptions,
    fetchingPlan: state.fetchingPlan,
    scheduleFlow: state.scheduleFlow,
    selectedTaskId: state.selectedTaskId,
  }));

  const { fetchInterviewDataByApplication } = useGetScheduleApplication();

  const { setSelectedDate } = useRequestAvailabilityContext();

  const onClickPrimary = async () => {
    if (stepScheduling === 'pick_date') {
      if (scheduleFlow === 'self_scheduling' || scheduleFlow === 'debrief') {
        setNoOptions(false);
        const resOptions = await findScheduleOptions({
          dateRange: dateRange,
          session_ids: selectedSessionIds,
          rec_id: recruiter.id,
        });

        if (resOptions.length === 0) {
          setNoOptions(true);
          return;
        }

        const filterSlots = filterSchedulingOptionsArray({
          schedulingOptions: resOptions,
          filters,
        });
        if (filterSlots.numberTotal === 0) {
          setFilteredSchedulingOptions(filterSlots.combs);
          setNoOptions(true);
          toast.warning('No availability found with the selected preferences.');
          return;
        }
        setStepScheduling('preference');
      } else if (
        scheduleFlow === 'phone_agent' ||
        scheduleFlow === 'email_agent'
      ) {
        await onClickScheduleAgent(scheduleFlow);
        refetch();
      } else if (
        scheduleFlow === 'create_request_availibility' ||
        scheduleFlow === 'update_request_availibility'
      ) {
        setSelectedDate([
          dayjs(dateRange.start_date),
          dayjs(dateRange.end_date),
        ]);
        setStepScheduling('request_availibility');
      }
    } else if (stepScheduling === 'preference') {
      const filterSlots = filterSchedulingOptionsArray({
        schedulingOptions,
        filters,
      });
      if (filterSlots.numberTotal === 0) {
        toast.warning('No availability found with the selected preferences.');
        return;
      }
      setFilteredSchedulingOptions(filterSlots.combs);
      setStepScheduling('slot_options');
    } else if (stepScheduling === 'slot_options') {
      if (scheduleFlow === 'debrief') {
        if (selectedCombIds.length === 0) {
          toast.warning('Please select a time slot to schedule.');
          return;
        }
        if (!isSendingToCandidate) {
          await onClickSendToCandidate();
          refetch();
        }
      } else if (scheduleFlow === 'self_scheduling') {
        if (!isDebrief && selectedCombIds.length < 5) {
          toast.warning('Please select at least 5 time slots to schedule.');
          return;
        }
        setStepScheduling('self_scheduling_email_preview');
      }
    } else if (stepScheduling === 'self_scheduling_email_preview') {
      if (!isSendingToCandidate) {
        await onClickSendToCandidate();
      }
    }
  };

  const onClickSendToCandidate = async () => {
    try {
      setIsSendingToCandidate(true);
      if (selectedSessionIds.length === 0) {
        throw new Error('Please select a session to schedule.');
      }

      if (isDebrief && selectedCombIds.length === 0) {
        toast.warning('Please select a time slot to schedule.');
        return;
      }
      if (!isDebrief && selectedCombIds.length < 5) {
        toast.warning('Please select at least 5 time slots to schedule.');
        return;
      }

      const plans = filteredSchedulingOptions.map((opt) => opt.plans).flat();
      const selectedDebrief = plans.find(
        (opt) => selectedCombIds[0] === opt.plan_comb_id,
      );
      const selectedSlots = plans.filter((opt) =>
        selectedCombIds.includes(opt.plan_comb_id),
      );

      const bodyParams: ApiBodyParamsSendToCandidate = {
        dateRange,
        initialSessions,
        is_debrief: isDebrief,
        recruiter_id: recruiter.id,
        recruiterUser,
        selectedApplication,
        selectedSessionIds,
        selectedDebrief,
        user_tz: dayjs.tz.guess(),
        selectedApplicationLog,
        selectedSlots,
        task_id: selectedTaskId,
      };
      const res = await axios.post(
        '/api/scheduling/application/sendtocandidate',
        bodyParams,
      );

      if (res.status === 200) {
        const resObj = res?.data?.data as ApiResponseSendToCandidate['data'];
        setResSendToCandidate(resObj); // this is used for copy link in the final step of self scheduling
        if (isDebrief) {
          toast.success('Debrief scheduled');
        } else {
          setStepScheduling('success_screen');
        }
      } else {
        throw new Error('Error sending to candidate.');
      }
    } catch (e) {
      toast.error('Error sending to candidate.');
    } finally {
      setIsSendingToCandidate(false);
      fetchInterviewDataByApplication();
    }
  };

  const findScheduleOptions = async ({
    session_ids,
    rec_id,
    dateRange,
  }: {
    session_ids: string[];
    rec_id: string;
    dateRange: {
      start_date: string;
      end_date: string;
    };
  }) => {
    try {
      setFetchingPlan(true);
      const bodyParams: APIFindAvailability = {
        session_ids: session_ids,
        recruiter_id: rec_id,
        start_date_str: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
        end_date_str: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
        candidate_tz: dayjs.tz.guess(),
        options: {
          include_conflicting_slots: {
            out_of_working_hrs: true,
            show_soft_conflicts: true,
            show_conflicts_events: true,
          },
        },
      };
      const res = await axios.post(
        '/api/scheduling/v1/find_availability',
        bodyParams,
      );

      if (res.status === 200) {
        const slots = res.data as ApiResponseFindAvailability;

        if (slots.length === 0) {
          toast.error('No availability found.');
        } else {
          setSchedulingOptions(slots);
        }
        return slots;
      } else {
        toast.error('Error retrieving availability.');
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error retrieving availability.');
      }
    } finally {
      setFetchingPlan(false);
    }
  };

  const onClickScheduleAgent = async (type: 'phone_agent' | 'email_agent') => {
    try {
      setFetchingPlan(true);
      const bodyParamsAvailibility: APIFindAvailability = {
        session_ids: selectedSessionIds,
        recruiter_id: recruiter.id,
        start_date_str: dayjs(dateRange.start_date).format('DD/MM/YYYY'),
        end_date_str: dayjs(dateRange.end_date).format('DD/MM/YYYY'),
        candidate_tz: dayjs.tz.guess(),
      };

      const resAllOptions = await axios.post(
        '/api/scheduling/v1/find_availability',
        bodyParamsAvailibility,
      );

      if (resAllOptions.data.length === 0) {
        toast.warning('No availability found.');
        return;
      }

      if (!selectedTaskId) {
        const bodyParams: ApiBodyParamsScheduleAgentWithoutTaskId = {
          application_id: selectedApplication.id,
          dateRange: dateRange,
          recruiter_id: recruiter.id,
          recruiter_user_name: getFullName(
            recruiterUser.first_name,
            recruiterUser.last_name,
          ),
          session_ids: selectedSessionIds,
          task_id: null,
          type: type,
          candidate_name: getFullName(
            selectedApplication.candidates.first_name,
            selectedApplication.candidates.last_name,
          ),
          company_name: recruiter.name,
          rec_user_phone: recruiterUser.phone,
          rec_user_id: recruiterUser.user_id,
          user_tz: dayjs.tz.guess(),
          trigger_count: 0,
        };

        const res = await axios.post(
          '/api/scheduling/application/schedulewithagentwithouttaskid',
          bodyParams,
        );

        if (res.status !== 200) {
          toast.error(
            'Failed to schedule with agent. Please try again later or contact support.',
          );
        }
      } else {
        const bodyParams: ApiBodyParamsScheduleAgent = {
          application_id: selectedApplication.id,
          dateRange: dateRange,
          recruiter_id: recruiter.id,
          recruiter_user_name: getFullName(
            recruiterUser.first_name,
            recruiterUser.last_name,
          ),
          session_ids: selectedSessionIds,
          task_id: selectedTaskId,
          type: type,
          candidate_name: getFullName(
            selectedApplication.candidates.first_name,
            selectedApplication.candidates.last_name,
          ),
          company_name: recruiter.name,
          rec_user_phone: recruiterUser.phone,
          rec_user_id: recruiterUser.user_id,
          user_tz: dayjs.tz.guess(),
        };

        const res = await axios.post(
          '/api/scheduling/application/schedulewithagentwithouttaskid',
          bodyParams,
        );

        if (res.status !== 200) {
          toast.error(
            'Failed to schedule with agent. Please try again later or contact support.',
          );
        }
      }
    } catch (e) {
      //
    } finally {
      setFetchingPlan(false);
      fetchInterviewDataByApplication();
      setSelectedSessionIds([]);
      resetStateSelfScheduling();
    }
  };

  const resetStateSelfScheduling = () => {
    if (!isSendingToCandidate && !fetchingPlan) {
      setIsScheduleNowOpen(false);
      setSchedulingOptions([]);
      setSelectedSessionIds([]);
      setStepScheduling('pick_date');
      setSelectedApplicationLog(null);
      setSelectedTaskId(null);
      setRequestSessionIds([]);
      setRescheduleSessionIds([]);
    }
  };



  return {
    onClickPrimary,
    resetStateSelfScheduling,
    findScheduleOptions,
    onClickScheduleAgent,
  };
};
