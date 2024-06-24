import { navLinks } from '@/app/constants/nav-links';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { socialMedia } from '@/app/constants/socialMedia';
import { Button } from './ui/button';
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
} from 'react-icons/md';

const NavbarInvisible = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative h-96   '>
      <div className={'fixed top-0 w-full bg-white shadow-lg '}>
        <div className='flex items-center   py-2 container  justify-between'>
          <HoverCard open={isOpen}>
            <HoverCardTrigger>
              <img
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className='cursor-pointer size-10 rounded-md'
                src='avatar.jpg'
                alt=''
              />
            </HoverCardTrigger>
            <HoverCardContent className='w-96 max-w-[90%]  p-0 text-muted-foreground rounded-lg overflow-hidden'>
              <div className='bg-cover h-32 bg-center relative'>
                <img
                  src='avatar.jpg'
                  className='size-28 absolute -bottom-10 left-5 rounded-md'
                  alt=''
                />
              </div>
              <div className='mt-10 p-5'>
                <p className='text-2xl text-gray-700 flex items-center gap-1'>
                  {' '}
                  Abdelmounim AINOU{' '}
                  <ShieldCheck size={30} className='text-blue-400' />{' '}
                </p>
                <p className='text-lg mb-2'> @fontend-developer</p>
                <div>
                  {' '}
                  <ul className='flex gap-2 text-2xl'>
                    {socialMedia.map((item, index) => {
                      const { href, icon: Icon } = item;
                      return (
                        <li key={index}>
                          <a href={href} className='hover:text-primary'>
                            <Icon />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='flex gap-2 mt-5'>
                  <Button className='flex-1'>
                    My works <MdKeyboardDoubleArrowRight />
                  </Button>
                  <Button className='flex-1' variant={'outline'}>
                    Download cv <MdOutlineFileDownload />
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <nav className=' hidden md:flex gap-6'>
            {navLinks.map((link, index) => {
              const { label, icon: Icon } = link;
              return (
                <a
                  key={index}
                  className='flex items-center justify-center gap-1'
                  href=''>
                  <Icon size={15} /> {label}
                </a>
              );
            })}
          </nav>
          <div>them toggle</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarInvisible;
