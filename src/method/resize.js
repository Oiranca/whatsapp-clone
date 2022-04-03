import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowsWidth, setWindowsWith] = useState(0);

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth < 960 && window.innerWidth !== 0) {
        setWindowsWith(window.innerWidth);
      }
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return windowsWidth;
};
