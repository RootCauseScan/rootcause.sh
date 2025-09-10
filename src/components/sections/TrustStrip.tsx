import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../contexts/LanguageContext';

export const TrustStrip: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();

  const companies = [
    'Company A', 'Company B', 'Company C', 'Company D', 'Company E'
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollRevealVariants}
      className="py-16 border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-text-secondary text-lg">
            {t('trust.title')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center h-12 px-6 bg-surface border border-border rounded-lg"
            >
              <span className="text-text-secondary font-medium">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};