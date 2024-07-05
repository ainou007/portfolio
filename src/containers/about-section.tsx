'use client';
import { socialMedia } from '@/app/constants/socialMedia';
import Author from '@/components/author';
import Section from '@/components/section';
import { Button } from '@/components/ui/button';
import { useGoto } from '@/hooks/useGoto';
import { BiUserPin } from 'react-icons/bi';
import { FiChevronsRight, FiDownloadCloud } from 'react-icons/fi';
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
} from 'react-icons/md';

export const AboutSection = () => {
  const goToEl = useGoto();

  return (
    <Section id='about'>
      <Author
        name='About'
        description='A Quick Introduction About Me'
        icon={BiUserPin}
      />
      <p className='mb-5'>
        I am a junior front-end developer skilled in creating engaging and
        dynamic web applications. My expertise includes HTML, CSS, and
        JavaScript for structuring and styling web content. I use TypeScript for
        enhanced code quality and maintainability. Proficient in ReactJS, I
        build efficient and reusable UI components. Additionally, I utilize
        Tailwind CSS for streamlined styling and Shadcn for robust component
        libraries.
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
      <div className='flex flex-col xs:flex-row gap-2 mt-5'>
        <Button
          onClick={() => {
            goToEl('projects');
          }}>
          My works <FiChevronsRight />
        </Button>
        <Button variant={'outline'}>
          Download Resume <FiDownloadCloud />
        </Button>
      </div>
    </Section>
  );
};
