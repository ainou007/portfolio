'use client';
import { useVisibiliy } from '@/hooks/useVisibility';
import Navbar from './navbar';
import NavbarMob from './navbar-mob';
import { cn } from '@/lib/utils';
import NavbarInvisible from './navbar-invisible';

const Header = () => {
  const { elementRef, isVisible } = useVisibiliy();
  return (
    <header>
      <div className='bg-center bg-cover h-96'></div>
      <Navbar isVisible={isVisible} />
      <div ref={elementRef}></div>
      <NavbarInvisible isVisible={isVisible} />
      <NavbarMob />
    </header>
  );
};

export default Header;
