import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import { useThemeUrl } from '../../hooks/useThemeUrl';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { addThemeToUrl } = useThemeUrl();

  const links = [
    { name: t('footer.links.github'), href: 'https://github.com/RootCauseScan/scanner', external: true },
    { name: t('footer.links.docs'), href: 'https://docs.rootcause.sh', external: true },
    { name: t('footer.links.blog'), href: 'https://www.m3str3.com/posts', external: true },
    { name: t('footer.links.privacy'), href: '/privacy', external: false }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Logo and description */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <Logo size="sm" className="rounded" />
              <span className="text-lg font-bold text-text">rootcause</span>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={addThemeToUrl(link.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-text-secondary hover:text-text transition-colors text-sm"
                  >
                    <span>{link.name}</span>
                    {link.name === t('footer.links.github') && <Github size={14} />}
                    {link.name === t('footer.links.docs') && <ExternalLink size={14} />}
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
            {t('footer.copyright')}
          </p>
          <p className="text-text-secondary text-xs">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};