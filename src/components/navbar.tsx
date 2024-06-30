'use client';
import { navLinks } from '@/app/constants/nav-links';
import { technologies } from '@/app/constants/technologies';
import { ModeToggle } from '@/components/mode-toggle';
import { ShieldCheck } from 'lucide-react';
import NavbarLink from './navbarLink';
import Avatar from './avatar';

const Navbar = () => {
  return (
    <div className='-mt-24'>
      <div className='container'>
        <div className='flex items-center gap-x-5'>
          <Avatar size={192} />
          <div className='mt-16 flex  gap-x-4'>
            <nav className='hidden md:flex gap-x-1'>
              {navLinks.map((link, index) => (
                <NavbarLink key={index} {...link} />
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
        <h1 className='dark:text-white text-gray-800 text-xl xs:text-2xl sm:text-3xl font-semibold mt-2.5 flex items-center gap-2'>
          Abdelmounim AINOU <ShieldCheck color='#4d71b5' />
        </h1>
        <p className='text-lg'>@front-end developer</p>
        <div className='flex gap-1 mt-1'>
          {' '}
          {technologies.map((tech, index) => {
            const { icon: Icon, color } = tech;
            return <Icon size={22} key={index} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
