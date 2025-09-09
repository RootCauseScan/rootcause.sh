import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../../hooks/useScrollReveal';

export const Timeline: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);

  const steps = [
    {
      icon: 'Download',
      title: 'Fetch',
      description: 'Clone repo or fetch rules from registry'
    },
    {
      icon: 'FileSearch',
      title: 'Parse',
      description: 'Multi-threaded parsing of source files'
    },
    {
      icon: 'Target',
      title: 'Match',
      description: 'Pattern matching against AST and text'
    },
    {
      icon: 'FileText',
      title: 'Report',
      description: 'Generate SARIF, JSON, or custom format'
    }
  ];

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
            How it works
          </h2>
          <p className="text-xl text-text-secondary">
            Four steps to comprehensive security analysis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<any>;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative text-center"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border z-0" />
                  )}
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent size={24} className="text-black" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-black text-sm font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};