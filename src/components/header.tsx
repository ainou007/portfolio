'use client';
import { useVisibiliy } from '@/hooks/useVisibility';
import Navbar from './navbar';
import NavbarMob from './navbar-mob';
import NavbarInvisible from './navbar-invisible';

const Header = () => {
  const { targetRef, isVisible } = useVisibiliy(-200);

  return (
    <header>
      <div className='bg-center bg-header bg-cover bg-no-repeat h-[450px] '></div>
      <Navbar />
      <div ref={targetRef}></div>
      <NavbarInvisible isVisible={isVisible} />
      <NavbarMob />
    </header>
  );
};

export default Header;
