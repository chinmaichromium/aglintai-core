import { Badge } from '@components/ui/badge';

import { RequestProvider } from '@/context/RequestContext';
import { capitalizeFirstLetter } from '@/utils/text/textUtils';

import { RequestCard } from '../_common/components/RequestCard';

function KanbanSection({
  sectionName,
  requests,
}: {
  sectionName: string;
  requests: any[];
}) {
  return (
    <>
      <div className='text-md font-semibold mb-2'>
        {capitalizeFirstLetter(sectionName)}
        <Badge variant='outline' className='ml-2'>
          {requests.length}
        </Badge>
      </div>
      {requests.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {requests.map((props, i) => (
            <RequestProvider key={props.id ?? i} request_id={props.id}>
              <RequestCard
                {...{ ...props, isExpanded: false }}
                mode='column-view'
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
  );
}
export default KanbanSection;
