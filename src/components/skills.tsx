import { SectionWrapper } from './section-wrapper';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Braces, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skillCategories: { title: string, skills: string[], icon: LucideIcon }[] = [
  { title: 'Languages', skills: SKILLS.languages, icon: Code },
  { title: 'Frameworks & Libraries', skills: SKILLS.frameworks, icon: Braces },
  { title: 'Databases', skills: SKILLS.databases, icon: Database },
  { title: 'Tools & Platforms', skills: SKILLS.tools, icon: Wrench },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" title="My Skills" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={category.title} className="shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in bg-card" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader className="flex flex-row items-center gap-4">
              <category.icon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-semibold text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
