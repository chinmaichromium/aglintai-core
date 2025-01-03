const pageRouteBuilder = (routes: string[]): string => {
  return routes.join('/');
};

const assistant = {
  '/assistant': () => pageRouteBuilder([ROUTES.app(), 'assistant']),
};
const auth = {
  '/auth/microsoft': () => pageRouteBuilder([ROUTES.app(), 'auth/microsoft']),
  '/auth/zoom': () => pageRouteBuilder([ROUTES.app(), 'auth/zoom']),
} as const;
const authCal = {
  '/auth-cal/google': () => () =>
    pageRouteBuilder([ROUTES.app(), 'auth-cal/google']),
} as const;
const authEmail = {
  '/auth-email/google': () => () =>
    pageRouteBuilder([ROUTES.app(), 'auth-email/google']),
} as const;

const candidates = {
  '/candidates': () => pageRouteBuilder([ROUTES.app(), 'candidates']),
  '/candidates/aglintdb': () =>
    pageRouteBuilder([candidates['/candidates'](), 'aglintdb']),
  '/candidates/history': () =>
    pageRouteBuilder([candidates['/candidates'](), 'history']),
  '/candidates/search': () =>
    pageRouteBuilder([candidates['/candidates'](), 'search']),
} as const;
const company = {
  '/company': () => pageRouteBuilder([ROUTES.app(), 'company']),
} as const;
const companyPostings = {
  '/company-postings/[id]': ({ id }: { id: string }) =>
    pageRouteBuilder([ROUTES.app(), 'company-postings', id]),
} as const;
const forgotPassword = {
  '/forgot-password': () => pageRouteBuilder([ROUTES.app(), 'forgot-password']),
} as const;
const integrations = {
  '/integrations': () => pageRouteBuilder([ROUTES.app(), 'integrations']),
} as const;
const interview = {
  '/interview/feedback': () =>
    pageRouteBuilder([ROUTES.app(), 'interview/feedback']),
};

const jobPost = {
  '/job-post/[id]': ({ id }: { id: string }) =>
    pageRouteBuilder([ROUTES.app(), 'job-post', id]),
} as const;
const jobPostAssistant = {
  '/job-post-assistant/[company_id]': ({
    company_id,
  }: {
    company_id: string;
  }) => pageRouteBuilder([ROUTES.app(), 'job-post-assistant', company_id]),
} as const;
const jobsById = {
  '/jobs/[job]': ({ job }: { job: string }) =>
    pageRouteBuilder([jobs['/jobs'](), job]),
  '/jobs/[job]/[application]': ({
    job,
    application_id,
  }: {
    job: string;
    application_id: string;
  }) =>
    pageRouteBuilder([
      pageRouteBuilder([jobs['/jobs'](), job]),
      application_id,
    ]),
  '/jobs/[job]/agent': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'agent']),
  '/jobs/[job]/assessment': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'assessment']),
  '/jobs/[job]/metrics': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'metrics']),
  '/jobs/[job]/email-templates': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'email-templates']),
  '/jobs/[job]/interview-plan': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'interview-plan']),
  '/jobs/[job]/candidate-plan': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'candidate-plan']),
  '/jobs/[job]/profile-score': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'profile-score']),
  '/jobs/[job]/screening': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'screening']),
  '/jobs/[job]/hiring-team': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'hiring-team']),
  '/jobs/[job]/job-details': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'job-details']),
  '/jobs/[job]/workflows': ({ job }: { job: string }) =>
    pageRouteBuilder([jobsById['/jobs/[job]']({ job }), 'workflows']),
} as const;
const jobs = {
  '/jobs': () => pageRouteBuilder([ROUTES.app(), 'jobs']),
  '/jobs/create': () => pageRouteBuilder([jobs['/jobs'](), 'create']),
  '/jobs/edit': () => pageRouteBuilder([jobs['/jobs'](), 'edit']),
  '/jobs/new': () => pageRouteBuilder([jobs['/jobs'](), 'new']),
  ...jobsById,
} as const;

