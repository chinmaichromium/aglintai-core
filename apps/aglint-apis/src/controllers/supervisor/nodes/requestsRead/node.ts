import {
  createAgent,
  runAgentNode,
} from 'src/controllers/supervisor/utils/helper';
import {llm} from 'src/controllers/supervisor/utils/llm';
import {TeamState} from 'src/controllers/supervisor/utils/state';
import {fetchUserRequestsTool} from './tools';
import {CallBackAll} from '@aglint/shared-types';

export const fetchRequestsNode = async ({
  state,
  user_id,
  callback,
}: {
  state: TeamState;
  user_id: string;
  callback: (x: CallBackAll) => void;
}) => {
  const tools = [
    fetchUserRequestsTool({
      user_id,
      callback,
    }),
  ];

  const fetchUserRequestsAgent = await createAgent(
    llm,
    tools,
    'You are a helpful assistant.\n\n' +
      'Call fetch_user_requests tool if user ask to get requests.\n\n' +
      'Dont call the same tool twice in a row.\n\n' +
      'If you get stuck take help from user'
  );

  return runAgentNode({
    state,
    agent: fetchUserRequestsAgent,
    name: 'requestsRead',
  });
};
