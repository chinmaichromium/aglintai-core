import { Button } from '@components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { ImagePlus } from 'lucide-react';
import { useState } from 'react';

import { usePortalSettings } from '@/components/CompanyDetailComp/hook';

import ImagesUpload from './ImagesUpload';

export function ConfigureSliderImages() {
  const { data, updateImages, deleteImages, setIsDialogOpen, isDialogOpen } =
    usePortalSettings();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const dialogClose = () => {
    setIsDialogOpen(null);
  };
  return (
    <div>
      <div className='w-full max-w-2xl space-y-4'>
        <div className='flex flex-col'>
          <h1 className='text-md font-semibold'>Company Images</h1>
          <p className='text-sm text-muted-foreground'>
            These images will be displayed on the candidate portal as the slider.
          </p>
        </div>
        <div className='grid grid-cols-4 gap-4 auto-rows-auto'>
          {/* 5 Grey Background Divs */}
          {data?.company_images?.map((image, index) => (
            <div
              key={index}
              className='bg-gray-300 rounded-md flex items-center justify-center w-[150px] h-[150px] relative'
            >
              {/*eslint-disable-next-line jsx-a11y/no-static-element-interactions*/}
              <div
                onClick={() => deleteImages(image)}
                className='absolute top-0 right-0 z-3'
              >
                X
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt='slider'
                height={150}
                width={150}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}

          <Dialog
            open={isDialogOpen === 'images'}
            onOpenChange={() => setIsDialogOpen('images')}
          >
            <DialogTrigger asChild>
              <Button
                className='flex flex-col items-center gap-2 justify-center w-[150px] h-[150px]'
                variant='outline'
                onClick={() => setIsDialogOpen('images')}
              >
                <ImagePlus strokeWidth={1.5}  className='w-10 h-10 ' />
                <span className='text-sm font-normal'>Add Images</span>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
              <DialogHeader>
                <DialogTitle>Upload Slider Images</DialogTitle>
                <DialogDescription>
                  Upload images for the slider on the candidate portal. You can
                  upload up to 5 images, each less than 5MB. Landscape
                  orientation is preferred.
                </DialogDescription>
              </DialogHeader>
              <ImagesUpload
                setSelectedImages={setSelectedImages}
                selectedImages={selectedImages}
              />
              <DialogFooter className='w-full flex flex-row gap-2 justify-between'>
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={dialogClose}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='w-full'
                  onClick={() => {
                    updateImages(selectedImages, setSelectedImages);
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
