import { create } from 'zustand';

import dayjs from '@/utils/dayjs';

export interface AvailabilitySchedulingFlow {
  candidateAvailabilityId: string;
  applicationIdForConfirmAvailability: string;
  calendarDate: string;
}

const initialState: AvailabilitySchedulingFlow = {
  candidateAvailabilityId: '',
  applicationIdForConfirmAvailability: '',
  calendarDate: dayjs().toISOString(),
};

export const useConfirmAvailabilitySchedulingFlowStore =
  create<AvailabilitySchedulingFlow>()(() => ({
    ...initialState,
  }));

export const setApplicationIdForConfirmAvailability = (
  applicationIdForConfirmAvailability: string,
) =>
  useConfirmAvailabilitySchedulingFlowStore.setState({
    applicationIdForConfirmAvailability,
  });
export const setCandidateAvailabilityId = (candidateAvailabilityId: string) =>
  useConfirmAvailabilitySchedulingFlowStore.setState({
    candidateAvailabilityId,
  });

export const setCalendarDate = (calendarDate: string) =>
  useConfirmAvailabilitySchedulingFlowStore.setState({
    calendarDate,
  });