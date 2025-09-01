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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <Card key={project.title} className="flex flex-col overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover rounded-md"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <CardTitle className="text-xl font-bold text-primary-foreground">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold mr-2">Tech Stack:</span>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github />
                  GitHub
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
