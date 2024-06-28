'use client';
import { navLinks } from '@/app/constants/nav-links';
import { ShieldCheck } from 'lucide-react';
import { socialMedia } from '@/app/constants/socialMedia';
import { Button } from './ui/button';
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
} from 'react-icons/md';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';

const NavbarInvisible = ({ isVisible }: { isVisible: boolean }) => {
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
        'fixed transition-all shadow-main border  ease-in-out duration-1000 -top-56 left-0 right-0  bg-white w-full py-3',
        !isVisible && 'top-0'
      )}>
      {' '}
      <div className='container flex justify-between'>
        <Popover open={isPopoverOpen && !isVisible}>
          <PopoverTrigger
            asChild
            onClick={() => {
              setIsPopoverOpen(!isPopoverOpen);
            }}>
            <Image
              src={'/avatar.jpg'}
              width={45}
              height={45}
              className='rounded-full ring-2 ring-offset-2 cursor-pointer'
              alt=''
            />
          </PopoverTrigger>
          <PopoverContent className='w-80 p-0 overflow-hidden' ref={ref}>
            <div className='bg-cover h-32 bg-center relative'>
              <Image
                src='/avatar.jpg'
                className='size-28 absolute -bottom-10 left-5 rounded-md'
                alt=''
                width={112}
                height={112}
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
          </PopoverContent>
        </Popover>
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
    </div>
  );
};

export default NavbarInvisible;
