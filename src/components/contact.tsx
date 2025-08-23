import { SectionWrapper } from './section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SOCIAL_LINKS, NAME, CONTACT_EMAIL } from '@/lib/data';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 text-primary">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out via email, or connect with me on social media.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground group-hover:text-accent transition-colors">{CONTACT_EMAIL}</span>
              </a>
              {SOCIAL_LINKS.map(link => (
                 <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <link.icon className="w-5 h-5 text-accent" />
                  <span className="text-foreground group-hover:text-accent transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-muted p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
             <h3 className="text-2xl font-bold mb-2 text-primary">Send a Message</h3>
             <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
