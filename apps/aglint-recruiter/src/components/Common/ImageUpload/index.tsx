import UploadIcon from '@mui/icons-material/Upload';
import { Avatar, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { LoaderSvg } from '@/devlink/LoaderSvg';
import { GlobalIcon } from '@/devlink3/GlobalIcon';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import ROUTES from '@/src/utils/routing/routes';
import { supabase } from '@/src/utils/supabase/client';

function ImageUpload({
  setImage,
  image,
  size,
  table,
  handleUpdateProfile = null,
  dynamic = false,
  changeCallback,
  error,
}: {
  setImage?: Dispatch<SetStateAction<string>>;
  image: string;
  size: number;
  table: 'company-logo' | 'recruiter-user';
  handleUpdateProfile?: any;
  dynamic?: boolean;
  changeCallback?: any;
  error?: any;
}) {
  const router = useRouter();
  const [isStackHovered, setIsStackHovered] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>();
  const { userDetails } = useAuthDetails();

  const setProfilePicture = async (file) => {
    setLoading(true);
    if (file.size > 5 * 1000000) {
      error && error(true);

      setLoading(false);
      return;
    }
    const { data } = await supabase.storage
      .from(table)
      .upload(`public/${userDetails?.user?.id}`, file, {
        cacheControl: '3600',
        upsert: true,
      });
    if (data?.path) {
      error && error(false);
      if (setImage)
        setImage(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${table}/${data?.path}?t=${new Date().toISOString()}`,
        );
      changeCallback &&
        changeCallback(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${table}/${data?.path}?t=${new Date().toISOString()}`,
        );

      if (handleUpdateProfile) {
        await handleUpdateProfile({
          profile_image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${table}/${data?.path}?t=${new Date().toISOString()}`,
        });
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <Stack direction={'row'} justifyContent={'center'}>
        <Stack
          position={'relative'}
          sx={{
            borderRadius: 'var(--radius-3)',
            borderColor: 'var(--neutral-12)',
          }}
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={() => setIsStackHovered(false)}
        >
          <Stack>
            <Avatar
              src={image}
              sx={{
                width: dynamic ? '100%' : size,
                height: dynamic ? '100%' : size,
                borderRadius: 'var(--radius-4)',
                '& .MuiAvatar-img ': {
                  objectFit: 'cover',
                },
                textTransform: 'capitalize',
                bgcolor: 'transparent',
              }}
              variant='square'
            >
              {router.route.includes(ROUTES['/profile']()) ? (
                <Icon
                  variant='UserSolo'
                  height='32'
                  width='32'
                  color='var(--neutral-11)'
                />
              ) : (
                <Icon
                  variant='CompanyOutlinedBig'
                  height='100%'
                  width='100%'
                  color='var(--neutral-11)'
                />
              )}
            </Avatar>
            {image && (
              <Stack position={'absolute'} bottom={-10} left={26}></Stack>
            )}
          </Stack>
          {loading && (
            <Stack
              height={`${size}px`}
              width={`${size}px`}
              sx={{
                zIndex: 10,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <LoaderSvg />
            </Stack>
          )}
          <Stack
            sx={{
              zIndex: 1,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {!image ? (
              <FileUploader
                handleChange={setProfilePicture}
                name='file'
                types={['PNG', 'JPEG', 'JPG']}
              >
                <Stack
                  id={'image-upload'}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease',
                    opacity: isStackHovered ? 1 : 0,
                    borderRadius: 'var(--radius-3)',
                    mt: 'var(--space-1)',
                  }}
                  height={`${size}px`}
                  width={`${size}px`}
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <UploadIcon
                    fontSize='medium'
                    sx={{
                      position: 'absolute',
                      color: 'var(--neutral-12)',
                      top: 0,
                      right: 0,
                    }}
                  />
                </Stack>
              </FileUploader>
            ) : (
              <Stack
                height={`${size}px`}
                width={`${size}px`}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                  transition: 'all 0.5s ease',
                  opacity: isStackHovered ? 1 : 0,
                  background: isStackHovered
                    ? 'var(--nutral-5)'
                    : 'transparent',
                  borderRadius: 'var(--radius-4)',
                }}
              >
                {image && (
                  <Stack
                    direction={'row'}
                    spacing={1}
                    sx={{
                      transition: 'all 0.5s ease',
                      visibility: isStackHovered ? 'visible' : 'hidden',
                      opacity: isStackHovered ? 1 : 0,
                    }}
                  >
                    <FileUploader
                      handleChange={setProfilePicture}
                      name='file'
                      types={['PNG', 'JPEG', 'JPG']}
                    >
                      <Stack
                        id={'image-upload'}
                        sx={{
                          cursor: 'pointer',
                          color: 'var(--white)',
                          transition: '',
                        }}
                      >
                        <GlobalIcon iconName='restart_alt' size={4}/>
                      </Stack>
                    </FileUploader>

                    <Stack
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (setImage) setImage(null);
                        if (handleUpdateProfile)
                          await handleUpdateProfile({ profile_image: null });
                      }}
                      sx={{ color: 'var(--white)', cursor: 'pointer' }}
                    >
                      <GlobalIcon iconName='delete' size={4}/>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ImageUpload;
