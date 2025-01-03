import { Badge } from '@components/ui/badge';
import { Separator } from '@components/ui/separator';
import { Lightbulb } from 'lucide-react';

import { UIButton } from '@/components/Common/UIButton';
import UISectionCard from '@/components/Common/UISectionCard';

export const Availability = () => {
  return (
    <UISectionCard title='Availability & AI Instructions'>
      <div className='space-y-4'>
        <div>
          <h3 className='mb-2 text-sm font-medium text-gray-700'>
            Weekly Hours
          </h3>
          <p className='text-xl font-bold'>weeklyHours</p>
        </div>
        <div>
          <h3 className='mb-2 text-sm font-medium text-gray-700'>
            Preferred Times
          </h3>
          <div className='space-y-1'>
            {[1, 2, 3, 4, 5].map((k) => (
              <Badge key={k} variant='secondary'>
                time
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-sm font-medium text-gray-700'>
            Unavailable Dates
          </h3>
          <div className='space-y-1'>
            {[1, 2, 3, 4, 5].map((k) => (
              <Badge key={k} variant='outline'>
                date
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className='mb-2 text-sm font-medium text-gray-700'>
            AI Instructions
          </h3>
          <div className='rounded-lg bg-purple-100 p-4'>
            <div className='mb-2 flex items-center space-x-2 text-purple-800'>
              <Lightbulb className='h-5 w-5' />
              <h4 className='font-semibold'>Personalized AI Tips</h4>
            </div>
            <p className='mb-4 text-sm text-purple-700'>
              Get AI-powered suggestions to improve your interviewing skills and
              optimize your availability.
            </p>
            <UIButton className='w-full bg-purple-600 text-white hover:bg-purple-700'>
              Get AI Instructions
            </UIButton>
          </div>
        </div>
      </div>
    </UISectionCard>
  );
};
