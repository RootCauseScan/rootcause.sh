import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  copyable?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = '', 
  copyable = true,
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      <pre className="bg-code border border-code rounded-lg p-4 overflow-x-auto">
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