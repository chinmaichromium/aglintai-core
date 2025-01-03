'use client';
import { toast } from '@components/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { Loader } from '@/common/Loader';

function ImageUploadManual({
  image,
  size,
  imageFile,
  setChanges = () => {},
}: {
  image: string;
  size: number;
  imageFile: any;
  setChanges?: () => void;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [initImage, setInitImage] = useState<any>(image);

  function onImageChange(file: File) {
    if (file.size > 5 * 1000000) {
      setLoading(false);
      toast({
        title: 'Please choose the a image less than 5mb',
        variant: 'destructive',
      });
      return;
    }
    imageFile.current = file;
    if (setChanges) setChanges();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      setInitImage(e.target?.result);
    };
  }

  return (
    <div className='relative mb-2 flex items-end gap-4 rounded-lg'>
      <div className='relative'>
        <Avatar className={`w-${size} h-${size} overflow-hidden rounded-lg`}>
          <AvatarImage
            src={initImage || '/images/default/user.svg'}
            alt='Profile'
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        {loading && <Loader />}
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm text-gray-600'>
          Please upload an image that is less than 5 MB in size and in either
          PNG or JPEG format.
        </p>
        <div className='flex gap-2'>
          <FileUploader
            handleChange={onImageChange}
            name='file'
            types={['PNG', 'JPEG', 'JPG']}
          >
            <Button
              variant='secondary'
              size='sm'
              className='px-4 py-2 text-xs'
              disabled={loading}
            >
              Upload Image
            </Button>
          </FileUploader>
          {initImage && (
            <Button
              variant='outline'
              size='sm'
              className='px-4 py-2 text-xs'
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setInitImage(null);
                imageFile.current = null;
                if (setChanges) setChanges();
              }}
            >
              Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUploadManual;
