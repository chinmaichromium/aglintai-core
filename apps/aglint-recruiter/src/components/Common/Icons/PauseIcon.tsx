import React from 'react';

function PauseIcon({
  size = 20,
  color = '#F79A3E',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.5 5C6.1875 5.02083 6.02083 5.1875 6 5.5V14.5C6.02083 14.8125 6.1875 14.9792 6.5 15H8C8.3125 14.9792 8.47917 14.8125 8.5 14.5V5.5C8.47917 5.1875 8.3125 5.02083 8 5H6.5ZM5 5.5C5.02083 5.08333 5.16667 4.72917 5.4375 4.4375C5.72917 4.16667 6.08333 4.02083 6.5 4H8C8.41667 4.02083 8.77083 4.16667 9.0625 4.4375C9.33333 4.72917 9.47917 5.08333 9.5 5.5V14.5C9.47917 14.9167 9.33333 15.2708 9.0625 15.5625C8.77083 15.8333 8.41667 15.9792 8 16H6.5C6.08333 15.9792 5.72917 15.8333 5.4375 15.5625C5.16667 15.2708 5.02083 14.9167 5 14.5V5.5ZM12 5C11.6875 5.02083 11.5208 5.1875 11.5 5.5V14.5C11.5208 14.8125 11.6875 14.9792 12 15H13.5C13.8125 14.9792 13.9792 14.8125 14 14.5V5.5C13.9792 5.1875 13.8125 5.02083 13.5 5H12ZM10.5 5.5C10.5208 5.08333 10.6667 4.72917 10.9375 4.4375C11.2292 4.16667 11.5833 4.02083 12 4H13.5C13.9167 4.02083 14.2708 4.16667 14.5625 4.4375C14.8333 4.72917 14.9792 5.08333 15 5.5V14.5C14.9792 14.9167 14.8333 15.2708 14.5625 15.5625C14.2708 15.8333 13.9167 15.9792 13.5 16H12C11.5833 15.9792 11.2292 15.8333 10.9375 15.5625C10.6667 15.2708 10.5208 14.9167 10.5 14.5V5.5Z'
        fill={color}
      />
    </svg>
  );
}

export default PauseIcon;
