import { type ReactNode, useEffect, useState } from 'react';

interface ComponentProps {
  children: ReactNode;
  isActive: boolean;
}

export function Indicator({ children, isActive = false }: ComponentProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`w-full ${isActive ? 'relative' : ''}`}>
      {isActive && (
        <div
          className={`ease absolute right-0 top-0 h-2 w-2 translate-x-[40%] translate-y-[-40%] transform rounded-full bg-red-500 transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
          }`}
        ></div>
      )}
      {children}
    </div>
  );
}