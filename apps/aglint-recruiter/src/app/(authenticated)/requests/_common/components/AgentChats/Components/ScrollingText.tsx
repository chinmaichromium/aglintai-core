/* eslint-disable security/detect-object-injection */
import { Button } from '@components/ui/button';
import React, { useEffect, useRef, useState } from 'react';

const ScrollingText = () => {
  const textArray = [
    'Nothing will change until you explicitly confirm it',
    "Use '@' to mention people",
    "Use '#' to mention events",
    "Start a prompt with '/' to see commands",
  ];

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const handleInteractionTimeout = () => {
      if (Date.now() - lastInteractionTime > 30000) {
        setIsPlaying(true);
      }
    };

    const interval = setInterval(handleInteractionTimeout, 1000);
    return () => clearInterval(interval);
  }, [lastInteractionTime]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 10000); // Change text every 10 seconds
    } else {
      clearInterval(intervalRef?.current ?? 0);
    }

    return () => clearInterval(intervalRef?.current ?? 0);
  }, [isPlaying, textArray.length]);

  const handleClick = () => {
    setLastInteractionTime(Date.now());
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Button
      variant='ghost'
      onClick={handleClick}
      className='w-full cursor-pointer text-left'
      aria-label='Cycle through tips'
    >
      <p className='truncate text-sm'>{textArray[currentIndex]}</p>
    </Button>
  );
};

export default ScrollingText;
