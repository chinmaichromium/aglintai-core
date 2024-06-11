import { Stack, Typography } from '@mui/material';
import React from 'react';

import { GlobalIcon } from '@/devlink/GlobalIcon';

function InterviewScoreCard({ overAllScore }) {
  return (
    <>
      <Stack
        borderRadius={'var(-radius-4)'}
        bgcolor={
          overAllScore >= 90
            ? '#edf8f4'
            : overAllScore >= 70
            ? '#fff7ed'
            : overAllScore >= 50
            ? '#ffeedb'
            : '#fff0f1'
        }
        height={'100%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <GlobalIcon iconName='speed' />
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
        >
          <path
            d='M9.00067 11.9263C8.41848 11.9263 7.86015 11.695 7.44848 11.2833C7.03682 10.8717 6.80554 10.3133 6.80554 9.73114C6.80554 8.91162 7.25189 8.19455 7.90311 7.82138L15.008 3.70918L10.9616 10.7189C10.5958 11.436 9.85676 11.9263 9.00067 11.9263ZM9.00067 2.41406C10.3251 2.41406 11.5616 2.77992 12.6373 3.37992L11.1007 4.26528C10.4641 4.0165 9.73237 3.87748 9.00067 3.87748C7.44818 3.87748 5.95928 4.4942 4.86151 5.59197C3.76373 6.68975 3.14701 8.17865 3.14701 9.73114C3.14701 11.3482 3.79823 12.8116 4.8592 13.8653H4.86652C5.15189 14.1506 5.15189 14.6116 4.86652 14.897C4.58115 15.1824 4.11286 15.1824 3.8275 14.9043C2.50311 13.5799 1.68359 11.7506 1.68359 9.73114C1.68359 7.79053 2.4545 5.9294 3.82671 4.55718C5.19893 3.18497 7.06006 2.41406 9.00067 2.41406ZM16.3177 9.73114C16.3177 11.7506 15.4982 13.5799 14.1738 14.9043C13.8885 15.1824 13.4275 15.1824 13.1421 14.897C12.8568 14.6116 12.8568 14.1506 13.1421 13.8653C14.2031 12.8043 14.8543 11.3482 14.8543 9.73114C14.8543 8.99943 14.7153 8.26772 14.4592 7.60918L15.3446 6.0726C15.9519 7.17016 16.3177 8.39943 16.3177 9.73114Z'
            fill='#2F3941'
          />
        </svg> */}
        <Typography
          color={
            overAllScore >= 90
              ? '#228F67'
              : overAllScore >= 70
              ? '#f79a3e'
              : overAllScore >= 50
              ? '#de701d'
              : '#d93f4c'
          }
          height={'24px'}
          fontWeight={600}
          fontSize={'18px'}
        >
          {overAllScore}/100
        </Typography>
      </Stack>
    </>
  );
}

export default InterviewScoreCard;
