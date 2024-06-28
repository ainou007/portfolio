'use client';
import Rate from './rate';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { TSkill } from '@/lib/types';

const Skill = ({
  _id,
  label,
  purcent,
  image,
  description,
  microsysteme,
}: TSkill) => {
  return (
    <div className='shadow-main border p-4 rounded-md space-y-2 grid grid-cols-12'>
      <div className='col-span-full xs:col-span-3 md:col-span-full xl:col-span-3  flex items-center justify-center'>
        <Image
          src={urlForImage(image)}
          height={0}
          width={1000}
          style={{ height: '60px', width: 'auto' }}
          alt=''
        />
      </div>
      <div className='col-span-full xs:col-span-9  md:col-span-full xl:col-span-9 '>
        <h3 className='font-bold text-sm mb-1 '>{label}</h3>
        <Rate purcent={purcent} />
        <p className='text-sm my-1.5'>{description}</p>
        <div className='flex gap-x-1 mt-3'>
          {microsysteme &&
            microsysteme.length > 0 &&
            microsysteme.map((micro, index) => {
              return (
                <Image
                  key={index}
                  alt=''
                  src={urlForImage(micro)}
                  height={0}
                  width={150}
                  className='size-5'
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
