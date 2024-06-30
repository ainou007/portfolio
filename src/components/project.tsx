'use client';
import { GrCompliance, GrFormView } from 'react-icons/gr';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import { RiGithubLine } from 'react-icons/ri';
import { Badge } from './ui/badge';
import { BsTags } from 'react-icons/bs';
import { FiLayout } from 'react-icons/fi';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TProject } from '@/lib/types';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import Link from 'next/link';

type TProjectPropps = TProject & {
  direction: 'left' | 'right';
};

const Project = ({
  label,
  description,
  gallery,
  tags,
  demoLink,
  repoLink,
  isCompleted,
  isResponsive,
  direction = 'left',
}: TProjectPropps) => {
  const [activeImage, setActiveImage] = useState(0);

  const changeAtivceImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <div className='grid grid-cols-12 gap-y-8 xl:gap-x-5 '>
      <div
        className={cn(
          'col-span-12 xl:col-span-5',
          direction == 'left' ? 'xl:order-first' : 'xl:-order-first'
        )}>
        <div className='mb-3 overflow-hidden border rounded'>
          <Image
            className='rounded size-full object-fill bg-center'
            src={urlForImage(gallery[activeImage])}
            height={0}
            width={1500}
            style={{ height: '100%', width: '100%' }}
            alt=''
          />
        </div>
        <div className='grid grid-cols-3 gap-3 '>
          {gallery.map((image, index) => {
            return (
              <div
                key={index}
                className={cn(
                  'rounded ring-1 ring-offset-2   overflow-hidden',
                  urlForImage(image) == urlForImage(gallery[activeImage]) ?
                    'ring-2 ring-primary ring-offset-2'
                  : ''
                )}>
                <Image
                  width={1000}
                  height={1000}
                  onClick={() => {
                    changeAtivceImage(index);
                  }}
                  src={urlForImage(gallery[index])}
                  alt=''
                  className='rounded object-cover size-full cursor-pointer hover:scale-150 hover:rotate-3 transition-all ease-in-out duration-700'
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='col-span-12 xl:col-span-7 '>
        <h3 className='text-primary font-semibold text-xl mb-3 leading-none  '>
          {label}
        </h3>

        <p className='text-sm'>{description}</p>
        <Separator className='my-3' />
        <div className='space-y-2'>
          <div className='text-sm flex gap-5 '>
            <div className='flex gap-1 items-center'>
              <GrCompliance />
              Status
            </div>
            <div>{isCompleted ? 'Completed' : 'In Progrsse'}</div>
          </div>
          <div className='text-sm grid grid-cols-2 '>
            <div className='flex gap-1 items-center'>
              <FiLayout /> Layout
            </div>
            <div>{isResponsive ? 'responsive' : 'desktop only'}</div>
          </div>
          <div className='text-sm grid grid-cols-1 '>
            <div className='flex gap-1 items-center mb-1'>
              <BsTags />
              Tags
            </div>
            <div className='flex gap-1 flex-wrap'>
              {tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
        <Separator className='my-3' />
        <div className='flex flex-col xs:flex-row gap-3'>
          <Link
            target='_blank'
            href={demoLink}
            className={cn(buttonVariants({ variant: 'default' }))}>
            <GrFormView />
            View demo
          </Link>

          <Link
            target='_blank'
            href={repoLink}
            className={cn(buttonVariants({ variant: 'outline' }))}>
            <RiGithubLine /> Source code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
