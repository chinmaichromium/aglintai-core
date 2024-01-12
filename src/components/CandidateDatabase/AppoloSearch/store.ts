import { StateCreator } from 'zustand';

import { Candidate } from './types';

export const createCandidateDatabaseSlice: StateCreator<
  CandidateDatabaseSlice
> = (set) => ({
  searchQuery: {
    q_keywords: 'tim',
    organization_locations: ['California, US'],
    person_seniorities: ['senior'],
    person_titles: ['software developer'],
  },
  setSearchQuery: (searchQuery) => set((state) => ({ ...state, searchQuery })),
  isEditDialogOpen: false,
  setIsEditDialogOpen: (isEditDialogOpen) =>
    set((state) => ({ ...state, isEditDialogOpen })),
  candidates: [],
  setCandidates: (candidates) => set((state) => ({ ...state, candidates })),
});

export type CandidateDatabaseSlice = {
  searchQuery: {
    q_keywords: string;
    organization_locations: string[];
    person_seniorities: string[];
    person_titles: string[];
  };
  // eslint-disable-next-line no-unused-vars
  setSearchQuery: (searchQuery: {
    q_keywords: string;
    organization_locations: string[];
    person_seniorities: string[];
    person_titles: string[];
  }) => void;
  isEditDialogOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => void;
  candidates: Candidate[];
  // eslint-disable-next-line no-unused-vars
  setCandidates: (candidates: Candidate[]) => void;
};
