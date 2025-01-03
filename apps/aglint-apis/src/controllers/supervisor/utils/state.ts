import {StateGraphArgs} from '@langchain/langgraph';
import {BaseMessage} from 'langchain/schema';

export interface TeamState {
  messages: BaseMessage[];
  team_members: string[];
  next: string;
  instructions: string;
}

export const teamState: StateGraphArgs<TeamState>['channels'] = {
  messages: {
    value: (x: BaseMessage[], y: BaseMessage[]) => x.concat(y),
    default: () => [],
  },
  team_members: {
    value: (x: string[], y: string[]) => x.concat(y),
    default: () => [],
  },
  next: {
    value: (x: string, y?: string) => y ?? x,
    default: () => 'supervisor',
  },
  instructions: {
    value: (x: string, y?: string) => y ?? x,
    default: () => "Solve the human's question.",
  },
};