const login = {
  '/login': () => pageRouteBuilder([ROUTES.app(), 'login']),
} as const;
const notifications = {
  '/notifications': () => pageRouteBuilder([ROUTES.app(), 'notifications']),
} as const;

const user = {
  '/user/[user]': ({ user_id }: { user_id: string }) =>
    pageRouteBuilder(['/user', user_id]),
} as const;
const profile = {
  '/profile': () => pageRouteBuilder([ROUTES.app(), 'profile']),
} as const;
const profileLink = {
  '/profile-link/[id]': ({ id }: { id: string }) =>
    pageRouteBuilder([ROUTES.app(), 'profile-link', id]),
} as const;
const resetPassword = {
  '/reset-password': () => pageRouteBuilder([ROUTES.app(), 'reset-password']),
} as const;

const interviewTypes = {
  '/interview-pool': () => pageRouteBuilder([ROUTES.app(), 'interview-pool']),
  '/interview-pool/[pool]': ({ type_id }: { type_id: string }) =>
    pageRouteBuilder([interviewTypes['/interview-pool'](), type_id]),
} as const;

const interviews = {
  '/interviews': () => pageRouteBuilder([ROUTES.app(), 'interviews']),
  '/interviews/all': () =>
    pageRouteBuilder([interviews['/interviews'](), 'all']),
  '/interviews/view': () =>
    pageRouteBuilder([interviews['/interviews'](), 'view']),
} as const;

const screening = {
  '/screening': () => pageRouteBuilder([ROUTES.app(), 'screening']),
  '/screening/[id]': ({ id }: { id: string }) =>
    pageRouteBuilder([screening['/screening'](), id]),
} as const;
const screeningDashboard = {
  '/screening-dashboard': () =>
    pageRouteBuilder([ROUTES.app(), 'screening-dashboard']),
} as const;
const signup = {
  '/signup': () => pageRouteBuilder([ROUTES.app(), 'signup']),
} as const;
const support = {
  '/support': () => pageRouteBuilder([ROUTES.app(), 'support']),
  '/support/create': () => pageRouteBuilder([support['/support'](), 'create']),
  '/support/[id]': ({ id }: { id: string }) =>
    pageRouteBuilder([support['/support'](), id]),
} as const;
const tasks = {
  '/tasks': () => pageRouteBuilder([ROUTES.app(), 'tasks']),
} as const;
const thanksPage = {
  '/thanks-page': () => pageRouteBuilder([ROUTES.app(), 'thanks-page']),
} as const;
const workflowsById = {
  '/workflows/[workflow]': ({ workflow }: { workflow: string }) =>
    pageRouteBuilder([workflows['/workflows'](), workflow]),
} as const;

const workflows = {
  '/workflows': () => pageRouteBuilder([ROUTES.app(), 'workflows']),
  ...workflowsById,
} as const;

const requests = {
  '/requests': () => pageRouteBuilder([ROUTES.app(), 'requests']),
  '/requests/[request]': ({ request }: { request: string }) =>
    pageRouteBuilder([requests['/requests'](), request]),
} as const;

const interviewers = {
  '/interviewers': () => pageRouteBuilder([ROUTES.app(), 'interviewers']),
} as const;

const reports = {
  '/reports': () => pageRouteBuilder([ROUTES.app(), 'analytics']),
} as const;

const ROUTES = {
  app: () => '',
  ...assistant,
  ...auth,
  ...authCal,
  ...authEmail,
  ...candidates,
  ...company,
  ...companyPostings,
  ...forgotPassword,
  ...integrations,
  ...interview,
  ...jobPost,
  ...jobPostAssistant,
  ...jobs,
  ...login,
  ...notifications,
  ...profile,
  ...profileLink,
  ...resetPassword,
  ...interviews,
  ...screening,
  ...screeningDashboard,
  ...signup,
  ...support,
  ...tasks,
  ...thanksPage,
  ...user,
  ...workflows,
  ...requests,
  ...interviewers,
  ...interviewTypes,
  ...reports,
} as const;
export default ROUTES;
