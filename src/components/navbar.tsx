import { navLinks } from '@/app/constants/nav-links';
import { technologies } from '@/app/constants/technologies';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = ({ isVisible }: { isVisible: boolean }) => {
  return (
    // className=''
    <div className='-mt-28'>
      <div className='container'>
        <div className='flex items-end gap-5'>
          <Image
            className='rounded-md '
            src={'/avatar.jpg'}
            alt=''
            width={180}
            height={180}
          />
          <nav className='hidden mb-1 md:flex gap-4 '>
            {navLinks.map((link, index) => {
              const { label, href, icon: Icon } = link;
              return (
                <Link
                  href={href}
                  key={index}
                  className='hover:text-primary flex items-center gap-1'>
                  <Icon /> {label}
                </Link>
              );
            })}
          </nav>
          <ModeToggle />
        </div>
        <h1 className='text-gray-800 text-xl xs:text-2xl sm:text-3xl font-semibold mt-2.5 flex items-center gap-2'>
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
