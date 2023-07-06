import { useState, useEffect } from 'react';

type ReturnType = boolean;
type Query = 'up' | 'down' | 'between';
type Value = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const breakPoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1366px',
};
export default function useResponsive(query: Query, start?: Value, end?: Value): ReturnType {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(min-width: ${breakPoints[start as Value]})${
        end ? ` and (max-width: ${breakPoints[end as Value]})` : ''
      }`,
    );
    const listener = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };
    mediaQueryList.addListener(listener);
    setIsMatch(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, [start, end]);

  if (query === 'up') {
    return isMatch;
  }
  if (query === 'down') {
    return !isMatch;
  }
  if (query === 'between') {
    return isMatch;
  }

  return !isMatch;
}
