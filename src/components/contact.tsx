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
      <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">Contact Information</h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Feel free to reach out via email, or connect with me on social media.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50 transition-colors touch-manipulation">
                <Mail className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors flex-shrink-0" />
                <span className="text-foreground group-hover:text-accent transition-colors text-sm sm:text-base break-all">{CONTACT_EMAIL}</span>
              </a>
              {SOCIAL_LINKS.map(link => (
                 <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50 transition-colors touch-manipulation">
                  <link.icon className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors flex-shrink-0" />
                  <span className="text-foreground group-hover:text-accent transition-colors text-sm sm:text-base">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-muted p-6 sm:p-8">
             <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Send a Message</h3>
             <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required className="h-12" />
              <Input type="email" placeholder="Your Email" required className="h-12" />
              <Textarea placeholder="Your Message" rows={4} required className="min-h-[120px] resize-none" />
              <Button type="submit" className="w-full h-12 text-base touch-manipulation">Send Message</Button>
            </form>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
