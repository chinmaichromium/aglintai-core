import { create, StateCreator } from 'zustand';

import { ActionsLoadSlice, createActionsLoadSlice } from './actionLoader';
import { type FiltersSlice, createFiltersSlice } from './filters';
import { type PopupSlice, createPopupSlice } from './popup';

type Slices = FiltersSlice & PopupSlice & ActionsLoadSlice;

export type CreateSlice<
  // eslint-disable-next-line no-unused-vars
  T extends Partial<Slices>,
> = StateCreator<Slices, [], [], T>;

type WorkflowSlice = {
  resetAll: () => void;
};

const createWorkflowSlice: StateCreator<Slices, [], [], WorkflowSlice> = (
  _,
  get,
) => ({
  resetAll: () => {
    get().resetFilters();
    get().resetPopup();
    get().resetActionsLoad();
  },
});

export type WorkflowStore = Slices & WorkflowSlice;
export const useWorkflowStore = create<WorkflowStore>()((...a) => ({
  ...createFiltersSlice(...a),
  ...createPopupSlice(...a),
  ...createActionsLoadSlice(...a),
  ...createWorkflowSlice(...a),
}));
