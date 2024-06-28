import Author from '@/components/author';
import Section from '@/components/section';
import Skill from '@/components/skill';
import { getSkills } from '@/lib/skills';
import { BiWrench } from 'react-icons/bi';

const SkillsSection = async () => {
  const skillsList = await getSkills();

  return (
    <Section id='skills'>
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-10'>
        {skillsList.map((skill) => {
          return <Skill key={skill._id} {...skill} />;
        })}
      </div>
    </Section>
  );
};

export default SkillsSection;
