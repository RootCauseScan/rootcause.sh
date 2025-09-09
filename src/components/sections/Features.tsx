import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';
import { features } from '../../data/features';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CodeBlock } from '../ui/CodeBlock';

export const Features: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);

  const demoCode = `$ rootcause scan ./src
[██████████████████████████████] 847 files (2.3s)

Found 12 issues:
  ❌ SQL injection (high)     src/user.py:42
  ⚠️  Hardcoded secret (med)  config/app.js:15
  ❌ Buffer overflow (crit)   lib/parser.c:128`;

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
            Built for modern teams
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Un solo tool para todos tus proyectos. Sin vendor lock-in.
          </p>
        </div>

        <div className="space-y-20">
          {/* Speed Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Zap className="text-primary" size={32} />
                <Badge variant="primary">Rust-powered</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {features[0].title}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {features[0].description}
              </p>
              <p className="text-text-secondary">
                {features[0].details}
              </p>
            </div>
            <Card>
              <CodeBlock
                code={demoCode}
                copyable={false}
                className="text-sm"
              />
            </Card>
          </div>

          {/* Rules Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-text">Rule formats supported:</h4>
                  <Badge variant="success">rule-agnostic</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Semgrep', 'YAML', 'JSON', 'Regex'].map((format) => (
                    <div key={format} className="p-3 bg-bg rounded-lg text-center">
                      <span className="text-text font-mono text-sm">{format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Settings className="text-primary" size={32} />
                <Badge variant="primary">Compatible</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {features[1].title}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {features[1].description}
              </p>
              <p className="text-text-secondary">
                {features[1].details}
              </p>
            </div>
          </div>

          {/* Multi-language Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Code className="text-primary" size={32} />
                <Badge variant="primary">8+ languages</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {features[2].title}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {features[2].description}
              </p>
              <p className="text-text-secondary">
                {features[2].details}
              </p>
            </div>
            <Card>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="text-primary font-medium">{lang}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* CI Integration Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="order-2 lg:order-1">
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
            </Card>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.GitBranch className="text-primary" size={32} />
                <Badge variant="success">SARIF ready</Badge>
              </div>
              <h3 className="text-3xl font-bold text-text mb-4">
                {features[3].title}
              </h3>
              <p className="text-xl text-text-secondary mb-6">
                {features[3].description}
              </p>
              <p className="text-text-secondary">
                {features[3].details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};