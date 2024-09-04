import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import {
  Building2,
  Loader2,
  RotateCw,
  Trash2,
  Upload,
  UserCircle,
} from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import ROUTES from '@/utils/routing/routes';

function ImageUploadManual({
  image,
  size,
  imageFile,
  setChanges = null,
}: {
  image: string;
  size: number;
  imageFile: any;
  setChanges?: () => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [isStackHovered, setIsStackHovered] = useState(false);

  const [initImage, setInitImage] = useState<any>(image);

  function onImageChange(file: File) {
    if (file.size > 5 * 1000000) {
      setLoading(false);
      // toast({
      //   variant: 'destructive',
      //   title: 'Error',
      //   description: 'File size is too large. Maximum size is 5MB.',
      // });
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
    <div className='flex justify-center'>
      <div
        className='relative rounded-md'
        onMouseEnter={() => setIsStackHovered(true)}
        onMouseLeave={() => setIsStackHovered(false)}
      >
        <Avatar className={`w-${size} h-${size} rounded-lg`}>
          <AvatarImage
            src={initImage || '/images/emptyProfile.jpg'}
            alt='Profile'
            className='object-cover'
          />
          <AvatarFallback>
            {router.route.includes(ROUTES['/profile']()) ? (
              <UserCircle className='w-6 h-6 text-neutral-600' />
            ) : (
              <Building2 className='w-6 h-6 text-neutral-600' />
            )}
          </AvatarFallback>
        </Avatar>

        {loading && (
          <div className='absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 rounded-lg'>
            <Loader2 className='w-6 h-6 text-white animate-spin' />
          </div>
        )}

        <div className='absolute inset-0 flex items-center justify-center z-1'>
          {!initImage ? (
            <FileUploader
              handleChange={onImageChange}
              name='file'
              types={['PNG', 'JPEG', 'JPG']}
            >
              <Button
                variant='ghost'
                size='icon'
                className={`transition-opacity duration-500 ${isStackHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <Upload className='w-6 h-6' />
              </Button>
            </FileUploader>
          ) : (
            <div
              className={`flex items-center justify-center w-full h-full rounded-lg transition-all duration-500 ${isStackHovered ? 'bg-neutral-200 bg-opacity-50' : ''}`}
            >
              {initImage && isStackHovered && (
                <div className='flex bg-black bg-opacity-70 rounded-lg'>
                  <FileUploader
                    handleChange={onImageChange}
                    name='file'
                    types={['PNG', 'JPEG', 'JPG']}
                  >
                    <Button variant='ghost' size='icon' className='text-white'>
                      <RotateCw className='w-4 h-4' />
                    </Button>
                  </FileUploader>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white'
                    onClick={(e) => {
                      e.stopPropagation();
                      setInitImage(null);
                      imageFile.current = null;
                      if (setChanges) setChanges();
                    }}
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUploadManual;
