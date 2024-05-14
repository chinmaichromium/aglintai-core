import { Database } from '@aglint/shared-types';
import { Stack } from '@mui/material';

import { ShowCode } from '@/src/components/Common/ShowCode';

function IconScheduleType({
  type,
}: {
  type: Database['public']['Enums']['interview_schedule_type'];
}) {
  return (
    <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <ShowCode>
        <ShowCode.When isTrue={type == 'in_person_meeting'}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.75 7.5C12.7188 6.4375 12.3516 5.55469 11.6484 4.85156C10.9453 4.14844 10.0625 3.78125 9 3.75C7.9375 3.78125 7.05469 4.14844 6.35156 4.85156C5.64844 5.55469 5.28125 6.4375 5.25 7.5C5.25 7.875 5.38281 8.36719 5.64844 8.97656C5.91406 9.60156 6.25 10.25 6.65625 10.9219C7.0625 11.5781 7.47656 12.1875 7.89844 12.75C8.32031 13.3281 8.6875 13.8125 9 14.2031C9.3125 13.8125 9.67969 13.3281 10.1016 12.75C10.5234 12.1875 10.9375 11.5781 11.3438 10.9219C11.7656 10.25 12.1094 9.60156 12.375 8.97656C12.625 8.36719 12.75 7.875 12.75 7.5ZM13.5 7.5C13.4688 8.20312 13.2188 9.01562 12.75 9.9375C12.2656 10.8594 11.7188 11.75 11.1094 12.6094C10.5 13.4844 9.98438 14.1797 9.5625 14.6953C9.40625 14.8828 9.21875 14.9766 9 14.9766C8.78125 14.9766 8.59375 14.8828 8.4375 14.6953C8.01562 14.1797 7.5 13.4844 6.89062 12.6094C6.28125 11.75 5.73438 10.8594 5.25 9.9375C4.78125 9.01562 4.53125 8.20312 4.5 7.5C4.53125 6.21875 4.96875 5.15625 5.8125 4.3125C6.65625 3.46875 7.71875 3.03125 9 3C10.2812 3.03125 11.3438 3.46875 12.1875 4.3125C13.0312 5.15625 13.4688 6.21875 13.5 7.5ZM7.875 7.5C7.89062 7.92188 8.07812 8.25 8.4375 8.48438C8.8125 8.67188 9.1875 8.67188 9.5625 8.48438C9.92188 8.25 10.1094 7.92188 10.125 7.5C10.1094 7.07812 9.92188 6.75 9.5625 6.51562C9.1875 6.32812 8.8125 6.32812 8.4375 6.51562C8.07812 6.75 7.89062 7.07812 7.875 7.5ZM9 9.375C8.29688 9.35938 7.75781 9.04688 7.38281 8.4375C7.03906 7.8125 7.03906 7.1875 7.38281 6.5625C7.75781 5.95312 8.29688 5.64062 9 5.625C9.70312 5.64062 10.2422 5.95312 10.6172 6.5625C10.9609 7.1875 10.9609 7.8125 10.6172 8.4375C10.2422 9.04688 9.70312 9.35938 9 9.375Z'
              fill='#2F3941'
            />
          </svg>
        </ShowCode.When>
        <ShowCode.When isTrue={type == 'phone_call'}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.8125 9.44531L14.4375 10.5703C14.6406 10.6641 14.7969 10.8125 14.9062 11.0156C15 11.2031 15.0234 11.4062 14.9766 11.625L14.4141 14.25C14.2891 14.7188 13.9844 14.9688 13.5 15C13.3594 15 13.2188 15 13.0781 15C12.9688 14.9844 12.8594 14.9766 12.75 14.9766C10.9219 14.8203 9.27344 14.2656 7.80469 13.3125C6.33594 12.3594 5.17188 11.1172 4.3125 9.58594C3.45312 8.07031 3.01562 6.375 3 4.5C3.03125 4.01562 3.28125 3.71094 3.75 3.58594L6.375 3.02344C6.59375 2.97656 6.79688 3.00781 6.98438 3.11719C7.1875 3.21094 7.33594 3.35937 7.42969 3.5625L8.55469 6.1875C8.71094 6.60938 8.61719 6.97656 8.27344 7.28906L7.33594 8.0625C7.97656 9.15625 8.84375 10.0234 9.9375 10.6641L10.7109 9.72656C11.0234 9.38281 11.3906 9.28906 11.8125 9.44531ZM13.5 14.25C13.5938 14.25 13.6562 14.2031 13.6875 14.1094L14.25 11.4844C14.2656 11.375 14.2266 11.3047 14.1328 11.2734L11.5078 10.1484C11.4297 10.1172 11.3594 10.1328 11.2969 10.1953L10.5234 11.1562C10.2422 11.4375 9.92188 11.4922 9.5625 11.3203C8.34375 10.6172 7.38281 9.65625 6.67969 8.4375C6.50781 8.07812 6.5625 7.75781 6.84375 7.47656L7.80469 6.70312C7.86719 6.64062 7.88281 6.57031 7.85156 6.49219L6.72656 3.86719C6.67969 3.77344 6.60938 3.73437 6.51562 3.75L3.89062 4.3125C3.79688 4.34375 3.75 4.40625 3.75 4.5C3.76562 6.3125 4.21094 7.95312 5.08594 9.42188C5.94531 10.8906 7.10938 12.0547 8.57812 12.9141C10.0469 13.7891 11.6875 14.2344 13.5 14.25Z'
              fill='#2F3941'
            />
          </svg>
        </ShowCode.When>
        <ShowCode.When isTrue={type == 'google_meet'}>
          <svg
            width='24'
            height='20'
            viewBox='0 0 24 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 5C4.70833 5 4.46875 5.09375 4.28125 5.28125C4.09375 5.46875 4 5.70833 4 6V14C4 14.2917 4.09375 14.5312 4.28125 14.7188C4.46875 14.9062 4.70833 15 5 15H13C13.2917 15 13.5312 14.9062 13.7188 14.7188C13.9062 14.5312 14 14.2917 14 14V6C14 5.70833 13.9062 5.46875 13.7188 5.28125C13.5312 5.09375 13.2917 5 13 5H5ZM3 6C3.02083 5.4375 3.21875 4.96875 3.59375 4.59375C3.96875 4.21875 4.4375 4.02083 5 4H13C13.5625 4.02083 14.0312 4.21875 14.4062 4.59375C14.7812 4.96875 14.9792 5.4375 15 6V7.46875V12.5312V14C14.9792 14.5625 14.7812 15.0312 14.4062 15.4062C14.0312 15.7812 13.5625 15.9792 13 16H5C4.4375 15.9792 3.96875 15.7812 3.59375 15.4062C3.21875 15.0312 3.02083 14.5625 3 14V6ZM19.2188 14.8438L16 13.0625V11.9375L19.7188 13.9688C19.7396 13.9896 19.7708 14 19.8125 14C19.9167 14 19.9792 13.9375 20 13.8125V6.1875C19.9792 6.08333 19.9167 6.02083 19.8125 6C19.7708 6 19.7396 6.01042 19.7188 6.03125L16 8.0625V6.9375L19.2188 5.15625C19.4062 5.05208 19.6042 5 19.8125 5C20.1458 5 20.4271 5.11458 20.6562 5.34375C20.8854 5.57292 21 5.85417 21 6.1875V13.8125C21 14.1458 20.8854 14.4271 20.6562 14.6562C20.4271 14.8854 20.1458 15 19.8125 15C19.6042 15 19.4062 14.9479 19.2188 14.8438Z'
              fill='#2F3941'
            />
          </svg>
        </ShowCode.When>
        <ShowCode.When isTrue={type === 'zoom'}>
          <svg
            width='24'
            height='20'
            viewBox='0 0 24 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 5C4.70833 5 4.46875 5.09375 4.28125 5.28125C4.09375 5.46875 4 5.70833 4 6V14C4 14.2917 4.09375 14.5312 4.28125 14.7188C4.46875 14.9062 4.70833 15 5 15H13C13.2917 15 13.5312 14.9062 13.7188 14.7188C13.9062 14.5312 14 14.2917 14 14V6C14 5.70833 13.9062 5.46875 13.7188 5.28125C13.5312 5.09375 13.2917 5 13 5H5ZM3 6C3.02083 5.4375 3.21875 4.96875 3.59375 4.59375C3.96875 4.21875 4.4375 4.02083 5 4H13C13.5625 4.02083 14.0312 4.21875 14.4062 4.59375C14.7812 4.96875 14.9792 5.4375 15 6V7.46875V12.5312V14C14.9792 14.5625 14.7812 15.0312 14.4062 15.4062C14.0312 15.7812 13.5625 15.9792 13 16H5C4.4375 15.9792 3.96875 15.7812 3.59375 15.4062C3.21875 15.0312 3.02083 14.5625 3 14V6ZM19.2188 14.8438L16 13.0625V11.9375L19.7188 13.9688C19.7396 13.9896 19.7708 14 19.8125 14C19.9167 14 19.9792 13.9375 20 13.8125V6.1875C19.9792 6.08333 19.9167 6.02083 19.8125 6C19.7708 6 19.7396 6.01042 19.7188 6.03125L16 8.0625V6.9375L19.2188 5.15625C19.4062 5.05208 19.6042 5 19.8125 5C20.1458 5 20.4271 5.11458 20.6562 5.34375C20.8854 5.57292 21 5.85417 21 6.1875V13.8125C21 14.1458 20.8854 14.4271 20.6562 14.6562C20.4271 14.8854 20.1458 15 19.8125 15C19.6042 15 19.4062 14.9479 19.2188 14.8438Z'
              fill='#2F3941'
            />
          </svg>
        </ShowCode.When>
      </ShowCode>
    </Stack>
  );
}

export default IconScheduleType;
