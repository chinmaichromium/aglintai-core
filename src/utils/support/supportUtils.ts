/* eslint-disable security/detect-object-injection */
import { ScoreWheelParams } from '@/src/components/Common/ScoreWheel';
import { JobApplication } from '@/src/context/JobApplicationsContext/types';
import { JobTypeDashboard } from '@/src/context/JobsContext/types';
import { palette } from '@/src/context/Theme/Theme';

const Priority = {
  low: '#467B7C',

  medium: '#467B7C',

  high: '#F79A3E',

  highest: '#D93F4C',
};
// export const mapPriority = (level: string) => {
//   return Priority[String(level.toLocaleLowerCase())]?.text;
// };
export const mapPriorityColor = (level: string) => {
  return Priority[String(level.toLocaleLowerCase())];
};

const Status = {
  open: '#3498DB',
  pending: '#F1C40F',
  'on hold': '#95A5A6',
  resolved: '#228F67',
  escalated: '#9B59B6',
  canceled: '#34495E',
  reopened: '#E74C3C',
};
export const mapStatusColor = (status: string) => {
  return Status[String(status.toLocaleLowerCase())];
};
// export const mapPriorityColor = (level: string) => {
//   return Priority[String(level.toLocaleLowerCase())];
// };

// const Status = {
//   open: '#3498DB',
//   pending: '#F1C40F',
//   'on hold': '#95A5A6',
//   resolved: '#228F67',
//   escalated: '#9B59B6',
//   canceled: '#34495E',
//   reopened: '#E74C3C',
// };
// export const mapStatusColor = (status: string) => {
//   return Status[String(status.toLocaleLowerCase())];
// };

export const allPriority = ['low', 'medium', 'high', 'highest'];
export const allStatus = [
  // 'open',
  'pending',
  'in progress',
  'on hold',
  'resolved',
  'escalated',
  'canceled',
  'reopened',
];

export function fillEmailTemplate(
  template: string,
  email: {
    first_name: string;
    last_name: string;
    job_title: string;
    company_name: string;
  },
) {
  let filledTemplate = template;

  const placeholders = {
    '[firstName]': email.first_name,
    '[lastName]': email.last_name,
    '[jobTitle]': email.job_title,
    '[companyName]': email.company_name,
  };

  for (const [placeholder, value] of Object.entries(placeholders)) {
    // eslint-disable-next-line security/detect-non-literal-regexp
    const regex = new RegExp(placeholder.replace(/\[|\]/g, '\\$&'), 'g');
    filledTemplate = filledTemplate.replace(regex, value);
  }

  return filledTemplate;
}

const allCandidateStatusColor = {
  'invitation not sent': {
    color: palette.red[500],
    backgroundColor: palette.red[100],
  },
  'invitation sent': {
    color: palette.yellow[600],
    backgroundColor: palette.red[100],
  },
  'invitation accepted': {
    color: palette.kale[600],
    backgroundColor: palette.kale[200],
  },
  'invitation rejected': {
    color: '#8B008B',
    backgroundColor: 'rgba(139, 0, 139, 0.10)',
  },
  'invitation expired': {
    color: palette.red[500],
    backgroundColor: palette.red[500],
  },
  'invitation completed': {
    color: palette.blue[600],
    backgroundColor: palette.blue[100],
  },
  'invitation incomplete': {
    color: palette.grey[700],
    backgroundColor: palette.grey[200],
  },
};
export const getCandidateStatusColor = (key: string) => {
  return (
    allCandidateStatusColor[String(key).toLocaleLowerCase()] || {
      color: palette.grey[700],
      backgroundColor: palette.grey[200],
    }
  );
};
export const priorityOrder = {
  low: 0,
  medium: 1,
  high: 2,
  highest: 3,
};
export const statusOrder = {
  created: -1,
  open: 0,
  pending: 1,
  'in progress': 2,
  'on hold': 3,
  resolved: 4,
  escalated: 5,
  canceled: 6,
  reopened: 7,
};

export type QualificationRelevance =
  | 'less match'
  | 'average match'
  | 'more match';

type DataType = {
  qualification: {
    certifications: {
      isRelated: boolean[];
      relevance: QualificationRelevance;
    };
    education: {
      isRelated: boolean[];
      relevance: QualificationRelevance;
    };
    experience: {
      isRelated: boolean[];
      relevance: QualificationRelevance;
    };
    project: {
      isRelated: boolean[];
      relevance: QualificationRelevance;
    };
  };
  skills_score: number;
};

export function getJdScore(data: DataType): ScoreWheelParams {
  return Object.entries(data.qualification).reduce(
    (acc, [key, value]) => {
      const relationScore =
        (value.isRelated.reduce((acc, curr) => {
          return curr ? acc + 1 : acc;
        }, 0) %
          5) *
        10;
      const relevanceScore =
        value.relevance === 'less match'
          ? 0
          : value.relevance === 'average match'
          ? 25
          : 50;
      return { ...acc, [key]: relationScore + relevanceScore };
    },
    {
      skills: data.skills_score ? data.skills_score * 100 : 0,
    } as ScoreWheelParams,
  );
}

export const getOverallResumeScore = (
  jd_score: JobApplication['jd_score'],
  parameter_weights: JobTypeDashboard['parameter_weights'],
) => {
  const jdScoreObj = jd_score as any;
  const data: DataType = {
    qualification: jdScoreObj.qualification as DataType['qualification'],
    skills_score: jdScoreObj.skills_score as DataType['skills_score'],
  };
  const detailedScores = getJdScore(data);
  return Math.trunc(
    Object.keys(parameter_weights).reduce((acc, curr) => {
      acc += (detailedScores[curr] * parameter_weights[curr]) / 100;
      return acc;
    }, 0),
  );
};
