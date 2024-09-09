/* eslint-disable security/detect-object-injection */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { GlobalEmptyState } from '@devlink/GlobalEmptyState';
import { Skeleton } from '@components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { Button } from '@components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@components/ui/badge';

import { useRequests } from '@/context/RequestsContext';

import { useAuthDetails } from '@/context/AuthContext/AuthContext';
import { RequestProvider } from '@/context/RequestContext';
import { getFullName } from '@aglint/shared-utils';
import { Progress } from '@components/ui/progress';
import { ScrollArea, ScrollBar } from '@components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import { Columns, LayoutList } from 'lucide-react';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';
import { RequestsSectionDefaultData } from '../_common/constant';
import { useRequestCount } from '../_common/hooks';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible';
import { RequestCard } from '../_common/Components/RequestCard';
import RequestListFilter from '../_common/Components/RequestListFilter';

function RequestList() {
  const [view, setView] = useState<'list' | 'kanban'>('list');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const {
    requests: { data, isFetched },
    filters,
  } = useRequests();
  const { recruiterUser } = useAuthDetails();
  const { data: requestCount } = useRequestCount();

  const defaults = RequestsSectionDefaultData.map(
    ({ sectionName, ...rest }) => ({
      ...rest,
      sectionName,
      requests: data?.[sectionName],
    }),
  );

  const isFilterApplied =
    filters.status.length > 0 ||
    filters.type.length > 0 ||
    !!filters.title ||
    filters.jobs.length > 0 ||
    filters.applications.length > 0 ||
    filters.assigneeList.length > 0 ||
    filters.assignerList.length > 0;

  if (
    isFilterApplied &&
    isFetched &&
    defaults.flatMap((d) => d.requests).length === 0
  )
    return <GlobalEmptyState iconName='task_alt' textDesc='No results found' />;

  const renderContent = () => {
    const urgentRequests = defaults.find(
      ({ sectionName }) => sectionName === 'urgent_request',
    );
    const completedRequests = defaults.find(
      ({ sectionName }) => sectionName === 'completed_request',
    );
    const otherSections = defaults.filter(
      ({ sectionName }) =>
        sectionName !== 'urgent_request' && sectionName !== 'completed_request',
    );

    const renderScrollableSection = (section) => (
      <div key={section.sectionName}>
        {isFetched ? (
          <div className='text-md font-semibold mb-2'>
            {capitalizeFirstLetter(section.sectionName)}
          </div>
        ) : (
          <Skeleton className='h-6 w-40 mb-2' />
        )}
        <ScrollArea className='w-full whitespace-nowrap rounded-md'>
          <div className='flex'>
            {isFetched ? (
              section.requests.length > 0 ? (
                section.requests.map((props, i) => (
                  <div
                    key={props.id ?? i}
                    className='flex-shrink-0 max-w-[600px] mr-4'
                  >
                    <RequestProvider request_id={props.id}>
                      <RequestCard
                        {...{ ...props, index: i, isExpanded: false }}
                      />
                    </RequestProvider>
                  </div>
                ))
              ) : (
                <div className='w-full text-center text-muted-foreground'>
                  No requests in this section
                </div>
              )
            ) : (
              <>
                <Skeleton className='h-[200px] w-[300px] mr-4' />
                <Skeleton className='h-[200px] w-[300px] mr-4' />
                <Skeleton className='h-[200px] w-[300px] mr-4' />
              </>
            )}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    );

    const renderListSection = (sectionName: string, requests: any[]) => {
      const isExpanded = expandedSections.includes(sectionName);
      // const _visibleRequests = isExpanded ? requests : requests.slice(0, 5);

      return (
        <Accordion
          type='single'
          collapsible
          className='w-full'
          value={
            requests.length > 0 ? (isExpanded ? sectionName : '') : undefined
          }
          onValueChange={(value) => {
            if (requests.length === 0) return;
            if (value === sectionName) {
              setExpandedSections([...expandedSections, sectionName]);
            } else {
              setExpandedSections(
                expandedSections.filter((s) => s !== sectionName),
              );
            }
          }}
        >
          <AccordionItem
            value={sectionName}
            className='border rounded-lg px-4  bg-gray-50'
          >
            <AccordionTrigger
              className='text-md font-semibold'
              disabled={requests.length === 0}
            >
              <div className='flex items-center'>
                {capitalizeFirstLetter(sectionName)}
                <Badge variant='secondary' className='ml-2'>
                  {requests.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {requests.length > 0 ? (
                <div className='flex flex-col gap-4'>
                  {requests.slice(0, 5).map((props, i) => (
                    <RequestProvider key={props.id ?? i} request_id={props.id}>
                      <RequestCard
                        {...{ ...props, index: i, isExpanded: false }}
                      />
                    </RequestProvider>
                  ))}
                  {requests.length > 5 && (
                    <Collapsible>
                      <CollapsibleTrigger asChild className='mb-4 w-full'>
                        <Button variant='outline' className='w-full'>
                          <ChevronDown className='h-4 w-4 mr-2' />
                          Show More ({requests.length - 5} more)
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className='flex flex-col gap-4'>
                          {requests.slice(5).map((props, i) => (
                            <RequestProvider
                              key={props.id ?? i}
                              request_id={props.id}
                            >
                              <RequestCard
                                {...{
                                  ...props,
                                  index: i + 5,
                                  isExpanded: false,
                                }}
                              />
                            </RequestProvider>
                          ))}
                        </div>
                        <Button
                          variant='outline'
                          className='w-full mt-4'
                          onClick={() => {
                            const trigger = document.querySelector(
                              '[data-state="open"]',
                            );
                            if (trigger instanceof HTMLElement) {
                              trigger.click();
                            }
                          }}
                        >
                          <ChevronUp className='h-4 w-4 mr-2' />
                          Show Less
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </div>
              ) : (
                <div className='text-center text-muted-foreground p-4 border rounded-md'>
                  No requests in this section
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    };

    return (
      <div className='space-y-4'>
        {urgentRequests &&
          urgentRequests.requests.length > 0 &&
          renderScrollableSection(urgentRequests)}

        <div className={`${view === 'kanban' ? 'flex gap-4' : 'space-y-4'}`}>
          {otherSections.map(({ requests, sectionName }) => (
            <div
              key={sectionName}
              className={view === 'kanban' ? 'flex-1' : ''}
            >
              {isFetched ? (
                view === 'list' ? (
                  renderListSection(sectionName, requests)
                ) : (
                  <>
                    <div className='text-md font-semibold mb-2'>
                      {capitalizeFirstLetter(sectionName)}
                      <Badge variant='secondary' className='ml-2'>
                        {requests.length}
                      </Badge>
                    </div>
                    {requests.length > 0 ? (
                      <div className='flex flex-col gap-4'>
                        {requests.map((props, i) => (
                          <RequestProvider
                            key={props.id ?? i}
                            request_id={props.id}
                          >
                            <RequestCard
                              {...{ ...props, index: i, isExpanded: false }}
                            />
                          </RequestProvider>
                        ))}
                      </div>
                    ) : (
                      <div className='text-center text-muted-foreground p-4 border rounded-md'>
                        No requests in this section
                      </div>
                    )}
                  </>
                )
              ) : (
                <>
                  <Skeleton className='h-6 w-40 mb-2' />
                  <Skeleton className='h-[200px] w-full mb-4' />
                  <Skeleton className='h-[200px] w-full mb-4' />
                </>
              )}
            </div>
          ))}
        </div>

        {completedRequests &&
          completedRequests.requests.length > 0 &&
          renderScrollableSection(completedRequests)}
      </div>
    );
  };

  function formatRequestCountText(
    urgentCount: number,
    standardCount: number,
    dateString: string,
  ) {
    const urgentText =
      urgentCount > 0
        ? `${urgentCount} urgent request${urgentCount > 1 ? 's' : ''}`
        : '';
    const standardText =
      standardCount > 0
        ? `${standardCount} standard request${standardCount > 1 ? 's' : ''}`
        : '';

    let finalText = '';

    if (urgentText && standardText) {
      finalText = `${urgentText} and ${standardText} ${dateString}.`;
    } else if (urgentText) {
      finalText = `${urgentText} ${dateString}.`;
    } else if (standardText) {
      finalText = `${standardText} ${dateString}.`;
    } else {
      finalText = `No requests ${dateString}.`;
    }

    return 'You have ' + finalText;
  }
  const open_request = requestCount?.all_open_request || 0;
  const completed_percentage =
    Math.floor(
      (requestCount?.card.completed_request /
        (open_request + requestCount?.card.completed_request)) *
        100,
    ) || 0;

  return (
    <div className='space-y-2'>
      <div className='mb-2 flex flex-row justify-between'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-md font-semibold'>
            👋 Hey,{' '}
            {getFullName(recruiterUser.first_name, recruiterUser.last_name)}!
          </h1>
          <p className='text-sm text-muted-foreground'>
            {formatRequestCountText(
              requestCount?.card.urgent_request ?? 0,
              requestCount?.card.standard_request ?? 0,
              'today',
            )}
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm text-muted-foreground font-semibold'>
            {open_request} Open Requests ({completed_percentage}% complete)
          </h3>
          <Progress value={completed_percentage} className='w-full' />
        </div>
      </div>
      <div className='flex justify-end'>
        <RequestListFilter />
        <Tabs
          value={view}
          onValueChange={(value) => setView(value as 'list' | 'kanban')}
        >
          <TabsList>
            <TabsTrigger value='list'>
              <LayoutList className='h-4 w-4 mr-2' />
            </TabsTrigger>
            <TabsTrigger value='kanban'>
              <Columns className='h-4 w-4 mr-2' />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {renderContent()}
    </div>
  );
}

export default RequestList;
