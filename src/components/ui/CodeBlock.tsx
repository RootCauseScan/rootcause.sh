import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  copyable?: boolean;
  className?: string;
  variant?: 'default' | 'embedded';
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = '', 
  copyable = true,
  className = '',
  variant = 'default'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerClasses = variant === 'embedded' 
    ? `relative ${className}`
    : `relative bg-code border border-code rounded-xl p-6 ${className}`;

  return (
    <div className={containerClasses}>
      <pre className={variant === 'embedded' ? 'bg-surface/20 border border-surface/30 rounded-lg p-4 overflow-x-auto' : 'overflow-x-auto'}>
        <code className="font-mono text-sm text-code">
          {code}
        </code>
      </pre>
      
      {copyable && (
        <motion.button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-surface/80 hover:bg-surface text-text-secondary hover:text-text transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </motion.button>
      )}
    </div>
  );
};