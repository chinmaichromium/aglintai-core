import { Database, Tables } from "./schema.types";
import { Type } from "./utils.types";

export type CustomMembersMeta = {
  [id in
    | keyof Pick<
        Tables<"public_jobs">,
        "hiring_manager" | "recruiter" | "recruiting_coordinator" | "sourcer"
      >
    | "previous_interviewers"]: boolean;
};

export type CustomApplicationBadges = {
  skills: number;
  schools: number;
  positions: number;
  leadership: number;
  jobStability: number;
  careerGrowth: number;
  jobHopping: number;
};

export type CustomJobParamters = Type<
  Pick<
    Database["public"]["Tables"]["public_jobs"]["Row"],
    "parameter_weights" | "jd_json" | "draft"
  >,
  {
    parameter_weights: CustomParameterWeights;
    jd_json: CustomJdJson;
    draft: CustomDraft;
  }
>;

type CustomParameterWeights = {
  skills: number;
  experience: number;
  education: number;
};

type CustomJdJson = {
  title: string;
  level:
    | "Fresher-level"
    | "Associate-level"
    | "Mid-level"
    | "Senior-level"
    | "Executive-level";
  rolesResponsibilities: jsonItemType[];
  skills: jsonItemType[];
  educations: jsonItemType[]; // Adjust this line based on the structure of the "education" property
};

type jsonItemType = {
  field: string;
  isMustHave: boolean;
  id: string;
};

type CustomDraft = Pick<
  Database["public"]["Tables"]["public_jobs"]["Row"],
  | "job_title"
  | "description"
  | "department"
  | "company"
  | "workplace_type"
  | "job_type"
  | "location"
> & { jd_json: CustomJdJson };
