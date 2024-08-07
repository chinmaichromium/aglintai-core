import {createTeamSupervisor} from './utils/helper';
import {llm} from './utils/llm';

export const createSchedulingSupervisorAgent = async () => {
  const supervisorAgent = await createTeamSupervisor(
    llm,
    'You are a supervisor tasked with managing a conversation between the' +
      'following workers:  {team_members}. Given the following user request,' +
      'respond with the worker to act next. Each worker will perform a' +
      'task and respond with their results.\n\n' +
      'If you get stuck, ask the user for help.\n\n' +
      'You can call only one worker for a user request.\n\n' +
      'Dont go into loop calling same workers again and again',
    [
      'interviewTypesRead',
      'greetingAgent',
      'fetchScheduledInterviewsRead',
      'requestsRead',
      'jobsRelatedRead',
    ] //all nodes
  );

  return supervisorAgent;
};
