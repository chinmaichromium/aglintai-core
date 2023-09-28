import { nanoid } from 'nanoid';

import { JobFormState } from './JobPostFormProvider';

export const getSeedJobFormData = () => {
  const seedFormState: JobFormState = {
    createAt: undefined,
    updatedAt: undefined,
    jobPostId: undefined,
    formType: 'new',
    slideNo: 0,
    formFields: {
      applicantsCount: 0,
      company: 'Google',
      interviewingCount: 0,
      jobLocation: 'bangalore',
      jobTitle: 'Engineer',
      jobType: '',
      shortListedCount: 0,
      status: 'draft',
      workPlaceType: '',
      skills: ['HTML'],
      jobDescription: 's',
      interviewType: 'ai-powered',
      interviewConfig: {
        skill: {
          id: nanoid(),
          copy: 'Skill',
          questions: [],
          value: false,
        },
        cultural: {
          id: nanoid(),
          copy: 'Cultural',
          value: false,
          questions: [],
        },
        personality: {
          id: nanoid(),
          copy: 'Personality',
          questions: [],
          value: false,
        },
        softSkills: {
          id: nanoid(),
          copy: 'Soft Skills',
          questions: [],
          value: false,
        },
      },
      screeningConfig: {
        feedbackVisible: false,
        screening: {
          minScore: true,
          minApplicants: true,
          minNoApplicants: 40,
          minNoResumeScore: 50,
        },
        useAglintMatchingAlgo: true,
        shortlist: {
          algoScore: true,
          interviewScore: true,
          minAlgoScore: 8,
          minInterviewScore: 80,
        },
      },
    },
  };
  return seedFormState;
};
