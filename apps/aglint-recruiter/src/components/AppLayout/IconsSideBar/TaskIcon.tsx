import { Stack } from '@mui/material';
import React from 'react';

function TaskIcon() {
  return (
    <Stack direction={'row'}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.25002 4.875L5.25002 8.475C5.15002 8.625 5.01252 8.7 4.83752 8.7C4.66252 8.7 4.51252 8.6375 4.38752 8.5125L2.58752 6.7125C2.33752 6.4375 2.33752 6.1625 2.58752 5.8875C2.86252 5.6375 3.13752 5.6375 3.41252 5.8875L4.76252 7.2L7.35002 4.125C7.60002 3.85 7.87502 3.825 8.17502 4.05C8.45002 4.3 8.47502 4.575 8.25002 4.875ZM8.25002 10.875L5.25002 14.475C5.15002 14.625 5.01252 14.7 4.83752 14.7C4.66252 14.7 4.51252 14.6375 4.38752 14.5125L2.58752 12.7125C2.33752 12.4375 2.33752 12.1625 2.58752 11.8875C2.86252 11.6375 3.13752 11.6375 3.41252 11.8875L4.76252 13.2L7.35002 10.125C7.60002 9.85 7.87502 9.825 8.17502 10.05C8.45002 10.3 8.47502 10.575 8.25002 10.875ZM9.60002 6.3C9.62502 5.925 9.82502 5.725 10.2 5.7H21C21.375 5.725 21.575 5.925 21.6 6.3C21.575 6.675 21.375 6.875 21 6.9H10.2C9.82502 6.875 9.62502 6.675 9.60002 6.3ZM9.60002 12.3C9.62502 11.925 9.82502 11.725 10.2 11.7H21C21.375 11.725 21.575 11.925 21.6 12.3C21.575 12.675 21.375 12.875 21 12.9H10.2C9.82502 12.875 9.62502 12.675 9.60002 12.3ZM8.40002 18.3C8.42502 17.925 8.62502 17.725 9.00002 17.7H21C21.375 17.725 21.575 17.925 21.6 18.3C21.575 18.675 21.375 18.875 21 18.9H9.00002C8.62502 18.875 8.42502 18.675 8.40002 18.3ZM6.00002 18.3C6.00002 18.65 5.88752 18.9375 5.66252 19.1625C5.43752 19.3875 5.15002 19.5 4.80002 19.5C4.45002 19.5 4.16252 19.3875 3.93752 19.1625C3.71252 18.9375 3.60002 18.65 3.60002 18.3C3.60002 17.95 3.71252 17.6625 3.93752 17.4375C4.16252 17.2125 4.45002 17.1 4.80002 17.1C5.15002 17.1 5.43752 17.2125 5.66252 17.4375C5.88752 17.6625 6.00002 17.95 6.00002 18.3Z'
          fill='currentColor'
        />
      </svg>
    </Stack>
  );
}

export default TaskIcon;
