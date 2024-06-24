'use client';
import { navbarContext } from '@/components/context';
import { useContext, useEffect, useRef } from 'react';

export const useVisibiliy = () => {
  const elementRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  const { toggleVisibility } = useContext(navbarContext);
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        // @ts-ignore
        // FIXME:
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 120 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        // setIsVisible(isVisible);
        console.log('ok');
        toggleVisibility(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return {
    elementRef,
  };
};
