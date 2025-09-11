import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/Card';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const RulesPage: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);
  const { t } = useLanguage();
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

  const ruleFormats = [
    {
      name: 'YAML',
      description: t('rules.ruleTypes.yaml'),
      code: `rules:
  - id: "python.security.no-eval"
    severity: "HIGH"
    description: "Avoid using eval() function"
    message: "Do not use eval() with untrusted input"
    category: "python"
    pattern: "eval(...)"`,
      example: 'result = eval(user_input)'
    },
    {
      name: 'Taint',
      description: t('rules.ruleTypes.taint'),
      code: `rules:
  - id: insecure-hashes
    message: Detected cryptographically insecure hashing function
    pattern-either:
      - pattern: md2::Md2::new(...)
      - pattern: md4::Md4::new(...)
      - pattern: md5::Md5::new(...)
      - pattern: sha1::Sha1::new(...)
    metadata:
      cwe: "CWE-328: Use of Weak Hash"
      confidence: HIGH
      category: security
    languages:
      - rust
    severity: WARNING`,
      example: 'let hasher = md5::Md5::new();\nlet hasher = sha1::Sha1::new();'
    },
    {
      name: 'OPA/Rego',
      description: t('rules.ruleTypes.opa'),
      code: `package audit.security

# Complete rule: array of objects with "msg"
deny_wasm := [ {"msg": msg} |
  input.file_type == "dockerfile";
  node := input.nodes[_];
  node.path == "USER";
  contains(node.value, "root");
  msg := "Container runs as root user"
]

# Metadata (opa-rego.wasm.json)
{
  "id": "opa.docker.no-root",
  "severity": "HIGH",
  "category": "docker",
  "message": "Container runs as root user",
  "entrypoint": "data.audit.security.deny_wasm"
}`,
      example: 'FROM ubuntu:20.04\nUSER root\nRUN apt-get update'
    },
    {
      name: 'JSON',
      description: t('rules.ruleTypes.json'),
      code: `{
  "rules": {
    "config": {
      "no_default_password": {
        "description": "Detects use of default password 'admin' in YAML configurations",
        "severity": "HIGH",
        "query": {
          "type": "yaml",
          "path": "database.password",
          "value": "admin",
          "message": "Default password 'admin' used",
          "remediation": "Define a secure password instead of the default value"
        }
      }
    }
  }
}`,
      example: 'database:\n  password: admin\n  host: localhost'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="primary" className="mb-6">
              {t('rules.badge')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              {t('rules.title')}
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              {t('rules.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                href="https://docs.rootcause.sh/rules"
                external
              >
                {t('rules.viewDocs')}
              </Button>
              <Button variant="ghost">
                <Link to="/" className="flex items-center gap-2">
                  {t('rules.backHome')} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rule formats */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-6">
              {t('rules.formatsTitle')}
            </h2>
            <p className="text-xl text-text-secondary">
              {t('rules.formatsSubtitle')}
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl blur-3xl" />
              
              {/* Navigation buttons */}
              <button
                onClick={() => setCurrentRuleIndex((prev) => 
                  prev === 0 ? ruleFormats.length - 1 : prev - 1
                )}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full bg-surface/90 backdrop-blur-sm border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                <ChevronLeft size={24} className="text-text" />
              </button>
              
              <button
                onClick={() => setCurrentRuleIndex((prev) => 
                  prev === ruleFormats.length - 1 ? 0 : prev + 1
                )}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full bg-surface/90 backdrop-blur-sm border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                <ChevronRight size={24} className="text-text" />
              </button>

              {/* Carousel content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRuleIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                              <span className="text-primary font-bold text-lg">
                                {ruleFormats[currentRuleIndex].name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-text">{ruleFormats[currentRuleIndex].name}</h3>
                              <p className="text-text-secondary text-sm">Rule Format</p>
                            </div>
                          </div>
                          <Badge variant="success" className="text-sm px-4 py-2">
                            {ruleFormats[currentRuleIndex].name.toLowerCase()}
                          </Badge>
                        </div>
                        
                        <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                          {ruleFormats[currentRuleIndex].description}
                        </p>

                        <div className="space-y-8">
                          <div>
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <h4 className="text-sm font-semibold text-text uppercase tracking-wide">{t('rules.ruleLabel')}</h4>
                            </div>
                            <div className="bg-black border-2 border-primary/30 rounded-xl p-6 shadow-inner">
                              <pre className="text-primary text-sm font-mono leading-relaxed overflow-x-auto">
                                <code>{ruleFormats[currentRuleIndex].code}</code>
                              </pre>
                            </div>
                          </div>

                          {ruleFormats[currentRuleIndex].example && (
                            <div>
                              <div className="flex items-center space-x-2 mb-4">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                                <h4 className="text-sm font-semibold text-text uppercase tracking-wide">{t('rules.vulnerableCode')}</h4>
                              </div>
                              <div className="bg-black border-2 border-primary/30 rounded-xl p-6 shadow-inner">
                                <pre className="text-primary text-sm font-mono leading-relaxed overflow-x-auto">
                                  <code>{ruleFormats[currentRuleIndex].example}</code>
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced dots indicator */}
              <div className="flex justify-center mt-10 space-x-3">
                {ruleFormats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRuleIndex(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentRuleIndex 
                        ? 'w-8 h-3 bg-primary rounded-full' 
                        : 'w-3 h-3 bg-border rounded-full hover:bg-primary/50 hover:scale-125'
                    }`}
                  >
                    {index === currentRuleIndex && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Performance note */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-text mb-4">
                  {t('rules.performance.title')}
                </h3>
                <p className="text-text-secondary mb-4">
                  {t('rules.performance.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    {t('rules.performance.compilation')}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    {t('rules.performance.cache')}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    {t('rules.performance.parallel')}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Examples section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-text mb-6">
              {t('rules.examples.title')}
            </h3>
            <p className="text-text-secondary mb-8">
              {t('rules.examples.description')}
            </p>
            <Button 
              href="https://docs.rootcause.sh/rules/examples"
              external
            >
              {t('rules.examples.viewExamples')}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};