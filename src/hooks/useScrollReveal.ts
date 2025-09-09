import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';

export const useScrollReveal = (ref: React.RefObject<Element>) => {
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return controls;
};

export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};