export const TYPE_SAFE_PARAMS = {
  'pages': {
    '/integrations/[platform]': [
      'platform'
    ],
    '/interview-pool/[pool]': [
      'pool'
    ],
    '/jobs/[job]/[application]': [
      'job',
      'application'
    ],
    '/jobs/[job]/candidate-plan': [
      'job'
    ],
    '/jobs/[job]/email-templates': [
      'job'
    ],
    '/jobs/[job]/hiring-team': [
      'job'
    ],
    '/jobs/[job]/interview-plan': [
      'job'
    ],
    '/jobs/[job]/job-details': [
      'job'
    ],
    '/jobs/[job]/metrics': [
      'job'
    ],
    '/jobs/[job]': [
      'job'
    ],
    '/jobs/[job]/profile-score': [
      'job'
    ],
    '/jobs/[job]/workflows': [
      'job'
    ],
    '/requests/[request]': [
      'request'
    ],
    '/user/[user]': [
      'user'
    ],
    '/workflows/[workflow]': [
      'workflow'
    ],
    '/candidate/[application_id]/home': [
      'application_id'
    ],
    '/candidate/[application_id]/interviews': [
      'application_id'
    ],
    '/candidate/[application_id]/messages': [
      'application_id'
    ],
    '/candidate/[application_id]/profile': [
      'application_id'
    ],
    '/candidate/[application_id]/login': [
      'application_id'
    ],
    '/company-postings/[id]': [
      'id'
    ],
    '/job-post/[id]': [
      'id'
    ],
    '/scheduling/invite/[id]': [
      'id'
    ],
    '/scheduling/request-availability/[request_id]': [
      'request_id'
    ]
  },
  'api': {}
} as const