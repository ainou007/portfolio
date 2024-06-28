import { navLinks } from '@/app/constants/nav-links';
import Link from 'next/link';

const NavbarMob = () => {
  return (
    <nav className='flex justify-center gap-8 md:hidden fixed bottom-0 left-0 right-0 p-4 border-t bg-background shadow-lg text-xs '>
      {navLinks.map((link, index) => {
        const { label, icon: Icon } = link;
        return (
          <Link
            key={index}
            className='flex flex-col items-center justify-center gap-1'
            href=''>
            <Icon size={15} /> {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarMob;
