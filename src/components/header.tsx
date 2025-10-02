'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-primary">
          <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
          CodeFolio
        </Link>
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:opacity-50 transition-opacity px-2 lg:px-3 py-2 rounded-md">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-10 w-10">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-foreground hover:bg-muted hover:text-accent-foreground transition-colors px-4 py-3 rounded-lg text-center touch-manipulation">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
