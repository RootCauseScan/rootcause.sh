import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useScrollReveal, scrollRevealVariants } from '../hooks/useScrollReveal';
import { ruleFormats } from '../data/features';
import { Card } from '../components/ui/Card';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const RulesPage: React.FC = () => {
  const ref = useRef(null);
  const controls = useScrollReveal(ref);

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
              Rule-agnostic
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              Bring your rules
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Trae tus reglas existentes o usa las nuestras. Compatible con Semgrep, YAML, JSON y formatos personalizados. Sin lock-in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                href="https://docs.rootcause.sh/rules"
                external
                icon={ExternalLink}
                iconPosition="right"
              >
                Ver documentación completa
              </Button>
              <Button variant="ghost">
                <Link to="/" className="flex items-center gap-2">
                  Volver al inicio <ArrowRight size={16} />
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
              Formatos soportados
            </h2>
            <p className="text-xl text-text-secondary">
              Reutiliza reglas existentes o crea nuevas con sintaxis familiar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ruleFormats.map((format, index) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-text">{format.name}</h3>
                    <Badge variant="secondary">{format.name.toLowerCase()}</Badge>
                  </div>
                  
                  <p className="text-text-secondary mb-6">
                    {format.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-text mb-2">Regla:</h4>
                      <CodeBlock 
                        code={format.code} 
                        language={format.name === 'JSON' ? 'json' : 'yaml'}
                      />
                    </div>

                    {format.example && (
                      <div>
                        <h4 className="text-sm font-medium text-text mb-2">Código vulnerable detectado:</h4>
                        <CodeBlock 
                          code={format.example}
                          language="javascript"
                          copyable={false}
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Performance note */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-text mb-4">
                  Rendimiento optimizado
                </h3>
                <p className="text-text-secondary mb-4">
                  Todos los formatos se procesan con la misma velocidad. El engine interno 
                  optimiza automáticamente las reglas para máximo rendimiento.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    Compilación de reglas
                  </span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    Cache inteligente
                  </span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary">
                    Análisis paralelo
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Examples section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-text mb-6">
              ¿Necesitas más ejemplos?
            </h3>
            <p className="text-text-secondary mb-8">
              La documentación incluye reglas pre-construidas para casos comunes 
              y guías para crear reglas personalizadas.
            </p>
            <Button 
              href="https://docs.rootcause.sh/rules/examples"
              external
              icon={ExternalLink}
              iconPosition="right"
            >
              Ver ejemplos en Docs
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};