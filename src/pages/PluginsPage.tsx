import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Puzzle, Search, Wand2, Microscope, FileText } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

export const PluginsPage: React.FC = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: Search,
      title: 'Discover',
      description: t('plugins.capabilities.discover')
    },
    {
      icon: FileText,
      title: 'Rules',
      description: t('plugins.capabilities.rules')
    },
    {
      icon: Wand2,
      title: 'Transform',
      description: t('plugins.capabilities.transform')
    },
    {
      icon: Microscope,
      title: 'Analyze',
      description: t('plugins.capabilities.analyze')
    },
    {
      icon: FileText,
      title: 'Report',
      description: t('plugins.capabilities.report')
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-6">
            <Puzzle size={14} className="mr-2" />
            {t('plugins.badge')}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('plugins.title')}
          </h1>

          <p className="text-xl text-text-secondary mb-8">
            {t('plugins.subtitle')}
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            {t('plugins.description')}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('plugins.capabilitiesTitle')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                        <p className="text-text-secondary">{capability.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">
              {t('plugins.cta.title')}
            </h2>
            <p className="text-text-secondary mb-6">
              {t('plugins.cta.description')}
            </p>
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              href="https://docs.rootcause.sh"
              external
            >
              {t('plugins.cta.button')}
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
