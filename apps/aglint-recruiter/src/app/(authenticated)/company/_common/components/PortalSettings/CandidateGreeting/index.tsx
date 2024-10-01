import { ScrollArea } from '@components/ui/scroll-area';
import { CircleUser, Plus, SquarePen } from 'lucide-react';
import { useState } from 'react';

import { useFlags } from '@/company/hooks/useFlags';
import GlobalEmpty from '@/components/Common/GlobalEmpty';
import { UIButton } from '@/components/Common/UIButton';
import UISectionCard from '@/components/Common/UISectionCard';

import { GreetingEditDialog } from './GreetingEditDialog';

export default function CandidateGreeting() {
  const { greetings } = useFlags();
  const [text, setText] = useState<string>(greetings || '');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <GreetingEditDialog
        setIsDialogOpen={setIsDialogOpen}
        isDialogOpen={isDialogOpen}
        setText={setText}
        text={text}
      />

      <UISectionCard
        title='Candidate Greeting'
        description='This section content will be displayed on the candidate portal as
            the greeting message to the candidate.'
        emptyStateMessage={
          !greetings && (
            <GlobalEmpty
              icon={
                <CircleUser
                  strokeWidth={2}
                  className='h-6 w-6 text-muted-foreground'
                />
              }
              header={`No Candidate Greeting found`}
              description={`Add the Greeting  for candidate portal`}
              primaryAction={
                <UIButton
                  onClick={() => setIsDialogOpen(true)}
                  leftIcon={<Plus />}
                >
                  Add Greeting
                </UIButton>
              }
            />
          )
        }
        action={
          !!greetings && (
            <UIButton
              variant='outline'
              onClick={() => setIsDialogOpen(true)}
              size='sm'
              leftIcon={<SquarePen className='mr-2 h-3 w-3' />}
            >
              Edit
            </UIButton>
          )
        }
      >
        {greetings?.length && (
          <ScrollArea className='max-h-40 w-full rounded-md border bg-gray-100'>
            <div className='w-full space-y-4 p-4'>{greetings}</div>
          </ScrollArea>
        )}
      </UISectionCard>
    </>
  );
}
