import { Skills } from '@/app/constants/skills';
import Author from '@/components/author';
import Section from '@/components/section';
import Skill from '@/components/skill';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { BiWrench } from 'react-icons/bi';

const SkillsSection = () => {
  return (
    <Section id='skills'>
      {' '}
      <Author
        name='Skills'
        description='My Technical Proficiency'
        icon={BiWrench}
      />
      <p className='mb-5'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste hic
        dignissimos rerum! Obcaecati porro neque, dolor dolorum facilis
        consequatur ipsam exercitationem minus iusto magnam cum nihil? Ut
        voluptates voluptatibus impedit.
      </p>
      <div className='grid grid-cols-2 gap-8 mt-10'>
        {Skills.map((skill, index) => {
          return <Skill key={index} {...skill} />;
        })}
      </div>
    </Section>
  );
};

export default SkillsSection;
