import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type TSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

const Section = ({ children, id, className = '' }: TSectionProps) => {
  return (
    <section
      className={cn('shadow-main border rounded-sm  p-5', className)}
      id={id}>
      {children}
    </section>
  );
};

export default Section;
