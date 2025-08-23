import Link from 'next/link';
import { SOCIAL_LINKS, NAME } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
