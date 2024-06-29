import React from 'react';
import { Button } from './ui/button';
import { useGoto } from '@/hooks/useGoto';
import { IconType } from 'react-icons';

type TNavbarLink = {
  href: string;
  icon: IconType;
  label: string;
};
const goToEl = useGoto();
const NavbarLink = ({ href, icon: Icon, label }: TNavbarLink) => {
  return (
    <Button
      onClick={() => {
        goToEl(href);
      }}
      variant={'link'}
      className='flex items-center gap-1 text-muted-foreground hover:no-underline hover:text-primary text-base'>
      <Icon className='text-xl' size={16} /> <span>{label}</span>
    </Button>
  );
};

export default NavbarLink;
