import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useLanguage } from '../../contexts/LanguageContext';

interface TypewriterTextProps {
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  
  // Palabras relacionadas con SAST y seguridad
  const words = {
    es: [
      'Rápido.',
      'Seguro.',
      'Eficiente.',
      'Preciso.',
      'Confiable.',
      'Potente.',
      'Inteligente.',
      'Robusto.',
      'Moderno.',
      'Escalable.'
    ],
    en: [
      'Fast.',
      'Secure.',
      'Efficient.',
      'Precise.',
      'Reliable.',
      'Powerful.',
      'Smart.',
      'Robust.',
      'Modern.',
      'Scalable.'
    ]
  };

  const currentWords = words[language as keyof typeof words] || words.en;
  
  const displayText = useTypewriter({
    words: currentWords,
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseTime: 1500,
    loop: true
  });

  return (
    <span className={`text-primary ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
