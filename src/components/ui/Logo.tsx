import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const { theme } = useTheme();
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-20 h-20'
  };

  const getLogoSrc = () => {
    if (theme === 'dark') {
      return size === 'lg' ? '/icon-512x512.png' : '/icon-192x192.png';
    }
    // Para modo claro, usar los iconos originales
    return size === 'lg' ? '/light-icon-512x512.png' : '/light-icon-192x192.png';
  };

  return (
    <img 
      src={getLogoSrc()} 
      alt="rootcause logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};
