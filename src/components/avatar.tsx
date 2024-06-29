import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type TAvatar = {
  url?: string;
  rounded?: boolean;
  size: number;
  className?: string;
};
const Avatar = ({
  url = '/avatar.jpg',
  size,
  rounded = true,
  className = '',
}: TAvatar) => {
  return (
    <Image
      src={url}
      className={cn(
        'ring-2 ring-offset-2 ring-primary',
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
      alt=''
      width={size}
      height={size}
    />
  );
};

export default Avatar;
