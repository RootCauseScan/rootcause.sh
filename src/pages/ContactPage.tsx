import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal, scrollRevealVariants } from '../hooks/useScrollReveal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const ref = useRef(null);
  const controls = useScrollReveal(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `rootcause: Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:hello@rootcause.sh?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Soporte empresarial, preguntas técnicas, contribuciones. 
              Estamos aquí para ayudar.
            </p>
            <Button variant="ghost">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Volver al inicio
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact form and options */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact form */}
            <Card>
              <h2 className="text-2xl font-bold text-text mb-6">
                Send us a message
              </h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-text-secondary">
                    Tu cliente de email se abrió con el mensaje preparado. 
                    Si no se abrió automáticamente, puedes escribir directamente a{' '}
                    <a href="mailto:hello@rootcause.sh" className="text-primary hover:underline">
                      hello@rootcause.sh
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-text"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-text"
                      placeholder="tu@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-text"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    icon={Send}
                    iconPosition="right"
                    className="w-full"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact options */}
            <div className="space-y-8">
              <Card>
                <h3 className="text-xl font-bold text-text mb-4">
                  Otras formas de contacto
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/RootCauseScan/scanner/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-bg hover:bg-border rounded-lg transition-colors group"
                  >
                    <MessageSquare size={24} className="text-primary mr-4" />
                    <div>
                      <h4 className="font-medium text-text group-hover:text-primary">
                        GitHub Discussions
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Preguntas de la comunidad y soporte
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/RootCauseScan/scanner/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-bg hover:bg-border rounded-lg transition-colors group"
                  >
                    <Github size={24} className="text-primary mr-4" />
                    <div>
                      <h4 className="font-medium text-text group-hover:text-primary">
                        GitHub Issues
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Reportar bugs y solicitar features
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 bg-bg rounded-lg">
                    <Mail size={24} className="text-primary mr-4" />
                    <div>
                      <h4 className="font-medium text-text">
                        Email directo
                      </h4>
                      <a 
                        href="mailto:contact@rootcause.sh"
                        className="text-text-secondary text-sm hover:text-primary"
                      >
                        contact@rootcause.sh
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-text mb-4">
                  Enterprise support
                </h3>
                <p className="text-text-secondary mb-4">
                  ¿Necesitas soporte dedicado, SLA garantizado o consultoría personalizada? 
                  Contáctanos para opciones enterprise.
                </p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• Respuesta prioritaria en 24h</li>
                  <li>• Reglas personalizadas</li>
                  <li>• Integración on-premise</li>
                  <li>• Training para equipos</li>
                </ul>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold text-text mb-4">
                  PGP Encryption
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Para comunicaciones sensibles, puedes usar nuestra clave PGP pública.
                </p>
                <code className="text-xs text-text-secondary font-mono bg-bg p-2 rounded block">
                  Fingerprint: 1234 5678 9ABC DEF0 1234 5678 9ABC DEF0 12345678
                </code>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};