import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../contexts/LanguageContext';

export const KeyStats: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();

  const stats = [
    { value: '<100ms', label: t('stats.perFile'), description: t('stats.avgAnalysis') },
    { value: 'SARIF', label: t('stats.ready'), description: t('stats.cicdOutput') },
    { value: '8+', label: t('stats.languages'), description: t('stats.nativeSupport') },
    { value: 'OSS', label: t('stats.license'), description: t('stats.apacheLicense') }
  ];

  return (
    <section ref={ref} className="py-20 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-medium text-text mb-1">{stat.label}</div>
              {stat.description && (
                <div className="text-sm text-text-secondary">{stat.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};