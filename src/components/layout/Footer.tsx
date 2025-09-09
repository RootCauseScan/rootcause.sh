import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Footer: React.FC = () => {
  const links = [
    { name: 'GitHub', href: 'https://github.com/rootcause/cli', external: true },
    { name: 'Docs', href: 'https://docs.rootcause.sh', external: true },
    { name: 'Blog', href: '#', external: false },
    { name: 'Privacy', href: '#', external: false }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Logo and description */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-black text-sm">🐹</span>
              </div>
              <span className="text-lg font-bold text-text">rootcause</span>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              SAST open source en Rust. Rápido, extensible, multi-lenguaje.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-text-secondary hover:text-text transition-colors text-sm"
                  >
                    <span>{link.name}</span>
                    {link.name === 'GitHub' && <Github size={14} />}
                    {link.name === 'Docs' && <ExternalLink size={14} />}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-text-secondary hover:text-text transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-secondary text-sm">
            © 2025 rootcause. Licensed under Apache 2.0.
          </p>
          <p className="text-text-secondary text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};