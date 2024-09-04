import { GlobalIcon } from '@devlink/GlobalIcon';
import React from 'react';

function DepartmentIcon() {
  return (
    <GlobalIcon iconName='corporate_fare' />
    // <svg
    //   width='20'
    //   height='20'
    //   viewBox='0 0 20 20'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     d='M2 3C1.70833 3 1.46875 3.09375 1.28125 3.28125C1.09375 3.46875 1 3.70833 1 4V16C1 16.2917 1.09375 16.5312 1.28125 16.7188C1.46875 16.9062 1.70833 17 2 17H4V15C4.02083 14.4375 4.21875 13.9688 4.59375 13.5938C4.96875 13.2188 5.4375 13.0208 6 13C6.5625 13.0208 7.03125 13.2188 7.40625 13.5938C7.78125 13.9688 7.97917 14.4375 8 15V17H10C10.0208 17.3542 10.125 17.6771 10.3125 17.9688C10.2083 17.9896 10.1042 18 10 18H8H7H5H4H2C1.4375 17.9792 0.96875 17.7812 0.59375 17.4062C0.21875 17.0312 0.0208333 16.5625 0 16V4C0.0208333 3.4375 0.21875 2.96875 0.59375 2.59375C0.96875 2.21875 1.4375 2.02083 2 2H10C10.5625 2.02083 11.0312 2.21875 11.4062 2.59375C11.7812 2.96875 11.9792 3.4375 12 4V10.5V13.5C11.625 13.7083 11.2917 13.9688 11 14.2812V4C11 3.70833 10.9062 3.46875 10.7188 3.28125C10.5312 3.09375 10.2917 3 10 3H2ZM7 15C7 14.7083 6.90625 14.4688 6.71875 14.2812C6.53125 14.0938 6.29167 14 6 14C5.70833 14 5.46875 14.0938 5.28125 14.2812C5.09375 14.4688 5 14.7083 5 15V17H7V15ZM2 5.75C2.04167 5.29167 2.29167 5.04167 2.75 5H4.25C4.70833 5.04167 4.95833 5.29167 5 5.75V7.25C4.95833 7.70833 4.70833 7.95833 4.25 8H2.75C2.29167 7.95833 2.04167 7.70833 2 7.25V5.75ZM3 6V7H4V6H3ZM7.75 5H9.25C9.70833 5.04167 9.95833 5.29167 10 5.75V7.25C9.95833 7.70833 9.70833 7.95833 9.25 8H7.75C7.29167 7.95833 7.04167 7.70833 7 7.25V5.75C7.04167 5.29167 7.29167 5.04167 7.75 5ZM8 7H9V6H8V7ZM2 9.75C2.04167 9.29167 2.29167 9.04167 2.75 9H4.25C4.70833 9.04167 4.95833 9.29167 5 9.75V11.25C4.95833 11.7083 4.70833 11.9583 4.25 12H2.75C2.29167 11.9583 2.04167 11.7083 2 11.25V9.75ZM3 10V11H4V10H3ZM7.75 9H9.25C9.70833 9.04167 9.95833 9.29167 10 9.75V11.25C9.95833 11.7083 9.70833 11.9583 9.25 12H7.75C7.29167 11.9583 7.04167 11.7083 7 11.25V9.75C7.04167 9.29167 7.29167 9.04167 7.75 9ZM8 11H9V10H8V11ZM14 10.5C14.0208 11.0625 14.2708 11.5 14.75 11.8125C15.25 12.0625 15.75 12.0625 16.25 11.8125C16.7292 11.5 16.9792 11.0625 17 10.5C16.9792 9.9375 16.7292 9.5 16.25 9.1875C15.75 8.9375 15.25 8.9375 14.75 9.1875C14.2708 9.5 14.0208 9.9375 14 10.5ZM18 10.5C17.9792 11.4375 17.5625 12.1562 16.75 12.6562C15.9167 13.1146 15.0833 13.1146 14.25 12.6562C13.4375 12.1562 13.0208 11.4375 13 10.5C13.0208 9.5625 13.4375 8.84375 14.25 8.34375C15.0833 7.88542 15.9167 7.88542 16.75 8.34375C17.5625 8.84375 17.9792 9.5625 18 10.5ZM12 16.9062C12 16.9688 12.0312 17 12.0938 17H18.9062C18.9688 17 19 16.9688 19 16.9062C18.9792 16.3646 18.7917 15.9167 18.4375 15.5625C18.0833 15.2083 17.6354 15.0208 17.0938 15H13.9062C13.3646 15.0208 12.9167 15.2083 12.5625 15.5625C12.2083 15.9167 12.0208 16.3646 12 16.9062ZM13.9062 14H15.5H17.0938C17.9062 14.0208 18.5938 14.3021 19.1562 14.8438C19.6979 15.4062 19.9792 16.0938 20 16.9062C20 17.2188 19.8958 17.4792 19.6875 17.6875C19.4792 17.8958 19.2188 18 18.9062 18H12.0938C11.7812 18 11.5208 17.8958 11.3125 17.6875C11.1042 17.4792 11 17.2188 11 16.9062C11.0208 16.0938 11.3021 15.4062 11.8438 14.8438C12.4062 14.3021 13.0938 14.0208 13.9062 14Z'
    //     fill='#2F3941'
    //   />
    // </svg>
  );
}

export default DepartmentIcon;
