import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Building2, Loader2, Trash2, Upload, UserCircle } from 'lucide-react';
import { type MutableRefObject, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { useRouterPro } from '@/hooks/useRouterPro';
import ROUTES from '@/utils/routing/routes';

function ImageUploadManual({
  image,
  size = 64,
  imageFile,
  setChanges = null,
}: {
  image: string;
  size: number;
  imageFile: MutableRefObject<File>;
  setChanges?: () => void;
}) {
  const router = useRouterPro();
  const [loading, setLoading] = useState<boolean>();
  const [isStackHovered, setIsStackHovered] = useState(false);

  const [initImage, setInitImage] = useState<any>(image);

  function onImageChange(file: File) {
    if (file.size > 5 * 1000000) {
      setLoading(false);
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
        <Avatar className={`w-[${size}px] h-[${size}px] rounded-lg`}>
          <AvatarImage
            src={initImage || '/images/emptyProfile.jpg'}
            alt='Profile'
            className='object-cover'
          />
          <AvatarFallback>
            {router.pathName.includes(ROUTES['/profile']()) ? (
              <UserCircle className='h-6 w-6 text-neutral-600' />
            ) : (
              <Building2 className='h-6 w-6 text-neutral-600' />
            )}
          </AvatarFallback>
        </Avatar>

        {loading && (
          <div className='absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black bg-opacity-50'>
            <Loader2 className='h-6 w-6 animate-spin text-white' />
          </div>
        )}
        <div className='z-1 absolute inset-0 flex items-center justify-center'>
          {!initImage ? (
            <FileUploader
              focus={false}
              handleChange={onImageChange}
              name='file'
              types={['PNG', 'JPEG', 'JPG']}
            >
              <div className='focus:outline-none'>
                <Upload
                  className={`h-5 w-5 ${isStackHovered ? 'opacity-100' : 'opacity-0'} focus:border-none focus:outline-none`}
                />
              </div>
            </FileUploader>
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center rounded-lg transition-all duration-500 ${isStackHovered ? 'bg-neutral-200 bg-opacity-50' : ''}`}
            >
              {initImage && isStackHovered && (
                <div className='flex rounded-lg bg-opacity-70'>
                  <Trash2
                    onClick={(e) => {
                      e.stopPropagation();
                      setInitImage(null);
                      imageFile.current = null;
                      if (setChanges) setChanges();
                    }}
                    className='focus:outline-non h-5 w-5'
                  />
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
