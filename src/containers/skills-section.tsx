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
        With a strong foundation in front-end development, I bring a diverse
        skill set to the table. My expertise lies in creating intuitive,
        responsive, and visually appealing web applications. Below are some of
        the key technologies and tools I excel in:
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
