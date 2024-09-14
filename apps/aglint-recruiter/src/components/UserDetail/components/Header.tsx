import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Card, CardContent } from '@components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { UIButton } from '@/components/Common/UIButton';

export const Header = ({
  avatar,
  name,
  role,
  department,
  location,
  timeZone,
  email,
  phone,
  setIsOpen,
  userCardRef,
}) => {
  return (
    <>
      <Card className='mb-8' ref={userCardRef}>
        <CardContent className='p-6'>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-4'>
              <Avatar className='h-24 w-24'>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>{name}</h2>
                <p className=' text-gray-600'>
                  {role} - {department}
                </p>
                <div className='flex items-center mt-2 space-x-4'>
                  <span className='flex items-center text-sm text-gray-500'>
                    <MapPin className='h-4 w-4 mr-1' />
                    {location}
                  </span>
                  <span className='flex items-center text-sm text-gray-500'>
                    <Clock className='h-4 w-4 mr-1' />
                    {timeZone}
                  </span>
                </div>
                <div className='flex items-center mt-2 space-x-4'>
                  <span className='flex items-center text-sm text-gray-500'>
                    <Mail className='h-4 w-4 mr-1' />
                    {email}
                  </span>
                  <span className='flex items-center text-sm text-gray-500'>
                    <Phone className='h-4 w-4 mr-1' />
                    {phone}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-end space-y-2'>
              {/* <UIButton>Schedule Interview</UIButton> */}
              <UIButton
                variant='outline'
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Edit Profile
              </UIButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
