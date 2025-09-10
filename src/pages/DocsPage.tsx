import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Book, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

export const DocsPage: React.FC = () => {
  const { t } = useLanguage();

  React.useEffect(() => {
    // Redirect to docs after a short delay to show this page
    const timer = setTimeout(() => {
      window.open('https://docs.rootcause.sh', '_blank');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const quickLinks = [
    { title: t('docs.links.gettingStarted'), href: 'https://docs.rootcause.sh/getting-started' },
    { title: t('docs.links.ruleWriting'), href: 'https://docs.rootcause.sh/rules' },
    { title: t('docs.links.cicd'), href: 'https://docs.rootcause.sh/cicd' },
    { title: t('docs.links.api'), href: 'https://docs.rootcause.sh/api' }
  ];

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Book size={32} className="text-black" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t('docs.title')}
          </h1>
          
          <p className="text-xl text-text-secondary mb-8">
            {t('docs.subtitle')}
          </p>

          <Card className="mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text">{t('docs.quickLinks')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-bg hover:bg-border rounded-lg transition-colors group"
                  >
                    <span className="text-text group-hover:text-primary font-medium">
                      {link.title}
                    </span>
                    <ExternalLink size={16} className="text-text-secondary group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://docs.rootcause.sh"
              external
              icon={ExternalLink}
              iconPosition="right"
              size="lg"
            >
              {t('docs.openDocs')}
            </Button>
            
            <Button variant="ghost" size="lg">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                {t('docs.backHome')}
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-text-secondary text-sm">
            <p>{t('docs.redirectNote')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};