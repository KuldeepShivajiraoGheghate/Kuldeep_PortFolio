import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming', skills: resumeData.skills.programming, color: 'cyan' },
    { title: 'Core CS', skills: resumeData.skills.coreCS, color: 'violet' },
    { title: 'Data', skills: resumeData.skills.data, color: 'blue' },
    { title: 'AI & Emerging Tech', skills: resumeData.skills.aiEmerging, color: 'purple' },
    { title: 'Tools', skills: resumeData.skills.tools, color: 'teal' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-[#0B1026]/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <Badge
                      className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-gray-200 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/30 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
