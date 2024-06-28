import Author from '@/components/author';
import Project from '@/components/project';
import Section from '@/components/section';
import { Separator } from '@/components/ui/separator';
import { getProjects } from '@/lib/projects';
import React from 'react';
import { BiSave } from 'react-icons/bi';

const ProjectsSection = async () => {
  const projectsList = await getProjects();
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
        {projectsList &&
          projectsList.map((project, index) => {
            return (
              <>
                <Project
                  key={project._id}
                  direction={(index + 1) % 2 == 0 ? 'right' : 'left'}
                  {...project}
                />
                {index + 1 != projectsList.length && (
                  <Separator className='my-8' />
                )}
              </>
            );
          })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
