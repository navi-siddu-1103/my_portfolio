import Image from 'next/image';
import { SectionWrapper } from './section-wrapper';
import { ABOUT_ME } from '@/lib/data';
import { Card, CardContent } from './ui/card';

export function About() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center animate-fade-in order-1 lg:order-none">
          <Card className="rounded-full shadow-lg overflow-hidden w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] border-4 border-secondary">
            <CardContent className="p-0">
               <Image
                src={ABOUT_ME.image}
                alt="Professional photo of S M Siddalingaswamy"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
                priority
              />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 space-y-4 sm:space-y-6 text-muted-foreground animate-fade-in-up order-2 lg:order-none">
          <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left">{ABOUT_ME.bio}</p>
          <p className="text-sm sm:text-base leading-relaxed text-center lg:text-left">{ABOUT_ME.background}</p>
          <p className="text-sm sm:text-base leading-relaxed text-center lg:text-left">{ABOUT_ME.goals}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
