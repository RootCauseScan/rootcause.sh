import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';
import { installMethods } from '../../data/features';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { CodeBlock } from '../ui/CodeBlock';

export const Installation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollRevealVariants}
      className="py-20 bg-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t('installation.title')}
          </h2>
          <p className="text-xl text-text-secondary">
            {t('installation.subtitle')}
          </p>
        </div>

        <Card className="bg-bg max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
            {installMethods.map((method, index) => (
              <button
                key={method.name}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === index
                    ? 'bg-primary text-black'
                    : 'bg-bg text-text-secondary hover:text-text hover:bg-surface'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-text mb-2">
                {t('installation.installOn')} {installMethods[activeTab].name}
              </h3>
              {installMethods[activeTab].description && (
                <p className="text-text-secondary">
                  {installMethods[activeTab].description}
                </p>
              )}
            </div>
            <CodeBlock code={installMethods[activeTab].command} />
          </motion.div>

          {/* Quick start */}
          <div className="mt-8 rounded-lg">
            <h4 className="font-medium text-text mb-2">{t('installation.quickStart')}</h4>
            <CodeBlock 
              code={`# Scan current directory
rootcause scan .

# Scan with custom rules  
rootcause scan . --rules ./rules/

# Output SARIF for CI
rootcause scan . --format sarif > results.sarif`}
              copyable={false}
            />
          </div>
        </Card>
      </div>
    </motion.section>
  );
};