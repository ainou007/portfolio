'use client';
import { useEffect, useRef, useState } from 'react';

export const useVisibiliy = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        // @ts-ignore
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { elementRef, isVisible };
};
