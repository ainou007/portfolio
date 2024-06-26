import { GrFormView } from 'react-icons/gr';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { RiGithubLine } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';
import { Badge } from './ui/badge';
import { BsTags } from 'react-icons/bs';
import { FiLayout } from 'react-icons/fi';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type TProjectPropps = {
  direction: 'left' | 'right';
};

const Project = ({ direction }: TProjectPropps) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551263640-1c007852f616?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const changeAtivceImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <div>
      <div className='grid grid-cols-12 gap-5  '>
        <div
          className={cn(
            'col-span-5',
            direction == 'left' ? 'order-first' : '-order-first'
          )}>
          <div className='mb-2 h-48 overflow-hidden'>
            <img
              className='rounded size-full object-cover bg-center'
              src={images[activeImage]}
              alt=''
            />
          </div>
          <div className='grid grid-cols-4 gap-3 '>
            {images.map((image, index) => {
              return (
                <div
                  className={cn(
                    'rounded  overflow-hidden',
                    image == images[activeImage] ?
                      'ring-2 ring-primary ring-offset-2'
                    : ''
                  )}>
                  <img
                    onClick={() => {
                      changeAtivceImage(index);
                    }}
                    key={index}
                    src={image}
                    alt=''
                    className='rounded object-cover size-full cursor-pointer hover:scale-150 hover:rotate-3 transition-all ease-in-out duration-700 '
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-7 '>
          <h3 className='text-primary font-semibold text-xl mb-3 leading-none  '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>

          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            molestiae aliquam vel doloribus laudantium cupiditate
          </p>
          <Separator className='my-3' />
          <div className='space-y-2'>
            <div className='text-sm grid grid-cols-2 '>
              <div className='flex gap-1 items-center'>
                <MdDateRange /> Published at
              </div>
              <div>27/10/21</div>
            </div>
            <div className='text-sm grid grid-cols-2 '>
              <div className='flex gap-1 items-center'>
                <FiLayout /> Layout
              </div>
              <div>Responsive</div>
            </div>
            <div className='text-sm grid grid-cols-2 '>
              <div className='flex gap-1 items-center'>
                <BsTags />
                Tags
              </div>
              <div className='flex gap-1 flex-wrap'>
                <Badge>tailwind</Badge>
                <Badge>css</Badge>
                <Badge>html</Badge>
                <Badge>react</Badge>
                <Badge>typescript</Badge>
              </div>
            </div>
          </div>
          <Separator className='my-3' />
          <div className='flex gap-3'>
            <Button className=''>
              <GrFormView />
              View demo
            </Button>
            <Button className='' variant={'outline'}>
              <RiGithubLine /> Source code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
