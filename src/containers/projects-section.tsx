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
        I have worked on various projects that demonstrate my skills in
        front-end development and my ability to build functional, user-friendly
        applications. Below are examples of some of these projects:
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
