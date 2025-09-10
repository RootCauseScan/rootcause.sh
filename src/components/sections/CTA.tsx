import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollRevealVariants}
      className="py-20 bg-gradient-to-br from-primary/10 to-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-6">
            {t('cta.title')}
            <span className="text-primary block">{t('cta.titleAccent')}</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              icon={ArrowRight}
              iconPosition="right"
              href="https://docs.rootcause.sh"
              external
            >
              {t('cta.readDocs')}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              icon={Github}
              href="https://github.com/RootCauseScan/scanner"
              external
            >
              {t('cta.starGithub')}
            </Button>
          </div>

          <div className="mt-8 text-text-secondary text-sm">
            <p>{t('cta.footer')}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};