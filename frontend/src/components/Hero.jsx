import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const typingTexts = ['AI + ML', 'Cloud Computing', 'Blockchain Research', 'Full Stack Development'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 text-lg mb-4"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Kuldeep Gheghate
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              Computer Engineering Undergrad
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 mb-2"
            >
              AI • Cloud • Research
            </motion.div>
            <motion.div
              key={typeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl font-semibold text-cyan-400 mb-8 h-8"
            >
              {typingTexts[typeIndex]}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 shadow-lg shadow-cyan-500/50"
              >
                Explore Projects
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Orbit Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-cyan-400/30 rounded-full blur-xl" />
              </div>
              {/* Orbit Rings */}
              {[1, 2, 3].map((ring, index) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
                  style={{
                    width: `${100 + index * 33}%`,
                    height: `${100 + index * 33}%`,
                    top: `${-index * 16.5}%`,
                    left: `${-index * 16.5}%`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + index * 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
