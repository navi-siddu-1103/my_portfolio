import { SectionWrapper } from './section-wrapper';
import { ACHIEVEMENTS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications" className="bg-muted">
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <li key={achievement.title} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mt-1">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
