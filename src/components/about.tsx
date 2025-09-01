import Image from 'next/image';
import { SectionWrapper } from './section-wrapper';
import { ABOUT_ME } from '@/lib/data';
import { Card, CardContent } from './ui/card';

export function About() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-background">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center animate-fade-in">
          <Card className="rounded-full shadow-lg overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[300px] border-4 border-secondary">
            <CardContent className="p-0">
               <Image
                src={ABOUT_ME.image}
                alt="Professional photo of S M Siddalingaswamy"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
              />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 space-y-6 text-muted-foreground animate-fade-in-up">
          <p className="text-lg leading-relaxed">{ABOUT_ME.bio}</p>
          <p className="leading-relaxed">{ABOUT_ME.background}</p>
          <p className="leading-relaxed">{ABOUT_ME.goals}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
