'use client';

import { type CandidateDirectBookingType } from '@aglint/shared-types';
import { dayjsLocal } from '@aglint/shared-utils/src/scheduling/dayjsLocal';
import axios from 'axios';
import {
  setRounds,
  useCandidateInviteSelfScheduleStore,
} from 'src/app/(public)/self-scheduling/[filter]/_common/store';

import { useRouterPro } from '@/hooks/useRouterPro';
import { type ApiBodyOpenSelfScheduling } from '@/pages/api/scheduling/application/openselfscheduling';
import { type transformPlanCombinationPack } from '@/services/CandidateSchedule/utils/bookingUtils/candidateSelfSchedule/transformPlanCombinationPack';
import toast from '@/utils/toast';

import { useConfirmSlots } from './useConfirmSlots';
import { useInviteMeta } from './useInviteMeta';

const useInviteActions = () => {
  const router = useRouterPro<{ filter_id: string; task_id?: string }>();
  const { data } = useInviteMeta();
  const { mutateAsync, isPending } = useConfirmSlots();
  const { rounds, timezone } = useCandidateInviteSelfScheduleStore();

  const handleSelectSlot = (
    day: number,
    slot: ReturnType<
      typeof transformPlanCombinationPack
    >[number]['interview_rounds'][number]['current_day_slots'][number],
  ) => {
    const newSessions = rounds.map((round, ind) => ({
      ...round,
      selectedSlot: ind + 1 > day ? null : round.selectedSlot,
    }));
    newSessions[day]['selectedSlot'] = slot;
    setRounds(newSessions);
  };

  const handleSubmit = async () => {
    const candSelectedSlots = rounds
      .map((round) => round.selectedSlot)
      .filter((ses) => ses !== null);

    const bodyParams: CandidateDirectBookingType = {
      cand_tz: timezone.tzCode,
      filter_id: router.params.filter,
      selected_plan: candSelectedSlots,
    };
    try {
      if (!isPending) {
        await mutateAsync({
          bodyParams,
          is_agent_link: !data.filter_json.selected_options,
        });
      } else {
        toast.warning('Confirming slots. Please wait.');
      }
    } catch {
      toast.error('Unable to book slots.');
    }
  };

  const handleViewedOn = async () => {
    try {
      const bodyParams: ApiBodyOpenSelfScheduling = {
        application_id: data.application_id,
        filter_id: data.filter_json.id,
        sesssion_name: data.meetings.map((ses) => ses.interview_session.name),
        timezone: dayjsLocal.tz.guess(),
        candidate_id: data.candidate.id,
      };

      await axios.post(
        '/api/scheduling/application/openselfscheduling',
        bodyParams,
      );
    } catch {
      //
    }
  };

  return {
    handleSelectSlot,
    handleSubmit,
    handleViewedOn,
    isPending,
  };
};

export default useInviteActions;
