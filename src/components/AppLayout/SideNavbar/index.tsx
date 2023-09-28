import { Collapse, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { BriefcaseIcon, CandidateIcon, NavJobSubLink } from '@/devlink';
import { pageRoutes } from '@/src/utils/pageRouting';
function SideNavbar() {
  const router = useRouter();

  const [index, setIndex] = useState(0);

  function openCloseSubNav(i: number) {
    if (i === index) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  }
  return (
    <>
      {navList.map((item, i) => {
        return (
          <Collapse
            key={i}
            sx={{
              borderRadius: '8px',
              transition: 'all 0.5s',
              bgcolor:
                router.pathname !== item.route
                  ? 'transparent'
                  : 'rgba(255, 255, 255, 0.06)',
            }}
            collapsedSize={32}
            in={index === i}
          >
            <Stack
              sx={{
                height: '32px',
                p: '6px 10px',
                opacity: router.pathname !== item.route ? 0.6 : 1,
                zIndex: 2,
              }}
              onClick={() => {
                openCloseSubNav(i);
                router.push(item.route);
              }}
              direction={'row'}
              alignItems={'center'}
              spacing={'8px'}
              color={'white.700'}
            >
              {item.icon}
              <Typography
                color={'white.700'}
                fontSize={'14px'}
                fontStyle={'normal'}
                fontWeight={400}
                lineHeight={' 20px'}
                letterSpacing={'-0.154px'}
              >
                {item.text}
              </Typography>
            </Stack>
            <Stack
              sx={{
                transition: `transform 0.4s, opacity ${
                  index === i ? '0.8s' : '0.2s'
                }`,
                opacity: index === i ? 1 : 0,

                transform:
                  index === i ? 'none' : 'translate3d(0px, -50px, 0px)',
                pointerEvents: index !== i ? 'none' : 'auto',
              }}
              px={'10px'}
            >
              {item.SubComponents}
            </Stack>
          </Collapse>
        );
      })}
    </>
  );
}

export default SideNavbar;

function JobSubNavbar() {
  const router = useRouter();
  return (
    <NavJobSubLink
      onClickJobAll={{
        onClick: () => router.push(`${pageRoutes.JOBS}?status=all`),
      }}
      onClickJobActive={{
        onClick: () => router.push(`${pageRoutes.JOBS}?status=active`),
      }}
      onClickJobInactive={{
        onClick: () => router.push(`${pageRoutes.JOBS}?status=inactive`),
      }}
      onClickJobClosed={{
        onClick: () => router.push(`${pageRoutes.JOBS}?status=close`),
      }}
      isJobAll={
        router.query.status === 'all' ||
        (router.pathname === pageRoutes.JOBS &&
          router.query.status !== 'active' &&
          router.query.status !== 'inactive' &&
          router.query.status !== 'close')
      }
      isJobActive={router.query.status === 'active'}
      isJobInactive={router.query.status === 'inactive'}
      isJobClosed={router.query.status === 'close'}
    />
  );
}

const navList = [
  {
    icon: <BriefcaseIcon />,
    text: 'Jobs',
    SubComponents: <JobSubNavbar />,
    route: pageRoutes.JOBS,
  },
  {
    icon: <CandidateIcon />,
    text: 'Candidates',
    SubComponents: '',
    route: pageRoutes.CANDIDATES,
  },
];
