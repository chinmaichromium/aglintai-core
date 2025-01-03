import { useCallback, useEffect, useState } from 'react';

export const useKeyPress = (key: KeyboardEvent['key']) => {
  const [pressed, setPressed] = useState(false);
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (key === event.key) setPressed(true);
  }, []);
  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (key === event.key) setPressed(false);
  }, []);
  const handleKeyLeft = useCallback((event: KeyboardEvent) => {
    if (key === event.key) setPressed(true);
  }, []);
  const handleKeyRight = useCallback((event: KeyboardEvent) => {
    if (key === event.key) setPressed(false);
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [handleKeyUp]);
  useEffect(() => {
    document.addEventListener('keyleft' as any, handleKeyLeft, false);
    return () => {
      document.removeEventListener('keyleft' as any, handleKeyLeft, false);
    };
  }, [handleKeyLeft]);
  useEffect(() => {
    document.addEventListener('keyright' as any, handleKeyRight, false);
    return () => {
      document.removeEventListener('keyright' as any, handleKeyRight, false);
    };
  }, [handleKeyRight]);

  return { pressed };
};
