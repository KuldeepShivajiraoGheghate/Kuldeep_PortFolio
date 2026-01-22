import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-400/30 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: 'left' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
