
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS, NAME } from '@/lib/data';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} {NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="p-2 rounded-lg hover:bg-background transition-colors touch-manipulation">
                <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
