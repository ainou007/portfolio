'use client';
import NavbarMob from './navbar-mob';
import TopNavbar from './top-navbar';
import Navbar from './navbar';
import NavbarInvisible from './navbar-invisible';
import { useVisibiliy } from '@/hooks/useVisibility';
import { navbarContext } from './context';
import { useContext } from 'react';

const Header = () => {
  const { elementRef } = useVisibiliy();
  const { isVisible } = useContext(navbarContext);
  return (
    <>
      <header className='bg-center bg-cover relative'>
        {isVisible ?
          <Navbar />
        : <NavbarInvisible />}
        <NavbarMob />
      </header>
      <div ref={elementRef}></div>
    </>
  );
};

export default Header;
