/* eslint-disable jsx-a11y/anchor-is-valid */
import OptimisticWrapper from '@components/loadingWapper';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Skeleton } from '@components/ui/skeleton';
import { Inbox, MoreHorizontal, Plus } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

import { UIBadge } from '@/components/Common/UIBadge';
import { useRouterPro } from '@/hooks/useRouterPro';
import { type Workflow } from '@/types/workflow.types';
import ROUTES from '@/utils/routing/routes';
import { capitalizeSentence } from '@/utils/text/textUtils';
import { TAG_OPTIONS } from '@/workflows/constants';
import {
  useWorkflows,
  useWorkflowsActions,
  useWorkflowsFilters,
} from '@/workflows/hooks';
import { getTriggerOption } from '@/workflows/utils';

import { getFilteredWorkflows } from './filters';

const Content = memo(() => {
  const {
    workflows: { data, status },
  } = useWorkflows();
  if (status === 'error') return <>Error</>;
  return status === 'pending' ? (
    <div className='flex flex-row gap-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='animate-pulse space-y-2'>
          <Skeleton className='h-4 w-3/4' />
          <Skeleton className='h-4 w-1/2' />
          <Skeleton className='h-4 w-2/3' />
        </div>
      ))}
    </div>
  ) : (
    <div className='flex flex-col gap-4'>
      <Cards data={data} />
    </div>
  );
});
Content.displayName = 'Content';

export default Content;

const Cards = (props: {
  data: ReturnType<typeof useWorkflows>['workflows']['data'];
}) => {
  const { devlinkProps } = useWorkflows();
  const { push } = useRouterPro();
  const filters = useWorkflowsFilters();
  const { setDeletion } = useWorkflowsActions();
  const { workflowMutations: mutations } = useWorkflows();
  const cards = getFilteredWorkflows(filters, props.data).map(
    ({ id, title, trigger, phase, jobs, tags }) => {
      const loading = !!mutations.find((mutationId) => mutationId === id);
      const jobCount = (jobs ?? []).length;
      return (
        <OptimisticWrapper key={id} loading={loading}>
          <Card key={id} className='cursor-pointer'>
            <Link
              href={ROUTES['/workflows/[workflow]']({ workflow: id })}
              legacyBehavior
              passHref
            >
              <a className='block'>
                <CardHeader className='flex items-start justify-between p-3 pb-0'>
                  <CardTitle className='w-full text-base font-semibold'>
                    <div className='flex items-center justify-between'>
                      {capitalizeSentence(title ?? '---')}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant='ghost'
                            className='h-8 w-8 p-0'
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.preventDefault();
                              push(
                                ROUTES['/workflows/[workflow]']({
                                  workflow: id,
                                }),
                              );
                            }}
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.preventDefault();
                              setDeletion({
                                open: true,
                                workflow: { id, jobs },
                              });
                            }}
                            {...devlinkProps}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-3 pt-1'>
                  <div className='flex flex-row gap-2'>
                    <WorkflowTags tags={tags} />
                    <p className='text-sm text-gray-600'>
                      {getTriggerOption(trigger, phase)}
                    </p>
                    <p className='text-sm text-gray-600'>{`Used in ${jobCount} job${jobCount === 1 ? '' : 's'}`}</p>
                  </div>
                </CardContent>
              </a>
            </Link>
          </Card>
        </OptimisticWrapper>
      );
    },
  );
  if (cards.length === 0)
    return (
      <div className='flex h-full flex-col items-center justify-center p-8 text-center'>
        <div className='mb-4 rounded-full bg-muted p-3'>
          <Inbox className='h-6 w-6 text-muted-foreground' />
        </div>
        <h3 className='text-lg font-semibold'>No workflows</h3>
        <p className='mb-4 mt-2 text-sm text-muted-foreground'>
          You haven&apos;t created any workflows yet. Start by creating a new
          one.
        </p>
        <Button>
          <Plus className='mr-2 h-4 w-4' /> Create Workflow
        </Button>
      </div>
    );
  return <>{cards}</>;
};

export const WorkflowTags = ({ tags }: Pick<Workflow, 'tags'>) => {
  return (
    <div className='flex flex-row gap-2'>
      {(tags ?? []).map((tag) => {
        // eslint-disable-next-line security/detect-object-injection
        const option = TAG_OPTIONS[tag];
        return (
          <UIBadge
            key={tag}
            textBadge={option.name}
            size={'sm'}
            icon={(!!option.iconName || !!option.icon) && option.icon}
            color={option.color}
          />
        );
      })}
    </div>
  );
};