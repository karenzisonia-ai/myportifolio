import React from 'react';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="py-12 border-t border-dark-lighter">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6">
          <SocialLinks orientation="horizontal" className="justify-center" />
          
          <div className="space-y-2">
            <p className="text-text-secondary">
              Designed & Built by{' '}
              <span className="text-cyan-primary font-semibold">Sonia Karenzi Uwase</span>
            </p>
            
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
