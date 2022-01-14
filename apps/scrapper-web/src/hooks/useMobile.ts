import { useState } from 'react';
import { MOBILE_WIDTH } from '../constants/layout';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(verifyIsMobile());

  function verifyIsMobile() {
    return window.innerWidth <= Number(MOBILE_WIDTH.replace('px', ''));
  }

  window.addEventListener('resize', () => {
    setIsMobile(verifyIsMobile());
  });

  return { isMobile };
};
