import React, { useContext } from 'react';
import { navbarContext } from './context';

const TopNavbar = () => {
  const { isVisible } = useContext(navbarContext);
  return (
    isVisible && (
      <nav className='bg-white p-2 fixed top-0 z-10 left-0 right-0 shadow-sm'>
        <div className='container flex justify-between'>
          <span>Logo</span> <span>themTogle</span>
        </div>
      </nav>
    )
  );
};

export default TopNavbar;
