'use client';
import { navLinks } from '@/app/constants/nav-links';
import { ShieldCheck } from 'lucide-react';
import { socialMedia } from '@/app/constants/socialMedia';
import { Button } from './ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import NavbarLink from './navbarLink';
import Avatar from './avatar';
import { FiChevronsRight, FiDownloadCloud } from 'react-icons/fi';
import { useGoto } from '@/hooks/useGoto';

const NavbarInvisible = ({ isVisible }: { isVisible: boolean }) => {
  const goToEl = useGoto();

  const ref = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  useOnClickOutside(ref, () => {
    setIsPopoverOpen(false);
  });
  useEffect(() => {
    if (isVisible) {
      setIsPopoverOpen(false);
    }
  }, [isVisible]);

  return (
    <div
      className={cn(
        'fixed transition-all shadow-main border ease-in-out duration-1000 -top-20 left-0 right-0  bg-white/95 dark:bg-black/90  w-full py-3',
        !isVisible ? 'top-0' : '-top-20'
      )}>
      <div className='container flex justify-between'>
        <div ref={ref}>
          <Popover open={isPopoverOpen && !isVisible}>
            <PopoverTrigger
              asChild
              onClick={() => {
                setIsPopoverOpen(!isPopoverOpen);
              }}>
              <div className='cursor-pointer'>
                <Avatar size={45} />
              </div>
            </PopoverTrigger>
            <PopoverContent
              asChild
              className='w-96 max-w-[90%]  p-0 overflow-hidden text-muted-foreground'
              align='start'
              alignOffset={0}>
              <div>
                <div className='bg-headerBg h-32 bg-center relative'>
                  <Avatar size={112} className='absolute top-16 left-5' />
                </div>
                <div className='mt-10 p-5'>
                  <p className='text-2xl text-gray-700 flex items-center gap-1 font-semibold dark:text-white'>
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
                  <div className='mt-3 flex gap-x-3'>
                    {' '}
                    <Button
                      onClick={() => {
                        goToEl('projects');
                      }}>
                      My Works <FiChevronsRight />
                    </Button>
                    <Button
                      variant={'outline'}
                      onClick={() => {
                        alert('Hello ');
                      }}>
                      Download Resume <FiDownloadCloud />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <nav className='hidden mb-1 md:flex gap-4 '>
          {navLinks.map((link, index) => (
            <NavbarLink key={index} {...link} />
          ))}
        </nav>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarInvisible;
