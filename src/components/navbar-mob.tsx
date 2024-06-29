import { navLinks } from '@/app/constants/nav-links';
import NavbarLink from './navbarLink';

const NavbarMob = () => {
  return (
    <nav className='flex justify-center gap-4 md:hidden fixed bottom-0 left-0 right-0 py-4 px-2 border-t bg-background shadow-lg'>
      {navLinks.map((link, index) => {
        return <NavbarLink key={index} {...link} />;
      })}
    </nav>
  );
};

export default NavbarMob;
