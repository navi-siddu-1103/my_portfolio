import { SectionWrapper } from './section-wrapper';
import { ACHIEVEMENTS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications" className="bg-muted">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4 sm:space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <li key={achievement.title} className="flex gap-3 sm:gap-4 items-start animate-fade-in p-4 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg text-primary mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{achievement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
