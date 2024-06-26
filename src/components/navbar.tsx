import { navLinks } from '@/app/constants/nav-links';
import { technologies } from '@/app/constants/technologies';
import { ModeToggle } from '@/components/mode-toggle';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiTestinglibrary } from 'react-icons/si';
const Navbar = () => {
  return (
    <div className='relative h-96 container'>
      <div className={'absolute -bottom-44 '}>
        <div className='flex items-end gap-8 mb-4'>
          <Image
            width={208}
            height={208}
            className='size-52 rounded-md '
            src='/avatar.jpg'
            alt=''
          />
          <nav className='mb-2 hidden md:flex gap-8'>
            {navLinks.map((link, index) => {
              const { label, icon: Icon } = link;
              return (
                <Link
                  key={index}
                  className='flex items-center justify-center gap-1.5 border-b-2 border-b-transparent  py-2'
                  href=''>
                  <Icon size={15} /> {label}
                </Link>
              );
            })}
            <Link
              className='flex items-center justify-center gap-1 textpri border-b-2 text-primary font-semibold border-primary py-2'
              href=''>
              <SiTestinglibrary size={15} /> active link
            </Link>
            <ModeToggle />
          </nav>
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold flex items-center gap-1 text-gray-700'>
            Abdelmounim AINOU
            <ShieldCheck size={30} className='text-blue-400' />
          </h1>
          <div className=''>
            {' '}
            <p className='font-light text-lg'>@fontend-developer </p>
            <ul className='flex items-center gap-1 text-2xl'>
              {technologies.map((tech, index) => {
                const { icon: Icon, color } = tech;
                return (
                  <li key={index}>
                    <Icon color={color} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
