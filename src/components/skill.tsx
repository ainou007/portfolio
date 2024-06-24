import Rate from './rate';
import { TSkill } from '@/app/constants/skills';

const Skill = ({
  purcent,
  label,
  description,
  projects,
  icon: Icon,
  color,
}: TSkill) => {
  return (
    <div className='shadow-main  p-4 rounded-md space-y-3 grid grid-cols-12 gap-5'>
      <div className='col-span-4 flex items-center justify-center'>
        <Icon size={65} color={color} />
      </div>
      <div className='col-span-8 '>
        <p className='font-bold text-sm mb-1 '>
          {label} ({projects} projects)
        </p>
        <Rate purcent={purcent} />

        <p className='text-sm my-1.5'>{description.message}</p>
        <div className='flex gap-1.5'>
          {description.micro.map((micro, index) => {
            const { icon: Icon, color } = micro;
            return <Icon key={index} size={20} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
