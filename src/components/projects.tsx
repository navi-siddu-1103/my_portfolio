import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from './section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <Card key={project.title} className="flex flex-col overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-[1.02] max-w-sm mx-auto w-full" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader className="p-4 sm:p-6">
              <div className="aspect-[4/3] relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-primary line-clamp-2">{project.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base line-clamp-3">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 sm:p-6 pt-0">
              <div className="space-y-3">
                <span className="text-sm font-semibold text-foreground">Tech Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 p-4 sm:p-6">
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="touch-manipulation">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              {project.liveUrl && (
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="touch-manipulation">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
