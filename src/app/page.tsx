import { Header } from '@/components/header';
import { Landing } from '@/components/landing';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { ResumeSkillExtractor } from '@/components/resume-skill-extractor';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <SectionWrapper id="skill-analyzer" title="Resume Skill Analyzer" className="bg-muted">
          <ResumeSkillExtractor />
        </SectionWrapper>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
