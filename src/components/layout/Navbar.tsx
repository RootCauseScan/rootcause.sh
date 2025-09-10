import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.rules'), path: '/rules' },
    { name: t('nav.docs'), path: 'https://docs.rootcause.sh', external: true },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('http')) return false;
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" className="rounded-lg" />
            <span className="text-xl font-bold text-text">rootcause</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-text-secondary hover:text-text transition-colors"
                >
                  <span>{item.name}</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-text-secondary hover:text-text transition-colors ${
                    isActive(item.path) ? 'text-text font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button 
              variant="ghost" 
              icon={Github}
              href="https://github.com/RootCauseScan/scanner"
              external
            >
              GitHub
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-secondary hover:text-text"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-text-secondary hover:text-text transition-colors px-2 py-1"
                  >
                    <span>{item.name}</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-text-secondary hover:text-text transition-colors px-2 py-1 ${
                      isActive(item.path) ? 'text-text font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-border">
                <LanguageToggle />
                <ThemeToggle />
                <Button 
                  variant="ghost" 
                  icon={Github}
                  href="https://github.com/RootCauseScan/scanner"
                  external
                  size="sm"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};