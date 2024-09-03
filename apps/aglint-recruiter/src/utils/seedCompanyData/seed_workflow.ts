import { type DatabaseTable } from '@aglint/shared-types';

export const seed_workflow_actions: {
  workflow: Pick<
    DatabaseTable['workflow'],
    | 'auto_connect'
    | 'description'
    | 'interval'
    | 'phase'
    | 'title'
    | 'trigger'
    | 'workflow_type'
  >;
  actions: (Pick<
    DatabaseTable['workflow_action'],
    'order' | 'target_api' | 'action_type'
  > & {
    payload?: any;
  })[];
}[] = [
  {
    workflow: {
      trigger: 'interviewStart',
      phase: 'before',
      interval: 30,
      title:
        'Send Email Reminders to candidate, interviewers, organizer 30 Min Before Interview',
      auto_connect: true,
      description: '',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'interviewStart_email_applicant',
        action_type: 'email',
      },
      {
        order: 1,
        action_type: 'email',
        target_api: 'interviewStart_email_interviewers',
      },
      {
        order: 2,
        action_type: 'email',
        target_api: 'interviewStart_email_organizer',
      },
    ],
  },
  {
    workflow: {
      trigger: 'interviewStart',
      phase: 'before',
      interval: 30,
      title: 'Send Slack Reminders 30 Minutes Before Interview',
      auto_connect: true,
      description: '',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 1,
        target_api: 'interviewStart_slack_interviewers',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      trigger: 'candidateBook',
      phase: 'after',
      interval: 0,
      title: '5. Slack: RSVP Interviewers',
      auto_connect: true,
      description: '',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'candidateBook_slack_interviewerForConfirmation',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      trigger: 'sendAvailReqReminder',
      phase: 'after',
      interval: 24 * 60,
      title: '2. Candidate Availability reminder',
      auto_connect: true,
      description:
        'Send a reminder to the candidate if they do not respond to the Avalibility request link within 24 hours',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'sendAvailReqReminder_email_applicant',
        action_type: 'email',
      },
    ],
  },
  {
    workflow: {
      trigger: 'selfScheduleReminder',
      phase: 'after',
      interval: 24 * 60,
      title: '4. Candidate Confirmation Reminder',
      auto_connect: true,
      description: '',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'selfScheduleReminder_email_applicant',
        action_type: 'email',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send Email, Slack Reminder to Provide Feedback for the Candidate After the Interview',
      trigger: 'interviewEnd',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'interviewEnd_email_interviewerForFeedback',
        action_type: 'email',
      },
      {
        order: 0,
        target_api: 'interviewEnd_slack_interviewerForFeedback',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send an Email to the Organizer When the Interviewer Declines the Meeting',
      trigger: 'meetingDeclined',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'meetingDeclined_email_organizer',
        action_type: 'email',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'now',
      title:
        'Send an Email to the Organizer When the Interviewer accepts the Meeting',
      trigger: 'meetingAccepted',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'meetingAccepted_email_organizer',
        action_type: 'email',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send Email, Slack to Meeting organizer for Provide Meeting complete status',
      trigger: 'interviewEnd',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'interviewEnd_slack_organizerForMeetingStatus',
        action_type: 'slack',
      },
      {
        order: 0,
        target_api: 'interviewEnd_email_organizerForMeetingStatus',
        action_type: 'email',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send Slack and Email notifications to the Trainee interviewer for confirming whether He attended or not',
      trigger: 'interviewEnd',
      workflow_type: 'system',
    },
    actions: [
      {
        order: 0,
        target_api: 'interviewEnd_email_shadowTraineeForMeetingAttendence',
        action_type: 'email',
      },
      {
        order: 1,
        target_api: 'interviewEnd_slack_rShadowTraineeForMeetingAttendence',
        action_type: 'slack',
      },
      {
        order: 2,
        target_api: 'interviewEnd_email_rShadowTraineeForMeetingAttendence',
        action_type: 'email',
      },
      {
        order: 3,
        target_api: 'interviewEnd_slack_shadowTraineeForMeetingAttendence',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send Email, Slack notification to the approver when all Shadow and Reverse Shadow training is completed',
      trigger: 'onTrainingComplete',
      workflow_type: 'system',
    },
    actions: [
      {
        order: 0,
        target_api:
          'onTrainingComplete_email_approverForTraineeMeetingQualification',
        action_type: 'email',
      },
      {
        order: 0,
        target_api:
          'onTrainingComplete_slack_approverForTraineeMeetingQualification',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      trigger: 'onQualified',
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        'Send Slack, Email confirmation for the Interviewer when he is moved to qualified',
      workflow_type: 'system',
    },
    actions: [
      {
        order: 0,
        target_api: 'onQualified_email_trainee',
        action_type: 'email',
      },
      {
        order: 1,
        target_api: 'onQualified_slack_trainee',
        action_type: 'slack',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title: 'Get Availability from Candidate through Aglint Agent via Email',
      trigger: 'onRequestSchedule',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'onRequestSchedule_emailLink_sendSelfSchedulingLink',
        action_type: 'end_point',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title: '1. Schedule Interview with Candidate',
      trigger: 'onRequestSchedule',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'onRequestSchedule_emailLink_getCandidateAvailability',
        action_type: 'end_point',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      phase: 'after',
      title: 'Confirm Slot after getting availaibility from Candidate',
      description: '',
      interval: 0,
      trigger: 'onReceivingAvailReq',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'onReceivingAvailReq_agent_confirmSlot',
        action_type: 'agent_instruction',
        payload: {
          ai_response: {
            preferredInterviewer: [],
            excludeInterviewTimes: [],
            scheduleWithinNumDays: 3,
            maxOptionsToCandidates: 10,
            schedulewithMaxNumDays: 5,
            prefferredInterviewTimes: [
              {
                endTime: '18:00',
                startTime: '10:00',
              },
            ],
            balanceWorkloadAmongInterviewers: true,
            scheduleOutsideOfficeHoursForTimezoneDifferences: true,
          },
          instruction: null,
          ai_response_status: 'success',
        },
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      phase: 'after',
      title: '3. Send Self-Schedule Request',
      description: '',
      interval: 0,
      trigger: 'onReceivingAvailReq',
      workflow_type: 'job',
    },
    actions: [
      {
        order: 0,
        target_api: 'onReceivingAvailReq_agent_sendSelfScheduleRequest',
        action_type: 'agent_instruction',
        payload: {
          ai_response: {
            preferredInterviewer: [],
            excludeInterviewTimes: [],
            scheduleWithinNumDays: 3,
            maxOptionsToCandidates: 10,
            schedulewithMaxNumDays: 5,
            prefferredInterviewTimes: [
              {
                endTime: '18:00',
                startTime: '10:00',
              },
            ],
            balanceWorkloadAmongInterviewers: true,
            scheduleOutsideOfficeHoursForTimezoneDifferences: true,
          },
          instruction: null,
          ai_response_status: 'success',
        },
      },
    ],
  },

  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title:
        '6. When candidate requests for rescheduling, get new availability',
      trigger: 'onRequestReschedule',
      workflow_type: 'job',
    },
    actions: [
      {
        action_type: 'email',
        order: 0,
        target_api: 'onRequestReschedule_emailLink_resendAvailRequest',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title: '7. Candidate requests for cancelling interviews',
      trigger: 'onRequestCancel',
      workflow_type: 'job',
    },
    actions: [
      {
        action_type: 'end_point',
        order: 0,
        target_api: 'onRequestCancel_agent_cancelEvents',
      },
      {
        action_type: 'end_point',
        order: 1,
        target_api: 'onRequestCancel_slack_interviewersOrganizer',
      },
    ],
  },
  {
    workflow: {
      auto_connect: false,
      description: '',
      interval: 0,
      phase: 'after',
      title: '8. Interviewer declines meeting',
      trigger: 'onRequestInterviewerDecline',
      workflow_type: 'job',
    },
    actions: [
      {
        action_type: 'end_point',
        order: 0,
        target_api: 'onRequestInterviewerDecline_agent_changeInterviewer',
      },
    ],
  },
];
