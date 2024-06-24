'use client';
import { socialMedia } from '@/app/constants/socialMedia';
import Author from '@/components/author';
import Section from '@/components/section';
import { Button } from '@/components/ui/button';
import { BiUserPin } from 'react-icons/bi';
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
} from 'react-icons/md';

export const AboutSection = () => {
  return (
    <Section id='about'>
      <Author
        name='About'
        description='A Quick Introduction About Me'
        icon={BiUserPin}
      />
      <p className='mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        similique quibusdam corporis in doloribus consequatur pariatur enim.
        Voluptas exercitationem vel consequatur consequuntur numquam, saepe rem
        minus sint architecto quam suscipit?
      </p>
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
      <div className='flex gap-2 mt-5'>
        <Button>
          My works <MdKeyboardDoubleArrowRight />
        </Button>
        <Button variant={'outline'}>
          Download cv <MdOutlineFileDownload />
        </Button>
      </div>
    </Section>
  );
};
