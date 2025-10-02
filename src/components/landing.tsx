import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAME, INTRO } from '@/lib/data';
import { ArrowDown } from 'lucide-react';

export function Landing() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-tight">
            {NAME}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-3xl mx-auto text-muted-foreground leading-relaxed px-4">
            {INTRO}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[140px]">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section" className="block p-2 hover:scale-110 transition-transform">
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
