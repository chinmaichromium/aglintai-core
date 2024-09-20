import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { Lightbulb } from 'lucide-react';

import { Badges } from './Badges';
import { Overview } from './Overview';

export const Insights = () => {
  return (
    <Accordion type='single' defaultValue='insights' collapsible>
      <AccordionItem value='insights'>
        <AccordionTrigger>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Lightbulb size={16} />
              <span className='font-medium'>Insights</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='space-y-4'>
            <Overview />
            <Badges />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Insights;