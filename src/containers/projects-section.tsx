import Author from '@/components/author';
import Project from '@/components/project';
import Section from '@/components/section';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { BiSave } from 'react-icons/bi';

const ProjectsSection = () => {
  return (
    <Section id='projects'>
      <Author
        name='Project'
        description="Some Things I've Built"
        icon={BiSave}
      />
      <p className='mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        similique quibusdam corporis in doloribus consequatur pariatur enim.
        Voluptas exercitationem vel consequatur consequuntur numquam, saepe rem
        minus sint architecto quam suscipit?
      </p>

      <div className='mt-10'>
        <Project direction='left' />
        <Separator className='my-14' />
        {/* <Separator />
        <Project /> */}
        <Project direction='right' />
      </div>
    </Section>
  );
};

export default ProjectsSection;
