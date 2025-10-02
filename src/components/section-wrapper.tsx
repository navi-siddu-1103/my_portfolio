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
    <section id={id} className={cn('py-12 sm:py-16 lg:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 font-headline text-primary leading-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
