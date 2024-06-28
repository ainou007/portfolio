import { IconType } from 'react-icons';

type TAuthorProps = {
  name: string;
  description: string;
  icon: IconType;
};
const Author = ({ name, description, icon: Icon }: TAuthorProps) => {
  return (
    <div className='flex gap-2 mb-3 items-center'>
      <div className='size-14 rounded-full bg-gray-200 flex items-center justify-center'>
        <Icon size={20} />
      </div>
      <div className='flex-1'>
        <p className='text-primary font-semibold'> {name} </p>
        <p className='text-xs text-gray-400'> {description} </p>
      </div>
    </div>
  );
};

export default Author;
