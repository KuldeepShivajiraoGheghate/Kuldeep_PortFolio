import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent } from './ui/card';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#0B1026]/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {resumeData.personal.summary}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {resumeData.stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
