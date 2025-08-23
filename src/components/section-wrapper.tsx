import { cn } from '@/lib/utils';
import type React from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SectionWrapper = ({ id, title, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-primary">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
