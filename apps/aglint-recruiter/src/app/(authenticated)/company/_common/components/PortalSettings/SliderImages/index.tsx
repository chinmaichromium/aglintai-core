import { Button } from '@components/ui/button';
import { ImagePlus, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import UISectionCard from '@/common/UISectionCard';
import { usePortalSettings } from '@/company/context/PortalsettingsContext';

import { SliderImageUploadDialog } from './SliderImageUploadDialog';
import { useSlideRemove } from './SliderImageUploadDialog/useSlideUpdate';

export function SliderImages() {
  const {
    data: { company_images },
  } = usePortalSettings();

  const [loadingImages, setLoadingImages] = useState<string[]>([]);
  const { mutateAsync, isPending } = useSlideRemove();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <UISectionCard
      title='Company Images'
      description=' These images will be displayed on the candidate portal as the
            slider.'
    >
      <div className='flex flex-wrap gap-4'>
        {/* 5 Grey Background Divs */}
        {company_images?.map((image, index) => (
          <div
            key={index}
            className='group relative flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-md bg-gray-300'
          >
            {/* Show delete button on hover */}
            <Button
            variant={'secondary'}
            size={'sm'}
              onClick={async () => {
                setLoadingImages((pre) => [...pre, image]);
                await mutateAsync({ imageUrl: image });
                setLoadingImages((pre) => pre.filter((img) => img !== image));
              }}
              className='absolute right-2 top-2 z-20 w-7 h-7 p-0 items-center justify-center rounded-sm opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
              aria-label='Delete image' // Added for accessibility
            >
            
             <X className='w-4 h-4'/>
            </Button>

            <Image
              src={image}
              alt='company image'
              width={150}
              height={150}
              className='relative z-10 h-full w-full object-cover'
            />
            {loadingImages.includes(image) && isPending && (
              <div className='absolute left-0 top-0 z-[21] flex h-[150px] w-[150px] items-center justify-center bg-white'>
                Removing ...
              </div>
            )}
          </div>
        ))}

        <Button
          className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-2'
          variant='outline'
          onClick={() => setIsDialogOpen(true)}
        >
          <ImagePlus
            strokeWidth={1.5}
            className='h-10 w-10 text-muted-foreground'
          />
          <span className='text-sm font-normal'>Add Images</span>
        </Button>
        <SliderImageUploadDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </div>
    </UISectionCard>
  );
}
