import { isArray } from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import router from 'next/router';
import React, { createContext, useContext, useReducer } from 'react';

import { JobApplcationDB } from '@/src/types/data.types';
import { JsonResume } from '@/src/types/resume_json.types';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import {
  API_FAIL_MSG,
  supabaseWrap,
} from '../../JobsDashboard/JobPostCreateUpdate/utils';

export interface CandidateSearchRes {
  application_id: string;
  candidate_id: string;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  json_resume: JsonResume;
  similarity: number;
  profile_image?: string;
  resume_link: string;
  is_bookmarked: boolean;
  is_checked: boolean;
  applied_job_posts: CandJobPost[];
}

export type CandJobPost = {
  job_id: string;
  job_title: string;
};

export type CandidateSearchState = {
  queryJson: {
    jobTitles: string[];
    location: string[];
    languages: string[];
    minExp: number;
    maxExp: number;
    universities: string[];
    prefferedCompanies: string[];
    excludedCompanies: string[];
    skills: string[];
    degrees: string[];
  };
  candidates: CandidateSearchRes[];
  maxProfiles: number;
};

export type CandidateSearchCtxType = {
  candidateSearchState: CandidateSearchState;
  // eslint-disable-next-line no-unused-vars
  updateState: ({ path, value }: { path: string; value: any }) => void;
  // eslint-disable-next-line no-unused-vars
  updatenewSearchRes: (newState: CandidateSearchState) => void;
  // eslint-disable-next-line no-unused-vars
  bookMarkCandidate: (application_id: string | string[]) => Promise<void>;
  handleAddCandidatesTojob: (
    // eslint-disable-next-line no-unused-vars
    jobAppIds: string[],
    // eslint-disable-next-line no-unused-vars
    job_ids: {
      job_id: string;
      job_title: string;
    }[],
  ) => Promise<void>;
};

type ActionType =
  | {
      type: 'UPDATE_STATE';
      payload: {
        path: string;
        value: any;
      };
    }
  | {
      type: 'replaceState';
      payload: {
        newState: CandidateSearchState;
      };
    };

const reducer = (state: CandidateSearchState, action: ActionType) => {
  const nextState = cloneDeep(state);

  switch (action.type) {
    case 'UPDATE_STATE': {
      set(nextState, action.payload.path, action.payload.value);
      return nextState;
    }
    case 'replaceState': {
      const { newState } = action.payload;
      return cloneDeep(newState);
    }
    default:
      return state;
  }
};

export const initialState: CandidateSearchState = {
  candidates: [],
  queryJson: {
    jobTitles: [],
    languages: [],
    location: [],
    maxExp: 0,
    minExp: 0,
    universities: [],
    excludedCompanies: [],
    prefferedCompanies: [],
    skills: [],
    degrees: [],
  },
  maxProfiles: 25,
};

const CandidateSearchCtx = createContext<CandidateSearchCtxType>({
  candidateSearchState: initialState,
  // eslint-disable-next-line no-unused-vars
  updateState: ({ path = '', value = '' }) => {},
  // eslint-disable-next-line no-unused-vars
  updatenewSearchRes: (newState: CandidateSearchState) => {},
  // eslint-disable-next-line no-unused-vars
  bookMarkCandidate: async (id) => {},
  handleAddCandidatesTojob: async (
    // eslint-disable-next-line no-unused-vars
    jobAppIds: string[],
    // eslint-disable-next-line no-unused-vars
    job_ids: [],
  ) => {},
});

const CandidateSearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = ({ path, value }) => {
    dispatch({ type: 'UPDATE_STATE', payload: { path, value } });
  };

  const updatenewSearchRes = (newState: CandidateSearchState) => {
    dispatch({
      type: 'replaceState',
      payload: {
        newState,
      },
    });
  };

  const bookMarkCandidate = async (application_id: string | string[]) => {
    try {
      let bookMarkAppIds = [];
      const isBulkBookMark = isArray(application_id);
      if (isArray(application_id)) {
        bookMarkAppIds = [...application_id];
      } else {
        bookMarkAppIds = [application_id];
      }
      let updatedCands = [];

      if (isBulkBookMark) {
        updatedCands = state.candidates.map((cand) => {
          if (
            !cand.is_bookmarked &&
            bookMarkAppIds.includes(cand.application_id)
          ) {
            cand.is_bookmarked = !cand.is_bookmarked;
          }
          return cand;
        });
      } else {
        updatedCands = state.candidates.map((cand) => {
          if (bookMarkAppIds.includes(cand.application_id)) {
            cand.is_bookmarked = !cand.is_bookmarked;
          }
          return cand;
        });
      }

      updateState({
        path: 'candidates',
        value: updatedCands,
      });

      supabaseWrap(
        await supabase
          .from('candidate_search_history')
          .update({
            bookmarked_candidates: updatedCands
              .filter((c) => c.is_bookmarked)
              .map((c) => c.application_id),
          })
          .eq('id', router.query.searchQryId),
      );
    } catch {
      toast.error(API_FAIL_MSG);
    }

    // const r =
  };

  const handleAddCandidatesTojob = async (
    jobAppIds: string[],
    job_ids: { job_id: string; job_title: string }[],
  ) => {
    try {
      let updaCandState = [...state.candidates];
      const candsjobApps = supabaseWrap(
        await supabase
          .from('job_applications')
          .select()
          .or(jobAppIds.map((j) => `application_id.eq.${j}`).join(',')),
      ) as any[];

      let newJobApps: Partial<JobApplcationDB> & { candidate_id: string }[] =
        [];

      for (const candJobApp of candsjobApps) {
        let newCandApps = job_ids.map((j) => ({
          candidate_id: candJobApp.candidate_id,
          resume: candJobApp.resume,
          resume_text: candJobApp.resume_text,
          resume_embedding: candJobApp.resume_embedding,
          education_embedding: candJobApp.education_embedding,
          experience_embedding: candJobApp.experience_embedding,
          is_embedding: candJobApp.is_embedding,
          job_id: j.job_id,
          json_resume: candJobApp.json_resume,
          skills_embedding: candJobApp.skills_embedding,
        }));
        newJobApps = [...newJobApps, ...newCandApps];

        updaCandState = updaCandState.map((cand) => {
          if (cand.candidate_id === candJobApp.candidate_id) {
            cand.applied_job_posts = [...cand.applied_job_posts, ...job_ids];
          }
          return cand;
        });
      }
      updateState({
        path: 'candidates',
        value: updaCandState,
      });
      supabaseWrap(
        await supabase.from('job_applications').insert([...newJobApps]),
      );
      toast.success('Applied to job/s sucessfully');
    } catch (er) {
      toast.error(API_FAIL_MSG);
      // console.log(er);
    }
  };

  return (
    <CandidateSearchCtx.Provider
      value={{
        candidateSearchState: state,
        updateState,
        updatenewSearchRes,
        bookMarkCandidate,
        handleAddCandidatesTojob,
      }}
    >
      {children}
    </CandidateSearchCtx.Provider>
  );
};

export default CandidateSearchProvider;

export const useCandidateSearchCtx = () => {
  return useContext(CandidateSearchCtx);
};
