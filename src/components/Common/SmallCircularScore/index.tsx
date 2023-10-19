import { Stack } from '@mui/material';
import { memo, useEffect, useState } from 'react';

const SmallCircularScore = ({
  finalScore,
  triggerAnimation = false,
}: {
  finalScore: number;
  triggerAnimation?: boolean;
}) => {
  const [score, setScore] = useState(triggerAnimation ? 0 : finalScore);
  const green = {
    score: '#0B3B29',
    border: '#228F67',
    background: '#EDF8F4',
  };
  const yellow = {
    score: '#703815',
    border: '#F79A3E',
    background: '#FFF7ED',
  };
  const red = {
    score: '#681219',
    border: '#D93F4C',
    background: '#FFF0F1',
  };
  const color = score > 33 ? (score > 66 ? green : yellow) : red;

  useEffect(() => {
    if (score === finalScore) {
      return;
    }
    if (score > finalScore) {
      const timer = setTimeout(() => {
        setScore((prev) => prev - 1);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setScore((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [score, finalScore]);
  return (
    <Stack>
      <Stack
        width={'30px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'100%'}
        sx={{
          aspectRatio: 1,
          background: `conic-gradient(${color.border},${3.6 * score}deg,${
            color.background
          } 0deg)`,
        }}
      >
        <Stack
          width={'25px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'100%'}
          textAlign={'center'}
          sx={{
            aspectRatio: 1,
            backgroundColor: color.background,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default memo(SmallCircularScore);
