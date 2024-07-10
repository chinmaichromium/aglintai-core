import { DatabaseTable } from '@aglint/shared-types';
import { Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';

import { GlobalBadge } from '@/devlink/GlobalBadge';

function InterviewerAcceptDeclineIcon({
  type,
}: {
  type: DatabaseTable['interview_session_relation']['accepted_status'];
}) {
  return (
    <>
      {type === 'request_reschedule' && (
        <Tooltip
          title={
            <React.Fragment>
              <Typography variant='body2'>Requested Reschedule</Typography>
            </React.Fragment>
          }
        >
          <Stack>
            <GlobalBadge
              iconName={'event_repeat'}
              size={1}
              showIcon={true}
              textBadge={null}
              color={'warning'}
              // showText={false}
            />
          </Stack>
        </Tooltip>
      )}
      {type == 'waiting' && (
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.041 7.6615L3.377 5.9975C3.31456 5.93506 3.23806 5.90172 3.1475 5.8975C3.05683 5.89317 2.97606 5.9265 2.90517 5.9975C2.83417 6.06839 2.79867 6.147 2.79867 6.23333C2.79867 6.31967 2.83417 6.39828 2.90517 6.46917L4.66417 8.22817C4.77183 8.33583 4.89744 8.38967 5.041 8.38967C5.18456 8.38967 5.31022 8.33583 5.418 8.22817L9.06917 4.577C9.13161 4.51456 9.16495 4.43806 9.16917 4.3475C9.1735 4.25683 9.14017 4.17606 9.06917 4.10517C8.99828 4.03417 8.91967 3.99867 8.83333 3.99867C8.747 3.99867 8.66839 4.03417 8.5975 4.10517L5.041 7.6615ZM6.00217 12C5.1725 12 4.39244 11.8426 3.662 11.5277C2.93167 11.2128 2.29633 10.7854 1.756 10.2457C1.21567 9.70589 0.787944 9.07111 0.472833 8.34133C0.157611 7.61167 0 6.83194 0 6.00217C0 5.1725 0.157444 4.39244 0.472333 3.662C0.787222 2.93167 1.21456 2.29633 1.75433 1.756C2.29411 1.21567 2.92889 0.787944 3.65867 0.472833C4.38833 0.157611 5.16806 0 5.99783 0C6.8275 0 7.60756 0.157445 8.338 0.472334C9.06833 0.787223 9.70367 1.21456 10.244 1.75433C10.7843 2.29411 11.2121 2.92889 11.5272 3.65867C11.8424 4.38833 12 5.16806 12 5.99783C12 6.8275 11.8426 7.60756 11.5277 8.338C11.2128 9.06833 10.7854 9.70367 10.2457 10.244C9.70589 10.7843 9.07111 11.2121 8.34133 11.5272C7.61167 11.8424 6.83194 12 6.00217 12ZM6 11.3333C7.48889 11.3333 8.75 10.8167 9.78333 9.78333C10.8167 8.75 11.3333 7.48889 11.3333 6C11.3333 4.51111 10.8167 3.25 9.78333 2.21667C8.75 1.18333 7.48889 0.666667 6 0.666667C4.51111 0.666667 3.25 1.18333 2.21667 2.21667C1.18333 3.25 0.666667 4.51111 0.666667 6C0.666667 7.48889 1.18333 8.75 2.21667 9.78333C3.25 10.8167 4.51111 11.3333 6 11.3333Z'
            fill='#DAD9D6'
          />
        </svg>
      )}
      {type == 'accepted' && (
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.041 7.6615L3.377 5.9975C3.31456 5.93506 3.23806 5.90172 3.1475 5.8975C3.05683 5.89317 2.97606 5.9265 2.90517 5.9975C2.83417 6.06839 2.79867 6.147 2.79867 6.23333C2.79867 6.31967 2.83417 6.39828 2.90517 6.46917L4.66417 8.22817C4.77183 8.33583 4.89744 8.38967 5.041 8.38967C5.18456 8.38967 5.31022 8.33583 5.418 8.22817L9.06917 4.577C9.13161 4.51456 9.16495 4.43806 9.16917 4.3475C9.1735 4.25683 9.14017 4.17606 9.06917 4.10517C8.99828 4.03417 8.91967 3.99867 8.83333 3.99867C8.747 3.99867 8.66839 4.03417 8.5975 4.10517L5.041 7.6615ZM6.00217 12C5.1725 12 4.39244 11.8426 3.662 11.5277C2.93167 11.2128 2.29633 10.7854 1.756 10.2457C1.21567 9.70589 0.787944 9.07111 0.472833 8.34133C0.157611 7.61167 0 6.83194 0 6.00217C0 5.1725 0.157444 4.39244 0.472333 3.662C0.787222 2.93167 1.21456 2.29633 1.75433 1.756C2.29411 1.21567 2.92889 0.787944 3.65867 0.472833C4.38833 0.157611 5.16806 0 5.99783 0C6.8275 0 7.60756 0.157445 8.338 0.472334C9.06833 0.787223 9.70367 1.21456 10.244 1.75433C10.7843 2.29411 11.2121 2.92889 11.5272 3.65867C11.8424 4.38833 12 5.16806 12 5.99783C12 6.8275 11.8426 7.60756 11.5277 8.338C11.2128 9.06833 10.7854 9.70367 10.2457 10.244C9.70589 10.7843 9.07111 11.2121 8.34133 11.5272C7.61167 11.8424 6.83194 12 6.00217 12Z'
            fill='#29A383'
          />
        </svg>
      )}
      {type == 'declined' && (
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 6.47183L8.16417 8.63583C8.2265 8.69828 8.303 8.73161 8.39367 8.73583C8.48422 8.74017 8.56495 8.70683 8.63583 8.63583C8.70683 8.56495 8.74233 8.48633 8.74233 8.4C8.74233 8.31367 8.70683 8.23506 8.63583 8.16417L6.47183 6L8.63583 3.83583C8.69828 3.7735 8.73161 3.697 8.73583 3.60633C8.74017 3.51578 8.70683 3.43506 8.63583 3.36417C8.56495 3.29317 8.48633 3.25767 8.4 3.25767C8.31367 3.25767 8.23505 3.29317 8.16417 3.36417L6 5.52817L3.83583 3.36417C3.7735 3.30172 3.697 3.26839 3.60633 3.26417C3.51578 3.25983 3.43506 3.29317 3.36417 3.36417C3.29317 3.43506 3.25767 3.51367 3.25767 3.6C3.25767 3.68633 3.29317 3.76495 3.36417 3.83583L5.52817 6L3.36417 8.16417C3.30172 8.2265 3.26839 8.303 3.26417 8.39367C3.25983 8.48422 3.29317 8.56495 3.36417 8.63583C3.43506 8.70683 3.51367 8.74233 3.6 8.74233C3.68633 8.74233 3.76494 8.70683 3.83583 8.63583L6 6.47183ZM6.00217 12C5.1725 12 4.39244 11.8426 3.662 11.5277C2.93167 11.2128 2.29633 10.7854 1.756 10.2457C1.21567 9.70589 0.787944 9.07111 0.472833 8.34133C0.157611 7.61167 0 6.83194 0 6.00217C0 5.1725 0.157444 4.39244 0.472333 3.662C0.787222 2.93167 1.21456 2.29633 1.75433 1.756C2.29411 1.21567 2.92889 0.787944 3.65867 0.472833C4.38833 0.157611 5.16806 0 5.99783 0C6.8275 0 7.60756 0.157445 8.338 0.472334C9.06833 0.787223 9.70367 1.21456 10.244 1.75433C10.7843 2.29411 11.2121 2.92889 11.5272 3.65867C11.8424 4.38833 12 5.16806 12 5.99783C12 6.8275 11.8426 7.60756 11.5277 8.338C11.2128 9.06833 10.7854 9.70367 10.2457 10.244C9.70589 10.7843 9.07111 11.2121 8.34133 11.5272C7.61167 11.8424 6.83194 12 6.00217 12Z'
            fill='#E54D2E'
          />
        </svg>
      )}
    </>
  );
}

export default InterviewerAcceptDeclineIcon;
