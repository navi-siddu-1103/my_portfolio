import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAME, INTRO } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export function Landing() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary mb-4">
            {NAME}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
            {INTRO}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
