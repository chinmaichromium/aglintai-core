import { InterviewFilterJsonType } from '../../data.types';
import { TableType } from './index.types';

export type FilterJSON = {
  end_date: string;
  start_date: string;
  organizer_name: string;
};

export type CustomInterviewFilterJson = TableType<
  'interview_filter_json',
  { filter_json: FilterJSON }
>;
