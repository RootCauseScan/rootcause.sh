import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CodeBlock } from '../ui/CodeBlock';

export const Features: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();

  const demoCode = `$> rootcause ./src
⚠ Se encontraron 2 problemas:

HIGH src/api/users.py:23 sql-injection
    SQL injection vulnerability detected
    ↳  cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")

CRITICAL src/templates/dashboard.html:15 xss-reflected
    Reflected XSS in user input
    ↳  <div>Welcome {{ user_input }}</div>

Total: 2`;

  const languages = ['C/C++', 'Go', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Rust', 'PHP'];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollRevealVariants}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="space-y-20">
          {/* Speed Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Zap className="text-primary" size={32} />
                <Badge variant="primary">{t('features.speed.badge')}</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {t('features.speed.title')}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {t('features.speed.description')}
              </p>
              <p className="text-text-secondary">
                {t('features.speed.details')}
              </p>
            </div>
            <CodeBlock
              code={demoCode}
              copyable={false}
              className="text-sm"
            />
          </div>

          {/* Rules Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-code border border-code rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-code">Rule formats supported:</h4>
                  <h4 className="font-medium text-code">{t('features.rules.supported')}</h4>
                  <Badge variant="success">{t('features.rules.ruleAgnostic')}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Semgrep', 'YAML', 'JSON', 'Regex'].map((format) => (
                    <div key={format} className="p-3 bg-surface/20 rounded-lg text-center">
                      <span className="text-code font-mono text-sm">{format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Settings className="text-primary" size={32} />
                <Badge variant="primary">{t('features.rules.badge')}</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {t('features.rules.title')}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {t('features.rules.description')}
              </p>
              <p className="text-text-secondary">
                {t('features.rules.details')}
              </p>
            </div>
          </div>

          {/* Multi-language Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Code className="text-primary" size={32} />
                <Badge variant="primary">{t('features.multilang.badge')}</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {t('features.multilang.title')}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {t('features.multilang.description')}
              </p>
              <p className="text-text-secondary">
                {t('features.multilang.details')}
              </p>
            </div>
            <div className="bg-code border border-code rounded-xl p-6">
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-primary/20 rounded-lg text-center hover:bg-primary/30 transition-colors"
                  >
                    <span className="text-primary font-medium">{lang}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CI Integration Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <CodeBlock
                code={`# GitHub Actions
- name: Security Scan
  uses: rootcause/action@v1
  with:
    sarif-upload: true
    
# GitLab CI  
security_scan:
  image: rootcause/cli
  script: rootcause scan .
  artifacts:
    reports:
      sast: results.sarif`}
                language="yaml"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.GitBranch className="text-primary" size={32} />
                <Badge variant="success">{t('features.ci.badge')}</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {t('features.ci.title')}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {t('features.ci.description')}
              </p>
              <p className="text-text-secondary">
                {t('features.ci.details')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};