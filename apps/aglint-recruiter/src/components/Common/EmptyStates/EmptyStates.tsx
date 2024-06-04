import { Stack } from '@mui/material';
import React from 'react';

import { JobEmptyState } from '@/devlink/JobEmptyState';
import { EmptyState as DevlinkEmptyState } from '@/devlink2/EmptyState';
import NoApplicants from '@/public/lottie/NoApplicants';

import Icon from '../../Common/Icons/Icon';

type TabType =
  | 'job-Dashboard-NoInterview'
  | 'job-Dashboard-NoApplicants'
  | 'candidate-search-history'
  | 'job-jobList'
  | 'schedule-NoInterview'
  | 'schedule-NoActivity'
  | 'task-NoCandidate'
  | 'task-NoJob'
  | 'task-NoSession'
  | 'task-NoProgress';

function EmptyState({ type }: { type: TabType }) {
  if (type === 'candidate-search-history')
    return (
      <Stack
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_3091_48504)'>
            <mask
              id='mask0_3091_48504'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='100'
              height='100'
            >
              <path d='M100 0H0V100H100V0Z' fill='white' />
            </mask>
            <g mask='url(#mask0_3091_48504)'>
              <path
                d='M47.4031 80.0134C72.1187 82.5146 84.8564 76.4349 85.6168 61.7738C86.757 39.7822 67.548 42.1579 61.9539 36.362C56.3595 30.566 62.6265 38.8028 51.8527 26.7922C44.6698 18.785 35.0988 18.7439 23.1396 26.6691C13.4932 34.5202 12.4499 44.8165 20.0094 57.5576C27.5689 70.2984 36.7 77.7838 47.4031 80.0134Z'
                fill='#FFEEDB'
              />
              <mask
                id='mask1_3091_48504'
                maskUnits='userSpaceOnUse'
                x='35'
                y='25'
                width='40'
                height='12'
              >
                <path
                  d='M74.5108 25.0146H35.6142L35.5918 36.1368H74.4881L74.5108 25.0146Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask1_3091_48504)'>
                <path
                  d='M36.171 25.5782C41.1554 25.5782 41.7784 28.5243 41.7784 31.4651V34.6735C41.7784 35.1819 42.165 35.595 42.6407 35.595L72.0099 35.3396C72.4859 35.3396 72.8722 34.9268 72.8722 34.4184V30.9595C72.8722 27.8043 70.4791 25.2461 67.5273 25.2461C67.3273 25.2461 35.9622 25.5782 36.171 25.5782Z'
                  fill='#E6E6E6'
                />
                <path
                  d='M36.1699 26.1176C36.1699 26.5986 36.5609 26.9889 37.0422 26.9889C67.5335 26.9889 67.5391 26.9886 67.5447 26.9889C69.5428 26.9924 71.1618 28.6254 71.1649 30.6413V34.7746H72.0272C72.5029 34.7746 72.8892 34.3852 72.8892 33.9051V30.6413C72.902 27.6603 70.517 25.2335 67.5621 25.2207H67.5276H67.2057C67.1266 25.2254 67.0497 25.2381 66.9715 25.2466H37.041C36.56 25.2466 36.1699 25.6366 36.1699 26.1176Z'
                  fill='#E6E6E6'
                />
              </g>
              <mask
                id='mask2_3091_48504'
                maskUnits='userSpaceOnUse'
                x='23'
                y='24'
                width='49'
                height='53'
              >
                <path
                  d='M71.5269 24.4551H23.6758V76.5579H71.5269V24.4551Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask2_3091_48504)'>
                <path
                  d='M67.5283 26.8826V25.2471H36.4732C32.404 25.2533 29.1068 28.5782 29.1006 32.681V75.3686C29.1006 75.8483 29.4869 76.2377 29.9626 76.2377H56.5523C60.6162 76.225 63.9053 72.9013 63.9081 68.8038V30.6359V30.595C63.9333 28.596 65.5461 26.8882 67.5283 26.8854C67.5364 26.8854 67.5439 26.8829 67.5517 26.8826H67.5283Z'
                  fill='white'
                />
                <path
                  d='M36.4562 25.2477C32.3867 25.2542 29.0892 28.5791 29.083 32.6819V57.6732L47.6506 25.2246L36.4562 25.2477Z'
                  fill='#F0F0F0'
                />
                <path
                  d='M29.0994 42.7611V33.2321C29.106 29.129 32.4032 25.8044 36.4726 25.7979H67.5275M26.8926 75.0558C28.7471 75.0558 29.0826 73.0854 29.0826 71.8402C29.0826 61.6573 29.0994 54.4592 29.0994 51.877M29.2617 45.6723V46.8172'
                  stroke='#E6E6E6'
                  stroke-width='1.1215'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M67.5277 25.2217H67.2058C64.3872 25.3933 62.1868 27.7469 62.1831 30.5958V30.6771V68.7827C62.1778 71.3793 60.4386 73.646 57.9482 74.3021C57.6759 74.3728 57.3971 74.4077 57.1186 74.4105V74.4114H57.0971H57.075H24.8389C26.1329 75.5538 27.8258 76.2482 29.6803 76.2497H29.6918H38.9862H56.552C56.7414 76.2497 57.0342 76.2497 57.2242 76.2207C57.5591 76.1899 57.8912 76.1338 58.218 76.0528C61.5563 75.2687 63.9205 72.2693 63.9249 68.8117V30.6248V30.5843C63.9495 28.7105 65.3731 27.1594 67.2227 26.9899C67.3248 26.9843 67.5205 26.9849 67.622 26.9899L67.5277 25.2217Z'
                  fill='#E6E6E6'
                />
              </g>
              <mask
                id='mask3_3091_48504'
                maskUnits='userSpaceOnUse'
                x='21'
                y='66'
                width='37'
                height='11'
              >
                <path
                  d='M57.1459 66.6025H21.8076V76.4019H57.1459V66.6025Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask3_3091_48504)'>
                <path
                  d='M67.5287 25.2207H67.2069C64.3882 25.3927 62.1889 27.7459 62.1848 30.5948V30.6762V68.7818C62.1795 71.3783 60.4403 73.6453 57.9499 74.3011C57.3845 74.4484 56.7907 74.4484 56.2256 74.3011C53.7275 73.636 51.9889 71.3534 51.9957 68.7472V67.5877C51.9991 67.1076 51.616 66.7151 51.1399 66.7123H45.6761H41.2832H34.511H27.4203H23.1823C22.7066 66.7123 22.3203 67.102 22.3203 67.5821V68.811C22.3166 72.9154 25.6132 76.2453 29.682 76.2487H29.6929H38.9873H56.5527C56.7424 76.2487 57.0356 76.2487 57.2253 76.2198C57.5605 76.1889 57.8929 76.1332 58.2197 76.0519C61.558 75.2681 63.9219 72.2687 63.9259 68.811V30.6241V30.5833C63.9505 28.7098 65.3745 27.1581 67.2244 26.9892C67.3315 26.9833 67.4387 26.9833 67.5462 26.9892C69.5443 26.9924 71.1633 28.6257 71.1667 30.6413V34.7749H72.0287C72.5047 34.7749 72.891 34.3855 72.891 33.9054V30.6413C72.9035 27.6603 70.5184 25.2338 67.5636 25.2207H67.5287Z'
                  fill='#E6E6E6'
                />
              </g>
              <mask
                id='mask4_3091_48504'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='100'
                height='100'
              >
                <path d='M0 0H100V100H0V0Z' fill='white' />
              </mask>
              <g mask='url(#mask4_3091_48504)'>
                <mask
                  id='mask5_3091_48504'
                  maskUnits='userSpaceOnUse'
                  x='29'
                  y='26'
                  width='36'
                  height='49'
                >
                  <path
                    d='M64.2525 26.4023C62.2276 26.4023 36.0594 26.4023 36.0594 26.4023L31.4644 29.6734L29.751 39.5643V66.745C29.751 66.745 50.6233 66.745 51.2463 66.745C51.8694 66.745 51.9472 67.2902 51.9472 67.6796C51.9472 68.069 52.3366 74.5332 56.9317 74.5332C61.5267 74.5332 62.1497 70.3276 62.1497 67.9911C62.1497 65.6547 62.1497 30.8416 62.1497 30.0628C62.1497 29.284 63.0843 26.9475 64.2525 26.4023Z'
                    fill='white'
                  />
                </mask>
                <g mask='url(#mask5_3091_48504)'>
                  <path
                    d='M43.1456 49.2744C43.4792 48.9054 44.0486 48.8764 44.4183 49.209L49.0892 53.4112C49.4577 53.7428 49.4876 54.3104 49.156 54.6792L49.1546 54.6807C48.821 55.0496 48.2516 55.079 47.8817 54.7462L43.2109 50.5442C42.8423 50.2124 42.8124 49.6448 43.144 49.2762L43.1456 49.2744Z'
                    fill='#CAD8E9'
                  />
                  <path
                    d='M44.1406 50.142C46.7518 47.487 46.7206 43.2222 44.071 40.6164C41.4214 38.0104 37.1568 38.0502 34.5456 40.7052C31.9344 43.3602 31.9652 47.6251 34.6149 50.2311C37.2644 52.8369 41.5293 52.797 44.1406 50.142Z'
                    fill='#CAD8E9'
                  />
                  <path
                    d='M44.1406 50.142C46.7518 47.487 46.7206 43.2222 44.071 40.6164C41.4214 38.0104 37.1568 38.0502 34.5456 40.7052C31.9344 43.3602 31.9652 47.6251 34.6149 50.2311C37.2644 52.8369 41.5293 52.797 44.1406 50.142Z'
                    stroke='#CAD8E9'
                    stroke-width='0.672897'
                    stroke-miterlimit='10'
                  />
                </g>
              </g>
              <path
                d='M36.0459 59.1299H44.4742'
                stroke='#FF6224'
                stroke-width='1.1215'
                stroke-miterlimit='10'
                stroke-linecap='round'
              />
              <path
                d='M36.0459 51.2803H44.4742'
                stroke='#FF6224'
                stroke-width='1.1215'
                stroke-miterlimit='10'
                stroke-linecap='round'
              />
              <path
                d='M36.0449 43.4297H55.1493'
                stroke='#FF6224'
                stroke-width='1.1215'
                stroke-miterlimit='10'
                stroke-linecap='round'
              />
              <path
                d='M36.0449 35.0186H57.3568'
                stroke='#FF6224'
                stroke-width='1.1215'
                stroke-miterlimit='10'
                stroke-linecap='round'
              />
              <path
                d='M45.0636 46.5537C45.3972 46.1847 45.9666 46.1557 46.3363 46.4883L51.0071 50.6905C51.3757 51.0221 51.4056 51.5897 51.074 51.9585L51.0726 51.96C50.7389 52.3289 50.1696 52.3583 49.7997 52.0255L45.1288 47.8235C44.7603 47.4917 44.7304 46.924 45.062 46.5555L45.0636 46.5537Z'
                fill='#FF6224'
              />
              <path
                d='M46.0576 47.4213C48.6688 44.7663 48.6376 40.5015 45.988 37.8957C43.3384 35.2897 39.0738 35.3295 36.4626 37.9845C33.8514 40.6395 33.8822 44.9044 36.5319 47.5104C39.1814 50.1162 43.4463 50.0763 46.0576 47.4213Z'
                fill='white'
              />
              <path
                d='M46.0576 47.4213C48.6688 44.7663 48.6376 40.5015 45.988 37.8957C43.3384 35.2897 39.0738 35.3295 36.4626 37.9845C33.8514 40.6395 33.8822 44.9044 36.5319 47.5104C39.1814 50.1162 43.4463 50.0763 46.0576 47.4213Z'
                stroke='#FF6224'
                stroke-width='0.672897'
                stroke-miterlimit='10'
              />
            </g>
          </g>
          <defs>
            <clipPath id='clip0_3091_48504'>
              <rect width='100' height='100' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Stack>
    );
  if (type === 'job-Dashboard-NoApplicants')
    return (
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Stack width={'100px'}>
          <NoApplicants />
        </Stack>
        <Stack>No {type} data found</Stack>
      </Stack>
    );
  if (type === 'job-Dashboard-NoInterview')
    return (
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Stack width={'100px'}>
          <NoApplicants />
        </Stack>
        <Stack>No {type} data found</Stack>
      </Stack>
    );
  if (type === 'job-jobList') return <JobEmptyState />;
  if (type === 'schedule-NoInterview')
    return (
      <DevlinkEmptyState
        slotIcons={<Icon height='60' width='80' variant='EmptyState' />}
        textDescription={'No interview types found.'}
      />
    );
  if (type === 'schedule-NoActivity')
    return (
      <DevlinkEmptyState
        slotIcons={
          <Icon variant='ActivityTimeline' width='50px' height='50px' />
        }
        textDescription={'No activities found.'}
      />
    );
  if (type === 'task-NoCandidate')
    return <DevlinkEmptyState textDescription={'No candidates found.'} />;
  if (type === 'task-NoJob')
    return <DevlinkEmptyState textDescription='No jobs found.' />;
  if (type === 'task-NoSession')
    return <DevlinkEmptyState textDescription={'No sessions found.'} />;
  if (type === 'task-NoProgress')
    return <DevlinkEmptyState textDescription={'No progress found.'} />;
}

export default EmptyState;
