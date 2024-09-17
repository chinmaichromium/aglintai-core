import { Badge } from '@components/ui/badge';
import { TableCell, TableRow } from '@components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/ui/tooltip';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Users,
  XCircle,
} from 'lucide-react';
import { useRouter } from 'next/router';

import { UIButton } from '@/components/Common/UIButton';
import { useAllDepartments } from '@/queries/departments';

import { type useAllInterviewModulesType } from '../hook';

export const InterviewPoolList = ({
  interviewType,
}: {
  interviewType: useAllInterviewModulesType[number];
}) => {
  const router = useRouter();
  const { data: departments } = useAllDepartments();

  const department = departments?.find(
    (dep) => dep.id === interviewType.department_id,
  ).name;

  return (
    <TableRow
      key={interviewType.id}
      className='cursor-pointer hover:bg-gray-50'
      onClick={() => {
        router.push(`/interview-pool/${interviewType.id}`);
      }}
    >
      <TableCell className='font-medium'>{interviewType.name}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>
        <div className='flex space-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant='secondary'
                  className='bg-green-100 text-green-800'
                >
                  <CheckCircle className='mr-1 h-3 w-3' />
                  {interviewType.this_month_completed_count}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Completed Interviews (This Month)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant='secondary'
                  className='bg-blue-100 text-blue-800'
                >
                  <Calendar className='mr-1 h-3 w-3' />
                  {interviewType.this_month_scheduled_count}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Scheduled Interviews (This Month)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant='secondary' className='bg-red-100 text-red-800'>
                  <XCircle className='mr-1 h-3 w-3' />
                  {interviewType.this_month_cancelled_count}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cancelled Interviews (This Month)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant='outline'
                className='w-[80px] justify-center border-purple-200 bg-purple-50 text-purple-800'
              >
                <Clock className='mr-1 h-3 w-3' />
                {interviewType.average_meeting_duration} min
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Average Interview Duration</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant='outline'
                className='border-orange-200 bg-orange-50 text-orange-800'
              >
                <Users className='mr-1 h-3 w-3' />-
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Average Candidates per Week</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant='outline'
                className='border-teal-200 bg-teal-50 text-teal-800'
              >
                <Calendar className='mr-1 h-3 w-3' />
                {interviewType.upcoming_meeting_count}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Number of Upcoming Available Slots</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant='outline'
                className='flex w-[70px] items-center justify-center border-yellow-200 bg-yellow-50 text-yellow-800'
              >
                <Star className='mr-1 h-3 w-3' />
                <span>{interviewType.passed_rate} %</span>
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Candidate Pass Rate</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant='outline'
                className='border-indigo-200 bg-indigo-50 text-indigo-800'
              >
                <Briefcase className='mr-1 h-3 w-3' />-
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Number of Open Positions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <UIButton
          variant='ghost'
          size='sm'
          className='text-gray-600 hover:text-gray-900'
        >
          <ArrowRight className='h-4 w-4' />
        </UIButton>
      </TableCell>
    </TableRow>
  );
};
